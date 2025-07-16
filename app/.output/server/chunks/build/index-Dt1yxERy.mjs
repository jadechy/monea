import { getAttribute, getWidth, getOffset, findSingle, find } from '@primeuix/utils/dom';
import { R as Ripple } from './index-2dA4pXcI.mjs';
import { mergeProps, resolveDirective, createElementBlock, openBlock, createElementVNode, Fragment, renderList, createCommentVNode, withDirectives, createBlock, resolveDynamicComponent, normalizeClass, toDisplayString } from 'vue';
import { s as script$2 } from './index-f6-L4oOs.mjs';
import { style } from '@primeuix/styles/tabmenu';
import { B as BaseStyle } from './server.mjs';
import './index-DpRrGZTR.mjs';
import '@primeuix/styled';
import '@primeuix/utils/object';
import '@primeuix/utils/uuid';
import '@primeuix/styles/ripple';
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
import './client.manifest.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'file:///app/node_modules/@nuxt/vite-builder/dist/runtime/client.manifest.mjs';

var classes = {
  root: "p-tabmenu p-component",
  tablist: "p-tabmenu-tablist",
  item: function item(_ref) {
    var instance = _ref.instance, index = _ref.index, _item = _ref.item;
    return ["p-tabmenu-item", {
      "p-tabmenu-item-active": instance.d_activeIndex === index,
      "p-disabled": instance.disabled(_item)
    }];
  },
  itemLink: "p-tabmenu-item-link",
  itemIcon: "p-tabmenu-item-icon",
  itemLabel: "p-tabmenu-item-label",
  activeBar: "p-tabmenu-active-bar"
};
var TabMenuStyle = BaseStyle.extend({
  name: "tabmenu",
  style,
  classes
});
var script$1 = {
  name: "BaseTabMenu",
  "extends": script$2,
  props: {
    model: {
      type: Array,
      "default": null
    },
    activeIndex: {
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
  style: TabMenuStyle,
  provide: function provide() {
    return {
      $pcTabMenu: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "TabMenu",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:activeIndex", "tab-change"],
  data: function data() {
    return {
      d_activeIndex: this.activeIndex
    };
  },
  watch: {
    activeIndex: {
      flush: "post",
      handler: function handler(newValue) {
        this.d_activeIndex = newValue;
        this.updateInkBar();
      }
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.$nextTick(function() {
      _this.updateInkBar();
    });
    var activeItem = this.findActiveItem();
    activeItem && (activeItem.tabIndex = "0");
  },
  updated: function updated() {
    this.updateInkBar();
  },
  methods: {
    getPTOptions: function getPTOptions(key, item2, index) {
      return this.ptm(key, {
        context: {
          item: item2,
          index
        }
      });
    },
    onItemClick: function onItemClick(event, item2, index) {
      if (this.disabled(item2)) {
        event.preventDefault();
        return;
      }
      if (item2.command) {
        item2.command({
          originalEvent: event,
          item: item2
        });
      }
      if (index !== this.d_activeIndex) {
        this.d_activeIndex = index;
        this.$emit("update:activeIndex", this.d_activeIndex);
      }
      this.$emit("tab-change", {
        originalEvent: event,
        index
      });
    },
    onKeydownItem: function onKeydownItem(event, item2, index) {
      switch (event.code) {
        case "ArrowRight": {
          this.navigateToNextItem(event.target);
          event.preventDefault();
          break;
        }
        case "ArrowLeft": {
          this.navigateToPrevItem(event.target);
          event.preventDefault();
          break;
        }
        case "Home": {
          this.navigateToFirstItem(event.target);
          event.preventDefault();
          break;
        }
        case "End": {
          this.navigateToLastItem(event.target);
          event.preventDefault();
          break;
        }
        case "Space":
        case "NumpadEnter":
        case "Enter": {
          this.onItemClick(event, item2, index);
          event.preventDefault();
          break;
        }
        case "Tab": {
          this.onTabKey();
          break;
        }
      }
    },
    navigateToNextItem: function navigateToNextItem(target) {
      var nextItem = this.findNextItem(target);
      nextItem && this.setFocusToMenuitem(target, nextItem);
    },
    navigateToPrevItem: function navigateToPrevItem(target) {
      var prevItem = this.findPrevItem(target);
      prevItem && this.setFocusToMenuitem(target, prevItem);
    },
    navigateToFirstItem: function navigateToFirstItem(target) {
      var firstItem = this.findFirstItem(target);
      firstItem && this.setFocusToMenuitem(target, firstItem);
    },
    navigateToLastItem: function navigateToLastItem(target) {
      var lastItem = this.findLastItem(target);
      lastItem && this.setFocusToMenuitem(target, lastItem);
    },
    findNextItem: function findNextItem(item2) {
      var nextItem = item2.parentElement.nextElementSibling;
      return nextItem ? getAttribute(nextItem, "data-p-disabled") === true ? this.findNextItem(nextItem.children[0]) : nextItem.children[0] : null;
    },
    findPrevItem: function findPrevItem(item2) {
      var prevItem = item2.parentElement.previousElementSibling;
      return prevItem ? getAttribute(prevItem, "data-p-disabled") === true ? this.findPrevItem(prevItem.children[0]) : prevItem.children[0] : null;
    },
    findFirstItem: function findFirstItem() {
      var firstSibling = findSingle(this.$refs.nav, '[data-pc-section="item"][data-p-disabled="false"]');
      return firstSibling ? firstSibling.children[0] : null;
    },
    findLastItem: function findLastItem() {
      var siblings = find(this.$refs.nav, '[data-pc-section="item"][data-p-disabled="false"]');
      return siblings ? siblings[siblings.length - 1].children[0] : null;
    },
    findActiveItem: function findActiveItem() {
      var activeItem = findSingle(this.$refs.nav, '[data-pc-section="item"][data-p-disabled="false"][data-p-active="true"]');
      return activeItem ? activeItem.children[0] : null;
    },
    setFocusToMenuitem: function setFocusToMenuitem(target, focusableItem) {
      target.tabIndex = "-1";
      focusableItem.tabIndex = "0";
      focusableItem.focus();
    },
    onTabKey: function onTabKey() {
      var activeItem = findSingle(this.$refs.nav, '[data-pc-section="item"][data-p-disabled="false"][data-p-active="true"]');
      var focusedItem = findSingle(this.$refs.nav, '[data-pc-section="itemlink"][tabindex="0"]');
      if (focusedItem !== activeItem.children[0]) {
        activeItem && (activeItem.children[0].tabIndex = "0");
        focusedItem.tabIndex = "-1";
      }
    },
    visible: function visible(item2) {
      return typeof item2.visible === "function" ? item2.visible() : item2.visible !== false;
    },
    disabled: function disabled(item2) {
      return typeof item2.disabled === "function" ? item2.disabled() : item2.disabled === true;
    },
    label: function label(item2) {
      return typeof item2.label === "function" ? item2.label() : item2.label;
    },
    updateInkBar: function updateInkBar() {
      var tabs = this.$refs.nav.children;
      var inkHighlighted = false;
      for (var i = 0; i < tabs.length; i++) {
        var tab = tabs[i];
        if (getAttribute(tab, "data-p-active")) {
          this.$refs.inkbar.style.width = getWidth(tab) + "px";
          this.$refs.inkbar.style.left = getOffset(tab).left - getOffset(this.$refs.nav).left + "px";
          inkHighlighted = true;
        }
      }
      if (!inkHighlighted) {
        this.$refs.inkbar.style.width = "0px";
        this.$refs.inkbar.style.left = "0px";
      }
    },
    getMenuItemProps: function getMenuItemProps(item2, index) {
      var _this2 = this;
      return {
        action: mergeProps({
          "class": this.cx("itemLink"),
          tabindex: -1,
          onClick: function onClick($event) {
            return _this2.onItemClick($event, item2, index);
          },
          onKeyDown: function onKeyDown($event) {
            return _this2.onKeydownItem($event, item2, index);
          }
        }, this.getPTOptions("itemLink", item2, index)),
        icon: mergeProps({
          "class": [this.cx("itemIcon"), item2.icon]
        }, this.getPTOptions("itemIcon", item2, index)),
        label: mergeProps({
          "class": this.cx("itemLabel")
        }, this.getPTOptions("itemLabel", item2, index))
      };
    }
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1 = ["aria-labelledby", "aria-label"];
var _hoisted_2 = ["onClick", "onKeydown", "data-p-active", "data-p-disabled"];
var _hoisted_3 = ["href", "target", "aria-label", "aria-disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [createElementVNode("ul", mergeProps({
    ref: "nav",
    "class": _ctx.cx("tablist"),
    role: "menubar",
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel
  }, _ctx.ptm("tablist")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, function(item2, i) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.label(item2) + "_" + i.toString()
    }, [$options.visible(item2) ? (openBlock(), createElementBlock("li", mergeProps({
      key: 0,
      ref_for: true,
      ref: "tab",
      "class": [_ctx.cx("item", {
        item: item2,
        index: i
      }), item2["class"]],
      role: "presentation",
      onClick: function onClick($event) {
        return $options.onItemClick($event, item2, i);
      },
      onKeydown: function onKeydown($event) {
        return $options.onKeydownItem($event, item2, i);
      }
    }, {
      ref_for: true
    }, $options.getPTOptions("item", item2, i), {
      "data-p-active": $data.d_activeIndex === i,
      "data-p-disabled": $options.disabled(item2)
    }), [!_ctx.$slots.item ? withDirectives((openBlock(), createElementBlock("a", mergeProps({
      key: 0,
      ref_for: true,
      ref: "tabLink",
      role: "menuitem",
      href: item2.url,
      "class": _ctx.cx("itemLink"),
      target: item2.target,
      "aria-label": $options.label(item2),
      "aria-disabled": $options.disabled(item2),
      tabindex: -1
    }, {
      ref_for: true
    }, $options.getPTOptions("itemLink", item2, i)), [_ctx.$slots.itemicon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.itemicon), {
      key: 0,
      item: item2,
      "class": normalizeClass(_ctx.cx("itemIcon"))
    }, null, 8, ["item", "class"])) : item2.icon ? (openBlock(), createElementBlock("span", mergeProps({
      key: 1,
      "class": [_ctx.cx("itemIcon"), item2.icon]
    }, {
      ref_for: true
    }, $options.getPTOptions("itemIcon", item2, i)), null, 16)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
      "class": _ctx.cx("itemLabel")
    }, {
      ref_for: true
    }, $options.getPTOptions("itemLabel", item2, i)), toDisplayString($options.label(item2)), 17)], 16, _hoisted_3)), [[_directive_ripple]]) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.item), {
      key: 1,
      item: item2,
      index: i,
      active: i === $data.d_activeIndex,
      label: $options.label(item2),
      props: $options.getMenuItemProps(item2, i)
    }, null, 8, ["item", "index", "active", "label", "props"]))], 16, _hoisted_2)) : createCommentVNode("", true)], 64);
  }), 128)), createElementVNode("li", mergeProps({
    ref: "inkbar",
    role: "none",
    "class": _ctx.cx("activeBar")
  }, _ctx.ptm("activeBar")), null, 16)], 16, _hoisted_1)], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-Dt1yxERy.mjs.map
