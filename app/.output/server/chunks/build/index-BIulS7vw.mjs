import { findSingle, isTouchDevice, focus } from '@primeuix/utils/dom';
import { isNotEmpty, findLastIndex, isEmpty, isPrintableCharacter, resolve } from '@primeuix/utils/object';
import { ZIndex } from '@primeuix/utils/zindex';
import { s as script$3 } from './index-0ZeTYJt9.mjs';
import { v as Ripple, g as script$6, B as BaseStyle } from './server.mjs';
import { style } from '@primeuix/styles/megamenu';
import { s as script$4 } from './index-CW9hLaXm.mjs';
import { s as script$5 } from './index-CHk-GMfV.mjs';
import { mergeProps, resolveComponent, resolveDirective, createElementBlock, openBlock, createCommentVNode, toDisplayString, Fragment, renderList, createElementVNode, withDirectives, createBlock, resolveDynamicComponent, normalizeClass, normalizeStyle, renderSlot, createVNode, normalizeProps, guardReactiveProps } from 'vue';
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
import '@primeuix/utils/uuid';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

var inlineStyles = {
  rootList: function rootList(_ref) {
    var props = _ref.props;
    return {
      "max-height": props.scrollHeight,
      overflow: "auto"
    };
  }
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance;
    return ["p-megamenu p-component", {
      "p-megamenu-mobile": instance.queryMatches,
      "p-megamenu-mobile-active": instance.mobileActive,
      "p-megamenu-horizontal": instance.horizontal,
      "p-megamenu-vertical": instance.vertical
    }];
  },
  start: "p-megamenu-start",
  button: "p-megamenu-button",
  rootList: "p-megamenu-root-list",
  submenuLabel: function submenuLabel(_ref3) {
    var instance = _ref3.instance, processedItem = _ref3.processedItem;
    return ["p-megamenu-submenu-label", {
      "p-disabled": instance.isItemDisabled(processedItem)
    }];
  },
  item: function item(_ref4) {
    var instance = _ref4.instance, processedItem = _ref4.processedItem;
    return ["p-megamenu-item", {
      "p-megamenu-item-active": instance.isItemActive(processedItem),
      "p-focus": instance.isItemFocused(processedItem),
      "p-disabled": instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: "p-megamenu-item-content",
  itemLink: "p-megamenu-item-link",
  itemIcon: "p-megamenu-item-icon",
  itemLabel: "p-megamenu-item-label",
  submenuIcon: "p-megamenu-submenu-icon",
  overlay: "p-megamenu-overlay",
  grid: "p-megamenu-grid",
  column: function column(_ref5) {
    var instance = _ref5.instance, processedItem = _ref5.processedItem;
    var length = instance.isItemGroup(processedItem) ? processedItem.items.length : 0;
    var columnClass;
    if (instance.$parentInstance.queryMatches) columnClass = "p-megamenu-col-12";
    else {
      switch (length) {
        case 2:
          columnClass = "p-megamenu-col-6";
          break;
        case 3:
          columnClass = "p-megamenu-col-4";
          break;
        case 4:
          columnClass = "p-megamenu-col-3";
          break;
        case 6:
          columnClass = "p-megamenu-col-2";
          break;
        default:
          columnClass = "p-megamenu-col-12";
          break;
      }
    }
    return columnClass;
  },
  submenu: "p-megamenu-submenu",
  separator: "p-megamenu-separator",
  end: "p-megamenu-end"
};
var MegaMenuStyle = BaseStyle.extend({
  name: "megamenu",
  style,
  classes,
  inlineStyles
});
var script$2 = {
  name: "BaseMegaMenu",
  "extends": script$6,
  props: {
    model: {
      type: Array,
      "default": null
    },
    orientation: {
      type: String,
      "default": "horizontal"
    },
    breakpoint: {
      type: String,
      "default": "960px"
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    scrollHeight: {
      type: String,
      "default": "20rem"
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
  style: MegaMenuStyle,
  provide: function provide() {
    return {
      $pcMegaMenu: this,
      $parentInstance: this
    };
  }
};
var script$1 = {
  name: "MegaMenuSub",
  hostName: "MegaMenu",
  "extends": script$6,
  emits: ["item-click", "item-mouseenter"],
  props: {
    menuId: {
      type: String,
      "default": null
    },
    focusedItemId: {
      type: String,
      "default": null
    },
    horizontal: {
      type: Boolean,
      "default": false
    },
    submenu: {
      type: Object,
      "default": null
    },
    mobileActive: {
      type: Boolean,
      "default": false
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
    activeItem: {
      type: Object,
      "default": null
    },
    tabindex: {
      type: Number,
      "default": 0
    }
  },
  methods: {
    getSubListId: function getSubListId(processedItem) {
      return "".concat(this.getItemId(processedItem), "_list");
    },
    getSubListKey: function getSubListKey(processedItem) {
      return this.getSubListId(processedItem);
    },
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
      return isNotEmpty(this.activeItem) ? this.activeItem.key === processedItem.key : false;
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
          "class": this.cx("label")
        }, this.getPTOptions(processedItem, index, "label")),
        submenuicon: mergeProps({
          "class": this.cx("submenuIcon")
        }, this.getPTOptions(processedItem, index, "submenuIcon"))
      };
    }
  },
  components: {
    AngleRightIcon: script$5,
    AngleDownIcon: script$4
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1$1 = ["tabindex"];
var _hoisted_2$1 = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"];
var _hoisted_3 = ["onClick", "onMouseenter"];
var _hoisted_4 = ["href", "target"];
var _hoisted_5 = ["id"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_MegaMenuSub = resolveComponent("MegaMenuSub", true);
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("ul", mergeProps({
    "class": $props.level === 0 ? _ctx.cx("rootList") : _ctx.cx("submenu"),
    tabindex: $props.tabindex
  }, $props.level === 0 ? _ctx.ptm("rootList") : _ctx.ptm("submenu")), [$props.submenu ? (openBlock(), createElementBlock("li", mergeProps({
    key: 0,
    "class": [_ctx.cx("submenuLabel", {
      submenu: $props.submenu
    }), $options.getItemProp($props.submenu, "class")],
    style: $options.getItemProp($props.submenu, "style"),
    role: "presentation"
  }, _ctx.ptm("submenuLabel")), toDisplayString($options.getItemLabel($props.submenu)), 17)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList($props.items, function(processedItem, index) {
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
      "class": _ctx.cx("itemLabel")
    }, {
      ref_for: true
    }, $options.getPTOptions(processedItem, index, "itemLabel")), toDisplayString($options.getItemLabel(processedItem)), 17), $options.isItemGroup(processedItem) ? (openBlock(), createElementBlock(Fragment, {
      key: 2
    }, [$props.templates.submenuicon ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.submenuicon), mergeProps({
      key: 0,
      active: $options.isItemActive(processedItem),
      "class": _ctx.cx("submenuIcon")
    }, {
      ref_for: true
    }, $options.getPTOptions(processedItem, index, "submenuIcon")), null, 16, ["active", "class"])) : (openBlock(), createBlock(resolveDynamicComponent($props.horizontal || $props.mobileActive ? "AngleDownIcon" : "AngleRightIcon"), mergeProps({
      key: 1,
      "class": _ctx.cx("submenuIcon")
    }, {
      ref_for: true
    }, $options.getPTOptions(processedItem, index, "submenuIcon")), null, 16, ["class"]))], 64)) : createCommentVNode("", true)], 16, _hoisted_4)), [[_directive_ripple]]) : (openBlock(), createBlock(resolveDynamicComponent($props.templates.item), {
      key: 1,
      item: processedItem.item,
      hasSubmenu: $options.isItemGroup(processedItem),
      label: $options.getItemLabel(processedItem),
      props: $options.getMenuItemProps(processedItem, index)
    }, null, 8, ["item", "hasSubmenu", "label", "props"]))], 16, _hoisted_3), $options.isItemVisible(processedItem) && $options.isItemGroup(processedItem) ? (openBlock(), createElementBlock("div", mergeProps({
      key: 0,
      "class": _ctx.cx("overlay")
    }, {
      ref_for: true
    }, _ctx.ptm("overlay")), [createElementVNode("div", mergeProps({
      "class": _ctx.cx("grid")
    }, {
      ref_for: true
    }, _ctx.ptm("grid")), [(openBlock(true), createElementBlock(Fragment, null, renderList(processedItem.items, function(col) {
      return openBlock(), createElementBlock("div", mergeProps({
        key: $options.getItemKey(col),
        "class": _ctx.cx("column", {
          processedItem
        })
      }, {
        ref_for: true
      }, _ctx.ptm("column")), [(openBlock(true), createElementBlock(Fragment, null, renderList(col, function(submenu) {
        return openBlock(), createBlock(_component_MegaMenuSub, {
          key: $options.getSubListKey(submenu),
          id: $options.getSubListId(submenu),
          style: normalizeStyle(_ctx.sx("submenu", true, {
            processedItem
          })),
          role: "menu",
          menuId: $props.menuId,
          focusedItemId: $props.focusedItemId,
          submenu,
          items: submenu.items,
          templates: $props.templates,
          level: $props.level + 1,
          mobileActive: $props.mobileActive,
          pt: _ctx.pt,
          unstyled: _ctx.unstyled,
          onItemClick: _cache[0] || (_cache[0] = function($event) {
            return _ctx.$emit("item-click", $event);
          }),
          onItemMouseenter: _cache[1] || (_cache[1] = function($event) {
            return _ctx.$emit("item-mouseenter", $event);
          })
        }, null, 8, ["id", "style", "menuId", "focusedItemId", "submenu", "items", "templates", "level", "mobileActive", "pt", "unstyled"]);
      }), 128))], 16);
    }), 128))], 16)], 16)) : createCommentVNode("", true)], 16, _hoisted_2$1)) : createCommentVNode("", true), $options.isItemVisible(processedItem) && $options.getItemProp(processedItem, "separator") ? (openBlock(), createElementBlock("li", mergeProps({
      key: 1,
      id: $options.getItemId(processedItem),
      "class": [_ctx.cx("separator"), $options.getItemProp(processedItem, "class")],
      style: $options.getItemProp(processedItem, "style"),
      role: "separator"
    }, {
      ref_for: true
    }, _ctx.ptm("separator")), null, 16, _hoisted_5)) : createCommentVNode("", true)], 64);
  }), 128))], 16, _hoisted_1$1);
}
script$1.render = render$1;
var script = {
  name: "MegaMenu",
  "extends": script$2,
  inheritAttrs: false,
  emits: ["focus", "blur"],
  outsideClickListener: null,
  resizeListener: null,
  matchMediaListener: null,
  container: null,
  menubar: null,
  searchTimeout: null,
  searchValue: null,
  data: function data() {
    return {
      mobileActive: false,
      focused: false,
      focusedItemInfo: {
        index: -1,
        key: "",
        parentKey: ""
      },
      activeItem: null,
      dirty: false,
      query: null,
      queryMatches: false
    };
  },
  watch: {
    activeItem: function activeItem(newItem) {
      if (isNotEmpty(newItem)) {
        this.bindOutsideClickListener();
        this.bindResizeListener();
      } else {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
      }
    }
  },
  mounted: function mounted() {
    this.bindMatchMediaListener();
  },
  beforeUnmount: function beforeUnmount() {
    this.mobileActive = false;
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    this.unbindMatchMediaListener();
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
      var _this = this;
      if (this.mobileActive) {
        this.mobileActive = false;
        ZIndex.clear(this.menubar);
        this.hide();
      } else {
        this.mobileActive = true;
        ZIndex.set("menu", this.menubar, this.$primevue.config.zIndex.menu);
        setTimeout(function() {
          _this.show();
        }, 1);
      }
      this.bindOutsideClickListener();
      event.preventDefault();
    },
    show: function show() {
      this.focusedItemInfo = {
        index: this.findFirstFocusedItemIndex(),
        level: 0,
        parentKey: ""
      };
      focus(this.menubar);
    },
    hide: function hide(event, isFocus) {
      var _this2 = this;
      if (this.mobileActive) {
        this.mobileActive = false;
        setTimeout(function() {
          focus(_this2.$refs.menubutton, {
            preventScroll: true
          });
        }, 1);
      }
      this.activeItem = null;
      this.focusedItemInfo = {
        index: -1,
        key: "",
        parentKey: ""
      };
      isFocus && focus(this.menubar);
      this.dirty = false;
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      if (this.focusedItemInfo.index === -1) {
        var index = this.findFirstFocusedItemIndex();
        var processedItem = this.findVisibleItem(index);
        this.focusedItemInfo = {
          index,
          key: processedItem.key,
          parentKey: processedItem.parentKey
        };
      }
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.focusedItemInfo = {
        index: -1,
        key: "",
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
    onItemChange: function onItemChange(event) {
      var processedItem = event.processedItem, isFocus = event.isFocus;
      if (isEmpty(processedItem)) return;
      var index = processedItem.index, key = processedItem.key, parentKey = processedItem.parentKey, items = processedItem.items;
      var grouped = isNotEmpty(items);
      grouped && (this.activeItem = processedItem);
      this.focusedItemInfo = {
        index,
        key,
        parentKey
      };
      grouped && (this.dirty = true);
      isFocus && focus(this.menubar);
    },
    onItemClick: function onItemClick2(event) {
      var originalEvent = event.originalEvent, processedItem = event.processedItem;
      var grouped = this.isProccessedItemGroup(processedItem);
      var root2 = isEmpty(processedItem.parent);
      var selected = this.isSelected(processedItem);
      if (selected) {
        var index = processedItem.index, key = processedItem.key, parentKey = processedItem.parentKey;
        this.activeItem = null;
        this.focusedItemInfo = {
          index,
          key,
          parentKey
        };
        this.dirty = !root2;
        if (!this.mobileActive) {
          focus(this.menubar, {
            preventScroll: true
          });
        }
      } else {
        if (grouped) {
          this.onItemChange(event);
        } else {
          this.hide(originalEvent);
        }
      }
    },
    onItemMouseEnter: function onItemMouseEnter2(event) {
      if (!this.mobileActive && this.dirty) {
        this.onItemChange(event);
      }
    },
    menuButtonClick: function menuButtonClick(event) {
      this.toggle(event);
    },
    menuButtonKeydown: function menuButtonKeydown(event) {
      (event.code === "Enter" || event.code === "NumpadEnter" || event.code === "Space") && this.menuButtonClick(event);
    },
    onArrowDownKey: function onArrowDownKey(event) {
      if (this.horizontal) {
        if (isNotEmpty(this.activeItem) && this.activeItem.key === this.focusedItemInfo.key) {
          this.focusedItemInfo = {
            index: -1,
            key: "",
            parentKey: this.activeItem.key
          };
        } else {
          var processedItem = this.findVisibleItem(this.focusedItemInfo.index);
          var grouped = this.isProccessedItemGroup(processedItem);
          if (grouped) {
            this.onItemChange({
              originalEvent: event,
              processedItem
            });
            this.focusedItemInfo = {
              index: -1,
              key: processedItem.key,
              parentKey: processedItem.parentKey
            };
            this.searchValue = "";
          }
        }
      }
      var itemIndex = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
      this.changeFocusedItemInfo(event, itemIndex);
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event) {
      if (event.altKey && this.horizontal) {
        if (this.focusedItemInfo.index !== -1) {
          var processedItem = this.findVisibleItem(this.focusedItemInfo.index);
          var grouped = this.isProccessedItemGroup(processedItem);
          if (!grouped && isNotEmpty(this.activeItem)) {
            if (this.focusedItemInfo.index === 0) {
              this.focusedItemInfo = {
                index: this.activeItem.index,
                key: this.activeItem.key,
                parentKey: this.activeItem.parentKey
              };
              this.activeItem = null;
            } else {
              this.changeFocusedItemInfo(event, this.findFirstItemIndex());
            }
          }
        }
        event.preventDefault();
      } else {
        var itemIndex = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemInfo(event, itemIndex);
        event.preventDefault();
      }
    },
    onArrowLeftKey: function onArrowLeftKey(event) {
      var processedItem = this.findVisibleItem(this.focusedItemInfo.index);
      var grouped = this.isProccessedItemGroup(processedItem);
      if (grouped) {
        if (this.horizontal) {
          var itemIndex = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
          this.changeFocusedItemInfo(event, itemIndex);
        }
      } else {
        if (this.vertical && isNotEmpty(this.activeItem)) {
          if (processedItem.columnIndex === 0) {
            this.focusedItemInfo = {
              index: this.activeItem.index,
              key: this.activeItem.key,
              parentKey: this.activeItem.parentKey
            };
            this.activeItem = null;
          }
        }
        var columnIndex = processedItem.columnIndex - 1;
        var _itemIndex = this.visibleItems.findIndex(function(item2) {
          return item2.columnIndex === columnIndex;
        });
        _itemIndex !== -1 && this.changeFocusedItemInfo(event, _itemIndex);
      }
      event.preventDefault();
    },
    onArrowRightKey: function onArrowRightKey(event) {
      var processedItem = this.findVisibleItem(this.focusedItemInfo.index);
      var grouped = this.isProccessedItemGroup(processedItem);
      if (grouped) {
        if (this.vertical) {
          if (isNotEmpty(this.activeItem) && this.activeItem.key === processedItem.key) {
            this.focusedItemInfo = {
              index: -1,
              key: "",
              parentKey: this.activeItem.key
            };
          } else {
            var _processedItem = this.findVisibleItem(this.focusedItemInfo.index);
            var _grouped = this.isProccessedItemGroup(_processedItem);
            if (_grouped) {
              this.onItemChange({
                originalEvent: event,
                processedItem: _processedItem
              });
              this.focusedItemInfo = {
                index: -1,
                key: _processedItem.key,
                parentKey: _processedItem.parentKey
              };
              this.searchValue = "";
            }
          }
        }
        var itemIndex = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
        this.changeFocusedItemInfo(event, itemIndex);
      } else {
        var columnIndex = processedItem.columnIndex + 1;
        var _itemIndex2 = this.visibleItems.findIndex(function(item2) {
          return item2.columnIndex === columnIndex;
        });
        _itemIndex2 !== -1 && this.changeFocusedItemInfo(event, _itemIndex2);
      }
      event.preventDefault();
    },
    onHomeKey: function onHomeKey(event) {
      this.changeFocusedItemInfo(event, this.findFirstItemIndex());
      event.preventDefault();
    },
    onEndKey: function onEndKey(event) {
      this.changeFocusedItemInfo(event, this.findLastItemIndex());
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event) {
      if (this.focusedItemInfo.index !== -1) {
        var element = findSingle(this.menubar, 'li[id="'.concat("".concat(this.focusedItemId), '"]'));
        var anchorElement = element && findSingle(element, 'a[data-pc-section="itemlink"]');
        anchorElement ? anchorElement.click() : element && element.click();
        var processedItem = this.visibleItems[this.focusedItemInfo.index];
        var grouped = this.isProccessedItemGroup(processedItem);
        !grouped && this.changeFocusedItemInfo(event, this.findFirstFocusedItemIndex());
      }
      event.preventDefault();
    },
    onSpaceKey: function onSpaceKey(event) {
      this.onEnterKey(event);
    },
    onEscapeKey: function onEscapeKey(event) {
      if (isNotEmpty(this.activeItem)) {
        this.focusedItemInfo = {
          index: this.activeItem.index,
          key: this.activeItem.key
        };
        this.activeItem = null;
      }
      event.preventDefault();
    },
    onTabKey: function onTabKey(event) {
      if (this.focusedItemInfo.index !== -1) {
        var processedItem = this.findVisibleItem(this.focusedItemInfo.index);
        var grouped = this.isProccessedItemGroup(processedItem);
        !grouped && this.onItemChange({
          originalEvent: event,
          processedItem
        });
      }
      this.hide();
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this3 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          var isOutsideContainer = _this3.container && !_this3.container.contains(event.target);
          var isOutsideTarget = !(_this3.target && (_this3.target === event.target || _this3.target.contains(event.target)));
          if (isOutsideContainer && isOutsideTarget) {
            _this3.hide();
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
    bindResizeListener: function bindResizeListener() {
      var _this4 = this;
      if (!this.resizeListener) {
        this.resizeListener = function(event) {
          if (!isTouchDevice()) {
            _this4.hide(event, true);
          }
          _this4.mobileActive = false;
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
          _this5.mobileActive = false;
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
      return isNotEmpty(this.activeItem) ? this.activeItem.key === processedItem.key : false;
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
    findVisibleItem: function findVisibleItem(index) {
      return isNotEmpty(this.visibleItems) ? this.visibleItems[index] : null;
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
        this.changeFocusedItemInfo(event, itemIndex);
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
    changeFocusedItemInfo: function changeFocusedItemInfo(event, index) {
      var processedItem = this.findVisibleItem(index);
      this.focusedItemInfo.index = index;
      this.focusedItemInfo.key = isNotEmpty(processedItem) ? processedItem.key : "";
      this.scrollInView();
    },
    scrollInView: function scrollInView() {
      var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
      var id = index !== -1 ? "".concat(this.$id, "_").concat(index) : this.focusedItemId;
      var element;
      if (id === null && this.queryMatches) {
        element = this.$refs.menubutton;
      } else {
        element = findSingle(this.menubar, 'li[id="'.concat(id, '"]'));
      }
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "nearest",
          behavior: "smooth"
        });
      }
    },
    createProcessedItems: function createProcessedItems(items) {
      var _this10 = this;
      var level = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      var parent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var parentKey = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
      var columnIndex = arguments.length > 4 ? arguments[4] : void 0;
      var processedItems2 = [];
      items && items.forEach(function(item2, index) {
        var key = (parentKey !== "" ? parentKey + "_" : "") + (columnIndex !== void 0 ? columnIndex + "_" : "") + index;
        var newItem = {
          item: item2,
          index,
          level,
          key,
          parent,
          parentKey,
          columnIndex: columnIndex !== void 0 ? columnIndex : parent.columnIndex !== void 0 ? parent.columnIndex : index
        };
        newItem["items"] = level === 0 && item2.items && item2.items.length > 0 ? item2.items.map(function(_items, _index) {
          return _this10.createProcessedItems(_items, level + 1, newItem, key, _index);
        }) : _this10.createProcessedItems(item2.items, level + 1, newItem, key);
        processedItems2.push(newItem);
      });
      return processedItems2;
    },
    containerRef: function containerRef(el) {
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
      var processedItem = isNotEmpty(this.activeItem) ? this.activeItem : null;
      return processedItem && processedItem.key === this.focusedItemInfo.parentKey ? processedItem.items.reduce(function(items, col) {
        col.forEach(function(submenu) {
          submenu.items.forEach(function(a) {
            items.push(a);
          });
        });
        return items;
      }, []) : this.processedItems;
    },
    horizontal: function horizontal() {
      return this.orientation === "horizontal";
    },
    vertical: function vertical() {
      return this.orientation === "vertical";
    },
    focusedItemId: function focusedItemId() {
      return isNotEmpty(this.focusedItemInfo.key) ? "".concat(this.$id, "_").concat(this.focusedItemInfo.key) : null;
    }
  },
  components: {
    MegaMenuSub: script$1,
    BarsIcon: script$3
  }
};
var _hoisted_1 = ["id"];
var _hoisted_2 = ["aria-haspopup", "aria-expanded", "aria-controls", "aria-label"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_BarsIcon = resolveComponent("BarsIcon");
  var _component_MegaMenuSub = resolveComponent("MegaMenuSub");
  return openBlock(), createElementBlock("div", mergeProps({
    ref: $options.containerRef,
    id: _ctx.$id,
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [_ctx.$slots.start ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("start")
  }, _ctx.ptm("start")), [renderSlot(_ctx.$slots, "start")], 16)) : createCommentVNode("", true), renderSlot(_ctx.$slots, _ctx.$slots.button ? "button" : "menubutton", {
    id: _ctx.$id,
    "class": normalizeClass(_ctx.cx("button")),
    toggleCallback: function toggleCallback(event) {
      return $options.menuButtonClick(event);
    }
  }, function() {
    var _ctx$$primevue$config;
    return [_ctx.model && _ctx.model.length > 0 ? (openBlock(), createElementBlock("a", mergeProps({
      key: 0,
      ref: "menubutton",
      role: "button",
      tabindex: "0",
      "class": _ctx.cx("button"),
      "aria-haspopup": _ctx.model.length && _ctx.model.length > 0 ? true : false,
      "aria-expanded": $data.mobileActive,
      "aria-controls": _ctx.$id,
      "aria-label": (_ctx$$primevue$config = _ctx.$primevue.config.locale.aria) === null || _ctx$$primevue$config === void 0 ? void 0 : _ctx$$primevue$config.navigation,
      onClick: _cache[0] || (_cache[0] = function($event) {
        return $options.menuButtonClick($event);
      }),
      onKeydown: _cache[1] || (_cache[1] = function($event) {
        return $options.menuButtonKeydown($event);
      })
    }, _ctx.ptm("button")), [renderSlot(_ctx.$slots, _ctx.$slots.buttonicon ? "buttonicon" : "menubuttonicon", {}, function() {
      return [createVNode(_component_BarsIcon, normalizeProps(guardReactiveProps(_ctx.ptm("buttonIcon"))), null, 16)];
    })], 16, _hoisted_2)) : createCommentVNode("", true)];
  }), createVNode(_component_MegaMenuSub, {
    ref: $options.menubarRef,
    id: _ctx.$id + "_list",
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    role: "menubar",
    "aria-label": _ctx.ariaLabel,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-disabled": _ctx.disabled || void 0,
    "aria-orientation": _ctx.orientation,
    "aria-activedescendant": $data.focused ? $options.focusedItemId : void 0,
    menuId: _ctx.$id,
    focusedItemId: $data.focused ? $options.focusedItemId : void 0,
    items: $options.processedItems,
    horizontal: $options.horizontal,
    templates: _ctx.$slots,
    activeItem: $data.activeItem,
    mobileActive: $data.mobileActive,
    level: 0,
    style: normalizeStyle(_ctx.sx("rootList")),
    pt: _ctx.pt,
    unstyled: _ctx.unstyled,
    onFocus: $options.onFocus,
    onBlur: $options.onBlur,
    onKeydown: $options.onKeyDown,
    onItemClick: $options.onItemClick,
    onItemMouseenter: $options.onItemMouseEnter
  }, null, 8, ["id", "tabindex", "aria-label", "aria-labelledby", "aria-disabled", "aria-orientation", "aria-activedescendant", "menuId", "focusedItemId", "items", "horizontal", "templates", "activeItem", "mobileActive", "style", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter"]), _ctx.$slots.end ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("end")
  }, _ctx.ptm("end")), [renderSlot(_ctx.$slots, "end")], 16)) : createCommentVNode("", true)], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-BIulS7vw.mjs.map
