import { isTouchDevice, addClass, removeClass, relativePosition, absolutePosition } from '@primeuix/utils/dom';
import { ZIndex } from '@primeuix/utils/zindex';
import { C as ConnectedOverlayScrollHandler } from './index-UnQD5FIJ.mjs';
import { O as OverlayEventBus } from './index-rAVNvoJo.mjs';
import { s as script$2 } from './index-D21vFaAL.mjs';
import { s as script$3 } from './index-_YLQpnfS.mjs';
import { style } from '@primeuix/styles/colorpicker';
import { B as BaseStyle } from './server.mjs';
import { resolveComponent, createElementBlock, openBlock, mergeProps, createCommentVNode, createVNode, withCtx, Transition, createElementVNode } from 'vue';
import '@primeuix/utils/object';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import './index-f6-L4oOs.mjs';
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
  root: "p-colorpicker p-component",
  preview: function preview(_ref) {
    var props = _ref.props;
    return ["p-colorpicker-preview", {
      "p-disabled": props.disabled
    }];
  },
  panel: function panel(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-colorpicker-panel", {
      "p-colorpicker-panel-inline": props.inline,
      "p-disabled": props.disabled,
      "p-invalid": instance.$invalid
    }];
  },
  colorSelector: "p-colorpicker-color-selector",
  colorBackground: "p-colorpicker-color-background",
  colorHandle: "p-colorpicker-color-handle",
  hue: "p-colorpicker-hue",
  hueHandle: "p-colorpicker-hue-handle"
};
var ColorPickerStyle = BaseStyle.extend({
  name: "colorpicker",
  style,
  classes
});
var script$1 = {
  name: "BaseColorPicker",
  "extends": script$3,
  props: {
    defaultColor: {
      type: null,
      "default": "ff0000"
    },
    inline: {
      type: Boolean,
      "default": false
    },
    format: {
      type: String,
      "default": "hex"
    },
    tabindex: {
      type: String,
      "default": null
    },
    autoZIndex: {
      type: Boolean,
      "default": true
    },
    baseZIndex: {
      type: Number,
      "default": 0
    },
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    inputId: {
      type: String,
      "default": null
    },
    panelClass: null,
    overlayClass: null
  },
  style: ColorPickerStyle,
  provide: function provide() {
    return {
      $pcColorPicker: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "ColorPicker",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["change", "show", "hide"],
  data: function data() {
    return {
      overlayVisible: false
    };
  },
  hsbValue: null,
  localHue: null,
  outsideClickListener: null,
  documentMouseMoveListener: null,
  documentMouseUpListener: null,
  scrollHandler: null,
  resizeListener: null,
  hueDragging: null,
  colorDragging: null,
  selfUpdate: null,
  picker: null,
  colorSelector: null,
  colorHandle: null,
  hueView: null,
  hueHandle: null,
  watch: {
    modelValue: {
      immediate: true,
      handler: function handler(newValue) {
        this.hsbValue = this.toHSB(newValue);
        if (this.selfUpdate) this.selfUpdate = false;
        else this.updateUI();
      }
    }
  },
  beforeUnmount: function beforeUnmount() {
    this.unbindOutsideClickListener();
    this.unbindDragListeners();
    this.unbindResizeListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.picker && this.autoZIndex) {
      ZIndex.clear(this.picker);
    }
    this.clearRefs();
  },
  mounted: function mounted() {
    this.updateUI();
  },
  methods: {
    pickColor: function pickColor(event) {
      var rect = this.colorSelector.getBoundingClientRect();
      var top = rect.top + ((void 0).pageYOffset || (void 0).documentElement.scrollTop || (void 0).body.scrollTop || 0);
      var left = rect.left + (void 0).body.scrollLeft;
      var saturation = Math.floor(100 * Math.max(0, Math.min(150, (event.pageX || event.changedTouches[0].pageX) - left)) / 150);
      var brightness = Math.floor(100 * (150 - Math.max(0, Math.min(150, (event.pageY || event.changedTouches[0].pageY) - top))) / 150);
      this.hsbValue = this.validateHSB({
        h: this.localHue,
        s: saturation,
        b: brightness
      });
      this.selfUpdate = true;
      this.updateColorHandle();
      this.updateInput();
      this.updateModel(event);
    },
    pickHue: function pickHue(event) {
      var top = this.hueView.getBoundingClientRect().top + ((void 0).pageYOffset || (void 0).documentElement.scrollTop || (void 0).body.scrollTop || 0);
      this.localHue = Math.floor(360 * (150 - Math.max(0, Math.min(150, (event.pageY || event.changedTouches[0].pageY) - top))) / 150);
      this.hsbValue = this.validateHSB({
        h: this.localHue,
        s: 100,
        b: 100
      });
      this.selfUpdate = true;
      this.updateColorSelector();
      this.updateHue();
      this.updateModel(event);
      this.updateInput();
    },
    updateModel: function updateModel(event) {
      var value = this.d_value;
      switch (this.format) {
        case "hex":
          value = this.HSBtoHEX(this.hsbValue);
          break;
        case "rgb":
          value = this.HSBtoRGB(this.hsbValue);
          break;
        case "hsb":
          value = this.hsbValue;
          break;
      }
      this.writeValue(value, event);
      this.$emit("change", {
        event,
        value
      });
    },
    updateColorSelector: function updateColorSelector() {
      if (this.colorSelector) {
        var hsbValue = this.validateHSB({
          h: this.hsbValue.h,
          s: 100,
          b: 100
        });
        this.colorSelector.style.backgroundColor = "#" + this.HSBtoHEX(hsbValue);
      }
    },
    updateColorHandle: function updateColorHandle() {
      if (this.colorHandle) {
        this.colorHandle.style.left = Math.floor(150 * this.hsbValue.s / 100) + "px";
        this.colorHandle.style.top = Math.floor(150 * (100 - this.hsbValue.b) / 100) + "px";
      }
    },
    updateHue: function updateHue() {
      if (this.hueHandle) {
        this.hueHandle.style.top = Math.floor(150 - 150 * this.hsbValue.h / 360) + "px";
      }
    },
    updateInput: function updateInput() {
      if (this.$refs.input) {
        this.$refs.input.style.backgroundColor = "#" + this.HSBtoHEX(this.hsbValue);
      }
    },
    updateUI: function updateUI() {
      this.updateHue();
      this.updateColorHandle();
      this.updateInput();
      this.updateColorSelector();
    },
    validateHSB: function validateHSB(hsb) {
      return {
        h: Math.min(360, Math.max(0, hsb.h)),
        s: Math.min(100, Math.max(0, hsb.s)),
        b: Math.min(100, Math.max(0, hsb.b))
      };
    },
    validateRGB: function validateRGB(rgb) {
      return {
        r: Math.min(255, Math.max(0, rgb.r)),
        g: Math.min(255, Math.max(0, rgb.g)),
        b: Math.min(255, Math.max(0, rgb.b))
      };
    },
    validateHEX: function validateHEX(hex) {
      var len = 6 - hex.length;
      if (len > 0) {
        var o = [];
        for (var i = 0; i < len; i++) {
          o.push("0");
        }
        o.push(hex);
        hex = o.join("");
      }
      return hex;
    },
    HEXtoRGB: function HEXtoRGB(hex) {
      var hexValue = parseInt(hex.indexOf("#") > -1 ? hex.substring(1) : hex, 16);
      return {
        r: hexValue >> 16,
        g: (hexValue & 65280) >> 8,
        b: hexValue & 255
      };
    },
    HEXtoHSB: function HEXtoHSB(hex) {
      return this.RGBtoHSB(this.HEXtoRGB(hex));
    },
    RGBtoHSB: function RGBtoHSB(rgb) {
      var hsb = {
        h: 0,
        s: 0,
        b: 0
      };
      var min = Math.min(rgb.r, rgb.g, rgb.b);
      var max = Math.max(rgb.r, rgb.g, rgb.b);
      var delta = max - min;
      hsb.b = max;
      hsb.s = max !== 0 ? 255 * delta / max : 0;
      if (hsb.s !== 0) {
        if (rgb.r === max) {
          hsb.h = (rgb.g - rgb.b) / delta;
        } else if (rgb.g === max) {
          hsb.h = 2 + (rgb.b - rgb.r) / delta;
        } else {
          hsb.h = 4 + (rgb.r - rgb.g) / delta;
        }
      } else {
        hsb.h = -1;
      }
      hsb.h *= 60;
      if (hsb.h < 0) {
        hsb.h += 360;
      }
      hsb.s *= 100 / 255;
      hsb.b *= 100 / 255;
      return hsb;
    },
    HSBtoRGB: function HSBtoRGB(hsb) {
      var rgb = {
        r: null,
        g: null,
        b: null
      };
      var h = Math.round(hsb.h);
      var s = Math.round(hsb.s * 255 / 100);
      var v = Math.round(hsb.b * 255 / 100);
      if (s === 0) {
        rgb = {
          r: v,
          g: v,
          b: v
        };
      } else {
        var t1 = v;
        var t2 = (255 - s) * v / 255;
        var t3 = (t1 - t2) * (h % 60) / 60;
        if (h === 360) h = 0;
        if (h < 60) {
          rgb.r = t1;
          rgb.b = t2;
          rgb.g = t2 + t3;
        } else if (h < 120) {
          rgb.g = t1;
          rgb.b = t2;
          rgb.r = t1 - t3;
        } else if (h < 180) {
          rgb.g = t1;
          rgb.r = t2;
          rgb.b = t2 + t3;
        } else if (h < 240) {
          rgb.b = t1;
          rgb.r = t2;
          rgb.g = t1 - t3;
        } else if (h < 300) {
          rgb.b = t1;
          rgb.g = t2;
          rgb.r = t2 + t3;
        } else if (h < 360) {
          rgb.r = t1;
          rgb.g = t2;
          rgb.b = t1 - t3;
        } else {
          rgb.r = 0;
          rgb.g = 0;
          rgb.b = 0;
        }
      }
      return {
        r: Math.round(rgb.r),
        g: Math.round(rgb.g),
        b: Math.round(rgb.b)
      };
    },
    RGBtoHEX: function RGBtoHEX(rgb) {
      var hex = [rgb.r.toString(16), rgb.g.toString(16), rgb.b.toString(16)];
      for (var key in hex) {
        if (hex[key].length === 1) {
          hex[key] = "0" + hex[key];
        }
      }
      return hex.join("");
    },
    HSBtoHEX: function HSBtoHEX(hsb) {
      return this.RGBtoHEX(this.HSBtoRGB(hsb));
    },
    toHSB: function toHSB(value) {
      var hsb;
      if (value) {
        switch (this.format) {
          case "hex":
            hsb = this.HEXtoHSB(value);
            break;
          case "rgb":
            hsb = this.RGBtoHSB(value);
            break;
          case "hsb":
            hsb = value;
            break;
        }
      } else {
        hsb = this.HEXtoHSB(this.defaultColor);
      }
      if (this.localHue == null || !this.overlayVisible) {
        this.localHue = hsb.h;
      } else {
        hsb.h = this.localHue;
      }
      return hsb;
    },
    onOverlayEnter: function onOverlayEnter(el) {
      this.updateUI();
      this.alignOverlay();
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      if (this.autoZIndex) {
        ZIndex.set("overlay", el, this.baseZIndex, this.$primevue.config.zIndex.overlay);
      }
      this.$attrSelector && el.setAttribute(this.$attrSelector, "");
      this.$emit("show");
    },
    onOverlayLeave: function onOverlayLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.clearRefs();
      this.$emit("hide");
    },
    onOverlayAfterLeave: function onOverlayAfterLeave(el) {
      if (this.autoZIndex) {
        ZIndex.clear(el);
      }
    },
    alignOverlay: function alignOverlay() {
      if (this.appendTo === "self") relativePosition(this.picker, this.$refs.input);
      else absolutePosition(this.picker, this.$refs.input);
    },
    onInputClick: function onInputClick() {
      if (this.disabled) {
        return;
      }
      this.overlayVisible = !this.overlayVisible;
    },
    onInputKeydown: function onInputKeydown(event) {
      switch (event.code) {
        case "Space":
          this.overlayVisible = !this.overlayVisible;
          event.preventDefault();
          break;
        case "Escape":
        case "Tab":
          this.overlayVisible = false;
          break;
      }
    },
    onInputBlur: function onInputBlur(event) {
      var _this$formField$onBlu, _this$formField;
      (_this$formField$onBlu = (_this$formField = this.formField).onBlur) === null || _this$formField$onBlu === void 0 || _this$formField$onBlu.call(_this$formField);
    },
    onColorMousedown: function onColorMousedown(event) {
      if (this.disabled) {
        return;
      }
      this.bindDragListeners();
      this.onColorDragStart(event);
    },
    onColorDragStart: function onColorDragStart(event) {
      if (this.disabled) {
        return;
      }
      this.colorDragging = true;
      this.pickColor(event);
      this.$el.setAttribute("p-colorpicker-dragging", "true");
      !this.isUnstyled && addClass(this.$el, "p-colorpicker-dragging");
      event.preventDefault();
    },
    onDrag: function onDrag(event) {
      if (this.colorDragging) {
        this.pickColor(event);
        event.preventDefault();
      }
      if (this.hueDragging) {
        this.pickHue(event);
        event.preventDefault();
      }
    },
    onDragEnd: function onDragEnd() {
      this.colorDragging = false;
      this.hueDragging = false;
      this.$el.setAttribute("p-colorpicker-dragging", "false");
      !this.isUnstyled && removeClass(this.$el, "p-colorpicker-dragging");
      this.unbindDragListeners();
    },
    onHueMousedown: function onHueMousedown(event) {
      if (this.disabled) {
        return;
      }
      this.bindDragListeners();
      this.onHueDragStart(event);
    },
    onHueDragStart: function onHueDragStart(event) {
      if (this.disabled) {
        return;
      }
      this.hueDragging = true;
      this.pickHue(event);
      !this.isUnstyled && addClass(this.$el, "p-colorpicker-dragging");
      event.preventDefault();
    },
    isInputClicked: function isInputClicked(event) {
      return this.$refs.input && this.$refs.input.isSameNode(event.target);
    },
    bindDragListeners: function bindDragListeners() {
      this.bindDocumentMouseMoveListener();
      this.bindDocumentMouseUpListener();
    },
    unbindDragListeners: function unbindDragListeners() {
      this.unbindDocumentMouseMoveListener();
      this.unbindDocumentMouseUpListener();
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          if (_this.overlayVisible && _this.picker && !_this.picker.contains(event.target) && !_this.isInputClicked(event)) {
            _this.overlayVisible = false;
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
      var _this2 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, function() {
          if (_this2.overlayVisible) {
            _this2.overlayVisible = false;
          }
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
      var _this3 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this3.overlayVisible && !isTouchDevice()) {
            _this3.overlayVisible = false;
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
    bindDocumentMouseMoveListener: function bindDocumentMouseMoveListener() {
      if (!this.documentMouseMoveListener) {
        this.documentMouseMoveListener = this.onDrag.bind(this);
        (void 0).addEventListener("mousemove", this.documentMouseMoveListener);
      }
    },
    unbindDocumentMouseMoveListener: function unbindDocumentMouseMoveListener() {
      if (this.documentMouseMoveListener) {
        (void 0).removeEventListener("mousemove", this.documentMouseMoveListener);
        this.documentMouseMoveListener = null;
      }
    },
    bindDocumentMouseUpListener: function bindDocumentMouseUpListener() {
      if (!this.documentMouseUpListener) {
        this.documentMouseUpListener = this.onDragEnd.bind(this);
        (void 0).addEventListener("mouseup", this.documentMouseUpListener);
      }
    },
    unbindDocumentMouseUpListener: function unbindDocumentMouseUpListener() {
      if (this.documentMouseUpListener) {
        (void 0).removeEventListener("mouseup", this.documentMouseUpListener);
        this.documentMouseUpListener = null;
      }
    },
    pickerRef: function pickerRef(el) {
      this.picker = el;
    },
    colorSelectorRef: function colorSelectorRef(el) {
      this.colorSelector = el;
    },
    colorHandleRef: function colorHandleRef(el) {
      this.colorHandle = el;
    },
    hueViewRef: function hueViewRef(el) {
      this.hueView = el;
    },
    hueHandleRef: function hueHandleRef(el) {
      this.hueHandle = el;
    },
    clearRefs: function clearRefs() {
      this.picker = null;
      this.colorSelector = null;
      this.colorHandle = null;
      this.hueView = null;
      this.hueHandle = null;
    },
    onOverlayClick: function onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.$el
      });
    }
  },
  components: {
    Portal: script$2
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
var _hoisted_1 = ["id", "tabindex", "disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Portal = resolveComponent("Portal");
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container",
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [!_ctx.inline ? (openBlock(), createElementBlock("input", mergeProps({
    key: 0,
    ref: "input",
    id: _ctx.inputId,
    type: "text",
    "class": _ctx.cx("preview"),
    readonly: "",
    tabindex: _ctx.tabindex,
    disabled: _ctx.disabled,
    onClick: _cache[0] || (_cache[0] = function() {
      return $options.onInputClick && $options.onInputClick.apply($options, arguments);
    }),
    onKeydown: _cache[1] || (_cache[1] = function() {
      return $options.onInputKeydown && $options.onInputKeydown.apply($options, arguments);
    }),
    onBlur: _cache[2] || (_cache[2] = function() {
      return $options.onInputBlur && $options.onInputBlur.apply($options, arguments);
    })
  }, _ctx.ptm("preview")), null, 16, _hoisted_1)) : createCommentVNode("", true), createVNode(_component_Portal, {
    appendTo: _ctx.appendTo,
    disabled: _ctx.inline
  }, {
    "default": withCtx(function() {
      return [createVNode(Transition, mergeProps({
        name: "p-connected-overlay",
        onEnter: $options.onOverlayEnter,
        onLeave: $options.onOverlayLeave,
        onAfterLeave: $options.onOverlayAfterLeave
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          return [(_ctx.inline ? true : $data.overlayVisible) ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.pickerRef,
            "class": [_ctx.cx("panel"), _ctx.panelClass, _ctx.overlayClass],
            onClick: _cache[11] || (_cache[11] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            })
          }, _objectSpread(_objectSpread({}, _ctx.ptm("panel")), _ctx.ptm("overlay"))), [createElementVNode("div", mergeProps({
            "class": _ctx.cx("content")
          }, _ctx.ptm("content")), [createElementVNode("div", mergeProps({
            ref: $options.colorSelectorRef,
            "class": _ctx.cx("colorSelector"),
            onMousedown: _cache[3] || (_cache[3] = function($event) {
              return $options.onColorMousedown($event);
            }),
            onTouchstart: _cache[4] || (_cache[4] = function($event) {
              return $options.onColorDragStart($event);
            }),
            onTouchmove: _cache[5] || (_cache[5] = function($event) {
              return $options.onDrag($event);
            }),
            onTouchend: _cache[6] || (_cache[6] = function($event) {
              return $options.onDragEnd();
            })
          }, _ctx.ptm("colorSelector")), [createElementVNode("div", mergeProps({
            "class": _ctx.cx("colorBackground")
          }, _ctx.ptm("colorBackground")), [createElementVNode("div", mergeProps({
            ref: $options.colorHandleRef,
            "class": _ctx.cx("colorHandle")
          }, _ctx.ptm("colorHandle")), null, 16)], 16)], 16), createElementVNode("div", mergeProps({
            ref: $options.hueViewRef,
            "class": _ctx.cx("hue"),
            onMousedown: _cache[7] || (_cache[7] = function($event) {
              return $options.onHueMousedown($event);
            }),
            onTouchstart: _cache[8] || (_cache[8] = function($event) {
              return $options.onHueDragStart($event);
            }),
            onTouchmove: _cache[9] || (_cache[9] = function($event) {
              return $options.onDrag($event);
            }),
            onTouchend: _cache[10] || (_cache[10] = function($event) {
              return $options.onDragEnd();
            })
          }, _ctx.ptm("hue")), [createElementVNode("div", mergeProps({
            ref: $options.hueHandleRef,
            "class": _ctx.cx("hueHandle")
          }, _ctx.ptm("hueHandle")), null, 16)], 16)], 16)], 16)) : createCommentVNode("", true)];
        }),
        _: 1
      }, 16, ["onEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 1
  }, 8, ["appendTo", "disabled"])], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-CTgn48t-.mjs.map
