import { $dt } from '@primeuix/styled';
import { s as script$2 } from './index-wMdTEZV0.mjs';
import { style } from '@primeuix/styles/knob';
import { B as BaseStyle } from './server.mjs';
import { createElementBlock, openBlock, mergeProps, createElementVNode, createCommentVNode, toDisplayString } from 'vue';
import '@primeuix/utils';
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
import '@primeuix/utils/object';
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
import '@primeuix/utils/dom';
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
    var instance = _ref.instance, props = _ref.props;
    return ["p-knob p-component", {
      "p-disabled": props.disabled,
      "p-invalid": instance.$invalid
    }];
  },
  range: "p-knob-range",
  value: "p-knob-value",
  text: "p-knob-text"
};
var KnobStyle = BaseStyle.extend({
  name: "knob",
  style,
  classes
});
var script$1 = {
  name: "BaseKnob",
  "extends": script$2,
  props: {
    size: {
      type: Number,
      "default": 100
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    step: {
      type: Number,
      "default": 1
    },
    min: {
      type: Number,
      "default": 0
    },
    max: {
      type: Number,
      "default": 100
    },
    valueColor: {
      type: String,
      "default": function _default() {
        return $dt("knob.value.background").variable;
      }
    },
    rangeColor: {
      type: String,
      "default": function _default2() {
        return $dt("knob.range.background").variable;
      }
    },
    textColor: {
      type: String,
      "default": function _default3() {
        return $dt("knob.text.color").variable;
      }
    },
    strokeWidth: {
      type: Number,
      "default": 14
    },
    showValue: {
      type: Boolean,
      "default": true
    },
    valueTemplate: {
      type: [String, Function],
      "default": "{value}"
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
  style: KnobStyle,
  provide: function provide() {
    return {
      $pcKnob: this,
      $parentInstance: this
    };
  }
};
var Math_PI = 3.14159265358979;
var script = {
  name: "Knob",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["change"],
  data: function data() {
    return {
      radius: 40,
      midX: 50,
      midY: 50,
      minRadians: 4 * Math_PI / 3,
      maxRadians: -Math_PI / 3
    };
  },
  methods: {
    updateValueByOffset: function updateValueByOffset(offsetX, offsetY) {
      var dx = offsetX - this.size / 2;
      var dy = this.size / 2 - offsetY;
      var angle = Math.atan2(dy, dx);
      var start = -Math_PI / 2 - Math_PI / 6;
      this.updateModel(angle, start);
    },
    updateModel: function updateModel(angle, start) {
      var mappedValue;
      if (angle > this.maxRadians) mappedValue = this.mapRange(angle, this.minRadians, this.maxRadians, this.min, this.max);
      else if (angle < start) mappedValue = this.mapRange(angle + 2 * Math_PI, this.minRadians, this.maxRadians, this.min, this.max);
      else return;
      var newValue = Math.round((mappedValue - this.min) / this.step) * this.step + this.min;
      this.writeValue(newValue);
      this.$emit("change", newValue);
    },
    updateModelValue: function updateModelValue(newValue) {
      if (newValue > this.max) this.writeValue(this.max);
      else if (newValue < this.min) this.writeValue(this.min);
      else this.writeValue(newValue);
    },
    mapRange: function mapRange(x, inMin, inMax, outMin, outMax) {
      return (x - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    },
    onClick: function onClick(event) {
      if (!this.disabled && !this.readonly) {
        this.updateValueByOffset(event.offsetX, event.offsetY);
      }
    },
    onBlur: function onBlur(event) {
      var _this$formField$onBlu, _this$formField;
      (_this$formField$onBlu = (_this$formField = this.formField).onBlur) === null || _this$formField$onBlu === void 0 || _this$formField$onBlu.call(_this$formField, event);
    },
    onMouseDown: function onMouseDown(event) {
      if (!this.disabled && !this.readonly) {
        (void 0).addEventListener("mousemove", this.onMouseMove);
        (void 0).addEventListener("mouseup", this.onMouseUp);
        event.preventDefault();
      }
    },
    onMouseUp: function onMouseUp(event) {
      if (!this.disabled && !this.readonly) {
        (void 0).removeEventListener("mousemove", this.onMouseMove);
        (void 0).removeEventListener("mouseup", this.onMouseUp);
        event.preventDefault();
      }
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.disabled && !this.readonly) {
        (void 0).addEventListener("touchmove", this.onTouchMove);
        (void 0).addEventListener("touchend", this.onTouchEnd);
        event.preventDefault();
      }
    },
    onTouchEnd: function onTouchEnd(event) {
      if (!this.disabled && !this.readonly) {
        (void 0).removeEventListener("touchmove", this.onTouchMove);
        (void 0).removeEventListener("touchend", this.onTouchEnd);
        event.preventDefault();
      }
    },
    onMouseMove: function onMouseMove(event) {
      if (!this.disabled && !this.readonly) {
        this.updateValueByOffset(event.offsetX, event.offsetY);
        event.preventDefault();
      }
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.disabled && !this.readonly && event.touches.length == 1) {
        var rect = this.$el.getBoundingClientRect();
        var touch = event.targetTouches.item(0);
        var offsetX = touch.clientX - rect.left;
        var offsetY = touch.clientY - rect.top;
        this.updateValueByOffset(offsetX, offsetY);
      }
    },
    onKeyDown: function onKeyDown(event) {
      if (!this.disabled && !this.readonly) {
        switch (event.code) {
          case "ArrowRight":
          case "ArrowUp": {
            event.preventDefault();
            this.updateModelValue(this.d_value + this.step);
            break;
          }
          case "ArrowLeft":
          case "ArrowDown": {
            event.preventDefault();
            this.updateModelValue(this.d_value - this.step);
            break;
          }
          case "Home": {
            event.preventDefault();
            this.writeValue(this.min);
            break;
          }
          case "End": {
            event.preventDefault();
            this.writeValue(this.max);
            break;
          }
          case "PageUp": {
            event.preventDefault();
            this.updateModelValue(this.d_value + 10);
            break;
          }
          case "PageDown": {
            event.preventDefault();
            this.updateModelValue(this.d_value - 10);
            break;
          }
        }
      }
    }
  },
  computed: {
    rangePath: function rangePath() {
      return "M ".concat(this.minX, " ").concat(this.minY, " A ").concat(this.radius, " ").concat(this.radius, " 0 1 1 ").concat(this.maxX, " ").concat(this.maxY);
    },
    valuePath: function valuePath() {
      return "M ".concat(this.zeroX, " ").concat(this.zeroY, " A ").concat(this.radius, " ").concat(this.radius, " 0 ").concat(this.largeArc, " ").concat(this.sweep, " ").concat(this.valueX, " ").concat(this.valueY);
    },
    zeroRadians: function zeroRadians() {
      if (this.min > 0 && this.max > 0) return this.mapRange(this.min, this.min, this.max, this.minRadians, this.maxRadians);
      else return this.mapRange(0, this.min, this.max, this.minRadians, this.maxRadians);
    },
    valueRadians: function valueRadians() {
      return this.mapRange(this.d_value, this.min, this.max, this.minRadians, this.maxRadians);
    },
    minX: function minX() {
      return this.midX + Math.cos(this.minRadians) * this.radius;
    },
    minY: function minY() {
      return this.midY - Math.sin(this.minRadians) * this.radius;
    },
    maxX: function maxX() {
      return this.midX + Math.cos(this.maxRadians) * this.radius;
    },
    maxY: function maxY() {
      return this.midY - Math.sin(this.maxRadians) * this.radius;
    },
    zeroX: function zeroX() {
      return this.midX + Math.cos(this.zeroRadians) * this.radius;
    },
    zeroY: function zeroY() {
      return this.midY - Math.sin(this.zeroRadians) * this.radius;
    },
    valueX: function valueX() {
      return this.midX + Math.cos(this.valueRadians) * this.radius;
    },
    valueY: function valueY() {
      return this.midY - Math.sin(this.valueRadians) * this.radius;
    },
    largeArc: function largeArc() {
      return Math.abs(this.zeroRadians - this.valueRadians) < Math_PI ? 0 : 1;
    },
    sweep: function sweep() {
      return this.valueRadians > this.zeroRadians ? 0 : 1;
    },
    valueToDisplay: function valueToDisplay() {
      if (typeof this.valueTemplate === "string") {
        return this.valueTemplate.replace(/{value}/g, this.d_value);
      } else {
        return this.valueTemplate(this.d_value);
      }
    }
  }
};
var _hoisted_1 = ["width", "height", "tabindex", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-labelledby", "aria-label"];
var _hoisted_2 = ["d", "stroke-width", "stroke"];
var _hoisted_3 = ["d", "stroke-width", "stroke"];
var _hoisted_4 = ["fill"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [(openBlock(), createElementBlock("svg", mergeProps({
    viewBox: "0 0 100 100",
    role: "slider",
    width: _ctx.size,
    height: _ctx.size,
    tabindex: _ctx.readonly || _ctx.disabled ? -1 : _ctx.tabindex,
    "aria-valuemin": _ctx.min,
    "aria-valuemax": _ctx.max,
    "aria-valuenow": _ctx.d_value,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    onClick: _cache[0] || (_cache[0] = function() {
      return $options.onClick && $options.onClick.apply($options, arguments);
    }),
    onBlur: _cache[1] || (_cache[1] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    onKeydown: _cache[2] || (_cache[2] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    }),
    onMousedown: _cache[3] || (_cache[3] = function() {
      return $options.onMouseDown && $options.onMouseDown.apply($options, arguments);
    }),
    onMouseup: _cache[4] || (_cache[4] = function() {
      return $options.onMouseUp && $options.onMouseUp.apply($options, arguments);
    }),
    onTouchstart: _cache[5] || (_cache[5] = function() {
      return $options.onTouchStart && $options.onTouchStart.apply($options, arguments);
    }),
    onTouchend: _cache[6] || (_cache[6] = function() {
      return $options.onTouchEnd && $options.onTouchEnd.apply($options, arguments);
    })
  }, _ctx.ptm("svg")), [createElementVNode("path", mergeProps({
    d: $options.rangePath,
    "stroke-width": _ctx.strokeWidth,
    stroke: _ctx.rangeColor,
    "class": _ctx.cx("range")
  }, _ctx.ptm("range")), null, 16, _hoisted_2), createElementVNode("path", mergeProps({
    d: $options.valuePath,
    "stroke-width": _ctx.strokeWidth,
    stroke: _ctx.valueColor,
    "class": _ctx.cx("value")
  }, _ctx.ptm("value")), null, 16, _hoisted_3), _ctx.showValue ? (openBlock(), createElementBlock("text", mergeProps({
    key: 0,
    x: 50,
    y: 57,
    "text-anchor": "middle",
    fill: _ctx.textColor,
    "class": _ctx.cx("text")
  }, _ctx.ptm("text")), toDisplayString($options.valueToDisplay), 17, _hoisted_4)) : createCommentVNode("", true)], 16, _hoisted_1))], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-CglcKnj9.mjs.map
