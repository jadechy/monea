import { cn } from '@primeuix/utils';
import { find, findSingle } from '@primeuix/utils/dom';
import { findIndexInList } from '@primeuix/utils/object';
import { s as script$3 } from './index-f6-L4oOs.mjs';
import { createElementBlock, openBlock, mergeProps, resolveComponent, createBlock, renderSlot, resolveDynamicComponent, withCtx, createElementVNode, createCommentVNode, toDisplayString, normalizeClass } from 'vue';
import { B as BaseStyle } from './server.mjs';
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

var classes = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ["p-step", {
      "p-step-active": instance.active,
      "p-disabled": instance.isStepDisabled
    }];
  },
  header: "p-step-header",
  number: "p-step-number",
  title: "p-step-title"
};
var StepStyle = BaseStyle.extend({
  name: "step",
  classes
});
var script$2 = {
  name: "StepperSeparator",
  hostName: "Stepper",
  "extends": script$3,
  inject: {
    $pcStepper: {
      "default": null
    }
  }
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx("separator")
  }, _ctx.ptmo($options.$pcStepper.pt, "separator")), null, 16);
}
script$2.render = render$1;
var script$1 = {
  name: "BaseStep",
  "extends": script$3,
  props: {
    value: {
      type: [String, Number],
      "default": void 0
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    asChild: {
      type: Boolean,
      "default": false
    },
    as: {
      type: [String, Object],
      "default": "DIV"
    }
  },
  style: StepStyle,
  provide: function provide() {
    return {
      $pcStep: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Step",
  "extends": script$1,
  inheritAttrs: false,
  inject: {
    $pcStepper: {
      "default": null
    },
    $pcStepList: {
      "default": null
    },
    $pcStepItem: {
      "default": null
    }
  },
  data: function data() {
    return {
      isSeparatorVisible: false,
      isCompleted: false
    };
  },
  mounted: function mounted() {
    if (this.$el && this.$pcStepList) {
      var index = findIndexInList(this.$el, find(this.$pcStepper.$el, '[data-pc-name="step"]'));
      var activeIndex = findIndexInList(findSingle(this.$pcStepper.$el, '[data-pc-name="step"][data-p-active="true"]'), find(this.$pcStepper.$el, '[data-pc-name="step"]'));
      var stepLen = find(this.$pcStepper.$el, '[data-pc-name="step"]').length;
      this.isSeparatorVisible = index !== stepLen - 1;
      this.isCompleted = index < activeIndex;
    }
  },
  updated: function updated() {
    var index = findIndexInList(this.$el, find(this.$pcStepper.$el, '[data-pc-name="step"]'));
    var activeIndex = findIndexInList(findSingle(this.$pcStepper.$el, '[data-pc-name="step"][data-p-active="true"]'), find(this.$pcStepper.$el, '[data-pc-name="step"]'));
    this.isCompleted = index < activeIndex;
  },
  methods: {
    getPTOptions: function getPTOptions(key) {
      var _ptm = key === "root" ? this.ptmi : this.ptm;
      return _ptm(key, {
        context: {
          active: this.active,
          disabled: this.isStepDisabled
        }
      });
    },
    onStepClick: function onStepClick() {
      this.$pcStepper.updateValue(this.activeValue);
    }
  },
  computed: {
    active: function active() {
      return this.$pcStepper.isStepActive(this.activeValue);
    },
    activeValue: function activeValue() {
      var _this$$pcStepItem;
      return !!this.$pcStepItem ? (_this$$pcStepItem = this.$pcStepItem) === null || _this$$pcStepItem === void 0 ? void 0 : _this$$pcStepItem.value : this.value;
    },
    isStepDisabled: function isStepDisabled() {
      return !this.active && (this.$pcStepper.isStepDisabled() || this.disabled);
    },
    id: function id() {
      var _this$$pcStepper;
      return "".concat((_this$$pcStepper = this.$pcStepper) === null || _this$$pcStepper === void 0 ? void 0 : _this$$pcStepper.$id, "_step_").concat(this.activeValue);
    },
    ariaControls: function ariaControls() {
      var _this$$pcStepper2;
      return "".concat((_this$$pcStepper2 = this.$pcStepper) === null || _this$$pcStepper2 === void 0 ? void 0 : _this$$pcStepper2.$id, "_steppanel_").concat(this.activeValue);
    },
    a11yAttrs: function a11yAttrs() {
      return {
        root: {
          role: "presentation",
          "aria-current": this.active ? "step" : void 0,
          "data-pc-name": "step",
          "data-pc-section": "root",
          "data-p-disabled": this.isStepDisabled,
          "data-p-active": this.active
        },
        header: {
          id: this.id,
          role: "tab",
          taindex: this.disabled ? -1 : void 0,
          "aria-controls": this.ariaControls,
          "data-pc-section": "header",
          disabled: this.isStepDisabled,
          onClick: this.onStepClick
        }
      };
    },
    dataP: function dataP() {
      return cn({
        disabled: this.isStepDisabled,
        readonly: this.$pcStepper.linear,
        active: this.active,
        completed: this.isCompleted,
        vertical: this.$pcStepItem != null
      });
    }
  },
  components: {
    StepperSeparator: script$2
  }
};
var _hoisted_1 = ["id", "tabindex", "aria-controls", "disabled", "data-p"];
var _hoisted_2 = ["data-p"];
var _hoisted_3 = ["data-p"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_StepperSeparator = resolveComponent("StepperSeparator");
  return !_ctx.asChild ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
    key: 0,
    "class": _ctx.cx("root"),
    "aria-current": $options.active ? "step" : void 0,
    role: "presentation",
    "data-p-active": $options.active,
    "data-p-disabled": $options.isStepDisabled,
    "data-p": $options.dataP
  }, $options.getPTOptions("root")), {
    "default": withCtx(function() {
      return [createElementVNode("button", mergeProps({
        id: $options.id,
        "class": _ctx.cx("header"),
        role: "tab",
        type: "button",
        tabindex: $options.isStepDisabled ? -1 : void 0,
        "aria-controls": $options.ariaControls,
        disabled: $options.isStepDisabled,
        onClick: _cache[0] || (_cache[0] = function() {
          return $options.onStepClick && $options.onStepClick.apply($options, arguments);
        }),
        "data-p": $options.dataP
      }, $options.getPTOptions("header")), [createElementVNode("span", mergeProps({
        "class": _ctx.cx("number"),
        "data-p": $options.dataP
      }, $options.getPTOptions("number")), toDisplayString($options.activeValue), 17, _hoisted_2), createElementVNode("span", mergeProps({
        "class": _ctx.cx("title"),
        "data-p": $options.dataP
      }, $options.getPTOptions("title")), [renderSlot(_ctx.$slots, "default")], 16, _hoisted_3)], 16, _hoisted_1), $data.isSeparatorVisible ? (openBlock(), createBlock(_component_StepperSeparator, {
        key: 0,
        "data-p": $options.dataP
      }, null, 8, ["data-p"])) : createCommentVNode("", true)];
    }),
    _: 3
  }, 16, ["class", "aria-current", "data-p-active", "data-p-disabled", "data-p"])) : renderSlot(_ctx.$slots, "default", {
    key: 1,
    "class": normalizeClass(_ctx.cx("root")),
    active: $options.active,
    value: _ctx.value,
    a11yAttrs: $options.a11yAttrs,
    activateCallback: $options.onStepClick
  });
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-DHQ9qFgx.mjs.map
