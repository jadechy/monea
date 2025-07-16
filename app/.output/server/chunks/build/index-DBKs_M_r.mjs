import { cn } from '@primeuix/utils';
import { focus, getAttribute, findSingle } from '@primeuix/utils/dom';
import { s as script$2 } from './index-CMv313tU.mjs';
import { s as script$3 } from './index-B8dwdDfW.mjs';
import { R as Ripple } from './index-2dA4pXcI.mjs';
import { mergeProps, resolveDirective, withDirectives, renderSlot, createBlock, openBlock, resolveDynamicComponent, withCtx, normalizeClass } from 'vue';
import { s as script$4 } from './index-f6-L4oOs.mjs';
import { B as BaseStyle } from './server.mjs';
import './index-BLn-pl6M.mjs';
import '@primeuix/utils/object';
import './index-DpRrGZTR.mjs';
import '@primeuix/styled';
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
import 'node:url';
import 'ipx';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
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
  root: "p-accordionheader",
  toggleicon: "p-accordionheader-toggle-icon"
};
var AccordionHeaderStyle = BaseStyle.extend({
  name: "accordionheader",
  classes
});
var script$1 = {
  name: "BaseAccordionHeader",
  "extends": script$4,
  props: {
    as: {
      type: [String, Object],
      "default": "BUTTON"
    },
    asChild: {
      type: Boolean,
      "default": false
    }
  },
  style: AccordionHeaderStyle,
  provide: function provide() {
    return {
      $pcAccordionHeader: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "AccordionHeader",
  "extends": script$1,
  inheritAttrs: false,
  inject: ["$pcAccordion", "$pcAccordionPanel"],
  methods: {
    onFocus: function onFocus() {
      this.$pcAccordion.selectOnFocus && this.changeActiveValue();
    },
    onClick: function onClick() {
      !this.$pcAccordion.selectOnFocus && this.changeActiveValue();
    },
    onKeydown: function onKeydown(event) {
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event);
          break;
        case "Home":
          this.onHomeKey(event);
          break;
        case "End":
          this.onEndKey(event);
          break;
        case "Enter":
        case "NumpadEnter":
        case "Space":
          this.onEnterKey(event);
          break;
      }
    },
    onArrowDownKey: function onArrowDownKey(event) {
      var nextPanel = this.findNextPanel(this.findPanel(event.currentTarget));
      nextPanel ? this.changeFocusedPanel(event, nextPanel) : this.onHomeKey(event);
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event) {
      var prevPanel = this.findPrevPanel(this.findPanel(event.currentTarget));
      prevPanel ? this.changeFocusedPanel(event, prevPanel) : this.onEndKey(event);
      event.preventDefault();
    },
    onHomeKey: function onHomeKey(event) {
      var firstPanel = this.findFirstPanel();
      this.changeFocusedPanel(event, firstPanel);
      event.preventDefault();
    },
    onEndKey: function onEndKey(event) {
      var lastPanel = this.findLastPanel();
      this.changeFocusedPanel(event, lastPanel);
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event) {
      this.changeActiveValue();
      event.preventDefault();
    },
    findPanel: function findPanel(headerElement) {
      return headerElement === null || headerElement === void 0 ? void 0 : headerElement.closest('[data-pc-name="accordionpanel"]');
    },
    findHeader: function findHeader(panelElement) {
      return findSingle(panelElement, '[data-pc-name="accordionheader"]');
    },
    findNextPanel: function findNextPanel(panelElement) {
      var selfCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var element = selfCheck ? panelElement : panelElement.nextElementSibling;
      return element ? getAttribute(element, "data-p-disabled") ? this.findNextPanel(element) : this.findHeader(element) : null;
    },
    findPrevPanel: function findPrevPanel(panelElement) {
      var selfCheck = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var element = selfCheck ? panelElement : panelElement.previousElementSibling;
      return element ? getAttribute(element, "data-p-disabled") ? this.findPrevPanel(element) : this.findHeader(element) : null;
    },
    findFirstPanel: function findFirstPanel() {
      return this.findNextPanel(this.$pcAccordion.$el.firstElementChild, true);
    },
    findLastPanel: function findLastPanel() {
      return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild, true);
    },
    changeActiveValue: function changeActiveValue() {
      this.$pcAccordion.updateValue(this.$pcAccordionPanel.value);
    },
    changeFocusedPanel: function changeFocusedPanel(event, element) {
      focus(this.findHeader(element));
    }
  },
  computed: {
    id: function id() {
      return "".concat(this.$pcAccordion.$id, "_accordionheader_").concat(this.$pcAccordionPanel.value);
    },
    ariaControls: function ariaControls() {
      return "".concat(this.$pcAccordion.$id, "_accordioncontent_").concat(this.$pcAccordionPanel.value);
    },
    attrs: function attrs() {
      return mergeProps(this.asAttrs, this.a11yAttrs, this.ptmi("root", this.ptParams));
    },
    asAttrs: function asAttrs() {
      return this.as === "BUTTON" ? {
        type: "button",
        disabled: this.$pcAccordionPanel.disabled
      } : void 0;
    },
    a11yAttrs: function a11yAttrs() {
      return {
        id: this.id,
        tabindex: this.$pcAccordion.tabindex,
        "aria-expanded": this.$pcAccordionPanel.active,
        "aria-controls": this.ariaControls,
        "data-pc-name": "accordionheader",
        "data-p-disabled": this.$pcAccordionPanel.disabled,
        "data-p-active": this.$pcAccordionPanel.active,
        onFocus: this.onFocus,
        onKeydown: this.onKeydown
      };
    },
    ptParams: function ptParams() {
      return {
        context: {
          active: this.$pcAccordionPanel.active
        }
      };
    },
    dataP: function dataP() {
      return cn({
        active: this.$pcAccordionPanel.active
      });
    }
  },
  components: {
    ChevronUpIcon: script$3,
    ChevronDownIcon: script$2
  },
  directives: {
    ripple: Ripple
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return !_ctx.asChild ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
    key: 0,
    "data-p": $options.dataP,
    "class": _ctx.cx("root"),
    onClick: $options.onClick
  }, $options.attrs), {
    "default": withCtx(function() {
      return [renderSlot(_ctx.$slots, "default", {
        active: $options.$pcAccordionPanel.active
      }), renderSlot(_ctx.$slots, "toggleicon", {
        active: $options.$pcAccordionPanel.active,
        "class": normalizeClass(_ctx.cx("toggleicon"))
      }, function() {
        return [$options.$pcAccordionPanel.active ? (openBlock(), createBlock(resolveDynamicComponent($options.$pcAccordion.$slots.collapseicon ? $options.$pcAccordion.$slots.collapseicon : $options.$pcAccordion.collapseIcon ? "span" : "ChevronUpIcon"), mergeProps({
          key: 0,
          "class": [$options.$pcAccordion.collapseIcon, _ctx.cx("toggleicon")],
          "aria-hidden": "true"
        }, _ctx.ptm("toggleicon", $options.ptParams)), null, 16, ["class"])) : (openBlock(), createBlock(resolveDynamicComponent($options.$pcAccordion.$slots.expandicon ? $options.$pcAccordion.$slots.expandicon : $options.$pcAccordion.expandIcon ? "span" : "ChevronDownIcon"), mergeProps({
          key: 1,
          "class": [$options.$pcAccordion.expandIcon, _ctx.cx("toggleicon")],
          "aria-hidden": "true"
        }, _ctx.ptm("toggleicon", $options.ptParams)), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 16, ["data-p", "class", "onClick"])), [[_directive_ripple]]) : renderSlot(_ctx.$slots, "default", {
    key: 1,
    "class": normalizeClass(_ctx.cx("root")),
    active: $options.$pcAccordionPanel.active,
    a11yAttrs: $options.a11yAttrs,
    onClick: $options.onClick
  });
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-DBKs_M_r.mjs.map
