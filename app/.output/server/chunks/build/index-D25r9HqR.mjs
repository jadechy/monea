import { cn } from '@primeuix/utils';
import { setAttribute, find, getOuterWidth, removeClass, getOffset, getOuterHeight, addClass, getAttribute, getIndex, getHiddenElementOuterWidth, getHiddenElementOuterHeight, isRTL, addStyle, exportCSV, focus, findSingle, clearSelection, isClickable, getNextElementSibling, getPreviousElementSibling, getFirstFocusableElement, isTouchDevice, absolutePosition, invokeElementMethod } from '@primeuix/utils/dom';
import { isEmpty, isNotEmpty, resolveFieldData, reorderArray, equals, findIndexInList, localeComparator, sort } from '@primeuix/utils/object';
import { B as BaseStyle, q as FilterMatchMode, F as FilterService, s as FilterOperator } from './server.mjs';
import { g as getVNodeProp, _ as _default, C as ConnectedOverlayScrollHandler } from './index-UnQD5FIJ.mjs';
import { s as script$m } from './index-BLn-pl6M.mjs';
import { mergeProps, createElementBlock, openBlock, createElementVNode, resolveComponent, createBlock, withCtx, createCommentVNode, resolveDynamicComponent, normalizeClass, resolveDirective, withDirectives, Fragment, withModifiers, createTextVNode, toDisplayString, renderList, createVNode, Transition, withKeys, normalizeProps, renderSlot, createSlots } from 'vue';
import { s as script$l } from './index-C1vnj6fg.mjs';
import script$C from './index-DuISXDP8.mjs';
import script$n from './index-CXivEcTV.mjs';
import { s as script$o } from './index-f6-L4oOs.mjs';
import { style } from '@primeuix/styles/datatable';
import { s as script$q } from './index-CMv313tU.mjs';
import { s as script$p } from './index--ctLNnjM.mjs';
import { s as script$t } from './index-C2I_OjJ-.mjs';
import { s as script$s } from './index-CgJu4NhB.mjs';
import { s as script$r } from './index-C319vlSQ.mjs';
import script$u from './index-IJ23DGgI.mjs';
import { O as OverlayEventBus } from './index-rAVNvoJo.mjs';
import { R as Ripple } from './index-2dA4pXcI.mjs';
import script$v from './index-D5JWdyeG.mjs';
import script$w from './index-C7QJcRv6.mjs';
import { ZIndex } from '@primeuix/utils/zindex';
import { s as script$x } from './index-hU8V0OJN.mjs';
import { F as FocusTrap } from './index-De0dg7Ws.mjs';
import { s as script$y } from './index-D21vFaAL.mjs';
import script$z from './index-CBQOMMAL.mjs';
import { s as script$1$1, a as script$A, b as script$2$1 } from './index-DRDCAMoq.mjs';
import script$B from './index-ik-SlIj1.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/button';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/badge';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import 'node:url';
import 'ipx';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import '@tanstack/vue-query';
import 'zod';
import 'vue/server-renderer';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './index-BSFy_PfY.mjs';
import './index-vLeze0-z.mjs';
import './index-C22mFOlN.mjs';
import './index-D7Tr7C_Z.mjs';
import './index-D45wcmtf.mjs';
import './index-HVZBZE_C.mjs';
import './index-_YLQpnfS.mjs';
import './index-DbtuAreI.mjs';
import './index-DpRrGZTR.mjs';
import '@primeuix/utils/uuid';
import './index-6fx3juzz.mjs';
import './index-CjtQe7dy.mjs';
import './index-C21YqD03.mjs';
import './index-4P6kumGy.mjs';
import './index-B5Idjp61.mjs';

var script$k = {
  name: "ArrowDownIcon",
  "extends": script$m
};
function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6.99994 14C6.91097 14.0004 6.82281 13.983 6.74064 13.9489C6.65843 13.9148 6.58387 13.8646 6.52133 13.8013L1.10198 8.38193C0.982318 8.25351 0.917175 8.08367 0.920272 7.90817C0.923368 7.73267 0.994462 7.56523 1.11858 7.44111C1.24269 7.317 1.41014 7.2459 1.58563 7.2428C1.76113 7.23971 1.93098 7.30485 2.0594 7.42451L6.32263 11.6877V0.677419C6.32263 0.497756 6.394 0.325452 6.52104 0.198411C6.64808 0.0713706 6.82039 0 7.00005 0C7.17971 0 7.35202 0.0713706 7.47906 0.198411C7.6061 0.325452 7.67747 0.497756 7.67747 0.677419V11.6877L11.9407 7.42451C12.0691 7.30485 12.2389 7.23971 12.4144 7.2428C12.5899 7.2459 12.7574 7.317 12.8815 7.44111C13.0056 7.56523 13.0767 7.73267 13.0798 7.90817C13.0829 8.08367 13.0178 8.25351 12.8981 8.38193L7.47875 13.8013C7.41621 13.8646 7.34164 13.9148 7.25944 13.9489C7.17727 13.983 7.08912 14.0004 7.00015 14C7.00012 14 7.00009 14 7.00005 14C7.00001 14 6.99998 14 6.99994 14Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$k.render = render$j;
var script$j = {
  name: "ArrowUpIcon",
  "extends": script$m
};
function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6.51551 13.799C6.64205 13.9255 6.813 13.9977 6.99193 14C7.17087 13.9977 7.34182 13.9255 7.46835 13.799C7.59489 13.6725 7.66701 13.5015 7.66935 13.3226V2.31233L11.9326 6.57554C11.9951 6.63887 12.0697 6.68907 12.1519 6.72319C12.2341 6.75731 12.3223 6.77467 12.4113 6.77425C12.5003 6.77467 12.5885 6.75731 12.6707 6.72319C12.7529 6.68907 12.8274 6.63887 12.89 6.57554C13.0168 6.44853 13.0881 6.27635 13.0881 6.09683C13.0881 5.91732 13.0168 5.74514 12.89 5.61812L7.48846 0.216594C7.48274 0.210436 7.4769 0.204374 7.47094 0.198411C7.3439 0.0713707 7.1716 0 6.99193 0C6.81227 0 6.63997 0.0713707 6.51293 0.198411C6.50704 0.204296 6.50128 0.210278 6.49563 0.216354L1.09386 5.61812C0.974201 5.74654 0.909057 5.91639 0.912154 6.09189C0.91525 6.26738 0.986345 6.43483 1.11046 6.55894C1.23457 6.68306 1.40202 6.75415 1.57752 6.75725C1.75302 6.76035 1.92286 6.6952 2.05128 6.57554L6.31451 2.31231V13.3226C6.31685 13.5015 6.38898 13.6725 6.51551 13.799Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$j.render = render$i;
var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-datatable p-component", {
      "p-datatable-hoverable": props.rowHover || props.selectionMode,
      "p-datatable-resizable": props.resizableColumns,
      "p-datatable-resizable-fit": props.resizableColumns && props.columnResizeMode === "fit",
      "p-datatable-scrollable": props.scrollable,
      "p-datatable-flex-scrollable": props.scrollable && props.scrollHeight === "flex",
      "p-datatable-striped": props.stripedRows,
      "p-datatable-gridlines": props.showGridlines,
      "p-datatable-sm": props.size === "small",
      "p-datatable-lg": props.size === "large"
    }];
  },
  mask: "p-datatable-mask p-overlay-mask",
  loadingIcon: "p-datatable-loading-icon",
  header: "p-datatable-header",
  pcPaginator: function pcPaginator(_ref2) {
    var position = _ref2.position;
    return "p-datatable-paginator-" + position;
  },
  tableContainer: "p-datatable-table-container",
  table: function table(_ref3) {
    var props = _ref3.props;
    return ["p-datatable-table", {
      "p-datatable-scrollable-table": props.scrollable,
      "p-datatable-resizable-table": props.resizableColumns,
      "p-datatable-resizable-table-fit": props.resizableColumns && props.columnResizeMode === "fit"
    }];
  },
  thead: "p-datatable-thead",
  headerCell: function headerCell(_ref4) {
    var instance = _ref4.instance, props = _ref4.props, column = _ref4.column;
    return column && !instance.columnProp("hidden") && (props.rowGroupMode !== "subheader" || props.groupRowsBy !== instance.columnProp(column, "field")) ? ["p-datatable-header-cell", {
      "p-datatable-frozen-column": instance.columnProp("frozen")
    }] : ["p-datatable-header-cell", {
      "p-datatable-sortable-column": instance.columnProp("sortable"),
      "p-datatable-resizable-column": instance.resizableColumns,
      "p-datatable-column-sorted": instance.isColumnSorted(),
      "p-datatable-frozen-column": instance.columnProp("frozen"),
      "p-datatable-reorderable-column": props.reorderableColumns
    }];
  },
  columnResizer: "p-datatable-column-resizer",
  columnHeaderContent: "p-datatable-column-header-content",
  columnTitle: "p-datatable-column-title",
  columnFooter: "p-datatable-column-footer",
  sortIcon: "p-datatable-sort-icon",
  pcSortBadge: "p-datatable-sort-badge",
  filter: function filter(_ref5) {
    var props = _ref5.props;
    return ["p-datatable-filter", {
      "p-datatable-inline-filter": props.display === "row",
      "p-datatable-popover-filter": props.display === "menu"
    }];
  },
  filterElementContainer: "p-datatable-filter-element-container",
  pcColumnFilterButton: "p-datatable-column-filter-button",
  pcColumnFilterClearButton: "p-datatable-column-filter-clear-button",
  filterOverlay: function filterOverlay(_ref6) {
    var props = _ref6.props;
    return ["p-datatable-filter-overlay p-component", {
      "p-datatable-filter-overlay-popover": props.display === "menu"
    }];
  },
  filterConstraintList: "p-datatable-filter-constraint-list",
  filterConstraint: function filterConstraint(_ref7) {
    var instance = _ref7.instance, matchMode = _ref7.matchMode;
    return ["p-datatable-filter-constraint", {
      "p-datatable-filter-constraint-selected": matchMode && instance.isRowMatchModeSelected(matchMode.value)
    }];
  },
  filterConstraintSeparator: "p-datatable-filter-constraint-separator",
  filterOperator: "p-datatable-filter-operator",
  pcFilterOperatorDropdown: "p-datatable-filter-operator-dropdown",
  filterRuleList: "p-datatable-filter-rule-list",
  filterRule: "p-datatable-filter-rule",
  pcFilterConstraintDropdown: "p-datatable-filter-constraint-dropdown",
  pcFilterRemoveRuleButton: "p-datatable-filter-remove-rule-button",
  pcFilterAddRuleButton: "p-datatable-filter-add-rule-button",
  filterButtonbar: "p-datatable-filter-buttonbar",
  pcFilterClearButton: "p-datatable-filter-clear-button",
  pcFilterApplyButton: "p-datatable-filter-apply-button",
  tbody: function tbody(_ref8) {
    var props = _ref8.props;
    return props.frozenRow ? "p-datatable-tbody p-datatable-frozen-tbody" : "p-datatable-tbody";
  },
  rowGroupHeader: "p-datatable-row-group-header",
  rowToggleButton: "p-datatable-row-toggle-button",
  rowToggleIcon: "p-datatable-row-toggle-icon",
  row: function row(_ref9) {
    var instance = _ref9.instance, props = _ref9.props, index = _ref9.index, columnSelectionMode = _ref9.columnSelectionMode;
    var rowStyleClass = [];
    if (props.selectionMode) {
      rowStyleClass.push("p-datatable-selectable-row");
    }
    if (props.selection) {
      rowStyleClass.push({
        "p-datatable-row-selected": columnSelectionMode ? instance.isSelected && instance.$parentInstance.$parentInstance.highlightOnSelect : instance.isSelected
      });
    }
    if (props.contextMenuSelection) {
      rowStyleClass.push({
        "p-datatable-contextmenu-row-selected": instance.isSelectedWithContextMenu
      });
    }
    rowStyleClass.push(index % 2 === 0 ? "p-row-even" : "p-row-odd");
    return rowStyleClass;
  },
  rowExpansion: "p-datatable-row-expansion",
  rowGroupFooter: "p-datatable-row-group-footer",
  emptyMessage: "p-datatable-empty-message",
  bodyCell: function bodyCell(_ref0) {
    var instance = _ref0.instance;
    return [{
      "p-datatable-frozen-column": instance.columnProp("frozen")
    }];
  },
  reorderableRowHandle: "p-datatable-reorderable-row-handle",
  pcRowEditorInit: "p-datatable-row-editor-init",
  pcRowEditorSave: "p-datatable-row-editor-save",
  pcRowEditorCancel: "p-datatable-row-editor-cancel",
  tfoot: "p-datatable-tfoot",
  footerCell: function footerCell(_ref1) {
    var instance = _ref1.instance;
    return [{
      "p-datatable-frozen-column": instance.columnProp("frozen")
    }];
  },
  virtualScrollerSpacer: "p-datatable-virtualscroller-spacer",
  footer: "p-datatable-footer",
  columnResizeIndicator: "p-datatable-column-resize-indicator",
  rowReorderIndicatorUp: "p-datatable-row-reorder-indicator-up",
  rowReorderIndicatorDown: "p-datatable-row-reorder-indicator-down"
};
var inlineStyles = {
  tableContainer: {
    overflow: "auto"
  },
  thead: {
    position: "sticky"
  },
  tfoot: {
    position: "sticky"
  }
};
var DataTableStyle = BaseStyle.extend({
  name: "datatable",
  style,
  classes,
  inlineStyles
});
var script$i = {
  name: "PencilIcon",
  "extends": script$m
};
function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createElementVNode("path", {
    d: "M0.609628 13.959C0.530658 13.9599 0.452305 13.9451 0.379077 13.9156C0.305849 13.8861 0.239191 13.8424 0.18294 13.787C0.118447 13.7234 0.0688234 13.6464 0.0376166 13.5614C0.00640987 13.4765 -0.00560954 13.3857 0.00241768 13.2956L0.25679 10.1501C0.267698 10.0041 0.331934 9.86709 0.437312 9.76516L9.51265 0.705715C10.0183 0.233014 10.6911 -0.0203041 11.3835 0.00127367C12.0714 0.00660201 12.7315 0.27311 13.2298 0.746671C13.7076 1.23651 13.9824 1.88848 13.9992 2.57201C14.0159 3.25554 13.7733 3.92015 13.32 4.4327L4.23648 13.5331C4.13482 13.6342 4.0017 13.6978 3.85903 13.7133L0.667067 14L0.609628 13.959ZM1.43018 10.4696L1.25787 12.714L3.50619 12.5092L12.4502 3.56444C12.6246 3.35841 12.7361 3.10674 12.7714 2.83933C12.8067 2.57193 12.7644 2.30002 12.6495 2.05591C12.5346 1.8118 12.3519 1.60575 12.1231 1.46224C11.8943 1.31873 11.6291 1.2438 11.3589 1.24633C11.1813 1.23508 11.0033 1.25975 10.8355 1.31887C10.6677 1.37798 10.5136 1.47033 10.3824 1.59036L1.43018 10.4696Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$i.render = render$h;
var script$h = {
  name: "FilterIcon",
  "extends": script$m
};
function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createElementVNode("path", {
    d: "M8.64708 14H5.35296C5.18981 13.9979 5.03395 13.9321 4.91858 13.8167C4.8032 13.7014 4.73745 13.5455 4.73531 13.3824V7L0.329431 0.98C0.259794 0.889466 0.217389 0.780968 0.20718 0.667208C0.19697 0.553448 0.219379 0.439133 0.271783 0.337647C0.324282 0.236453 0.403423 0.151519 0.500663 0.0920138C0.597903 0.0325088 0.709548 0.000692754 0.823548 0H13.1765C13.2905 0.000692754 13.4021 0.0325088 13.4994 0.0920138C13.5966 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7826 0.780968 13.7402 0.889466 13.6706 0.98L9.26472 7V13.3824C9.26259 13.5455 9.19683 13.7014 9.08146 13.8167C8.96609 13.9321 8.81022 13.9979 8.64708 14ZM5.97061 12.7647H8.02943V6.79412C8.02878 6.66289 8.07229 6.53527 8.15296 6.43177L11.9412 1.23529H2.05884L5.86355 6.43177C5.94422 6.53527 5.98773 6.66289 5.98708 6.79412L5.97061 12.7647Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$h.render = render$g;
var script$g = {
  name: "FilterFillIcon",
  "extends": script$m
};
function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createElementVNode("path", {
    d: "M13.7274 0.33847C13.6228 0.130941 13.4095 0 13.1764 0H0.82351C0.590451 0 0.377157 0.130941 0.272568 0.33847C0.167157 0.545999 0.187746 0.795529 0.325275 0.98247L4.73527 6.99588V13.3824C4.73527 13.7233 5.01198 14 5.35292 14H8.64704C8.98798 14 9.26469 13.7233 9.26469 13.3824V6.99588L13.6747 0.98247C13.8122 0.795529 13.8328 0.545999 13.7274 0.33847Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$g.render = render$f;
var script$f = {
  name: "FilterSlashIcon",
  "extends": script$m
};
function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M13.4994 0.0920138C13.5967 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7827 0.780968 13.7403 0.889466 13.6707 0.98L11.406 4.06823C11.3099 4.19928 11.1656 4.28679 11.005 4.3115C10.8444 4.33621 10.6805 4.2961 10.5495 4.2C10.4184 4.1039 10.3309 3.95967 10.3062 3.79905C10.2815 3.63843 10.3216 3.47458 10.4177 3.34353L11.9412 1.23529H7.41184C7.24803 1.23529 7.09093 1.17022 6.97509 1.05439C6.85926 0.938558 6.79419 0.781457 6.79419 0.617647C6.79419 0.453837 6.85926 0.296736 6.97509 0.180905C7.09093 0.0650733 7.24803 0 7.41184 0H13.1765C13.2905 0.000692754 13.4022 0.0325088 13.4994 0.0920138ZM4.20008 0.181168H4.24126L13.2013 9.03411C13.3169 9.14992 13.3819 9.3069 13.3819 9.47058C13.3819 9.63426 13.3169 9.79124 13.2013 9.90705C13.1445 9.96517 13.0766 10.0112 13.0016 10.0423C12.9266 10.0735 12.846 10.0891 12.7648 10.0882C12.6836 10.0886 12.6032 10.0728 12.5283 10.0417C12.4533 10.0106 12.3853 9.96479 12.3283 9.90705L9.3142 6.92587L9.26479 6.99999V13.3823C9.26265 13.5455 9.19689 13.7014 9.08152 13.8167C8.96615 13.9321 8.81029 13.9979 8.64714 14H5.35302C5.18987 13.9979 5.03401 13.9321 4.91864 13.8167C4.80327 13.7014 4.73751 13.5455 4.73537 13.3823V6.99999L0.329492 1.02117C0.259855 0.930634 0.21745 0.822137 0.207241 0.708376C0.197031 0.594616 0.21944 0.480301 0.271844 0.378815C0.324343 0.277621 0.403484 0.192687 0.500724 0.133182C0.597964 0.073677 0.709609 0.041861 0.823609 0.0411682H3.86243C3.92448 0.0461551 3.9855 0.060022 4.04361 0.0823446C4.10037 0.10735 4.15311 0.140655 4.20008 0.181168ZM8.02949 6.79411C8.02884 6.66289 8.07235 6.53526 8.15302 6.43176L8.42478 6.05293L3.55773 1.23529H2.0589L5.84714 6.43176C5.92781 6.53526 5.97132 6.66289 5.97067 6.79411V12.7647H8.02949V6.79411Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$f.render = render$e;
var script$e = {
  name: "TrashIcon",
  "extends": script$m
};
function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", mergeProps({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _ctx.pti()), _cache[0] || (_cache[0] = [createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M3.44802 13.9955H10.552C10.8056 14.0129 11.06 13.9797 11.3006 13.898C11.5412 13.8163 11.7632 13.6877 11.9537 13.5196C12.1442 13.3515 12.2995 13.1473 12.4104 12.9188C12.5213 12.6903 12.5858 12.442 12.6 12.1884V4.36041H13.4C13.5591 4.36041 13.7117 4.29722 13.8243 4.18476C13.9368 4.07229 14 3.91976 14 3.76071C14 3.60166 13.9368 3.44912 13.8243 3.33666C13.7117 3.22419 13.5591 3.16101 13.4 3.16101H12.0537C12.0203 3.1557 11.9863 3.15299 11.952 3.15299C11.9178 3.15299 11.8838 3.1557 11.8503 3.16101H11.2285C11.2421 3.10893 11.2487 3.05513 11.248 3.00106V1.80966C11.2171 1.30262 10.9871 0.828306 10.608 0.48989C10.229 0.151475 9.73159 -0.0236625 9.22402 0.00257442H4.77602C4.27251 -0.0171866 3.78126 0.160868 3.40746 0.498617C3.03365 0.836366 2.807 1.30697 2.77602 1.80966V3.00106C2.77602 3.0556 2.78346 3.10936 2.79776 3.16101H0.6C0.521207 3.16101 0.443185 3.17652 0.37039 3.20666C0.297595 3.2368 0.231451 3.28097 0.175736 3.33666C0.120021 3.39235 0.0758251 3.45846 0.0456722 3.53121C0.0155194 3.60397 0 3.68196 0 3.76071C0 3.83946 0.0155194 3.91744 0.0456722 3.9902C0.0758251 4.06296 0.120021 4.12907 0.175736 4.18476C0.231451 4.24045 0.297595 4.28462 0.37039 4.31476C0.443185 4.3449 0.521207 4.36041 0.6 4.36041H1.40002V12.1884C1.41426 12.442 1.47871 12.6903 1.58965 12.9188C1.7006 13.1473 1.85582 13.3515 2.04633 13.5196C2.23683 13.6877 2.45882 13.8163 2.69944 13.898C2.94005 13.9797 3.1945 14.0129 3.44802 13.9955ZM2.60002 4.36041H11.304V12.1884C11.304 12.5163 10.952 12.7961 10.504 12.7961H3.40002C2.97602 12.7961 2.60002 12.5163 2.60002 12.1884V4.36041ZM3.95429 3.16101C3.96859 3.10936 3.97602 3.0556 3.97602 3.00106V1.80966C3.97602 1.48183 4.33602 1.20197 4.77602 1.20197H9.24802C9.66403 1.20197 10.048 1.48183 10.048 1.80966V3.00106C10.0473 3.05515 10.054 3.10896 10.0678 3.16101H3.95429ZM5.57571 10.997C5.41731 10.995 5.26597 10.9311 5.15395 10.8191C5.04193 10.7071 4.97808 10.5558 4.97601 10.3973V6.77517C4.97601 6.61612 5.0392 6.46359 5.15166 6.35112C5.26413 6.23866 5.41666 6.17548 5.57571 6.17548C5.73476 6.17548 5.8873 6.23866 5.99976 6.35112C6.11223 6.46359 6.17541 6.61612 6.17541 6.77517V10.3894C6.17647 10.4688 6.16174 10.5476 6.13208 10.6213C6.10241 10.695 6.05841 10.762 6.00261 10.8186C5.94682 10.8751 5.88035 10.92 5.80707 10.9506C5.73378 10.9813 5.65514 10.9971 5.57571 10.997ZM7.99968 10.8214C8.11215 10.9339 8.26468 10.997 8.42373 10.997C8.58351 10.9949 8.73604 10.93 8.84828 10.8163C8.96052 10.7025 9.02345 10.5491 9.02343 10.3894V6.77517C9.02343 6.61612 8.96025 6.46359 8.84778 6.35112C8.73532 6.23866 8.58278 6.17548 8.42373 6.17548C8.26468 6.17548 8.11215 6.23866 7.99968 6.35112C7.88722 6.46359 7.82404 6.61612 7.82404 6.77517V10.3973C7.82404 10.5564 7.88722 10.7089 7.99968 10.8214Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
script$e.render = render$d;
var script$d = {
  name: "BaseDataTable",
  "extends": script$o,
  props: {
    value: {
      type: Array,
      "default": null
    },
    dataKey: {
      type: [String, Function],
      "default": null
    },
    rows: {
      type: Number,
      "default": 0
    },
    first: {
      type: Number,
      "default": 0
    },
    totalRecords: {
      type: Number,
      "default": 0
    },
    paginator: {
      type: Boolean,
      "default": false
    },
    paginatorPosition: {
      type: String,
      "default": "bottom"
    },
    alwaysShowPaginator: {
      type: Boolean,
      "default": true
    },
    paginatorTemplate: {
      type: [Object, String],
      "default": "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    },
    pageLinkSize: {
      type: Number,
      "default": 5
    },
    rowsPerPageOptions: {
      type: Array,
      "default": null
    },
    currentPageReportTemplate: {
      type: String,
      "default": "({currentPage} of {totalPages})"
    },
    lazy: {
      type: Boolean,
      "default": false
    },
    loading: {
      type: Boolean,
      "default": false
    },
    loadingIcon: {
      type: String,
      "default": void 0
    },
    sortField: {
      type: [String, Function],
      "default": null
    },
    sortOrder: {
      type: Number,
      "default": null
    },
    defaultSortOrder: {
      type: Number,
      "default": 1
    },
    nullSortOrder: {
      type: Number,
      "default": 1
    },
    multiSortMeta: {
      type: Array,
      "default": null
    },
    sortMode: {
      type: String,
      "default": "single"
    },
    removableSort: {
      type: Boolean,
      "default": false
    },
    filters: {
      type: Object,
      "default": null
    },
    filterDisplay: {
      type: String,
      "default": null
    },
    globalFilterFields: {
      type: Array,
      "default": null
    },
    filterLocale: {
      type: String,
      "default": void 0
    },
    selection: {
      type: [Array, Object],
      "default": null
    },
    selectionMode: {
      type: String,
      "default": null
    },
    compareSelectionBy: {
      type: String,
      "default": "deepEquals"
    },
    metaKeySelection: {
      type: Boolean,
      "default": false
    },
    contextMenu: {
      type: Boolean,
      "default": false
    },
    contextMenuSelection: {
      type: Object,
      "default": null
    },
    selectAll: {
      type: Boolean,
      "default": null
    },
    rowHover: {
      type: Boolean,
      "default": false
    },
    csvSeparator: {
      type: String,
      "default": ","
    },
    exportFilename: {
      type: String,
      "default": "download"
    },
    exportFunction: {
      type: Function,
      "default": null
    },
    resizableColumns: {
      type: Boolean,
      "default": false
    },
    columnResizeMode: {
      type: String,
      "default": "fit"
    },
    reorderableColumns: {
      type: Boolean,
      "default": false
    },
    expandedRows: {
      type: [Array, Object],
      "default": null
    },
    expandedRowIcon: {
      type: String,
      "default": void 0
    },
    collapsedRowIcon: {
      type: String,
      "default": void 0
    },
    rowGroupMode: {
      type: String,
      "default": null
    },
    groupRowsBy: {
      type: [Array, String, Function],
      "default": null
    },
    expandableRowGroups: {
      type: Boolean,
      "default": false
    },
    expandedRowGroups: {
      type: Array,
      "default": null
    },
    stateStorage: {
      type: String,
      "default": "session"
    },
    stateKey: {
      type: String,
      "default": null
    },
    editMode: {
      type: String,
      "default": null
    },
    editingRows: {
      type: Array,
      "default": null
    },
    rowClass: {
      type: Function,
      "default": null
    },
    rowStyle: {
      type: Function,
      "default": null
    },
    scrollable: {
      type: Boolean,
      "default": false
    },
    virtualScrollerOptions: {
      type: Object,
      "default": null
    },
    scrollHeight: {
      type: String,
      "default": null
    },
    frozenValue: {
      type: Array,
      "default": null
    },
    breakpoint: {
      type: String,
      "default": "960px"
    },
    showHeaders: {
      type: Boolean,
      "default": true
    },
    showGridlines: {
      type: Boolean,
      "default": false
    },
    stripedRows: {
      type: Boolean,
      "default": false
    },
    highlightOnSelect: {
      type: Boolean,
      "default": false
    },
    size: {
      type: String,
      "default": null
    },
    tableStyle: {
      type: null,
      "default": null
    },
    tableClass: {
      type: [String, Object],
      "default": null
    },
    tableProps: {
      type: Object,
      "default": null
    },
    filterInputProps: {
      type: null,
      "default": null
    },
    filterButtonProps: {
      type: Object,
      "default": function _default2() {
        return {
          filter: {
            severity: "secondary",
            text: true,
            rounded: true
          },
          inline: {
            clear: {
              severity: "secondary",
              text: true,
              rounded: true
            }
          },
          popover: {
            addRule: {
              severity: "info",
              text: true,
              size: "small"
            },
            removeRule: {
              severity: "danger",
              text: true,
              size: "small"
            },
            apply: {
              size: "small"
            },
            clear: {
              outlined: true,
              size: "small"
            }
          }
        };
      }
    },
    editButtonProps: {
      type: Object,
      "default": function _default22() {
        return {
          init: {
            severity: "secondary",
            text: true,
            rounded: true
          },
          save: {
            severity: "secondary",
            text: true,
            rounded: true
          },
          cancel: {
            severity: "secondary",
            text: true,
            rounded: true
          }
        };
      }
    }
  },
  style: DataTableStyle,
  provide: function provide() {
    return {
      $pcDataTable: this,
      $parentInstance: this
    };
  }
};
var script$c = {
  name: "RowCheckbox",
  hostName: "DataTable",
  "extends": script$o,
  emits: ["change"],
  props: {
    value: null,
    checked: null,
    column: null,
    rowCheckboxIconTemplate: {
      type: Function,
      "default": null
    },
    index: {
      type: Number,
      "default": null
    }
  },
  methods: {
    getColumnPT: function getColumnPT(key) {
      var columnMetaData = {
        props: this.column.props,
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index: this.index,
          checked: this.checked,
          disabled: this.$attrs.disabled
        }
      };
      return mergeProps(this.ptm("column.".concat(key), {
        column: columnMetaData
      }), this.ptm("column.".concat(key), columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
    },
    getColumnProp: function getColumnProp() {
      return this.column.props && this.column.props.pt ? this.column.props.pt : void 0;
    },
    onChange: function onChange(event) {
      if (!this.$attrs.disabled) {
        this.$emit("change", {
          originalEvent: event,
          data: this.value
        });
      }
    }
  },
  computed: {
    checkboxAriaLabel: function checkboxAriaLabel() {
      return this.$primevue.config.locale.aria ? this.checked ? this.$primevue.config.locale.aria.selectRow : this.$primevue.config.locale.aria.unselectRow : void 0;
    }
  },
  components: {
    CheckIcon: script$s,
    Checkbox: script$v
  }
};
function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CheckIcon = resolveComponent("CheckIcon");
  var _component_Checkbox = resolveComponent("Checkbox");
  return openBlock(), createBlock(_component_Checkbox, {
    modelValue: $props.checked,
    binary: true,
    disabled: _ctx.$attrs.disabled,
    "aria-label": $options.checkboxAriaLabel,
    onChange: $options.onChange,
    unstyled: _ctx.unstyled,
    pt: $options.getColumnPT("pcRowCheckbox")
  }, {
    icon: withCtx(function(slotProps) {
      return [$props.rowCheckboxIconTemplate ? (openBlock(), createBlock(resolveDynamicComponent($props.rowCheckboxIconTemplate), {
        key: 0,
        checked: slotProps.checked,
        "class": normalizeClass(slotProps["class"])
      }, null, 8, ["checked", "class"])) : !$props.rowCheckboxIconTemplate && slotProps.checked ? (openBlock(), createBlock(_component_CheckIcon, mergeProps({
        key: 1,
        "class": slotProps["class"]
      }, $options.getColumnPT("pcRowCheckbox.icon")), null, 16, ["class"])) : createCommentVNode("", true)];
    }),
    _: 1
  }, 8, ["modelValue", "disabled", "aria-label", "onChange", "unstyled", "pt"]);
}
script$c.render = render$c;
var script$b = {
  name: "RowRadioButton",
  hostName: "DataTable",
  "extends": script$o,
  emits: ["change"],
  props: {
    value: null,
    checked: null,
    name: null,
    column: null,
    index: {
      type: Number,
      "default": null
    }
  },
  methods: {
    getColumnPT: function getColumnPT2(key) {
      var columnMetaData = {
        props: this.column.props,
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index: this.index,
          checked: this.checked,
          disabled: this.$attrs.disabled
        }
      };
      return mergeProps(this.ptm("column.".concat(key), {
        column: columnMetaData
      }), this.ptm("column.".concat(key), columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
    },
    getColumnProp: function getColumnProp2() {
      return this.column.props && this.column.props.pt ? this.column.props.pt : void 0;
    },
    onChange: function onChange2(event) {
      if (!this.$attrs.disabled) {
        this.$emit("change", {
          originalEvent: event,
          data: this.value
        });
      }
    }
  },
  components: {
    RadioButton: script$w
  }
};
function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_RadioButton = resolveComponent("RadioButton");
  return openBlock(), createBlock(_component_RadioButton, {
    modelValue: $props.checked,
    binary: true,
    disabled: _ctx.$attrs.disabled,
    name: $props.name,
    onChange: $options.onChange,
    unstyled: _ctx.unstyled,
    pt: $options.getColumnPT("pcRowRadiobutton")
  }, null, 8, ["modelValue", "disabled", "name", "onChange", "unstyled", "pt"]);
}
script$b.render = render$b;
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag";
  function i(r2, n2, o2, i2) {
    var c2 = n2 && n2.prototype instanceof Generator ? n2 : Generator, u2 = Object.create(c2.prototype);
    return _regeneratorDefine2(u2, "_invoke", function(r3, n3, o3) {
      var i3, c3, u3, f2 = 0, p = o3 || [], y = false, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d2(t2, r4) {
        return i3 = t2, c3 = 0, u3 = e, G.n = r4, a;
      } };
      function d(r4, n4) {
        for (c3 = r4, u3 = n4, t = 0; !y && f2 && !o4 && t < p.length; t++) {
          var o4, i4 = p[t], d2 = G.p, l = i4[2];
          r4 > 3 ? (o4 = l === n4) && (u3 = i4[(c3 = i4[4]) ? 5 : (c3 = 3, 3)], i4[4] = i4[5] = e) : i4[0] <= d2 && ((o4 = r4 < 2 && d2 < i4[1]) ? (c3 = 0, G.v = n4, G.n = i4[1]) : d2 < l && (o4 = r4 < 3 || i4[0] > n4 || n4 > l) && (i4[4] = r4, i4[5] = n4, G.n = l, c3 = 0));
        }
        if (o4 || r4 > 1) return a;
        throw y = true, n4;
      }
      return function(o4, p2, l) {
        if (f2 > 1) throw TypeError("Generator is already running");
        for (y && 1 === p2 && d(p2, l), c3 = p2, u3 = l; (t = c3 < 2 ? e : u3) || !y; ) {
          i3 || (c3 ? c3 < 3 ? (c3 > 1 && (G.n = -1), d(c3, u3)) : G.n = u3 : G.v = u3);
          try {
            if (f2 = 2, i3) {
              if (c3 || (o4 = "next"), t = i3[o4]) {
                if (!(t = t.call(i3, u3))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u3 = t.value, c3 < 2 && (c3 = 0);
              } else 1 === c3 && (t = i3["return"]) && t.call(i3), c3 < 2 && (u3 = TypeError("The iterator does not provide a '" + o4 + "' method"), c3 = 1);
              i3 = e;
            } else if ((t = (y = G.n < 0) ? u3 : r3.call(n3, G)) !== a) break;
          } catch (t2) {
            i3 = e, c3 = 1, u3 = t2;
          } finally {
            f2 = 1;
          }
        }
        return { value: t, done: y };
      };
    }(r2, o2, i2), true), u2;
  }
  var a = {};
  function Generator() {
  }
  function GeneratorFunction() {
  }
  function GeneratorFunctionPrototype() {
  }
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function() {
    return this;
  }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e2) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e2, GeneratorFunctionPrototype) : (e2.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e2, o, "GeneratorFunction")), e2.prototype = Object.create(u), e2;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function() {
    return this;
  }), _regeneratorDefine2(u, "toString", function() {
    return "[object Generator]";
  }), (_regenerator = function _regenerator2() {
    return { w: i, m: f };
  })();
}
function _regeneratorDefine2(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e2) {
    i = 0;
  }
  _regeneratorDefine2 = function _regeneratorDefine(e2, r2, n2, t2) {
    if (r2) i ? i(e2, r2, { value: n2, enumerable: !t2, configurable: !t2, writable: !t2 }) : e2[r2] = n2;
    else {
      var o = function o2(r3, n3) {
        _regeneratorDefine2(e2, r3, function(e3) {
          return this._invoke(r3, n3, e3);
        });
      };
      o("next", 0), o("throw", 1), o("return", 2);
    }
  }, _regeneratorDefine2(e, r, n, t);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
var script$a = {
  name: "BodyCell",
  hostName: "DataTable",
  "extends": script$o,
  emits: ["cell-edit-init", "cell-edit-complete", "cell-edit-cancel", "row-edit-init", "row-edit-save", "row-edit-cancel", "row-toggle", "radio-change", "checkbox-change", "editing-meta-change"],
  props: {
    rowData: {
      type: Object,
      "default": null
    },
    column: {
      type: Object,
      "default": null
    },
    frozenRow: {
      type: Boolean,
      "default": false
    },
    rowIndex: {
      type: Number,
      "default": null
    },
    index: {
      type: Number,
      "default": null
    },
    isRowExpanded: {
      type: Boolean,
      "default": false
    },
    selected: {
      type: Boolean,
      "default": false
    },
    editing: {
      type: Boolean,
      "default": false
    },
    editingMeta: {
      type: Object,
      "default": null
    },
    editMode: {
      type: String,
      "default": null
    },
    virtualScrollerContentProps: {
      type: Object,
      "default": null
    },
    ariaControls: {
      type: String,
      "default": null
    },
    name: {
      type: String,
      "default": null
    },
    expandedRowIcon: {
      type: String,
      "default": null
    },
    collapsedRowIcon: {
      type: String,
      "default": null
    },
    editButtonProps: {
      type: Object,
      "default": null
    }
  },
  documentEditListener: null,
  selfClick: false,
  overlayEventListener: null,
  editCompleteTimeout: null,
  data: function data() {
    return {
      d_editing: this.editing,
      styleObject: {}
    };
  },
  watch: {
    editing: function editing(newValue) {
      this.d_editing = newValue;
    },
    "$data.d_editing": function $dataD_editing(newValue) {
      this.$emit("editing-meta-change", {
        data: this.rowData,
        field: this.field || "field_".concat(this.index),
        index: this.rowIndex,
        editing: newValue
      });
    }
  },
  mounted: function mounted() {
    if (this.columnProp("frozen")) {
      this.updateStickyPosition();
    }
  },
  updated: function updated() {
    var _this = this;
    if (this.columnProp("frozen")) {
      this.updateStickyPosition();
    }
    if (this.d_editing && (this.editMode === "cell" || this.editMode === "row" && this.columnProp("rowEditor"))) {
      setTimeout(function() {
        var focusableEl = getFirstFocusableElement(_this.$el);
        focusableEl && focusableEl.focus();
      }, 1);
    }
  },
  beforeUnmount: function beforeUnmount() {
    if (this.overlayEventListener) {
      OverlayEventBus.off("overlay-click", this.overlayEventListener);
      this.overlayEventListener = null;
    }
  },
  methods: {
    columnProp: function columnProp(prop) {
      return getVNodeProp(this.column, prop);
    },
    getColumnPT: function getColumnPT3(key) {
      var _this$$parentInstance, _this$$parentInstance2;
      var columnMetaData = {
        props: this.column.props,
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index: this.index,
          size: (_this$$parentInstance = this.$parentInstance) === null || _this$$parentInstance === void 0 || (_this$$parentInstance = _this$$parentInstance.$parentInstance) === null || _this$$parentInstance === void 0 ? void 0 : _this$$parentInstance.size,
          showGridlines: (_this$$parentInstance2 = this.$parentInstance) === null || _this$$parentInstance2 === void 0 || (_this$$parentInstance2 = _this$$parentInstance2.$parentInstance) === null || _this$$parentInstance2 === void 0 ? void 0 : _this$$parentInstance2.showGridlines
        }
      };
      return mergeProps(this.ptm("column.".concat(key), {
        column: columnMetaData
      }), this.ptm("column.".concat(key), columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
    },
    getColumnProp: function getColumnProp3() {
      return this.column.props && this.column.props.pt ? this.column.props.pt : void 0;
    },
    resolveFieldData: function resolveFieldData$1() {
      return resolveFieldData(this.rowData, this.field);
    },
    toggleRow: function toggleRow(event) {
      this.$emit("row-toggle", {
        originalEvent: event,
        data: this.rowData
      });
    },
    toggleRowWithRadio: function toggleRowWithRadio(event, index) {
      this.$emit("radio-change", {
        originalEvent: event.originalEvent,
        index,
        data: event.data
      });
    },
    toggleRowWithCheckbox: function toggleRowWithCheckbox(event, index) {
      this.$emit("checkbox-change", {
        originalEvent: event.originalEvent,
        index,
        data: event.data
      });
    },
    isEditable: function isEditable() {
      return this.column.children && this.column.children.editor != null;
    },
    bindDocumentEditListener: function bindDocumentEditListener() {
      var _this2 = this;
      if (!this.documentEditListener) {
        this.documentEditListener = function(event) {
          _this2.selfClick = _this2.$el && _this2.$el.contains(event.target);
          if (_this2.editCompleteTimeout) {
            clearTimeout(_this2.editCompleteTimeout);
          }
          if (!_this2.selfClick) {
            _this2.editCompleteTimeout = setTimeout(function() {
              _this2.completeEdit(event, "outside");
            }, 1);
          }
        };
        (void 0).addEventListener("mousedown", this.documentEditListener);
      }
    },
    unbindDocumentEditListener: function unbindDocumentEditListener() {
      if (this.documentEditListener) {
        (void 0).removeEventListener("mousedown", this.documentEditListener);
        this.documentEditListener = null;
        this.selfClick = false;
        if (this.editCompleteTimeout) {
          clearTimeout(this.editCompleteTimeout);
          this.editCompleteTimeout = null;
        }
      }
    },
    switchCellToViewMode: function switchCellToViewMode() {
      this.d_editing = false;
      this.unbindDocumentEditListener();
      OverlayEventBus.off("overlay-click", this.overlayEventListener);
      this.overlayEventListener = null;
    },
    onClick: function onClick(event) {
      var _this3 = this;
      if (this.editMode === "cell" && this.isEditable()) {
        if (!this.d_editing) {
          this.d_editing = true;
          this.bindDocumentEditListener();
          this.$emit("cell-edit-init", {
            originalEvent: event,
            data: this.rowData,
            field: this.field,
            index: this.rowIndex
          });
          this.overlayEventListener = function(e) {
            _this3.selfClick = _this3.$el && _this3.$el.contains(e.target);
          };
          OverlayEventBus.on("overlay-click", this.overlayEventListener);
        }
      }
    },
    completeEdit: function completeEdit(event, type) {
      var completeEvent = {
        originalEvent: event,
        data: this.rowData,
        newData: this.editingRowData,
        value: this.rowData[this.field],
        newValue: this.editingRowData[this.field],
        field: this.field,
        index: this.rowIndex,
        type,
        defaultPrevented: false,
        preventDefault: function preventDefault() {
          this.defaultPrevented = true;
        }
      };
      this.$emit("cell-edit-complete", completeEvent);
      if (!completeEvent.defaultPrevented) {
        this.switchCellToViewMode();
      }
    },
    onKeyDown: function onKeyDown(event) {
      if (this.editMode === "cell") {
        switch (event.code) {
          case "Enter":
          case "NumpadEnter":
            this.completeEdit(event, "enter");
            break;
          case "Escape":
            this.switchCellToViewMode();
            this.$emit("cell-edit-cancel", {
              originalEvent: event,
              data: this.rowData,
              field: this.field,
              index: this.rowIndex
            });
            break;
          case "Tab":
            this.completeEdit(event, "tab");
            if (event.shiftKey) this.moveToPreviousCell(event);
            else this.moveToNextCell(event);
            break;
        }
      }
    },
    moveToPreviousCell: function moveToPreviousCell(event) {
      var _this4 = this;
      return _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function _callee() {
        var currentCell, targetCell;
        return _regenerator().w(function(_context) {
          while (1) switch (_context.n) {
            case 0:
              currentCell = _this4.findCell(event.target);
              targetCell = _this4.findPreviousEditableColumn(currentCell);
              if (!targetCell) {
                _context.n = 2;
                break;
              }
              _context.n = 1;
              return _this4.$nextTick();
            case 1:
              invokeElementMethod(targetCell, "click");
              event.preventDefault();
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    moveToNextCell: function moveToNextCell(event) {
      var _this5 = this;
      return _asyncToGenerator(/* @__PURE__ */ _regenerator().m(function _callee2() {
        var currentCell, targetCell;
        return _regenerator().w(function(_context2) {
          while (1) switch (_context2.n) {
            case 0:
              currentCell = _this5.findCell(event.target);
              targetCell = _this5.findNextEditableColumn(currentCell);
              if (!targetCell) {
                _context2.n = 2;
                break;
              }
              _context2.n = 1;
              return _this5.$nextTick();
            case 1:
              invokeElementMethod(targetCell, "click");
              event.preventDefault();
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    findCell: function findCell(element) {
      if (element) {
        var cell = element;
        while (cell && !getAttribute(cell, "data-p-cell-editing")) {
          cell = cell.parentElement;
        }
        return cell;
      } else {
        return null;
      }
    },
    findPreviousEditableColumn: function findPreviousEditableColumn(cell) {
      var prevCell = cell.previousElementSibling;
      if (!prevCell) {
        var previousRow = cell.parentElement.previousElementSibling;
        if (previousRow) {
          prevCell = previousRow.lastElementChild;
        }
      }
      if (prevCell) {
        if (getAttribute(prevCell, "data-p-editable-column")) return prevCell;
        else return this.findPreviousEditableColumn(prevCell);
      } else {
        return null;
      }
    },
    findNextEditableColumn: function findNextEditableColumn(cell) {
      var nextCell = cell.nextElementSibling;
      if (!nextCell) {
        var nextRow = cell.parentElement.nextElementSibling;
        if (nextRow) {
          nextCell = nextRow.firstElementChild;
        }
      }
      if (nextCell) {
        if (getAttribute(nextCell, "data-p-editable-column")) return nextCell;
        else return this.findNextEditableColumn(nextCell);
      } else {
        return null;
      }
    },
    onRowEditInit: function onRowEditInit(event) {
      this.$emit("row-edit-init", {
        originalEvent: event,
        data: this.rowData,
        newData: this.editingRowData,
        field: this.field,
        index: this.rowIndex
      });
    },
    onRowEditSave: function onRowEditSave(event) {
      this.$emit("row-edit-save", {
        originalEvent: event,
        data: this.rowData,
        newData: this.editingRowData,
        field: this.field,
        index: this.rowIndex
      });
    },
    onRowEditCancel: function onRowEditCancel(event) {
      this.$emit("row-edit-cancel", {
        originalEvent: event,
        data: this.rowData,
        newData: this.editingRowData,
        field: this.field,
        index: this.rowIndex
      });
    },
    editorInitCallback: function editorInitCallback(event) {
      this.$emit("row-edit-init", {
        originalEvent: event,
        data: this.rowData,
        newData: this.editingRowData,
        field: this.field,
        index: this.rowIndex
      });
    },
    editorSaveCallback: function editorSaveCallback(event) {
      if (this.editMode === "row") {
        this.$emit("row-edit-save", {
          originalEvent: event,
          data: this.rowData,
          newData: this.editingRowData,
          field: this.field,
          index: this.rowIndex
        });
      } else {
        this.completeEdit(event, "enter");
      }
    },
    editorCancelCallback: function editorCancelCallback(event) {
      if (this.editMode === "row") {
        this.$emit("row-edit-cancel", {
          originalEvent: event,
          data: this.rowData,
          newData: this.editingRowData,
          field: this.field,
          index: this.rowIndex
        });
      } else {
        this.switchCellToViewMode();
        this.$emit("cell-edit-cancel", {
          originalEvent: event,
          data: this.rowData,
          field: this.field,
          index: this.rowIndex
        });
      }
    },
    updateStickyPosition: function updateStickyPosition() {
      if (this.columnProp("frozen")) {
        var align = this.columnProp("alignFrozen");
        if (align === "right") {
          var pos = 0;
          var next = getNextElementSibling(this.$el, '[data-p-frozen-column="true"]');
          if (next) {
            pos = getOuterWidth(next) + parseFloat(next.style["inset-inline-end"] || 0);
          }
          this.styleObject.insetInlineEnd = pos + "px";
        } else {
          var _pos = 0;
          var prev = getPreviousElementSibling(this.$el, '[data-p-frozen-column="true"]');
          if (prev) {
            _pos = getOuterWidth(prev) + parseFloat(prev.style["inset-inline-start"] || 0);
          }
          this.styleObject.insetInlineStart = _pos + "px";
        }
      }
    },
    getVirtualScrollerProp: function getVirtualScrollerProp(option) {
      return this.virtualScrollerContentProps ? this.virtualScrollerContentProps[option] : null;
    }
  },
  computed: {
    editingRowData: function editingRowData() {
      return this.editingMeta[this.rowIndex] ? this.editingMeta[this.rowIndex].data : this.rowData;
    },
    field: function field() {
      return this.columnProp("field");
    },
    containerClass: function containerClass() {
      return [this.columnProp("bodyClass"), this.columnProp("class"), this.cx("bodyCell")];
    },
    containerStyle: function containerStyle() {
      var bodyStyle = this.columnProp("bodyStyle");
      var columnStyle = this.columnProp("style");
      return this.columnProp("frozen") ? [columnStyle, bodyStyle, this.styleObject] : [columnStyle, bodyStyle];
    },
    loading: function loading() {
      return this.getVirtualScrollerProp("loading");
    },
    loadingOptions: function loadingOptions() {
      var getLoaderOptions = this.getVirtualScrollerProp("getLoaderOptions");
      return getLoaderOptions && getLoaderOptions(this.rowIndex, {
        cellIndex: this.index,
        cellFirst: this.index === 0,
        cellLast: this.index === this.getVirtualScrollerProp("columns").length - 1,
        cellEven: this.index % 2 === 0,
        cellOdd: this.index % 2 !== 0,
        column: this.column,
        field: this.field
      });
    },
    expandButtonAriaLabel: function expandButtonAriaLabel() {
      return this.$primevue.config.locale.aria ? this.isRowExpanded ? this.$primevue.config.locale.aria.expandRow : this.$primevue.config.locale.aria.collapseRow : void 0;
    },
    initButtonAriaLabel: function initButtonAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.editRow : void 0;
    },
    saveButtonAriaLabel: function saveButtonAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.saveEdit : void 0;
    },
    cancelButtonAriaLabel: function cancelButtonAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.cancelEdit : void 0;
    }
  },
  components: {
    DTRadioButton: script$b,
    DTCheckbox: script$c,
    Button: script$u,
    ChevronDownIcon: script$q,
    ChevronRightIcon: script$p,
    BarsIcon: script$t,
    PencilIcon: script$i,
    CheckIcon: script$s,
    TimesIcon: script$r
  },
  directives: {
    ripple: Ripple
  }
};
function _typeof$b(o) {
  "@babel/helpers - typeof";
  return _typeof$b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$b(o);
}
function ownKeys$b(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$b(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$b(Object(t), true).forEach(function(r2) {
      _defineProperty$b(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$b(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$b(e, r, t) {
  return (r = _toPropertyKey$b(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$b(t) {
  var i = _toPrimitive$b(t, "string");
  return "symbol" == _typeof$b(i) ? i : i + "";
}
function _toPrimitive$b(t, r) {
  if ("object" != _typeof$b(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$b(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1$9 = ["colspan", "rowspan", "data-p-selection-column", "data-p-editable-column", "data-p-cell-editing", "data-p-frozen-column"];
var _hoisted_2$3 = ["aria-expanded", "aria-controls", "aria-label"];
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DTRadioButton = resolveComponent("DTRadioButton");
  var _component_DTCheckbox = resolveComponent("DTCheckbox");
  var _component_BarsIcon = resolveComponent("BarsIcon");
  var _component_ChevronDownIcon = resolveComponent("ChevronDownIcon");
  var _component_ChevronRightIcon = resolveComponent("ChevronRightIcon");
  var _component_Button = resolveComponent("Button");
  var _directive_ripple = resolveDirective("ripple");
  return $options.loading ? (openBlock(), createElementBlock("td", mergeProps({
    key: 0,
    style: $options.containerStyle,
    "class": $options.containerClass,
    role: "cell"
  }, _objectSpread$b(_objectSpread$b({}, $options.getColumnPT("root")), $options.getColumnPT("bodyCell"))), [(openBlock(), createBlock(resolveDynamicComponent($props.column.children.loading), {
    data: $props.rowData,
    column: $props.column,
    field: $options.field,
    index: $props.rowIndex,
    frozenRow: $props.frozenRow,
    loadingOptions: $options.loadingOptions
  }, null, 8, ["data", "column", "field", "index", "frozenRow", "loadingOptions"]))], 16)) : (openBlock(), createElementBlock("td", mergeProps({
    key: 1,
    style: $options.containerStyle,
    "class": $options.containerClass,
    colspan: $options.columnProp("colspan"),
    rowspan: $options.columnProp("rowspan"),
    onClick: _cache[3] || (_cache[3] = function() {
      return $options.onClick && $options.onClick.apply($options, arguments);
    }),
    onKeydown: _cache[4] || (_cache[4] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    }),
    role: "cell"
  }, _objectSpread$b(_objectSpread$b({}, $options.getColumnPT("root")), $options.getColumnPT("bodyCell")), {
    "data-p-selection-column": $options.columnProp("selectionMode") != null,
    "data-p-editable-column": $options.isEditable(),
    "data-p-cell-editing": $data.d_editing,
    "data-p-frozen-column": $options.columnProp("frozen")
  }), [$props.column.children && $props.column.children.body && !$data.d_editing ? (openBlock(), createBlock(resolveDynamicComponent($props.column.children.body), {
    key: 0,
    data: $props.rowData,
    column: $props.column,
    field: $options.field,
    index: $props.rowIndex,
    frozenRow: $props.frozenRow,
    editorInitCallback: $options.editorInitCallback,
    rowTogglerCallback: $options.toggleRow
  }, null, 8, ["data", "column", "field", "index", "frozenRow", "editorInitCallback", "rowTogglerCallback"])) : $props.column.children && $props.column.children.editor && $data.d_editing ? (openBlock(), createBlock(resolveDynamicComponent($props.column.children.editor), {
    key: 1,
    data: $options.editingRowData,
    column: $props.column,
    field: $options.field,
    index: $props.rowIndex,
    frozenRow: $props.frozenRow,
    editorSaveCallback: $options.editorSaveCallback,
    editorCancelCallback: $options.editorCancelCallback
  }, null, 8, ["data", "column", "field", "index", "frozenRow", "editorSaveCallback", "editorCancelCallback"])) : $props.column.children && $props.column.children.body && !$props.column.children.editor && $data.d_editing ? (openBlock(), createBlock(resolveDynamicComponent($props.column.children.body), {
    key: 2,
    data: $options.editingRowData,
    column: $props.column,
    field: $options.field,
    index: $props.rowIndex,
    frozenRow: $props.frozenRow
  }, null, 8, ["data", "column", "field", "index", "frozenRow"])) : $options.columnProp("selectionMode") ? (openBlock(), createElementBlock(Fragment, {
    key: 3
  }, [$options.columnProp("selectionMode") === "single" ? (openBlock(), createBlock(_component_DTRadioButton, {
    key: 0,
    value: $props.rowData,
    name: $props.name,
    checked: $props.selected,
    onChange: _cache[0] || (_cache[0] = function($event) {
      return $options.toggleRowWithRadio($event, $props.rowIndex);
    }),
    column: $props.column,
    index: $props.index,
    unstyled: _ctx.unstyled,
    pt: _ctx.pt
  }, null, 8, ["value", "name", "checked", "column", "index", "unstyled", "pt"])) : $options.columnProp("selectionMode") === "multiple" ? (openBlock(), createBlock(_component_DTCheckbox, {
    key: 1,
    value: $props.rowData,
    checked: $props.selected,
    rowCheckboxIconTemplate: $props.column.children && $props.column.children.rowcheckboxicon,
    "aria-selected": $props.selected ? true : void 0,
    onChange: _cache[1] || (_cache[1] = function($event) {
      return $options.toggleRowWithCheckbox($event, $props.rowIndex);
    }),
    column: $props.column,
    index: $props.index,
    unstyled: _ctx.unstyled,
    pt: _ctx.pt
  }, null, 8, ["value", "checked", "rowCheckboxIconTemplate", "aria-selected", "column", "index", "unstyled", "pt"])) : createCommentVNode("", true)], 64)) : $options.columnProp("rowReorder") ? (openBlock(), createElementBlock(Fragment, {
    key: 4
  }, [$props.column.children && $props.column.children.rowreordericon ? (openBlock(), createBlock(resolveDynamicComponent($props.column.children.rowreordericon), {
    key: 0,
    "class": normalizeClass(_ctx.cx("reorderableRowHandle"))
  }, null, 8, ["class"])) : $options.columnProp("rowReorderIcon") ? (openBlock(), createElementBlock("i", mergeProps({
    key: 1,
    "class": [_ctx.cx("reorderableRowHandle"), $options.columnProp("rowReorderIcon")]
  }, $options.getColumnPT("reorderableRowHandle")), null, 16)) : (openBlock(), createBlock(_component_BarsIcon, mergeProps({
    key: 2,
    "class": _ctx.cx("reorderableRowHandle")
  }, $options.getColumnPT("reorderableRowHandle")), null, 16, ["class"]))], 64)) : $options.columnProp("expander") ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 5,
    "class": _ctx.cx("rowToggleButton"),
    type: "button",
    "aria-expanded": $props.isRowExpanded,
    "aria-controls": $props.ariaControls,
    "aria-label": $options.expandButtonAriaLabel,
    onClick: _cache[2] || (_cache[2] = withModifiers(function() {
      return $options.toggleRow && $options.toggleRow.apply($options, arguments);
    }, ["stop"])),
    "data-p-selected": "selected"
  }, $options.getColumnPT("rowToggleButton"), {
    "data-pc-group-section": "rowactionbutton"
  }), [$props.column.children && $props.column.children.rowtoggleicon ? (openBlock(), createBlock(resolveDynamicComponent($props.column.children.rowtoggleicon), {
    key: 0,
    "class": normalizeClass(_ctx.cx("rowToggleIcon")),
    rowExpanded: $props.isRowExpanded
  }, null, 8, ["class", "rowExpanded"])) : $props.column.children && $props.column.children.rowtogglericon ? (openBlock(), createBlock(resolveDynamicComponent($props.column.children.rowtogglericon), {
    key: 1,
    "class": normalizeClass(_ctx.cx("rowToggleIcon")),
    rowExpanded: $props.isRowExpanded
  }, null, 8, ["class", "rowExpanded"])) : (openBlock(), createElementBlock(Fragment, {
    key: 2
  }, [$props.isRowExpanded && $props.expandedRowIcon ? (openBlock(), createElementBlock("span", {
    key: 0,
    "class": normalizeClass([_ctx.cx("rowToggleIcon"), $props.expandedRowIcon])
  }, null, 2)) : $props.isRowExpanded && !$props.expandedRowIcon ? (openBlock(), createBlock(_component_ChevronDownIcon, mergeProps({
    key: 1,
    "class": _ctx.cx("rowToggleIcon")
  }, $options.getColumnPT("rowToggleIcon")), null, 16, ["class"])) : !$props.isRowExpanded && $props.collapsedRowIcon ? (openBlock(), createElementBlock("span", {
    key: 2,
    "class": normalizeClass([_ctx.cx("rowToggleIcon"), $props.collapsedRowIcon])
  }, null, 2)) : !$props.isRowExpanded && !$props.collapsedRowIcon ? (openBlock(), createBlock(_component_ChevronRightIcon, mergeProps({
    key: 3,
    "class": _ctx.cx("rowToggleIcon")
  }, $options.getColumnPT("rowToggleIcon")), null, 16, ["class"])) : createCommentVNode("", true)], 64))], 16, _hoisted_2$3)), [[_directive_ripple]]) : $props.editMode === "row" && $options.columnProp("rowEditor") ? (openBlock(), createElementBlock(Fragment, {
    key: 6
  }, [!$data.d_editing ? (openBlock(), createBlock(_component_Button, mergeProps({
    key: 0,
    "class": _ctx.cx("pcRowEditorInit"),
    "aria-label": $options.initButtonAriaLabel,
    unstyled: _ctx.unstyled,
    onClick: $options.onRowEditInit
  }, $props.editButtonProps.init, {
    pt: $options.getColumnPT("pcRowEditorInit"),
    "data-pc-group-section": "rowactionbutton"
  }), {
    icon: withCtx(function(slotProps) {
      return [(openBlock(), createBlock(resolveDynamicComponent($props.column.children && $props.column.children.roweditoriniticon || "PencilIcon"), mergeProps({
        "class": slotProps["class"]
      }, $options.getColumnPT("pcRowEditorInit")["icon"]), null, 16, ["class"]))];
    }),
    _: 1
  }, 16, ["class", "aria-label", "unstyled", "onClick", "pt"])) : createCommentVNode("", true), $data.d_editing ? (openBlock(), createBlock(_component_Button, mergeProps({
    key: 1,
    "class": _ctx.cx("pcRowEditorSave"),
    "aria-label": $options.saveButtonAriaLabel,
    unstyled: _ctx.unstyled,
    onClick: $options.onRowEditSave
  }, $props.editButtonProps.save, {
    pt: $options.getColumnPT("pcRowEditorSave"),
    "data-pc-group-section": "rowactionbutton"
  }), {
    icon: withCtx(function(slotProps) {
      return [(openBlock(), createBlock(resolveDynamicComponent($props.column.children && $props.column.children.roweditorsaveicon || "CheckIcon"), mergeProps({
        "class": slotProps["class"]
      }, $options.getColumnPT("pcRowEditorSave")["icon"]), null, 16, ["class"]))];
    }),
    _: 1
  }, 16, ["class", "aria-label", "unstyled", "onClick", "pt"])) : createCommentVNode("", true), $data.d_editing ? (openBlock(), createBlock(_component_Button, mergeProps({
    key: 2,
    "class": _ctx.cx("pcRowEditorCancel"),
    "aria-label": $options.cancelButtonAriaLabel,
    unstyled: _ctx.unstyled,
    onClick: $options.onRowEditCancel
  }, $props.editButtonProps.cancel, {
    pt: $options.getColumnPT("pcRowEditorCancel"),
    "data-pc-group-section": "rowactionbutton"
  }), {
    icon: withCtx(function(slotProps) {
      return [(openBlock(), createBlock(resolveDynamicComponent($props.column.children && $props.column.children.roweditorcancelicon || "TimesIcon"), mergeProps({
        "class": slotProps["class"]
      }, $options.getColumnPT("pcRowEditorCancel")["icon"]), null, 16, ["class"]))];
    }),
    _: 1
  }, 16, ["class", "aria-label", "unstyled", "onClick", "pt"])) : createCommentVNode("", true)], 64)) : (openBlock(), createElementBlock(Fragment, {
    key: 7
  }, [createTextVNode(toDisplayString($options.resolveFieldData()), 1)], 64))], 16, _hoisted_1$9));
}
script$a.render = render$a;
function _typeof$a(o) {
  "@babel/helpers - typeof";
  return _typeof$a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$a(o);
}
function _createForOfIteratorHelper$2(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray$2(r)) || e) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t["return"] || t["return"]();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray$2(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$2(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$2(r, a) : void 0;
  }
}
function _arrayLikeToArray$2(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function ownKeys$a(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$a(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$a(Object(t), true).forEach(function(r2) {
      _defineProperty$a(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$a(e, r, t) {
  return (r = _toPropertyKey$a(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$a(t) {
  var i = _toPrimitive$a(t, "string");
  return "symbol" == _typeof$a(i) ? i : i + "";
}
function _toPrimitive$a(t, r) {
  if ("object" != _typeof$a(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$a(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var script$9 = {
  name: "BodyRow",
  hostName: "DataTable",
  "extends": script$o,
  emits: ["rowgroup-toggle", "row-click", "row-dblclick", "row-rightclick", "row-touchend", "row-keydown", "row-mousedown", "row-dragstart", "row-dragover", "row-dragleave", "row-dragend", "row-drop", "row-toggle", "radio-change", "checkbox-change", "cell-edit-init", "cell-edit-complete", "cell-edit-cancel", "row-edit-init", "row-edit-save", "row-edit-cancel", "editing-meta-change"],
  props: {
    rowData: {
      type: Object,
      "default": null
    },
    index: {
      type: Number,
      "default": 0
    },
    value: {
      type: Array,
      "default": null
    },
    columns: {
      type: null,
      "default": null
    },
    frozenRow: {
      type: Boolean,
      "default": false
    },
    empty: {
      type: Boolean,
      "default": false
    },
    rowGroupMode: {
      type: String,
      "default": null
    },
    groupRowsBy: {
      type: [Array, String, Function],
      "default": null
    },
    expandableRowGroups: {
      type: Boolean,
      "default": false
    },
    expandedRowGroups: {
      type: Array,
      "default": null
    },
    first: {
      type: Number,
      "default": 0
    },
    dataKey: {
      type: [String, Function],
      "default": null
    },
    expandedRowIcon: {
      type: String,
      "default": null
    },
    collapsedRowIcon: {
      type: String,
      "default": null
    },
    expandedRows: {
      type: [Array, Object],
      "default": null
    },
    selection: {
      type: [Array, Object],
      "default": null
    },
    selectionKeys: {
      type: null,
      "default": null
    },
    selectionMode: {
      type: String,
      "default": null
    },
    contextMenu: {
      type: Boolean,
      "default": false
    },
    contextMenuSelection: {
      type: Object,
      "default": null
    },
    rowClass: {
      type: null,
      "default": null
    },
    rowStyle: {
      type: null,
      "default": null
    },
    rowGroupHeaderStyle: {
      type: null,
      "default": null
    },
    editMode: {
      type: String,
      "default": null
    },
    compareSelectionBy: {
      type: String,
      "default": "deepEquals"
    },
    editingRows: {
      type: Array,
      "default": null
    },
    editingRowKeys: {
      type: null,
      "default": null
    },
    editingMeta: {
      type: Object,
      "default": null
    },
    templates: {
      type: null,
      "default": null
    },
    scrollable: {
      type: Boolean,
      "default": false
    },
    editButtonProps: {
      type: Object,
      "default": null
    },
    virtualScrollerContentProps: {
      type: Object,
      "default": null
    },
    isVirtualScrollerDisabled: {
      type: Boolean,
      "default": false
    },
    expandedRowId: {
      type: String,
      "default": null
    },
    nameAttributeSelector: {
      type: String,
      "default": null
    }
  },
  data: function data2() {
    return {
      d_rowExpanded: false
    };
  },
  watch: {
    expandedRows: {
      deep: true,
      immediate: true,
      handler: function handler(newValue) {
        var _this = this;
        this.d_rowExpanded = this.dataKey ? (newValue === null || newValue === void 0 ? void 0 : newValue[resolveFieldData(this.rowData, this.dataKey)]) !== void 0 : newValue === null || newValue === void 0 ? void 0 : newValue.some(function(d) {
          return _this.equals(_this.rowData, d);
        });
      }
    }
  },
  methods: {
    columnProp: function columnProp2(col, prop) {
      return getVNodeProp(col, prop);
    },
    //@todo - update this method
    getColumnPT: function getColumnPT4(key) {
      var columnMetaData = {
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        }
      };
      return mergeProps(this.ptm("column.".concat(key), {
        column: columnMetaData
      }), this.ptm("column.".concat(key), columnMetaData), this.ptmo(this.columnProp({}, "pt"), key, columnMetaData));
    },
    //@todo - update this method
    getBodyRowPTOptions: function getBodyRowPTOptions(key) {
      var _this$$parentInstance;
      var datatable = (_this$$parentInstance = this.$parentInstance) === null || _this$$parentInstance === void 0 ? void 0 : _this$$parentInstance.$parentInstance;
      return this.ptm(key, {
        context: {
          index: this.rowIndex,
          selectable: (datatable === null || datatable === void 0 ? void 0 : datatable.rowHover) || (datatable === null || datatable === void 0 ? void 0 : datatable.selectionMode),
          selected: this.isSelected,
          stripedRows: (datatable === null || datatable === void 0 ? void 0 : datatable.stripedRows) || false
        }
      });
    },
    shouldRenderBodyCell: function shouldRenderBodyCell(column) {
      var isHidden = this.columnProp(column, "hidden");
      if (this.rowGroupMode && !isHidden) {
        var field2 = this.columnProp(column, "field");
        if (this.rowGroupMode === "subheader") {
          return this.groupRowsBy !== field2;
        } else if (this.rowGroupMode === "rowspan") {
          if (this.isGrouped(column)) {
            var prevRowData = this.value[this.rowIndex - 1];
            if (prevRowData) {
              var currentRowFieldData = resolveFieldData(this.value[this.rowIndex], field2);
              var previousRowFieldData = resolveFieldData(prevRowData, field2);
              return currentRowFieldData !== previousRowFieldData;
            } else {
              return true;
            }
          } else {
            return true;
          }
        }
      } else {
        return !isHidden;
      }
    },
    calculateRowGroupSize: function calculateRowGroupSize(column) {
      if (this.isGrouped(column)) {
        var index = this.rowIndex;
        var field2 = this.columnProp(column, "field");
        var currentRowFieldData = resolveFieldData(this.value[index], field2);
        var nextRowFieldData = currentRowFieldData;
        var groupRowSpan = 0;
        if (this.d_rowExpanded) groupRowSpan++;
        while (currentRowFieldData === nextRowFieldData) {
          groupRowSpan++;
          var nextRowData = this.value[++index];
          if (nextRowData) {
            nextRowFieldData = resolveFieldData(nextRowData, field2);
          } else {
            break;
          }
        }
        return groupRowSpan === 1 ? null : groupRowSpan;
      } else {
        return null;
      }
    },
    isGrouped: function isGrouped(column) {
      var field2 = this.columnProp(column, "field");
      if (this.groupRowsBy && field2) {
        if (Array.isArray(this.groupRowsBy)) return this.groupRowsBy.indexOf(field2) > -1;
        else return this.groupRowsBy === field2;
      } else {
        return false;
      }
    },
    findIndexInSelection: function findIndexInSelection(data11) {
      return this.findIndex(data11, this.selection);
    },
    findIndex: function findIndex(data11, collection) {
      var index = -1;
      if (collection && collection.length) {
        for (var i = 0; i < collection.length; i++) {
          if (this.equals(data11, collection[i])) {
            index = i;
            break;
          }
        }
      }
      return index;
    },
    equals: function equals$1(data1, data22) {
      return this.compareSelectionBy === "equals" ? data1 === data22 : equals(data1, data22, this.dataKey);
    },
    onRowGroupToggle: function onRowGroupToggle(event) {
      this.$emit("rowgroup-toggle", {
        originalEvent: event,
        data: this.rowData
      });
    },
    onRowClick: function onRowClick(event) {
      this.$emit("row-click", {
        originalEvent: event,
        data: this.rowData,
        index: this.rowIndex
      });
    },
    onRowDblClick: function onRowDblClick(event) {
      this.$emit("row-dblclick", {
        originalEvent: event,
        data: this.rowData,
        index: this.rowIndex
      });
    },
    onRowRightClick: function onRowRightClick(event) {
      this.$emit("row-rightclick", {
        originalEvent: event,
        data: this.rowData,
        index: this.rowIndex
      });
    },
    onRowTouchEnd: function onRowTouchEnd(event) {
      this.$emit("row-touchend", event);
    },
    onRowKeyDown: function onRowKeyDown(event) {
      this.$emit("row-keydown", {
        originalEvent: event,
        data: this.rowData,
        index: this.rowIndex
      });
    },
    onRowMouseDown: function onRowMouseDown(event) {
      this.$emit("row-mousedown", event);
    },
    onRowDragStart: function onRowDragStart(event) {
      this.$emit("row-dragstart", {
        originalEvent: event,
        index: this.rowIndex
      });
    },
    onRowDragOver: function onRowDragOver(event) {
      this.$emit("row-dragover", {
        originalEvent: event,
        index: this.rowIndex
      });
    },
    onRowDragLeave: function onRowDragLeave(event) {
      this.$emit("row-dragleave", event);
    },
    onRowDragEnd: function onRowDragEnd(event) {
      this.$emit("row-dragend", event);
    },
    onRowDrop: function onRowDrop(event) {
      this.$emit("row-drop", event);
    },
    onRowToggle: function onRowToggle(event) {
      this.d_rowExpanded = !this.d_rowExpanded;
      this.$emit("row-toggle", _objectSpread$a(_objectSpread$a({}, event), {}, {
        expanded: this.d_rowExpanded
      }));
    },
    onRadioChange: function onRadioChange(event) {
      this.$emit("radio-change", event);
    },
    onCheckboxChange: function onCheckboxChange(event) {
      this.$emit("checkbox-change", event);
    },
    onCellEditInit: function onCellEditInit(event) {
      this.$emit("cell-edit-init", event);
    },
    onCellEditComplete: function onCellEditComplete(event) {
      this.$emit("cell-edit-complete", event);
    },
    onCellEditCancel: function onCellEditCancel(event) {
      this.$emit("cell-edit-cancel", event);
    },
    onRowEditInit: function onRowEditInit2(event) {
      this.$emit("row-edit-init", event);
    },
    onRowEditSave: function onRowEditSave2(event) {
      this.$emit("row-edit-save", event);
    },
    onRowEditCancel: function onRowEditCancel2(event) {
      this.$emit("row-edit-cancel", event);
    },
    onEditingMetaChange: function onEditingMetaChange(event) {
      this.$emit("editing-meta-change", event);
    },
    getVirtualScrollerProp: function getVirtualScrollerProp2(option, options) {
      options = options || this.virtualScrollerContentProps;
      return options ? options[option] : null;
    }
  },
  computed: {
    rowIndex: function rowIndex() {
      var getItemOptions = this.getVirtualScrollerProp("getItemOptions");
      return getItemOptions ? getItemOptions(this.index).index : this.index;
    },
    rowStyles: function rowStyles() {
      var _this$rowStyle;
      return (_this$rowStyle = this.rowStyle) === null || _this$rowStyle === void 0 ? void 0 : _this$rowStyle.call(this, this.rowData);
    },
    rowClasses: function rowClasses() {
      var rowStyleClass = [];
      var columnSelectionMode = null;
      if (this.rowClass) {
        var rowClassValue = this.rowClass(this.rowData);
        if (rowClassValue) {
          rowStyleClass.push(rowClassValue);
        }
      }
      if (this.columns) {
        var _iterator = _createForOfIteratorHelper$2(this.columns), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var col = _step.value;
            var _selectionMode = this.columnProp(col, "selectionMode");
            if (isNotEmpty(_selectionMode)) {
              columnSelectionMode = _selectionMode;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return [this.cx("row", {
        rowData: this.rowData,
        index: this.rowIndex,
        columnSelectionMode
      }), rowStyleClass];
    },
    rowTabindex: function rowTabindex() {
      if (this.selection === null && (this.selectionMode === "single" || this.selectionMode === "multiple")) {
        return this.rowIndex === 0 ? 0 : -1;
      }
      return -1;
    },
    isRowEditing: function isRowEditing() {
      if (this.rowData && this.editingRows) {
        if (this.dataKey) return this.editingRowKeys ? this.editingRowKeys[resolveFieldData(this.rowData, this.dataKey)] !== void 0 : false;
        else return this.findIndex(this.rowData, this.editingRows) > -1;
      }
      return false;
    },
    isRowGroupExpanded: function isRowGroupExpanded() {
      if (this.expandableRowGroups && this.expandedRowGroups) {
        var groupFieldValue = resolveFieldData(this.rowData, this.groupRowsBy);
        return this.expandedRowGroups.indexOf(groupFieldValue) > -1;
      }
      return false;
    },
    isSelected: function isSelected() {
      if (this.rowData && this.selection) {
        if (this.dataKey) {
          return this.selectionKeys ? this.selectionKeys[resolveFieldData(this.rowData, this.dataKey)] !== void 0 : false;
        } else {
          if (this.selection instanceof Array) return this.findIndexInSelection(this.rowData) > -1;
          else return this.equals(this.rowData, this.selection);
        }
      }
      return false;
    },
    isSelectedWithContextMenu: function isSelectedWithContextMenu() {
      if (this.rowData && this.contextMenuSelection) {
        return this.equals(this.rowData, this.contextMenuSelection, this.dataKey);
      }
      return false;
    },
    shouldRenderRowGroupHeader: function shouldRenderRowGroupHeader() {
      var currentRowFieldData = resolveFieldData(this.rowData, this.groupRowsBy);
      var prevRowData = this.value[this.rowIndex - 1];
      if (prevRowData) {
        var previousRowFieldData = resolveFieldData(prevRowData, this.groupRowsBy);
        return currentRowFieldData !== previousRowFieldData;
      } else {
        return true;
      }
    },
    shouldRenderRowGroupFooter: function shouldRenderRowGroupFooter() {
      if (this.expandableRowGroups && !this.isRowGroupExpanded) {
        return false;
      } else {
        var currentRowFieldData = resolveFieldData(this.rowData, this.groupRowsBy);
        var nextRowData = this.value[this.rowIndex + 1];
        if (nextRowData) {
          var nextRowFieldData = resolveFieldData(nextRowData, this.groupRowsBy);
          return currentRowFieldData !== nextRowFieldData;
        } else {
          return true;
        }
      }
    },
    columnsLength: function columnsLength() {
      var _this2 = this;
      if (this.columns) {
        var hiddenColLength = 0;
        this.columns.forEach(function(column) {
          if (_this2.columnProp(column, "hidden")) hiddenColLength++;
        });
        return this.columns.length - hiddenColLength;
      }
      return 0;
    }
  },
  components: {
    DTBodyCell: script$a,
    ChevronDownIcon: script$q,
    ChevronRightIcon: script$p
  }
};
function _typeof$9(o) {
  "@babel/helpers - typeof";
  return _typeof$9 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$9(o);
}
function ownKeys$9(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$9(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$9(Object(t), true).forEach(function(r2) {
      _defineProperty$9(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$9(e, r, t) {
  return (r = _toPropertyKey$9(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$9(t) {
  var i = _toPrimitive$9(t, "string");
  return "symbol" == _typeof$9(i) ? i : i + "";
}
function _toPrimitive$9(t, r) {
  if ("object" != _typeof$9(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$9(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1$8 = ["colspan"];
var _hoisted_2$2 = ["tabindex", "aria-selected", "data-p-index", "data-p-selectable-row", "data-p-selected", "data-p-selected-contextmenu"];
var _hoisted_3 = ["id"];
var _hoisted_4 = ["colspan"];
var _hoisted_5 = ["colspan"];
var _hoisted_6 = ["colspan"];
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ChevronDownIcon = resolveComponent("ChevronDownIcon");
  var _component_ChevronRightIcon = resolveComponent("ChevronRightIcon");
  var _component_DTBodyCell = resolveComponent("DTBodyCell");
  return !$props.empty ? (openBlock(), createElementBlock(Fragment, {
    key: 0
  }, [$props.templates["groupheader"] && $props.rowGroupMode === "subheader" && $options.shouldRenderRowGroupHeader ? (openBlock(), createElementBlock("tr", mergeProps({
    key: 0,
    "class": _ctx.cx("rowGroupHeader"),
    style: $props.rowGroupHeaderStyle,
    role: "row"
  }, _ctx.ptm("rowGroupHeader")), [createElementVNode("td", mergeProps({
    colspan: $options.columnsLength - 1
  }, _objectSpread$9(_objectSpread$9({}, $options.getColumnPT("bodycell")), _ctx.ptm("rowGroupHeaderCell"))), [$props.expandableRowGroups ? (openBlock(), createElementBlock("button", mergeProps({
    key: 0,
    "class": _ctx.cx("rowToggleButton"),
    onClick: _cache[0] || (_cache[0] = function() {
      return $options.onRowGroupToggle && $options.onRowGroupToggle.apply($options, arguments);
    }),
    type: "button"
  }, _ctx.ptm("rowToggleButton")), [$props.templates["rowtoggleicon"] || $props.templates["rowgrouptogglericon"] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates["rowtoggleicon"] || $props.templates["rowgrouptogglericon"]), {
    key: 0,
    expanded: $options.isRowGroupExpanded
  }, null, 8, ["expanded"])) : (openBlock(), createElementBlock(Fragment, {
    key: 1
  }, [$options.isRowGroupExpanded && $props.expandedRowIcon ? (openBlock(), createElementBlock("span", mergeProps({
    key: 0,
    "class": [_ctx.cx("rowToggleIcon"), $props.expandedRowIcon]
  }, _ctx.ptm("rowToggleIcon")), null, 16)) : $options.isRowGroupExpanded && !$props.expandedRowIcon ? (openBlock(), createBlock(_component_ChevronDownIcon, mergeProps({
    key: 1,
    "class": _ctx.cx("rowToggleIcon")
  }, _ctx.ptm("rowToggleIcon")), null, 16, ["class"])) : !$options.isRowGroupExpanded && $props.collapsedRowIcon ? (openBlock(), createElementBlock("span", mergeProps({
    key: 2,
    "class": [_ctx.cx("rowToggleIcon"), $props.collapsedRowIcon]
  }, _ctx.ptm("rowToggleIcon")), null, 16)) : !$options.isRowGroupExpanded && !$props.collapsedRowIcon ? (openBlock(), createBlock(_component_ChevronRightIcon, mergeProps({
    key: 3,
    "class": _ctx.cx("rowToggleIcon")
  }, _ctx.ptm("rowToggleIcon")), null, 16, ["class"])) : createCommentVNode("", true)], 64))], 16)) : createCommentVNode("", true), (openBlock(), createBlock(resolveDynamicComponent($props.templates["groupheader"]), {
    data: $props.rowData,
    index: $options.rowIndex
  }, null, 8, ["data", "index"]))], 16, _hoisted_1$8)], 16)) : createCommentVNode("", true), ($props.expandableRowGroups ? $options.isRowGroupExpanded : true) ? (openBlock(), createElementBlock("tr", mergeProps({
    key: 1,
    "class": $options.rowClasses,
    style: $options.rowStyles,
    tabindex: $options.rowTabindex,
    role: "row",
    "aria-selected": $props.selectionMode ? $options.isSelected : null,
    onClick: _cache[1] || (_cache[1] = function() {
      return $options.onRowClick && $options.onRowClick.apply($options, arguments);
    }),
    onDblclick: _cache[2] || (_cache[2] = function() {
      return $options.onRowDblClick && $options.onRowDblClick.apply($options, arguments);
    }),
    onContextmenu: _cache[3] || (_cache[3] = function() {
      return $options.onRowRightClick && $options.onRowRightClick.apply($options, arguments);
    }),
    onTouchend: _cache[4] || (_cache[4] = function() {
      return $options.onRowTouchEnd && $options.onRowTouchEnd.apply($options, arguments);
    }),
    onKeydown: _cache[5] || (_cache[5] = withModifiers(function() {
      return $options.onRowKeyDown && $options.onRowKeyDown.apply($options, arguments);
    }, ["self"])),
    onMousedown: _cache[6] || (_cache[6] = function() {
      return $options.onRowMouseDown && $options.onRowMouseDown.apply($options, arguments);
    }),
    onDragstart: _cache[7] || (_cache[7] = function() {
      return $options.onRowDragStart && $options.onRowDragStart.apply($options, arguments);
    }),
    onDragover: _cache[8] || (_cache[8] = function() {
      return $options.onRowDragOver && $options.onRowDragOver.apply($options, arguments);
    }),
    onDragleave: _cache[9] || (_cache[9] = function() {
      return $options.onRowDragLeave && $options.onRowDragLeave.apply($options, arguments);
    }),
    onDragend: _cache[10] || (_cache[10] = function() {
      return $options.onRowDragEnd && $options.onRowDragEnd.apply($options, arguments);
    }),
    onDrop: _cache[11] || (_cache[11] = function() {
      return $options.onRowDrop && $options.onRowDrop.apply($options, arguments);
    })
  }, $options.getBodyRowPTOptions("bodyRow"), {
    "data-p-index": $options.rowIndex,
    "data-p-selectable-row": $props.selectionMode ? true : false,
    "data-p-selected": $props.selection && $options.isSelected,
    "data-p-selected-contextmenu": $props.contextMenuSelection && $options.isSelectedWithContextMenu
  }), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.columns, function(col, i) {
    return openBlock(), createElementBlock(Fragment, null, [$options.shouldRenderBodyCell(col) ? (openBlock(), createBlock(_component_DTBodyCell, {
      key: $options.columnProp(col, "columnKey") || $options.columnProp(col, "field") || i,
      rowData: $props.rowData,
      column: col,
      rowIndex: $options.rowIndex,
      index: i,
      selected: $options.isSelected,
      frozenRow: $props.frozenRow,
      rowspan: $props.rowGroupMode === "rowspan" ? $options.calculateRowGroupSize(col) : null,
      editMode: $props.editMode,
      editing: $props.editMode === "row" && $options.isRowEditing,
      editingMeta: $props.editingMeta,
      virtualScrollerContentProps: $props.virtualScrollerContentProps,
      ariaControls: $props.expandedRowId + "_" + $options.rowIndex + "_expansion",
      name: $props.nameAttributeSelector,
      isRowExpanded: $data.d_rowExpanded,
      expandedRowIcon: $props.expandedRowIcon,
      collapsedRowIcon: $props.collapsedRowIcon,
      editButtonProps: $props.editButtonProps,
      onRadioChange: $options.onRadioChange,
      onCheckboxChange: $options.onCheckboxChange,
      onRowToggle: $options.onRowToggle,
      onCellEditInit: $options.onCellEditInit,
      onCellEditComplete: $options.onCellEditComplete,
      onCellEditCancel: $options.onCellEditCancel,
      onRowEditInit: $options.onRowEditInit,
      onRowEditSave: $options.onRowEditSave,
      onRowEditCancel: $options.onRowEditCancel,
      onEditingMetaChange: $options.onEditingMetaChange,
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["rowData", "column", "rowIndex", "index", "selected", "frozenRow", "rowspan", "editMode", "editing", "editingMeta", "virtualScrollerContentProps", "ariaControls", "name", "isRowExpanded", "expandedRowIcon", "collapsedRowIcon", "editButtonProps", "onRadioChange", "onCheckboxChange", "onRowToggle", "onCellEditInit", "onCellEditComplete", "onCellEditCancel", "onRowEditInit", "onRowEditSave", "onRowEditCancel", "onEditingMetaChange", "unstyled", "pt"])) : createCommentVNode("", true)], 64);
  }), 256))], 16, _hoisted_2$2)) : createCommentVNode("", true), $props.templates["expansion"] && $props.expandedRows && $data.d_rowExpanded ? (openBlock(), createElementBlock("tr", mergeProps({
    key: 2,
    id: $props.expandedRowId + "_" + $options.rowIndex + "_expansion",
    "class": _ctx.cx("rowExpansion"),
    role: "row"
  }, _ctx.ptm("rowExpansion")), [createElementVNode("td", mergeProps({
    colspan: $options.columnsLength
  }, _objectSpread$9(_objectSpread$9({}, $options.getColumnPT("bodycell")), _ctx.ptm("rowExpansionCell"))), [(openBlock(), createBlock(resolveDynamicComponent($props.templates["expansion"]), {
    data: $props.rowData,
    index: $options.rowIndex
  }, null, 8, ["data", "index"]))], 16, _hoisted_4)], 16, _hoisted_3)) : createCommentVNode("", true), $props.templates["groupfooter"] && $props.rowGroupMode === "subheader" && $options.shouldRenderRowGroupFooter ? (openBlock(), createElementBlock("tr", mergeProps({
    key: 3,
    "class": _ctx.cx("rowGroupFooter"),
    role: "row"
  }, _ctx.ptm("rowGroupFooter")), [createElementVNode("td", mergeProps({
    colspan: $options.columnsLength - 1
  }, _objectSpread$9(_objectSpread$9({}, $options.getColumnPT("bodycell")), _ctx.ptm("rowGroupFooterCell"))), [(openBlock(), createBlock(resolveDynamicComponent($props.templates["groupfooter"]), {
    data: $props.rowData,
    index: $options.rowIndex
  }, null, 8, ["data", "index"]))], 16, _hoisted_5)], 16)) : createCommentVNode("", true)], 64)) : (openBlock(), createElementBlock("tr", mergeProps({
    key: 1,
    "class": _ctx.cx("emptyMessage"),
    role: "row"
  }, _ctx.ptm("emptyMessage")), [createElementVNode("td", mergeProps({
    colspan: $options.columnsLength
  }, _objectSpread$9(_objectSpread$9({}, $options.getColumnPT("bodycell")), _ctx.ptm("emptyMessageCell"))), [$props.templates.empty ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.empty), {
    key: 0
  })) : createCommentVNode("", true)], 16, _hoisted_6)], 16));
}
script$9.render = render$9;
var script$8 = {
  name: "TableBody",
  hostName: "DataTable",
  "extends": script$o,
  emits: ["rowgroup-toggle", "row-click", "row-dblclick", "row-rightclick", "row-touchend", "row-keydown", "row-mousedown", "row-dragstart", "row-dragover", "row-dragleave", "row-dragend", "row-drop", "row-toggle", "radio-change", "checkbox-change", "cell-edit-init", "cell-edit-complete", "cell-edit-cancel", "row-edit-init", "row-edit-save", "row-edit-cancel", "editing-meta-change"],
  props: {
    value: {
      type: Array,
      "default": null
    },
    columns: {
      type: null,
      "default": null
    },
    frozenRow: {
      type: Boolean,
      "default": false
    },
    empty: {
      type: Boolean,
      "default": false
    },
    rowGroupMode: {
      type: String,
      "default": null
    },
    groupRowsBy: {
      type: [Array, String, Function],
      "default": null
    },
    expandableRowGroups: {
      type: Boolean,
      "default": false
    },
    expandedRowGroups: {
      type: Array,
      "default": null
    },
    first: {
      type: Number,
      "default": 0
    },
    dataKey: {
      type: [String, Function],
      "default": null
    },
    expandedRowIcon: {
      type: String,
      "default": null
    },
    collapsedRowIcon: {
      type: String,
      "default": null
    },
    expandedRows: {
      type: [Array, Object],
      "default": null
    },
    selection: {
      type: [Array, Object],
      "default": null
    },
    selectionKeys: {
      type: null,
      "default": null
    },
    selectionMode: {
      type: String,
      "default": null
    },
    rowHover: {
      type: Boolean,
      "default": false
    },
    contextMenu: {
      type: Boolean,
      "default": false
    },
    contextMenuSelection: {
      type: Object,
      "default": null
    },
    rowClass: {
      type: null,
      "default": null
    },
    rowStyle: {
      type: null,
      "default": null
    },
    editMode: {
      type: String,
      "default": null
    },
    compareSelectionBy: {
      type: String,
      "default": "deepEquals"
    },
    editingRows: {
      type: Array,
      "default": null
    },
    editingRowKeys: {
      type: null,
      "default": null
    },
    editingMeta: {
      type: Object,
      "default": null
    },
    templates: {
      type: null,
      "default": null
    },
    scrollable: {
      type: Boolean,
      "default": false
    },
    editButtonProps: {
      type: Object,
      "default": null
    },
    virtualScrollerContentProps: {
      type: Object,
      "default": null
    },
    isVirtualScrollerDisabled: {
      type: Boolean,
      "default": false
    }
  },
  data: function data3() {
    return {
      rowGroupHeaderStyleObject: {}
    };
  },
  mounted: function mounted2() {
    if (this.frozenRow) {
      this.updateFrozenRowStickyPosition();
    }
    if (this.scrollable && this.rowGroupMode === "subheader") {
      this.updateFrozenRowGroupHeaderStickyPosition();
    }
  },
  updated: function updated2() {
    if (this.frozenRow) {
      this.updateFrozenRowStickyPosition();
    }
    if (this.scrollable && this.rowGroupMode === "subheader") {
      this.updateFrozenRowGroupHeaderStickyPosition();
    }
  },
  methods: {
    getRowKey: function getRowKey(rowData, rowIndex2) {
      return this.dataKey ? resolveFieldData(rowData, this.dataKey) : rowIndex2;
    },
    updateFrozenRowStickyPosition: function updateFrozenRowStickyPosition() {
      this.$el.style.top = getOuterHeight(this.$el.previousElementSibling) + "px";
    },
    updateFrozenRowGroupHeaderStickyPosition: function updateFrozenRowGroupHeaderStickyPosition() {
      var tableHeaderHeight = getOuterHeight(this.$el.previousElementSibling);
      this.rowGroupHeaderStyleObject.top = tableHeaderHeight + "px";
    },
    getVirtualScrollerProp: function getVirtualScrollerProp3(option, options) {
      options = options || this.virtualScrollerContentProps;
      return options ? options[option] : null;
    },
    bodyRef: function bodyRef(el) {
      var contentRef = this.getVirtualScrollerProp("contentRef");
      contentRef && contentRef(el);
    }
  },
  computed: {
    rowGroupHeaderStyle: function rowGroupHeaderStyle() {
      if (this.scrollable) {
        return {
          top: this.rowGroupHeaderStyleObject.top
        };
      }
      return null;
    },
    bodyContentStyle: function bodyContentStyle() {
      return this.getVirtualScrollerProp("contentStyle");
    },
    ptmTBodyOptions: function ptmTBodyOptions() {
      var _this$$parentInstance;
      return {
        context: {
          scrollable: (_this$$parentInstance = this.$parentInstance) === null || _this$$parentInstance === void 0 || (_this$$parentInstance = _this$$parentInstance.$parentInstance) === null || _this$$parentInstance === void 0 ? void 0 : _this$$parentInstance.scrollable
        }
      };
    },
    dataP: function dataP() {
      return cn({
        hoverable: this.rowHover || this.selectionMode,
        frozen: this.frozenRow
      });
    }
  },
  components: {
    DTBodyRow: script$9
  }
};
var _hoisted_1$7 = ["data-p"];
function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DTBodyRow = resolveComponent("DTBodyRow");
  return openBlock(), createElementBlock("tbody", mergeProps({
    ref: $options.bodyRef,
    "class": _ctx.cx("tbody"),
    role: "rowgroup",
    style: $options.bodyContentStyle,
    "data-p": $options.dataP
  }, _ctx.ptm("tbody", $options.ptmTBodyOptions)), [!$props.empty ? (openBlock(true), createElementBlock(Fragment, {
    key: 0
  }, renderList($props.value, function(rowData, rowIndex2) {
    return openBlock(), createBlock(_component_DTBodyRow, {
      key: $options.getRowKey(rowData, rowIndex2),
      rowData,
      index: rowIndex2,
      value: $props.value,
      columns: $props.columns,
      frozenRow: $props.frozenRow,
      empty: $props.empty,
      first: $props.first,
      dataKey: $props.dataKey,
      selection: $props.selection,
      selectionKeys: $props.selectionKeys,
      selectionMode: $props.selectionMode,
      contextMenu: $props.contextMenu,
      contextMenuSelection: $props.contextMenuSelection,
      rowGroupMode: $props.rowGroupMode,
      groupRowsBy: $props.groupRowsBy,
      expandableRowGroups: $props.expandableRowGroups,
      rowClass: $props.rowClass,
      rowStyle: $props.rowStyle,
      editMode: $props.editMode,
      compareSelectionBy: $props.compareSelectionBy,
      scrollable: $props.scrollable,
      expandedRowIcon: $props.expandedRowIcon,
      collapsedRowIcon: $props.collapsedRowIcon,
      expandedRows: $props.expandedRows,
      expandedRowGroups: $props.expandedRowGroups,
      editingRows: $props.editingRows,
      editingRowKeys: $props.editingRowKeys,
      templates: $props.templates,
      editButtonProps: $props.editButtonProps,
      virtualScrollerContentProps: $props.virtualScrollerContentProps,
      isVirtualScrollerDisabled: $props.isVirtualScrollerDisabled,
      editingMeta: $props.editingMeta,
      rowGroupHeaderStyle: $options.rowGroupHeaderStyle,
      expandedRowId: _ctx.$id,
      nameAttributeSelector: _ctx.$attrSelector,
      onRowgroupToggle: _cache[0] || (_cache[0] = function($event) {
        return _ctx.$emit("rowgroup-toggle", $event);
      }),
      onRowClick: _cache[1] || (_cache[1] = function($event) {
        return _ctx.$emit("row-click", $event);
      }),
      onRowDblclick: _cache[2] || (_cache[2] = function($event) {
        return _ctx.$emit("row-dblclick", $event);
      }),
      onRowRightclick: _cache[3] || (_cache[3] = function($event) {
        return _ctx.$emit("row-rightclick", $event);
      }),
      onRowTouchend: _cache[4] || (_cache[4] = function($event) {
        return _ctx.$emit("row-touchend", $event);
      }),
      onRowKeydown: _cache[5] || (_cache[5] = function($event) {
        return _ctx.$emit("row-keydown", $event);
      }),
      onRowMousedown: _cache[6] || (_cache[6] = function($event) {
        return _ctx.$emit("row-mousedown", $event);
      }),
      onRowDragstart: _cache[7] || (_cache[7] = function($event) {
        return _ctx.$emit("row-dragstart", $event);
      }),
      onRowDragover: _cache[8] || (_cache[8] = function($event) {
        return _ctx.$emit("row-dragover", $event);
      }),
      onRowDragleave: _cache[9] || (_cache[9] = function($event) {
        return _ctx.$emit("row-dragleave", $event);
      }),
      onRowDragend: _cache[10] || (_cache[10] = function($event) {
        return _ctx.$emit("row-dragend", $event);
      }),
      onRowDrop: _cache[11] || (_cache[11] = function($event) {
        return _ctx.$emit("row-drop", $event);
      }),
      onRowToggle: _cache[12] || (_cache[12] = function($event) {
        return _ctx.$emit("row-toggle", $event);
      }),
      onRadioChange: _cache[13] || (_cache[13] = function($event) {
        return _ctx.$emit("radio-change", $event);
      }),
      onCheckboxChange: _cache[14] || (_cache[14] = function($event) {
        return _ctx.$emit("checkbox-change", $event);
      }),
      onCellEditInit: _cache[15] || (_cache[15] = function($event) {
        return _ctx.$emit("cell-edit-init", $event);
      }),
      onCellEditComplete: _cache[16] || (_cache[16] = function($event) {
        return _ctx.$emit("cell-edit-complete", $event);
      }),
      onCellEditCancel: _cache[17] || (_cache[17] = function($event) {
        return _ctx.$emit("cell-edit-cancel", $event);
      }),
      onRowEditInit: _cache[18] || (_cache[18] = function($event) {
        return _ctx.$emit("row-edit-init", $event);
      }),
      onRowEditSave: _cache[19] || (_cache[19] = function($event) {
        return _ctx.$emit("row-edit-save", $event);
      }),
      onRowEditCancel: _cache[20] || (_cache[20] = function($event) {
        return _ctx.$emit("row-edit-cancel", $event);
      }),
      onEditingMetaChange: _cache[21] || (_cache[21] = function($event) {
        return _ctx.$emit("editing-meta-change", $event);
      }),
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["rowData", "index", "value", "columns", "frozenRow", "empty", "first", "dataKey", "selection", "selectionKeys", "selectionMode", "contextMenu", "contextMenuSelection", "rowGroupMode", "groupRowsBy", "expandableRowGroups", "rowClass", "rowStyle", "editMode", "compareSelectionBy", "scrollable", "expandedRowIcon", "collapsedRowIcon", "expandedRows", "expandedRowGroups", "editingRows", "editingRowKeys", "templates", "editButtonProps", "virtualScrollerContentProps", "isVirtualScrollerDisabled", "editingMeta", "rowGroupHeaderStyle", "expandedRowId", "nameAttributeSelector", "unstyled", "pt"]);
  }), 128)) : (openBlock(), createBlock(_component_DTBodyRow, {
    key: 1,
    empty: $props.empty,
    columns: $props.columns,
    templates: $props.templates,
    unstyled: _ctx.unstyled,
    pt: _ctx.pt
  }, null, 8, ["empty", "columns", "templates", "unstyled", "pt"]))], 16, _hoisted_1$7);
}
script$8.render = render$8;
var script$7 = {
  name: "FooterCell",
  hostName: "DataTable",
  "extends": script$o,
  props: {
    column: {
      type: Object,
      "default": null
    },
    index: {
      type: Number,
      "default": null
    }
  },
  data: function data4() {
    return {
      styleObject: {}
    };
  },
  mounted: function mounted3() {
    if (this.columnProp("frozen")) {
      this.updateStickyPosition();
    }
  },
  updated: function updated3() {
    if (this.columnProp("frozen")) {
      this.updateStickyPosition();
    }
  },
  methods: {
    columnProp: function columnProp3(prop) {
      return getVNodeProp(this.column, prop);
    },
    getColumnPT: function getColumnPT5(key) {
      var _this$$parentInstance, _this$$parentInstance2;
      var columnMetaData = {
        props: this.column.props,
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index: this.index,
          size: (_this$$parentInstance = this.$parentInstance) === null || _this$$parentInstance === void 0 || (_this$$parentInstance = _this$$parentInstance.$parentInstance) === null || _this$$parentInstance === void 0 ? void 0 : _this$$parentInstance.size,
          showGridlines: ((_this$$parentInstance2 = this.$parentInstance) === null || _this$$parentInstance2 === void 0 || (_this$$parentInstance2 = _this$$parentInstance2.$parentInstance) === null || _this$$parentInstance2 === void 0 ? void 0 : _this$$parentInstance2.showGridlines) || false
        }
      };
      return mergeProps(this.ptm("column.".concat(key), {
        column: columnMetaData
      }), this.ptm("column.".concat(key), columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
    },
    getColumnProp: function getColumnProp4() {
      return this.column.props && this.column.props.pt ? this.column.props.pt : void 0;
    },
    updateStickyPosition: function updateStickyPosition2() {
      if (this.columnProp("frozen")) {
        var align = this.columnProp("alignFrozen");
        if (align === "right") {
          var pos = 0;
          var next = getNextElementSibling(this.$el, '[data-p-frozen-column="true"]');
          if (next) {
            pos = getOuterWidth(next) + parseFloat(next.style["inset-inline-end"] || 0);
          }
          this.styleObject.insetInlineEnd = pos + "px";
        } else {
          var _pos = 0;
          var prev = getPreviousElementSibling(this.$el, '[data-p-frozen-column="true"]');
          if (prev) {
            _pos = getOuterWidth(prev) + parseFloat(prev.style["inset-inline-start"] || 0);
          }
          this.styleObject.insetInlineStart = _pos + "px";
        }
      }
    }
  },
  computed: {
    containerClass: function containerClass2() {
      return [this.columnProp("footerClass"), this.columnProp("class"), this.cx("footerCell")];
    },
    containerStyle: function containerStyle2() {
      var bodyStyle = this.columnProp("footerStyle");
      var columnStyle = this.columnProp("style");
      return this.columnProp("frozen") ? [columnStyle, bodyStyle, this.styleObject] : [columnStyle, bodyStyle];
    }
  }
};
function _typeof$8(o) {
  "@babel/helpers - typeof";
  return _typeof$8 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$8(o);
}
function ownKeys$8(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$8(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$8(Object(t), true).forEach(function(r2) {
      _defineProperty$8(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$8(e, r, t) {
  return (r = _toPropertyKey$8(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$8(t) {
  var i = _toPrimitive$8(t, "string");
  return "symbol" == _typeof$8(i) ? i : i + "";
}
function _toPrimitive$8(t, r) {
  if ("object" != _typeof$8(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$8(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1$6 = ["colspan", "rowspan", "data-p-frozen-column"];
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("td", mergeProps({
    style: $options.containerStyle,
    "class": $options.containerClass,
    role: "cell",
    colspan: $options.columnProp("colspan"),
    rowspan: $options.columnProp("rowspan")
  }, _objectSpread$8(_objectSpread$8({}, $options.getColumnPT("root")), $options.getColumnPT("footerCell")), {
    "data-p-frozen-column": $options.columnProp("frozen")
  }), [$props.column.children && $props.column.children.footer ? (openBlock(), createBlock(resolveDynamicComponent($props.column.children.footer), {
    key: 0,
    column: $props.column
  }, null, 8, ["column"])) : createCommentVNode("", true), $options.columnProp("footer") ? (openBlock(), createElementBlock("span", mergeProps({
    key: 1,
    "class": _ctx.cx("columnFooter")
  }, $options.getColumnPT("columnFooter")), toDisplayString($options.columnProp("footer")), 17)) : createCommentVNode("", true)], 16, _hoisted_1$6);
}
script$7.render = render$7;
function _createForOfIteratorHelper$1(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray$1(r)) || e) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t["return"] || t["return"]();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray$1(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
  }
}
function _arrayLikeToArray$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var script$6 = {
  name: "TableFooter",
  hostName: "DataTable",
  "extends": script$o,
  props: {
    columnGroup: {
      type: null,
      "default": null
    },
    columns: {
      type: Object,
      "default": null
    }
  },
  provide: function provide2() {
    return {
      $rows: this.d_footerRows,
      $columns: this.d_footerColumns
    };
  },
  data: function data5() {
    return {
      d_footerRows: new _default({
        type: "Row"
      }),
      d_footerColumns: new _default({
        type: "Column"
      })
    };
  },
  beforeUnmount: function beforeUnmount2() {
    this.d_footerRows.clear();
    this.d_footerColumns.clear();
  },
  methods: {
    columnProp: function columnProp4(col, prop) {
      return getVNodeProp(col, prop);
    },
    getColumnGroupPT: function getColumnGroupPT(key) {
      var columnGroupMetaData = {
        props: this.getColumnGroupProps(),
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          type: "footer",
          scrollable: this.ptmTFootOptions.context.scrollable
        }
      };
      return mergeProps(this.ptm("columnGroup.".concat(key), {
        columnGroup: columnGroupMetaData
      }), this.ptm("columnGroup.".concat(key), columnGroupMetaData), this.ptmo(this.getColumnGroupProps(), key, columnGroupMetaData));
    },
    getColumnGroupProps: function getColumnGroupProps() {
      return this.columnGroup && this.columnGroup.props && this.columnGroup.props.pt ? this.columnGroup.props.pt : void 0;
    },
    getRowPT: function getRowPT(row2, key, index) {
      var rowMetaData = {
        props: row2.props,
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index
        }
      };
      return mergeProps(this.ptm("row.".concat(key), {
        row: rowMetaData
      }), this.ptm("row.".concat(key), rowMetaData), this.ptmo(this.getRowProp(row2), key, rowMetaData));
    },
    getRowProp: function getRowProp(row2) {
      return row2.props && row2.props.pt ? row2.props.pt : void 0;
    },
    getFooterRows: function getFooterRows() {
      var _this$d_footerRows;
      return (_this$d_footerRows = this.d_footerRows) === null || _this$d_footerRows === void 0 ? void 0 : _this$d_footerRows.get(this.columnGroup, this.columnGroup.children);
    },
    getFooterColumns: function getFooterColumns(row2) {
      var _this$d_footerColumns;
      return (_this$d_footerColumns = this.d_footerColumns) === null || _this$d_footerColumns === void 0 ? void 0 : _this$d_footerColumns.get(row2, row2.children);
    }
  },
  computed: {
    hasFooter: function hasFooter() {
      var hasFooter2 = false;
      if (this.columnGroup) {
        hasFooter2 = true;
      } else if (this.columns) {
        var _iterator = _createForOfIteratorHelper$1(this.columns), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var col = _step.value;
            if (this.columnProp(col, "footer") || col.children && col.children.footer) {
              hasFooter2 = true;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return hasFooter2;
    },
    ptmTFootOptions: function ptmTFootOptions() {
      var _this$$parentInstance;
      return {
        context: {
          scrollable: (_this$$parentInstance = this.$parentInstance) === null || _this$$parentInstance === void 0 || (_this$$parentInstance = _this$$parentInstance.$parentInstance) === null || _this$$parentInstance === void 0 ? void 0 : _this$$parentInstance.scrollable
        }
      };
    }
  },
  components: {
    DTFooterCell: script$7
  }
};
function _typeof$7(o) {
  "@babel/helpers - typeof";
  return _typeof$7 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$7(o);
}
function ownKeys$7(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$7(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$7(Object(t), true).forEach(function(r2) {
      _defineProperty$7(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$7(e, r, t) {
  return (r = _toPropertyKey$7(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$7(t) {
  var i = _toPrimitive$7(t, "string");
  return "symbol" == _typeof$7(i) ? i : i + "";
}
function _toPrimitive$7(t, r) {
  if ("object" != _typeof$7(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$7(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1$5 = ["data-p-scrollable"];
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$$parentInstance;
  var _component_DTFooterCell = resolveComponent("DTFooterCell");
  return $options.hasFooter ? (openBlock(), createElementBlock("tfoot", mergeProps({
    key: 0,
    "class": _ctx.cx("tfoot"),
    style: _ctx.sx("tfoot"),
    role: "rowgroup"
  }, $props.columnGroup ? _objectSpread$7(_objectSpread$7({}, _ctx.ptm("tfoot", $options.ptmTFootOptions)), $options.getColumnGroupPT("root")) : _ctx.ptm("tfoot", $options.ptmTFootOptions), {
    "data-p-scrollable": (_ctx$$parentInstance = _ctx.$parentInstance) === null || _ctx$$parentInstance === void 0 || (_ctx$$parentInstance = _ctx$$parentInstance.$parentInstance) === null || _ctx$$parentInstance === void 0 ? void 0 : _ctx$$parentInstance.scrollable,
    "data-pc-section": "tfoot"
  }), [!$props.columnGroup ? (openBlock(), createElementBlock("tr", mergeProps({
    key: 0,
    role: "row"
  }, _ctx.ptm("footerRow")), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.columns, function(col, i) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.columnProp(col, "columnKey") || $options.columnProp(col, "field") || i
    }, [!$options.columnProp(col, "hidden") ? (openBlock(), createBlock(_component_DTFooterCell, {
      key: 0,
      column: col,
      pt: _ctx.pt
    }, null, 8, ["column", "pt"])) : createCommentVNode("", true)], 64);
  }), 128))], 16)) : (openBlock(true), createElementBlock(Fragment, {
    key: 1
  }, renderList($options.getFooterRows(), function(row2, i) {
    return openBlock(), createElementBlock("tr", mergeProps({
      key: i,
      role: "row"
    }, {
      ref_for: true
    }, _objectSpread$7(_objectSpread$7({}, _ctx.ptm("footerRow")), $options.getRowPT(row2, "root", i))), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.getFooterColumns(row2), function(col, j) {
      return openBlock(), createElementBlock(Fragment, {
        key: $options.columnProp(col, "columnKey") || $options.columnProp(col, "field") || j
      }, [!$options.columnProp(col, "hidden") ? (openBlock(), createBlock(_component_DTFooterCell, {
        key: 0,
        column: col,
        index: i,
        pt: _ctx.pt
      }, null, 8, ["column", "index", "pt"])) : createCommentVNode("", true)], 64);
    }), 128))], 16);
  }), 128))], 16, _hoisted_1$5)) : createCommentVNode("", true);
}
script$6.render = render$6;
function _typeof$6(o) {
  "@babel/helpers - typeof";
  return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$6(o);
}
function ownKeys$6(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$6(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$6(Object(t), true).forEach(function(r2) {
      _defineProperty$6(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$6(e, r, t) {
  return (r = _toPropertyKey$6(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$6(t) {
  var i = _toPrimitive$6(t, "string");
  return "symbol" == _typeof$6(i) ? i : i + "";
}
function _toPrimitive$6(t, r) {
  if ("object" != _typeof$6(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$6(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var script$5 = {
  name: "ColumnFilter",
  hostName: "DataTable",
  "extends": script$o,
  emits: ["filter-change", "filter-apply", "operator-change", "matchmode-change", "constraint-add", "constraint-remove", "filter-clear", "apply-click"],
  props: {
    field: {
      type: String,
      "default": null
    },
    type: {
      type: String,
      "default": "text"
    },
    display: {
      type: String,
      "default": null
    },
    showMenu: {
      type: Boolean,
      "default": true
    },
    matchMode: {
      type: String,
      "default": null
    },
    showOperator: {
      type: Boolean,
      "default": true
    },
    showClearButton: {
      type: Boolean,
      "default": true
    },
    showApplyButton: {
      type: Boolean,
      "default": true
    },
    showMatchModes: {
      type: Boolean,
      "default": true
    },
    showAddButton: {
      type: Boolean,
      "default": true
    },
    matchModeOptions: {
      type: Array,
      "default": null
    },
    maxConstraints: {
      type: Number,
      "default": 2
    },
    filterElement: {
      type: Function,
      "default": null
    },
    filterHeaderTemplate: {
      type: Function,
      "default": null
    },
    filterFooterTemplate: {
      type: Function,
      "default": null
    },
    filterClearTemplate: {
      type: Function,
      "default": null
    },
    filterApplyTemplate: {
      type: Function,
      "default": null
    },
    filterIconTemplate: {
      type: Function,
      "default": null
    },
    filterAddIconTemplate: {
      type: Function,
      "default": null
    },
    filterRemoveIconTemplate: {
      type: Function,
      "default": null
    },
    filterClearIconTemplate: {
      type: Function,
      "default": null
    },
    filters: {
      type: Object,
      "default": null
    },
    filtersStore: {
      type: Object,
      "default": null
    },
    filterMenuClass: {
      type: String,
      "default": null
    },
    filterMenuStyle: {
      type: null,
      "default": null
    },
    filterInputProps: {
      type: null,
      "default": null
    },
    filterButtonProps: {
      type: null,
      "default": null
    },
    column: null
  },
  data: function data6() {
    return {
      overlayVisible: false,
      defaultMatchMode: null,
      defaultOperator: null
    };
  },
  overlay: null,
  selfClick: false,
  overlayEventListener: null,
  beforeUnmount: function beforeUnmount3() {
    if (this.overlayEventListener) {
      OverlayEventBus.off("overlay-click", this.overlayEventListener);
      this.overlayEventListener = null;
    }
    if (this.overlay) {
      ZIndex.clear(this.overlay);
      this.onOverlayHide();
    }
  },
  mounted: function mounted4() {
    if (this.filters && this.filters[this.field]) {
      var fieldFilters = this.filters[this.field];
      if (fieldFilters.operator) {
        this.defaultMatchMode = fieldFilters.constraints[0].matchMode;
        this.defaultOperator = fieldFilters.operator;
      } else {
        this.defaultMatchMode = this.filters[this.field].matchMode;
      }
    }
  },
  methods: {
    getColumnPT: function getColumnPT6(key, params) {
      var columnMetaData = _objectSpread$6({
        props: this.column.props,
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        }
      }, params);
      return mergeProps(this.ptm("column.".concat(key), {
        column: columnMetaData
      }), this.ptm("column.".concat(key), columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
    },
    getColumnProp: function getColumnProp5() {
      return this.column.props && this.column.props.pt ? this.column.props.pt : void 0;
    },
    ptmFilterConstraintOptions: function ptmFilterConstraintOptions(matchMode) {
      return {
        context: {
          highlighted: matchMode && this.isRowMatchModeSelected(matchMode.value)
        }
      };
    },
    clearFilter: function clearFilter() {
      var _filters = _objectSpread$6({}, this.filters);
      if (_filters[this.field].operator) {
        _filters[this.field].constraints.splice(1);
        _filters[this.field].operator = this.defaultOperator;
        _filters[this.field].constraints[0] = {
          value: null,
          matchMode: this.defaultMatchMode
        };
      } else {
        _filters[this.field].value = null;
        _filters[this.field].matchMode = this.defaultMatchMode;
      }
      this.$emit("filter-clear");
      this.$emit("filter-change", _filters);
      this.$emit("filter-apply");
      this.hide();
    },
    applyFilter: function applyFilter() {
      this.$emit("apply-click", {
        field: this.field,
        constraints: this.filters[this.field]
      });
      this.$emit("filter-apply");
      this.hide();
    },
    hasFilter: function hasFilter() {
      if (this.filtersStore) {
        var fieldFilter = this.filtersStore[this.field];
        if (fieldFilter) {
          if (fieldFilter.operator) return !this.isFilterBlank(fieldFilter.constraints[0].value);
          else return !this.isFilterBlank(fieldFilter.value);
        }
      }
      return false;
    },
    hasRowFilter: function hasRowFilter() {
      return this.filters[this.field] && !this.isFilterBlank(this.filters[this.field].value);
    },
    isFilterBlank: function isFilterBlank(filter22) {
      if (filter22 !== null && filter22 !== void 0) {
        if (typeof filter22 === "string" && filter22.trim().length == 0 || filter22 instanceof Array && filter22.length == 0) return true;
        else return false;
      }
      return true;
    },
    toggleMenu: function toggleMenu(event) {
      this.overlayVisible = !this.overlayVisible;
      event.preventDefault();
    },
    onToggleButtonKeyDown: function onToggleButtonKeyDown(event) {
      switch (event.code) {
        case "Enter":
        case "NumpadEnter":
        case "Space":
          this.toggleMenu(event);
          break;
        case "Escape":
          this.overlayVisible = false;
          break;
      }
    },
    onRowMatchModeChange: function onRowMatchModeChange(matchMode) {
      var _filters = _objectSpread$6({}, this.filters);
      _filters[this.field].matchMode = matchMode;
      this.$emit("matchmode-change", {
        field: this.field,
        matchMode
      });
      this.$emit("filter-change", _filters);
      this.$emit("filter-apply");
      this.hide();
    },
    onRowMatchModeKeyDown: function onRowMatchModeKeyDown(event) {
      var item = event.target;
      switch (event.code) {
        case "ArrowDown":
          var nextItem = this.findNextItem(item);
          if (nextItem) {
            item.removeAttribute("tabindex");
            nextItem.tabIndex = "0";
            nextItem.focus();
          }
          event.preventDefault();
          break;
        case "ArrowUp":
          var prevItem = this.findPrevItem(item);
          if (prevItem) {
            item.removeAttribute("tabindex");
            prevItem.tabIndex = "0";
            prevItem.focus();
          }
          event.preventDefault();
          break;
      }
    },
    isRowMatchModeSelected: function isRowMatchModeSelected(matchMode) {
      return this.filters[this.field].matchMode === matchMode;
    },
    onOperatorChange: function onOperatorChange(value) {
      var _filters = _objectSpread$6({}, this.filters);
      _filters[this.field].operator = value;
      this.$emit("filter-change", _filters);
      this.$emit("operator-change", {
        field: this.field,
        operator: value
      });
      if (!this.showApplyButton) {
        this.$emit("filter-apply");
      }
    },
    onMenuMatchModeChange: function onMenuMatchModeChange(value, index) {
      var _filters = _objectSpread$6({}, this.filters);
      _filters[this.field].constraints[index].matchMode = value;
      this.$emit("matchmode-change", {
        field: this.field,
        matchMode: value,
        index
      });
      if (!this.showApplyButton) {
        this.$emit("filter-apply");
      }
    },
    addConstraint: function addConstraint() {
      var _filters = _objectSpread$6({}, this.filters);
      var newConstraint = {
        value: null,
        matchMode: this.defaultMatchMode
      };
      _filters[this.field].constraints.push(newConstraint);
      this.$emit("constraint-add", {
        field: this.field,
        constraint: newConstraint
      });
      this.$emit("filter-change", _filters);
      if (!this.showApplyButton) {
        this.$emit("filter-apply");
      }
    },
    removeConstraint: function removeConstraint(index) {
      var _filters = _objectSpread$6({}, this.filters);
      var removedConstraint = _filters[this.field].constraints.splice(index, 1);
      this.$emit("constraint-remove", {
        field: this.field,
        constraint: removedConstraint
      });
      this.$emit("filter-change", _filters);
      if (!this.showApplyButton) {
        this.$emit("filter-apply");
      }
    },
    filterCallback: function filterCallback() {
      this.$emit("filter-apply");
    },
    findNextItem: function findNextItem(item) {
      var nextItem = item.nextElementSibling;
      if (nextItem) return getAttribute(nextItem, "data-pc-section") === "filterconstraintseparator" ? this.findNextItem(nextItem) : nextItem;
      else return item.parentElement.firstElementChild;
    },
    findPrevItem: function findPrevItem(item) {
      var prevItem = item.previousElementSibling;
      if (prevItem) return getAttribute(prevItem, "data-pc-section") === "filterconstraintseparator" ? this.findPrevItem(prevItem) : prevItem;
      else return item.parentElement.lastElementChild;
    },
    hide: function hide() {
      this.overlayVisible = false;
      this.showMenuButton && focus(this.$refs.icon.$el);
    },
    onContentClick: function onContentClick(event) {
      this.selfClick = true;
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.overlay
      });
    },
    onContentMouseDown: function onContentMouseDown() {
      this.selfClick = true;
    },
    onOverlayEnter: function onOverlayEnter(el) {
      var _this = this;
      if (this.filterMenuStyle) {
        addStyle(this.overlay, this.filterMenuStyle);
      }
      ZIndex.set("overlay", el, this.$primevue.config.zIndex.overlay);
      addStyle(el, {
        position: "absolute",
        top: "0"
      });
      absolutePosition(this.overlay, this.$refs.icon.$el);
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      this.overlayEventListener = function(e) {
        if (!_this.isOutsideClicked(e.target)) {
          _this.selfClick = true;
        }
      };
      OverlayEventBus.on("overlay-click", this.overlayEventListener);
    },
    onOverlayAfterEnter: function onOverlayAfterEnter() {
      var _this$overlay;
      (_this$overlay = this.overlay) === null || _this$overlay === void 0 || (_this$overlay = _this$overlay.$focustrap) === null || _this$overlay === void 0 || _this$overlay.autoFocus();
    },
    onOverlayLeave: function onOverlayLeave() {
      this.onOverlayHide();
    },
    onOverlayAfterLeave: function onOverlayAfterLeave(el) {
      ZIndex.clear(el);
    },
    onOverlayHide: function onOverlayHide() {
      this.unbindOutsideClickListener();
      this.unbindResizeListener();
      this.unbindScrollListener();
      this.overlay = null;
      OverlayEventBus.off("overlay-click", this.overlayEventListener);
      this.overlayEventListener = null;
    },
    overlayRef: function overlayRef(el) {
      this.overlay = el;
    },
    isOutsideClicked: function isOutsideClicked(target) {
      return !this.isTargetClicked(target) && this.overlay && !(this.overlay.isSameNode(target) || this.overlay.contains(target));
    },
    isTargetClicked: function isTargetClicked(target) {
      return this.$refs.icon && (this.$refs.icon.$el.isSameNode(target) || this.$refs.icon.$el.contains(target));
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this2 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          if (_this2.overlayVisible && !_this2.selfClick && _this2.isOutsideClicked(event.target)) {
            _this2.overlayVisible = false;
          }
          _this2.selfClick = false;
        };
        (void 0).addEventListener("click", this.outsideClickListener, true);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        (void 0).removeEventListener("click", this.outsideClickListener, true);
        this.outsideClickListener = null;
        this.selfClick = false;
      }
    },
    bindScrollListener: function bindScrollListener() {
      var _this3 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.icon.$el, function() {
          if (_this3.overlayVisible) {
            _this3.hide();
          }
        });
      }
      this.scrollHandler.bindScrollListener();
    },
    unbindScrollListener: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    },
    bindResizeListener: function bindResizeListener() {
      var _this4 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this4.overlayVisible && !isTouchDevice()) {
            _this4.hide();
          }
        };
        (void 0).addEventListener("resize", this.resizeListener);
      }
    },
    unbindResizeListener: function unbindResizeListener() {
      if (this.resizeListener) {
        (void 0).removeEventListener("resize", this.resizeListener);
        this.resizeListener = null;
      }
    }
  },
  computed: {
    showMenuButton: function showMenuButton() {
      return this.showMenu && (this.display === "row" ? this.type !== "boolean" : true);
    },
    overlayId: function overlayId() {
      return this.$id + "_overlay";
    },
    matchModes: function matchModes() {
      var _this5 = this;
      return this.matchModeOptions || this.$primevue.config.filterMatchModeOptions[this.type].map(function(key) {
        return {
          label: _this5.$primevue.config.locale[key],
          value: key
        };
      });
    },
    isShowMatchModes: function isShowMatchModes() {
      return this.type !== "boolean" && this.showMatchModes && this.matchModes;
    },
    operatorOptions: function operatorOptions() {
      return [{
        label: this.$primevue.config.locale.matchAll,
        value: FilterOperator.AND
      }, {
        label: this.$primevue.config.locale.matchAny,
        value: FilterOperator.OR
      }];
    },
    noFilterLabel: function noFilterLabel() {
      return this.$primevue.config.locale ? this.$primevue.config.locale.noFilter : void 0;
    },
    isShowOperator: function isShowOperator() {
      return this.showOperator && this.filters[this.field].operator;
    },
    operator: function operator() {
      return this.filters[this.field].operator;
    },
    fieldConstraints: function fieldConstraints() {
      return this.filters[this.field].constraints || [this.filters[this.field]];
    },
    showRemoveIcon: function showRemoveIcon() {
      return this.fieldConstraints.length > 1;
    },
    removeRuleButtonLabel: function removeRuleButtonLabel() {
      return this.$primevue.config.locale ? this.$primevue.config.locale.removeRule : void 0;
    },
    addRuleButtonLabel: function addRuleButtonLabel() {
      return this.$primevue.config.locale ? this.$primevue.config.locale.addRule : void 0;
    },
    isShowAddConstraint: function isShowAddConstraint() {
      return this.showAddButton && this.filters[this.field].operator && this.fieldConstraints && this.fieldConstraints.length < this.maxConstraints;
    },
    clearButtonLabel: function clearButtonLabel() {
      return this.$primevue.config.locale ? this.$primevue.config.locale.clear : void 0;
    },
    applyButtonLabel: function applyButtonLabel() {
      return this.$primevue.config.locale ? this.$primevue.config.locale.apply : void 0;
    },
    columnFilterButtonAriaLabel: function columnFilterButtonAriaLabel() {
      return this.$primevue.config.locale ? this.overlayVisible ? this.$primevue.config.locale.showFilterMenu : this.$primevue.config.locale.hideFilterMenu : void 0;
    },
    filterOperatorAriaLabel: function filterOperatorAriaLabel() {
      return this.$primevue.config.locale ? this.$primevue.config.locale.filterOperator : void 0;
    },
    filterRuleAriaLabel: function filterRuleAriaLabel() {
      return this.$primevue.config.locale ? this.$primevue.config.locale.filterConstraint : void 0;
    },
    ptmHeaderFilterClearParams: function ptmHeaderFilterClearParams() {
      return {
        context: {
          hidden: this.hasRowFilter()
        }
      };
    },
    ptmFilterMenuParams: function ptmFilterMenuParams() {
      return {
        context: {
          overlayVisible: this.overlayVisible,
          active: this.hasFilter()
        }
      };
    }
  },
  components: {
    Select: script$z,
    Button: script$u,
    Portal: script$y,
    FilterSlashIcon: script$f,
    FilterFillIcon: script$g,
    FilterIcon: script$h,
    TrashIcon: script$e,
    PlusIcon: script$x
  },
  directives: {
    focustrap: FocusTrap
  }
};
function _typeof$5(o) {
  "@babel/helpers - typeof";
  return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$5(o);
}
function ownKeys$5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$5(Object(t), true).forEach(function(r2) {
      _defineProperty$5(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$5(e, r, t) {
  return (r = _toPropertyKey$5(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$5(t) {
  var i = _toPrimitive$5(t, "string");
  return "symbol" == _typeof$5(i) ? i : i + "";
}
function _toPrimitive$5(t, r) {
  if ("object" != _typeof$5(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$5(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1$4 = ["id", "aria-modal"];
var _hoisted_2$1 = ["onClick", "onKeydown", "tabindex"];
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = resolveComponent("Button");
  var _component_Select = resolveComponent("Select");
  var _component_Portal = resolveComponent("Portal");
  var _directive_focustrap = resolveDirective("focustrap");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("filter")
  }, $options.getColumnPT("filter")), [$props.display === "row" ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("filterElementContainer")
  }, _objectSpread$5(_objectSpread$5({}, $props.filterInputProps), $options.getColumnPT("filterElementContainer"))), [(openBlock(), createBlock(resolveDynamicComponent($props.filterElement), {
    field: $props.field,
    filterModel: $props.filters[$props.field],
    filterCallback: $options.filterCallback
  }, null, 8, ["field", "filterModel", "filterCallback"]))], 16)) : createCommentVNode("", true), $options.showMenuButton ? (openBlock(), createBlock(_component_Button, mergeProps({
    key: 1,
    ref: "icon",
    "aria-label": $options.columnFilterButtonAriaLabel,
    "aria-haspopup": "true",
    "aria-expanded": $data.overlayVisible,
    "aria-controls": $options.overlayId,
    "class": _ctx.cx("pcColumnFilterButton"),
    unstyled: _ctx.unstyled,
    onClick: _cache[0] || (_cache[0] = function($event) {
      return $options.toggleMenu($event);
    }),
    onKeydown: _cache[1] || (_cache[1] = function($event) {
      return $options.onToggleButtonKeyDown($event);
    })
  }, _objectSpread$5(_objectSpread$5({}, $options.getColumnPT("pcColumnFilterButton", $options.ptmFilterMenuParams)), $props.filterButtonProps.filter)), {
    icon: withCtx(function(slotProps) {
      return [(openBlock(), createBlock(resolveDynamicComponent($props.filterIconTemplate || ($options.hasFilter() ? "FilterFillIcon" : "FilterIcon")), mergeProps({
        "class": slotProps["class"]
      }, $options.getColumnPT("filterMenuIcon")), null, 16, ["class"]))];
    }),
    _: 1
  }, 16, ["aria-label", "aria-expanded", "aria-controls", "class", "unstyled"])) : createCommentVNode("", true), createVNode(_component_Portal, null, {
    "default": withCtx(function() {
      return [createVNode(Transition, mergeProps({
        name: "p-connected-overlay",
        onEnter: $options.onOverlayEnter,
        onAfterEnter: $options.onOverlayAfterEnter,
        onLeave: $options.onOverlayLeave,
        onAfterLeave: $options.onOverlayAfterLeave
      }, $options.getColumnPT("transition")), {
        "default": withCtx(function() {
          return [$data.overlayVisible ? withDirectives((openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.overlayRef,
            id: $options.overlayId,
            "aria-modal": $data.overlayVisible,
            role: "dialog",
            "class": [_ctx.cx("filterOverlay"), $props.filterMenuClass],
            onKeydown: _cache[10] || (_cache[10] = withKeys(function() {
              return $options.hide && $options.hide.apply($options, arguments);
            }, ["escape"])),
            onClick: _cache[11] || (_cache[11] = function() {
              return $options.onContentClick && $options.onContentClick.apply($options, arguments);
            }),
            onMousedown: _cache[12] || (_cache[12] = function() {
              return $options.onContentMouseDown && $options.onContentMouseDown.apply($options, arguments);
            })
          }, $options.getColumnPT("filterOverlay")), [(openBlock(), createBlock(resolveDynamicComponent($props.filterHeaderTemplate), {
            field: $props.field,
            filterModel: $props.filters[$props.field],
            filterCallback: $options.filterCallback
          }, null, 8, ["field", "filterModel", "filterCallback"])), $props.display === "row" ? (openBlock(), createElementBlock("ul", mergeProps({
            key: 0,
            "class": _ctx.cx("filterConstraintList")
          }, $options.getColumnPT("filterConstraintList")), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.matchModes, function(matchMode, i) {
            return openBlock(), createElementBlock("li", mergeProps({
              key: matchMode.label,
              "class": _ctx.cx("filterConstraint", {
                matchMode
              }),
              onClick: function onClick3($event) {
                return $options.onRowMatchModeChange(matchMode.value);
              },
              onKeydown: [_cache[2] || (_cache[2] = function($event) {
                return $options.onRowMatchModeKeyDown($event);
              }), withKeys(withModifiers(function($event) {
                return $options.onRowMatchModeChange(matchMode.value);
              }, ["prevent"]), ["enter"])],
              tabindex: i === 0 ? "0" : null
            }, {
              ref_for: true
            }, $options.getColumnPT("filterConstraint", $options.ptmFilterConstraintOptions(matchMode))), toDisplayString(matchMode.label), 17, _hoisted_2$1);
          }), 128)), createElementVNode("li", mergeProps({
            "class": _ctx.cx("filterConstraintSeparator")
          }, $options.getColumnPT("filterConstraintSeparator")), null, 16), createElementVNode("li", mergeProps({
            "class": _ctx.cx("filterConstraint"),
            onClick: _cache[3] || (_cache[3] = function($event) {
              return $options.clearFilter();
            }),
            onKeydown: [_cache[4] || (_cache[4] = function($event) {
              return $options.onRowMatchModeKeyDown($event);
            }), _cache[5] || (_cache[5] = withKeys(function($event) {
              return _ctx.onRowClearItemClick();
            }, ["enter"]))]
          }, $options.getColumnPT("filterConstraint")), toDisplayString($options.noFilterLabel), 17)], 16)) : (openBlock(), createElementBlock(Fragment, {
            key: 1
          }, [$options.isShowOperator ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            "class": _ctx.cx("filterOperator")
          }, $options.getColumnPT("filterOperator")), [createVNode(_component_Select, {
            options: $options.operatorOptions,
            modelValue: $options.operator,
            "aria-label": $options.filterOperatorAriaLabel,
            "class": normalizeClass(_ctx.cx("pcFilterOperatorDropdown")),
            optionLabel: "label",
            optionValue: "value",
            "onUpdate:modelValue": _cache[6] || (_cache[6] = function($event) {
              return $options.onOperatorChange($event);
            }),
            unstyled: _ctx.unstyled,
            pt: $options.getColumnPT("pcFilterOperatorDropdown")
          }, null, 8, ["options", "modelValue", "aria-label", "class", "unstyled", "pt"])], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
            "class": _ctx.cx("filterRuleList")
          }, $options.getColumnPT("filterRuleList")), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.fieldConstraints, function(fieldConstraint, i) {
            return openBlock(), createElementBlock("div", mergeProps({
              key: i,
              "class": _ctx.cx("filterRule")
            }, {
              ref_for: true
            }, $options.getColumnPT("filterRule")), [$options.isShowMatchModes ? (openBlock(), createBlock(_component_Select, {
              key: 0,
              options: $options.matchModes,
              modelValue: fieldConstraint.matchMode,
              "class": normalizeClass(_ctx.cx("pcFilterConstraintDropdown")),
              optionLabel: "label",
              optionValue: "value",
              "aria-label": $options.filterRuleAriaLabel,
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return $options.onMenuMatchModeChange($event, i);
              },
              unstyled: _ctx.unstyled,
              pt: $options.getColumnPT("pcFilterConstraintDropdown")
            }, null, 8, ["options", "modelValue", "class", "aria-label", "onUpdate:modelValue", "unstyled", "pt"])) : createCommentVNode("", true), $props.display === "menu" ? (openBlock(), createBlock(resolveDynamicComponent($props.filterElement), {
              key: 1,
              field: $props.field,
              filterModel: fieldConstraint,
              filterCallback: $options.filterCallback,
              applyFilter: $options.applyFilter
            }, null, 8, ["field", "filterModel", "filterCallback", "applyFilter"])) : createCommentVNode("", true), $options.showRemoveIcon ? (openBlock(), createElementBlock("div", mergeProps({
              key: 2,
              ref_for: true
            }, $options.getColumnPT("filterRemove")), [createVNode(_component_Button, mergeProps({
              type: "button",
              "class": _ctx.cx("pcFilterRemoveRuleButton"),
              onClick: function onClick3($event) {
                return $options.removeConstraint(i);
              },
              label: $options.removeRuleButtonLabel,
              unstyled: _ctx.unstyled
            }, {
              ref_for: true
            }, $props.filterButtonProps.popover.removeRule, {
              pt: $options.getColumnPT("pcFilterRemoveRuleButton")
            }), {
              icon: withCtx(function(iconProps) {
                return [(openBlock(), createBlock(resolveDynamicComponent($props.filterRemoveIconTemplate || "TrashIcon"), mergeProps({
                  "class": iconProps["class"]
                }, {
                  ref_for: true
                }, $options.getColumnPT("pcFilterRemoveRuleButton")["icon"]), null, 16, ["class"]))];
              }),
              _: 2
            }, 1040, ["class", "onClick", "label", "unstyled", "pt"])], 16)) : createCommentVNode("", true)], 16);
          }), 128))], 16), $options.isShowAddConstraint ? (openBlock(), createElementBlock("div", normalizeProps(mergeProps({
            key: 1
          }, $options.getColumnPT("filterAddButtonContainer"))), [createVNode(_component_Button, mergeProps({
            type: "button",
            label: $options.addRuleButtonLabel,
            iconPos: "left",
            "class": _ctx.cx("pcFilterAddRuleButton"),
            onClick: _cache[7] || (_cache[7] = function($event) {
              return $options.addConstraint();
            }),
            unstyled: _ctx.unstyled
          }, $props.filterButtonProps.popover.addRule, {
            pt: $options.getColumnPT("pcFilterAddRuleButton")
          }), {
            icon: withCtx(function(iconProps) {
              return [(openBlock(), createBlock(resolveDynamicComponent($props.filterAddIconTemplate || "PlusIcon"), mergeProps({
                "class": iconProps["class"]
              }, $options.getColumnPT("pcFilterAddRuleButton")["icon"]), null, 16, ["class"]))];
            }),
            _: 1
          }, 16, ["label", "class", "unstyled", "pt"])], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
            "class": _ctx.cx("filterButtonbar")
          }, $options.getColumnPT("filterButtonbar")), [!$props.filterClearTemplate && $props.showClearButton ? (openBlock(), createBlock(_component_Button, mergeProps({
            key: 0,
            type: "button",
            "class": _ctx.cx("pcFilterClearButton"),
            label: $options.clearButtonLabel,
            onClick: _cache[8] || (_cache[8] = function($event) {
              return $options.clearFilter();
            }),
            unstyled: _ctx.unstyled
          }, $props.filterButtonProps.popover.clear, {
            pt: $options.getColumnPT("pcFilterClearButton")
          }), null, 16, ["class", "label", "unstyled", "pt"])) : (openBlock(), createBlock(resolveDynamicComponent($props.filterClearTemplate), {
            key: 1,
            field: $props.field,
            filterModel: $props.filters[$props.field],
            filterCallback: $options.clearFilter
          }, null, 8, ["field", "filterModel", "filterCallback"])), $props.showApplyButton ? (openBlock(), createElementBlock(Fragment, {
            key: 2
          }, [!$props.filterApplyTemplate ? (openBlock(), createBlock(_component_Button, mergeProps({
            key: 0,
            type: "button",
            "class": _ctx.cx("pcFilterApplyButton"),
            label: $options.applyButtonLabel,
            onClick: _cache[9] || (_cache[9] = function($event) {
              return $options.applyFilter();
            }),
            unstyled: _ctx.unstyled
          }, $props.filterButtonProps.popover.apply, {
            pt: $options.getColumnPT("pcFilterApplyButton")
          }), null, 16, ["class", "label", "unstyled", "pt"])) : (openBlock(), createBlock(resolveDynamicComponent($props.filterApplyTemplate), {
            key: 1,
            field: $props.field,
            filterModel: $props.filters[$props.field],
            filterCallback: $options.applyFilter
          }, null, 8, ["field", "filterModel", "filterCallback"]))], 64)) : createCommentVNode("", true)], 16)], 64)), (openBlock(), createBlock(resolveDynamicComponent($props.filterFooterTemplate), {
            field: $props.field,
            filterModel: $props.filters[$props.field],
            filterCallback: $options.filterCallback
          }, null, 8, ["field", "filterModel", "filterCallback"]))], 16, _hoisted_1$4)), [[_directive_focustrap]]) : createCommentVNode("", true)];
        }),
        _: 1
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 1
  })], 16);
}
script$5.render = render$5;
var script$4 = {
  name: "HeaderCheckbox",
  hostName: "DataTable",
  "extends": script$o,
  emits: ["change"],
  props: {
    checked: null,
    disabled: null,
    column: null,
    headerCheckboxIconTemplate: {
      type: Function,
      "default": null
    }
  },
  methods: {
    getColumnPT: function getColumnPT7(key) {
      var columnMetaData = {
        props: this.column.props,
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          checked: this.checked,
          disabled: this.disabled
        }
      };
      return mergeProps(this.ptm("column.".concat(key), {
        column: columnMetaData
      }), this.ptm("column.".concat(key), columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
    },
    getColumnProp: function getColumnProp6() {
      return this.column.props && this.column.props.pt ? this.column.props.pt : void 0;
    },
    onChange: function onChange3(event) {
      this.$emit("change", {
        originalEvent: event,
        checked: !this.checked
      });
    }
  },
  computed: {
    headerCheckboxAriaLabel: function headerCheckboxAriaLabel() {
      return this.$primevue.config.locale.aria ? this.checked ? this.$primevue.config.locale.aria.selectAll : this.$primevue.config.locale.aria.unselectAll : void 0;
    }
  },
  components: {
    CheckIcon: script$s,
    Checkbox: script$v
  }
};
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Checkbox = resolveComponent("Checkbox");
  return openBlock(), createBlock(_component_Checkbox, {
    modelValue: $props.checked,
    binary: true,
    disabled: $props.disabled,
    "aria-label": $options.headerCheckboxAriaLabel,
    onChange: $options.onChange,
    unstyled: _ctx.unstyled,
    pt: $options.getColumnPT("pcHeaderCheckbox")
  }, null, 8, ["modelValue", "disabled", "aria-label", "onChange", "unstyled", "pt"]);
}
script$4.render = render$4;
var script$3 = {
  name: "FilterHeaderCell",
  hostName: "DataTable",
  "extends": script$o,
  emits: ["checkbox-change", "filter-change", "filter-apply", "operator-change", "matchmode-change", "constraint-add", "constraint-remove", "apply-click"],
  props: {
    column: {
      type: Object,
      "default": null
    },
    index: {
      type: Number,
      "default": null
    },
    allRowsSelected: {
      type: Boolean,
      "default": false
    },
    empty: {
      type: Boolean,
      "default": false
    },
    display: {
      type: String,
      "default": "row"
    },
    filters: {
      type: Object,
      "default": null
    },
    filtersStore: {
      type: Object,
      "default": null
    },
    rowGroupMode: {
      type: String,
      "default": null
    },
    groupRowsBy: {
      type: [Array, String, Function],
      "default": null
    },
    filterInputProps: {
      type: null,
      "default": null
    },
    filterButtonProps: {
      type: null,
      "default": null
    }
  },
  data: function data7() {
    return {
      styleObject: {}
    };
  },
  mounted: function mounted5() {
    if (this.columnProp("frozen")) {
      this.updateStickyPosition();
    }
  },
  updated: function updated4() {
    if (this.columnProp("frozen")) {
      this.updateStickyPosition();
    }
  },
  methods: {
    columnProp: function columnProp5(prop) {
      return getVNodeProp(this.column, prop);
    },
    getColumnPT: function getColumnPT8(key) {
      if (!this.column) return null;
      var columnMetaData = {
        props: this.column.props,
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index: this.index
        }
      };
      return mergeProps(this.ptm("column.".concat(key), {
        column: columnMetaData
      }), this.ptm("column.".concat(key), columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
    },
    getColumnProp: function getColumnProp7() {
      return this.column.props && this.column.props.pt ? this.column.props.pt : void 0;
    },
    updateStickyPosition: function updateStickyPosition3() {
      if (this.columnProp("frozen")) {
        var align = this.columnProp("alignFrozen");
        if (align === "right") {
          var pos = 0;
          var next = getNextElementSibling(this.$el, '[data-p-frozen-column="true"]');
          if (next) {
            pos = getOuterWidth(next) + parseFloat(next.style["inset-inline-end"] || 0);
          }
          this.styleObject.insetInlineEnd = pos + "px";
        } else {
          var _pos = 0;
          var prev = getPreviousElementSibling(this.$el, '[data-p-frozen-column="true"]');
          if (prev) {
            _pos = getOuterWidth(prev) + parseFloat(prev.style["inset-inline-start"] || 0);
          }
          this.styleObject.insetInlineStart = _pos + "px";
        }
      }
    }
  },
  computed: {
    getFilterColumnHeaderClass: function getFilterColumnHeaderClass() {
      return [this.cx("headerCell", {
        column: this.column
      }), this.columnProp("filterHeaderClass"), this.columnProp("class")];
    },
    getFilterColumnHeaderStyle: function getFilterColumnHeaderStyle() {
      return this.columnProp("frozen") ? [this.columnProp("filterHeaderStyle"), this.columnProp("style"), this.styleObject] : [this.columnProp("filterHeaderStyle"), this.columnProp("style")];
    }
  },
  components: {
    DTHeaderCheckbox: script$4,
    DTColumnFilter: script$5
  }
};
function _typeof$4(o) {
  "@babel/helpers - typeof";
  return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$4(o);
}
function ownKeys$4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$4(Object(t), true).forEach(function(r2) {
      _defineProperty$4(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$4(e, r, t) {
  return (r = _toPropertyKey$4(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$4(t) {
  var i = _toPrimitive$4(t, "string");
  return "symbol" == _typeof$4(i) ? i : i + "";
}
function _toPrimitive$4(t, r) {
  if ("object" != _typeof$4(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$4(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1$3 = ["data-p-frozen-column"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DTHeaderCheckbox = resolveComponent("DTHeaderCheckbox");
  var _component_DTColumnFilter = resolveComponent("DTColumnFilter");
  return !$options.columnProp("hidden") && ($props.rowGroupMode !== "subheader" || $props.groupRowsBy !== $options.columnProp("field")) ? (openBlock(), createElementBlock("th", mergeProps({
    key: 0,
    style: $options.getFilterColumnHeaderStyle,
    "class": $options.getFilterColumnHeaderClass
  }, _objectSpread$4(_objectSpread$4({}, $options.getColumnPT("root")), $options.getColumnPT("headerCell")), {
    "data-p-frozen-column": $options.columnProp("frozen")
  }), [$options.columnProp("selectionMode") === "multiple" ? (openBlock(), createBlock(_component_DTHeaderCheckbox, {
    key: 0,
    checked: $props.allRowsSelected,
    disabled: $props.empty,
    onChange: _cache[0] || (_cache[0] = function($event) {
      return _ctx.$emit("checkbox-change", $event);
    }),
    column: $props.column,
    unstyled: _ctx.unstyled,
    pt: _ctx.pt
  }, null, 8, ["checked", "disabled", "column", "unstyled", "pt"])) : createCommentVNode("", true), $props.column.children && $props.column.children.filter ? (openBlock(), createBlock(_component_DTColumnFilter, {
    key: 1,
    field: $options.columnProp("filterField") || $options.columnProp("field"),
    type: $options.columnProp("dataType"),
    display: "row",
    showMenu: $options.columnProp("showFilterMenu"),
    filterElement: $props.column.children && $props.column.children.filter,
    filterHeaderTemplate: $props.column.children && $props.column.children.filterheader,
    filterFooterTemplate: $props.column.children && $props.column.children.filterfooter,
    filterClearTemplate: $props.column.children && $props.column.children.filterclear,
    filterApplyTemplate: $props.column.children && $props.column.children.filterapply,
    filterIconTemplate: $props.column.children && $props.column.children.filtericon,
    filterAddIconTemplate: $props.column.children && $props.column.children.filteraddicon,
    filterRemoveIconTemplate: $props.column.children && $props.column.children.filterremoveicon,
    filterClearIconTemplate: $props.column.children && $props.column.children.filterclearicon,
    filters: $props.filters,
    filtersStore: $props.filtersStore,
    filterInputProps: $props.filterInputProps,
    filterButtonProps: $props.filterButtonProps,
    onFilterChange: _cache[1] || (_cache[1] = function($event) {
      return _ctx.$emit("filter-change", $event);
    }),
    onFilterApply: _cache[2] || (_cache[2] = function($event) {
      return _ctx.$emit("filter-apply");
    }),
    filterMenuStyle: $options.columnProp("filterMenuStyle"),
    filterMenuClass: $options.columnProp("filterMenuClass"),
    showOperator: $options.columnProp("showFilterOperator"),
    showClearButton: $options.columnProp("showClearButton"),
    showApplyButton: $options.columnProp("showApplyButton"),
    showMatchModes: $options.columnProp("showFilterMatchModes"),
    showAddButton: $options.columnProp("showAddButton"),
    matchModeOptions: $options.columnProp("filterMatchModeOptions"),
    maxConstraints: $options.columnProp("maxConstraints"),
    onOperatorChange: _cache[3] || (_cache[3] = function($event) {
      return _ctx.$emit("operator-change", $event);
    }),
    onMatchmodeChange: _cache[4] || (_cache[4] = function($event) {
      return _ctx.$emit("matchmode-change", $event);
    }),
    onConstraintAdd: _cache[5] || (_cache[5] = function($event) {
      return _ctx.$emit("constraint-add", $event);
    }),
    onConstraintRemove: _cache[6] || (_cache[6] = function($event) {
      return _ctx.$emit("constraint-remove", $event);
    }),
    onApplyClick: _cache[7] || (_cache[7] = function($event) {
      return _ctx.$emit("apply-click", $event);
    }),
    column: $props.column,
    unstyled: _ctx.unstyled,
    pt: _ctx.pt
  }, null, 8, ["field", "type", "showMenu", "filterElement", "filterHeaderTemplate", "filterFooterTemplate", "filterClearTemplate", "filterApplyTemplate", "filterIconTemplate", "filterAddIconTemplate", "filterRemoveIconTemplate", "filterClearIconTemplate", "filters", "filtersStore", "filterInputProps", "filterButtonProps", "filterMenuStyle", "filterMenuClass", "showOperator", "showClearButton", "showApplyButton", "showMatchModes", "showAddButton", "matchModeOptions", "maxConstraints", "column", "unstyled", "pt"])) : createCommentVNode("", true)], 16, _hoisted_1$3)) : createCommentVNode("", true);
}
script$3.render = render$3;
var script$2 = {
  name: "HeaderCell",
  hostName: "DataTable",
  "extends": script$o,
  emits: ["column-click", "column-mousedown", "column-dragstart", "column-dragover", "column-dragleave", "column-drop", "column-resizestart", "checkbox-change", "filter-change", "filter-apply", "operator-change", "matchmode-change", "constraint-add", "constraint-remove", "filter-clear", "apply-click"],
  props: {
    column: {
      type: Object,
      "default": null
    },
    index: {
      type: Number,
      "default": null
    },
    resizableColumns: {
      type: Boolean,
      "default": false
    },
    groupRowsBy: {
      type: [Array, String, Function],
      "default": null
    },
    sortMode: {
      type: String,
      "default": "single"
    },
    groupRowSortField: {
      type: [String, Function],
      "default": null
    },
    sortField: {
      type: [String, Function],
      "default": null
    },
    sortOrder: {
      type: Number,
      "default": null
    },
    multiSortMeta: {
      type: Array,
      "default": null
    },
    allRowsSelected: {
      type: Boolean,
      "default": false
    },
    empty: {
      type: Boolean,
      "default": false
    },
    filterDisplay: {
      type: String,
      "default": null
    },
    filters: {
      type: Object,
      "default": null
    },
    filtersStore: {
      type: Object,
      "default": null
    },
    filterColumn: {
      type: Boolean,
      "default": false
    },
    reorderableColumns: {
      type: Boolean,
      "default": false
    },
    filterInputProps: {
      type: null,
      "default": null
    },
    filterButtonProps: {
      type: null,
      "default": null
    }
  },
  data: function data8() {
    return {
      styleObject: {}
    };
  },
  mounted: function mounted6() {
    if (this.columnProp("frozen")) {
      this.updateStickyPosition();
    }
  },
  updated: function updated5() {
    if (this.columnProp("frozen")) {
      this.updateStickyPosition();
    }
  },
  methods: {
    columnProp: function columnProp6(prop) {
      return getVNodeProp(this.column, prop);
    },
    getColumnPT: function getColumnPT9(key) {
      var _this$$parentInstance, _this$$parentInstance2;
      var columnMetaData = {
        props: this.column.props,
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index: this.index,
          sortable: this.columnProp("sortable") === "" || this.columnProp("sortable"),
          sorted: this.isColumnSorted(),
          resizable: this.resizableColumns,
          size: (_this$$parentInstance = this.$parentInstance) === null || _this$$parentInstance === void 0 || (_this$$parentInstance = _this$$parentInstance.$parentInstance) === null || _this$$parentInstance === void 0 ? void 0 : _this$$parentInstance.size,
          showGridlines: ((_this$$parentInstance2 = this.$parentInstance) === null || _this$$parentInstance2 === void 0 || (_this$$parentInstance2 = _this$$parentInstance2.$parentInstance) === null || _this$$parentInstance2 === void 0 ? void 0 : _this$$parentInstance2.showGridlines) || false
        }
      };
      return mergeProps(this.ptm("column.".concat(key), {
        column: columnMetaData
      }), this.ptm("column.".concat(key), columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
    },
    getColumnProp: function getColumnProp8() {
      return this.column.props && this.column.props.pt ? this.column.props.pt : void 0;
    },
    onClick: function onClick2(event) {
      this.$emit("column-click", {
        originalEvent: event,
        column: this.column
      });
    },
    onKeyDown: function onKeyDown2(event) {
      if ((event.code === "Enter" || event.code === "NumpadEnter" || event.code === "Space") && event.currentTarget.nodeName === "TH" && getAttribute(event.currentTarget, "data-p-sortable-column")) {
        this.$emit("column-click", {
          originalEvent: event,
          column: this.column
        });
        event.preventDefault();
      }
    },
    onMouseDown: function onMouseDown(event) {
      this.$emit("column-mousedown", {
        originalEvent: event,
        column: this.column
      });
    },
    onDragStart: function onDragStart(event) {
      this.$emit("column-dragstart", {
        originalEvent: event,
        column: this.column
      });
    },
    onDragOver: function onDragOver(event) {
      this.$emit("column-dragover", {
        originalEvent: event,
        column: this.column
      });
    },
    onDragLeave: function onDragLeave(event) {
      this.$emit("column-dragleave", {
        originalEvent: event,
        column: this.column
      });
    },
    onDrop: function onDrop(event) {
      this.$emit("column-drop", {
        originalEvent: event,
        column: this.column
      });
    },
    onResizeStart: function onResizeStart(event) {
      this.$emit("column-resizestart", event);
    },
    getMultiSortMetaIndex: function getMultiSortMetaIndex() {
      var _this = this;
      return this.multiSortMeta.findIndex(function(meta) {
        return meta.field === _this.columnProp("field") || meta.field === _this.columnProp("sortField");
      });
    },
    getBadgeValue: function getBadgeValue() {
      var index = this.getMultiSortMetaIndex();
      return this.groupRowsBy && this.groupRowsBy === this.groupRowSortField && index > -1 ? index : index + 1;
    },
    isMultiSorted: function isMultiSorted() {
      return this.sortMode === "multiple" && this.columnProp("sortable") && this.getMultiSortMetaIndex() > -1;
    },
    isColumnSorted: function isColumnSorted() {
      return this.sortMode === "single" ? this.sortField && (this.sortField === this.columnProp("field") || this.sortField === this.columnProp("sortField")) : this.isMultiSorted();
    },
    updateStickyPosition: function updateStickyPosition4() {
      if (this.columnProp("frozen")) {
        var align = this.columnProp("alignFrozen");
        if (align === "right") {
          var pos = 0;
          var next = getNextElementSibling(this.$el, '[data-p-frozen-column="true"]');
          if (next) {
            pos = getOuterWidth(next) + parseFloat(next.style["inset-inline-end"] || 0);
          }
          this.styleObject.insetInlineEnd = pos + "px";
        } else {
          var _pos = 0;
          var prev = getPreviousElementSibling(this.$el, '[data-p-frozen-column="true"]');
          if (prev) {
            _pos = getOuterWidth(prev) + parseFloat(prev.style["inset-inline-start"] || 0);
          }
          this.styleObject.insetInlineStart = _pos + "px";
        }
        var filterRow = this.$el.parentElement.nextElementSibling;
        if (filterRow) {
          var index = getIndex(this.$el);
          if (filterRow.children[index]) {
            filterRow.children[index].style["inset-inline-start"] = this.styleObject["inset-inline-start"];
            filterRow.children[index].style["inset-inline-end"] = this.styleObject["inset-inline-end"];
          }
        }
      }
    },
    onHeaderCheckboxChange: function onHeaderCheckboxChange(event) {
      this.$emit("checkbox-change", event);
    }
  },
  computed: {
    containerClass: function containerClass3() {
      return [this.cx("headerCell"), this.filterColumn ? this.columnProp("filterHeaderClass") : this.columnProp("headerClass"), this.columnProp("class")];
    },
    containerStyle: function containerStyle3() {
      var headerStyle = this.filterColumn ? this.columnProp("filterHeaderStyle") : this.columnProp("headerStyle");
      var columnStyle = this.columnProp("style");
      return this.columnProp("frozen") ? [columnStyle, headerStyle, this.styleObject] : [columnStyle, headerStyle];
    },
    sortState: function sortState() {
      var sorted2 = false;
      var sortOrder2 = null;
      if (this.sortMode === "single") {
        sorted2 = this.sortField && (this.sortField === this.columnProp("field") || this.sortField === this.columnProp("sortField"));
        sortOrder2 = sorted2 ? this.sortOrder : 0;
      } else if (this.sortMode === "multiple") {
        var metaIndex = this.getMultiSortMetaIndex();
        if (metaIndex > -1) {
          sorted2 = true;
          sortOrder2 = this.multiSortMeta[metaIndex].order;
        }
      }
      return {
        sorted: sorted2,
        sortOrder: sortOrder2
      };
    },
    sortableColumnIcon: function sortableColumnIcon() {
      var _this$sortState = this.sortState, sorted2 = _this$sortState.sorted, sortOrder2 = _this$sortState.sortOrder;
      if (!sorted2) return script$2$1;
      else if (sorted2 && sortOrder2 > 0) return script$A;
      else if (sorted2 && sortOrder2 < 0) return script$1$1;
      return null;
    },
    ariaSort: function ariaSort() {
      if (this.columnProp("sortable")) {
        var _this$sortState2 = this.sortState, sorted2 = _this$sortState2.sorted, sortOrder2 = _this$sortState2.sortOrder;
        if (sorted2 && sortOrder2 < 0) return "descending";
        else if (sorted2 && sortOrder2 > 0) return "ascending";
        else return "none";
      } else {
        return null;
      }
    }
  },
  components: {
    Badge: script$B,
    DTHeaderCheckbox: script$4,
    DTColumnFilter: script$5,
    SortAltIcon: script$2$1,
    SortAmountUpAltIcon: script$A,
    SortAmountDownIcon: script$1$1
  }
};
function _typeof$3(o) {
  "@babel/helpers - typeof";
  return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$3(o);
}
function ownKeys$3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$3(Object(t), true).forEach(function(r2) {
      _defineProperty$3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$3(e, r, t) {
  return (r = _toPropertyKey$3(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$3(t) {
  var i = _toPrimitive$3(t, "string");
  return "symbol" == _typeof$3(i) ? i : i + "";
}
function _toPrimitive$3(t, r) {
  if ("object" != _typeof$3(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$3(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1$2 = ["tabindex", "colspan", "rowspan", "aria-sort", "data-p-sortable-column", "data-p-resizable-column", "data-p-sorted", "data-p-filter-column", "data-p-frozen-column", "data-p-reorderable-column"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Badge = resolveComponent("Badge");
  var _component_DTHeaderCheckbox = resolveComponent("DTHeaderCheckbox");
  var _component_DTColumnFilter = resolveComponent("DTColumnFilter");
  return openBlock(), createElementBlock("th", mergeProps({
    style: $options.containerStyle,
    "class": $options.containerClass,
    tabindex: $options.columnProp("sortable") ? "0" : null,
    role: "columnheader",
    colspan: $options.columnProp("colspan"),
    rowspan: $options.columnProp("rowspan"),
    "aria-sort": $options.ariaSort,
    onClick: _cache[8] || (_cache[8] = function() {
      return $options.onClick && $options.onClick.apply($options, arguments);
    }),
    onKeydown: _cache[9] || (_cache[9] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    }),
    onMousedown: _cache[10] || (_cache[10] = function() {
      return $options.onMouseDown && $options.onMouseDown.apply($options, arguments);
    }),
    onDragstart: _cache[11] || (_cache[11] = function() {
      return $options.onDragStart && $options.onDragStart.apply($options, arguments);
    }),
    onDragover: _cache[12] || (_cache[12] = function() {
      return $options.onDragOver && $options.onDragOver.apply($options, arguments);
    }),
    onDragleave: _cache[13] || (_cache[13] = function() {
      return $options.onDragLeave && $options.onDragLeave.apply($options, arguments);
    }),
    onDrop: _cache[14] || (_cache[14] = function() {
      return $options.onDrop && $options.onDrop.apply($options, arguments);
    })
  }, _objectSpread$3(_objectSpread$3({}, $options.getColumnPT("root")), $options.getColumnPT("headerCell")), {
    "data-p-sortable-column": $options.columnProp("sortable"),
    "data-p-resizable-column": $props.resizableColumns,
    "data-p-sorted": $options.isColumnSorted(),
    "data-p-filter-column": $props.filterColumn,
    "data-p-frozen-column": $options.columnProp("frozen"),
    "data-p-reorderable-column": $props.reorderableColumns
  }), [$props.resizableColumns && !$options.columnProp("frozen") ? (openBlock(), createElementBlock("span", mergeProps({
    key: 0,
    "class": _ctx.cx("columnResizer"),
    onMousedown: _cache[0] || (_cache[0] = function() {
      return $options.onResizeStart && $options.onResizeStart.apply($options, arguments);
    })
  }, $options.getColumnPT("columnResizer")), null, 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("columnHeaderContent")
  }, $options.getColumnPT("columnHeaderContent")), [$props.column.children && $props.column.children.header ? (openBlock(), createBlock(resolveDynamicComponent($props.column.children.header), {
    key: 0,
    column: $props.column
  }, null, 8, ["column"])) : createCommentVNode("", true), $options.columnProp("header") ? (openBlock(), createElementBlock("span", mergeProps({
    key: 1,
    "class": _ctx.cx("columnTitle")
  }, $options.getColumnPT("columnTitle")), toDisplayString($options.columnProp("header")), 17)) : createCommentVNode("", true), $options.columnProp("sortable") ? (openBlock(), createElementBlock("span", normalizeProps(mergeProps({
    key: 2
  }, $options.getColumnPT("sort"))), [(openBlock(), createBlock(resolveDynamicComponent($props.column.children && $props.column.children.sorticon || $options.sortableColumnIcon), mergeProps({
    sorted: $options.sortState.sorted,
    sortOrder: $options.sortState.sortOrder,
    "class": _ctx.cx("sortIcon")
  }, $options.getColumnPT("sorticon")), null, 16, ["sorted", "sortOrder", "class"]))], 16)) : createCommentVNode("", true), $options.isMultiSorted() ? (openBlock(), createBlock(_component_Badge, {
    key: 3,
    "class": normalizeClass(_ctx.cx("pcSortBadge")),
    pt: $options.getColumnPT("pcSortBadge"),
    value: $options.getBadgeValue(),
    size: "small"
  }, null, 8, ["class", "pt", "value"])) : createCommentVNode("", true), $options.columnProp("selectionMode") === "multiple" && $props.filterDisplay !== "row" ? (openBlock(), createBlock(_component_DTHeaderCheckbox, {
    key: 4,
    checked: $props.allRowsSelected,
    onChange: $options.onHeaderCheckboxChange,
    disabled: $props.empty,
    headerCheckboxIconTemplate: $props.column.children && $props.column.children.headercheckboxicon,
    column: $props.column,
    unstyled: _ctx.unstyled,
    pt: _ctx.pt
  }, null, 8, ["checked", "onChange", "disabled", "headerCheckboxIconTemplate", "column", "unstyled", "pt"])) : createCommentVNode("", true), $props.filterDisplay === "menu" && $props.column.children && $props.column.children.filter ? (openBlock(), createBlock(_component_DTColumnFilter, {
    key: 5,
    field: $options.columnProp("filterField") || $options.columnProp("field"),
    type: $options.columnProp("dataType"),
    display: "menu",
    showMenu: $options.columnProp("showFilterMenu"),
    filterElement: $props.column.children && $props.column.children.filter,
    filterHeaderTemplate: $props.column.children && $props.column.children.filterheader,
    filterFooterTemplate: $props.column.children && $props.column.children.filterfooter,
    filterClearTemplate: $props.column.children && $props.column.children.filterclear,
    filterApplyTemplate: $props.column.children && $props.column.children.filterapply,
    filterIconTemplate: $props.column.children && $props.column.children.filtericon,
    filterAddIconTemplate: $props.column.children && $props.column.children.filteraddicon,
    filterRemoveIconTemplate: $props.column.children && $props.column.children.filterremoveicon,
    filterClearIconTemplate: $props.column.children && $props.column.children.filterclearicon,
    filters: $props.filters,
    filtersStore: $props.filtersStore,
    filterInputProps: $props.filterInputProps,
    filterButtonProps: $props.filterButtonProps,
    onFilterChange: _cache[1] || (_cache[1] = function($event) {
      return _ctx.$emit("filter-change", $event);
    }),
    onFilterApply: _cache[2] || (_cache[2] = function($event) {
      return _ctx.$emit("filter-apply");
    }),
    filterMenuStyle: $options.columnProp("filterMenuStyle"),
    filterMenuClass: $options.columnProp("filterMenuClass"),
    showOperator: $options.columnProp("showFilterOperator"),
    showClearButton: $options.columnProp("showClearButton"),
    showApplyButton: $options.columnProp("showApplyButton"),
    showMatchModes: $options.columnProp("showFilterMatchModes"),
    showAddButton: $options.columnProp("showAddButton"),
    matchModeOptions: $options.columnProp("filterMatchModeOptions"),
    maxConstraints: $options.columnProp("maxConstraints"),
    onOperatorChange: _cache[3] || (_cache[3] = function($event) {
      return _ctx.$emit("operator-change", $event);
    }),
    onMatchmodeChange: _cache[4] || (_cache[4] = function($event) {
      return _ctx.$emit("matchmode-change", $event);
    }),
    onConstraintAdd: _cache[5] || (_cache[5] = function($event) {
      return _ctx.$emit("constraint-add", $event);
    }),
    onConstraintRemove: _cache[6] || (_cache[6] = function($event) {
      return _ctx.$emit("constraint-remove", $event);
    }),
    onApplyClick: _cache[7] || (_cache[7] = function($event) {
      return _ctx.$emit("apply-click", $event);
    }),
    column: $props.column,
    unstyled: _ctx.unstyled,
    pt: _ctx.pt
  }, null, 8, ["field", "type", "showMenu", "filterElement", "filterHeaderTemplate", "filterFooterTemplate", "filterClearTemplate", "filterApplyTemplate", "filterIconTemplate", "filterAddIconTemplate", "filterRemoveIconTemplate", "filterClearIconTemplate", "filters", "filtersStore", "filterInputProps", "filterButtonProps", "filterMenuStyle", "filterMenuClass", "showOperator", "showClearButton", "showApplyButton", "showMatchModes", "showAddButton", "matchModeOptions", "maxConstraints", "column", "unstyled", "pt"])) : createCommentVNode("", true)], 16)], 16, _hoisted_1$2);
}
script$2.render = render$2;
var script$1 = {
  name: "TableHeader",
  hostName: "DataTable",
  "extends": script$o,
  emits: ["column-click", "column-mousedown", "column-dragstart", "column-dragover", "column-dragleave", "column-drop", "column-resizestart", "checkbox-change", "filter-change", "filter-apply", "operator-change", "matchmode-change", "constraint-add", "constraint-remove", "filter-clear", "apply-click"],
  props: {
    columnGroup: {
      type: null,
      "default": null
    },
    columns: {
      type: null,
      "default": null
    },
    rowGroupMode: {
      type: String,
      "default": null
    },
    groupRowsBy: {
      type: [Array, String, Function],
      "default": null
    },
    resizableColumns: {
      type: Boolean,
      "default": false
    },
    allRowsSelected: {
      type: Boolean,
      "default": false
    },
    empty: {
      type: Boolean,
      "default": false
    },
    sortMode: {
      type: String,
      "default": "single"
    },
    groupRowSortField: {
      type: [String, Function],
      "default": null
    },
    sortField: {
      type: [String, Function],
      "default": null
    },
    sortOrder: {
      type: Number,
      "default": null
    },
    multiSortMeta: {
      type: Array,
      "default": null
    },
    filterDisplay: {
      type: String,
      "default": null
    },
    filters: {
      type: Object,
      "default": null
    },
    filtersStore: {
      type: Object,
      "default": null
    },
    reorderableColumns: {
      type: Boolean,
      "default": false
    },
    first: {
      type: Number,
      "default": 0
    },
    filterInputProps: {
      type: null,
      "default": null
    },
    filterButtonProps: {
      type: null,
      "default": null
    }
  },
  provide: function provide3() {
    return {
      $rows: this.d_headerRows,
      $columns: this.d_headerColumns
    };
  },
  data: function data9() {
    return {
      d_headerRows: new _default({
        type: "Row"
      }),
      d_headerColumns: new _default({
        type: "Column"
      })
    };
  },
  beforeUnmount: function beforeUnmount4() {
    this.d_headerRows.clear();
    this.d_headerColumns.clear();
  },
  methods: {
    columnProp: function columnProp7(col, prop) {
      return getVNodeProp(col, prop);
    },
    getColumnGroupPT: function getColumnGroupPT2(key) {
      var _this$$parentInstance;
      var columnGroupMetaData = {
        props: this.getColumnGroupProps(),
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          type: "header",
          scrollable: (_this$$parentInstance = this.$parentInstance) === null || _this$$parentInstance === void 0 || (_this$$parentInstance = _this$$parentInstance.$parentInstance) === null || _this$$parentInstance === void 0 ? void 0 : _this$$parentInstance.scrollable
        }
      };
      return mergeProps(this.ptm("columnGroup.".concat(key), {
        columnGroup: columnGroupMetaData
      }), this.ptm("columnGroup.".concat(key), columnGroupMetaData), this.ptmo(this.getColumnGroupProps(), key, columnGroupMetaData));
    },
    getColumnGroupProps: function getColumnGroupProps2() {
      return this.columnGroup && this.columnGroup.props && this.columnGroup.props.pt ? this.columnGroup.props.pt : void 0;
    },
    getRowPT: function getRowPT2(row2, key, index) {
      var rowMetaData = {
        props: row2.props,
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index
        }
      };
      return mergeProps(this.ptm("row.".concat(key), {
        row: rowMetaData
      }), this.ptm("row.".concat(key), rowMetaData), this.ptmo(this.getRowProp(row2), key, rowMetaData));
    },
    getRowProp: function getRowProp2(row2) {
      return row2.props && row2.props.pt ? row2.props.pt : void 0;
    },
    getColumnPT: function getColumnPT10(column, key, index) {
      var columnMetaData = {
        props: column.props,
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index
        }
      };
      return mergeProps(this.ptm("column.".concat(key), {
        column: columnMetaData
      }), this.ptm("column.".concat(key), columnMetaData), this.ptmo(this.getColumnProp(column), key, columnMetaData));
    },
    getColumnProp: function getColumnProp9(column) {
      return column.props && column.props.pt ? column.props.pt : void 0;
    },
    getFilterColumnHeaderClass: function getFilterColumnHeaderClass2(column) {
      return [this.cx("headerCell", {
        column
      }), this.columnProp(column, "filterHeaderClass"), this.columnProp(column, "class")];
    },
    getFilterColumnHeaderStyle: function getFilterColumnHeaderStyle2(column) {
      return [this.columnProp(column, "filterHeaderStyle"), this.columnProp(column, "style")];
    },
    getHeaderRows: function getHeaderRows() {
      var _this$d_headerRows;
      return (_this$d_headerRows = this.d_headerRows) === null || _this$d_headerRows === void 0 ? void 0 : _this$d_headerRows.get(this.columnGroup, this.columnGroup.children);
    },
    getHeaderColumns: function getHeaderColumns(row2) {
      var _this$d_headerColumns;
      return (_this$d_headerColumns = this.d_headerColumns) === null || _this$d_headerColumns === void 0 ? void 0 : _this$d_headerColumns.get(row2, row2.children);
    }
  },
  computed: {
    ptmTHeadOptions: function ptmTHeadOptions() {
      var _this$$parentInstance2;
      return {
        context: {
          scrollable: (_this$$parentInstance2 = this.$parentInstance) === null || _this$$parentInstance2 === void 0 || (_this$$parentInstance2 = _this$$parentInstance2.$parentInstance) === null || _this$$parentInstance2 === void 0 ? void 0 : _this$$parentInstance2.scrollable
        }
      };
    }
  },
  components: {
    DTHeaderCell: script$2,
    DTFilterHeaderCell: script$3
  }
};
function _typeof$2(o) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$2(o);
}
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$2(e, r, t) {
  return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$2(t) {
  var i = _toPrimitive$2(t, "string");
  return "symbol" == _typeof$2(i) ? i : i + "";
}
function _toPrimitive$2(t, r) {
  if ("object" != _typeof$2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1$1 = ["data-p-scrollable"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _ctx$$parentInstance;
  var _component_DTHeaderCell = resolveComponent("DTHeaderCell");
  var _component_DTFilterHeaderCell = resolveComponent("DTFilterHeaderCell");
  return openBlock(), createElementBlock("thead", mergeProps({
    "class": _ctx.cx("thead"),
    style: _ctx.sx("thead"),
    role: "rowgroup"
  }, $props.columnGroup ? _objectSpread$2(_objectSpread$2({}, _ctx.ptm("thead", $options.ptmTHeadOptions)), $options.getColumnGroupPT("root")) : _ctx.ptm("thead", $options.ptmTHeadOptions), {
    "data-p-scrollable": (_ctx$$parentInstance = _ctx.$parentInstance) === null || _ctx$$parentInstance === void 0 || (_ctx$$parentInstance = _ctx$$parentInstance.$parentInstance) === null || _ctx$$parentInstance === void 0 ? void 0 : _ctx$$parentInstance.scrollable,
    "data-pc-section": "thead"
  }), [!$props.columnGroup ? (openBlock(), createElementBlock("tr", mergeProps({
    key: 0,
    role: "row"
  }, _ctx.ptm("headerRow")), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.columns, function(col, i) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.columnProp(col, "columnKey") || $options.columnProp(col, "field") || i
    }, [!$options.columnProp(col, "hidden") && ($props.rowGroupMode !== "subheader" || $props.groupRowsBy !== $options.columnProp(col, "field")) ? (openBlock(), createBlock(_component_DTHeaderCell, {
      key: 0,
      column: col,
      index: i,
      onColumnClick: _cache[0] || (_cache[0] = function($event) {
        return _ctx.$emit("column-click", $event);
      }),
      onColumnMousedown: _cache[1] || (_cache[1] = function($event) {
        return _ctx.$emit("column-mousedown", $event);
      }),
      onColumnDragstart: _cache[2] || (_cache[2] = function($event) {
        return _ctx.$emit("column-dragstart", $event);
      }),
      onColumnDragover: _cache[3] || (_cache[3] = function($event) {
        return _ctx.$emit("column-dragover", $event);
      }),
      onColumnDragleave: _cache[4] || (_cache[4] = function($event) {
        return _ctx.$emit("column-dragleave", $event);
      }),
      onColumnDrop: _cache[5] || (_cache[5] = function($event) {
        return _ctx.$emit("column-drop", $event);
      }),
      groupRowsBy: $props.groupRowsBy,
      groupRowSortField: $props.groupRowSortField,
      reorderableColumns: $props.reorderableColumns,
      resizableColumns: $props.resizableColumns,
      onColumnResizestart: _cache[6] || (_cache[6] = function($event) {
        return _ctx.$emit("column-resizestart", $event);
      }),
      sortMode: $props.sortMode,
      sortField: $props.sortField,
      sortOrder: $props.sortOrder,
      multiSortMeta: $props.multiSortMeta,
      allRowsSelected: $props.allRowsSelected,
      empty: $props.empty,
      onCheckboxChange: _cache[7] || (_cache[7] = function($event) {
        return _ctx.$emit("checkbox-change", $event);
      }),
      filters: $props.filters,
      filterDisplay: $props.filterDisplay,
      filtersStore: $props.filtersStore,
      filterInputProps: $props.filterInputProps,
      filterButtonProps: $props.filterButtonProps,
      first: $props.first,
      onFilterChange: _cache[8] || (_cache[8] = function($event) {
        return _ctx.$emit("filter-change", $event);
      }),
      onFilterApply: _cache[9] || (_cache[9] = function($event) {
        return _ctx.$emit("filter-apply");
      }),
      onOperatorChange: _cache[10] || (_cache[10] = function($event) {
        return _ctx.$emit("operator-change", $event);
      }),
      onMatchmodeChange: _cache[11] || (_cache[11] = function($event) {
        return _ctx.$emit("matchmode-change", $event);
      }),
      onConstraintAdd: _cache[12] || (_cache[12] = function($event) {
        return _ctx.$emit("constraint-add", $event);
      }),
      onConstraintRemove: _cache[13] || (_cache[13] = function($event) {
        return _ctx.$emit("constraint-remove", $event);
      }),
      onApplyClick: _cache[14] || (_cache[14] = function($event) {
        return _ctx.$emit("apply-click", $event);
      }),
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["column", "index", "groupRowsBy", "groupRowSortField", "reorderableColumns", "resizableColumns", "sortMode", "sortField", "sortOrder", "multiSortMeta", "allRowsSelected", "empty", "filters", "filterDisplay", "filtersStore", "filterInputProps", "filterButtonProps", "first", "unstyled", "pt"])) : createCommentVNode("", true)], 64);
  }), 128))], 16)) : (openBlock(true), createElementBlock(Fragment, {
    key: 1
  }, renderList($options.getHeaderRows(), function(row2, i) {
    return openBlock(), createElementBlock("tr", mergeProps({
      key: i,
      role: "row"
    }, {
      ref_for: true
    }, _objectSpread$2(_objectSpread$2({}, _ctx.ptm("headerRow")), $options.getRowPT(row2, "root", i))), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.getHeaderColumns(row2), function(col, j) {
      return openBlock(), createElementBlock(Fragment, {
        key: $options.columnProp(col, "columnKey") || $options.columnProp(col, "field") || j
      }, [!$options.columnProp(col, "hidden") && ($props.rowGroupMode !== "subheader" || $props.groupRowsBy !== $options.columnProp(col, "field")) && typeof col.children !== "string" ? (openBlock(), createBlock(_component_DTHeaderCell, {
        key: 0,
        column: col,
        onColumnClick: _cache[15] || (_cache[15] = function($event) {
          return _ctx.$emit("column-click", $event);
        }),
        onColumnMousedown: _cache[16] || (_cache[16] = function($event) {
          return _ctx.$emit("column-mousedown", $event);
        }),
        groupRowsBy: $props.groupRowsBy,
        groupRowSortField: $props.groupRowSortField,
        sortMode: $props.sortMode,
        sortField: $props.sortField,
        sortOrder: $props.sortOrder,
        multiSortMeta: $props.multiSortMeta,
        allRowsSelected: $props.allRowsSelected,
        empty: $props.empty,
        onCheckboxChange: _cache[17] || (_cache[17] = function($event) {
          return _ctx.$emit("checkbox-change", $event);
        }),
        filters: $props.filters,
        filterDisplay: $props.filterDisplay,
        filtersStore: $props.filtersStore,
        onFilterChange: _cache[18] || (_cache[18] = function($event) {
          return _ctx.$emit("filter-change", $event);
        }),
        onFilterApply: _cache[19] || (_cache[19] = function($event) {
          return _ctx.$emit("filter-apply");
        }),
        onOperatorChange: _cache[20] || (_cache[20] = function($event) {
          return _ctx.$emit("operator-change", $event);
        }),
        onMatchmodeChange: _cache[21] || (_cache[21] = function($event) {
          return _ctx.$emit("matchmode-change", $event);
        }),
        onConstraintAdd: _cache[22] || (_cache[22] = function($event) {
          return _ctx.$emit("constraint-add", $event);
        }),
        onConstraintRemove: _cache[23] || (_cache[23] = function($event) {
          return _ctx.$emit("constraint-remove", $event);
        }),
        onApplyClick: _cache[24] || (_cache[24] = function($event) {
          return _ctx.$emit("apply-click", $event);
        }),
        unstyled: _ctx.unstyled,
        pt: _ctx.pt
      }, null, 8, ["column", "groupRowsBy", "groupRowSortField", "sortMode", "sortField", "sortOrder", "multiSortMeta", "allRowsSelected", "empty", "filters", "filterDisplay", "filtersStore", "unstyled", "pt"])) : createCommentVNode("", true)], 64);
    }), 128))], 16);
  }), 128)), $props.filterDisplay === "row" ? (openBlock(), createElementBlock("tr", mergeProps({
    key: 2,
    role: "row"
  }, _ctx.ptm("headerRow")), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.columns, function(col, i) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.columnProp(col, "columnKey") || $options.columnProp(col, "field") || i
    }, [!$options.columnProp(col, "hidden") && ($props.rowGroupMode !== "subheader" || $props.groupRowsBy !== $options.columnProp(col, "field")) ? (openBlock(), createBlock(_component_DTFilterHeaderCell, {
      key: 0,
      column: col,
      index: i,
      allRowsSelected: $props.allRowsSelected,
      empty: $props.empty,
      display: "row",
      filters: $props.filters,
      filtersStore: $props.filtersStore,
      filterInputProps: $props.filterInputProps,
      filterButtonProps: $props.filterButtonProps,
      onFilterChange: _cache[25] || (_cache[25] = function($event) {
        return _ctx.$emit("filter-change", $event);
      }),
      onFilterApply: _cache[26] || (_cache[26] = function($event) {
        return _ctx.$emit("filter-apply");
      }),
      onOperatorChange: _cache[27] || (_cache[27] = function($event) {
        return _ctx.$emit("operator-change", $event);
      }),
      onMatchmodeChange: _cache[28] || (_cache[28] = function($event) {
        return _ctx.$emit("matchmode-change", $event);
      }),
      onConstraintAdd: _cache[29] || (_cache[29] = function($event) {
        return _ctx.$emit("constraint-add", $event);
      }),
      onConstraintRemove: _cache[30] || (_cache[30] = function($event) {
        return _ctx.$emit("constraint-remove", $event);
      }),
      onApplyClick: _cache[31] || (_cache[31] = function($event) {
        return _ctx.$emit("apply-click", $event);
      }),
      onCheckboxChange: _cache[32] || (_cache[32] = function($event) {
        return _ctx.$emit("checkbox-change", $event);
      }),
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["column", "index", "allRowsSelected", "empty", "filters", "filtersStore", "filterInputProps", "filterButtonProps", "unstyled", "pt"])) : createCommentVNode("", true)], 64);
  }), 128))], 16)) : createCommentVNode("", true)], 16, _hoisted_1$1);
}
script$1.render = render$1;
var _excluded = ["expanded"];
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t["return"] || t["return"]();
    } finally {
      if (u) throw o;
    }
  } };
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var script = {
  name: "DataTable",
  "extends": script$d,
  inheritAttrs: false,
  emits: ["value-change", "update:first", "update:rows", "page", "update:sortField", "update:sortOrder", "update:multiSortMeta", "sort", "filter", "row-click", "row-dblclick", "update:selection", "row-select", "row-unselect", "update:contextMenuSelection", "row-contextmenu", "row-unselect-all", "row-select-all", "select-all-change", "column-resize-end", "column-reorder", "row-reorder", "update:expandedRows", "row-collapse", "row-expand", "update:expandedRowGroups", "rowgroup-collapse", "rowgroup-expand", "update:filters", "state-restore", "state-save", "cell-edit-init", "cell-edit-complete", "cell-edit-cancel", "update:editingRows", "row-edit-init", "row-edit-save", "row-edit-cancel"],
  provide: function provide4() {
    return {
      $columns: this.d_columns.get(),
      $columnGroups: this.d_columnGroups.get()
    };
  },
  data: function data10() {
    return {
      d_first: this.first,
      d_rows: this.rows,
      d_sortField: this.sortField,
      d_sortOrder: this.sortOrder,
      d_nullSortOrder: this.nullSortOrder,
      d_multiSortMeta: this.multiSortMeta ? _toConsumableArray(this.multiSortMeta) : [],
      d_groupRowsSortMeta: null,
      d_selectionKeys: null,
      d_columnOrder: null,
      d_editingRowKeys: null,
      d_editingMeta: {},
      d_filters: this.cloneFilters(this.filters),
      d_columns: new _default({
        type: "Column"
      }),
      d_columnGroups: new _default({
        type: "ColumnGroup"
      })
    };
  },
  rowTouched: false,
  anchorRowIndex: null,
  rangeRowIndex: null,
  documentColumnResizeListener: null,
  documentColumnResizeEndListener: null,
  lastResizeHelperX: null,
  resizeColumnElement: null,
  columnResizing: false,
  colReorderIconWidth: null,
  colReorderIconHeight: null,
  draggedColumn: null,
  draggedColumnElement: null,
  draggedRowIndex: null,
  droppedRowIndex: null,
  rowDragging: null,
  columnWidthsState: null,
  tableWidthState: null,
  columnWidthsRestored: false,
  watch: {
    first: function first(newValue) {
      this.d_first = newValue;
    },
    rows: function rows(newValue) {
      this.d_rows = newValue;
    },
    sortField: function sortField(newValue) {
      this.d_sortField = newValue;
    },
    sortOrder: function sortOrder(newValue) {
      this.d_sortOrder = newValue;
    },
    nullSortOrder: function nullSortOrder(newValue) {
      this.d_nullSortOrder = newValue;
    },
    multiSortMeta: function multiSortMeta(newValue) {
      this.d_multiSortMeta = newValue;
    },
    selection: {
      immediate: true,
      handler: function handler2(newValue) {
        if (this.dataKey) {
          this.updateSelectionKeys(newValue);
        }
      }
    },
    editingRows: {
      immediate: true,
      handler: function handler3(newValue) {
        if (this.dataKey) {
          this.updateEditingRowKeys(newValue);
        }
      }
    },
    filters: {
      deep: true,
      handler: function handler4(newValue) {
        this.d_filters = this.cloneFilters(newValue);
      }
    }
  },
  mounted: function mounted7() {
    if (this.isStateful()) {
      this.restoreState();
      this.resizableColumns && this.restoreColumnWidths();
    }
    if (this.editMode === "row" && this.dataKey && !this.d_editingRowKeys) {
      this.updateEditingRowKeys(this.editingRows);
    }
  },
  beforeUnmount: function beforeUnmount5() {
    this.unbindColumnResizeEvents();
    this.destroyStyleElement();
    this.d_columns.clear();
    this.d_columnGroups.clear();
  },
  updated: function updated6() {
    if (this.isStateful()) {
      this.saveState();
    }
    if (this.editMode === "row" && this.dataKey && !this.d_editingRowKeys) {
      this.updateEditingRowKeys(this.editingRows);
    }
  },
  methods: {
    columnProp: function columnProp8(col, prop) {
      return getVNodeProp(col, prop);
    },
    onPage: function onPage(event) {
      var _this = this;
      this.clearEditingMetaData();
      this.d_first = event.first;
      this.d_rows = event.rows;
      var pageEvent = this.createLazyLoadEvent(event);
      pageEvent.pageCount = event.pageCount;
      pageEvent.page = event.page;
      this.$emit("update:first", this.d_first);
      this.$emit("update:rows", this.d_rows);
      this.$emit("page", pageEvent);
      this.$nextTick(function() {
        _this.$emit("value-change", _this.processedData);
      });
    },
    onColumnHeaderClick: function onColumnHeaderClick(e) {
      var _this2 = this;
      var event = e.originalEvent;
      var column = e.column;
      if (this.columnProp(column, "sortable")) {
        var targetNode = event.target;
        var columnField = this.columnProp(column, "sortField") || this.columnProp(column, "field");
        if (getAttribute(targetNode, "data-p-sortable-column") === true || getAttribute(targetNode, "data-pc-section") === "columntitle" || getAttribute(targetNode, "data-pc-section") === "columnheadercontent" || getAttribute(targetNode, "data-pc-section") === "sorticon" || getAttribute(targetNode.parentElement, "data-pc-section") === "sorticon" || getAttribute(targetNode.parentElement.parentElement, "data-pc-section") === "sorticon" || targetNode.closest('[data-p-sortable-column="true"]') && !targetNode.closest('[data-pc-section="columnfilterbutton"]') && !isClickable(event.target)) {
          clearSelection();
          if (this.sortMode === "single") {
            if (this.d_sortField === columnField) {
              if (this.removableSort && this.d_sortOrder * -1 === this.defaultSortOrder) {
                this.d_sortOrder = null;
                this.d_sortField = null;
              } else {
                this.d_sortOrder = this.d_sortOrder * -1;
              }
            } else {
              this.d_sortOrder = this.defaultSortOrder;
              this.d_sortField = columnField;
            }
            this.$emit("update:sortField", this.d_sortField);
            this.$emit("update:sortOrder", this.d_sortOrder);
            this.resetPage();
          } else if (this.sortMode === "multiple") {
            var metaKey = event.metaKey || event.ctrlKey;
            if (!metaKey) {
              this.d_multiSortMeta = this.d_multiSortMeta.filter(function(meta) {
                return meta.field === columnField;
              });
            }
            this.addMultiSortField(columnField);
            this.$emit("update:multiSortMeta", this.d_multiSortMeta);
          }
          this.$emit("sort", this.createLazyLoadEvent(event));
          this.$nextTick(function() {
            _this2.$emit("value-change", _this2.processedData);
          });
        }
      }
    },
    sortSingle: function sortSingle(value) {
      var _this3 = this;
      this.clearEditingMetaData();
      if (this.groupRowsBy && this.groupRowsBy === this.sortField) {
        this.d_multiSortMeta = [{
          field: this.sortField,
          order: this.sortOrder || this.defaultSortOrder
        }, {
          field: this.d_sortField,
          order: this.d_sortOrder
        }];
        return this.sortMultiple(value);
      }
      var data11 = _toConsumableArray(value);
      var resolvedFieldData = /* @__PURE__ */ new Map();
      var _iterator = _createForOfIteratorHelper(data11), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var item = _step.value;
          resolvedFieldData.set(item, resolveFieldData(item, this.d_sortField));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var comparer = localeComparator();
      data11.sort(function(data1, data22) {
        var value1 = resolvedFieldData.get(data1);
        var value2 = resolvedFieldData.get(data22);
        return sort(value1, value2, _this3.d_sortOrder, comparer, _this3.d_nullSortOrder);
      });
      return data11;
    },
    sortMultiple: function sortMultiple(value) {
      var _this4 = this;
      this.clearEditingMetaData();
      if (this.groupRowsBy && (this.d_groupRowsSortMeta || this.d_multiSortMeta.length && this.groupRowsBy === this.d_multiSortMeta[0].field)) {
        var firstSortMeta = this.d_multiSortMeta[0];
        !this.d_groupRowsSortMeta && (this.d_groupRowsSortMeta = firstSortMeta);
        if (firstSortMeta.field !== this.d_groupRowsSortMeta.field) {
          this.d_multiSortMeta = [this.d_groupRowsSortMeta].concat(_toConsumableArray(this.d_multiSortMeta));
        }
      }
      var data11 = _toConsumableArray(value);
      data11.sort(function(data1, data22) {
        return _this4.multisortField(data1, data22, 0);
      });
      return data11;
    },
    multisortField: function multisortField(data1, data22, index) {
      var value1 = resolveFieldData(data1, this.d_multiSortMeta[index].field);
      var value2 = resolveFieldData(data22, this.d_multiSortMeta[index].field);
      var comparer = localeComparator();
      if (value1 === value2) {
        return this.d_multiSortMeta.length - 1 > index ? this.multisortField(data1, data22, index + 1) : 0;
      }
      return sort(value1, value2, this.d_multiSortMeta[index].order, comparer, this.d_nullSortOrder);
    },
    addMultiSortField: function addMultiSortField(field2) {
      var index = this.d_multiSortMeta.findIndex(function(meta) {
        return meta.field === field2;
      });
      if (index >= 0) {
        if (this.removableSort && this.d_multiSortMeta[index].order * -1 === this.defaultSortOrder) this.d_multiSortMeta.splice(index, 1);
        else this.d_multiSortMeta[index] = {
          field: field2,
          order: this.d_multiSortMeta[index].order * -1
        };
      } else {
        this.d_multiSortMeta.push({
          field: field2,
          order: this.defaultSortOrder
        });
      }
      this.d_multiSortMeta = _toConsumableArray(this.d_multiSortMeta);
    },
    getActiveFilters: function getActiveFilters(filters) {
      var removeEmptyFilters = function removeEmptyFilters2(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
        if (value.constraints) {
          var filteredConstraints = value.constraints.filter(function(constraint) {
            return constraint.value !== null;
          });
          if (filteredConstraints.length > 0) {
            return [key, _objectSpread$1(_objectSpread$1({}, value), {}, {
              constraints: filteredConstraints
            })];
          }
        } else if (value.value !== null) {
          return [key, value];
        }
        return void 0;
      };
      var filterValidEntries = function filterValidEntries2(entry) {
        return entry !== void 0;
      };
      var entries = Object.entries(filters).map(removeEmptyFilters).filter(filterValidEntries);
      return Object.fromEntries(entries);
    },
    filter: function filter2(data11) {
      var _this5 = this;
      if (!data11) {
        return;
      }
      this.clearEditingMetaData();
      var activeFilters = this.getActiveFilters(this.filters);
      var globalFilterFieldsArray;
      if (activeFilters["global"]) {
        globalFilterFieldsArray = this.globalFilterFields || this.columns.map(function(col) {
          return _this5.columnProp(col, "filterField") || _this5.columnProp(col, "field");
        });
      }
      var filteredValue = [];
      for (var i = 0; i < data11.length; i++) {
        var localMatch = true;
        var globalMatch = false;
        var localFiltered = false;
        for (var prop in activeFilters) {
          if (Object.prototype.hasOwnProperty.call(activeFilters, prop) && prop !== "global") {
            localFiltered = true;
            var filterField = prop;
            var filterMeta = activeFilters[filterField];
            if (filterMeta.operator) {
              var _iterator2 = _createForOfIteratorHelper(filterMeta.constraints), _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  var filterConstraint2 = _step2.value;
                  localMatch = this.executeLocalFilter(filterField, data11[i], filterConstraint2);
                  if (filterMeta.operator === FilterOperator.OR && localMatch || filterMeta.operator === FilterOperator.AND && !localMatch) {
                    break;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            } else {
              localMatch = this.executeLocalFilter(filterField, data11[i], filterMeta);
            }
            if (!localMatch) {
              break;
            }
          }
        }
        if (localMatch && activeFilters["global"] && !globalMatch && globalFilterFieldsArray) {
          for (var j = 0; j < globalFilterFieldsArray.length; j++) {
            var globalFilterField = globalFilterFieldsArray[j];
            globalMatch = FilterService.filters[activeFilters["global"].matchMode || FilterMatchMode.CONTAINS](resolveFieldData(data11[i], globalFilterField), activeFilters["global"].value, this.filterLocale);
            if (globalMatch) {
              break;
            }
          }
        }
        var matches = void 0;
        if (activeFilters["global"]) {
          matches = localFiltered ? localFiltered && localMatch && globalMatch : globalMatch;
        } else {
          matches = localFiltered && localMatch;
        }
        if (matches) {
          filteredValue.push(data11[i]);
        }
      }
      if (filteredValue.length === this.value.length || Object.keys(activeFilters).length == 0) {
        filteredValue = data11;
      }
      var filterEvent = this.createLazyLoadEvent();
      filterEvent.filteredValue = filteredValue;
      this.$emit("filter", filterEvent);
      this.$emit("value-change", filteredValue);
      return filteredValue;
    },
    executeLocalFilter: function executeLocalFilter(field2, rowData, filterMeta) {
      var filterValue = filterMeta.value;
      var filterMatchMode = filterMeta.matchMode || FilterMatchMode.STARTS_WITH;
      var dataFieldValue = resolveFieldData(rowData, field2);
      var filterConstraint2 = FilterService.filters[filterMatchMode];
      return filterConstraint2(dataFieldValue, filterValue, this.filterLocale);
    },
    onRowClick: function onRowClick2(e) {
      var event = e.originalEvent;
      var body = this.$refs.bodyRef && this.$refs.bodyRef.$el;
      var focusedItem = findSingle(body, 'tr[data-p-selectable-row="true"][tabindex="0"]');
      if (isClickable(event.target)) {
        return;
      }
      this.$emit("row-click", e);
      if (this.selectionMode) {
        var rowData = e.data;
        var rowIndex2 = this.d_first + e.index;
        if (this.isMultipleSelectionMode() && event.shiftKey && this.anchorRowIndex != null) {
          clearSelection();
          this.rangeRowIndex = rowIndex2;
          this.selectRange(event);
        } else {
          var selected = this.isSelected(rowData);
          var metaSelection = this.rowTouched ? false : this.metaKeySelection;
          this.anchorRowIndex = rowIndex2;
          this.rangeRowIndex = rowIndex2;
          if (metaSelection) {
            var metaKey = event.metaKey || event.ctrlKey;
            if (selected && metaKey) {
              if (this.isSingleSelectionMode()) {
                this.$emit("update:selection", null);
              } else {
                var selectionIndex = this.findIndexInSelection(rowData);
                var _selection = this.selection.filter(function(val, i) {
                  return i != selectionIndex;
                });
                this.$emit("update:selection", _selection);
              }
              this.$emit("row-unselect", {
                originalEvent: event,
                data: rowData,
                index: rowIndex2,
                type: "row"
              });
            } else {
              if (this.isSingleSelectionMode()) {
                this.$emit("update:selection", rowData);
              } else if (this.isMultipleSelectionMode()) {
                var _selection2 = metaKey ? this.selection || [] : [];
                _selection2 = [].concat(_toConsumableArray(_selection2), [rowData]);
                this.$emit("update:selection", _selection2);
              }
              this.$emit("row-select", {
                originalEvent: event,
                data: rowData,
                index: rowIndex2,
                type: "row"
              });
            }
          } else {
            if (this.selectionMode === "single") {
              if (selected) {
                this.$emit("update:selection", null);
                this.$emit("row-unselect", {
                  originalEvent: event,
                  data: rowData,
                  index: rowIndex2,
                  type: "row"
                });
              } else {
                this.$emit("update:selection", rowData);
                this.$emit("row-select", {
                  originalEvent: event,
                  data: rowData,
                  index: rowIndex2,
                  type: "row"
                });
              }
            } else if (this.selectionMode === "multiple") {
              if (selected) {
                var _selectionIndex = this.findIndexInSelection(rowData);
                var _selection3 = this.selection.filter(function(val, i) {
                  return i != _selectionIndex;
                });
                this.$emit("update:selection", _selection3);
                this.$emit("row-unselect", {
                  originalEvent: event,
                  data: rowData,
                  index: rowIndex2,
                  type: "row"
                });
              } else {
                var _selection4 = this.selection ? [].concat(_toConsumableArray(this.selection), [rowData]) : [rowData];
                this.$emit("update:selection", _selection4);
                this.$emit("row-select", {
                  originalEvent: event,
                  data: rowData,
                  index: rowIndex2,
                  type: "row"
                });
              }
            }
          }
        }
      }
      this.rowTouched = false;
      if (focusedItem) {
        var _event$target, _event$currentTarget;
        if (((_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.getAttribute("data-pc-section")) === "rowtoggleicon") return;
        var targetRow = (_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 ? void 0 : _event$currentTarget.closest('tr[data-p-selectable-row="true"]');
        focusedItem.tabIndex = "-1";
        if (targetRow) targetRow.tabIndex = "0";
      }
    },
    onRowDblClick: function onRowDblClick2(e) {
      var event = e.originalEvent;
      if (isClickable(event.target)) {
        return;
      }
      this.$emit("row-dblclick", e);
    },
    onRowRightClick: function onRowRightClick2(event) {
      if (this.contextMenu) {
        clearSelection();
        event.originalEvent.target.focus();
      }
      this.$emit("update:contextMenuSelection", event.data);
      this.$emit("row-contextmenu", event);
    },
    onRowTouchEnd: function onRowTouchEnd2() {
      this.rowTouched = true;
    },
    onRowKeyDown: function onRowKeyDown2(e, slotProps) {
      var event = e.originalEvent;
      var rowData = e.data;
      var rowIndex2 = e.index;
      var metaKey = event.metaKey || event.ctrlKey;
      if (this.selectionMode) {
        var row2 = event.target;
        switch (event.code) {
          case "ArrowDown":
            this.onArrowDownKey(event, row2, rowIndex2, slotProps);
            break;
          case "ArrowUp":
            this.onArrowUpKey(event, row2, rowIndex2, slotProps);
            break;
          case "Home":
            this.onHomeKey(event, row2, rowIndex2, slotProps);
            break;
          case "End":
            this.onEndKey(event, row2, rowIndex2, slotProps);
            break;
          case "Enter":
          case "NumpadEnter":
            this.onEnterKey(event, rowData, rowIndex2);
            break;
          case "Space":
            this.onSpaceKey(event, rowData, rowIndex2, slotProps);
            break;
          case "Tab":
            this.onTabKey(event, rowIndex2);
            break;
          default:
            if (event.code === "KeyA" && metaKey && this.isMultipleSelectionMode()) {
              var data11 = this.dataToRender(slotProps.rows);
              this.$emit("update:selection", data11);
            }
            var isCopyShortcut = event.code === "KeyC" && metaKey;
            if (!isCopyShortcut) event.preventDefault();
            break;
        }
      }
    },
    onArrowDownKey: function onArrowDownKey(event, row2, rowIndex2, slotProps) {
      var nextRow = this.findNextSelectableRow(row2);
      nextRow && this.focusRowChange(row2, nextRow);
      if (event.shiftKey) {
        var data11 = this.dataToRender(slotProps.rows);
        var nextRowIndex = rowIndex2 + 1 >= data11.length ? data11.length - 1 : rowIndex2 + 1;
        this.onRowClick({
          originalEvent: event,
          data: data11[nextRowIndex],
          index: nextRowIndex
        });
      }
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event, row2, rowIndex2, slotProps) {
      var prevRow = this.findPrevSelectableRow(row2);
      prevRow && this.focusRowChange(row2, prevRow);
      if (event.shiftKey) {
        var data11 = this.dataToRender(slotProps.rows);
        var prevRowIndex = rowIndex2 - 1 <= 0 ? 0 : rowIndex2 - 1;
        this.onRowClick({
          originalEvent: event,
          data: data11[prevRowIndex],
          index: prevRowIndex
        });
      }
      event.preventDefault();
    },
    onHomeKey: function onHomeKey(event, row2, rowIndex2, slotProps) {
      var firstRow = this.findFirstSelectableRow();
      firstRow && this.focusRowChange(row2, firstRow);
      if (event.ctrlKey && event.shiftKey) {
        var data11 = this.dataToRender(slotProps.rows);
        this.$emit("update:selection", data11.slice(0, rowIndex2 + 1));
      }
      event.preventDefault();
    },
    onEndKey: function onEndKey(event, row2, rowIndex2, slotProps) {
      var lastRow = this.findLastSelectableRow();
      lastRow && this.focusRowChange(row2, lastRow);
      if (event.ctrlKey && event.shiftKey) {
        var data11 = this.dataToRender(slotProps.rows);
        this.$emit("update:selection", data11.slice(rowIndex2, data11.length));
      }
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event, rowData, rowIndex2) {
      this.onRowClick({
        originalEvent: event,
        data: rowData,
        index: rowIndex2
      });
      event.preventDefault();
    },
    onSpaceKey: function onSpaceKey(event, rowData, rowIndex2, slotProps) {
      this.onEnterKey(event, rowData, rowIndex2);
      if (event.shiftKey && this.selection !== null) {
        var data11 = this.dataToRender(slotProps.rows);
        var index;
        if (this.selection.length > 0) {
          var firstSelectedRowIndex, lastSelectedRowIndex;
          firstSelectedRowIndex = findIndexInList(this.selection[0], data11);
          lastSelectedRowIndex = findIndexInList(this.selection[this.selection.length - 1], data11);
          index = rowIndex2 <= firstSelectedRowIndex ? lastSelectedRowIndex : firstSelectedRowIndex;
        } else {
          index = findIndexInList(this.selection, data11);
        }
        var _selection = index !== rowIndex2 ? data11.slice(Math.min(index, rowIndex2), Math.max(index, rowIndex2) + 1) : rowData;
        this.$emit("update:selection", _selection);
      }
    },
    onTabKey: function onTabKey(event, rowIndex2) {
      var body = this.$refs.bodyRef && this.$refs.bodyRef.$el;
      var rows2 = find(body, 'tr[data-p-selectable-row="true"]');
      if (event.code === "Tab" && rows2 && rows2.length > 0) {
        var firstSelectedRow = findSingle(body, 'tr[data-p-selected="true"]');
        var focusedItem = findSingle(body, 'tr[data-p-selectable-row="true"][tabindex="0"]');
        if (firstSelectedRow) {
          firstSelectedRow.tabIndex = "0";
          focusedItem && focusedItem !== firstSelectedRow && (focusedItem.tabIndex = "-1");
        } else {
          rows2[0].tabIndex = "0";
          focusedItem !== rows2[0] && rows2[rowIndex2] && (rows2[rowIndex2].tabIndex = "-1");
        }
      }
    },
    findNextSelectableRow: function findNextSelectableRow(row2) {
      var nextRow = row2.nextElementSibling;
      if (nextRow) {
        if (getAttribute(nextRow, "data-p-selectable-row") === true) return nextRow;
        else return this.findNextSelectableRow(nextRow);
      } else {
        return null;
      }
    },
    findPrevSelectableRow: function findPrevSelectableRow(row2) {
      var prevRow = row2.previousElementSibling;
      if (prevRow) {
        if (getAttribute(prevRow, "data-p-selectable-row") === true) return prevRow;
        else return this.findPrevSelectableRow(prevRow);
      } else {
        return null;
      }
    },
    findFirstSelectableRow: function findFirstSelectableRow() {
      var firstRow = findSingle(this.$refs.table, 'tr[data-p-selectable-row="true"]');
      return firstRow;
    },
    findLastSelectableRow: function findLastSelectableRow() {
      var rows2 = find(this.$refs.table, 'tr[data-p-selectable-row="true"]');
      return rows2 ? rows2[rows2.length - 1] : null;
    },
    focusRowChange: function focusRowChange(firstFocusableRow, currentFocusedRow) {
      firstFocusableRow.tabIndex = "-1";
      currentFocusedRow.tabIndex = "0";
      focus(currentFocusedRow);
    },
    toggleRowWithRadio: function toggleRowWithRadio2(event) {
      var rowData = event.data;
      if (this.isSelected(rowData)) {
        this.$emit("update:selection", null);
        this.$emit("row-unselect", {
          originalEvent: event.originalEvent,
          data: rowData,
          index: event.index,
          type: "radiobutton"
        });
      } else {
        this.$emit("update:selection", rowData);
        this.$emit("row-select", {
          originalEvent: event.originalEvent,
          data: rowData,
          index: event.index,
          type: "radiobutton"
        });
      }
    },
    toggleRowWithCheckbox: function toggleRowWithCheckbox2(event) {
      var rowData = event.data;
      if (this.isSelected(rowData)) {
        var selectionIndex = this.findIndexInSelection(rowData);
        var _selection = this.selection.filter(function(val, i) {
          return i != selectionIndex;
        });
        this.$emit("update:selection", _selection);
        this.$emit("row-unselect", {
          originalEvent: event.originalEvent,
          data: rowData,
          index: event.index,
          type: "checkbox"
        });
      } else {
        var _selection5 = this.selection ? _toConsumableArray(this.selection) : [];
        _selection5 = [].concat(_toConsumableArray(_selection5), [rowData]);
        this.$emit("update:selection", _selection5);
        this.$emit("row-select", {
          originalEvent: event.originalEvent,
          data: rowData,
          index: event.index,
          type: "checkbox"
        });
      }
    },
    toggleRowsWithCheckbox: function toggleRowsWithCheckbox(event) {
      if (this.selectAll !== null) {
        this.$emit("select-all-change", event);
      } else {
        var originalEvent = event.originalEvent, checked = event.checked;
        var _selection = [];
        if (checked) {
          _selection = this.frozenValue ? [].concat(_toConsumableArray(this.frozenValue), _toConsumableArray(this.processedData)) : this.processedData;
          this.$emit("row-select-all", {
            originalEvent,
            data: _selection
          });
        } else {
          this.$emit("row-unselect-all", {
            originalEvent
          });
        }
        this.$emit("update:selection", _selection);
      }
    },
    isSingleSelectionMode: function isSingleSelectionMode() {
      return this.selectionMode === "single";
    },
    isMultipleSelectionMode: function isMultipleSelectionMode() {
      return this.selectionMode === "multiple";
    },
    isSelected: function isSelected2(rowData) {
      if (rowData && this.selection) {
        if (this.dataKey) {
          return this.d_selectionKeys ? this.d_selectionKeys[resolveFieldData(rowData, this.dataKey)] !== void 0 : false;
        } else {
          if (this.selection instanceof Array) return this.findIndexInSelection(rowData) > -1;
          else return this.equals(rowData, this.selection);
        }
      }
      return false;
    },
    findIndexInSelection: function findIndexInSelection2(rowData) {
      return this.findIndex(rowData, this.selection);
    },
    findIndex: function findIndex2(rowData, collection) {
      var index = -1;
      if (collection && collection.length) {
        for (var i = 0; i < collection.length; i++) {
          if (this.equals(rowData, collection[i])) {
            index = i;
            break;
          }
        }
      }
      return index;
    },
    updateSelectionKeys: function updateSelectionKeys(selection) {
      this.d_selectionKeys = {};
      if (Array.isArray(selection)) {
        var _iterator3 = _createForOfIteratorHelper(selection), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var data11 = _step3.value;
            this.d_selectionKeys[String(resolveFieldData(data11, this.dataKey))] = 1;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } else {
        this.d_selectionKeys[String(resolveFieldData(selection, this.dataKey))] = 1;
      }
    },
    updateEditingRowKeys: function updateEditingRowKeys(editingRows) {
      if (editingRows && editingRows.length) {
        this.d_editingRowKeys = {};
        var _iterator4 = _createForOfIteratorHelper(editingRows), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var data11 = _step4.value;
            this.d_editingRowKeys[String(resolveFieldData(data11, this.dataKey))] = 1;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      } else {
        this.d_editingRowKeys = null;
      }
    },
    equals: function equals$12(data1, data22) {
      return this.compareSelectionBy === "equals" ? data1 === data22 : equals(data1, data22, this.dataKey);
    },
    selectRange: function selectRange(event) {
      var rangeStart, rangeEnd;
      if (this.rangeRowIndex > this.anchorRowIndex) {
        rangeStart = this.anchorRowIndex;
        rangeEnd = this.rangeRowIndex;
      } else if (this.rangeRowIndex < this.anchorRowIndex) {
        rangeStart = this.rangeRowIndex;
        rangeEnd = this.anchorRowIndex;
      } else {
        rangeStart = this.rangeRowIndex;
        rangeEnd = this.rangeRowIndex;
      }
      if (this.lazy && this.paginator) {
        rangeStart -= this.d_first;
        rangeEnd -= this.d_first;
      }
      var value = this.processedData;
      var _selection = [];
      for (var i = rangeStart; i <= rangeEnd; i++) {
        var rangeRowData = value[i];
        _selection.push(rangeRowData);
        this.$emit("row-select", {
          originalEvent: event,
          data: rangeRowData,
          type: "row"
        });
      }
      this.$emit("update:selection", _selection);
    },
    generateCSV: function generateCSV(options, data11) {
      var _this6 = this;
      var csv = "\uFEFF";
      if (!data11) {
        data11 = this.processedData;
        if (options && options.selectionOnly) data11 = this.selection || [];
        else if (this.frozenValue) data11 = data11 ? [].concat(_toConsumableArray(this.frozenValue), _toConsumableArray(data11)) : this.frozenValue;
      }
      var headerInitiated = false;
      for (var i = 0; i < this.columns.length; i++) {
        var column = this.columns[i];
        if (this.columnProp(column, "exportable") !== false && this.columnProp(column, "field")) {
          if (headerInitiated) csv += this.csvSeparator;
          else headerInitiated = true;
          csv += '"' + (this.columnProp(column, "exportHeader") || this.columnProp(column, "header") || this.columnProp(column, "field")) + '"';
        }
      }
      if (data11) {
        data11.forEach(function(record) {
          csv += "\n";
          var rowInitiated = false;
          for (var _i = 0; _i < _this6.columns.length; _i++) {
            var _column = _this6.columns[_i];
            if (_this6.columnProp(_column, "exportable") !== false && _this6.columnProp(_column, "field")) {
              if (rowInitiated) csv += _this6.csvSeparator;
              else rowInitiated = true;
              var cellData = resolveFieldData(record, _this6.columnProp(_column, "field"));
              if (cellData != null) {
                if (_this6.exportFunction) {
                  cellData = _this6.exportFunction({
                    data: cellData,
                    field: _this6.columnProp(_column, "field")
                  });
                } else cellData = String(cellData).replace(/"/g, '""');
              } else cellData = "";
              csv += '"' + cellData + '"';
            }
          }
        });
      }
      var footerInitiated = false;
      for (var _i2 = 0; _i2 < this.columns.length; _i2++) {
        var _column2 = this.columns[_i2];
        if (_i2 === 0) csv += "\n";
        if (this.columnProp(_column2, "exportable") !== false && this.columnProp(_column2, "exportFooter")) {
          if (footerInitiated) csv += this.csvSeparator;
          else footerInitiated = true;
          csv += '"' + (this.columnProp(_column2, "exportFooter") || this.columnProp(_column2, "footer") || this.columnProp(_column2, "field")) + '"';
        }
      }
      return csv;
    },
    exportCSV: function exportCSV$1(options, data11) {
      var csv = this.generateCSV(options, data11);
      exportCSV(csv, this.exportFilename);
    },
    resetPage: function resetPage() {
      this.d_first = 0;
      this.$emit("update:first", this.d_first);
    },
    onColumnResizeStart: function onColumnResizeStart(event) {
      var containerLeft = getOffset(this.$el).left;
      this.resizeColumnElement = event.target.parentElement;
      this.columnResizing = true;
      this.lastResizeHelperX = event.pageX - containerLeft + this.$el.scrollLeft;
      this.bindColumnResizeEvents();
    },
    onColumnResize: function onColumnResize(event) {
      var containerLeft = getOffset(this.$el).left;
      this.$el.setAttribute("data-p-unselectable-text", "true");
      !this.isUnstyled && addStyle(this.$el, {
        "user-select": "none"
      });
      this.$refs.resizeHelper.style.height = this.$el.offsetHeight + "px";
      this.$refs.resizeHelper.style.top = "0px";
      this.$refs.resizeHelper.style.left = event.pageX - containerLeft + this.$el.scrollLeft + "px";
      this.$refs.resizeHelper.style.display = "block";
    },
    onColumnResizeEnd: function onColumnResizeEnd() {
      var delta = isRTL(this.$el) ? this.lastResizeHelperX - this.$refs.resizeHelper.offsetLeft : this.$refs.resizeHelper.offsetLeft - this.lastResizeHelperX;
      var columnWidth = this.resizeColumnElement.offsetWidth;
      var newColumnWidth = columnWidth + delta;
      var minWidth = this.resizeColumnElement.style.minWidth || 15;
      if (columnWidth + delta > parseInt(minWidth, 10)) {
        if (this.columnResizeMode === "fit") {
          var nextColumn = this.resizeColumnElement.nextElementSibling;
          var nextColumnWidth = nextColumn.offsetWidth - delta;
          if (newColumnWidth > 15 && nextColumnWidth > 15) {
            this.resizeTableCells(newColumnWidth, nextColumnWidth);
          }
        } else if (this.columnResizeMode === "expand") {
          var tableWidth = this.$refs.table.offsetWidth + delta + "px";
          var updateTableWidth = function updateTableWidth2(el) {
            !!el && (el.style.width = el.style.minWidth = tableWidth);
          };
          this.resizeTableCells(newColumnWidth);
          updateTableWidth(this.$refs.table);
          if (!this.virtualScrollerDisabled) {
            var body = this.$refs.bodyRef && this.$refs.bodyRef.$el;
            var frozenBody = this.$refs.frozenBodyRef && this.$refs.frozenBodyRef.$el;
            updateTableWidth(body);
            updateTableWidth(frozenBody);
          }
        }
        this.$emit("column-resize-end", {
          element: this.resizeColumnElement,
          delta
        });
      }
      this.$refs.resizeHelper.style.display = "none";
      this.resizeColumn = null;
      this.$el.removeAttribute("data-p-unselectable-text");
      !this.isUnstyled && (this.$el.style["user-select"] = "");
      this.unbindColumnResizeEvents();
      if (this.isStateful()) {
        this.saveState();
      }
    },
    resizeTableCells: function resizeTableCells(newColumnWidth, nextColumnWidth) {
      var colIndex = getIndex(this.resizeColumnElement);
      var widths = [];
      var headers = find(this.$refs.table, 'thead[data-pc-section="thead"] > tr > th');
      headers.forEach(function(header) {
        return widths.push(getOuterWidth(header));
      });
      this.destroyStyleElement();
      this.createStyleElement();
      var innerHTML = "";
      var selector = '[data-pc-name="datatable"]['.concat(this.$attrSelector, '] > [data-pc-section="tablecontainer"] ').concat(this.virtualScrollerDisabled ? "" : '> [data-pc-name="virtualscroller"]', ' > table[data-pc-section="table"]');
      widths.forEach(function(width, index) {
        var colWidth = index === colIndex ? newColumnWidth : nextColumnWidth && index === colIndex + 1 ? nextColumnWidth : width;
        var style2 = "width: ".concat(colWidth, "px !important; max-width: ").concat(colWidth, "px !important");
        innerHTML += "\n                    ".concat(selector, ' > thead[data-pc-section="thead"] > tr > th:nth-child(').concat(index + 1, "),\n                    ").concat(selector, ' > tbody[data-pc-section="tbody"] > tr > td:nth-child(').concat(index + 1, "),\n                    ").concat(selector, ' > tfoot[data-pc-section="tfoot"] > tr > td:nth-child(').concat(index + 1, ") {\n                        ").concat(style2, "\n                    }\n                ");
      });
      this.styleElement.innerHTML = innerHTML;
    },
    bindColumnResizeEvents: function bindColumnResizeEvents() {
      var _this7 = this;
      if (!this.documentColumnResizeListener) {
        this.documentColumnResizeListener = function(event) {
          if (_this7.columnResizing) {
            _this7.onColumnResize(event);
          }
        };
        (void 0).addEventListener("mousemove", this.documentColumnResizeListener);
      }
      if (!this.documentColumnResizeEndListener) {
        this.documentColumnResizeEndListener = function() {
          if (_this7.columnResizing) {
            _this7.columnResizing = false;
            _this7.onColumnResizeEnd();
          }
        };
        (void 0).addEventListener("mouseup", this.documentColumnResizeEndListener);
      }
    },
    unbindColumnResizeEvents: function unbindColumnResizeEvents() {
      if (this.documentColumnResizeListener) {
        (void 0).removeEventListener("document", this.documentColumnResizeListener);
        this.documentColumnResizeListener = null;
      }
      if (this.documentColumnResizeEndListener) {
        (void 0).removeEventListener("document", this.documentColumnResizeEndListener);
        this.documentColumnResizeEndListener = null;
      }
    },
    onColumnHeaderMouseDown: function onColumnHeaderMouseDown(e) {
      var event = e.originalEvent;
      var column = e.column;
      if (this.reorderableColumns && this.columnProp(column, "reorderableColumn") !== false) {
        if (event.target.nodeName === "INPUT" || event.target.nodeName === "TEXTAREA" || getAttribute(event.target, '[data-pc-section="columnresizer"]')) event.currentTarget.draggable = false;
        else event.currentTarget.draggable = true;
      }
    },
    onColumnHeaderDragStart: function onColumnHeaderDragStart(e) {
      var event = e.originalEvent, column = e.column;
      if (this.columnResizing) {
        event.preventDefault();
        return;
      }
      this.colReorderIconWidth = getHiddenElementOuterWidth(this.$refs.reorderIndicatorUp);
      this.colReorderIconHeight = getHiddenElementOuterHeight(this.$refs.reorderIndicatorUp);
      this.draggedColumn = column;
      this.draggedColumnElement = this.findParentHeader(event.target);
      event.dataTransfer.setData("text", "b");
    },
    onColumnHeaderDragOver: function onColumnHeaderDragOver(e) {
      var event = e.originalEvent, column = e.column;
      var dropHeader = this.findParentHeader(event.target);
      if (this.reorderableColumns && this.draggedColumnElement && dropHeader && !this.columnProp(column, "frozen")) {
        event.preventDefault();
        var containerOffset = getOffset(this.$el);
        var dropHeaderOffset = getOffset(dropHeader);
        if (this.draggedColumnElement !== dropHeader) {
          var targetLeft = dropHeaderOffset.left - containerOffset.left;
          var columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
          this.$refs.reorderIndicatorUp.style.top = dropHeaderOffset.top - containerOffset.top - (this.colReorderIconHeight - 1) + "px";
          this.$refs.reorderIndicatorDown.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + "px";
          if (event.pageX > columnCenter) {
            this.$refs.reorderIndicatorUp.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.colReorderIconWidth / 2) + "px";
            this.$refs.reorderIndicatorDown.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.colReorderIconWidth / 2) + "px";
            this.dropPosition = 1;
          } else {
            this.$refs.reorderIndicatorUp.style.left = targetLeft - Math.ceil(this.colReorderIconWidth / 2) + "px";
            this.$refs.reorderIndicatorDown.style.left = targetLeft - Math.ceil(this.colReorderIconWidth / 2) + "px";
            this.dropPosition = -1;
          }
          this.$refs.reorderIndicatorUp.style.display = "block";
          this.$refs.reorderIndicatorDown.style.display = "block";
        }
      }
    },
    onColumnHeaderDragLeave: function onColumnHeaderDragLeave(e) {
      var event = e.originalEvent;
      if (this.reorderableColumns && this.draggedColumnElement) {
        event.preventDefault();
        this.$refs.reorderIndicatorUp.style.display = "none";
        this.$refs.reorderIndicatorDown.style.display = "none";
      }
    },
    onColumnHeaderDrop: function onColumnHeaderDrop(e) {
      var _this8 = this;
      var event = e.originalEvent, column = e.column;
      event.preventDefault();
      if (this.draggedColumnElement) {
        var dragIndex = getIndex(this.draggedColumnElement);
        var dropIndex = getIndex(this.findParentHeader(event.target));
        var allowDrop = dragIndex !== dropIndex;
        if (allowDrop && (dropIndex - dragIndex === 1 && this.dropPosition === -1 || dropIndex - dragIndex === -1 && this.dropPosition === 1)) {
          allowDrop = false;
        }
        if (allowDrop) {
          var isSameColumn = function isSameColumn2(col1, col2) {
            return _this8.columnProp(col1, "columnKey") || _this8.columnProp(col2, "columnKey") ? _this8.columnProp(col1, "columnKey") === _this8.columnProp(col2, "columnKey") : _this8.columnProp(col1, "field") === _this8.columnProp(col2, "field");
          };
          var dragColIndex = this.columns.findIndex(function(child) {
            return isSameColumn(child, _this8.draggedColumn);
          });
          var dropColIndex = this.columns.findIndex(function(child) {
            return isSameColumn(child, column);
          });
          var widths = [];
          var headers = find(this.$el, 'thead[data-pc-section="thead"] > tr > th');
          headers.forEach(function(header) {
            return widths.push(getOuterWidth(header));
          });
          var movedItem = widths.find(function(_, index) {
            return index === dragColIndex;
          });
          var remainingItems = widths.filter(function(_, index) {
            return index !== dragColIndex;
          });
          var reorderedWidths = [].concat(_toConsumableArray(remainingItems.slice(0, dropColIndex)), [movedItem], _toConsumableArray(remainingItems.slice(dropColIndex)));
          this.addColumnWidthStyles(reorderedWidths);
          if (dropColIndex < dragColIndex && this.dropPosition === 1) {
            dropColIndex++;
          }
          if (dropColIndex > dragColIndex && this.dropPosition === -1) {
            dropColIndex--;
          }
          reorderArray(this.columns, dragColIndex, dropColIndex);
          this.updateReorderableColumns();
          this.$emit("column-reorder", {
            originalEvent: event,
            dragIndex: dragColIndex,
            dropIndex: dropColIndex
          });
        }
        this.$refs.reorderIndicatorUp.style.display = "none";
        this.$refs.reorderIndicatorDown.style.display = "none";
        this.draggedColumnElement.draggable = false;
        this.draggedColumnElement = null;
        this.draggedColumn = null;
        this.dropPosition = null;
      }
    },
    findParentHeader: function findParentHeader(element) {
      if (element.nodeName === "TH") {
        return element;
      } else {
        var parent = element.parentElement;
        while (parent.nodeName !== "TH") {
          parent = parent.parentElement;
          if (!parent) break;
        }
        return parent;
      }
    },
    findColumnByKey: function findColumnByKey(columns2, key) {
      if (columns2 && columns2.length) {
        for (var i = 0; i < columns2.length; i++) {
          var column = columns2[i];
          if (this.columnProp(column, "columnKey") === key || this.columnProp(column, "field") === key) {
            return column;
          }
        }
      }
      return null;
    },
    onRowMouseDown: function onRowMouseDown2(event) {
      if (getAttribute(event.target, "data-pc-section") === "reorderablerowhandle" || getAttribute(event.target.parentElement, "data-pc-section") === "reorderablerowhandle") event.currentTarget.draggable = true;
      else event.currentTarget.draggable = false;
    },
    onRowDragStart: function onRowDragStart2(e) {
      var event = e.originalEvent;
      var index = e.index;
      this.rowDragging = true;
      this.draggedRowIndex = index;
      event.dataTransfer.setData("text", "b");
    },
    onRowDragOver: function onRowDragOver2(e) {
      var event = e.originalEvent;
      var index = e.index;
      if (this.rowDragging && this.draggedRowIndex !== index) {
        var rowElement = event.currentTarget;
        var rowY = getOffset(rowElement).top;
        var pageY = event.pageY;
        var rowMidY = rowY + getOuterHeight(rowElement) / 2;
        var prevRowElement = rowElement.previousElementSibling;
        if (pageY < rowMidY) {
          rowElement.setAttribute("data-p-datatable-dragpoint-bottom", "false");
          !this.isUnstyled && removeClass(rowElement, "p-datatable-dragpoint-bottom");
          this.droppedRowIndex = index;
          if (prevRowElement) {
            prevRowElement.setAttribute("data-p-datatable-dragpoint-bottom", "true");
            !this.isUnstyled && addClass(prevRowElement, "p-datatable-dragpoint-bottom");
          } else {
            rowElement.setAttribute("data-p-datatable-dragpoint-top", "true");
            !this.isUnstyled && addClass(rowElement, "p-datatable-dragpoint-top");
          }
        } else {
          if (prevRowElement) {
            prevRowElement.setAttribute("data-p-datatable-dragpoint-bottom", "false");
            !this.isUnstyled && removeClass(prevRowElement, "p-datatable-dragpoint-bottom");
          } else {
            rowElement.setAttribute("data-p-datatable-dragpoint-top", "true");
            !this.isUnstyled && addClass(rowElement, "p-datatable-dragpoint-top");
          }
          this.droppedRowIndex = index + 1;
          rowElement.setAttribute("data-p-datatable-dragpoint-bottom", "true");
          !this.isUnstyled && addClass(rowElement, "p-datatable-dragpoint-bottom");
        }
        event.preventDefault();
      }
    },
    onRowDragLeave: function onRowDragLeave2(event) {
      var rowElement = event.currentTarget;
      var prevRowElement = rowElement.previousElementSibling;
      if (prevRowElement) {
        prevRowElement.setAttribute("data-p-datatable-dragpoint-bottom", "false");
        !this.isUnstyled && removeClass(prevRowElement, "p-datatable-dragpoint-bottom");
      }
      rowElement.setAttribute("data-p-datatable-dragpoint-bottom", "false");
      !this.isUnstyled && removeClass(rowElement, "p-datatable-dragpoint-bottom");
      rowElement.setAttribute("data-p-datatable-dragpoint-top", "false");
      !this.isUnstyled && removeClass(rowElement, "p-datatable-dragpoint-top");
    },
    onRowDragEnd: function onRowDragEnd2(event) {
      this.rowDragging = false;
      this.draggedRowIndex = null;
      this.droppedRowIndex = null;
      event.currentTarget.draggable = false;
    },
    onRowDrop: function onRowDrop2(event) {
      if (this.droppedRowIndex != null) {
        var dropIndex = this.draggedRowIndex > this.droppedRowIndex ? this.droppedRowIndex : this.droppedRowIndex === 0 ? 0 : this.droppedRowIndex - 1;
        var processedData2 = _toConsumableArray(this.processedData);
        reorderArray(processedData2, this.draggedRowIndex + this.d_first, dropIndex + this.d_first);
        this.$emit("row-reorder", {
          originalEvent: event,
          dragIndex: this.draggedRowIndex,
          dropIndex,
          value: processedData2
        });
      }
      this.onRowDragLeave(event);
      this.onRowDragEnd(event);
      event.preventDefault();
    },
    toggleRow: function toggleRow2(event) {
      var _this9 = this;
      var expanded = event.expanded, rest = _objectWithoutProperties(event, _excluded);
      var rowData = event.data;
      var expandedRows;
      if (this.dataKey) {
        var value = resolveFieldData(rowData, this.dataKey);
        expandedRows = this.expandedRows ? _objectSpread$1({}, this.expandedRows) : {};
        expanded ? expandedRows[value] = true : delete expandedRows[value];
      } else {
        expandedRows = this.expandedRows ? _toConsumableArray(this.expandedRows) : [];
        expanded ? expandedRows.push(rowData) : expandedRows = expandedRows.filter(function(d) {
          return !_this9.equals(rowData, d);
        });
      }
      this.$emit("update:expandedRows", expandedRows);
      expanded ? this.$emit("row-expand", rest) : this.$emit("row-collapse", rest);
    },
    toggleRowGroup: function toggleRowGroup(e) {
      var event = e.originalEvent;
      var data11 = e.data;
      var groupFieldValue = resolveFieldData(data11, this.groupRowsBy);
      var _expandedRowGroups = this.expandedRowGroups ? _toConsumableArray(this.expandedRowGroups) : [];
      if (this.isRowGroupExpanded(data11)) {
        _expandedRowGroups = _expandedRowGroups.filter(function(group) {
          return group !== groupFieldValue;
        });
        this.$emit("update:expandedRowGroups", _expandedRowGroups);
        this.$emit("rowgroup-collapse", {
          originalEvent: event,
          data: groupFieldValue
        });
      } else {
        _expandedRowGroups.push(groupFieldValue);
        this.$emit("update:expandedRowGroups", _expandedRowGroups);
        this.$emit("rowgroup-expand", {
          originalEvent: event,
          data: groupFieldValue
        });
      }
    },
    isRowGroupExpanded: function isRowGroupExpanded2(rowData) {
      if (this.expandableRowGroups && this.expandedRowGroups) {
        var groupFieldValue = resolveFieldData(rowData, this.groupRowsBy);
        return this.expandedRowGroups.indexOf(groupFieldValue) > -1;
      }
      return false;
    },
    isStateful: function isStateful() {
      return this.stateKey != null;
    },
    getStorage: function getStorage() {
      switch (this.stateStorage) {
        case "local":
          return (void 0).localStorage;
        case "session":
          return (void 0).sessionStorage;
        default:
          throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
      }
    },
    saveState: function saveState() {
      var storage = this.getStorage();
      var state = {};
      if (this.paginator) {
        state.first = this.d_first;
        state.rows = this.d_rows;
      }
      if (this.d_sortField) {
        if (typeof this.d_sortField !== "function") state.sortField = this.d_sortField;
        state.sortOrder = this.d_sortOrder;
      }
      if (this.d_multiSortMeta) {
        state.multiSortMeta = this.d_multiSortMeta;
      }
      if (this.hasFilters) {
        state.filters = this.filters;
      }
      if (this.resizableColumns) {
        this.saveColumnWidths(state);
      }
      if (this.reorderableColumns) {
        state.columnOrder = this.d_columnOrder;
      }
      if (this.expandedRows) {
        state.expandedRows = this.expandedRows;
      }
      if (this.expandedRowGroups) {
        state.expandedRowGroups = this.expandedRowGroups;
      }
      if (this.selection) {
        state.selection = this.selection;
        state.selectionKeys = this.d_selectionKeys;
      }
      if (Object.keys(state).length) {
        storage.setItem(this.stateKey, JSON.stringify(state));
      }
      this.$emit("state-save", state);
    },
    restoreState: function restoreState() {
      var storage = this.getStorage();
      var stateString = storage.getItem(this.stateKey);
      var dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
      var reviver = function reviver2(key, value) {
        if (typeof value === "string" && dateFormat.test(value)) {
          return new Date(value);
        }
        return value;
      };
      var parsedState;
      try {
        parsedState = JSON.parse(stateString, reviver);
      } catch (error) {
      }
      if (!parsedState || _typeof$1(parsedState) !== "object") {
        storage.removeItem(this.stateKey);
        return;
      }
      var restoredState = {};
      if (this.paginator) {
        if (typeof parsedState.first === "number") {
          this.d_first = parsedState.first;
          this.$emit("update:first", this.d_first);
          restoredState.first = this.d_first;
        }
        if (typeof parsedState.rows === "number") {
          this.d_rows = parsedState.rows;
          this.$emit("update:rows", this.d_rows);
          restoredState.rows = this.d_rows;
        }
      }
      if (typeof parsedState.sortField === "string") {
        this.d_sortField = parsedState.sortField;
        this.$emit("update:sortField", this.d_sortField);
        restoredState.sortField = this.d_sortField;
      }
      if (typeof parsedState.sortOrder === "number") {
        this.d_sortOrder = parsedState.sortOrder;
        this.$emit("update:sortOrder", this.d_sortOrder);
        restoredState.sortOrder = this.d_sortOrder;
      }
      if (Array.isArray(parsedState.multiSortMeta)) {
        this.d_multiSortMeta = parsedState.multiSortMeta;
        this.$emit("update:multiSortMeta", this.d_multiSortMeta);
        restoredState.multiSortMeta = this.d_multiSortMeta;
      }
      if (this.hasFilters && _typeof$1(parsedState.filters) === "object" && parsedState.filters !== null) {
        this.d_filters = this.cloneFilters(parsedState.filters);
        this.$emit("update:filters", this.d_filters);
        restoredState.filters = this.d_filters;
      }
      if (this.resizableColumns) {
        if (typeof parsedState.columnWidths === "string") {
          this.columnWidthsState = parsedState.columnWidths;
          restoredState.columnWidths = this.columnWidthsState;
        }
        if (typeof parsedState.tableWidth === "string") {
          this.tableWidthState = parsedState.tableWidth;
          restoredState.tableWidth = this.tableWidthState;
        }
      }
      if (this.reorderableColumns && Array.isArray(parsedState.columnOrder)) {
        this.d_columnOrder = parsedState.columnOrder;
        restoredState.columnOrder = this.d_columnOrder;
      }
      if (_typeof$1(parsedState.expandedRows) === "object" && parsedState.expandedRows !== null) {
        this.$emit("update:expandedRows", parsedState.expandedRows);
        restoredState.expandedRows = parsedState.expandedRows;
      }
      if (Array.isArray(parsedState.expandedRowGroups)) {
        this.$emit("update:expandedRowGroups", parsedState.expandedRowGroups);
        restoredState.expandedRowGroups = parsedState.expandedRowGroups;
      }
      if (_typeof$1(parsedState.selection) === "object" && parsedState.selection !== null) {
        if (_typeof$1(parsedState.selectionKeys) === "object" && parsedState.selectionKeys !== null) {
          this.d_selectionKeys = parsedState.selectionKeys;
          restoredState.selectionKeys = this.d_selectionKeys;
        }
        this.$emit("update:selection", parsedState.selection);
        restoredState.selection = parsedState.selection;
      }
      this.$emit("state-restore", restoredState);
    },
    saveColumnWidths: function saveColumnWidths(state) {
      var widths = [];
      var headers = find(this.$el, 'thead[data-pc-section="thead"] > tr > th');
      headers.forEach(function(header) {
        return widths.push(getOuterWidth(header));
      });
      state.columnWidths = widths.join(",");
      if (this.columnResizeMode === "expand") {
        state.tableWidth = getOuterWidth(this.$refs.table) + "px";
      }
    },
    addColumnWidthStyles: function addColumnWidthStyles(widths) {
      this.createStyleElement();
      var innerHTML = "";
      var selector = '[data-pc-name="datatable"]['.concat(this.$attrSelector, '] > [data-pc-section="tablecontainer"] ').concat(this.virtualScrollerDisabled ? "" : '> [data-pc-name="virtualscroller"]', ' > table[data-pc-section="table"]');
      widths.forEach(function(width, index) {
        var style2 = "width: ".concat(width, "px !important; max-width: ").concat(width, "px !important");
        innerHTML += "\n        ".concat(selector, ' > thead[data-pc-section="thead"] > tr > th:nth-child(').concat(index + 1, "),\n        ").concat(selector, ' > tbody[data-pc-section="tbody"] > tr > td:nth-child(').concat(index + 1, "),\n        ").concat(selector, ' > tfoot[data-pc-section="tfoot"] > tr > td:nth-child(').concat(index + 1, ") {\n            ").concat(style2, "\n        }\n    ");
      });
      this.styleElement.innerHTML = innerHTML;
    },
    restoreColumnWidths: function restoreColumnWidths() {
      if (this.columnWidthsState) {
        var widths = this.columnWidthsState.split(",");
        if (this.columnResizeMode === "expand" && this.tableWidthState) {
          this.$refs.table.style.width = this.tableWidthState;
          this.$refs.table.style.minWidth = this.tableWidthState;
        }
        if (isNotEmpty(widths)) {
          this.addColumnWidthStyles(widths);
        }
      }
    },
    onCellEditInit: function onCellEditInit2(event) {
      this.$emit("cell-edit-init", event);
    },
    onCellEditComplete: function onCellEditComplete2(event) {
      this.$emit("cell-edit-complete", event);
    },
    onCellEditCancel: function onCellEditCancel2(event) {
      this.$emit("cell-edit-cancel", event);
    },
    onRowEditInit: function onRowEditInit3(event) {
      var _editingRows = this.editingRows ? _toConsumableArray(this.editingRows) : [];
      _editingRows.push(event.data);
      this.$emit("update:editingRows", _editingRows);
      this.$emit("row-edit-init", event);
    },
    onRowEditSave: function onRowEditSave3(event) {
      var _editingRows = _toConsumableArray(this.editingRows);
      _editingRows.splice(this.findIndex(event.data, _editingRows), 1);
      this.$emit("update:editingRows", _editingRows);
      this.$emit("row-edit-save", event);
    },
    onRowEditCancel: function onRowEditCancel3(event) {
      var _editingRows = _toConsumableArray(this.editingRows);
      _editingRows.splice(this.findIndex(event.data, _editingRows), 1);
      this.$emit("update:editingRows", _editingRows);
      this.$emit("row-edit-cancel", event);
    },
    onEditingMetaChange: function onEditingMetaChange2(event) {
      var data11 = event.data, field2 = event.field, index = event.index, editing2 = event.editing;
      var editingMeta = _objectSpread$1({}, this.d_editingMeta);
      var meta = editingMeta[index];
      if (editing2) {
        !meta && (meta = editingMeta[index] = {
          data: _objectSpread$1({}, data11),
          fields: []
        });
        meta["fields"].push(field2);
      } else if (meta) {
        var fields = meta["fields"].filter(function(f) {
          return f !== field2;
        });
        !fields.length ? delete editingMeta[index] : meta["fields"] = fields;
      }
      this.d_editingMeta = editingMeta;
    },
    clearEditingMetaData: function clearEditingMetaData() {
      if (this.editMode) {
        this.d_editingMeta = {};
      }
    },
    createLazyLoadEvent: function createLazyLoadEvent(event) {
      return {
        originalEvent: event,
        first: this.d_first,
        rows: this.d_rows,
        sortField: this.d_sortField,
        sortOrder: this.d_sortOrder,
        multiSortMeta: this.d_multiSortMeta,
        filters: this.d_filters
      };
    },
    hasGlobalFilter: function hasGlobalFilter() {
      return this.filters && Object.prototype.hasOwnProperty.call(this.filters, "global");
    },
    onFilterChange: function onFilterChange(filters) {
      this.d_filters = filters;
    },
    onFilterApply: function onFilterApply() {
      this.d_first = 0;
      this.$emit("update:first", this.d_first);
      this.$emit("update:filters", this.d_filters);
      if (this.lazy) {
        this.$emit("filter", this.createLazyLoadEvent());
      }
    },
    cloneFilters: function cloneFilters(filters) {
      var cloned = {};
      if (filters) {
        Object.entries(filters).forEach(function(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2), prop = _ref4[0], value = _ref4[1];
          cloned[prop] = value.operator ? {
            operator: value.operator,
            constraints: value.constraints.map(function(constraint) {
              return _objectSpread$1({}, constraint);
            })
          } : _objectSpread$1({}, value);
        });
      }
      return cloned;
    },
    updateReorderableColumns: function updateReorderableColumns() {
      var _this0 = this;
      var columnOrder = [];
      this.columns.forEach(function(col) {
        return columnOrder.push(_this0.columnProp(col, "columnKey") || _this0.columnProp(col, "field"));
      });
      this.d_columnOrder = columnOrder;
    },
    createStyleElement: function createStyleElement() {
      var _this$$primevue;
      this.styleElement = (void 0).createElement("style");
      this.styleElement.type = "text/css";
      setAttribute(this.styleElement, "nonce", (_this$$primevue = this.$primevue) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.config) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.csp) === null || _this$$primevue === void 0 ? void 0 : _this$$primevue.nonce);
      (void 0).head.appendChild(this.styleElement);
    },
    destroyStyleElement: function destroyStyleElement() {
      if (this.styleElement) {
        (void 0).head.removeChild(this.styleElement);
        this.styleElement = null;
      }
    },
    dataToRender: function dataToRender(data11) {
      var _data = data11 || this.processedData;
      if (_data && this.paginator) {
        var first2 = this.lazy ? 0 : this.d_first;
        return _data.slice(first2, first2 + this.d_rows);
      }
      return _data;
    },
    getVirtualScrollerRef: function getVirtualScrollerRef() {
      return this.$refs.virtualScroller;
    },
    hasSpacerStyle: function hasSpacerStyle(style2) {
      return isNotEmpty(style2);
    }
  },
  computed: {
    columns: function columns() {
      var cols = this.d_columns.get(this);
      if (cols && this.reorderableColumns && this.d_columnOrder) {
        var orderedColumns = [];
        var _iterator5 = _createForOfIteratorHelper(this.d_columnOrder), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var columnKey = _step5.value;
            var column = this.findColumnByKey(cols, columnKey);
            if (column && !this.columnProp(column, "hidden")) {
              orderedColumns.push(column);
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        return [].concat(orderedColumns, _toConsumableArray(cols.filter(function(item) {
          return orderedColumns.indexOf(item) < 0;
        })));
      }
      return cols;
    },
    columnGroups: function columnGroups() {
      return this.d_columnGroups.get(this);
    },
    headerColumnGroup: function headerColumnGroup() {
      var _this$columnGroups, _this1 = this;
      return (_this$columnGroups = this.columnGroups) === null || _this$columnGroups === void 0 ? void 0 : _this$columnGroups.find(function(group) {
        return _this1.columnProp(group, "type") === "header";
      });
    },
    footerColumnGroup: function footerColumnGroup() {
      var _this$columnGroups2, _this10 = this;
      return (_this$columnGroups2 = this.columnGroups) === null || _this$columnGroups2 === void 0 ? void 0 : _this$columnGroups2.find(function(group) {
        return _this10.columnProp(group, "type") === "footer";
      });
    },
    hasFilters: function hasFilters() {
      return this.filters && Object.keys(this.filters).length > 0 && this.filters.constructor === Object;
    },
    processedData: function processedData() {
      var _this$virtualScroller;
      var data11 = this.value || [];
      if (!this.lazy && !((_this$virtualScroller = this.virtualScrollerOptions) !== null && _this$virtualScroller !== void 0 && _this$virtualScroller.lazy)) {
        if (data11 && data11.length) {
          if (this.hasFilters) {
            data11 = this.filter(data11);
          }
          if (this.sorted) {
            if (this.sortMode === "single") data11 = this.sortSingle(data11);
            else if (this.sortMode === "multiple") data11 = this.sortMultiple(data11);
          }
        }
      }
      return data11;
    },
    totalRecordsLength: function totalRecordsLength() {
      if (this.lazy) {
        return this.totalRecords;
      } else {
        var data11 = this.processedData;
        return data11 ? data11.length : 0;
      }
    },
    empty: function empty() {
      var data11 = this.processedData;
      return !data11 || data11.length === 0;
    },
    paginatorTop: function paginatorTop() {
      return this.paginator && (this.paginatorPosition !== "bottom" || this.paginatorPosition === "both");
    },
    paginatorBottom: function paginatorBottom() {
      return this.paginator && (this.paginatorPosition !== "top" || this.paginatorPosition === "both");
    },
    sorted: function sorted() {
      return this.d_sortField || this.d_multiSortMeta && this.d_multiSortMeta.length > 0;
    },
    allRowsSelected: function allRowsSelected() {
      var _this11 = this;
      if (this.selectAll !== null) {
        return this.selectAll;
      } else {
        var val = this.frozenValue ? [].concat(_toConsumableArray(this.frozenValue), _toConsumableArray(this.processedData)) : this.processedData;
        return isNotEmpty(val) && this.selection && Array.isArray(this.selection) && val.every(function(v) {
          return _this11.selection.some(function(s) {
            return _this11.equals(s, v);
          });
        });
      }
    },
    groupRowSortField: function groupRowSortField() {
      return this.sortMode === "single" ? this.sortField : this.d_groupRowsSortMeta ? this.d_groupRowsSortMeta.field : null;
    },
    headerFilterButtonProps: function headerFilterButtonProps() {
      return _objectSpread$1(_objectSpread$1({
        filter: {
          severity: "secondary",
          text: true,
          rounded: true
        }
      }, this.filterButtonProps), {}, {
        inline: _objectSpread$1({
          clear: {
            severity: "secondary",
            text: true,
            rounded: true
          }
        }, this.filterButtonProps.inline),
        popover: _objectSpread$1({
          addRule: {
            severity: "info",
            text: true,
            size: "small"
          },
          removeRule: {
            severity: "danger",
            text: true,
            size: "small"
          },
          apply: {
            size: "small"
          },
          clear: {
            outlined: true,
            size: "small"
          }
        }, this.filterButtonProps.popover)
      });
    },
    rowEditButtonProps: function rowEditButtonProps() {
      return _objectSpread$1(_objectSpread$1({}, {
        init: {
          severity: "secondary",
          text: true,
          rounded: true
        },
        save: {
          severity: "secondary",
          text: true,
          rounded: true
        },
        cancel: {
          severity: "secondary",
          text: true,
          rounded: true
        }
      }), this.editButtonProps);
    },
    virtualScrollerDisabled: function virtualScrollerDisabled() {
      return isEmpty(this.virtualScrollerOptions) || !this.scrollable;
    },
    dataP: function dataP2() {
      return cn({
        scrollable: this.scrollable,
        "flex-scrollable": this.scrollable && this.scrollHeight === "flex"
      });
    }
  },
  components: {
    DTPaginator: script$C,
    DTTableHeader: script$1,
    DTTableBody: script$8,
    DTTableFooter: script$6,
    DTVirtualScroller: script$n,
    ArrowDownIcon: script$k,
    ArrowUpIcon: script$j,
    SpinnerIcon: script$l
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1 = ["data-p"];
var _hoisted_2 = ["data-p"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  var _component_DTPaginator = resolveComponent("DTPaginator");
  var _component_DTTableHeader = resolveComponent("DTTableHeader");
  var _component_DTTableBody = resolveComponent("DTTableBody");
  var _component_DTTableFooter = resolveComponent("DTTableFooter");
  var _component_DTVirtualScroller = resolveComponent("DTVirtualScroller");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    "data-scrollselectors": ".p-datatable-wrapper",
    "data-p": $options.dataP
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default"), _ctx.loading ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("mask")
  }, _ctx.ptm("mask")), [_ctx.$slots.loading ? renderSlot(_ctx.$slots, "loading", {
    key: 0
  }) : (openBlock(), createElementBlock(Fragment, {
    key: 1
  }, [_ctx.$slots.loadingicon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.loadingicon), {
    key: 0,
    "class": normalizeClass(_ctx.cx("loadingIcon"))
  }, null, 8, ["class"])) : _ctx.loadingIcon ? (openBlock(), createElementBlock("i", mergeProps({
    key: 1,
    "class": [_ctx.cx("loadingIcon"), "pi-spin", _ctx.loadingIcon]
  }, _ctx.ptm("loadingIcon")), null, 16)) : (openBlock(), createBlock(_component_SpinnerIcon, mergeProps({
    key: 2,
    spin: "",
    "class": _ctx.cx("loadingIcon")
  }, _ctx.ptm("loadingIcon")), null, 16, ["class"]))], 64))], 16)) : createCommentVNode("", true), _ctx.$slots.header ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("header")
  }, _ctx.ptm("header")), [renderSlot(_ctx.$slots, "header")], 16)) : createCommentVNode("", true), $options.paginatorTop ? (openBlock(), createBlock(_component_DTPaginator, {
    key: 2,
    rows: $data.d_rows,
    first: $data.d_first,
    totalRecords: $options.totalRecordsLength,
    pageLinkSize: _ctx.pageLinkSize,
    template: _ctx.paginatorTemplate,
    rowsPerPageOptions: _ctx.rowsPerPageOptions,
    currentPageReportTemplate: _ctx.currentPageReportTemplate,
    "class": normalizeClass(_ctx.cx("pcPaginator", {
      position: "top"
    })),
    onPage: _cache[0] || (_cache[0] = function($event) {
      return $options.onPage($event);
    }),
    alwaysShow: _ctx.alwaysShowPaginator,
    unstyled: _ctx.unstyled,
    "data-p-top": true,
    pt: _ctx.ptm("pcPaginator")
  }, createSlots({
    _: 2
  }, [_ctx.$slots.paginatorcontainer ? {
    name: "container",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "paginatorcontainer", {
        first: slotProps.first,
        last: slotProps.last,
        rows: slotProps.rows,
        page: slotProps.page,
        pageCount: slotProps.pageCount,
        pageLinks: slotProps.pageLinks,
        totalRecords: slotProps.totalRecords,
        firstPageCallback: slotProps.firstPageCallback,
        lastPageCallback: slotProps.lastPageCallback,
        prevPageCallback: slotProps.prevPageCallback,
        nextPageCallback: slotProps.nextPageCallback,
        rowChangeCallback: slotProps.rowChangeCallback,
        changePageCallback: slotProps.changePageCallback
      })];
    }),
    key: "0"
  } : void 0, _ctx.$slots.paginatorstart ? {
    name: "start",
    fn: withCtx(function() {
      return [renderSlot(_ctx.$slots, "paginatorstart")];
    }),
    key: "1"
  } : void 0, _ctx.$slots.paginatorend ? {
    name: "end",
    fn: withCtx(function() {
      return [renderSlot(_ctx.$slots, "paginatorend")];
    }),
    key: "2"
  } : void 0, _ctx.$slots.paginatorfirstpagelinkicon ? {
    name: "firstpagelinkicon",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "paginatorfirstpagelinkicon", {
        "class": normalizeClass(slotProps["class"])
      })];
    }),
    key: "3"
  } : void 0, _ctx.$slots.paginatorprevpagelinkicon ? {
    name: "prevpagelinkicon",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "paginatorprevpagelinkicon", {
        "class": normalizeClass(slotProps["class"])
      })];
    }),
    key: "4"
  } : void 0, _ctx.$slots.paginatornextpagelinkicon ? {
    name: "nextpagelinkicon",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "paginatornextpagelinkicon", {
        "class": normalizeClass(slotProps["class"])
      })];
    }),
    key: "5"
  } : void 0, _ctx.$slots.paginatorlastpagelinkicon ? {
    name: "lastpagelinkicon",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "paginatorlastpagelinkicon", {
        "class": normalizeClass(slotProps["class"])
      })];
    }),
    key: "6"
  } : void 0, _ctx.$slots.paginatorjumptopagedropdownicon ? {
    name: "jumptopagedropdownicon",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "paginatorjumptopagedropdownicon", {
        "class": normalizeClass(slotProps["class"])
      })];
    }),
    key: "7"
  } : void 0, _ctx.$slots.paginatorrowsperpagedropdownicon ? {
    name: "rowsperpagedropdownicon",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "paginatorrowsperpagedropdownicon", {
        "class": normalizeClass(slotProps["class"])
      })];
    }),
    key: "8"
  } : void 0]), 1032, ["rows", "first", "totalRecords", "pageLinkSize", "template", "rowsPerPageOptions", "currentPageReportTemplate", "class", "alwaysShow", "unstyled", "pt"])) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("tableContainer"),
    style: [_ctx.sx("tableContainer"), {
      maxHeight: $options.virtualScrollerDisabled ? _ctx.scrollHeight : ""
    }],
    "data-p": $options.dataP
  }, _ctx.ptm("tableContainer")), [createVNode(_component_DTVirtualScroller, mergeProps({
    ref: "virtualScroller"
  }, _ctx.virtualScrollerOptions, {
    items: $options.processedData,
    columns: $options.columns,
    style: _ctx.scrollHeight !== "flex" ? {
      height: _ctx.scrollHeight
    } : void 0,
    scrollHeight: _ctx.scrollHeight !== "flex" ? void 0 : "100%",
    disabled: $options.virtualScrollerDisabled,
    loaderDisabled: "",
    inline: "",
    autoSize: "",
    showSpacer: false,
    pt: _ctx.ptm("virtualScroller")
  }), {
    content: withCtx(function(slotProps) {
      return [createElementVNode("table", mergeProps({
        ref: "table",
        role: "table",
        "class": [_ctx.cx("table"), _ctx.tableClass],
        style: [_ctx.tableStyle, slotProps.spacerStyle]
      }, _objectSpread(_objectSpread({}, _ctx.tableProps), _ctx.ptm("table"))), [_ctx.showHeaders ? (openBlock(), createBlock(_component_DTTableHeader, {
        key: 0,
        columnGroup: $options.headerColumnGroup,
        columns: slotProps.columns,
        rowGroupMode: _ctx.rowGroupMode,
        groupRowsBy: _ctx.groupRowsBy,
        groupRowSortField: $options.groupRowSortField,
        reorderableColumns: _ctx.reorderableColumns,
        resizableColumns: _ctx.resizableColumns,
        allRowsSelected: $options.allRowsSelected,
        empty: $options.empty,
        sortMode: _ctx.sortMode,
        sortField: $data.d_sortField,
        sortOrder: $data.d_sortOrder,
        multiSortMeta: $data.d_multiSortMeta,
        filters: $data.d_filters,
        filtersStore: _ctx.filters,
        filterDisplay: _ctx.filterDisplay,
        filterButtonProps: $options.headerFilterButtonProps,
        filterInputProps: _ctx.filterInputProps,
        first: $data.d_first,
        onColumnClick: _cache[1] || (_cache[1] = function($event) {
          return $options.onColumnHeaderClick($event);
        }),
        onColumnMousedown: _cache[2] || (_cache[2] = function($event) {
          return $options.onColumnHeaderMouseDown($event);
        }),
        onFilterChange: $options.onFilterChange,
        onFilterApply: $options.onFilterApply,
        onColumnDragstart: _cache[3] || (_cache[3] = function($event) {
          return $options.onColumnHeaderDragStart($event);
        }),
        onColumnDragover: _cache[4] || (_cache[4] = function($event) {
          return $options.onColumnHeaderDragOver($event);
        }),
        onColumnDragleave: _cache[5] || (_cache[5] = function($event) {
          return $options.onColumnHeaderDragLeave($event);
        }),
        onColumnDrop: _cache[6] || (_cache[6] = function($event) {
          return $options.onColumnHeaderDrop($event);
        }),
        onColumnResizestart: _cache[7] || (_cache[7] = function($event) {
          return $options.onColumnResizeStart($event);
        }),
        onCheckboxChange: _cache[8] || (_cache[8] = function($event) {
          return $options.toggleRowsWithCheckbox($event);
        }),
        unstyled: _ctx.unstyled,
        pt: _ctx.pt
      }, null, 8, ["columnGroup", "columns", "rowGroupMode", "groupRowsBy", "groupRowSortField", "reorderableColumns", "resizableColumns", "allRowsSelected", "empty", "sortMode", "sortField", "sortOrder", "multiSortMeta", "filters", "filtersStore", "filterDisplay", "filterButtonProps", "filterInputProps", "first", "onFilterChange", "onFilterApply", "unstyled", "pt"])) : createCommentVNode("", true), _ctx.frozenValue ? (openBlock(), createBlock(_component_DTTableBody, {
        key: 1,
        ref: "frozenBodyRef",
        value: _ctx.frozenValue,
        frozenRow: true,
        columns: slotProps.columns,
        first: $data.d_first,
        dataKey: _ctx.dataKey,
        selection: _ctx.selection,
        selectionKeys: $data.d_selectionKeys,
        selectionMode: _ctx.selectionMode,
        rowHover: _ctx.rowHover,
        contextMenu: _ctx.contextMenu,
        contextMenuSelection: _ctx.contextMenuSelection,
        rowGroupMode: _ctx.rowGroupMode,
        groupRowsBy: _ctx.groupRowsBy,
        expandableRowGroups: _ctx.expandableRowGroups,
        rowClass: _ctx.rowClass,
        rowStyle: _ctx.rowStyle,
        editMode: _ctx.editMode,
        compareSelectionBy: _ctx.compareSelectionBy,
        scrollable: _ctx.scrollable,
        expandedRowIcon: _ctx.expandedRowIcon,
        collapsedRowIcon: _ctx.collapsedRowIcon,
        expandedRows: _ctx.expandedRows,
        expandedRowGroups: _ctx.expandedRowGroups,
        editingRows: _ctx.editingRows,
        editingRowKeys: $data.d_editingRowKeys,
        templates: _ctx.$slots,
        editButtonProps: $options.rowEditButtonProps,
        isVirtualScrollerDisabled: true,
        onRowgroupToggle: $options.toggleRowGroup,
        onRowClick: _cache[9] || (_cache[9] = function($event) {
          return $options.onRowClick($event);
        }),
        onRowDblclick: _cache[10] || (_cache[10] = function($event) {
          return $options.onRowDblClick($event);
        }),
        onRowRightclick: _cache[11] || (_cache[11] = function($event) {
          return $options.onRowRightClick($event);
        }),
        onRowTouchend: $options.onRowTouchEnd,
        onRowKeydown: $options.onRowKeyDown,
        onRowMousedown: $options.onRowMouseDown,
        onRowDragstart: _cache[12] || (_cache[12] = function($event) {
          return $options.onRowDragStart($event);
        }),
        onRowDragover: _cache[13] || (_cache[13] = function($event) {
          return $options.onRowDragOver($event);
        }),
        onRowDragleave: _cache[14] || (_cache[14] = function($event) {
          return $options.onRowDragLeave($event);
        }),
        onRowDragend: _cache[15] || (_cache[15] = function($event) {
          return $options.onRowDragEnd($event);
        }),
        onRowDrop: _cache[16] || (_cache[16] = function($event) {
          return $options.onRowDrop($event);
        }),
        onRowToggle: _cache[17] || (_cache[17] = function($event) {
          return $options.toggleRow($event);
        }),
        onRadioChange: _cache[18] || (_cache[18] = function($event) {
          return $options.toggleRowWithRadio($event);
        }),
        onCheckboxChange: _cache[19] || (_cache[19] = function($event) {
          return $options.toggleRowWithCheckbox($event);
        }),
        onCellEditInit: _cache[20] || (_cache[20] = function($event) {
          return $options.onCellEditInit($event);
        }),
        onCellEditComplete: _cache[21] || (_cache[21] = function($event) {
          return $options.onCellEditComplete($event);
        }),
        onCellEditCancel: _cache[22] || (_cache[22] = function($event) {
          return $options.onCellEditCancel($event);
        }),
        onRowEditInit: _cache[23] || (_cache[23] = function($event) {
          return $options.onRowEditInit($event);
        }),
        onRowEditSave: _cache[24] || (_cache[24] = function($event) {
          return $options.onRowEditSave($event);
        }),
        onRowEditCancel: _cache[25] || (_cache[25] = function($event) {
          return $options.onRowEditCancel($event);
        }),
        editingMeta: $data.d_editingMeta,
        onEditingMetaChange: $options.onEditingMetaChange,
        unstyled: _ctx.unstyled,
        pt: _ctx.pt
      }, null, 8, ["value", "columns", "first", "dataKey", "selection", "selectionKeys", "selectionMode", "rowHover", "contextMenu", "contextMenuSelection", "rowGroupMode", "groupRowsBy", "expandableRowGroups", "rowClass", "rowStyle", "editMode", "compareSelectionBy", "scrollable", "expandedRowIcon", "collapsedRowIcon", "expandedRows", "expandedRowGroups", "editingRows", "editingRowKeys", "templates", "editButtonProps", "onRowgroupToggle", "onRowTouchend", "onRowKeydown", "onRowMousedown", "editingMeta", "onEditingMetaChange", "unstyled", "pt"])) : createCommentVNode("", true), createVNode(_component_DTTableBody, {
        ref: "bodyRef",
        value: $options.dataToRender(slotProps.rows),
        "class": normalizeClass(slotProps.styleClass),
        columns: slotProps.columns,
        empty: $options.empty,
        first: $data.d_first,
        dataKey: _ctx.dataKey,
        selection: _ctx.selection,
        selectionKeys: $data.d_selectionKeys,
        selectionMode: _ctx.selectionMode,
        rowHover: _ctx.rowHover,
        contextMenu: _ctx.contextMenu,
        contextMenuSelection: _ctx.contextMenuSelection,
        rowGroupMode: _ctx.rowGroupMode,
        groupRowsBy: _ctx.groupRowsBy,
        expandableRowGroups: _ctx.expandableRowGroups,
        rowClass: _ctx.rowClass,
        rowStyle: _ctx.rowStyle,
        editMode: _ctx.editMode,
        compareSelectionBy: _ctx.compareSelectionBy,
        scrollable: _ctx.scrollable,
        expandedRowIcon: _ctx.expandedRowIcon,
        collapsedRowIcon: _ctx.collapsedRowIcon,
        expandedRows: _ctx.expandedRows,
        expandedRowGroups: _ctx.expandedRowGroups,
        editingRows: _ctx.editingRows,
        editingRowKeys: $data.d_editingRowKeys,
        templates: _ctx.$slots,
        editButtonProps: $options.rowEditButtonProps,
        virtualScrollerContentProps: slotProps,
        isVirtualScrollerDisabled: $options.virtualScrollerDisabled,
        onRowgroupToggle: $options.toggleRowGroup,
        onRowClick: _cache[26] || (_cache[26] = function($event) {
          return $options.onRowClick($event);
        }),
        onRowDblclick: _cache[27] || (_cache[27] = function($event) {
          return $options.onRowDblClick($event);
        }),
        onRowRightclick: _cache[28] || (_cache[28] = function($event) {
          return $options.onRowRightClick($event);
        }),
        onRowTouchend: $options.onRowTouchEnd,
        onRowKeydown: function onRowKeydown($event) {
          return $options.onRowKeyDown($event, slotProps);
        },
        onRowMousedown: $options.onRowMouseDown,
        onRowDragstart: _cache[29] || (_cache[29] = function($event) {
          return $options.onRowDragStart($event);
        }),
        onRowDragover: _cache[30] || (_cache[30] = function($event) {
          return $options.onRowDragOver($event);
        }),
        onRowDragleave: _cache[31] || (_cache[31] = function($event) {
          return $options.onRowDragLeave($event);
        }),
        onRowDragend: _cache[32] || (_cache[32] = function($event) {
          return $options.onRowDragEnd($event);
        }),
        onRowDrop: _cache[33] || (_cache[33] = function($event) {
          return $options.onRowDrop($event);
        }),
        onRowToggle: _cache[34] || (_cache[34] = function($event) {
          return $options.toggleRow($event);
        }),
        onRadioChange: _cache[35] || (_cache[35] = function($event) {
          return $options.toggleRowWithRadio($event);
        }),
        onCheckboxChange: _cache[36] || (_cache[36] = function($event) {
          return $options.toggleRowWithCheckbox($event);
        }),
        onCellEditInit: _cache[37] || (_cache[37] = function($event) {
          return $options.onCellEditInit($event);
        }),
        onCellEditComplete: _cache[38] || (_cache[38] = function($event) {
          return $options.onCellEditComplete($event);
        }),
        onCellEditCancel: _cache[39] || (_cache[39] = function($event) {
          return $options.onCellEditCancel($event);
        }),
        onRowEditInit: _cache[40] || (_cache[40] = function($event) {
          return $options.onRowEditInit($event);
        }),
        onRowEditSave: _cache[41] || (_cache[41] = function($event) {
          return $options.onRowEditSave($event);
        }),
        onRowEditCancel: _cache[42] || (_cache[42] = function($event) {
          return $options.onRowEditCancel($event);
        }),
        editingMeta: $data.d_editingMeta,
        onEditingMetaChange: $options.onEditingMetaChange,
        unstyled: _ctx.unstyled,
        pt: _ctx.pt
      }, null, 8, ["value", "class", "columns", "empty", "first", "dataKey", "selection", "selectionKeys", "selectionMode", "rowHover", "contextMenu", "contextMenuSelection", "rowGroupMode", "groupRowsBy", "expandableRowGroups", "rowClass", "rowStyle", "editMode", "compareSelectionBy", "scrollable", "expandedRowIcon", "collapsedRowIcon", "expandedRows", "expandedRowGroups", "editingRows", "editingRowKeys", "templates", "editButtonProps", "virtualScrollerContentProps", "isVirtualScrollerDisabled", "onRowgroupToggle", "onRowTouchend", "onRowKeydown", "onRowMousedown", "editingMeta", "onEditingMetaChange", "unstyled", "pt"]), $options.hasSpacerStyle(slotProps.spacerStyle) ? (openBlock(), createElementBlock("tbody", mergeProps({
        key: 2,
        "class": _ctx.cx("virtualScrollerSpacer"),
        style: {
          height: "calc(".concat(slotProps.spacerStyle.height, " - ").concat(slotProps.rows.length * slotProps.itemSize, "px)")
        }
      }, _ctx.ptm("virtualScrollerSpacer")), null, 16)) : createCommentVNode("", true), createVNode(_component_DTTableFooter, {
        columnGroup: $options.footerColumnGroup,
        columns: slotProps.columns,
        pt: _ctx.pt
      }, null, 8, ["columnGroup", "columns", "pt"])], 16)];
    }),
    _: 1
  }, 16, ["items", "columns", "style", "scrollHeight", "disabled", "pt"])], 16, _hoisted_2), $options.paginatorBottom ? (openBlock(), createBlock(_component_DTPaginator, {
    key: 3,
    rows: $data.d_rows,
    first: $data.d_first,
    totalRecords: $options.totalRecordsLength,
    pageLinkSize: _ctx.pageLinkSize,
    template: _ctx.paginatorTemplate,
    rowsPerPageOptions: _ctx.rowsPerPageOptions,
    currentPageReportTemplate: _ctx.currentPageReportTemplate,
    "class": normalizeClass(_ctx.cx("pcPaginator", {
      position: "bottom"
    })),
    onPage: _cache[43] || (_cache[43] = function($event) {
      return $options.onPage($event);
    }),
    alwaysShow: _ctx.alwaysShowPaginator,
    unstyled: _ctx.unstyled,
    "data-p-bottom": true,
    pt: _ctx.ptm("pcPaginator")
  }, createSlots({
    _: 2
  }, [_ctx.$slots.paginatorcontainer ? {
    name: "container",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "paginatorcontainer", {
        first: slotProps.first,
        last: slotProps.last,
        rows: slotProps.rows,
        page: slotProps.page,
        pageCount: slotProps.pageCount,
        pageLinks: slotProps.pageLinks,
        totalRecords: slotProps.totalRecords,
        firstPageCallback: slotProps.firstPageCallback,
        lastPageCallback: slotProps.lastPageCallback,
        prevPageCallback: slotProps.prevPageCallback,
        nextPageCallback: slotProps.nextPageCallback,
        rowChangeCallback: slotProps.rowChangeCallback,
        changePageCallback: slotProps.changePageCallback
      })];
    }),
    key: "0"
  } : void 0, _ctx.$slots.paginatorstart ? {
    name: "start",
    fn: withCtx(function() {
      return [renderSlot(_ctx.$slots, "paginatorstart")];
    }),
    key: "1"
  } : void 0, _ctx.$slots.paginatorend ? {
    name: "end",
    fn: withCtx(function() {
      return [renderSlot(_ctx.$slots, "paginatorend")];
    }),
    key: "2"
  } : void 0, _ctx.$slots.paginatorfirstpagelinkicon ? {
    name: "firstpagelinkicon",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "paginatorfirstpagelinkicon", {
        "class": normalizeClass(slotProps["class"])
      })];
    }),
    key: "3"
  } : void 0, _ctx.$slots.paginatorprevpagelinkicon ? {
    name: "prevpagelinkicon",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "paginatorprevpagelinkicon", {
        "class": normalizeClass(slotProps["class"])
      })];
    }),
    key: "4"
  } : void 0, _ctx.$slots.paginatornextpagelinkicon ? {
    name: "nextpagelinkicon",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "paginatornextpagelinkicon", {
        "class": normalizeClass(slotProps["class"])
      })];
    }),
    key: "5"
  } : void 0, _ctx.$slots.paginatorlastpagelinkicon ? {
    name: "lastpagelinkicon",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "paginatorlastpagelinkicon", {
        "class": normalizeClass(slotProps["class"])
      })];
    }),
    key: "6"
  } : void 0, _ctx.$slots.paginatorjumptopagedropdownicon ? {
    name: "jumptopagedropdownicon",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "paginatorjumptopagedropdownicon", {
        "class": normalizeClass(slotProps["class"])
      })];
    }),
    key: "7"
  } : void 0, _ctx.$slots.paginatorrowsperpagedropdownicon ? {
    name: "rowsperpagedropdownicon",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "paginatorrowsperpagedropdownicon", {
        "class": normalizeClass(slotProps["class"])
      })];
    }),
    key: "8"
  } : void 0]), 1032, ["rows", "first", "totalRecords", "pageLinkSize", "template", "rowsPerPageOptions", "currentPageReportTemplate", "class", "alwaysShow", "unstyled", "pt"])) : createCommentVNode("", true), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", mergeProps({
    key: 4,
    "class": _ctx.cx("footer")
  }, _ctx.ptm("footer")), [renderSlot(_ctx.$slots, "footer")], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    ref: "resizeHelper",
    "class": _ctx.cx("columnResizeIndicator"),
    style: {
      "display": "none"
    }
  }, _ctx.ptm("columnResizeIndicator")), null, 16), _ctx.reorderableColumns ? (openBlock(), createElementBlock("span", mergeProps({
    key: 5,
    ref: "reorderIndicatorUp",
    "class": _ctx.cx("rowReorderIndicatorUp"),
    style: {
      "position": "absolute",
      "display": "none"
    }
  }, _ctx.ptm("rowReorderIndicatorUp")), [(openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.rowreorderindicatorupicon || _ctx.$slots.reorderindicatorupicon || "ArrowDownIcon")))], 16)) : createCommentVNode("", true), _ctx.reorderableColumns ? (openBlock(), createElementBlock("span", mergeProps({
    key: 6,
    ref: "reorderIndicatorDown",
    "class": _ctx.cx("rowReorderIndicatorDown"),
    style: {
      "position": "absolute",
      "display": "none"
    }
  }, _ctx.ptm("rowReorderIndicatorDown")), [(openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.rowreorderindicatordownicon || _ctx.$slots.reorderindicatordownicon || "ArrowUpIcon")))], 16)) : createCommentVNode("", true)], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-D25r9HqR.mjs.map
