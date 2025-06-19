import ExpenseView from "@/views/space/id/expense/ExpenseView.vue"
import IndexExpense from "@/views/space/id/expense/IndexExpense.vue"
import NewExpenseView from "@/views/space/id/expense/NewExpenseView.vue"

export default [
  {
    path: "expense",
    component: IndexExpense,
    props: true,
    children: [
      {
        path: ":id",
        name: "expense",
        component: ExpenseView,
        props: true,
        children: [
          {
            path: "edit",
            name: "edit_expense",
            component: NewExpenseView,
            props: true,
          },
        ],
      },
      {
        path: "new",
        name: "new_expense",
        component: NewExpenseView,
        props: true,
      },
    ],
  },
]
