import { focus, findSingle, getAttribute } from '@primeuix/utils/dom';
import { equals, isNotEmpty, resolve, isEmpty, findLast, isPrintableCharacter } from '@primeuix/utils/object';
import { s as script$4 } from './index-CmU8UmpY.mjs';
import { s as script$5 } from './index-BCBVIvNq.mjs';
import { mergeProps, resolveComponent, resolveDirective, createElementBlock, openBlock, normalizeClass, Fragment, renderList, createCommentVNode, createElementVNode, createVNode, withDirectives, createBlock, resolveDynamicComponent, toDisplayString, Transition, withCtx, vShow, renderSlot } from 'vue';
import { v as Ripple, g as script$6, B as BaseStyle } from './server.mjs';
import { style } from '@primeuix/styles/panelmenu';
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
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
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
import '@primeuix/utils/uuid';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

var classes = {
  root: "p-panelmenu p-component",
  panel: "p-panelmenu-panel",
  header: function header(_ref) {
    var instance = _ref.instance, item2 = _ref.item;
    return ["p-panelmenu-header", {
      "p-panelmenu-header-active": instance.isItemActive(item2) && !!item2.items,
      "p-disabled": instance.isItemDisabled(item2)
    }];
  },
  headerContent: "p-panelmenu-header-content",
  headerLink: "p-panelmenu-header-link",
  headerIcon: "p-panelmenu-header-icon",
  headerLabel: "p-panelmenu-header-label",
  contentContainer: "p-panelmenu-content-container",
  content: "p-panelmenu-content",
  rootList: "p-panelmenu-root-list",
  item: function item(_ref2) {
    var instance = _ref2.instance, processedItem = _ref2.processedItem;
    return ["p-panelmenu-item", {
      "p-focus": instance.isItemFocused(processedItem),
      "p-disabled": instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: "p-panelmenu-item-content",
  itemLink: "p-panelmenu-item-link",
  itemIcon: "p-panelmenu-item-icon",
  itemLabel: "p-panelmenu-item-label",
  submenuIcon: "p-panelmenu-submenu-icon",
  submenu: "p-panelmenu-submenu",
  separator: "p-menuitem-separator"
};
var PanelMenuStyle = BaseStyle.extend({
  name: "panelmenu",
  style,
  classes
});
var script$3 = {
  name: "BasePanelMenu",
  "extends": script$6,
  props: {
    model: {
      type: Array,
      "default": null
    },
    expandedKeys: {
      type: Object,
      "default": null
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": 0
    }
  },
  style: PanelMenuStyle,
  provide: function provide() {
    return {
      $pcPanelMenu: this,
      $parentInstance: this
    };
  }
};
var script$2 = {
  name: "PanelMenuSub",
  hostName: "PanelMenu",
  "extends": script$6,
  emits: ["item-toggle", "item-mousemove"],
  props: {
    panelId: {
      type: String,
      "default": null
    },
    focusedItemId: {
      type: String,
      "default": null
    },
    items: {
      type: Array,
      "default": null
    },
    level: {
      type: Number,
      "default": 0
    },
    templates: {
      type: Object,
      "default": null
    },
    activeItemPath: {
      type: Object,
      "default": null
    },
    tabindex: {
      type: Number,
      "default": -1
    }
  },
  methods: {
    getItemId: function getItemId(processedItem) {
      return "".concat(this.panelId, "_").concat(processedItem.key);
    },
    getItemKey: function getItemKey(processedItem) {
      return this.getItemId(processedItem);
    },
    getItemProp: function getItemProp(processedItem, name, params) {
      return processedItem && processedItem.item ? resolve(processedItem.item[name], params) : void 0;
    },
    getItemLabel: function getItemLabel(processedItem) {
      return this.getItemProp(processedItem, "label");
    },
    getPTOptions: function getPTOptions(key, processedItem, index) {
      return this.ptm(key, {
        context: {
          item: processedItem.item,
          index,
          active: this.isItemActive(processedItem),
          focused: this.isItemFocused(processedItem),
          disabled: this.isItemDisabled(processedItem)
        }
      });
    },
    isItemActive: function isItemActive(processedItem) {
      return this.activeItemPath.some(function(path) {
        return path.key === processedItem.key;
      });
    },
    isItemVisible: function isItemVisible(processedItem) {
      return this.getItemProp(processedItem, "visible") !== false;
    },
    isItemDisabled: function isItemDisabled(processedItem) {
      return this.getItemProp(processedItem, "disabled");
    },
    isItemFocused: function isItemFocused(processedItem) {
      return this.focusedItemId === this.getItemId(processedItem);
    },
    isItemGroup: function isItemGroup(processedItem) {
      return isNotEmpty(processedItem.items);
    },
    onItemClick: function onItemClick(event, processedItem) {
      this.getItemProp(processedItem, "command", {
        originalEvent: event,
        item: processedItem.item
      });
      this.$emit("item-toggle", {
        processedItem,
        expanded: !this.isItemActive(processedItem)
      });
    },
    onItemToggle: function onItemToggle(event) {
      this.$emit("item-toggle", event);
    },
    onItemMouseMove: function onItemMouseMove(event, processedItem) {
      this.$emit("item-mousemove", {
        originalEvent: event,
        processedItem
      });
    },
    getAriaSetSize: function getAriaSetSize() {
      var _this = this;
      return this.items.filter(function(processedItem) {
        return _this.isItemVisible(processedItem) && !_this.getItemProp(processedItem, "separator");
      }).length;
    },
    getAriaPosInset: function getAriaPosInset(index) {
      var _this2 = this;
      return index - this.items.slice(0, index).filter(function(processedItem) {
        return _this2.isItemVisible(processedItem) && _this2.getItemProp(processedItem, "separator");
      }).length + 1;
    },
    getMenuItemProps: function getMenuItemProps(processedItem, index) {
      return {
        action: mergeProps({
          "class": this.cx("itemLink"),
          tabindex: -1
        }, this.getPTOptions("itemLink", processedItem, index)),
        icon: mergeProps({
          "class": [this.cx("itemIcon"), this.getItemProp(processedItem, "icon")]
        }, this.getPTOptions("itemIcon", processedItem, index)),
        label: mergeProps({
          "class": this.cx("itemLabel")
        }, this.getPTOptions("itemLabel", processedItem, index)),
        submenuicon: mergeProps({
          "class": this.cx("submenuIcon")
        }, this.getPTOptions("submenuicon", processedItem, index))
      };
    }
  },
  components: {
    ChevronRightIcon: script$5,
    ChevronDownIcon: script$4
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1$1 = ["tabindex"];
var _hoisted_2$1 = ["id", "aria-label", "aria-expanded", "aria-level", "aria-setsize", "aria-posinset", "data-p-focused", "data-p-disabled"];
var _hoisted_3$1 = ["onClick", "onMousemove"];
var _hoisted_4$1 = ["href", "target"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PanelMenuSub = resolveComponent("PanelMenuSub", true);
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("ul", {
    "class": normalizeClass(_ctx.cx("submenu")),
    tabindex: $props.tabindex
  }, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.items, function(processedItem, index) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.getItemKey(processedItem)
    }, [$options.isItemVisible(processedItem) && !$options.getItemProp(processedItem, "separator") ? (openBlock(), createElementBlock("li", mergeProps({
      key: 0,
      id: $options.getItemId(processedItem),
      "class": [_ctx.cx("item", {
        processedItem
      }), $options.getItemProp(processedItem, "class")],
      style: $options.getItemProp(processedItem, "style"),
      role: "treeitem",
      "aria-label": $options.getItemLabel(processedItem),
      "aria-expanded": $options.isItemGroup(processedItem) ? $options.isItemActive(processedItem) : void 0,
      "aria-level": $props.level + 1,
      "aria-setsize": $options.getAriaSetSize(),
      "aria-posinset": $options.getAriaPosInset(index)
    }, {
      ref_for: true
    }, $options.getPTOptions("item", processedItem, index), {
      "data-p-focused": $options.isItemFocused(processedItem),
      "data-p-disabled": $options.isItemDisabled(processedItem)
    }), [createElementVNode("div", mergeProps({
      "class": _ctx.cx("itemContent"),
      onClick: function onClick($event) {
        return $options.onItemClick($event, processedItem);
      },
      onMousemove: function onMousemove($event) {
        return $options.onItemMouseMove($event, processedItem);
      }
    }, {
      ref_for: true
    }, $options.getPTOptions("itemContent", processedItem, index)), [!$props.templates.item ? withDirectives((openBlock(), createElementBlock("a", mergeProps({
      key: 0,
      href: $options.getItemProp(processedItem, "url"),
      "class": _ctx.cx("itemLink"),
      target: $options.getItemProp(processedItem, "target"),
      tabindex: "-1"
    }, {
      ref_for: true
    }, $options.getPTOptions("itemLink", processedItem, index)), [$options.isItemGroup(processedItem) ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [$props.templates.submenuicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.submenuicon), mergeProps({
      key: 0,
      "class": _ctx.cx("submenuIcon"),
      active: $options.isItemActive(processedItem)
    }, {
      ref_for: true
    }, $options.getPTOptions("submenuIcon", processedItem, index)), null, 16, ["class", "active"])) : (openBlock(), createBlock(resolveDynamicComponent($options.isItemActive(processedItem) ? "ChevronDownIcon" : "ChevronRightIcon"), mergeProps({
      key: 1,
      "class": _ctx.cx("submenuIcon")
    }, {
      ref_for: true
    }, $options.getPTOptions("submenuIcon", processedItem, index)), null, 16, ["class"]))], 64)) : createCommentVNode("", true), $props.templates.itemicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.itemicon), {
      key: 1,
      item: processedItem.item,
      "class": normalizeClass(_ctx.cx("itemIcon"))
    }, null, 8, ["item", "class"])) : $options.getItemProp(processedItem, "icon") ? (openBlock(), createElementBlock("span", mergeProps({
      key: 2,
      "class": [_ctx.cx("itemIcon"), $options.getItemProp(processedItem, "icon")]
    }, {
      ref_for: true
    }, $options.getPTOptions("itemIcon", processedItem, index)), null, 16)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
      "class": _ctx.cx("itemLabel")
    }, {
      ref_for: true
    }, $options.getPTOptions("itemLabel", processedItem, index)), toDisplayString($options.getItemLabel(processedItem)), 17)], 16, _hoisted_4$1)), [[_directive_ripple]]) : (openBlock(), createBlock(resolveDynamicComponent($props.templates.item), {
      key: 1,
      item: processedItem.item,
      root: false,
      active: $options.isItemActive(processedItem),
      hasSubmenu: $options.isItemGroup(processedItem),
      label: $options.getItemLabel(processedItem),
      props: $options.getMenuItemProps(processedItem, index)
    }, null, 8, ["item", "active", "hasSubmenu", "label", "props"]))], 16, _hoisted_3$1), createVNode(Transition, mergeProps({
      name: "p-toggleable-content"
    }, {
      ref_for: true
    }, _ctx.ptm("transition")), {
      "default": withCtx(function() {
        return [withDirectives(createElementVNode("div", mergeProps({
          "class": _ctx.cx("contentContainer")
        }, {
          ref_for: true
        }, _ctx.ptm("contentContainer")), [$options.isItemVisible(processedItem) && $options.isItemGroup(processedItem) ? (openBlock(), createBlock(_component_PanelMenuSub, mergeProps({
          key: 0,
          id: $options.getItemId(processedItem) + "_list",
          role: "group",
          panelId: $props.panelId,
          focusedItemId: $props.focusedItemId,
          items: processedItem.items,
          level: $props.level + 1,
          templates: $props.templates,
          activeItemPath: $props.activeItemPath,
          onItemToggle: $options.onItemToggle,
          onItemMousemove: _cache[0] || (_cache[0] = function($event) {
            return _ctx.$emit("item-mousemove", $event);
          }),
          pt: _ctx.pt,
          unstyled: _ctx.unstyled
        }, {
          ref_for: true
        }, _ctx.ptm("submenu")), null, 16, ["id", "panelId", "focusedItemId", "items", "level", "templates", "activeItemPath", "onItemToggle", "pt", "unstyled"])) : createCommentVNode("", true)], 16), [[vShow, $options.isItemActive(processedItem)]])];
      }),
      _: 2
    }, 1040)], 16, _hoisted_2$1)) : createCommentVNode("", true), $options.isItemVisible(processedItem) && $options.getItemProp(processedItem, "separator") ? (openBlock(), createElementBlock("li", mergeProps({
      key: 1,
      style: $options.getItemProp(processedItem, "style"),
      "class": [_ctx.cx("separator"), $options.getItemProp(processedItem, "class")],
      role: "separator"
    }, {
      ref_for: true
    }, _ctx.ptm("separator")), null, 16)) : createCommentVNode("", true)], 64);
  }), 128))], 10, _hoisted_1$1);
}
script$2.render = render$2;
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
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
var script$1 = {
  name: "PanelMenuList",
  hostName: "PanelMenu",
  "extends": script$6,
  emits: ["item-toggle", "header-focus"],
  props: {
    panelId: {
      type: String,
      "default": null
    },
    items: {
      type: Array,
      "default": null
    },
    templates: {
      type: Object,
      "default": null
    },
    expandedKeys: {
      type: Object,
      "default": null
    }
  },
  searchTimeout: null,
  searchValue: null,
  data: function data() {
    return {
      focused: false,
      focusedItem: null,
      activeItemPath: []
    };
  },
  watch: {
    expandedKeys: function expandedKeys(newValue) {
      this.autoUpdateActiveItemPath(newValue);
    }
  },
  created: function created() {
    this.autoUpdateActiveItemPath(this.expandedKeys);
  },
  methods: {
    getItemProp: function getItemProp2(processedItem, name) {
      return processedItem && processedItem.item ? resolve(processedItem.item[name]) : void 0;
    },
    getItemLabel: function getItemLabel2(processedItem) {
      return this.getItemProp(processedItem, "label");
    },
    isItemVisible: function isItemVisible2(processedItem) {
      return this.getItemProp(processedItem, "visible") !== false;
    },
    isItemDisabled: function isItemDisabled2(processedItem) {
      return this.getItemProp(processedItem, "disabled");
    },
    isItemActive: function isItemActive2(processedItem) {
      return this.activeItemPath.some(function(path) {
        return path.key === processedItem.parentKey;
      });
    },
    isItemGroup: function isItemGroup2(processedItem) {
      return isNotEmpty(processedItem.items);
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.focusedItem = this.focusedItem || (this.isElementInPanel(event, event.relatedTarget) ? this.findFirstItem() : this.findLastItem());
    },
    onBlur: function onBlur() {
      this.focused = false;
      this.focusedItem = null;
      this.searchValue = "";
    },
    onKeyDown: function onKeyDown(event) {
      var metaKey = event.metaKey || event.ctrlKey;
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(event);
          break;
        case "ArrowRight":
          this.onArrowRightKey(event);
          break;
        case "Home":
          this.onHomeKey(event);
          break;
        case "End":
          this.onEndKey(event);
          break;
        case "Space":
          this.onSpaceKey(event);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(event);
          break;
        case "Escape":
        case "Tab":
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          if (!metaKey && isPrintableCharacter(event.key)) {
            this.searchItems(event, event.key);
          }
          break;
      }
    },
    onArrowDownKey: function onArrowDownKey(event) {
      var processedItem = isNotEmpty(this.focusedItem) ? this.findNextItem(this.focusedItem) : this.findFirstItem();
      this.changeFocusedItem({
        originalEvent: event,
        processedItem,
        focusOnNext: true
      });
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event) {
      var processedItem = isNotEmpty(this.focusedItem) ? this.findPrevItem(this.focusedItem) : this.findLastItem();
      this.changeFocusedItem({
        originalEvent: event,
        processedItem,
        selfCheck: true
      });
      event.preventDefault();
    },
    onArrowLeftKey: function onArrowLeftKey(event) {
      var _this = this;
      if (isNotEmpty(this.focusedItem)) {
        var matched = this.activeItemPath.some(function(p) {
          return p.key === _this.focusedItem.key;
        });
        if (matched) {
          this.activeItemPath = this.activeItemPath.filter(function(p) {
            return p.key !== _this.focusedItem.key;
          });
        } else {
          this.focusedItem = isNotEmpty(this.focusedItem.parent) ? this.focusedItem.parent : this.focusedItem;
        }
        event.preventDefault();
      }
    },
    onArrowRightKey: function onArrowRightKey(event) {
      var _this2 = this;
      if (isNotEmpty(this.focusedItem)) {
        var grouped = this.isItemGroup(this.focusedItem);
        if (grouped) {
          var matched = this.activeItemPath.some(function(p) {
            return p.key === _this2.focusedItem.key;
          });
          if (matched) {
            this.onArrowDownKey(event);
          } else {
            this.activeItemPath = this.activeItemPath.filter(function(p) {
              return p.parentKey !== _this2.focusedItem.parentKey;
            });
            this.activeItemPath.push(this.focusedItem);
          }
        }
        event.preventDefault();
      }
    },
    onHomeKey: function onHomeKey(event) {
      this.changeFocusedItem({
        originalEvent: event,
        processedItem: this.findFirstItem(),
        allowHeaderFocus: false
      });
      event.preventDefault();
    },
    onEndKey: function onEndKey(event) {
      this.changeFocusedItem({
        originalEvent: event,
        processedItem: this.findLastItem(),
        focusOnNext: true,
        allowHeaderFocus: false
      });
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event) {
      if (isNotEmpty(this.focusedItem)) {
        var element = findSingle(this.$el, 'li[id="'.concat("".concat(this.focusedItemId), '"]'));
        var anchorElement = element && (findSingle(element, '[data-pc-section="itemlink"]') || findSingle(element, "a,button"));
        anchorElement ? anchorElement.click() : element && element.click();
      }
      event.preventDefault();
    },
    onSpaceKey: function onSpaceKey(event) {
      this.onEnterKey(event);
    },
    onItemToggle: function onItemToggle2(event) {
      var processedItem = event.processedItem, expanded = event.expanded;
      if (this.expandedKeys) {
        this.$emit("item-toggle", {
          item: processedItem.item,
          expanded
        });
      } else {
        this.activeItemPath = this.activeItemPath.filter(function(p) {
          return p.parentKey !== processedItem.parentKey;
        });
        expanded && this.activeItemPath.push(processedItem);
      }
      this.focusedItem = processedItem;
      focus(this.$el);
    },
    onItemMouseMove: function onItemMouseMove2(event) {
      if (this.focused) {
        this.focusedItem = event.processedItem;
      }
    },
    isElementInPanel: function isElementInPanel(event, element) {
      var panel = event.currentTarget.closest('[data-pc-section="panel"]');
      return panel && panel.contains(element);
    },
    isItemMatched: function isItemMatched(processedItem) {
      var _this$getItemLabel;
      return this.isValidItem(processedItem) && ((_this$getItemLabel = this.getItemLabel(processedItem)) === null || _this$getItemLabel === void 0 ? void 0 : _this$getItemLabel.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)));
    },
    isVisibleItem: function isVisibleItem(processedItem) {
      return !!processedItem && (processedItem.level === 0 || this.isItemActive(processedItem)) && this.isItemVisible(processedItem);
    },
    isValidItem: function isValidItem(processedItem) {
      return !!processedItem && !this.isItemDisabled(processedItem) && !this.getItemProp(processedItem, "separator");
    },
    findFirstItem: function findFirstItem() {
      var _this3 = this;
      return this.visibleItems.find(function(processedItem) {
        return _this3.isValidItem(processedItem);
      });
    },
    findLastItem: function findLastItem() {
      var _this4 = this;
      return findLast(this.visibleItems, function(processedItem) {
        return _this4.isValidItem(processedItem);
      });
    },
    findNextItem: function findNextItem(processedItem) {
      var _this5 = this;
      var index = this.visibleItems.findIndex(function(item2) {
        return item2.key === processedItem.key;
      });
      var matchedItem = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).find(function(pItem) {
        return _this5.isValidItem(pItem);
      }) : void 0;
      return matchedItem || processedItem;
    },
    findPrevItem: function findPrevItem(processedItem) {
      var _this6 = this;
      var index = this.visibleItems.findIndex(function(item2) {
        return item2.key === processedItem.key;
      });
      var matchedItem = index > 0 ? findLast(this.visibleItems.slice(0, index), function(pItem) {
        return _this6.isValidItem(pItem);
      }) : void 0;
      return matchedItem || processedItem;
    },
    searchItems: function searchItems(event, _char) {
      var _this7 = this;
      this.searchValue = (this.searchValue || "") + _char;
      var matchedItem = null;
      var matched = false;
      if (isNotEmpty(this.focusedItem)) {
        var focusedItemIndex = this.visibleItems.findIndex(function(processedItem) {
          return processedItem.key === _this7.focusedItem.key;
        });
        matchedItem = this.visibleItems.slice(focusedItemIndex).find(function(processedItem) {
          return _this7.isItemMatched(processedItem);
        });
        matchedItem = isEmpty(matchedItem) ? this.visibleItems.slice(0, focusedItemIndex).find(function(processedItem) {
          return _this7.isItemMatched(processedItem);
        }) : matchedItem;
      } else {
        matchedItem = this.visibleItems.find(function(processedItem) {
          return _this7.isItemMatched(processedItem);
        });
      }
      if (isNotEmpty(matchedItem)) {
        matched = true;
      }
      if (isEmpty(matchedItem) && isEmpty(this.focusedItem)) {
        matchedItem = this.findFirstItem();
      }
      if (isNotEmpty(matchedItem)) {
        this.changeFocusedItem({
          originalEvent: event,
          processedItem: matchedItem,
          allowHeaderFocus: false
        });
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(function() {
        _this7.searchValue = "";
        _this7.searchTimeout = null;
      }, 500);
      return matched;
    },
    changeFocusedItem: function changeFocusedItem(event) {
      var originalEvent = event.originalEvent, processedItem = event.processedItem, focusOnNext = event.focusOnNext, selfCheck = event.selfCheck, _event$allowHeaderFoc = event.allowHeaderFocus, allowHeaderFocus = _event$allowHeaderFoc === void 0 ? true : _event$allowHeaderFoc;
      if (isNotEmpty(this.focusedItem) && this.focusedItem.key !== processedItem.key) {
        this.focusedItem = processedItem;
        this.scrollInView();
      } else if (allowHeaderFocus) {
        this.$emit("header-focus", {
          originalEvent,
          focusOnNext,
          selfCheck
        });
      }
    },
    scrollInView: function scrollInView() {
      var element = findSingle(this.$el, 'li[id="'.concat("".concat(this.focusedItemId), '"]'));
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "start"
        });
      }
    },
    autoUpdateActiveItemPath: function autoUpdateActiveItemPath(expandedKeys2) {
      var _this8 = this;
      this.activeItemPath = Object.entries(expandedKeys2 || {}).reduce(function(acc, _ref) {
        var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], val = _ref2[1];
        if (val) {
          var processedItem = _this8.findProcessedItemByItemKey(key);
          processedItem && acc.push(processedItem);
        }
        return acc;
      }, []);
    },
    findProcessedItemByItemKey: function findProcessedItemByItemKey(key, processedItems2) {
      var level = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      processedItems2 = processedItems2 || level === 0 && this.processedItems;
      if (!processedItems2) return null;
      for (var i = 0; i < processedItems2.length; i++) {
        var processedItem = processedItems2[i];
        if (this.getItemProp(processedItem, "key") === key) return processedItem;
        var matchedItem = this.findProcessedItemByItemKey(key, processedItem.items, level + 1);
        if (matchedItem) return matchedItem;
      }
    },
    createProcessedItems: function createProcessedItems(items) {
      var _this9 = this;
      var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      var parent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var parentKey = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
      var processedItems2 = [];
      items && items.forEach(function(item2, index) {
        var key = (parentKey !== "" ? parentKey + "_" : "") + index;
        var newItem = {
          item: item2,
          index,
          level,
          key,
          parent,
          parentKey
        };
        newItem["items"] = _this9.createProcessedItems(item2.items, level + 1, newItem, key);
        processedItems2.push(newItem);
      });
      return processedItems2;
    },
    flatItems: function flatItems(processedItems2) {
      var _this0 = this;
      var processedFlattenItems = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      processedItems2 && processedItems2.forEach(function(processedItem) {
        if (_this0.isVisibleItem(processedItem)) {
          processedFlattenItems.push(processedItem);
          _this0.flatItems(processedItem.items, processedFlattenItems);
        }
      });
      return processedFlattenItems;
    }
  },
  computed: {
    processedItems: function processedItems() {
      return this.createProcessedItems(this.items || []);
    },
    visibleItems: function visibleItems() {
      return this.flatItems(this.processedItems);
    },
    focusedItemId: function focusedItemId() {
      return isNotEmpty(this.focusedItem) ? "".concat(this.panelId, "_").concat(this.focusedItem.key) : null;
    }
  },
  components: {
    PanelMenuSub: script$2
  }
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PanelMenuSub = resolveComponent("PanelMenuSub");
  return openBlock(), createBlock(_component_PanelMenuSub, mergeProps({
    id: $props.panelId + "_list",
    "class": _ctx.cx("rootList"),
    role: "tree",
    tabindex: -1,
    "aria-activedescendant": $data.focused ? $options.focusedItemId : void 0,
    panelId: $props.panelId,
    focusedItemId: $data.focused ? $options.focusedItemId : void 0,
    items: $options.processedItems,
    templates: $props.templates,
    activeItemPath: $data.activeItemPath,
    onFocus: $options.onFocus,
    onBlur: $options.onBlur,
    onKeydown: $options.onKeyDown,
    onItemToggle: $options.onItemToggle,
    onItemMousemove: $options.onItemMouseMove,
    pt: _ctx.pt,
    unstyled: _ctx.unstyled
  }, _ctx.ptm("rootList")), null, 16, ["id", "class", "aria-activedescendant", "panelId", "focusedItemId", "items", "templates", "activeItemPath", "onFocus", "onBlur", "onKeydown", "onItemToggle", "onItemMousemove", "pt", "unstyled"]);
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
  name: "PanelMenu",
  "extends": script$3,
  inheritAttrs: false,
  emits: ["update:expandedKeys", "panel-open", "panel-close"],
  data: function data2() {
    return {
      activeItem: null,
      activeItems: []
    };
  },
  methods: {
    getItemProp: function getItemProp3(item2, name) {
      return item2 ? resolve(item2[name]) : void 0;
    },
    getItemLabel: function getItemLabel3(item2) {
      return this.getItemProp(item2, "label");
    },
    getPTOptions: function getPTOptions2(key, item2, index) {
      return this.ptm(key, {
        context: {
          index,
          active: this.isItemActive(item2),
          focused: this.isItemFocused(item2),
          disabled: this.isItemDisabled(item2)
        }
      });
    },
    isItemActive: function isItemActive3(item2) {
      return this.expandedKeys ? this.expandedKeys[this.getItemProp(item2, "key")] : this.multiple ? this.activeItems.some(function(subItem) {
        return equals(item2, subItem);
      }) : equals(item2, this.activeItem);
    },
    isItemVisible: function isItemVisible3(item2) {
      return this.getItemProp(item2, "visible") !== false;
    },
    isItemDisabled: function isItemDisabled3(item2) {
      return this.getItemProp(item2, "disabled");
    },
    isItemFocused: function isItemFocused2(item2) {
      return equals(item2, this.activeItem);
    },
    isItemGroup: function isItemGroup3(item2) {
      return isNotEmpty(item2.items);
    },
    getPanelId: function getPanelId(index) {
      return "".concat(this.$id, "_").concat(index);
    },
    getPanelKey: function getPanelKey(index) {
      return this.getPanelId(index);
    },
    getHeaderId: function getHeaderId(index) {
      return "".concat(this.getPanelId(index), "_header");
    },
    getContentId: function getContentId(index) {
      return "".concat(this.getPanelId(index), "_content");
    },
    onHeaderClick: function onHeaderClick(event, item2) {
      if (this.isItemDisabled(item2)) {
        event.preventDefault();
        return;
      }
      if (item2.command) {
        item2.command({
          originalEvent: event,
          item: item2
        });
      }
      this.changeActiveItem(event, item2);
      focus(event.currentTarget);
    },
    onHeaderKeyDown: function onHeaderKeyDown(event, item2) {
      switch (event.code) {
        case "ArrowDown":
          this.onHeaderArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onHeaderArrowUpKey(event);
          break;
        case "Home":
          this.onHeaderHomeKey(event);
          break;
        case "End":
          this.onHeaderEndKey(event);
          break;
        case "Enter":
        case "NumpadEnter":
        case "Space":
          this.onHeaderEnterKey(event, item2);
          break;
      }
    },
    onHeaderArrowDownKey: function onHeaderArrowDownKey(event) {
      var rootList = getAttribute(event.currentTarget, "data-p-active") === true ? findSingle(event.currentTarget.nextElementSibling, '[data-pc-section="rootlist"]') : null;
      rootList ? focus(rootList) : this.updateFocusedHeader({
        originalEvent: event,
        focusOnNext: true
      });
      event.preventDefault();
    },
    onHeaderArrowUpKey: function onHeaderArrowUpKey(event) {
      var prevHeader = this.findPrevHeader(event.currentTarget.parentElement) || this.findLastHeader();
      var rootList = getAttribute(prevHeader, "data-p-active") === true ? findSingle(prevHeader.nextElementSibling, '[data-pc-section="rootlist"]') : null;
      rootList ? focus(rootList) : this.updateFocusedHeader({
        originalEvent: event,
        focusOnNext: false
      });
      event.preventDefault();
    },
    onHeaderHomeKey: function onHeaderHomeKey(event) {
      this.changeFocusedHeader(event, this.findFirstHeader());
      event.preventDefault();
    },
    onHeaderEndKey: function onHeaderEndKey(event) {
      this.changeFocusedHeader(event, this.findLastHeader());
      event.preventDefault();
    },
    onHeaderEnterKey: function onHeaderEnterKey(event, item2) {
      var headerAction = findSingle(event.currentTarget, '[data-pc-section="headerlink"]');
      headerAction ? headerAction.click() : this.onHeaderClick(event, item2);
      event.preventDefault();
    },
    findNextHeader: function findNextHeader(panelElement) {
      var selfCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var nextPanelElement = selfCheck ? panelElement : panelElement.nextElementSibling;
      var headerElement = findSingle(nextPanelElement, '[data-pc-section="header"]');
      return headerElement ? getAttribute(headerElement, "data-p-disabled") ? this.findNextHeader(headerElement.parentElement) : headerElement : null;
    },
    findPrevHeader: function findPrevHeader(panelElement) {
      var selfCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var prevPanelElement = selfCheck ? panelElement : panelElement.previousElementSibling;
      var headerElement = findSingle(prevPanelElement, '[data-pc-section="header"]');
      return headerElement ? getAttribute(headerElement, "data-p-disabled") ? this.findPrevHeader(headerElement.parentElement) : headerElement : null;
    },
    findFirstHeader: function findFirstHeader() {
      return this.findNextHeader(this.$el.firstElementChild, true);
    },
    findLastHeader: function findLastHeader() {
      return this.findPrevHeader(this.$el.lastElementChild, true);
    },
    updateFocusedHeader: function updateFocusedHeader(event) {
      var originalEvent = event.originalEvent, focusOnNext = event.focusOnNext, selfCheck = event.selfCheck;
      var panelElement = originalEvent.currentTarget.closest('[data-pc-section="panel"]');
      var header2 = selfCheck ? findSingle(panelElement, '[data-pc-section="header"]') : focusOnNext ? this.findNextHeader(panelElement) : this.findPrevHeader(panelElement);
      header2 ? this.changeFocusedHeader(originalEvent, header2) : focusOnNext ? this.onHeaderHomeKey(originalEvent) : this.onHeaderEndKey(originalEvent);
    },
    changeActiveItem: function changeActiveItem(event, item2) {
      var selfActive = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      if (!this.isItemDisabled(item2)) {
        var active = this.isItemActive(item2);
        var eventName = !active ? "panel-open" : "panel-close";
        this.activeItem = selfActive ? item2 : this.activeItem && equals(item2, this.activeItem) ? null : item2;
        if (this.multiple) {
          if (this.activeItems.some(function(subItem) {
            return equals(item2, subItem);
          })) {
            this.activeItems = this.activeItems.filter(function(subItem) {
              return !equals(item2, subItem);
            });
          } else {
            this.activeItems.push(item2);
          }
        }
        this.changeExpandedKeys({
          item: item2,
          expanded: !active
        });
        this.$emit(eventName, {
          originalEvent: event,
          item: item2
        });
      }
    },
    changeExpandedKeys: function changeExpandedKeys(_ref) {
      var item2 = _ref.item, _ref$expanded = _ref.expanded, expanded = _ref$expanded === void 0 ? false : _ref$expanded;
      if (this.expandedKeys) {
        var _keys = _objectSpread({}, this.expandedKeys);
        if (expanded) _keys[item2.key] = true;
        else delete _keys[item2.key];
        this.$emit("update:expandedKeys", _keys);
      }
    },
    changeFocusedHeader: function changeFocusedHeader(event, element) {
      element && focus(element);
    },
    getMenuItemProps: function getMenuItemProps2(item2, index) {
      return {
        icon: mergeProps({
          "class": [this.cx("headerIcon"), this.getItemProp(item2, "icon")]
        }, this.getPTOptions("headerIcon", item2, index)),
        label: mergeProps({
          "class": this.cx("headerLabel")
        }, this.getPTOptions("headerLabel", item2, index))
      };
    }
  },
  components: {
    PanelMenuList: script$1,
    ChevronRightIcon: script$5,
    ChevronDownIcon: script$4
  }
};
var _hoisted_1 = ["id"];
var _hoisted_2 = ["id", "tabindex", "aria-label", "aria-expanded", "aria-controls", "aria-disabled", "onClick", "onKeydown", "data-p-active", "data-p-disabled"];
var _hoisted_3 = ["href"];
var _hoisted_4 = ["id", "aria-labelledby"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PanelMenuList = resolveComponent("PanelMenuList");
  return openBlock(), createElementBlock("div", mergeProps({
    id: _ctx.$id,
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, function(item2, index) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.getPanelKey(index)
    }, [$options.isItemVisible(item2) ? (openBlock(), createElementBlock("div", mergeProps({
      key: 0,
      style: $options.getItemProp(item2, "style"),
      "class": [_ctx.cx("panel"), $options.getItemProp(item2, "class")]
    }, {
      ref_for: true
    }, _ctx.ptm("panel")), [createElementVNode("div", mergeProps({
      id: $options.getHeaderId(index),
      "class": [_ctx.cx("header", {
        item: item2
      }), $options.getItemProp(item2, "headerClass")],
      tabindex: $options.isItemDisabled(item2) ? -1 : _ctx.tabindex,
      role: "button",
      "aria-label": $options.getItemLabel(item2),
      "aria-expanded": $options.isItemActive(item2),
      "aria-controls": $options.getContentId(index),
      "aria-disabled": $options.isItemDisabled(item2),
      onClick: function onClick($event) {
        return $options.onHeaderClick($event, item2);
      },
      onKeydown: function onKeydown($event) {
        return $options.onHeaderKeyDown($event, item2);
      }
    }, {
      ref_for: true
    }, $options.getPTOptions("header", item2, index), {
      "data-p-active": $options.isItemActive(item2),
      "data-p-disabled": $options.isItemDisabled(item2)
    }), [createElementVNode("div", mergeProps({
      "class": _ctx.cx("headerContent")
    }, {
      ref_for: true
    }, $options.getPTOptions("headerContent", item2, index)), [!_ctx.$slots.item ? (openBlock(), createElementBlock("a", mergeProps({
      key: 0,
      href: $options.getItemProp(item2, "url"),
      "class": _ctx.cx("headerLink"),
      tabindex: -1
    }, {
      ref_for: true
    }, $options.getPTOptions("headerLink", item2, index)), [$options.getItemProp(item2, "items") ? renderSlot(_ctx.$slots, "submenuicon", {
      key: 0,
      active: $options.isItemActive(item2)
    }, function() {
      return [(openBlock(), createBlock(resolveDynamicComponent($options.isItemActive(item2) ? "ChevronDownIcon" : "ChevronRightIcon"), mergeProps({
        "class": _ctx.cx("submenuIcon")
      }, {
        ref_for: true
      }, $options.getPTOptions("submenuIcon", item2, index)), null, 16, ["class"]))];
    }) : createCommentVNode("", true), _ctx.$slots.headericon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.headericon), {
      key: 1,
      item: item2,
      "class": normalizeClass([_ctx.cx("headerIcon"), $options.getItemProp(item2, "icon")])
    }, null, 8, ["item", "class"])) : $options.getItemProp(item2, "icon") ? (openBlock(), createElementBlock("span", mergeProps({
      key: 2,
      "class": [_ctx.cx("headerIcon"), $options.getItemProp(item2, "icon")]
    }, {
      ref_for: true
    }, $options.getPTOptions("headerIcon", item2, index)), null, 16)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
      "class": _ctx.cx("headerLabel")
    }, {
      ref_for: true
    }, $options.getPTOptions("headerLabel", item2, index)), toDisplayString($options.getItemLabel(item2)), 17)], 16, _hoisted_3)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.item), {
      key: 1,
      item: item2,
      root: true,
      active: $options.isItemActive(item2),
      hasSubmenu: $options.isItemGroup(item2),
      label: $options.getItemLabel(item2),
      props: $options.getMenuItemProps(item2, index)
    }, null, 8, ["item", "active", "hasSubmenu", "label", "props"]))], 16)], 16, _hoisted_2), createVNode(Transition, mergeProps({
      name: "p-toggleable-content"
    }, {
      ref_for: true
    }, _ctx.ptm("transition")), {
      "default": withCtx(function() {
        return [withDirectives(createElementVNode("div", mergeProps({
          id: $options.getContentId(index),
          "class": _ctx.cx("contentContainer"),
          role: "region",
          "aria-labelledby": $options.getHeaderId(index)
        }, {
          ref_for: true
        }, _ctx.ptm("contentContainer")), [$options.getItemProp(item2, "items") ? (openBlock(), createElementBlock("div", mergeProps({
          key: 0,
          "class": _ctx.cx("content")
        }, {
          ref_for: true
        }, _ctx.ptm("content")), [createVNode(_component_PanelMenuList, {
          panelId: $options.getPanelId(index),
          items: $options.getItemProp(item2, "items"),
          templates: _ctx.$slots,
          expandedKeys: _ctx.expandedKeys,
          onItemToggle: $options.changeExpandedKeys,
          onHeaderFocus: $options.updateFocusedHeader,
          pt: _ctx.pt,
          unstyled: _ctx.unstyled
        }, null, 8, ["panelId", "items", "templates", "expandedKeys", "onItemToggle", "onHeaderFocus", "pt", "unstyled"])], 16)) : createCommentVNode("", true)], 16, _hoisted_4), [[vShow, $options.isItemActive(item2)]])];
      }),
      _: 2
    }, 1040)], 16)) : createCommentVNode("", true)], 64);
  }), 128))], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-BAcDHjWp.mjs.map
