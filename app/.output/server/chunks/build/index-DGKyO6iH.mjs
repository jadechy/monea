import { setAttribute, getAttribute, getIndex, find, getOuterWidth, isRTL, getOffset, addStyle, clearSelection, getNextElementSibling, getPreviousElementSibling, focus, findSingle, isClickable } from '@primeuix/utils/dom';
import { resolveFieldData, localeComparator, sort, equals } from '@primeuix/utils/object';
import { B as BaseStyle, F as FilterService } from './server.mjs';
import { g as getVNodeProp, _ as _default } from './index-UnQD5FIJ.mjs';
import { s as script$6 } from './index-C1vnj6fg.mjs';
import script$a from './index-DuISXDP8.mjs';
import { s as script$7 } from './index-f6-L4oOs.mjs';
import { style } from '@primeuix/styles/treetable';
import { mergeProps, createElementBlock, openBlock, createBlock, createCommentVNode, resolveDynamicComponent, toDisplayString, resolveComponent, createElementVNode, normalizeProps, resolveDirective, withDirectives, Fragment, normalizeClass, withCtx, createTextVNode, renderList, renderSlot, createSlots } from 'vue';
import { s as script$1$1, a as script$8, b as script$2$1 } from './index-DRDCAMoq.mjs';
import script$9 from './index-ik-SlIj1.mjs';
import { s as script$c } from './index-CgJu4NhB.mjs';
import { s as script$d } from './index-CMv313tU.mjs';
import { s as script$e } from './index--ctLNnjM.mjs';
import { s as script$b } from './index-6fx3juzz.mjs';
import script$f from './index-D5JWdyeG.mjs';
import { R as Ripple } from './index-2dA4pXcI.mjs';
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
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
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
import '@primeuix/utils';
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
import './index-BLn-pl6M.mjs';
import './index-BSFy_PfY.mjs';
import './index-CBQOMMAL.mjs';
import '@primeuix/utils/zindex';
import './index-CjtQe7dy.mjs';
import './index-C21YqD03.mjs';
import './index-C319vlSQ.mjs';
import './index-4P6kumGy.mjs';
import './index-B5Idjp61.mjs';
import './index-D45wcmtf.mjs';
import './index-HVZBZE_C.mjs';
import './index-_YLQpnfS.mjs';
import './index-rAVNvoJo.mjs';
import './index-D21vFaAL.mjs';
import './index-CXivEcTV.mjs';
import './index-DpRrGZTR.mjs';
import '@primeuix/utils/uuid';
import './index-vLeze0-z.mjs';
import './index-C22mFOlN.mjs';
import './index-D7Tr7C_Z.mjs';
import './index-DbtuAreI.mjs';

var classes = {
  root: function root(_ref) {
    var instance = _ref.instance, props = _ref.props;
    return ["p-treetable p-component", {
      "p-treetable-hoverable": props.rowHover || instance.rowSelectionMode,
      "p-treetable-resizable": props.resizableColumns,
      "p-treetable-resizable-fit": props.resizableColumns && props.columnResizeMode === "fit",
      "p-treetable-scrollable": props.scrollable,
      "p-treetable-flex-scrollable": props.scrollable && props.scrollHeight === "flex",
      "p-treetable-gridlines": props.showGridlines,
      "p-treetable-sm": props.size === "small",
      "p-treetable-lg": props.size === "large"
    }];
  },
  loading: "p-treetable-loading",
  //TODO: required?
  mask: "p-treetable-mask p-overlay-mask",
  loadingIcon: "p-treetable-loading-icon",
  header: "p-treetable-header",
  paginator: function paginator(_ref2) {
    var position = _ref2.position;
    return "p-treetable-paginator-" + position;
  },
  tableContainer: "p-treetable-table-container",
  table: function table(_ref3) {
    var props = _ref3.props;
    return ["p-treetable-table", {
      "p-treetable-scrollable-table": props.scrollable,
      "p-treetable-resizable-table": props.resizableColumns,
      "p-treetable-resizable-table-fit": props.resizableColumns && props.columnResizeMode === "fit"
    }];
  },
  thead: "p-treetable-thead",
  headerCell: function headerCell(_ref4) {
    var instance = _ref4.instance, props = _ref4.props;
    return ["p-treetable-header-cell", {
      "p-treetable-sortable-column": instance.columnProp("sortable"),
      "p-treetable-resizable-column": props.resizableColumns,
      "p-treetable-column-sorted": instance.columnProp("sortable") ? instance.isColumnSorted() : false,
      "p-treetable-frozen-column": instance.columnProp("frozen")
    }];
  },
  columnResizer: "p-treetable-column-resizer",
  columnHeaderContent: "p-treetable-column-header-content",
  columnTitle: "p-treetable-column-title",
  sortIcon: "p-treetable-sort-icon",
  pcSortBadge: "p-treetable-sort-badge",
  tbody: "p-treetable-tbody",
  row: function row(_ref5) {
    var props = _ref5.props, instance = _ref5.instance;
    return [{
      "p-treetable-row-selected": instance.selected,
      "p-treetable-contextmenu-row-selected": props.contextMenuSelection && instance.isSelectedWithContextMenu
    }];
  },
  bodyCell: function bodyCell(_ref6) {
    var instance = _ref6.instance;
    return [{
      "p-treetable-frozen-column": instance.columnProp("frozen")
    }];
  },
  bodyCellContent: function bodyCellContent(_ref7) {
    var instance = _ref7.instance;
    return ["p-treetable-body-cell-content", {
      "p-treetable-body-cell-content-expander": instance.columnProp("expander")
    }];
  },
  nodeToggleButton: "p-treetable-node-toggle-button",
  nodeToggleIcon: "p-treetable-node-toggle-icon",
  pcNodeCheckbox: "p-treetable-node-checkbox",
  emptyMessage: "p-treetable-empty-message",
  tfoot: "p-treetable-tfoot",
  footerCell: function footerCell(_ref8) {
    var instance = _ref8.instance;
    return [{
      "p-treetable-frozen-column": instance.columnProp("frozen")
    }];
  },
  footer: "p-treetable-footer",
  columnResizeIndicator: "p-treetable-column-resize-indicator"
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
var TreeTableStyle = BaseStyle.extend({
  name: "treetable",
  style,
  classes,
  inlineStyles
});
var script$5 = {
  name: "BaseTreeTable",
  "extends": script$7,
  props: {
    value: {
      type: null,
      "default": null
    },
    dataKey: {
      type: [String, Function],
      "default": "key"
    },
    expandedKeys: {
      type: null,
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
      type: String,
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
    loadingMode: {
      type: String,
      "default": "mask"
    },
    rowHover: {
      type: Boolean,
      "default": false
    },
    autoLayout: {
      type: Boolean,
      "default": false
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
    filterMode: {
      type: String,
      "default": "lenient"
    },
    filterLocale: {
      type: String,
      "default": void 0
    },
    resizableColumns: {
      type: Boolean,
      "default": false
    },
    columnResizeMode: {
      type: String,
      "default": "fit"
    },
    indentation: {
      type: Number,
      "default": 1
    },
    showGridlines: {
      type: Boolean,
      "default": false
    },
    scrollable: {
      type: Boolean,
      "default": false
    },
    scrollHeight: {
      type: String,
      "default": null
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
    }
  },
  style: TreeTableStyle,
  provide: function provide() {
    return {
      $pcTreeTable: this,
      $parentInstance: this
    };
  }
};
var script$4 = {
  name: "FooterCell",
  hostName: "TreeTable",
  "extends": script$7,
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
  data: function data() {
    return {
      styleObject: {}
    };
  },
  mounted: function mounted() {
    if (this.columnProp("frozen")) {
      this.updateStickyPosition();
    }
  },
  updated: function updated() {
    if (this.columnProp("frozen")) {
      this.updateStickyPosition();
    }
  },
  methods: {
    columnProp: function columnProp(prop) {
      return getVNodeProp(this.column, prop);
    },
    getColumnPT: function getColumnPT(key) {
      var _this$$parentInstance;
      var columnMetaData = {
        props: this.column.props,
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index: this.index,
          frozen: this.columnProp("frozen"),
          size: (_this$$parentInstance = this.$parentInstance) === null || _this$$parentInstance === void 0 ? void 0 : _this$$parentInstance.size
        }
      };
      return mergeProps(this.ptm("column.".concat(key), {
        column: columnMetaData
      }), this.ptm("column.".concat(key), columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
    },
    getColumnProp: function getColumnProp() {
      return this.column.props && this.column.props.pt ? this.column.props.pt : void 0;
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
    }
  },
  computed: {
    containerClass: function containerClass() {
      return [this.columnProp("footerClass"), this.columnProp("class"), this.cx("footerCell")];
    },
    containerStyle: function containerStyle() {
      var bodyStyle = this.columnProp("footerStyle");
      var columnStyle = this.columnProp("style");
      return this.columnProp("frozen") ? [columnStyle, bodyStyle, this.styleObject] : [columnStyle, bodyStyle];
    }
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
var _hoisted_1$4 = ["data-p-frozen-column"];
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("td", mergeProps({
    style: $options.containerStyle,
    "class": $options.containerClass,
    role: "cell"
  }, _objectSpread$5(_objectSpread$5({}, $options.getColumnPT("root")), $options.getColumnPT("footerCell")), {
    "data-p-frozen-column": $options.columnProp("frozen")
  }), [$props.column.children && $props.column.children.footer ? (openBlock(), createBlock(resolveDynamicComponent($props.column.children.footer), {
    key: 0,
    column: $props.column
  }, null, 8, ["column"])) : createCommentVNode("", true), $options.columnProp("footer") ? (openBlock(), createElementBlock("span", mergeProps({
    key: 1,
    "class": _ctx.cx("columnFooter")
  }, $options.getColumnPT("columnFooter")), toDisplayString($options.columnProp("footer")), 17)) : createCommentVNode("", true)], 16, _hoisted_1$4);
}
script$4.render = render$4;
var script$3 = {
  name: "HeaderCell",
  hostName: "TreeTable",
  "extends": script$7,
  emits: ["column-click", "column-resizestart"],
  props: {
    column: {
      type: Object,
      "default": null
    },
    resizableColumns: {
      type: Boolean,
      "default": false
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
    sortMode: {
      type: String,
      "default": "single"
    },
    index: {
      type: Number,
      "default": null
    }
  },
  data: function data2() {
    return {
      styleObject: {}
    };
  },
  mounted: function mounted2() {
    if (this.columnProp("frozen")) {
      this.updateStickyPosition();
    }
  },
  updated: function updated2() {
    if (this.columnProp("frozen")) {
      this.updateStickyPosition();
    }
  },
  methods: {
    columnProp: function columnProp2(prop) {
      return getVNodeProp(this.column, prop);
    },
    getColumnPT: function getColumnPT2(key) {
      var _this$$parentInstance;
      var columnMetaData = {
        props: this.column.props,
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index: this.index,
          sorted: this.isColumnSorted(),
          frozen: this.$parentInstance.scrollable && this.columnProp("frozen"),
          resizable: this.resizableColumns,
          scrollable: this.$parentInstance.scrollable,
          showGridlines: this.$parentInstance.showGridlines,
          size: (_this$$parentInstance = this.$parentInstance) === null || _this$$parentInstance === void 0 ? void 0 : _this$$parentInstance.size
        }
      };
      return mergeProps(this.ptm("column.".concat(key), {
        column: columnMetaData
      }), this.ptm("column.".concat(key), columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
    },
    getColumnProp: function getColumnProp2() {
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
        var filterRow = this.$el.parentElement.nextElementSibling;
        if (filterRow) {
          var index = getIndex(this.$el);
          filterRow.children[index].style["inset-inline-start"] = this.styleObject["inset-inline-start"];
          filterRow.children[index].style["inset-inline-end"] = this.styleObject["inset-inline-end"];
        }
      }
    },
    onClick: function onClick(event2) {
      this.$emit("column-click", {
        originalEvent: event2,
        column: this.column
      });
    },
    onKeyDown: function onKeyDown(event2) {
      if ((event2.code === "Enter" || event2.code === "NumpadEnter" || event2.code === "Space") && event2.currentTarget.nodeName === "TH" && getAttribute(event2.currentTarget, "data-p-sortable-column")) {
        this.$emit("column-click", {
          originalEvent: event2,
          column: this.column
        });
        event2.preventDefault();
      }
    },
    onResizeStart: function onResizeStart(event2) {
      this.$emit("column-resizestart", event2);
    },
    getMultiSortMetaIndex: function getMultiSortMetaIndex() {
      var index = -1;
      for (var i = 0; i < this.multiSortMeta.length; i++) {
        var meta = this.multiSortMeta[i];
        if (meta.field === this.columnProp("field") || meta.field === this.columnProp("sortField")) {
          index = i;
          break;
        }
      }
      return index;
    },
    isMultiSorted: function isMultiSorted() {
      return this.columnProp("sortable") && this.getMultiSortMetaIndex() > -1;
    },
    isColumnSorted: function isColumnSorted() {
      return this.sortMode === "single" ? this.sortField && (this.sortField === this.columnProp("field") || this.sortField === this.columnProp("sortField")) : this.isMultiSorted();
    }
  },
  computed: {
    containerClass: function containerClass2() {
      return [this.columnProp("headerClass"), this.columnProp("class"), this.cx("headerCell")];
    },
    containerStyle: function containerStyle2() {
      var headerStyle = this.columnProp("headerStyle");
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
      else if (sorted2 && sortOrder2 > 0) return script$8;
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
    Badge: script$9,
    SortAltIcon: script$2$1,
    SortAmountUpAltIcon: script$8,
    SortAmountDownIcon: script$1$1
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
var _hoisted_1$3 = ["tabindex", "aria-sort", "data-p-sortable-column", "data-p-resizable-column", "data-p-sorted", "data-p-frozen-column"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Badge = resolveComponent("Badge");
  return openBlock(), createElementBlock("th", mergeProps({
    "class": $options.containerClass,
    style: [$options.containerStyle],
    onClick: _cache[1] || (_cache[1] = function() {
      return $options.onClick && $options.onClick.apply($options, arguments);
    }),
    onKeydown: _cache[2] || (_cache[2] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    }),
    tabindex: $options.columnProp("sortable") ? "0" : null,
    "aria-sort": $options.ariaSort,
    role: "columnheader"
  }, _objectSpread$4(_objectSpread$4({}, $options.getColumnPT("root")), $options.getColumnPT("headerCell")), {
    "data-p-sortable-column": $options.columnProp("sortable"),
    "data-p-resizable-column": $props.resizableColumns,
    "data-p-sorted": $options.isColumnSorted(),
    "data-p-frozen-column": $options.columnProp("frozen")
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
  }, $options.getColumnPT("sortIcon")), null, 16, ["sorted", "sortOrder", "class"]))], 16)) : createCommentVNode("", true), $options.isMultiSorted() ? (openBlock(), createBlock(_component_Badge, mergeProps({
    key: 3,
    "class": _ctx.cx("pcSortBadge")
  }, $options.getColumnPT("pcSortBadge"), {
    value: $options.getMultiSortMetaIndex() + 1,
    size: "small"
  }), null, 16, ["class", "value"])) : createCommentVNode("", true)], 16)], 16, _hoisted_1$3);
}
script$3.render = render$3;
var script$2 = {
  name: "BodyCell",
  hostName: "TreeTable",
  "extends": script$7,
  emits: ["node-toggle", "checkbox-toggle"],
  props: {
    node: {
      type: Object,
      "default": null
    },
    column: {
      type: Object,
      "default": null
    },
    level: {
      type: Number,
      "default": 0
    },
    indentation: {
      type: Number,
      "default": 1
    },
    leaf: {
      type: Boolean,
      "default": false
    },
    expanded: {
      type: Boolean,
      "default": false
    },
    selectionMode: {
      type: String,
      "default": null
    },
    checked: {
      type: Boolean,
      "default": false
    },
    partialChecked: {
      type: Boolean,
      "default": false
    },
    templates: {
      type: Object,
      "default": null
    },
    index: {
      type: Number,
      "default": null
    },
    loadingMode: {
      type: String,
      "default": "mask"
    }
  },
  data: function data3() {
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
    toggle: function toggle() {
      this.$emit("node-toggle", this.node);
    },
    columnProp: function columnProp3(prop) {
      return getVNodeProp(this.column, prop);
    },
    getColumnPT: function getColumnPT3(key) {
      var _this$$parentInstance;
      var columnMetaData = {
        props: this.column.props,
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index: this.index,
          selectable: this.$parentInstance.rowHover || this.$parentInstance.rowSelectionMode,
          selected: this.$parent.selected,
          frozen: this.columnProp("frozen"),
          scrollable: this.$parentInstance.scrollable,
          showGridlines: this.$parentInstance.showGridlines,
          size: (_this$$parentInstance = this.$parentInstance) === null || _this$$parentInstance === void 0 ? void 0 : _this$$parentInstance.size,
          node: this.node
        }
      };
      return mergeProps(this.ptm("column.".concat(key), {
        column: columnMetaData
      }), this.ptm("column.".concat(key), columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
    },
    getColumnProp: function getColumnProp3() {
      return this.column.props && this.column.props.pt ? this.column.props.pt : void 0;
    },
    getColumnCheckboxPT: function getColumnCheckboxPT(key) {
      var columnMetaData = {
        props: this.column.props,
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          checked: this.checked,
          partialChecked: this.partialChecked,
          node: this.node
        }
      };
      return mergeProps(this.ptm("column.".concat(key), {
        column: columnMetaData
      }), this.ptm("column.".concat(key), columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
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
    },
    resolveFieldData: function resolveFieldData$1(rowData, field) {
      return resolveFieldData(rowData, field);
    },
    toggleCheckbox: function toggleCheckbox() {
      this.$emit("checkbox-toggle");
    }
  },
  computed: {
    containerClass: function containerClass3() {
      return [this.columnProp("bodyClass"), this.columnProp("class"), this.cx("bodyCell")];
    },
    containerStyle: function containerStyle3() {
      var bodyStyle = this.columnProp("bodyStyle");
      var columnStyle = this.columnProp("style");
      return this.columnProp("frozen") ? [columnStyle, bodyStyle, this.styleObject] : [columnStyle, bodyStyle];
    },
    togglerStyle: function togglerStyle() {
      return {
        marginLeft: this.level * this.indentation + "rem",
        visibility: this.leaf ? "hidden" : "visible"
      };
    },
    checkboxSelectionMode: function checkboxSelectionMode() {
      return this.selectionMode === "checkbox";
    }
  },
  components: {
    Checkbox: script$f,
    ChevronRightIcon: script$e,
    ChevronDownIcon: script$d,
    CheckIcon: script$c,
    MinusIcon: script$b,
    SpinnerIcon: script$6
  },
  directives: {
    ripple: Ripple
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
var _hoisted_1$2 = ["data-p-frozen-column"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  var _component_Checkbox = resolveComponent("Checkbox");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("td", mergeProps({
    style: $options.containerStyle,
    "class": $options.containerClass,
    role: "cell"
  }, _objectSpread$3(_objectSpread$3({}, $options.getColumnPT("root")), $options.getColumnPT("bodyCell")), {
    "data-p-frozen-column": $options.columnProp("frozen")
  }), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("bodyCellContent")
  }, $options.getColumnPT("bodyCellContent")), [$options.columnProp("expander") ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 0,
    type: "button",
    "class": _ctx.cx("nodeToggleButton"),
    onClick: _cache[0] || (_cache[0] = function() {
      return $options.toggle && $options.toggle.apply($options, arguments);
    }),
    style: $options.togglerStyle,
    tabindex: "-1"
  }, $options.getColumnPT("nodeToggleButton"), {
    "data-pc-group-section": "rowactionbutton"
  }), [$props.node.loading && $props.loadingMode === "icon" ? (openBlock(), createElementBlock(Fragment, {
    key: 0
  }, [$props.templates["nodetoggleicon"] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates["nodetoggleicon"]), {
    key: 0
  })) : createCommentVNode("", true), $props.templates["nodetogglericon"] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates["nodetogglericon"]), {
    key: 1
  })) : (openBlock(), createBlock(_component_SpinnerIcon, mergeProps({
    key: 2,
    spin: ""
  }, _ctx.ptm("nodetoggleicon")), null, 16))], 64)) : (openBlock(), createElementBlock(Fragment, {
    key: 1
  }, [$props.column.children && $props.column.children.rowtoggleicon ? (openBlock(), createBlock(resolveDynamicComponent($props.column.children.rowtoggleicon), {
    key: 0,
    node: $props.node,
    expanded: $props.expanded,
    "class": normalizeClass(_ctx.cx("nodeToggleIcon"))
  }, null, 8, ["node", "expanded", "class"])) : $props.templates["nodetoggleicon"] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates["nodetoggleicon"]), {
    key: 1,
    node: $props.node,
    expanded: $props.expanded,
    "class": normalizeClass(_ctx.cx("nodeToggleIcon"))
  }, null, 8, ["node", "expanded", "class"])) : $props.column.children && $props.column.children.rowtogglericon ? (openBlock(), createBlock(resolveDynamicComponent($props.column.children.rowtogglericon), {
    key: 2,
    node: $props.node,
    expanded: $props.expanded,
    "class": normalizeClass(_ctx.cx("nodeToggleIcon"))
  }, null, 8, ["node", "expanded", "class"])) : $props.expanded ? (openBlock(), createBlock(resolveDynamicComponent($props.node.expandedIcon ? "span" : "ChevronDownIcon"), mergeProps({
    key: 3,
    "class": _ctx.cx("nodeToggleIcon")
  }, $options.getColumnPT("nodeToggleIcon")), null, 16, ["class"])) : (openBlock(), createBlock(resolveDynamicComponent($props.node.collapsedIcon ? "span" : "ChevronRightIcon"), mergeProps({
    key: 4,
    "class": _ctx.cx("nodeToggleIcon")
  }, $options.getColumnPT("nodeToggleIcon")), null, 16, ["class"]))], 64))], 16)), [[_directive_ripple]]) : createCommentVNode("", true), $options.checkboxSelectionMode && $options.columnProp("expander") ? (openBlock(), createBlock(_component_Checkbox, {
    key: 1,
    modelValue: $props.checked,
    binary: true,
    "class": normalizeClass(_ctx.cx("pcNodeCheckbox")),
    disabled: $props.node.selectable === false,
    onChange: $options.toggleCheckbox,
    tabindex: -1,
    indeterminate: $props.partialChecked,
    unstyled: _ctx.unstyled,
    pt: $options.getColumnCheckboxPT("pcNodeCheckbox"),
    "data-p-partialchecked": $props.partialChecked
  }, {
    icon: withCtx(function(slotProps) {
      return [$props.templates["checkboxicon"] ? (openBlock(), createBlock(resolveDynamicComponent($props.templates["checkboxicon"]), {
        key: 0,
        checked: slotProps.checked,
        partialChecked: $props.partialChecked,
        "class": normalizeClass(slotProps["class"])
      }, null, 8, ["checked", "partialChecked", "class"])) : createCommentVNode("", true)];
    }),
    _: 1
  }, 8, ["modelValue", "class", "disabled", "onChange", "indeterminate", "unstyled", "pt", "data-p-partialchecked"])) : createCommentVNode("", true), $props.column.children && $props.column.children.body ? (openBlock(), createBlock(resolveDynamicComponent($props.column.children.body), {
    key: 2,
    node: $props.node,
    column: $props.column
  }, null, 8, ["node", "column"])) : (openBlock(), createElementBlock(Fragment, {
    key: 3
  }, [createTextVNode(toDisplayString($options.resolveFieldData($props.node.data, $options.columnProp("field"))), 1)], 64))], 16)], 16, _hoisted_1$2);
}
script$2.render = render$2;
function _typeof$2(o) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$2(o);
}
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
function _toConsumableArray$1(r) {
  return _arrayWithoutHoles$1(r) || _iterableToArray$1(r) || _unsupportedIterableToArray$1(r) || _nonIterableSpread$1();
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
  }
}
function _iterableToArray$1(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles$1(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$1(r);
}
function _arrayLikeToArray$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var script$1 = {
  name: "TreeTableRow",
  hostName: "TreeTable",
  "extends": script$7,
  emits: ["node-click", "node-toggle", "checkbox-change", "nodeClick", "nodeToggle", "checkboxChange", "row-rightclick", "rowRightclick"],
  props: {
    node: {
      type: null,
      "default": null
    },
    dataKey: {
      type: [String, Function],
      "default": "key"
    },
    parentNode: {
      type: null,
      "default": null
    },
    columns: {
      type: null,
      "default": null
    },
    expandedKeys: {
      type: null,
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
    level: {
      type: Number,
      "default": 0
    },
    indentation: {
      type: Number,
      "default": 1
    },
    tabindex: {
      type: Number,
      "default": -1
    },
    ariaSetSize: {
      type: Number,
      "default": null
    },
    ariaPosInset: {
      type: Number,
      "default": null
    },
    loadingMode: {
      type: String,
      "default": "mask"
    },
    templates: {
      type: Object,
      "default": null
    },
    contextMenu: {
      type: Boolean,
      "default": false
    },
    contextMenuSelection: {
      type: Object,
      "default": null
    }
  },
  nodeTouched: false,
  methods: {
    columnProp: function columnProp4(col, prop) {
      return getVNodeProp(col, prop);
    },
    toggle: function toggle2() {
      this.$emit("node-toggle", this.node);
    },
    onClick: function onClick2(event2) {
      if (isClickable(event2.target) || getAttribute(event2.target, "data-pc-section") === "nodetogglebutton" || getAttribute(event2.target, "data-pc-section") === "nodetoggleicon" || event2.target.tagName === "path") {
        return;
      }
      this.setTabIndexForSelectionMode(event2, this.nodeTouched);
      this.$emit("node-click", {
        originalEvent: event2,
        nodeTouched: this.nodeTouched,
        node: this.node
      });
      this.nodeTouched = false;
    },
    onRowRightClick: function onRowRightClick(event2) {
      this.$emit("row-rightclick", {
        originalEvent: event2,
        node: this.node
      });
    },
    onTouchEnd: function onTouchEnd() {
      this.nodeTouched = true;
    },
    nodeKey: function nodeKey(node) {
      return resolveFieldData(node, this.dataKey);
    },
    onKeyDown: function onKeyDown2(event2, item) {
      switch (event2.code) {
        case "ArrowDown":
          this.onArrowDownKey(event2);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event2);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(event2);
          break;
        case "ArrowRight":
          this.onArrowRightKey(event2);
          break;
        case "Home":
          this.onHomeKey(event2);
          break;
        case "End":
          this.onEndKey(event2);
          break;
        case "Enter":
        case "NumpadEnter":
        case "Space":
          if (!isClickable(event2.target)) {
            this.onEnterKey(event2, item);
          }
          break;
        case "Tab":
          this.onTabKey(event2);
          break;
      }
    },
    onArrowDownKey: function onArrowDownKey(event2) {
      var nextElementSibling = event2.currentTarget.nextElementSibling;
      nextElementSibling && this.focusRowChange(event2.currentTarget, nextElementSibling);
      event2.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event2) {
      var previousElementSibling = event2.currentTarget.previousElementSibling;
      previousElementSibling && this.focusRowChange(event2.currentTarget, previousElementSibling);
      event2.preventDefault();
    },
    onArrowRightKey: function onArrowRightKey(event2) {
      var _this = this;
      var ishiddenIcon = findSingle(event2.currentTarget, "button").style.visibility === "hidden";
      var togglerElement = findSingle(this.$refs.node, '[data-pc-section="nodetogglebutton"]');
      if (ishiddenIcon) return;
      !this.expanded && togglerElement.click();
      this.$nextTick(function() {
        _this.onArrowDownKey(event2);
      });
      event2.preventDefault();
    },
    onArrowLeftKey: function onArrowLeftKey(event2) {
      if (this.level === 0 && !this.expanded) {
        return;
      }
      var currentTarget = event2.currentTarget;
      var ishiddenIcon = findSingle(currentTarget, "button").style.visibility === "hidden";
      var togglerElement = findSingle(currentTarget, '[data-pc-section="nodetogglebutton"]');
      if (this.expanded && !ishiddenIcon) {
        togglerElement.click();
        return;
      }
      var target = this.findBeforeClickableNode(currentTarget);
      target && this.focusRowChange(currentTarget, target);
    },
    onHomeKey: function onHomeKey(event2) {
      var findFirstElement = findSingle(event2.currentTarget.parentElement, 'tr[aria-level="'.concat(this.level + 1, '"]'));
      findFirstElement && focus(findFirstElement);
      event2.preventDefault();
    },
    onEndKey: function onEndKey(event2) {
      var nodes = find(event2.currentTarget.parentElement, 'tr[aria-level="'.concat(this.level + 1, '"]'));
      var findFirstElement = nodes[nodes.length - 1];
      focus(findFirstElement);
      event2.preventDefault();
    },
    onEnterKey: function onEnterKey(event2) {
      event2.preventDefault();
      this.setTabIndexForSelectionMode(event2, this.nodeTouched);
      if (this.selectionMode === "checkbox") {
        this.toggleCheckbox();
        return;
      }
      this.$emit("node-click", {
        originalEvent: event2,
        nodeTouched: this.nodeTouched,
        node: this.node
      });
      this.nodeTouched = false;
    },
    onTabKey: function onTabKey() {
      var rows2 = _toConsumableArray$1(find(this.$refs.node.parentElement, "tr"));
      var hasSelectedRow = rows2.some(function(row2) {
        return getAttribute(row2, "data-p-selected") || row2.getAttribute("aria-checked") === "true";
      });
      rows2.forEach(function(row2) {
        row2.tabIndex = -1;
      });
      if (hasSelectedRow) {
        var selectedNodes = rows2.filter(function(node) {
          return getAttribute(node, "data-p-selected") || node.getAttribute("aria-checked") === "true";
        });
        selectedNodes[0].tabIndex = 0;
        return;
      }
      rows2[0].tabIndex = 0;
    },
    focusRowChange: function focusRowChange(firstFocusableRow, currentFocusedRow) {
      firstFocusableRow.tabIndex = "-1";
      currentFocusedRow.tabIndex = "0";
      focus(currentFocusedRow);
    },
    findBeforeClickableNode: function findBeforeClickableNode(node) {
      var prevNode = node.previousElementSibling;
      if (prevNode) {
        var prevNodeButton = prevNode.querySelector("button");
        if (prevNodeButton && prevNodeButton.style.visibility !== "hidden") {
          return prevNode;
        }
        return this.findBeforeClickableNode(prevNode);
      }
      return null;
    },
    toggleCheckbox: function toggleCheckbox2() {
      var _selectionKeys = this.selectionKeys ? _objectSpread$2({}, this.selectionKeys) : {};
      var _check = !this.checked;
      this.propagateDown(this.node, _check, _selectionKeys);
      this.$emit("checkbox-change", {
        node: this.node,
        check: _check,
        selectionKeys: _selectionKeys
      });
    },
    propagateDown: function propagateDown(node, check, selectionKeys) {
      if (check) selectionKeys[this.nodeKey(node)] = {
        checked: true,
        partialChecked: false
      };
      else delete selectionKeys[this.nodeKey(node)];
      if (node.children && node.children.length) {
        var _iterator = _createForOfIteratorHelper$1(node.children), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var child = _step.value;
            this.propagateDown(child, check, selectionKeys);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    },
    propagateUp: function propagateUp(event2) {
      var check = event2.check;
      var _selectionKeys = _objectSpread$2({}, event2.selectionKeys);
      var checkedChildCount = 0;
      var childPartialSelected = false;
      var _iterator2 = _createForOfIteratorHelper$1(this.node.children), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var child = _step2.value;
          if (_selectionKeys[this.nodeKey(child)] && _selectionKeys[this.nodeKey(child)].checked) checkedChildCount++;
          else if (_selectionKeys[this.nodeKey(child)] && _selectionKeys[this.nodeKey(child)].partialChecked) childPartialSelected = true;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (check && checkedChildCount === this.node.children.length) {
        _selectionKeys[this.nodeKey(this.node)] = {
          checked: true,
          partialChecked: false
        };
      } else {
        if (!check) {
          delete _selectionKeys[this.nodeKey(this.node)];
        }
        if (childPartialSelected || checkedChildCount > 0 && checkedChildCount !== this.node.children.length) _selectionKeys[this.nodeKey(this.node)] = {
          checked: false,
          partialChecked: true
        };
        else _selectionKeys[this.nodeKey(this.node)] = {
          checked: false,
          partialChecked: false
        };
      }
      this.$emit("checkbox-change", {
        node: event2.node,
        check: event2.check,
        selectionKeys: _selectionKeys
      });
    },
    onCheckboxChange: function onCheckboxChange(event2) {
      var check = event2.check;
      var _selectionKeys = _objectSpread$2({}, event2.selectionKeys);
      var checkedChildCount = 0;
      var childPartialSelected = false;
      var _iterator3 = _createForOfIteratorHelper$1(this.node.children), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var child = _step3.value;
          if (_selectionKeys[this.nodeKey(child)] && _selectionKeys[this.nodeKey(child)].checked) checkedChildCount++;
          else if (_selectionKeys[this.nodeKey(child)] && _selectionKeys[this.nodeKey(child)].partialChecked) childPartialSelected = true;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      if (check && checkedChildCount === this.node.children.length) {
        _selectionKeys[this.nodeKey(this.node)] = {
          checked: true,
          partialChecked: false
        };
      } else {
        if (!check) {
          delete _selectionKeys[this.nodeKey(this.node)];
        }
        if (childPartialSelected || checkedChildCount > 0 && checkedChildCount !== this.node.children.length) _selectionKeys[this.nodeKey(this.node)] = {
          checked: false,
          partialChecked: true
        };
        else _selectionKeys[this.nodeKey(this.node)] = {
          checked: false,
          partialChecked: false
        };
      }
      this.$emit("checkbox-change", {
        node: event2.node,
        check: event2.check,
        selectionKeys: _selectionKeys
      });
    },
    setTabIndexForSelectionMode: function setTabIndexForSelectionMode(event2, nodeTouched) {
      if (this.selectionMode !== null) {
        var elements = _toConsumableArray$1(find(this.$refs.node.parentElement, "tr"));
        event2.currentTarget.tabIndex = nodeTouched === false ? -1 : 0;
        if (elements.every(function(element) {
          return element.tabIndex === -1;
        })) {
          elements[0].tabIndex = 0;
        }
      }
    }
  },
  computed: {
    containerClass: function containerClass4() {
      return [this.node.styleClass, this.cx("row")];
    },
    expanded: function expanded() {
      return this.expandedKeys && this.expandedKeys[this.nodeKey(this.node)] === true;
    },
    leaf: function leaf() {
      return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
    },
    selected: function selected() {
      return this.selectionMode && this.selectionKeys ? this.selectionKeys[this.nodeKey(this.node)] === true : false;
    },
    isSelectedWithContextMenu: function isSelectedWithContextMenu() {
      if (this.node && this.contextMenuSelection) {
        return equals(this.node, this.contextMenuSelection, this.dataKey);
      }
      return false;
    },
    checked: function checked() {
      return this.selectionKeys ? this.selectionKeys[this.nodeKey(this.node)] && this.selectionKeys[this.nodeKey(this.node)].checked : false;
    },
    partialChecked: function partialChecked() {
      return this.selectionKeys ? this.selectionKeys[this.nodeKey(this.node)] && this.selectionKeys[this.nodeKey(this.node)].partialChecked : false;
    },
    getAriaSelected: function getAriaSelected() {
      return this.selectionMode === "single" || this.selectionMode === "multiple" ? this.selected : null;
    },
    ptmOptions: function ptmOptions() {
      return {
        context: {
          selectable: this.$parentInstance.rowHover || this.$parentInstance.rowSelectionMode,
          selected: this.selected,
          scrollable: this.$parentInstance.scrollable
        }
      };
    }
  },
  components: {
    TTBodyCell: script$2
  }
};
var _hoisted_1$1 = ["tabindex", "aria-expanded", "aria-level", "aria-setsize", "aria-posinset", "aria-selected", "aria-checked", "data-p-selected", "data-p-selected-contextmenu"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_TTBodyCell = resolveComponent("TTBodyCell");
  var _component_TreeTableRow = resolveComponent("TreeTableRow", true);
  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("tr", mergeProps({
    ref: "node",
    "class": $options.containerClass,
    style: $props.node.style,
    tabindex: $props.tabindex,
    role: "row",
    "aria-expanded": $props.node.children && $props.node.children.length ? $options.expanded : void 0,
    "aria-level": $props.level + 1,
    "aria-setsize": $props.ariaSetSize,
    "aria-posinset": $props.ariaPosInset,
    "aria-selected": $options.getAriaSelected,
    "aria-checked": $options.checked || void 0,
    onClick: _cache[1] || (_cache[1] = function() {
      return $options.onClick && $options.onClick.apply($options, arguments);
    }),
    onKeydown: _cache[2] || (_cache[2] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    }),
    onTouchend: _cache[3] || (_cache[3] = function() {
      return $options.onTouchEnd && $options.onTouchEnd.apply($options, arguments);
    }),
    onContextmenu: _cache[4] || (_cache[4] = function() {
      return $options.onRowRightClick && $options.onRowRightClick.apply($options, arguments);
    })
  }, _ctx.ptm("row", $options.ptmOptions), {
    "data-p-selected": $options.selected,
    "data-p-selected-contextmenu": $props.contextMenuSelection && $options.isSelectedWithContextMenu
  }), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.columns, function(col, i) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.columnProp(col, "columnKey") || $options.columnProp(col, "field") || i
    }, [!$options.columnProp(col, "hidden") ? (openBlock(), createBlock(_component_TTBodyCell, {
      key: 0,
      column: col,
      node: $props.node,
      level: $props.level,
      leaf: $options.leaf,
      indentation: $props.indentation,
      expanded: $options.expanded,
      selectionMode: $props.selectionMode,
      checked: $options.checked,
      partialChecked: $options.partialChecked,
      templates: $props.templates,
      onNodeToggle: _cache[0] || (_cache[0] = function($event) {
        return _ctx.$emit("node-toggle", $event);
      }),
      onCheckboxToggle: $options.toggleCheckbox,
      index: i,
      loadingMode: $props.loadingMode,
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["column", "node", "level", "leaf", "indentation", "expanded", "selectionMode", "checked", "partialChecked", "templates", "onCheckboxToggle", "index", "loadingMode", "unstyled", "pt"])) : createCommentVNode("", true)], 64);
  }), 128))], 16, _hoisted_1$1), $options.expanded && $props.node.children && $props.node.children.length ? (openBlock(true), createElementBlock(Fragment, {
    key: 0
  }, renderList($props.node.children, function(childNode) {
    return openBlock(), createBlock(_component_TreeTableRow, {
      key: $options.nodeKey(childNode),
      dataKey: $props.dataKey,
      columns: $props.columns,
      node: childNode,
      parentNode: $props.node,
      level: $props.level + 1,
      expandedKeys: $props.expandedKeys,
      selectionMode: $props.selectionMode,
      selectionKeys: $props.selectionKeys,
      contextMenu: $props.contextMenu,
      contextMenuSelection: $props.contextMenuSelection,
      indentation: $props.indentation,
      ariaPosInset: $props.node.children.indexOf(childNode) + 1,
      ariaSetSize: $props.node.children.length,
      templates: $props.templates,
      onNodeToggle: _cache[5] || (_cache[5] = function($event) {
        return _ctx.$emit("node-toggle", $event);
      }),
      onNodeClick: _cache[6] || (_cache[6] = function($event) {
        return _ctx.$emit("node-click", $event);
      }),
      onRowRightclick: _cache[7] || (_cache[7] = function($event) {
        return _ctx.$emit("row-rightclick", $event);
      }),
      onCheckboxChange: $options.onCheckboxChange,
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["dataKey", "columns", "node", "parentNode", "level", "expandedKeys", "selectionMode", "selectionKeys", "contextMenu", "contextMenuSelection", "indentation", "ariaPosInset", "ariaSetSize", "templates", "onCheckboxChange", "unstyled", "pt"]);
  }), 128)) : createCommentVNode("", true)], 64);
}
script$1.render = render$1;
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
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
  name: "TreeTable",
  "extends": script$5,
  inheritAttrs: false,
  emits: ["node-expand", "node-collapse", "update:expandedKeys", "update:selectionKeys", "node-select", "node-unselect", "update:first", "update:rows", "page", "update:sortField", "update:sortOrder", "update:multiSortMeta", "sort", "filter", "column-resize-end", "update:contextMenuSelection", "row-contextmenu"],
  provide: function provide2() {
    return {
      $columns: this.d_columns
    };
  },
  data: function data4() {
    return {
      d_expandedKeys: this.expandedKeys || {},
      d_first: this.first,
      d_rows: this.rows,
      d_sortField: this.sortField,
      d_sortOrder: this.sortOrder,
      d_multiSortMeta: this.multiSortMeta ? _toConsumableArray(this.multiSortMeta) : [],
      hasASelectedNode: false,
      d_columns: new _default({
        type: "Column"
      })
    };
  },
  documentColumnResizeListener: null,
  documentColumnResizeEndListener: null,
  lastResizeHelperX: null,
  resizeColumnElement: null,
  watch: {
    expandedKeys: function expandedKeys(newValue) {
      this.d_expandedKeys = newValue;
    },
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
    multiSortMeta: function multiSortMeta(newValue) {
      this.d_multiSortMeta = newValue;
    }
  },
  beforeUnmount: function beforeUnmount() {
    this.destroyStyleElement();
    this.d_columns.clear();
  },
  methods: {
    columnProp: function columnProp5(col, prop) {
      return getVNodeProp(col, prop);
    },
    ptHeaderCellOptions: function ptHeaderCellOptions(column) {
      return {
        context: {
          frozen: this.columnProp(column, "frozen")
        }
      };
    },
    onNodeToggle: function onNodeToggle(node) {
      var key = this.nodeKey(node);
      if (this.d_expandedKeys[key]) {
        delete this.d_expandedKeys[key];
        this.$emit("node-collapse", node);
      } else {
        this.d_expandedKeys[key] = true;
        this.$emit("node-expand", node);
      }
      this.d_expandedKeys = _objectSpread$1({}, this.d_expandedKeys);
      this.$emit("update:expandedKeys", this.d_expandedKeys);
    },
    onNodeClick: function onNodeClick(event2) {
      if (this.rowSelectionMode && event2.node.selectable !== false) {
        var metaSelection = event2.nodeTouched ? false : this.metaKeySelection;
        var _selectionKeys = metaSelection ? this.handleSelectionWithMetaKey(event2) : this.handleSelectionWithoutMetaKey(event2);
        this.$emit("update:selectionKeys", _selectionKeys);
      }
    },
    nodeKey: function nodeKey2(node) {
      return resolveFieldData(node, this.dataKey);
    },
    handleSelectionWithMetaKey: function handleSelectionWithMetaKey(event2) {
      var originalEvent = event2.originalEvent;
      var node = event2.node;
      var nodeKey3 = this.nodeKey(node);
      var metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
      var selected2 = this.isNodeSelected(node);
      var _selectionKeys;
      if (selected2 && metaKey) {
        if (this.isSingleSelectionMode()) {
          _selectionKeys = {};
        } else {
          _selectionKeys = _objectSpread$1({}, this.selectionKeys);
          delete _selectionKeys[nodeKey3];
        }
        this.$emit("node-unselect", node);
      } else {
        if (this.isSingleSelectionMode()) {
          _selectionKeys = {};
        } else if (this.isMultipleSelectionMode()) {
          _selectionKeys = !metaKey ? {} : this.selectionKeys ? _objectSpread$1({}, this.selectionKeys) : {};
        }
        _selectionKeys[nodeKey3] = true;
        this.$emit("node-select", node);
      }
      return _selectionKeys;
    },
    handleSelectionWithoutMetaKey: function handleSelectionWithoutMetaKey(event2) {
      var node = event2.node;
      var nodeKey3 = this.nodeKey(node);
      var selected2 = this.isNodeSelected(node);
      var _selectionKeys;
      if (this.isSingleSelectionMode()) {
        if (selected2) {
          _selectionKeys = {};
          this.$emit("node-unselect", node);
        } else {
          _selectionKeys = {};
          _selectionKeys[nodeKey3] = true;
          this.$emit("node-select", node);
        }
      } else {
        if (selected2) {
          _selectionKeys = _objectSpread$1({}, this.selectionKeys);
          delete _selectionKeys[nodeKey3];
          this.$emit("node-unselect", node);
        } else {
          _selectionKeys = this.selectionKeys ? _objectSpread$1({}, this.selectionKeys) : {};
          _selectionKeys[nodeKey3] = true;
          this.$emit("node-select", node);
        }
      }
      return _selectionKeys;
    },
    onCheckboxChange: function onCheckboxChange2(event2) {
      this.$emit("update:selectionKeys", event2.selectionKeys);
      if (event2.check) this.$emit("node-select", event2.node);
      else this.$emit("node-unselect", event2.node);
    },
    onRowRightClick: function onRowRightClick2(event2) {
      if (this.contextMenu) {
        clearSelection();
        event2.originalEvent.target.focus();
      }
      this.$emit("update:contextMenuSelection", event2.node);
      this.$emit("row-contextmenu", event2);
    },
    isSingleSelectionMode: function isSingleSelectionMode() {
      return this.selectionMode === "single";
    },
    isMultipleSelectionMode: function isMultipleSelectionMode() {
      return this.selectionMode === "multiple";
    },
    onPage: function onPage(event2) {
      this.d_first = event2.first;
      this.d_rows = event2.rows;
      var pageEvent = this.createLazyLoadEvent(event2);
      pageEvent.pageCount = event2.pageCount;
      pageEvent.page = event2.page;
      this.d_expandedKeys = {};
      this.$emit("update:expandedKeys", this.d_expandedKeys);
      this.$emit("update:first", this.d_first);
      this.$emit("update:rows", this.d_rows);
      this.$emit("page", pageEvent);
    },
    resetPage: function resetPage() {
      this.d_first = 0;
      this.$emit("update:first", this.d_first);
    },
    getFilterColumnHeaderClass: function getFilterColumnHeaderClass(column) {
      return [this.cx("headerCell", {
        column
      }), this.columnProp(column, "filterHeaderClass")];
    },
    onColumnHeaderClick: function onColumnHeaderClick(e) {
      var event2 = e.originalEvent;
      var column = e.column;
      if (this.columnProp(column, "sortable")) {
        var targetNode = event2.target;
        var columnField = this.columnProp(column, "sortField") || this.columnProp(column, "field");
        if (getAttribute(targetNode, "data-p-sortable-column") === true || getAttribute(targetNode, "data-pc-section") === "columntitle" || getAttribute(targetNode, "data-pc-section") === "columnheadercontent" || getAttribute(targetNode, "data-pc-section") === "sorticon" || getAttribute(targetNode.parentElement, "data-pc-section") === "sorticon" || getAttribute(targetNode.parentElement.parentElement, "data-pc-section") === "sorticon" || targetNode.closest('[data-p-sortable-column="true"]')) {
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
            var metaKey = event2.metaKey || event2.ctrlKey;
            if (!metaKey) {
              this.d_multiSortMeta = this.d_multiSortMeta.filter(function(meta) {
                return meta.field === columnField;
              });
            }
            this.addMultiSortField(columnField);
            this.$emit("update:multiSortMeta", this.d_multiSortMeta);
          }
          this.$emit("sort", this.createLazyLoadEvent(event2));
        }
      }
    },
    addMultiSortField: function addMultiSortField(field) {
      var index = this.d_multiSortMeta.findIndex(function(meta) {
        return meta.field === field;
      });
      if (index >= 0) {
        if (this.removableSort && this.d_multiSortMeta[index].order * -1 === this.defaultSortOrder) this.d_multiSortMeta.splice(index, 1);
        else this.d_multiSortMeta[index] = {
          field,
          order: this.d_multiSortMeta[index].order * -1
        };
      } else {
        this.d_multiSortMeta.push({
          field,
          order: this.defaultSortOrder
        });
      }
      this.d_multiSortMeta = _toConsumableArray(this.d_multiSortMeta);
    },
    sortSingle: function sortSingle(nodes) {
      return this.sortNodesSingle(nodes);
    },
    sortNodesSingle: function sortNodesSingle(nodes) {
      var _this = this;
      var _nodes = _toConsumableArray(nodes);
      var comparer = localeComparator();
      _nodes.sort(function(node1, node2) {
        var value1 = resolveFieldData(node1.data, _this.d_sortField);
        var value2 = resolveFieldData(node2.data, _this.d_sortField);
        return sort(value1, value2, _this.d_sortOrder, comparer);
      });
      return _nodes;
    },
    sortMultiple: function sortMultiple(nodes) {
      return this.sortNodesMultiple(nodes);
    },
    sortNodesMultiple: function sortNodesMultiple(nodes) {
      var _this2 = this;
      var _nodes = _toConsumableArray(nodes);
      _nodes.sort(function(node1, node2) {
        return _this2.multisortField(node1, node2, 0);
      });
      return _nodes;
    },
    multisortField: function multisortField(node1, node2, index) {
      var value1 = resolveFieldData(node1.data, this.d_multiSortMeta[index].field);
      var value2 = resolveFieldData(node2.data, this.d_multiSortMeta[index].field);
      var comparer = localeComparator();
      if (value1 === value2) {
        return this.d_multiSortMeta.length - 1 > index ? this.multisortField(node1, node2, index + 1) : 0;
      }
      return sort(value1, value2, this.d_multiSortMeta[index].order, comparer);
    },
    filter: function filter(value) {
      var filteredNodes = [];
      var strict = this.filterMode === "strict";
      var _iterator = _createForOfIteratorHelper(value), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var node = _step.value;
          var copyNode = _objectSpread$1({}, node);
          var localMatch = true;
          var globalMatch = false;
          for (var j = 0; j < this.columns.length; j++) {
            var col = this.columns[j];
            var filterField = this.columnProp(col, "filterField") || this.columnProp(col, "field");
            if (Object.prototype.hasOwnProperty.call(this.filters, filterField)) {
              var filterMatchMode = this.columnProp(col, "filterMatchMode") || "startsWith";
              var filterValue = this.filters[filterField];
              var filterConstraint = FilterService.filters[filterMatchMode];
              var paramsWithoutNode = {
                filterField,
                filterValue,
                filterConstraint,
                strict
              };
              if (strict && !(this.findFilteredNodes(copyNode, paramsWithoutNode) || this.isFilterMatched(copyNode, paramsWithoutNode)) || !strict && !(this.isFilterMatched(copyNode, paramsWithoutNode) || this.findFilteredNodes(copyNode, paramsWithoutNode))) {
                localMatch = false;
              }
              if (!localMatch) {
                break;
              }
            }
            if (this.hasGlobalFilter() && !globalMatch) {
              var copyNodeForGlobal = _objectSpread$1({}, copyNode);
              var _filterValue = this.filters["global"];
              var _filterConstraint = FilterService.filters["contains"];
              var globalFilterParamsWithoutNode = {
                filterField,
                filterValue: _filterValue,
                filterConstraint: _filterConstraint,
                strict
              };
              if (strict && (this.findFilteredNodes(copyNodeForGlobal, globalFilterParamsWithoutNode) || this.isFilterMatched(copyNodeForGlobal, globalFilterParamsWithoutNode)) || !strict && (this.isFilterMatched(copyNodeForGlobal, globalFilterParamsWithoutNode) || this.findFilteredNodes(copyNodeForGlobal, globalFilterParamsWithoutNode))) {
                globalMatch = true;
                copyNode = copyNodeForGlobal;
              }
            }
          }
          var matches = localMatch;
          if (this.hasGlobalFilter()) {
            matches = localMatch && globalMatch;
          }
          if (matches) {
            filteredNodes.push(copyNode);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var filterEvent = this.createLazyLoadEvent(event);
      filterEvent.filteredValue = filteredNodes;
      this.$emit("filter", filterEvent);
      return filteredNodes;
    },
    findFilteredNodes: function findFilteredNodes(node, paramsWithoutNode) {
      if (node) {
        var matched = false;
        if (node.children) {
          var childNodes = _toConsumableArray(node.children);
          node.children = [];
          var _iterator2 = _createForOfIteratorHelper(childNodes), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var childNode = _step2.value;
              var copyChildNode = _objectSpread$1({}, childNode);
              if (this.isFilterMatched(copyChildNode, paramsWithoutNode)) {
                matched = true;
                node.children.push(copyChildNode);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        if (matched) {
          return true;
        }
      }
    },
    isFilterMatched: function isFilterMatched(node, _ref) {
      var filterField = _ref.filterField, filterValue = _ref.filterValue, filterConstraint = _ref.filterConstraint, strict = _ref.strict;
      var matched = false;
      var dataFieldValue = resolveFieldData(node.data, filterField);
      if (filterConstraint(dataFieldValue, filterValue, this.filterLocale)) {
        matched = true;
      }
      if (!matched || strict && !this.isNodeLeaf(node)) {
        matched = this.findFilteredNodes(node, {
          filterField,
          filterValue,
          filterConstraint,
          strict
        }) || matched;
      }
      return matched;
    },
    isNodeSelected: function isNodeSelected(node) {
      return this.selectionMode && this.selectionKeys ? this.selectionKeys[this.nodeKey(node)] === true : false;
    },
    isNodeLeaf: function isNodeLeaf(node) {
      return node.leaf === false ? false : !(node.children && node.children.length);
    },
    createLazyLoadEvent: function createLazyLoadEvent(event2) {
      var _this3 = this;
      var filterMatchModes;
      if (this.hasFilters()) {
        filterMatchModes = {};
        this.columns.forEach(function(col) {
          if (_this3.columnProp(col, "field")) {
            filterMatchModes[col.props.field] = _this3.columnProp(col, "filterMatchMode");
          }
        });
      }
      return {
        originalEvent: event2,
        first: this.d_first,
        rows: this.d_rows,
        sortField: this.d_sortField,
        sortOrder: this.d_sortOrder,
        multiSortMeta: this.d_multiSortMeta,
        filters: this.filters,
        filterMatchModes
      };
    },
    onColumnResizeStart: function onColumnResizeStart(event2) {
      var containerLeft = getOffset(this.$el).left;
      this.resizeColumnElement = event2.target.parentElement;
      this.columnResizing = true;
      this.lastResizeHelperX = event2.pageX - containerLeft + this.$el.scrollLeft;
      this.bindColumnResizeEvents();
    },
    onColumnResize: function onColumnResize(event2) {
      var containerLeft = getOffset(this.$el).left;
      this.$el.setAttribute("data-p-unselectable-text", "true");
      !this.isUnstyled && addStyle(this.$el, {
        "user-select": "none"
      });
      this.$refs.resizeHelper.style.height = this.$el.offsetHeight + "px";
      this.$refs.resizeHelper.style.top = "0px";
      this.$refs.resizeHelper.style.left = event2.pageX - containerLeft + this.$el.scrollLeft + "px";
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
      var selector = '[data-pc-name="treetable"]['.concat(this.$attrSelector, '] > [data-pc-section="tablecontainer"] > table[data-pc-section="table"]');
      widths.forEach(function(width, index) {
        var colWidth = index === colIndex ? newColumnWidth : nextColumnWidth && index === colIndex + 1 ? nextColumnWidth : width;
        var style2 = "width: ".concat(colWidth, "px !important; max-width: ").concat(colWidth, "px !important");
        innerHTML += "\n                    ".concat(selector, ' > thead[data-pc-section="thead"] > tr > th:nth-child(').concat(index + 1, "),\n                    ").concat(selector, ' > tbody[data-pc-section="tbody"] > tr > td:nth-child(').concat(index + 1, "),\n                    ").concat(selector, ' > tfoot[data-pc-section="tfoot"] > tr > td:nth-child(').concat(index + 1, ") {\n                        ").concat(style2, "\n                    }\n                ");
      });
      this.styleElement.innerHTML = innerHTML;
    },
    bindColumnResizeEvents: function bindColumnResizeEvents() {
      var _this4 = this;
      if (!this.documentColumnResizeListener) {
        this.documentColumnResizeListener = (void 0).addEventListener("mousemove", function(event2) {
          if (_this4.columnResizing) {
            _this4.onColumnResize(event2);
          }
        });
      }
      if (!this.documentColumnResizeEndListener) {
        this.documentColumnResizeEndListener = (void 0).addEventListener("mouseup", function() {
          if (_this4.columnResizing) {
            _this4.columnResizing = false;
            _this4.onColumnResizeEnd();
          }
        });
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
    onColumnKeyDown: function onColumnKeyDown(event2, col) {
      if ((event2.code === "Enter" || event2.code === "NumpadEnter") && event2.currentTarget.nodeName === "TH" && getAttribute(event2.currentTarget, "data-p-sortable-column")) {
        this.onColumnHeaderClick(event2, col);
      }
    },
    hasColumnFilter: function hasColumnFilter() {
      if (this.columns) {
        var _iterator3 = _createForOfIteratorHelper(this.columns), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var col = _step3.value;
            if (col.children && col.children.filter) {
              return true;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return false;
    },
    hasFilters: function hasFilters() {
      return this.filters && Object.keys(this.filters).length > 0 && this.filters.constructor === Object;
    },
    hasGlobalFilter: function hasGlobalFilter() {
      return this.filters && Object.prototype.hasOwnProperty.call(this.filters, "global");
    },
    getItemLabel: function getItemLabel(node) {
      return node.data.name;
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
    setTabindex: function setTabindex(node, index) {
      if (this.isNodeSelected(node)) {
        this.hasASelectedNode = true;
        return 0;
      }
      if (this.selectionMode) {
        if (!this.isNodeSelected(node) && index === 0 && !this.hasASelectedNode) return 0;
      } else if (!this.selectionMode && index === 0) {
        return 0;
      }
      return -1;
    }
  },
  computed: {
    columns: function columns() {
      return this.d_columns.get(this);
    },
    processedData: function processedData() {
      if (this.lazy) {
        return this.value;
      } else {
        if (this.value && this.value.length) {
          var data5 = this.value;
          if (this.sorted) {
            if (this.sortMode === "single") data5 = this.sortSingle(data5);
            else if (this.sortMode === "multiple") data5 = this.sortMultiple(data5);
          }
          if (this.hasFilters()) {
            data5 = this.filter(data5);
          }
          return data5;
        } else {
          return null;
        }
      }
    },
    dataToRender: function dataToRender() {
      var data5 = this.processedData;
      if (this.paginator) {
        var first2 = this.lazy ? 0 : this.d_first;
        return data5.slice(first2, first2 + this.d_rows);
      } else {
        return data5;
      }
    },
    empty: function empty() {
      var data5 = this.processedData;
      return !data5 || data5.length === 0;
    },
    sorted: function sorted() {
      return this.d_sortField || this.d_multiSortMeta && this.d_multiSortMeta.length > 0;
    },
    hasFooter: function hasFooter() {
      var hasFooter2 = false;
      var _iterator4 = _createForOfIteratorHelper(this.columns), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var col = _step4.value;
          if (this.columnProp(col, "footer") || col.children && col.children.footer) {
            hasFooter2 = true;
            break;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return hasFooter2;
    },
    paginatorTop: function paginatorTop() {
      return this.paginator && (this.paginatorPosition !== "bottom" || this.paginatorPosition === "both");
    },
    paginatorBottom: function paginatorBottom() {
      return this.paginator && (this.paginatorPosition !== "top" || this.paginatorPosition === "both");
    },
    singleSelectionMode: function singleSelectionMode() {
      return this.selectionMode && this.selectionMode === "single";
    },
    multipleSelectionMode: function multipleSelectionMode() {
      return this.selectionMode && this.selectionMode === "multiple";
    },
    rowSelectionMode: function rowSelectionMode() {
      return this.singleSelectionMode || this.multipleSelectionMode;
    },
    totalRecordsLength: function totalRecordsLength() {
      if (this.lazy) {
        return this.totalRecords;
      } else {
        var data5 = this.processedData;
        return data5 ? data5.length : 0;
      }
    }
  },
  components: {
    TTRow: script$1,
    TTPaginator: script$a,
    TTHeaderCell: script$3,
    TTFooterCell: script$4,
    SpinnerIcon: script$6
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
var _hoisted_1 = ["colspan"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_TTPaginator = resolveComponent("TTPaginator");
  var _component_TTHeaderCell = resolveComponent("TTHeaderCell");
  var _component_TTRow = resolveComponent("TTRow");
  var _component_TTFooterCell = resolveComponent("TTFooterCell");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    "data-scrollselectors": ".p-treetable-scrollable-body"
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default"), _ctx.loading && _ctx.loadingMode === "mask" ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("loading")
  }, _ctx.ptm("loading")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("mask")
  }, _ctx.ptm("mask")), [renderSlot(_ctx.$slots, "loadingicon", {
    "class": normalizeClass(_ctx.cx("loadingIcon"))
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.loadingIcon ? "span" : "SpinnerIcon"), mergeProps({
      spin: "",
      "class": [_ctx.cx("loadingIcon"), _ctx.loadingIcon]
    }, _ctx.ptm("loadingIcon")), null, 16, ["class"]))];
  })], 16)], 16)) : createCommentVNode("", true), _ctx.$slots.header ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("header")
  }, _ctx.ptm("header")), [renderSlot(_ctx.$slots, "header")], 16)) : createCommentVNode("", true), $options.paginatorTop ? (openBlock(), createBlock(_component_TTPaginator, {
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
        totalRecords: slotProps.totalRecords,
        firstPageCallback: slotProps.firstPageCallback,
        lastPageCallback: slotProps.lastPageCallback,
        prevPageCallback: slotProps.prevPageCallback,
        nextPageCallback: slotProps.nextPageCallback,
        rowChangeCallback: slotProps.rowChangeCallback
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
      maxHeight: _ctx.scrollHeight
    }]
  }, _ctx.ptm("tableContainer")), [createElementVNode("table", mergeProps({
    ref: "table",
    role: "treegrid",
    "class": [_ctx.cx("table"), _ctx.tableClass],
    style: _ctx.tableStyle
  }, _objectSpread(_objectSpread({}, _ctx.tableProps), _ctx.ptm("table"))), [createElementVNode("thead", mergeProps({
    "class": _ctx.cx("thead"),
    style: _ctx.sx("thead"),
    role: "rowgroup"
  }, _ctx.ptm("thead")), [createElementVNode("tr", mergeProps({
    role: "row"
  }, _ctx.ptm("headerRow")), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.columns, function(col, i) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.columnProp(col, "columnKey") || $options.columnProp(col, "field") || i
    }, [!$options.columnProp(col, "hidden") ? (openBlock(), createBlock(_component_TTHeaderCell, {
      key: 0,
      column: col,
      resizableColumns: _ctx.resizableColumns,
      sortField: $data.d_sortField,
      sortOrder: $data.d_sortOrder,
      multiSortMeta: $data.d_multiSortMeta,
      sortMode: _ctx.sortMode,
      onColumnClick: _cache[1] || (_cache[1] = function($event) {
        return $options.onColumnHeaderClick($event);
      }),
      onColumnResizestart: _cache[2] || (_cache[2] = function($event) {
        return $options.onColumnResizeStart($event);
      }),
      index: i,
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["column", "resizableColumns", "sortField", "sortOrder", "multiSortMeta", "sortMode", "index", "unstyled", "pt"])) : createCommentVNode("", true)], 64);
  }), 128))], 16), $options.hasColumnFilter() ? (openBlock(), createElementBlock("tr", normalizeProps(mergeProps({
    key: 0
  }, _ctx.ptm("headerRow"))), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.columns, function(col, i) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.columnProp(col, "columnKey") || $options.columnProp(col, "field") || i
    }, [!$options.columnProp(col, "hidden") ? (openBlock(), createElementBlock("th", mergeProps({
      key: 0,
      "class": $options.getFilterColumnHeaderClass(col),
      style: [$options.columnProp(col, "style"), $options.columnProp(col, "filterHeaderStyle")]
    }, {
      ref_for: true
    }, _ctx.ptm("headerCell", $options.ptHeaderCellOptions(col))), [col.children && col.children.filter ? (openBlock(), createBlock(resolveDynamicComponent(col.children.filter), {
      key: 0,
      column: col,
      index: i
    }, null, 8, ["column", "index"])) : createCommentVNode("", true)], 16)) : createCommentVNode("", true)], 64);
  }), 128))], 16)) : createCommentVNode("", true)], 16), createElementVNode("tbody", mergeProps({
    "class": _ctx.cx("tbody"),
    role: "rowgroup"
  }, _ctx.ptm("tbody")), [!$options.empty ? (openBlock(true), createElementBlock(Fragment, {
    key: 0
  }, renderList($options.dataToRender, function(node, index) {
    return openBlock(), createBlock(_component_TTRow, {
      key: $options.nodeKey(node),
      dataKey: _ctx.dataKey,
      columns: $options.columns,
      node,
      level: 0,
      expandedKeys: $data.d_expandedKeys,
      indentation: _ctx.indentation,
      selectionMode: _ctx.selectionMode,
      selectionKeys: _ctx.selectionKeys,
      ariaSetSize: $options.dataToRender.length,
      ariaPosInset: index + 1,
      tabindex: $options.setTabindex(node, index),
      loadingMode: _ctx.loadingMode,
      contextMenu: _ctx.contextMenu,
      contextMenuSelection: _ctx.contextMenuSelection,
      templates: _ctx.$slots,
      onNodeToggle: $options.onNodeToggle,
      onNodeClick: $options.onNodeClick,
      onCheckboxChange: $options.onCheckboxChange,
      onRowRightclick: _cache[3] || (_cache[3] = function($event) {
        return $options.onRowRightClick($event);
      }),
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["dataKey", "columns", "node", "expandedKeys", "indentation", "selectionMode", "selectionKeys", "ariaSetSize", "ariaPosInset", "tabindex", "loadingMode", "contextMenu", "contextMenuSelection", "templates", "onNodeToggle", "onNodeClick", "onCheckboxChange", "unstyled", "pt"]);
  }), 128)) : (openBlock(), createElementBlock("tr", mergeProps({
    key: 1,
    "class": _ctx.cx("emptyMessage")
  }, _ctx.ptm("emptyMessage")), [createElementVNode("td", mergeProps({
    colspan: $options.columns.length
  }, _ctx.ptm("emptyMessageCell")), [renderSlot(_ctx.$slots, "empty")], 16, _hoisted_1)], 16))], 16), $options.hasFooter ? (openBlock(), createElementBlock("tfoot", mergeProps({
    key: 0,
    "class": _ctx.cx("tfoot"),
    style: _ctx.sx("tfoot"),
    role: "rowgroup"
  }, _ctx.ptm("tfoot")), [createElementVNode("tr", mergeProps({
    role: "row"
  }, _ctx.ptm("footerRow")), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.columns, function(col, i) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.columnProp(col, "columnKey") || $options.columnProp(col, "field") || i
    }, [!$options.columnProp(col, "hidden") ? (openBlock(), createBlock(_component_TTFooterCell, {
      key: 0,
      column: col,
      index: i,
      unstyled: _ctx.unstyled,
      pt: _ctx.pt
    }, null, 8, ["column", "index", "unstyled", "pt"])) : createCommentVNode("", true)], 64);
  }), 128))], 16)], 16)) : createCommentVNode("", true)], 16)], 16), $options.paginatorBottom ? (openBlock(), createBlock(_component_TTPaginator, {
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
    onPage: _cache[4] || (_cache[4] = function($event) {
      return $options.onPage($event);
    }),
    alwaysShow: _ctx.alwaysShowPaginator,
    unstyled: _ctx.unstyled,
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
        totalRecords: slotProps.totalRecords,
        firstPageCallback: slotProps.firstPageCallback,
        lastPageCallback: slotProps.lastPageCallback,
        prevPageCallback: slotProps.prevPageCallback,
        nextPageCallback: slotProps.nextPageCallback,
        rowChangeCallback: slotProps.rowChangeCallback
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
  }, _ctx.ptm("columnResizeIndicator")), null, 16)], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-DGKyO6iH.mjs.map
