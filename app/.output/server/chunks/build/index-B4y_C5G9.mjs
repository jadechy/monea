import { cn } from '@primeuix/utils';
import { isRTL, getWidth, getHeight, getOuterWidth, getOuterHeight } from '@primeuix/utils/dom';
import { isArray, isNotEmpty } from '@primeuix/utils/object';
import { g as getVNodeProp } from './index-UnQD5FIJ.mjs';
import { s as script$2 } from './index-f6-L4oOs.mjs';
import { style } from '@primeuix/styles/splitter';
import { B as BaseStyle } from './server.mjs';
import { createElementBlock, openBlock, mergeProps, Fragment, renderList, createBlock, createCommentVNode, resolveDynamicComponent, createElementVNode } from 'vue';
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
import './client.manifest.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'file:///app/node_modules/@nuxt/vite-builder/dist/runtime/client.manifest.mjs';

var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-splitter p-component", "p-splitter-" + props.layout];
  },
  gutter: "p-splitter-gutter",
  gutterHandle: "p-splitter-gutter-handle"
};
var SplitterStyle = BaseStyle.extend({
  name: "splitter",
  style,
  classes
});
var script$1 = {
  name: "BaseSplitter",
  "extends": script$2,
  props: {
    layout: {
      type: String,
      "default": "horizontal"
    },
    gutterSize: {
      type: Number,
      "default": 4
    },
    stateKey: {
      type: String,
      "default": null
    },
    stateStorage: {
      type: String,
      "default": "session"
    },
    step: {
      type: Number,
      "default": 5
    }
  },
  style: SplitterStyle,
  provide: function provide() {
    return {
      $pcSplitter: this,
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
  name: "Splitter",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["resizestart", "resizeend", "resize"],
  dragging: false,
  mouseMoveListener: null,
  mouseUpListener: null,
  touchMoveListener: null,
  touchEndListener: null,
  size: null,
  gutterElement: null,
  startPos: null,
  prevPanelElement: null,
  nextPanelElement: null,
  nextPanelSize: null,
  prevPanelSize: null,
  panelSizes: null,
  prevPanelIndex: null,
  timer: null,
  data: function data() {
    return {
      prevSize: null
    };
  },
  mounted: function mounted() {
    this.initializePanels();
  },
  beforeUnmount: function beforeUnmount() {
    this.clear();
    this.unbindMouseListeners();
  },
  methods: {
    isSplitterPanel: function isSplitterPanel(child) {
      return child.type.name === "SplitterPanel";
    },
    initializePanels: function initializePanels() {
      var _this = this;
      if (this.panels && this.panels.length) {
        var initialized = false;
        if (this.isStateful()) {
          initialized = this.restoreState();
        }
        if (!initialized) {
          var children = _toConsumableArray(this.$el.children).filter(function(child) {
            return child.getAttribute("data-pc-name") === "splitterpanel";
          });
          var _panelSizes = [];
          this.panels.map(function(panel, i) {
            var panelInitialSize = panel.props && isNotEmpty(panel.props.size) ? panel.props.size : null;
            var panelSize = panelInitialSize !== null && panelInitialSize !== void 0 ? panelInitialSize : 100 / _this.panels.length;
            _panelSizes[i] = panelSize;
            children[i].style.flexBasis = "calc(" + panelSize + "% - " + (_this.panels.length - 1) * _this.gutterSize + "px)";
          });
          this.panelSizes = _panelSizes;
          this.prevSize = parseFloat(_panelSizes[0]).toFixed(4);
        }
      }
    },
    onResizeStart: function onResizeStart(event, index, isKeyDown) {
      this.gutterElement = event.currentTarget || event.target.parentElement;
      this.size = this.horizontal ? getWidth(this.$el) : getHeight(this.$el);
      if (!isKeyDown) {
        this.dragging = true;
        this.startPos = this.layout === "horizontal" ? event.pageX || event.changedTouches[0].pageX : event.pageY || event.changedTouches[0].pageY;
      }
      this.prevPanelElement = this.gutterElement.previousElementSibling;
      this.nextPanelElement = this.gutterElement.nextElementSibling;
      if (isKeyDown) {
        this.prevPanelSize = this.horizontal ? getOuterWidth(this.prevPanelElement, true) : getOuterHeight(this.prevPanelElement, true);
        this.nextPanelSize = this.horizontal ? getOuterWidth(this.nextPanelElement, true) : getOuterHeight(this.nextPanelElement, true);
      } else {
        this.prevPanelSize = 100 * (this.horizontal ? getOuterWidth(this.prevPanelElement, true) : getOuterHeight(this.prevPanelElement, true)) / this.size;
        this.nextPanelSize = 100 * (this.horizontal ? getOuterWidth(this.nextPanelElement, true) : getOuterHeight(this.nextPanelElement, true)) / this.size;
      }
      this.prevPanelIndex = index;
      this.$emit("resizestart", {
        originalEvent: event,
        sizes: this.panelSizes
      });
      this.$refs.gutter[index].setAttribute("data-p-gutter-resizing", true);
      this.$el.setAttribute("data-p-resizing", true);
    },
    onResize: function onResize(event, step, isKeyDown) {
      var newPos, newPrevPanelSize, newNextPanelSize;
      if (isKeyDown) {
        if (this.horizontal) {
          newPrevPanelSize = 100 * (this.prevPanelSize + step) / this.size;
          newNextPanelSize = 100 * (this.nextPanelSize - step) / this.size;
        } else {
          newPrevPanelSize = 100 * (this.prevPanelSize - step) / this.size;
          newNextPanelSize = 100 * (this.nextPanelSize + step) / this.size;
        }
      } else {
        if (this.horizontal) {
          if (isRTL(this.$el)) {
            newPos = (this.startPos - event.pageX) * 100 / this.size;
          } else {
            newPos = (event.pageX - this.startPos) * 100 / this.size;
          }
        } else {
          newPos = (event.pageY - this.startPos) * 100 / this.size;
        }
        newPrevPanelSize = this.prevPanelSize + newPos;
        newNextPanelSize = this.nextPanelSize - newPos;
      }
      if (!this.validateResize(newPrevPanelSize, newNextPanelSize)) {
        newPrevPanelSize = Math.min(Math.max(this.prevPanelMinSize, newPrevPanelSize), 100 - this.nextPanelMinSize);
        newNextPanelSize = Math.min(Math.max(this.nextPanelMinSize, newNextPanelSize), 100 - this.prevPanelMinSize);
      }
      this.prevPanelElement.style.flexBasis = "calc(" + newPrevPanelSize + "% - " + (this.panels.length - 1) * this.gutterSize + "px)";
      this.nextPanelElement.style.flexBasis = "calc(" + newNextPanelSize + "% - " + (this.panels.length - 1) * this.gutterSize + "px)";
      this.panelSizes[this.prevPanelIndex] = newPrevPanelSize;
      this.panelSizes[this.prevPanelIndex + 1] = newNextPanelSize;
      this.prevSize = parseFloat(newPrevPanelSize).toFixed(4);
      this.$emit("resize", {
        originalEvent: event,
        sizes: this.panelSizes
      });
    },
    onResizeEnd: function onResizeEnd(event) {
      if (this.isStateful()) {
        this.saveState();
      }
      this.$emit("resizeend", {
        originalEvent: event,
        sizes: this.panelSizes
      });
      this.$refs.gutter.forEach(function(gutter) {
        return gutter.setAttribute("data-p-gutter-resizing", false);
      });
      this.$el.setAttribute("data-p-resizing", false);
      this.clear();
    },
    repeat: function repeat(event, index, step) {
      this.onResizeStart(event, index, true);
      this.onResize(event, step, true);
    },
    setTimer: function setTimer(event, index, step) {
      var _this2 = this;
      if (!this.timer) {
        this.timer = setInterval(function() {
          _this2.repeat(event, index, step);
        }, 40);
      }
    },
    clearTimer: function clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    onGutterKeyUp: function onGutterKeyUp() {
      this.clearTimer();
      this.onResizeEnd();
    },
    onGutterKeyDown: function onGutterKeyDown(event, index) {
      switch (event.code) {
        case "ArrowLeft": {
          if (this.layout === "horizontal") {
            this.setTimer(event, index, this.step * -1);
          }
          event.preventDefault();
          break;
        }
        case "ArrowRight": {
          if (this.layout === "horizontal") {
            this.setTimer(event, index, this.step);
          }
          event.preventDefault();
          break;
        }
        case "ArrowDown": {
          if (this.layout === "vertical") {
            this.setTimer(event, index, this.step * -1);
          }
          event.preventDefault();
          break;
        }
        case "ArrowUp": {
          if (this.layout === "vertical") {
            this.setTimer(event, index, this.step);
          }
          event.preventDefault();
          break;
        }
      }
    },
    onGutterMouseDown: function onGutterMouseDown(event, index) {
      this.onResizeStart(event, index);
      this.bindMouseListeners();
    },
    onGutterTouchStart: function onGutterTouchStart(event, index) {
      this.onResizeStart(event, index);
      this.bindTouchListeners();
      event.preventDefault();
    },
    onGutterTouchMove: function onGutterTouchMove(event) {
      this.onResize(event);
      event.preventDefault();
    },
    onGutterTouchEnd: function onGutterTouchEnd(event) {
      this.onResizeEnd(event);
      this.unbindTouchListeners();
      event.preventDefault();
    },
    bindMouseListeners: function bindMouseListeners() {
      var _this3 = this;
      if (!this.mouseMoveListener) {
        this.mouseMoveListener = function(event) {
          return _this3.onResize(event);
        };
        (void 0).addEventListener("mousemove", this.mouseMoveListener);
      }
      if (!this.mouseUpListener) {
        this.mouseUpListener = function(event) {
          _this3.onResizeEnd(event);
          _this3.unbindMouseListeners();
        };
        (void 0).addEventListener("mouseup", this.mouseUpListener);
      }
    },
    bindTouchListeners: function bindTouchListeners() {
      var _this4 = this;
      if (!this.touchMoveListener) {
        this.touchMoveListener = function(event) {
          return _this4.onResize(event.changedTouches[0]);
        };
        (void 0).addEventListener("touchmove", this.touchMoveListener);
      }
      if (!this.touchEndListener) {
        this.touchEndListener = function(event) {
          _this4.resizeEnd(event);
          _this4.unbindTouchListeners();
        };
        (void 0).addEventListener("touchend", this.touchEndListener);
      }
    },
    validateResize: function validateResize(newPrevPanelSize, newNextPanelSize) {
      if (newPrevPanelSize > 100 || newPrevPanelSize < 0) return false;
      if (newNextPanelSize > 100 || newNextPanelSize < 0) return false;
      if (this.prevPanelMinSize > newPrevPanelSize) {
        return false;
      }
      if (this.nextPanelMinSize > newNextPanelSize) {
        return false;
      }
      return true;
    },
    unbindMouseListeners: function unbindMouseListeners() {
      if (this.mouseMoveListener) {
        (void 0).removeEventListener("mousemove", this.mouseMoveListener);
        this.mouseMoveListener = null;
      }
      if (this.mouseUpListener) {
        (void 0).removeEventListener("mouseup", this.mouseUpListener);
        this.mouseUpListener = null;
      }
    },
    unbindTouchListeners: function unbindTouchListeners() {
      if (this.touchMoveListener) {
        (void 0).removeEventListener("touchmove", this.touchMoveListener);
        this.touchMoveListener = null;
      }
      if (this.touchEndListener) {
        (void 0).removeEventListener("touchend", this.touchEndListener);
        this.touchEndListener = null;
      }
    },
    clear: function clear() {
      this.dragging = false;
      this.size = null;
      this.startPos = null;
      this.prevPanelElement = null;
      this.nextPanelElement = null;
      this.prevPanelSize = null;
      this.nextPanelSize = null;
      this.gutterElement = null;
      this.prevPanelIndex = null;
    },
    isStateful: function isStateful() {
      return this.stateKey != null;
    },
    getStorage: function getStorage() {
      switch (this.stateStorage) {
        case "local":
          return (void 0).localStorage;
        case "session":
          return (void 0).sessionStorage;
        default:
          throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
      }
    },
    saveState: function saveState() {
      if (isArray(this.panelSizes)) {
        this.getStorage().setItem(this.stateKey, JSON.stringify(this.panelSizes));
      }
    },
    restoreState: function restoreState() {
      var _this5 = this;
      var storage = this.getStorage();
      var stateString = storage.getItem(this.stateKey);
      if (stateString) {
        this.panelSizes = JSON.parse(stateString);
        var children = _toConsumableArray(this.$el.children).filter(function(child) {
          return child.getAttribute("data-pc-name") === "splitterpanel";
        });
        children.forEach(function(child, i) {
          child.style.flexBasis = "calc(" + _this5.panelSizes[i] + "% - " + (_this5.panels.length - 1) * _this5.gutterSize + "px)";
        });
        return true;
      }
      return false;
    },
    resetState: function resetState() {
      this.initializePanels();
    }
  },
  computed: {
    panels: function panels() {
      var _this6 = this;
      var panels2 = [];
      this.$slots["default"]().forEach(function(child) {
        if (_this6.isSplitterPanel(child)) {
          panels2.push(child);
        } else if (child.children instanceof Array) {
          child.children.forEach(function(nestedChild) {
            if (_this6.isSplitterPanel(nestedChild)) {
              panels2.push(nestedChild);
            }
          });
        }
      });
      return panels2;
    },
    gutterStyle: function gutterStyle() {
      if (this.horizontal) return {
        width: this.gutterSize + "px"
      };
      else return {
        height: this.gutterSize + "px"
      };
    },
    horizontal: function horizontal() {
      return this.layout === "horizontal";
    },
    getPTOptions: function getPTOptions() {
      var _this$$parentInstance;
      return {
        context: {
          nested: (_this$$parentInstance = this.$parentInstance) === null || _this$$parentInstance === void 0 ? void 0 : _this$$parentInstance.nestedState
        }
      };
    },
    prevPanelMinSize: function prevPanelMinSize() {
      var prevPanelMinSize2 = getVNodeProp(this.panels[this.prevPanelIndex], "minSize");
      if (this.panels[this.prevPanelIndex].props && prevPanelMinSize2) {
        return prevPanelMinSize2;
      }
      return 0;
    },
    nextPanelMinSize: function nextPanelMinSize() {
      var nextPanelMinSize2 = getVNodeProp(this.panels[this.prevPanelIndex + 1], "minSize");
      if (this.panels[this.prevPanelIndex + 1].props && nextPanelMinSize2) {
        return nextPanelMinSize2;
      }
      return 0;
    },
    dataP: function dataP() {
      var _this$$parentInstance2;
      return cn(_defineProperty(_defineProperty({}, this.layout, this.layout), "nested", ((_this$$parentInstance2 = this.$parentInstance) === null || _this$$parentInstance2 === void 0 ? void 0 : _this$$parentInstance2.nestedState) != null));
    }
  }
};
var _hoisted_1 = ["data-p"];
var _hoisted_2 = ["onMousedown", "onTouchstart", "onTouchmove", "onTouchend", "data-p"];
var _hoisted_3 = ["aria-orientation", "aria-valuenow", "onKeydown", "data-p"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    "data-p-resizing": false,
    "data-p": $options.dataP
  }, _ctx.ptmi("root", $options.getPTOptions)), [(openBlock(true), createElementBlock(Fragment, null, renderList($options.panels, function(panel, i) {
    return openBlock(), createElementBlock(Fragment, {
      key: i
    }, [(openBlock(), createBlock(resolveDynamicComponent(panel), {
      tabindex: "-1"
    })), i !== $options.panels.length - 1 ? (openBlock(), createElementBlock("div", mergeProps({
      key: 0,
      ref_for: true,
      ref: "gutter",
      "class": _ctx.cx("gutter"),
      role: "separator",
      tabindex: "-1",
      onMousedown: function onMousedown($event) {
        return $options.onGutterMouseDown($event, i);
      },
      onTouchstart: function onTouchstart($event) {
        return $options.onGutterTouchStart($event, i);
      },
      onTouchmove: function onTouchmove($event) {
        return $options.onGutterTouchMove($event, i);
      },
      onTouchend: function onTouchend($event) {
        return $options.onGutterTouchEnd($event, i);
      },
      "data-p-gutter-resizing": false,
      "data-p": $options.dataP
    }, {
      ref_for: true
    }, _ctx.ptm("gutter")), [createElementVNode("div", mergeProps({
      "class": _ctx.cx("gutterHandle"),
      tabindex: "0",
      style: [$options.gutterStyle],
      "aria-orientation": _ctx.layout,
      "aria-valuenow": $data.prevSize,
      onKeyup: _cache[0] || (_cache[0] = function() {
        return $options.onGutterKeyUp && $options.onGutterKeyUp.apply($options, arguments);
      }),
      onKeydown: function onKeydown($event) {
        return $options.onGutterKeyDown($event, i);
      },
      "data-p": $options.dataP
    }, {
      ref_for: true
    }, _ctx.ptm("gutterHandle")), null, 16, _hoisted_3)], 16, _hoisted_2)) : createCommentVNode("", true)], 64);
  }), 128))], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-B4y_C5G9.mjs.map
