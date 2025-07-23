import { cn } from '@primeuix/utils';
import { find, findSingle } from '@primeuix/utils/dom';
import { findIndexInList } from '@primeuix/utils/object';
import { g as script$6, B as BaseStyle } from './server.mjs';
import { createElementBlock, openBlock, mergeProps, resolveComponent, Fragment, createBlock, renderSlot, Transition, withCtx, withDirectives, resolveDynamicComponent, createCommentVNode, createElementVNode, vShow } from 'vue';
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
import '@primeuix/utils/uuid';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

var classes = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ["p-steppanel", {
      "p-steppanel-active": instance.isVertical && instance.active
    }];
  },
  content: "p-steppanel-content"
};
var StepPanelStyle = BaseStyle.extend({
  name: "steppanel",
  classes
});
var script$2 = {
  name: "StepperSeparator",
  hostName: "Stepper",
  "extends": script$6,
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
  name: "BaseStepPanel",
  "extends": script$6,
  props: {
    value: {
      type: [String, Number],
      "default": void 0
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
  style: StepPanelStyle,
  provide: function provide() {
    return {
      $pcStepPanel: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "StepPanel",
  "extends": script$1,
  inheritAttrs: false,
  inject: {
    $pcStepper: {
      "default": null
    },
    $pcStepItem: {
      "default": null
    },
    $pcStepList: {
      "default": null
    }
  },
  data: function data() {
    return {
      isSeparatorVisible: false
    };
  },
  mounted: function mounted() {
    if (this.$el) {
      var _this$$pcStepItem, _this$$pcStepList;
      var stepElements = find(this.$pcStepper.$el, '[data-pc-name="step"]');
      var stepPanelEl = findSingle(this.isVertical ? (_this$$pcStepItem = this.$pcStepItem) === null || _this$$pcStepItem === void 0 ? void 0 : _this$$pcStepItem.$el : (_this$$pcStepList = this.$pcStepList) === null || _this$$pcStepList === void 0 ? void 0 : _this$$pcStepList.$el, '[data-pc-name="step"]');
      var stepPanelIndex = findIndexInList(stepPanelEl, stepElements);
      this.isSeparatorVisible = this.isVertical && stepPanelIndex !== stepElements.length - 1;
    }
  },
  methods: {
    getPTOptions: function getPTOptions(key) {
      var _ptm = key === "root" ? this.ptmi : this.ptm;
      return _ptm(key, {
        context: {
          active: this.active
        }
      });
    },
    updateValue: function updateValue(val) {
      this.$pcStepper.updateValue(val);
    }
  },
  computed: {
    active: function active() {
      var _this$$pcStepItem2, _this$$pcStepper;
      var activeValue2 = !!this.$pcStepItem ? (_this$$pcStepItem2 = this.$pcStepItem) === null || _this$$pcStepItem2 === void 0 ? void 0 : _this$$pcStepItem2.value : this.value;
      return activeValue2 === ((_this$$pcStepper = this.$pcStepper) === null || _this$$pcStepper === void 0 ? void 0 : _this$$pcStepper.d_value);
    },
    isVertical: function isVertical() {
      return !!this.$pcStepItem;
    },
    activeValue: function activeValue() {
      var _this$$pcStepItem3;
      return this.isVertical ? (_this$$pcStepItem3 = this.$pcStepItem) === null || _this$$pcStepItem3 === void 0 ? void 0 : _this$$pcStepItem3.value : this.value;
    },
    id: function id() {
      var _this$$pcStepper2;
      return "".concat((_this$$pcStepper2 = this.$pcStepper) === null || _this$$pcStepper2 === void 0 ? void 0 : _this$$pcStepper2.$id, "_steppanel_").concat(this.activeValue);
    },
    ariaControls: function ariaControls() {
      var _this$$pcStepper3;
      return "".concat((_this$$pcStepper3 = this.$pcStepper) === null || _this$$pcStepper3 === void 0 ? void 0 : _this$$pcStepper3.$id, "_step_").concat(this.activeValue);
    },
    a11yAttrs: function a11yAttrs() {
      return {
        id: this.id,
        role: "tabpanel",
        "aria-controls": this.ariaControls,
        "data-pc-name": "steppanel",
        "data-p-active": this.active
      };
    },
    dataP: function dataP() {
      return cn({
        vertical: this.$pcStepItem != null
      });
    }
  },
  components: {
    StepperSeparator: script$2
  }
};
var _hoisted_1 = ["data-p"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_StepperSeparator = resolveComponent("StepperSeparator");
  return $options.isVertical ? (openBlock(), createElementBlock(Fragment, {
    key: 0
  }, [!_ctx.asChild ? (openBlock(), createBlock(Transition, mergeProps({
    key: 0,
    name: "p-toggleable-content"
  }, _ctx.ptm("transition")), {
    "default": withCtx(function() {
      return [withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
        id: $options.id,
        "class": _ctx.cx("root"),
        role: "tabpanel",
        "aria-controls": $options.ariaControls,
        "data-p": $options.dataP
      }, $options.getPTOptions("root")), {
        "default": withCtx(function() {
          return [$data.isSeparatorVisible ? (openBlock(), createBlock(_component_StepperSeparator, {
            key: 0,
            "data-p": $options.dataP
          }, null, 8, ["data-p"])) : createCommentVNode("", true), createElementVNode("div", mergeProps({
            "class": _ctx.cx("content"),
            "data-p": $options.dataP
          }, $options.getPTOptions("content")), [renderSlot(_ctx.$slots, "default", {
            active: $options.active,
            activateCallback: function activateCallback(val) {
              return $options.updateValue(val);
            }
          })], 16, _hoisted_1)];
        }),
        _: 3
      }, 16, ["id", "class", "aria-controls", "data-p"])), [[vShow, $options.active]])];
    }),
    _: 3
  }, 16)) : renderSlot(_ctx.$slots, "default", {
    key: 1,
    active: $options.active,
    a11yAttrs: $options.a11yAttrs,
    activateCallback: function activateCallback(val) {
      return $options.updateValue(val);
    }
  })], 64)) : (openBlock(), createElementBlock(Fragment, {
    key: 1
  }, [!_ctx.asChild ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
    key: 0,
    id: $options.id,
    "class": _ctx.cx("root"),
    role: "tabpanel",
    "aria-controls": $options.ariaControls
  }, $options.getPTOptions("root")), {
    "default": withCtx(function() {
      return [renderSlot(_ctx.$slots, "default", {
        active: $options.active,
        activateCallback: function activateCallback(val) {
          return $options.updateValue(val);
        }
      })];
    }),
    _: 3
  }, 16, ["id", "class", "aria-controls"])), [[vShow, $options.active]]) : _ctx.asChild && $options.active ? renderSlot(_ctx.$slots, "default", {
    key: 1,
    active: $options.active,
    a11yAttrs: $options.a11yAttrs,
    activateCallback: function activateCallback(val) {
      return $options.updateValue(val);
    }
  }) : createCommentVNode("", true)], 64));
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-Bz-KwuAU.mjs.map
