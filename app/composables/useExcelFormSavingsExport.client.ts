import type { Workbook, Worksheet } from "exceljs";
import type { CategoryForm } from "~/components/savings/NewEnter.vue";
import type { FormModel } from "~/pages/savings/index.vue";

interface ExcelRowData {
  Type: string;
  Nom: string;
  [month: string]: string | number;
}

interface ExcelCellFormula {
  formula: string;
  result: number;
}

interface TotalCategoryParams {
  worksheet: Worksheet;
  enterEndRow: number;
  summaryStartRow: number;
  categoryItems: ExcelRowData[];
  categoryType: CategoryForm;
}

export const useExcelFormSavingsExport = ({
  form,
  months,
  savings,
}: {
  form: FormModel;
  months: string[];
  savings: number[];
}) => {
  const dataItems = ({
    category,
  }: {
    category: CategoryForm;
  }): ExcelRowData[] => {
    const items = form[category]
      .filter((e) => e.name && e.value != null)
      .map((e) => {
        const row: ExcelRowData = {
          Type: category === "enters" ? "Entrée" : "Sortie",
          Nom: e.name!,
        };
        months.forEach((month) => {
          row[month] = e.value!;
        });
        return row;
      });
    return items;
  };

  const totalCategory = ({
    worksheet,
    enterEndRow,
    summaryStartRow,
    categoryItems,
    categoryType,
  }: TotalCategoryParams): void => {
    const colLetter = String.fromCharCode(67);
    const enterRange = `${colLetter}2:${colLetter}${enterEndRow}`;
    const summaryRow = worksheet.getRow(summaryStartRow);
    summaryRow.getCell(1).value =
      `Total ${categoryType === "enters" ? "Entrées" : "Sorties"}`;
    summaryRow.getCell(3).value = {
      formula: `SUM(${enterRange})`,
      result: categoryItems.reduce(
        (sum, item) => sum + (item[months[0]] as number),
        0
      ),
    } as ExcelCellFormula;
  };

  const exportFormToExcel = async () => {
    if (!process.client) {
      console.warn("Excel export is only available on the client side");
      return;
    }

    try {
      const [ExcelJS, fileSaver] = await Promise.all([
        import("exceljs"),
        import("file-saver"),
      ]);

      const workbook: Workbook = new ExcelJS.default.Workbook();
      const worksheet: Worksheet = workbook.addWorksheet("Budget");

      worksheet.columns = [
        { header: "Type", key: "Type", width: 15 },
        { header: "Nom", key: "Nom", width: 30 },
        ...months.map((month) => ({ header: month, key: month, width: 18 })),
      ];

      const enters = dataItems({ category: "enters" });
      const exits = dataItems({ category: "exits" });

      const data: ExcelRowData[] = [...enters, ...exits];
      worksheet.addRows(data);

      const enterEndRow = 1 + enters.length;
      const exitEndRow = 1 + enters.length + exits.length;
      const totalRowIndex = exitEndRow + 1;

      const totalRow: Record<string, string | ExcelCellFormula> = {
        Type: "Total",
        Nom: "Épargne Cumulative",
      };

      months.forEach((month, monthIndex) => {
        const colLetter = String.fromCharCode(67 + monthIndex);
        const enterRange = `${colLetter}2:${colLetter}${enterEndRow}`;
        const exitRange = `${colLetter}${enterEndRow + 1}:${colLetter}${exitEndRow}`;

        let formula: string;
        let result: number;
        if (monthIndex === 0) {
          formula = `SUM(${enterRange})-SUM(${exitRange})`;
          result = savings[monthIndex];
        } else {
          const prevColLetter = String.fromCharCode(67 + monthIndex - 1);
          formula = `SUM(${enterRange})-SUM(${exitRange})+${prevColLetter}${totalRowIndex}`;
          result = savings[monthIndex] + (savings[monthIndex - 1] || 0);
        }
        totalRow[month] = {
          formula,
          result,
        } as ExcelCellFormula;
      });
      worksheet.addRow(totalRow);
      worksheet.addRow([]);
      const summaryStartRow = totalRowIndex + 2;

      totalCategory({
        worksheet,
        enterEndRow,
        summaryStartRow,
        categoryItems: enters,
        categoryType: "enters",
      });
      totalCategory({
        worksheet,
        enterEndRow: enterEndRow + 1,
        summaryStartRow: summaryStartRow + 1,
        categoryItems: exits,
        categoryType: "exits",
      });
      const colLetterRange = String.fromCharCode(67);
      const enterRange = `${colLetterRange}2:${colLetterRange}${enterEndRow}`;
      const exitRange = `${colLetterRange}${enterEndRow + 1}:${colLetterRange}${exitEndRow}`;
      const summaryRowRange = worksheet.getRow(summaryStartRow + 2);
      summaryRowRange.getCell(1).value = "Épargne Mensuelle";
      summaryRowRange.getCell(3).value = {
        formula: `SUM(${enterRange})-SUM(${exitRange})`,
        result: savings[0],
      } as ExcelCellFormula;

      const headerRow = worksheet.getRow(1);
      headerRow.font = { bold: true, size: 12 };
      headerRow.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFD3D3D3" },
      };
      headerRow.alignment = { horizontal: "center", vertical: "middle" };

      for (let i = 2; i <= enterEndRow; i++) {
        const row = worksheet.getRow(i);
        row.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FFE8F5E8" },
        };
        row.getCell(1).font = { bold: true };
      }

      for (let i = enterEndRow + 1; i <= exitEndRow; i++) {
        const row = worksheet.getRow(i);
        row.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FFFCE8E8" },
        };
        row.getCell(1).font = { bold: true };
      }

      const totalRowStyle = worksheet.getRow(totalRowIndex);
      totalRowStyle.font = { bold: true, size: 12 };
      totalRowStyle.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFFFF2CC" },
      };

      for (let i = summaryStartRow; i <= summaryStartRow + 2; i++) {
        const row = worksheet.getRow(i);
        row.getCell(1).font = { bold: true };
        row.getCell(2).font = { bold: true };
      }

      const totalCols = 2 + months.length;
      const totalRows = summaryStartRow + 2;

      for (let rowIndex = 2; rowIndex <= totalRows; rowIndex++) {
        for (let colIndex = 3; colIndex <= totalCols; colIndex++) {
          const cell = worksheet.getCell(rowIndex, colIndex);
          cell.numFmt = "#,##0.00";
          cell.alignment = { horizontal: "right" };
        }
      }

      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      fileSaver.saveAs(blob, "budget-avec-formules.xlsx");
    } catch (error) {
      console.error("Error exporting to Excel:", error);
    }
  };

  return { exportFormToExcel };
};
