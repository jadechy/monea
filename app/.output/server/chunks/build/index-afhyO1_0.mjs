import { s as script$3 } from './index-f6-L4oOs.mjs';
import { style } from '@primeuix/styles/dock';
import { B as BaseStyle } from './server.mjs';
import { find, findSingle } from '@primeuix/utils/dom';
import { resolve } from '@primeuix/utils/object';
import { R as Ripple } from './index-2dA4pXcI.mjs';
import { T as Tooltip } from './index-WoKANrDz.mjs';
import { mergeProps, resolveDirective, createElementBlock, openBlock, createElementVNode, Fragment, renderList, withDirectives, createBlock, resolveDynamicComponent, normalizeClass, resolveComponent, createVNode } from 'vue';
import '@primeuix/styled';
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
import './index-DpRrGZTR.mjs';
import '@primeuix/utils/uuid';
import '@primeuix/utils/zindex';
import './index-UnQD5FIJ.mjs';

var classes = {
  root: function root(_ref) {
    var instance = _ref.instance, props = _ref.props;
    return ["p-dock p-component", "p-dock-".concat(props.position), {
      "p-dock-mobile": instance.queryMatches
    }];
  },
  listContainer: "p-dock-list-container",
  list: "p-dock-list",
  item: function item(_ref2) {
    var instance = _ref2.instance, processedItem = _ref2.processedItem, id = _ref2.id;
    return ["p-dock-item", {
      "p-focus": instance.isItemActive(id),
      "p-disabled": instance.disabled(processedItem)
    }];
  },
  itemContent: "p-dock-item-content",
  itemLink: "p-dock-item-link",
  itemIcon: "p-dock-item-icon"
};
var DockStyle = BaseStyle.extend({
  name: "dock",
  style,
  classes
});
var script$2 = {
  name: "BaseDock",
  "extends": script$3,
  props: {
    position: {
      type: String,
      "default": "bottom"
    },
    model: null,
    "class": null,
    style: null,
    tooltipOptions: null,
    menuId: {
      type: String,
      "default": null
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    breakpoint: {
      type: String,
      "default": "960px"
    },
    ariaLabel: {
      type: String,
      "default": null
    },
    ariaLabelledby: {
      type: String,
      "default": null
    }
  },
  style: DockStyle,
  provide: function provide() {
    return {
      $pcDock: this,
      $parentInstance: this
    };
  }
};
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
var script$1 = {
  name: "DockSub",
  hostName: "Dock",
  "extends": script$3,
  emits: ["focus", "blur"],
  props: {
    position: {
      type: String,
      "default": "bottom"
    },
    model: {
      type: Array,
      "default": null
    },
    templates: {
      type: null,
      "default": null
    },
    tooltipOptions: null,
    menuId: {
      type: String,
      "default": null
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    ariaLabel: {
      type: String,
      "default": null
    },
    ariaLabelledby: {
      type: String,
      "default": null
    }
  },
  data: function data() {
    return {
      currentIndex: -3,
      focused: false,
      focusedOptionIndex: -1
    };
  },
  methods: {
    getItemId: function getItemId(index) {
      return "".concat(this.idx, "_").concat(index);
    },
    getItemProp: function getItemProp(processedItem, name) {
      return processedItem && processedItem.item ? resolve(processedItem.item[name]) : void 0;
    },
    getPTOptions: function getPTOptions(key, item2, index) {
      return this.ptm(key, {
        context: {
          index,
          item: item2,
          active: this.isItemActive(this.getItemId(index))
        }
      });
    },
    isSameMenuItem: function isSameMenuItem(event) {
      return event.currentTarget && (event.currentTarget.isSameNode(event.target) || event.currentTarget.isSameNode(event.target.closest('[data-pc-section="item"]')));
    },
    isItemActive: function isItemActive(id) {
      return id === this.focusedOptionIndex;
    },
    onListMouseLeave: function onListMouseLeave() {
      this.currentIndex = -3;
    },
    onItemMouseEnter: function onItemMouseEnter(index) {
      this.currentIndex = index;
    },
    onItemClick: function onItemClick(event, processedItem) {
      if (this.isSameMenuItem(event)) {
        var command = this.getItemProp(processedItem, "command");
        command && command({
          originalEvent: event,
          item: processedItem.item
        });
      }
    },
    onListFocus: function onListFocus(event) {
      this.focused = true;
      this.changeFocusedOptionIndex(0);
      this.$emit("focus", event);
    },
    onListBlur: function onListBlur(event) {
      this.focused = false;
      this.focusedOptionIndex = -1;
      this.$emit("blur", event);
    },
    onListKeyDown: function onListKeyDown(event) {
      switch (event.code) {
        case "ArrowDown": {
          if (this.position === "left" || this.position === "right") this.onArrowDownKey();
          event.preventDefault();
          break;
        }
        case "ArrowUp": {
          if (this.position === "left" || this.position === "right") this.onArrowUpKey();
          event.preventDefault();
          break;
        }
        case "ArrowRight": {
          if (this.position === "top" || this.position === "bottom") this.onArrowDownKey();
          event.preventDefault();
          break;
        }
        case "ArrowLeft": {
          if (this.position === "top" || this.position === "bottom") this.onArrowUpKey();
          event.preventDefault();
          break;
        }
        case "Home": {
          this.onHomeKey();
          event.preventDefault();
          break;
        }
        case "End": {
          this.onEndKey();
          event.preventDefault();
          break;
        }
        case "Enter":
        case "NumpadEnter":
        case "Space": {
          this.onSpaceKey(event);
          event.preventDefault();
          break;
        }
      }
    },
    onArrowDownKey: function onArrowDownKey() {
      var optionIndex = this.findNextOptionIndex(this.focusedOptionIndex);
      this.changeFocusedOptionIndex(optionIndex);
    },
    onArrowUpKey: function onArrowUpKey() {
      var optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex);
      this.changeFocusedOptionIndex(optionIndex);
    },
    onHomeKey: function onHomeKey() {
      this.changeFocusedOptionIndex(0);
    },
    onEndKey: function onEndKey() {
      this.changeFocusedOptionIndex(find(this.$refs.list, 'li[data-pc-section="item"][data-p-disabled="false"]').length - 1);
    },
    onSpaceKey: function onSpaceKey() {
      var element = findSingle(this.$refs.list, 'li[id="'.concat("".concat(this.focusedOptionIndex), '"]'));
      var anchorElement = element && findSingle(element, '[data-pc-section="itemlink"]');
      anchorElement ? anchorElement.click() : element && element.click();
    },
    findNextOptionIndex: function findNextOptionIndex(index) {
      var menuitems = find(this.$refs.list, 'li[data-pc-section="item"][data-p-disabled="false"]');
      var matchedOptionIndex = _toConsumableArray(menuitems).findIndex(function(link) {
        return link.id === index;
      });
      return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
    },
    findPrevOptionIndex: function findPrevOptionIndex(index) {
      var menuitems = find(this.$refs.list, 'li[data-pc-section="item"][data-p-disabled="false"]');
      var matchedOptionIndex = _toConsumableArray(menuitems).findIndex(function(link) {
        return link.id === index;
      });
      return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
    },
    changeFocusedOptionIndex: function changeFocusedOptionIndex(index) {
      var menuitems = find(this.$refs.list, 'li[data-pc-section="item"][data-p-disabled="false"]');
      var order = index >= menuitems.length ? menuitems.length - 1 : index < 0 ? 0 : index;
      this.focusedOptionIndex = menuitems[order].getAttribute("id");
    },
    disabled: function disabled(item2) {
      return typeof item2.disabled === "function" ? item2.disabled() : item2.disabled;
    },
    getMenuItemProps: function getMenuItemProps(item2, index) {
      return {
        action: mergeProps({
          tabindex: -1,
          "class": this.cx("itemLink")
        }, this.getPTOptions("itemLink", item2, index)),
        icon: mergeProps({
          "class": [this.cx("itemIcon"), item2.icon]
        }, this.getPTOptions("itemIcon", item2, index))
      };
    }
  },
  computed: {
    focusedOptionId: function focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : null;
    },
    idx: function idx() {
      return this.menuId || this.$id;
    }
  },
  directives: {
    ripple: Ripple,
    tooltip: Tooltip
  }
};
var _hoisted_1 = ["id", "aria-orientation", "aria-activedescendant", "tabindex", "aria-label", "aria-labelledby"];
var _hoisted_2 = ["id", "aria-label", "aria-disabled", "onClick", "onMouseenter", "data-p-focused", "data-p-disabled"];
var _hoisted_3 = ["href", "target"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  var _directive_tooltip = resolveDirective("tooltip");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("listContainer")
  }, _ctx.ptm("listContainer")), [createElementVNode("ul", mergeProps({
    ref: "list",
    id: $options.idx,
    "class": _ctx.cx("list"),
    role: "menu",
    "aria-orientation": $props.position === "bottom" || $props.position === "top" ? "horizontal" : "vertical",
    "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
    tabindex: $props.tabindex,
    "aria-label": $props.ariaLabel,
    "aria-labelledby": $props.ariaLabelledby,
    onFocus: _cache[0] || (_cache[0] = function() {
      return $options.onListFocus && $options.onListFocus.apply($options, arguments);
    }),
    onBlur: _cache[1] || (_cache[1] = function() {
      return $options.onListBlur && $options.onListBlur.apply($options, arguments);
    }),
    onKeydown: _cache[2] || (_cache[2] = function() {
      return $options.onListKeyDown && $options.onListKeyDown.apply($options, arguments);
    }),
    onMouseleave: _cache[3] || (_cache[3] = function() {
      return $options.onListMouseLeave && $options.onListMouseLeave.apply($options, arguments);
    })
  }, _ctx.ptm("list")), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.model, function(processedItem, index) {
    return openBlock(), createElementBlock("li", mergeProps({
      key: index,
      id: $options.getItemId(index),
      "class": _ctx.cx("item", {
        processedItem,
        id: $options.getItemId(index)
      }),
      role: "menuitem",
      "aria-label": processedItem.label,
      "aria-disabled": $options.disabled(processedItem),
      onClick: function onClick($event) {
        return $options.onItemClick($event, processedItem);
      },
      onMouseenter: function onMouseenter($event) {
        return $options.onItemMouseEnter(index);
      }
    }, {
      ref_for: true
    }, $options.getPTOptions("item", processedItem, index), {
      "data-p-focused": $options.isItemActive($options.getItemId(index)),
      "data-p-disabled": $options.disabled(processedItem) || false
    }), [createElementVNode("div", mergeProps({
      "class": _ctx.cx("itemContent")
    }, {
      ref_for: true
    }, $options.getPTOptions("itemContent", processedItem, index)), [!$props.templates["item"] ? withDirectives((openBlock(), createElementBlock("a", mergeProps({
      key: 0,
      href: processedItem.url,
      "class": _ctx.cx("itemLink"),
      target: processedItem.target,
      tabindex: "-1"
    }, {
      ref_for: true
    }, $options.getPTOptions("itemLink", processedItem, index)), [!$props.templates["icon"] && !$props.templates["itemicon"] ? withDirectives((openBlock(), createElementBlock("span", mergeProps({
      key: 0,
      "class": [_ctx.cx("itemIcon"), processedItem.icon]
    }, {
      ref_for: true
    }, $options.getPTOptions("itemIcon", processedItem, index)), null, 16)), [[_directive_ripple]]) : (openBlock(), createBlock(resolveDynamicComponent($props.templates["icon"] || $props.templates["itemicon"]), {
      key: 1,
      item: processedItem,
      "class": normalizeClass(_ctx.cx("itemIcon"))
    }, null, 8, ["item", "class"]))], 16, _hoisted_3)), [[_directive_tooltip, {
      value: processedItem.label,
      disabled: !$props.tooltipOptions
    }, $props.tooltipOptions]]) : (openBlock(), createBlock(resolveDynamicComponent($props.templates["item"]), {
      key: 1,
      item: processedItem,
      index,
      label: processedItem.label,
      props: $options.getMenuItemProps(processedItem, index)
    }, null, 8, ["item", "index", "label", "props"]))], 16)], 16, _hoisted_2);
  }), 128))], 16, _hoisted_1)], 16);
}
script$1.render = render$1;
var script = {
  name: "Dock",
  "extends": script$2,
  inheritAttrs: false,
  matchMediaListener: null,
  data: function data2() {
    return {
      query: null,
      queryMatches: false
    };
  },
  mounted: function mounted() {
    this.bindMatchMediaListener();
  },
  beforeUnmount: function beforeUnmount() {
    this.unbindMatchMediaListener();
  },
  methods: {
    bindMatchMediaListener: function bindMatchMediaListener() {
      var _this = this;
      if (!this.matchMediaListener) {
        var query = matchMedia("(max-width: ".concat(this.breakpoint, ")"));
        this.query = query;
        this.queryMatches = query.matches;
        this.matchMediaListener = function() {
          _this.queryMatches = query.matches;
          _this.mobileActive = false;
        };
        this.query.addEventListener("change", this.matchMediaListener);
      }
    },
    unbindMatchMediaListener: function unbindMatchMediaListener() {
      if (this.matchMediaListener) {
        this.query.removeEventListener("change", this.matchMediaListener);
        this.matchMediaListener = null;
      }
    }
  },
  computed: {
    containerClass: function containerClass() {
      return [this["class"], this.cx("root")];
    }
  },
  components: {
    DockSub: script$1
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_DockSub = resolveComponent("DockSub");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": $options.containerClass,
    style: _ctx.style
  }, _ctx.ptmi("root")), [createVNode(_component_DockSub, {
    model: _ctx.model,
    templates: _ctx.$slots,
    tooltipOptions: _ctx.tooltipOptions,
    position: _ctx.position,
    menuId: _ctx.menuId,
    "aria-label": _ctx.ariaLabel,
    "aria-labelledby": _ctx.ariaLabelledby,
    tabindex: _ctx.tabindex,
    pt: _ctx.pt,
    unstyled: _ctx.unstyled
  }, null, 8, ["model", "templates", "tooltipOptions", "position", "menuId", "aria-label", "aria-labelledby", "tabindex", "pt", "unstyled"])], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-afhyO1_0.mjs.map
