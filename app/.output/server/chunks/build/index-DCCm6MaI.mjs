import { findSingle, isTouchDevice, absolutePosition, getOuterWidth, addStyle, focus, nestedPosition } from '@primeuix/utils/dom';
import { isNotEmpty, findLastIndex, isEmpty, isPrintableCharacter, resolve } from '@primeuix/utils/object';
import { ZIndex } from '@primeuix/utils/zindex';
import { C as ConnectedOverlayScrollHandler } from './index-UnQD5FIJ.mjs';
import { O as OverlayEventBus } from './index-rAVNvoJo.mjs';
import { s as script$3 } from './index-D21vFaAL.mjs';
import { s as script$5 } from './index-f6-L4oOs.mjs';
import { style } from '@primeuix/styles/tieredmenu';
import { B as BaseStyle } from './server.mjs';
import { s as script$4 } from './index-DbtuAreI.mjs';
import { R as Ripple } from './index-2dA4pXcI.mjs';
import { mergeProps, resolveComponent, resolveDirective, createBlock, openBlock, Transition, withCtx, createElementBlock, createCommentVNode, Fragment, renderList, createElementVNode, withDirectives, resolveDynamicComponent, normalizeClass, toDisplayString, createVNode, renderSlot } from 'vue';
import '@primeuix/utils/eventbus';
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
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
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
import './index-DpRrGZTR.mjs';
import '@primeuix/utils/uuid';

var inlineStyles = {
  submenu: function submenu(_ref) {
    var instance = _ref.instance, processedItem = _ref.processedItem;
    return {
      display: instance.isItemActive(processedItem) ? "flex" : "none"
    };
  }
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props, instance = _ref2.instance;
    return ["p-tieredmenu p-component", {
      "p-tieredmenu-overlay": props.popup,
      "p-tieredmenu-mobile": instance.queryMatches
    }];
  },
  start: "p-tieredmenu-start",
  rootList: "p-tieredmenu-root-list",
  item: function item(_ref3) {
    var instance = _ref3.instance, processedItem = _ref3.processedItem;
    return ["p-tieredmenu-item", {
      "p-tieredmenu-item-active": instance.isItemActive(processedItem),
      "p-focus": instance.isItemFocused(processedItem),
      "p-disabled": instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: "p-tieredmenu-item-content",
  itemLink: "p-tieredmenu-item-link",
  itemIcon: "p-tieredmenu-item-icon",
  itemLabel: "p-tieredmenu-item-label",
  submenuIcon: "p-tieredmenu-submenu-icon",
  submenu: "p-tieredmenu-submenu",
  separator: "p-tieredmenu-separator",
  end: "p-tieredmenu-end"
};
var TieredMenuStyle = BaseStyle.extend({
  name: "tieredmenu",
  style,
  classes,
  inlineStyles
});
var script$2 = {
  name: "BaseTieredMenu",
  "extends": script$5,
  props: {
    popup: {
      type: Boolean,
      "default": false
    },
    model: {
      type: Array,
      "default": null
    },
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    breakpoint: {
      type: String,
      "default": "960px"
    },
    autoZIndex: {
      type: Boolean,
      "default": true
    },
    baseZIndex: {
      type: Number,
      "default": 0
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    ariaLabelledby: {
      type: String,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    }
  },
  style: TieredMenuStyle,
  provide: function provide() {
    return {
      $pcTieredMenu: this,
      $parentInstance: this
    };
  }
};
var script$1 = {
  name: "TieredMenuSub",
  hostName: "TieredMenu",
  "extends": script$5,
  emits: ["item-click", "item-mouseenter", "item-mousemove"],
  container: null,
  props: {
    menuId: {
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
    visible: {
      type: Boolean,
      "default": false
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
      "default": 0
    }
  },
  methods: {
    getItemId: function getItemId(processedItem) {
      return "".concat(this.menuId, "_").concat(processedItem.key);
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
    getItemLabelId: function getItemLabelId(processedItem) {
      return "".concat(this.menuId, "_").concat(processedItem.key, "_label");
    },
    getPTOptions: function getPTOptions(processedItem, index, key) {
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
    onEnter: function onEnter() {
      nestedPosition(this.container, this.level);
    },
    onItemClick: function onItemClick(event, processedItem) {
      this.getItemProp(processedItem, "command", {
        originalEvent: event,
        item: processedItem.item
      });
      this.$emit("item-click", {
        originalEvent: event,
        processedItem,
        isFocus: true
      });
    },
    onItemMouseEnter: function onItemMouseEnter(event, processedItem) {
      this.$emit("item-mouseenter", {
        originalEvent: event,
        processedItem
      });
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
        }, this.getPTOptions(processedItem, index, "itemLink")),
        icon: mergeProps({
          "class": [this.cx("itemIcon"), this.getItemProp(processedItem, "icon")]
        }, this.getPTOptions(processedItem, index, "itemIcon")),
        label: mergeProps({
          "class": this.cx("itemLabel")
        }, this.getPTOptions(processedItem, index, "itemLabel")),
        submenuicon: mergeProps({
          "class": this.cx("submenuIcon")
        }, this.getPTOptions(processedItem, index, "submenuIcon"))
      };
    },
    containerRef: function containerRef(el) {
      this.container = el;
    }
  },
  components: {
    AngleRightIcon: script$4
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1$1 = ["tabindex"];
var _hoisted_2 = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"];
var _hoisted_3 = ["onClick", "onMouseenter", "onMousemove"];
var _hoisted_4 = ["href", "target"];
var _hoisted_5 = ["id"];
var _hoisted_6 = ["id"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_AngleRightIcon = resolveComponent("AngleRightIcon");
  var _component_TieredMenuSub = resolveComponent("TieredMenuSub", true);
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createBlock(Transition, mergeProps({
    name: "p-tieredmenu",
    onEnter: $options.onEnter
  }, _ctx.ptm("menu.transition")), {
    "default": withCtx(function() {
      return [($props.level === 0 ? true : $props.visible) ? (openBlock(), createElementBlock("ul", {
        key: 0,
        ref: $options.containerRef,
        tabindex: $props.tabindex
      }, [(openBlock(true), createElementBlock(Fragment, null, renderList($props.items, function(processedItem, index) {
        return openBlock(), createElementBlock(Fragment, {
          key: $options.getItemKey(processedItem)
        }, [$options.isItemVisible(processedItem) && !$options.getItemProp(processedItem, "separator") ? (openBlock(), createElementBlock("li", mergeProps({
          key: 0,
          id: $options.getItemId(processedItem),
          style: $options.getItemProp(processedItem, "style"),
          "class": [_ctx.cx("item", {
            processedItem
          }), $options.getItemProp(processedItem, "class")],
          role: "menuitem",
          "aria-label": $options.getItemLabel(processedItem),
          "aria-disabled": $options.isItemDisabled(processedItem) || void 0,
          "aria-expanded": $options.isItemGroup(processedItem) ? $options.isItemActive(processedItem) : void 0,
          "aria-haspopup": $options.isItemGroup(processedItem) && !$options.getItemProp(processedItem, "to") ? "menu" : void 0,
          "aria-level": $props.level + 1,
          "aria-setsize": $options.getAriaSetSize(),
          "aria-posinset": $options.getAriaPosInset(index)
        }, {
          ref_for: true
        }, $options.getPTOptions(processedItem, index, "item"), {
          "data-p-active": $options.isItemActive(processedItem),
          "data-p-focused": $options.isItemFocused(processedItem),
          "data-p-disabled": $options.isItemDisabled(processedItem)
        }), [createElementVNode("div", mergeProps({
          "class": _ctx.cx("itemContent"),
          onClick: function onClick($event) {
            return $options.onItemClick($event, processedItem);
          },
          onMouseenter: function onMouseenter($event) {
            return $options.onItemMouseEnter($event, processedItem);
          },
          onMousemove: function onMousemove($event) {
            return $options.onItemMouseMove($event, processedItem);
          }
        }, {
          ref_for: true
        }, $options.getPTOptions(processedItem, index, "itemContent")), [!$props.templates.item ? withDirectives((openBlock(), createElementBlock("a", mergeProps({
          key: 0,
          href: $options.getItemProp(processedItem, "url"),
          "class": _ctx.cx("itemLink"),
          target: $options.getItemProp(processedItem, "target"),
          tabindex: "-1"
        }, {
          ref_for: true
        }, $options.getPTOptions(processedItem, index, "itemLink")), [$props.templates.itemicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.itemicon), {
          key: 0,
          item: processedItem.item,
          "class": normalizeClass(_ctx.cx("itemIcon"))
        }, null, 8, ["item", "class"])) : $options.getItemProp(processedItem, "icon") ? (openBlock(), createElementBlock("span", mergeProps({
          key: 1,
          "class": [_ctx.cx("itemIcon"), $options.getItemProp(processedItem, "icon")]
        }, {
          ref_for: true
        }, $options.getPTOptions(processedItem, index, "itemIcon")), null, 16)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
          id: $options.getItemLabelId(processedItem),
          "class": _ctx.cx("itemLabel")
        }, {
          ref_for: true
        }, $options.getPTOptions(processedItem, index, "itemLabel")), toDisplayString($options.getItemLabel(processedItem)), 17, _hoisted_5), $options.getItemProp(processedItem, "items") ? (openBlock(), createElementBlock(Fragment, {
          key: 2
        }, [$props.templates.submenuicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.submenuicon), mergeProps({
          key: 0,
          "class": _ctx.cx("submenuIcon"),
          active: $options.isItemActive(processedItem)
        }, {
          ref_for: true
        }, $options.getPTOptions(processedItem, index, "submenuIcon")), null, 16, ["class", "active"])) : (openBlock(), createBlock(_component_AngleRightIcon, mergeProps({
          key: 1,
          "class": _ctx.cx("submenuIcon")
        }, {
          ref_for: true
        }, $options.getPTOptions(processedItem, index, "submenuIcon")), null, 16, ["class"]))], 64)) : createCommentVNode("", true)], 16, _hoisted_4)), [[_directive_ripple]]) : (openBlock(), createBlock(resolveDynamicComponent($props.templates.item), {
          key: 1,
          item: processedItem.item,
          hasSubmenu: $options.getItemProp(processedItem, "items"),
          label: $options.getItemLabel(processedItem),
          props: $options.getMenuItemProps(processedItem, index)
        }, null, 8, ["item", "hasSubmenu", "label", "props"]))], 16, _hoisted_3), $options.isItemVisible(processedItem) && $options.isItemGroup(processedItem) ? (openBlock(), createBlock(_component_TieredMenuSub, mergeProps({
          key: 0,
          id: $options.getItemId(processedItem) + "_list",
          "class": _ctx.cx("submenu"),
          style: _ctx.sx("submenu", true, {
            processedItem
          }),
          "aria-labelledby": $options.getItemLabelId(processedItem),
          role: "menu",
          menuId: $props.menuId,
          focusedItemId: $props.focusedItemId,
          items: processedItem.items,
          templates: $props.templates,
          activeItemPath: $props.activeItemPath,
          level: $props.level + 1,
          visible: $options.isItemActive(processedItem) && $options.isItemGroup(processedItem),
          pt: _ctx.pt,
          unstyled: _ctx.unstyled,
          onItemClick: _cache[0] || (_cache[0] = function($event) {
            return _ctx.$emit("item-click", $event);
          }),
          onItemMouseenter: _cache[1] || (_cache[1] = function($event) {
            return _ctx.$emit("item-mouseenter", $event);
          }),
          onItemMousemove: _cache[2] || (_cache[2] = function($event) {
            return _ctx.$emit("item-mousemove", $event);
          })
        }, {
          ref_for: true
        }, _ctx.ptm("submenu")), null, 16, ["id", "class", "style", "aria-labelledby", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "level", "visible", "pt", "unstyled"])) : createCommentVNode("", true)], 16, _hoisted_2)) : createCommentVNode("", true), $options.isItemVisible(processedItem) && $options.getItemProp(processedItem, "separator") ? (openBlock(), createElementBlock("li", mergeProps({
          key: 1,
          id: $options.getItemId(processedItem),
          style: $options.getItemProp(processedItem, "style"),
          "class": [_ctx.cx("separator"), $options.getItemProp(processedItem, "class")],
          role: "separator"
        }, {
          ref_for: true
        }, _ctx.ptm("separator")), null, 16, _hoisted_6)) : createCommentVNode("", true)], 64);
      }), 128))], 8, _hoisted_1$1)) : createCommentVNode("", true)];
    }),
    _: 1
  }, 16, ["onEnter"]);
}
script$1.render = render$1;
var script = {
  name: "TieredMenu",
  "extends": script$2,
  inheritAttrs: false,
  emits: ["focus", "blur", "before-show", "before-hide", "hide", "show"],
  outsideClickListener: null,
  matchMediaListener: null,
  scrollHandler: null,
  resizeListener: null,
  target: null,
  container: null,
  menubar: null,
  searchTimeout: null,
  searchValue: null,
  data: function data() {
    return {
      focused: false,
      focusedItemInfo: {
        index: -1,
        level: 0,
        parentKey: ""
      },
      activeItemPath: [],
      visible: !this.popup,
      submenuVisible: false,
      dirty: false,
      query: null,
      queryMatches: false
    };
  },
  watch: {
    activeItemPath: function activeItemPath(newPath) {
      if (!this.popup) {
        if (isNotEmpty(newPath)) {
          this.bindOutsideClickListener();
          this.bindResizeListener();
        } else {
          this.unbindOutsideClickListener();
          this.unbindResizeListener();
        }
      }
    }
  },
  mounted: function mounted() {
    this.bindMatchMediaListener();
  },
  beforeUnmount: function beforeUnmount() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    this.unbindMatchMediaListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.container && this.autoZIndex) {
      ZIndex.clear(this.container);
    }
    this.target = null;
    this.container = null;
  },
  methods: {
    getItemProp: function getItemProp2(item2, name) {
      return item2 ? resolve(item2[name]) : void 0;
    },
    getItemLabel: function getItemLabel2(item2) {
      return this.getItemProp(item2, "label");
    },
    isItemDisabled: function isItemDisabled2(item2) {
      return this.getItemProp(item2, "disabled");
    },
    isItemVisible: function isItemVisible2(item2) {
      return this.getItemProp(item2, "visible") !== false;
    },
    isItemGroup: function isItemGroup2(item2) {
      return isNotEmpty(this.getItemProp(item2, "items"));
    },
    isItemSeparator: function isItemSeparator(item2) {
      return this.getItemProp(item2, "separator");
    },
    getProccessedItemLabel: function getProccessedItemLabel(processedItem) {
      return processedItem ? this.getItemLabel(processedItem.item) : void 0;
    },
    isProccessedItemGroup: function isProccessedItemGroup(processedItem) {
      return processedItem && isNotEmpty(processedItem.items);
    },
    toggle: function toggle(event) {
      this.visible ? this.hide(event, true) : this.show(event);
    },
    show: function show(event, isFocus) {
      if (this.popup) {
        this.$emit("before-show");
        this.visible = true;
        this.target = this.target || event.currentTarget;
        this.relatedTarget = event.relatedTarget || null;
      }
      isFocus && focus(this.menubar);
    },
    hide: function hide(event, isFocus) {
      if (this.popup) {
        this.$emit("before-hide");
        this.visible = false;
      }
      this.activeItemPath = [];
      this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      };
      isFocus && focus(this.relatedTarget || this.target || this.menubar);
      this.dirty = false;
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      if (!this.popup) {
        this.focusedItemInfo = this.focusedItemInfo.index !== -1 ? this.focusedItemInfo : {
          index: this.findFirstFocusedItemIndex(),
          level: 0,
          parentKey: ""
        };
      }
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      };
      this.searchValue = "";
      this.dirty = false;
      this.$emit("blur", event);
    },
    onKeyDown: function onKeyDown(event) {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
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
          this.onEscapeKey(event);
          break;
        case "Tab":
          this.onTabKey(event);
          break;
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
    onItemChange: function onItemChange(event, type) {
      var processedItem = event.processedItem, isFocus = event.isFocus;
      if (isEmpty(processedItem)) return;
      var index = processedItem.index, key = processedItem.key, level = processedItem.level, parentKey = processedItem.parentKey, items = processedItem.items;
      var grouped = isNotEmpty(items);
      var activeItemPath2 = this.activeItemPath.filter(function(p) {
        return p.parentKey !== parentKey && p.parentKey !== key;
      });
      if (grouped) {
        activeItemPath2.push(processedItem);
        this.submenuVisible = true;
      }
      this.focusedItemInfo = {
        index,
        level,
        parentKey
      };
      grouped && (this.dirty = true);
      isFocus && focus(this.menubar);
      if (type === "hover" && this.queryMatches) {
        return;
      }
      this.activeItemPath = activeItemPath2;
    },
    onOverlayClick: function onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.target
      });
    },
    onItemClick: function onItemClick2(event) {
      var originalEvent = event.originalEvent, processedItem = event.processedItem;
      var grouped = this.isProccessedItemGroup(processedItem);
      var root2 = isEmpty(processedItem.parent);
      var selected = this.isSelected(processedItem);
      if (selected) {
        var index = processedItem.index, key = processedItem.key, level = processedItem.level, parentKey = processedItem.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(p) {
          return key !== p.key && key.startsWith(p.key);
        });
        this.focusedItemInfo = {
          index,
          level,
          parentKey
        };
        this.dirty = !root2;
        focus(this.menubar);
      } else {
        if (grouped) {
          this.onItemChange(event);
        } else {
          var rootProcessedItem = root2 ? processedItem : this.activeItemPath.find(function(p) {
            return p.parentKey === "";
          });
          this.hide(originalEvent);
          this.changeFocusedItemIndex(originalEvent, rootProcessedItem ? rootProcessedItem.index : -1);
          focus(this.menubar);
        }
      }
    },
    onItemMouseEnter: function onItemMouseEnter2(event) {
      if (this.dirty) {
        this.onItemChange(event, "hover");
      }
    },
    onItemMouseMove: function onItemMouseMove2(event) {
      if (this.focused) {
        this.changeFocusedItemIndex(event, event.processedItem.index);
      }
    },
    onArrowDownKey: function onArrowDownKey(event) {
      var itemIndex = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
      this.changeFocusedItemIndex(event, itemIndex);
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event) {
      if (event.altKey) {
        if (this.focusedItemInfo.index !== -1) {
          var processedItem = this.visibleItems[this.focusedItemInfo.index];
          var grouped = this.isProccessedItemGroup(processedItem);
          !grouped && this.onItemChange({
            originalEvent: event,
            processedItem
          });
        }
        this.popup && this.hide(event, true);
        event.preventDefault();
      } else {
        var itemIndex = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(event, itemIndex);
        event.preventDefault();
      }
    },
    onArrowLeftKey: function onArrowLeftKey(event) {
      var _this = this;
      var processedItem = this.visibleItems[this.focusedItemInfo.index];
      var parentItem = this.activeItemPath.find(function(p) {
        return p.key === processedItem.parentKey;
      });
      var root2 = isEmpty(processedItem.parent);
      if (!root2) {
        this.focusedItemInfo = {
          index: -1,
          parentKey: parentItem ? parentItem.parentKey : ""
        };
        this.searchValue = "";
        this.onArrowDownKey(event);
      }
      this.activeItemPath = this.activeItemPath.filter(function(p) {
        return p.parentKey !== _this.focusedItemInfo.parentKey;
      });
      event.preventDefault();
    },
    onArrowRightKey: function onArrowRightKey(event) {
      var processedItem = this.visibleItems[this.focusedItemInfo.index];
      var grouped = this.isProccessedItemGroup(processedItem);
      if (grouped) {
        this.onItemChange({
          originalEvent: event,
          processedItem
        });
        this.focusedItemInfo = {
          index: -1,
          parentKey: processedItem.key
        };
        this.searchValue = "";
        this.onArrowDownKey(event);
      }
      event.preventDefault();
    },
    onHomeKey: function onHomeKey(event) {
      this.changeFocusedItemIndex(event, this.findFirstItemIndex());
      event.preventDefault();
    },
    onEndKey: function onEndKey(event) {
      this.changeFocusedItemIndex(event, this.findLastItemIndex());
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event) {
      if (this.focusedItemInfo.index !== -1) {
        var element = findSingle(this.menubar, 'li[id="'.concat("".concat(this.focusedItemId), '"]'));
        var anchorElement = element && findSingle(element, '[data-pc-section="itemlink"]');
        anchorElement ? anchorElement.click() : element && element.click();
        if (!this.popup) {
          var processedItem = this.visibleItems[this.focusedItemInfo.index];
          var grouped = this.isProccessedItemGroup(processedItem);
          !grouped && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex());
        }
      }
      event.preventDefault();
    },
    onSpaceKey: function onSpaceKey(event) {
      this.onEnterKey(event);
    },
    onEscapeKey: function onEscapeKey(event) {
      if (this.popup || this.focusedItemInfo.level !== 0) {
        var _focusedItemInfo = this.focusedItemInfo;
        this.hide(event, false);
        this.focusedItemInfo = {
          index: Number(_focusedItemInfo.parentKey.split("_")[0]),
          level: 0,
          parentKey: ""
        };
        this.popup && focus(this.target);
      }
      event.preventDefault();
    },
    onTabKey: function onTabKey(event) {
      if (this.focusedItemInfo.index !== -1) {
        var processedItem = this.visibleItems[this.focusedItemInfo.index];
        var grouped = this.isProccessedItemGroup(processedItem);
        !grouped && this.onItemChange({
          originalEvent: event,
          processedItem
        });
      }
      this.hide();
    },
    onEnter: function onEnter2(el) {
      if (this.autoZIndex) {
        ZIndex.set("menu", el, this.baseZIndex + this.$primevue.config.zIndex.menu);
      }
      addStyle(el, {
        position: "absolute",
        top: "0"
      });
      this.alignOverlay();
      focus(this.menubar);
      this.scrollInView();
    },
    onAfterEnter: function onAfterEnter() {
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      this.$emit("show");
    },
    onLeave: function onLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.$emit("hide");
      this.container = null;
      this.dirty = false;
    },
    onAfterLeave: function onAfterLeave(el) {
      if (this.autoZIndex) {
        ZIndex.clear(el);
      }
    },
    alignOverlay: function alignOverlay() {
      absolutePosition(this.container, this.target);
      var targetWidth = getOuterWidth(this.target);
      if (targetWidth > getOuterWidth(this.container)) {
        this.container.style.minWidth = getOuterWidth(this.target) + "px";
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this2 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          var isOutsideContainer = _this2.container && !_this2.container.contains(event.target);
          var isOutsideTarget = _this2.popup ? !(_this2.target && (_this2.target === event.target || _this2.target.contains(event.target))) : true;
          if (isOutsideContainer && isOutsideTarget) {
            _this2.hide();
          }
        };
        (void 0).addEventListener("click", this.outsideClickListener, true);
      }
    },
    unbindOutsideClickListener: function unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        (void 0).removeEventListener("click", this.outsideClickListener, true);
        this.outsideClickListener = null;
      }
    },
    bindScrollListener: function bindScrollListener() {
      var _this3 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, function(event) {
          _this3.hide(event, true);
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
        this.resizeListener = function(event) {
          if (!isTouchDevice()) {
            _this4.hide(event, true);
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
    },
    bindMatchMediaListener: function bindMatchMediaListener() {
      var _this5 = this;
      if (!this.matchMediaListener) {
        var query = matchMedia("(max-width: ".concat(this.breakpoint, ")"));
        this.query = query;
        this.queryMatches = query.matches;
        this.matchMediaListener = function() {
          _this5.queryMatches = query.matches;
        };
        this.query.addEventListener("change", this.matchMediaListener);
      }
    },
    unbindMatchMediaListener: function unbindMatchMediaListener() {
      if (this.matchMediaListener) {
        this.query.removeEventListener("change", this.matchMediaListener);
        this.matchMediaListener = null;
      }
    },
    isItemMatched: function isItemMatched(processedItem) {
      var _this$getProccessedIt;
      return this.isValidItem(processedItem) && ((_this$getProccessedIt = this.getProccessedItemLabel(processedItem)) === null || _this$getProccessedIt === void 0 ? void 0 : _this$getProccessedIt.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()));
    },
    isValidItem: function isValidItem(processedItem) {
      return !!processedItem && !this.isItemDisabled(processedItem.item) && !this.isItemSeparator(processedItem.item) && this.isItemVisible(processedItem.item);
    },
    isValidSelectedItem: function isValidSelectedItem(processedItem) {
      return this.isValidItem(processedItem) && this.isSelected(processedItem);
    },
    isSelected: function isSelected(processedItem) {
      return this.activeItemPath.some(function(p) {
        return p.key === processedItem.key;
      });
    },
    findFirstItemIndex: function findFirstItemIndex() {
      var _this6 = this;
      return this.visibleItems.findIndex(function(processedItem) {
        return _this6.isValidItem(processedItem);
      });
    },
    findLastItemIndex: function findLastItemIndex() {
      var _this7 = this;
      return findLastIndex(this.visibleItems, function(processedItem) {
        return _this7.isValidItem(processedItem);
      });
    },
    findNextItemIndex: function findNextItemIndex(index) {
      var _this8 = this;
      var matchedItemIndex = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).findIndex(function(processedItem) {
        return _this8.isValidItem(processedItem);
      }) : -1;
      return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
    },
    findPrevItemIndex: function findPrevItemIndex(index) {
      var _this9 = this;
      var matchedItemIndex = index > 0 ? findLastIndex(this.visibleItems.slice(0, index), function(processedItem) {
        return _this9.isValidItem(processedItem);
      }) : -1;
      return matchedItemIndex > -1 ? matchedItemIndex : index;
    },
    findSelectedItemIndex: function findSelectedItemIndex() {
      var _this0 = this;
      return this.visibleItems.findIndex(function(processedItem) {
        return _this0.isValidSelectedItem(processedItem);
      });
    },
    findFirstFocusedItemIndex: function findFirstFocusedItemIndex() {
      var selectedIndex = this.findSelectedItemIndex();
      return selectedIndex < 0 ? this.findFirstItemIndex() : selectedIndex;
    },
    findLastFocusedItemIndex: function findLastFocusedItemIndex() {
      var selectedIndex = this.findSelectedItemIndex();
      return selectedIndex < 0 ? this.findLastItemIndex() : selectedIndex;
    },
    searchItems: function searchItems(event, _char) {
      var _this1 = this;
      this.searchValue = (this.searchValue || "") + _char;
      var itemIndex = -1;
      var matched = false;
      if (this.focusedItemInfo.index !== -1) {
        itemIndex = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(processedItem) {
          return _this1.isItemMatched(processedItem);
        });
        itemIndex = itemIndex === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(processedItem) {
          return _this1.isItemMatched(processedItem);
        }) : itemIndex + this.focusedItemInfo.index;
      } else {
        itemIndex = this.visibleItems.findIndex(function(processedItem) {
          return _this1.isItemMatched(processedItem);
        });
      }
      if (itemIndex !== -1) {
        matched = true;
      }
      if (itemIndex === -1 && this.focusedItemInfo.index === -1) {
        itemIndex = this.findFirstFocusedItemIndex();
      }
      if (itemIndex !== -1) {
        this.changeFocusedItemIndex(event, itemIndex);
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(function() {
        _this1.searchValue = "";
        _this1.searchTimeout = null;
      }, 500);
      return matched;
    },
    changeFocusedItemIndex: function changeFocusedItemIndex(event, index) {
      if (this.focusedItemInfo.index !== index) {
        this.focusedItemInfo.index = index;
        this.scrollInView();
      }
    },
    scrollInView: function scrollInView() {
      var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
      var id = index !== -1 ? "".concat(this.$id, "_").concat(index) : this.focusedItemId;
      var element = findSingle(this.menubar, 'li[id="'.concat(id, '"]'));
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "start"
        });
      }
    },
    createProcessedItems: function createProcessedItems(items) {
      var _this10 = this;
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
        newItem["items"] = _this10.createProcessedItems(item2.items, level + 1, newItem, key);
        processedItems2.push(newItem);
      });
      return processedItems2;
    },
    containerRef: function containerRef2(el) {
      this.container = el;
    },
    menubarRef: function menubarRef(el) {
      this.menubar = el ? el.$el : void 0;
    }
  },
  computed: {
    processedItems: function processedItems() {
      return this.createProcessedItems(this.model || []);
    },
    visibleItems: function visibleItems() {
      var _this11 = this;
      var processedItem = this.activeItemPath.find(function(p) {
        return p.key === _this11.focusedItemInfo.parentKey;
      });
      return processedItem ? processedItem.items : this.processedItems;
    },
    focusedItemId: function focusedItemId() {
      return this.focusedItemInfo.index !== -1 ? "".concat(this.$id).concat(isNotEmpty(this.focusedItemInfo.parentKey) ? "_" + this.focusedItemInfo.parentKey : "", "_").concat(this.focusedItemInfo.index) : null;
    }
  },
  components: {
    TieredMenuSub: script$1,
    Portal: script$3
  }
};
var _hoisted_1 = ["id"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_TieredMenuSub = resolveComponent("TieredMenuSub");
  var _component_Portal = resolveComponent("Portal");
  return openBlock(), createBlock(_component_Portal, {
    appendTo: _ctx.appendTo,
    disabled: !_ctx.popup
  }, {
    "default": withCtx(function() {
      return [createVNode(Transition, mergeProps({
        name: "p-connected-overlay",
        onEnter: $options.onEnter,
        onAfterEnter: $options.onAfterEnter,
        onLeave: $options.onLeave,
        onAfterLeave: $options.onAfterLeave
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          return [$data.visible ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.containerRef,
            id: _ctx.$id,
            "class": _ctx.cx("root"),
            onClick: _cache[0] || (_cache[0] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            })
          }, _ctx.ptmi("root")), [_ctx.$slots.start ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            "class": _ctx.cx("start")
          }, _ctx.ptm("start")), [renderSlot(_ctx.$slots, "start")], 16)) : createCommentVNode("", true), createVNode(_component_TieredMenuSub, mergeProps({
            ref: $options.menubarRef,
            id: _ctx.$id + "_list",
            "class": _ctx.cx("rootList"),
            tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
            role: "menubar",
            "aria-label": _ctx.ariaLabel,
            "aria-labelledby": _ctx.ariaLabelledby,
            "aria-disabled": _ctx.disabled || void 0,
            "aria-orientation": "vertical",
            "aria-activedescendant": $data.focused ? $options.focusedItemId : void 0,
            menuId: _ctx.$id,
            focusedItemId: $data.focused ? $options.focusedItemId : void 0,
            items: $options.processedItems,
            templates: _ctx.$slots,
            activeItemPath: $data.activeItemPath,
            level: 0,
            visible: $data.submenuVisible,
            pt: _ctx.pt,
            unstyled: _ctx.unstyled,
            onFocus: $options.onFocus,
            onBlur: $options.onBlur,
            onKeydown: $options.onKeyDown,
            onItemClick: $options.onItemClick,
            onItemMouseenter: $options.onItemMouseEnter,
            onItemMousemove: $options.onItemMouseMove
          }, _ctx.ptm("rootList")), null, 16, ["id", "class", "tabindex", "aria-label", "aria-labelledby", "aria-disabled", "aria-activedescendant", "menuId", "focusedItemId", "items", "templates", "activeItemPath", "visible", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter", "onItemMousemove"]), _ctx.$slots.end ? (openBlock(), createElementBlock("div", mergeProps({
            key: 1,
            "class": _ctx.cx("end")
          }, _ctx.ptm("end")), [renderSlot(_ctx.$slots, "end")], 16)) : createCommentVNode("", true)], 16, _hoisted_1)) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo", "disabled"]);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-DCCm6MaI.mjs.map
