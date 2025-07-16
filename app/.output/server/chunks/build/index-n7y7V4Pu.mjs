import { s as script$5 } from './index-f6-L4oOs.mjs';
import { style } from '@primeuix/styles/organizationchart';
import { B as BaseStyle } from './server.mjs';
import { isAttributeEquals } from '@primeuix/utils/dom';
import { s as script$4 } from './index-CMv313tU.mjs';
import { s as script$3 } from './index-B8dwdDfW.mjs';
import { resolveComponent, createElementBlock, openBlock, mergeProps, createElementVNode, normalizeProps, guardReactiveProps, createCommentVNode, createBlock, resolveDynamicComponent, Fragment, renderList, createVNode } from 'vue';
import '@primeuix/styled';
import '@primeuix/utils/object';
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

var classes = {
  root: "p-organizationchart p-component",
  table: "p-organizationchart-table",
  node: function node(_ref) {
    var instance = _ref.instance;
    return ["p-organizationchart-node", {
      "p-organizationchart-node-selectable": instance.selectable,
      "p-organizationchart-node-selected": instance.selected
    }];
  },
  nodeToggleButton: function nodeToggleButton(_ref2) {
    var instance = _ref2.instance;
    return ["p-organizationchart-node-toggle-button", {
      "p-disabled": !instance.selectable
    }];
  },
  nodeToggleButtonIcon: "p-organizationchart-node-toggle-button-icon",
  connectors: "p-organizationchart-connectors",
  connectorDown: "p-organizationchart-connector-down",
  connectorLeft: function connectorLeft(_ref3) {
    var index = _ref3.index;
    return ["p-organizationchart-connector-left", {
      "p-organizationchart-connector-top": !(index === 0)
    }];
  },
  connectorRight: function connectorRight(_ref4) {
    var props = _ref4.props, index = _ref4.index;
    return ["p-organizationchart-connector-right", {
      "p-organizationchart-connector-top": !(index === props.node.children.length - 1)
    }];
  },
  nodeChildren: "p-organizationchart-node-children"
};
var OrganizationChartStyle = BaseStyle.extend({
  name: "organizationchart",
  style,
  classes
});
var script$2 = {
  name: "BaseOrganizationChart",
  "extends": script$5,
  props: {
    value: {
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
    collapsible: {
      type: Boolean,
      "default": false
    },
    collapsedKeys: {
      type: null,
      "default": null
    }
  },
  style: OrganizationChartStyle,
  provide: function provide() {
    return {
      $pcOrganizationChart: this,
      $parentInstance: this
    };
  }
};
var script$1 = {
  name: "OrganizationChartNode",
  hostName: "OrganizationChart",
  "extends": script$5,
  emits: ["node-click", "node-toggle"],
  props: {
    node: {
      type: null,
      "default": null
    },
    templates: {
      type: null,
      "default": null
    },
    collapsible: {
      type: Boolean,
      "default": false
    },
    collapsedKeys: {
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
    }
  },
  methods: {
    getPTOptions: function getPTOptions(key) {
      return this.ptm(key, {
        context: {
          expanded: this.expanded,
          selectable: this.selectable,
          selected: this.selected,
          toggleable: this.toggleable,
          active: this.selected
        }
      });
    },
    getNodeOptions: function getNodeOptions(lineTop, key) {
      return this.ptm(key, {
        context: {
          lineTop
        }
      });
    },
    onNodeClick: function onNodeClick(event) {
      if (isAttributeEquals(event.target, "data-pc-section", "nodetogglebutton") || isAttributeEquals(event.target, "data-pc-section", "nodetogglebuttonicon")) {
        return;
      }
      if (this.selectionMode) {
        this.$emit("node-click", this.node);
      }
    },
    onChildNodeClick: function onChildNodeClick(node2) {
      this.$emit("node-click", node2);
    },
    toggleNode: function toggleNode() {
      this.$emit("node-toggle", this.node);
    },
    onChildNodeToggle: function onChildNodeToggle(node2) {
      this.$emit("node-toggle", node2);
    },
    onKeydown: function onKeydown(event) {
      if (event.code === "Enter" || event.code === "NumpadEnter" || event.code === "Space") {
        this.toggleNode();
        event.preventDefault();
      }
    }
  },
  computed: {
    leaf: function leaf() {
      return this.node.leaf === false ? false : !(this.node.children && this.node.children.length);
    },
    colspan: function colspan() {
      return this.node.children && this.node.children.length ? this.node.children.length * 2 : null;
    },
    childStyle: function childStyle() {
      return {
        visibility: !this.leaf && this.expanded ? "inherit" : "hidden"
      };
    },
    expanded: function expanded() {
      return this.collapsedKeys[this.node.key] === void 0;
    },
    selectable: function selectable() {
      return this.selectionMode && this.node.selectable !== false;
    },
    selected: function selected() {
      return this.selectable && this.selectionKeys && this.selectionKeys[this.node.key] === true;
    },
    toggleable: function toggleable() {
      return this.collapsible && this.node.collapsible !== false && !this.leaf;
    }
  },
  components: {
    ChevronDownIcon: script$4,
    ChevronUpIcon: script$3
  }
};
var _hoisted_1 = ["colspan"];
var _hoisted_2 = ["colspan"];
var _hoisted_3 = ["colspan"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_OrganizationChartNode = resolveComponent("OrganizationChartNode", true);
  return openBlock(), createElementBlock("table", mergeProps({
    "class": _ctx.cx("table")
  }, _ctx.ptm("table")), [createElementVNode("tbody", normalizeProps(guardReactiveProps(_ctx.ptm("body"))), [$props.node ? (openBlock(), createElementBlock("tr", normalizeProps(mergeProps({
    key: 0
  }, _ctx.ptm("row"))), [createElementVNode("td", mergeProps({
    colspan: $options.colspan
  }, _ctx.ptm("cell")), [createElementVNode("div", mergeProps({
    "class": [_ctx.cx("node"), $props.node.styleClass],
    onClick: _cache[2] || (_cache[2] = function() {
      return $options.onNodeClick && $options.onNodeClick.apply($options, arguments);
    })
  }, $options.getPTOptions("node")), [(openBlock(), createBlock(resolveDynamicComponent($props.templates[$props.node.type] || $props.templates["default"]), {
    node: $props.node
  }, null, 8, ["node"])), $options.toggleable ? (openBlock(), createElementBlock("a", mergeProps({
    key: 0,
    tabindex: "0",
    "class": _ctx.cx("nodeToggleButton"),
    onClick: _cache[0] || (_cache[0] = function() {
      return $options.toggleNode && $options.toggleNode.apply($options, arguments);
    }),
    onKeydown: _cache[1] || (_cache[1] = function() {
      return $options.onKeydown && $options.onKeydown.apply($options, arguments);
    })
  }, $options.getPTOptions("nodeToggleButton")), [$props.templates.toggleicon || $props.templates.togglericon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.toggleicon || $props.templates.togglericon), mergeProps({
    key: 0,
    expanded: $options.expanded,
    "class": _ctx.cx("nodeToggleButtonIcon")
  }, $options.getPTOptions("nodeToggleButtonIcon")), null, 16, ["expanded", "class"])) : (openBlock(), createBlock(resolveDynamicComponent($options.expanded ? "ChevronDownIcon" : "ChevronUpIcon"), mergeProps({
    key: 1,
    "class": _ctx.cx("nodeToggleButtonIcon")
  }, $options.getPTOptions("nodeToggleButtonIcon")), null, 16, ["class"]))], 16)) : createCommentVNode("", true)], 16)], 16, _hoisted_1)], 16)) : createCommentVNode("", true), createElementVNode("tr", mergeProps({
    style: $options.childStyle,
    "class": _ctx.cx("connectors")
  }, _ctx.ptm("connectors")), [createElementVNode("td", mergeProps({
    colspan: $options.colspan
  }, _ctx.ptm("lineCell")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("connectorDown")
  }, _ctx.ptm("connectorDown")), null, 16)], 16, _hoisted_2)], 16), createElementVNode("tr", mergeProps({
    style: $options.childStyle,
    "class": _ctx.cx("connectors")
  }, _ctx.ptm("connectors")), [$props.node.children && $props.node.children.length === 1 ? (openBlock(), createElementBlock("td", mergeProps({
    key: 0,
    colspan: $options.colspan
  }, _ctx.ptm("lineCell")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("connectorDown")
  }, _ctx.ptm("connectorDown")), null, 16)], 16, _hoisted_3)) : createCommentVNode("", true), $props.node.children && $props.node.children.length > 1 ? (openBlock(true), createElementBlock(Fragment, {
    key: 1
  }, renderList($props.node.children, function(child, i) {
    return openBlock(), createElementBlock(Fragment, {
      key: child.key
    }, [createElementVNode("td", mergeProps({
      "class": _ctx.cx("connectorLeft", {
        index: i
      })
    }, {
      ref_for: true
    }, $options.getNodeOptions(!(i === 0), "connectorLeft")), "\xA0", 16), createElementVNode("td", mergeProps({
      "class": _ctx.cx("connectorRight", {
        index: i
      })
    }, {
      ref_for: true
    }, $options.getNodeOptions(!(i === $props.node.children.length - 1), "connectorRight")), "\xA0", 16)], 64);
  }), 128)) : createCommentVNode("", true)], 16), createElementVNode("tr", mergeProps({
    style: $options.childStyle,
    "class": _ctx.cx("nodeChildren")
  }, _ctx.ptm("nodeChildren")), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.node.children, function(child) {
    return openBlock(), createElementBlock("td", mergeProps({
      key: child.key,
      colspan: "2"
    }, {
      ref_for: true
    }, _ctx.ptm("nodeCell")), [createVNode(_component_OrganizationChartNode, {
      node: child,
      templates: $props.templates,
      collapsedKeys: $props.collapsedKeys,
      onNodeToggle: $options.onChildNodeToggle,
      collapsible: $props.collapsible,
      selectionMode: $props.selectionMode,
      selectionKeys: $props.selectionKeys,
      onNodeClick: $options.onChildNodeClick,
      pt: _ctx.pt,
      unstyled: _ctx.unstyled
    }, null, 8, ["node", "templates", "collapsedKeys", "onNodeToggle", "collapsible", "selectionMode", "selectionKeys", "onNodeClick", "pt", "unstyled"])], 16);
  }), 128))], 16)], 16)], 16);
}
script$1.render = render$1;
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
var script = {
  name: "OrganizationChart",
  "extends": script$2,
  inheritAttrs: false,
  emits: ["node-unselect", "node-select", "update:selectionKeys", "node-expand", "node-collapse", "update:collapsedKeys"],
  data: function data() {
    return {
      d_collapsedKeys: this.collapsedKeys || {}
    };
  },
  watch: {
    collapsedKeys: function collapsedKeys(newValue) {
      this.d_collapsedKeys = newValue;
    }
  },
  methods: {
    onNodeClick: function onNodeClick2(node2) {
      var key = node2.key;
      if (this.selectionMode) {
        var _selectionKeys = this.selectionKeys ? _objectSpread({}, this.selectionKeys) : {};
        if (_selectionKeys[key]) {
          delete _selectionKeys[key];
          this.$emit("node-unselect", node2);
        } else {
          if (this.selectionMode === "single") {
            _selectionKeys = {};
          }
          _selectionKeys[key] = true;
          this.$emit("node-select", node2);
        }
        this.$emit("update:selectionKeys", _selectionKeys);
      }
    },
    onNodeToggle: function onNodeToggle(node2) {
      var key = node2.key;
      if (this.d_collapsedKeys[key]) {
        delete this.d_collapsedKeys[key];
        this.$emit("node-expand", node2);
      } else {
        this.d_collapsedKeys[key] = true;
        this.$emit("node-collapse", node2);
      }
      this.d_collapsedKeys = _objectSpread({}, this.d_collapsedKeys);
      this.$emit("update:collapsedKeys", this.d_collapsedKeys);
    }
  },
  components: {
    OrganizationChartNode: script$1
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_OrganizationChartNode = resolveComponent("OrganizationChartNode");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [createVNode(_component_OrganizationChartNode, {
    node: _ctx.value,
    templates: _ctx.$slots,
    onNodeToggle: $options.onNodeToggle,
    collapsedKeys: $data.d_collapsedKeys,
    collapsible: _ctx.collapsible,
    onNodeClick: $options.onNodeClick,
    selectionMode: _ctx.selectionMode,
    selectionKeys: _ctx.selectionKeys,
    pt: _ctx.pt,
    unstyled: _ctx.unstyled
  }, null, 8, ["node", "templates", "onNodeToggle", "collapsedKeys", "collapsible", "onNodeClick", "selectionMode", "selectionKeys", "pt", "unstyled"])], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-n7y7V4Pu.mjs.map
