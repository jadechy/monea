import { cn } from '@primeuix/utils';
import { getAttribute, isRTL, getWindowScrollLeft, getWindowScrollTop } from '@primeuix/utils/dom';
import { s as script$2 } from './index-wMdTEZV0.mjs';
import { style } from '@primeuix/styles/slider';
import { B as BaseStyle } from './server.mjs';
import { createElementBlock, openBlock, mergeProps, createElementVNode, createCommentVNode } from 'vue';
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
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
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

var inlineStyles = {
  handle: {
    position: "absolute"
  },
  range: {
    position: "absolute"
  }
};
var classes = {
  root: function root(_ref) {
    var instance = _ref.instance, props = _ref.props;
    return ["p-slider p-component", {
      "p-disabled": props.disabled,
      "p-invalid": instance.$invalid,
      "p-slider-horizontal": props.orientation === "horizontal",
      "p-slider-vertical": props.orientation === "vertical"
    }];
  },
  range: "p-slider-range",
  handle: "p-slider-handle"
};
var SliderStyle = BaseStyle.extend({
  name: "slider",
  style,
  classes,
  inlineStyles
});
var script$1 = {
  name: "BaseSlider",
  "extends": script$2,
  props: {
    min: {
      type: Number,
      "default": 0
    },
    max: {
      type: Number,
      "default": 100
    },
    orientation: {
      type: String,
      "default": "horizontal"
    },
    step: {
      type: Number,
      "default": null
    },
    range: {
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
  style: SliderStyle,
  provide: function provide() {
    return {
      $pcSlider: this,
      $parentInstance: this
    };
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
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
var script = {
  name: "Slider",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["change", "slideend"],
  dragging: false,
  handleIndex: null,
  initX: null,
  initY: null,
  barWidth: null,
  barHeight: null,
  dragListener: null,
  dragEndListener: null,
  beforeUnmount: function beforeUnmount() {
    this.unbindDragListeners();
  },
  methods: {
    updateDomData: function updateDomData() {
      var rect = this.$el.getBoundingClientRect();
      this.initX = rect.left + getWindowScrollLeft();
      this.initY = rect.top + getWindowScrollTop();
      this.barWidth = this.$el.offsetWidth;
      this.barHeight = this.$el.offsetHeight;
    },
    setValue: function setValue(event) {
      var handleValue;
      var pageX = event.touches ? event.touches[0].pageX : event.pageX;
      var pageY = event.touches ? event.touches[0].pageY : event.pageY;
      if (this.orientation === "horizontal") {
        if (isRTL(this.$el)) {
          handleValue = (this.initX + this.barWidth - pageX) * 100 / this.barWidth;
        } else {
          handleValue = (pageX - this.initX) * 100 / this.barWidth;
        }
      } else {
        handleValue = (this.initY + this.barHeight - pageY) * 100 / this.barHeight;
      }
      var newValue = (this.max - this.min) * (handleValue / 100) + this.min;
      if (this.step) {
        var oldValue = this.range ? this.value[this.handleIndex] : this.value;
        var diff = newValue - oldValue;
        if (diff < 0) newValue = oldValue + Math.ceil(newValue / this.step - oldValue / this.step) * this.step;
        else if (diff > 0) newValue = oldValue + Math.floor(newValue / this.step - oldValue / this.step) * this.step;
      } else {
        newValue = Math.floor(newValue);
      }
      this.updateModel(event, newValue);
    },
    updateModel: function updateModel(event, value2) {
      var newValue = Math.round(value2 * 100) / 100;
      var modelValue;
      if (this.range) {
        modelValue = this.value ? _toConsumableArray(this.value) : [];
        if (this.handleIndex == 0) {
          if (newValue < this.min) newValue = this.min;
          else if (newValue >= this.max) newValue = this.max;
          modelValue[0] = newValue;
        } else {
          if (newValue > this.max) newValue = this.max;
          else if (newValue <= this.min) newValue = this.min;
          modelValue[1] = newValue;
        }
      } else {
        if (newValue < this.min) newValue = this.min;
        else if (newValue > this.max) newValue = this.max;
        modelValue = newValue;
      }
      this.writeValue(modelValue, event);
      this.$emit("change", modelValue);
    },
    onDragStart: function onDragStart(event, index) {
      if (this.disabled) {
        return;
      }
      this.$el.setAttribute("data-p-sliding", true);
      this.dragging = true;
      this.updateDomData();
      if (this.range && this.value[0] === this.max) {
        this.handleIndex = 0;
      } else {
        this.handleIndex = index;
      }
      event.currentTarget.focus();
    },
    onDrag: function onDrag(event) {
      if (this.dragging) {
        this.setValue(event);
      }
    },
    onDragEnd: function onDragEnd(event) {
      if (this.dragging) {
        this.dragging = false;
        this.$el.setAttribute("data-p-sliding", false);
        this.$emit("slideend", {
          originalEvent: event,
          value: this.value
        });
      }
    },
    onBarClick: function onBarClick(event) {
      if (this.disabled) {
        return;
      }
      if (getAttribute(event.target, "data-pc-section") !== "handle") {
        this.updateDomData();
        this.setValue(event);
      }
    },
    onMouseDown: function onMouseDown(event, index) {
      this.bindDragListeners();
      this.onDragStart(event, index);
    },
    onKeyDown: function onKeyDown(event, index) {
      this.handleIndex = index;
      switch (event.code) {
        case "ArrowDown":
        case "ArrowLeft":
          this.decrementValue(event, index);
          event.preventDefault();
          break;
        case "ArrowUp":
        case "ArrowRight":
          this.incrementValue(event, index);
          event.preventDefault();
          break;
        case "PageDown":
          this.decrementValue(event, index, true);
          event.preventDefault();
          break;
        case "PageUp":
          this.incrementValue(event, index, true);
          event.preventDefault();
          break;
        case "Home":
          this.updateModel(event, this.min);
          event.preventDefault();
          break;
        case "End":
          this.updateModel(event, this.max);
          event.preventDefault();
          break;
      }
    },
    onBlur: function onBlur(event, index) {
      var _this$formField$onBlu, _this$formField;
      (_this$formField$onBlu = (_this$formField = this.formField).onBlur) === null || _this$formField$onBlu === void 0 || _this$formField$onBlu.call(_this$formField, event);
    },
    decrementValue: function decrementValue(event, index) {
      var pageKey = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var newValue;
      if (this.range) {
        if (this.step) newValue = this.value[index] - this.step;
        else newValue = this.value[index] - 1;
      } else {
        if (this.step) newValue = this.value - this.step;
        else if (!this.step && pageKey) newValue = this.value - 10;
        else newValue = this.value - 1;
      }
      this.updateModel(event, newValue);
      event.preventDefault();
    },
    incrementValue: function incrementValue(event, index) {
      var pageKey = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var newValue;
      if (this.range) {
        if (this.step) newValue = this.value[index] + this.step;
        else newValue = this.value[index] + 1;
      } else {
        if (this.step) newValue = this.value + this.step;
        else if (!this.step && pageKey) newValue = this.value + 10;
        else newValue = this.value + 1;
      }
      this.updateModel(event, newValue);
      event.preventDefault();
    },
    bindDragListeners: function bindDragListeners() {
      if (!this.dragListener) {
        this.dragListener = this.onDrag.bind(this);
        (void 0).addEventListener("mousemove", this.dragListener);
      }
      if (!this.dragEndListener) {
        this.dragEndListener = this.onDragEnd.bind(this);
        (void 0).addEventListener("mouseup", this.dragEndListener);
      }
    },
    unbindDragListeners: function unbindDragListeners() {
      if (this.dragListener) {
        (void 0).removeEventListener("mousemove", this.dragListener);
        this.dragListener = null;
      }
      if (this.dragEndListener) {
        (void 0).removeEventListener("mouseup", this.dragEndListener);
        this.dragEndListener = null;
      }
    },
    rangeStyle: function rangeStyle() {
      if (this.range) {
        var rangeSliderWidth = this.rangeEndPosition > this.rangeStartPosition ? this.rangeEndPosition - this.rangeStartPosition : this.rangeStartPosition - this.rangeEndPosition;
        var rangeSliderPosition = this.rangeEndPosition > this.rangeStartPosition ? this.rangeStartPosition : this.rangeEndPosition;
        if (this.horizontal) {
          return {
            "inset-inline-start": rangeSliderPosition + "%",
            width: rangeSliderWidth + "%"
          };
        } else {
          return {
            bottom: rangeSliderPosition + "%",
            height: rangeSliderWidth + "%"
          };
        }
      } else {
        if (this.horizontal) {
          return {
            width: this.handlePosition + "%"
          };
        } else {
          return {
            height: this.handlePosition + "%"
          };
        }
      }
    },
    handleStyle: function handleStyle() {
      if (this.horizontal) {
        return {
          "inset-inline-start": this.handlePosition + "%"
        };
      } else {
        return {
          bottom: this.handlePosition + "%"
        };
      }
    },
    rangeStartHandleStyle: function rangeStartHandleStyle() {
      if (this.horizontal) {
        return {
          "inset-inline-start": this.rangeStartPosition + "%"
        };
      } else {
        return {
          bottom: this.rangeStartPosition + "%"
        };
      }
    },
    rangeEndHandleStyle: function rangeEndHandleStyle() {
      if (this.horizontal) {
        return {
          "inset-inline-start": this.rangeEndPosition + "%"
        };
      } else {
        return {
          bottom: this.rangeEndPosition + "%"
        };
      }
    }
  },
  computed: {
    value: function value() {
      var _this$d_value3;
      if (this.range) {
        var _this$d_value$, _this$d_value, _this$d_value$2, _this$d_value2;
        return [(_this$d_value$ = (_this$d_value = this.d_value) === null || _this$d_value === void 0 ? void 0 : _this$d_value[0]) !== null && _this$d_value$ !== void 0 ? _this$d_value$ : this.min, (_this$d_value$2 = (_this$d_value2 = this.d_value) === null || _this$d_value2 === void 0 ? void 0 : _this$d_value2[1]) !== null && _this$d_value$2 !== void 0 ? _this$d_value$2 : this.max];
      }
      return (_this$d_value3 = this.d_value) !== null && _this$d_value3 !== void 0 ? _this$d_value3 : this.min;
    },
    horizontal: function horizontal() {
      return this.orientation === "horizontal";
    },
    vertical: function vertical() {
      return this.orientation === "vertical";
    },
    handlePosition: function handlePosition() {
      if (this.value < this.min) return 0;
      else if (this.value > this.max) return 100;
      else return (this.value - this.min) * 100 / (this.max - this.min);
    },
    rangeStartPosition: function rangeStartPosition() {
      if (this.value && this.value[0] !== void 0) {
        if (this.value[0] < this.min) return 0;
        else return (this.value[0] - this.min) * 100 / (this.max - this.min);
      } else return 0;
    },
    rangeEndPosition: function rangeEndPosition() {
      if (this.value && this.value.length === 2 && this.value[1] !== void 0) {
        if (this.value[1] > this.max) return 100;
        else return (this.value[1] - this.min) * 100 / (this.max - this.min);
      } else return 100;
    },
    dataP: function dataP() {
      return cn(_defineProperty({}, this.orientation, this.orientation));
    }
  }
};
var _hoisted_1 = ["data-p"];
var _hoisted_2 = ["data-p"];
var _hoisted_3 = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "aria-labelledby", "aria-label", "aria-orientation", "data-p"];
var _hoisted_4 = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "aria-labelledby", "aria-label", "aria-orientation", "data-p"];
var _hoisted_5 = ["tabindex", "aria-valuemin", "aria-valuenow", "aria-valuemax", "aria-labelledby", "aria-label", "aria-orientation", "data-p"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    onClick: _cache[18] || (_cache[18] = function() {
      return $options.onBarClick && $options.onBarClick.apply($options, arguments);
    })
  }, _ctx.ptmi("root"), {
    "data-p-sliding": false,
    "data-p": $options.dataP
  }), [createElementVNode("span", mergeProps({
    "class": _ctx.cx("range"),
    style: [_ctx.sx("range"), $options.rangeStyle()]
  }, _ctx.ptm("range"), {
    "data-p": $options.dataP
  }), null, 16, _hoisted_2), !_ctx.range ? (openBlock(), createElementBlock("span", mergeProps({
    key: 0,
    "class": _ctx.cx("handle"),
    style: [_ctx.sx("handle"), $options.handleStyle()],
    onTouchstartPassive: _cache[0] || (_cache[0] = function($event) {
      return $options.onDragStart($event);
    }),
    onTouchmovePassive: _cache[1] || (_cache[1] = function($event) {
      return $options.onDrag($event);
    }),
    onTouchend: _cache[2] || (_cache[2] = function($event) {
      return $options.onDragEnd($event);
    }),
    onMousedown: _cache[3] || (_cache[3] = function($event) {
      return $options.onMouseDown($event);
    }),
    onKeydown: _cache[4] || (_cache[4] = function($event) {
      return $options.onKeyDown($event);
    }),
    onBlur: _cache[5] || (_cache[5] = function($event) {
      return $options.onBlur($event);
    }),
    tabindex: _ctx.tabindex,
    role: "slider",
    "aria-valuemin": _ctx.min,
    "aria-valuenow": _ctx.d_value,
    "aria-valuemax": _ctx.max,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    "aria-orientation": _ctx.orientation
  }, _ctx.ptm("handle"), {
    "data-p": $options.dataP
  }), null, 16, _hoisted_3)) : createCommentVNode("", true), _ctx.range ? (openBlock(), createElementBlock("span", mergeProps({
    key: 1,
    "class": _ctx.cx("handle"),
    style: [_ctx.sx("handle"), $options.rangeStartHandleStyle()],
    onTouchstartPassive: _cache[6] || (_cache[6] = function($event) {
      return $options.onDragStart($event, 0);
    }),
    onTouchmovePassive: _cache[7] || (_cache[7] = function($event) {
      return $options.onDrag($event);
    }),
    onTouchend: _cache[8] || (_cache[8] = function($event) {
      return $options.onDragEnd($event);
    }),
    onMousedown: _cache[9] || (_cache[9] = function($event) {
      return $options.onMouseDown($event, 0);
    }),
    onKeydown: _cache[10] || (_cache[10] = function($event) {
      return $options.onKeyDown($event, 0);
    }),
    onBlur: _cache[11] || (_cache[11] = function($event) {
      return $options.onBlur($event, 0);
    }),
    tabindex: _ctx.tabindex,
    role: "slider",
    "aria-valuemin": _ctx.min,
    "aria-valuenow": _ctx.d_value ? _ctx.d_value[0] : null,
    "aria-valuemax": _ctx.max,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    "aria-orientation": _ctx.orientation
  }, _ctx.ptm("startHandler"), {
    "data-p": $options.dataP
  }), null, 16, _hoisted_4)) : createCommentVNode("", true), _ctx.range ? (openBlock(), createElementBlock("span", mergeProps({
    key: 2,
    "class": _ctx.cx("handle"),
    style: [_ctx.sx("handle"), $options.rangeEndHandleStyle()],
    onTouchstartPassive: _cache[12] || (_cache[12] = function($event) {
      return $options.onDragStart($event, 1);
    }),
    onTouchmovePassive: _cache[13] || (_cache[13] = function($event) {
      return $options.onDrag($event);
    }),
    onTouchend: _cache[14] || (_cache[14] = function($event) {
      return $options.onDragEnd($event);
    }),
    onMousedown: _cache[15] || (_cache[15] = function($event) {
      return $options.onMouseDown($event, 1);
    }),
    onKeydown: _cache[16] || (_cache[16] = function($event) {
      return $options.onKeyDown($event, 1);
    }),
    onBlur: _cache[17] || (_cache[17] = function($event) {
      return $options.onBlur($event, 1);
    }),
    tabindex: _ctx.tabindex,
    role: "slider",
    "aria-valuemin": _ctx.min,
    "aria-valuenow": _ctx.d_value ? _ctx.d_value[1] : null,
    "aria-valuemax": _ctx.max,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-label": _ctx.ariaLabel,
    "aria-orientation": _ctx.orientation
  }, _ctx.ptm("endHandler"), {
    "data-p": $options.dataP
  }), null, 16, _hoisted_5)) : createCommentVNode("", true)], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-OeEmIhNG.mjs.map
