import { removeClass, addClass, getHeight } from '@primeuix/utils/dom';
import { B as BaseStyle, g as script$6 } from './server.mjs';
import { style } from '@primeuix/styles/scrollpanel';
import { createElementBlock, openBlock, mergeProps, createElementVNode, renderSlot } from 'vue';
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

var classes = {
  root: "p-scrollpanel p-component",
  contentContainer: "p-scrollpanel-content-container",
  content: "p-scrollpanel-content",
  barX: "p-scrollpanel-bar p-scrollpanel-bar-x",
  barY: "p-scrollpanel-bar p-scrollpanel-bar-y"
};
var ScrollPanelStyle = BaseStyle.extend({
  name: "scrollpanel",
  style,
  classes
});
var script$1 = {
  name: "BaseScrollPanel",
  "extends": script$6,
  props: {
    step: {
      type: Number,
      "default": 5
    }
  },
  style: ScrollPanelStyle,
  provide: function provide() {
    return {
      $pcScrollPanel: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "ScrollPanel",
  "extends": script$1,
  inheritAttrs: false,
  initialized: false,
  documentResizeListener: null,
  documentMouseMoveListener: null,
  documentMouseUpListener: null,
  frame: null,
  scrollXRatio: null,
  scrollYRatio: null,
  isXBarClicked: false,
  isYBarClicked: false,
  lastPageX: null,
  lastPageY: null,
  timer: null,
  outsideClickListener: null,
  data: function data() {
    return {
      orientation: "vertical",
      lastScrollTop: 0,
      lastScrollLeft: 0
    };
  },
  mounted: function mounted() {
    if (this.$el.offsetParent) {
      this.initialize();
    }
  },
  updated: function updated() {
    if (!this.initialized && this.$el.offsetParent) {
      this.initialize();
    }
  },
  beforeUnmount: function beforeUnmount() {
    this.unbindDocumentResizeListener();
    if (this.frame) {
      (void 0).cancelAnimationFrame(this.frame);
    }
  },
  methods: {
    initialize: function initialize() {
      this.moveBar();
      this.bindDocumentResizeListener();
      this.calculateContainerHeight();
    },
    calculateContainerHeight: function calculateContainerHeight() {
      var containerStyles = getComputedStyle(this.$el), xBarStyles = getComputedStyle(this.$refs.xBar), pureContainerHeight = getHeight(this.$el) - parseInt(xBarStyles["height"], 10);
      if (containerStyles["max-height"] !== "none" && pureContainerHeight === 0) {
        if (this.$refs.content.offsetHeight + parseInt(xBarStyles["height"], 10) > parseInt(containerStyles["max-height"], 10)) {
          this.$el.style.height = containerStyles["max-height"];
        } else {
          this.$el.style.height = this.$refs.content.offsetHeight + parseFloat(containerStyles.paddingTop) + parseFloat(containerStyles.paddingBottom) + parseFloat(containerStyles.borderTopWidth) + parseFloat(containerStyles.borderBottomWidth) + "px";
        }
      }
    },
    moveBar: function moveBar() {
      var _this = this;
      if (this.$refs.content) {
        var totalWidth = this.$refs.content.scrollWidth;
        var ownWidth = this.$refs.content.clientWidth;
        var bottom = (this.$el.clientHeight - this.$refs.xBar.clientHeight) * -1;
        this.scrollXRatio = ownWidth / totalWidth;
        var totalHeight = this.$refs.content.scrollHeight;
        var ownHeight = this.$refs.content.clientHeight;
        var right = (this.$el.clientWidth - this.$refs.yBar.clientWidth) * -1;
        this.scrollYRatio = ownHeight / totalHeight;
        var scrollBarHeight = Math.max(this.scrollYRatio * 100, 10);
        this.frame = this.requestAnimationFrame(function() {
          if (_this.$refs.xBar) {
            if (_this.scrollXRatio >= 1) {
              _this.$refs.xBar.setAttribute("data-p-scrollpanel-hidden", "true");
              !_this.isUnstyled && addClass(_this.$refs.xBar, "p-scrollpanel-hidden");
            } else {
              _this.$refs.xBar.setAttribute("data-p-scrollpanel-hidden", "false");
              !_this.isUnstyled && removeClass(_this.$refs.xBar, "p-scrollpanel-hidden");
              _this.$refs.xBar.style.cssText = "width:" + Math.max(_this.scrollXRatio * 100, 10) + "%; inset-inline-start:" + Math.abs(_this.$refs.content.scrollLeft) / totalWidth * 100 + "%;bottom:" + bottom + "px;";
            }
          }
          if (_this.$refs.yBar) {
            if (_this.scrollYRatio >= 1) {
              _this.$refs.yBar.setAttribute("data-p-scrollpanel-hidden", "true");
              !_this.isUnstyled && addClass(_this.$refs.yBar, "p-scrollpanel-hidden");
            } else {
              _this.$refs.yBar.setAttribute("data-p-scrollpanel-hidden", "false");
              !_this.isUnstyled && removeClass(_this.$refs.yBar, "p-scrollpanel-hidden");
              _this.$refs.yBar.style.cssText = "height:" + scrollBarHeight + "%; top: calc(" + _this.$refs.content.scrollTop / (totalHeight - ownHeight) * (100 - scrollBarHeight) + "% - " + _this.$refs.xBar.clientHeight + "px); inset-inline-end:" + right + "px;";
            }
          }
        });
      }
    },
    onYBarMouseDown: function onYBarMouseDown(e) {
      this.isYBarClicked = true;
      this.$refs.yBar.focus();
      this.lastPageY = e.pageY;
      this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed", "true");
      !this.isUnstyled && addClass(this.$refs.yBar, "p-scrollpanel-grabbed");
      (void 0).body.setAttribute("data-p-scrollpanel-grabbed", "true");
      !this.isUnstyled && addClass((void 0).body, "p-scrollpanel-grabbed");
      this.bindDocumentMouseListeners();
      e.preventDefault();
    },
    onXBarMouseDown: function onXBarMouseDown(e) {
      this.isXBarClicked = true;
      this.$refs.xBar.focus();
      this.lastPageX = e.pageX;
      this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed", "false");
      !this.isUnstyled && addClass(this.$refs.xBar, "p-scrollpanel-grabbed");
      (void 0).body.setAttribute("data-p-scrollpanel-grabbed", "false");
      !this.isUnstyled && addClass((void 0).body, "p-scrollpanel-grabbed");
      this.bindDocumentMouseListeners();
      e.preventDefault();
    },
    onScroll: function onScroll(event) {
      if (this.lastScrollLeft !== event.target.scrollLeft) {
        this.lastScrollLeft = event.target.scrollLeft;
        this.orientation = "horizontal";
      } else if (this.lastScrollTop !== event.target.scrollTop) {
        this.lastScrollTop = event.target.scrollTop;
        this.orientation = "vertical";
      }
      this.moveBar();
    },
    onKeyDown: function onKeyDown(event) {
      if (this.orientation === "vertical") {
        switch (event.code) {
          case "ArrowDown": {
            this.setTimer("scrollTop", this.step);
            event.preventDefault();
            break;
          }
          case "ArrowUp": {
            this.setTimer("scrollTop", this.step * -1);
            event.preventDefault();
            break;
          }
          case "ArrowLeft":
          case "ArrowRight": {
            event.preventDefault();
            break;
          }
        }
      } else if (this.orientation === "horizontal") {
        switch (event.code) {
          case "ArrowRight": {
            this.setTimer("scrollLeft", this.step);
            event.preventDefault();
            break;
          }
          case "ArrowLeft": {
            this.setTimer("scrollLeft", this.step * -1);
            event.preventDefault();
            break;
          }
          case "ArrowDown":
          case "ArrowUp": {
            event.preventDefault();
            break;
          }
        }
      }
    },
    onKeyUp: function onKeyUp() {
      this.clearTimer();
    },
    repeat: function repeat(bar, step) {
      this.$refs.content[bar] += step;
      this.moveBar();
    },
    setTimer: function setTimer(bar, step) {
      var _this2 = this;
      this.clearTimer();
      this.timer = setTimeout(function() {
        _this2.repeat(bar, step);
      }, 40);
    },
    clearTimer: function clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    },
    onDocumentMouseMove: function onDocumentMouseMove(e) {
      if (this.isXBarClicked) {
        this.onMouseMoveForXBar(e);
      } else if (this.isYBarClicked) {
        this.onMouseMoveForYBar(e);
      } else {
        this.onMouseMoveForXBar(e);
        this.onMouseMoveForYBar(e);
      }
    },
    onMouseMoveForXBar: function onMouseMoveForXBar(e) {
      var _this3 = this;
      var deltaX = e.pageX - this.lastPageX;
      this.lastPageX = e.pageX;
      this.frame = this.requestAnimationFrame(function() {
        _this3.$refs.content.scrollLeft += deltaX / _this3.scrollXRatio;
      });
    },
    onMouseMoveForYBar: function onMouseMoveForYBar(e) {
      var _this4 = this;
      var deltaY = e.pageY - this.lastPageY;
      this.lastPageY = e.pageY;
      this.frame = this.requestAnimationFrame(function() {
        _this4.$refs.content.scrollTop += deltaY / _this4.scrollYRatio;
      });
    },
    onFocus: function onFocus(event) {
      if (this.$refs.xBar.isSameNode(event.target)) {
        this.orientation = "horizontal";
      } else if (this.$refs.yBar.isSameNode(event.target)) {
        this.orientation = "vertical";
      }
    },
    onBlur: function onBlur() {
      if (this.orientation === "horizontal") {
        this.orientation = "vertical";
      }
    },
    onDocumentMouseUp: function onDocumentMouseUp() {
      this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed", "false");
      !this.isUnstyled && removeClass(this.$refs.yBar, "p-scrollpanel-grabbed");
      this.$refs.xBar.setAttribute("data-p-scrollpanel-grabbed", "false");
      !this.isUnstyled && removeClass(this.$refs.xBar, "p-scrollpanel-grabbed");
      (void 0).body.setAttribute("data-p-scrollpanel-grabbed", "false");
      !this.isUnstyled && removeClass((void 0).body, "p-scrollpanel-grabbed");
      this.unbindDocumentMouseListeners();
      this.isXBarClicked = false;
      this.isYBarClicked = false;
    },
    requestAnimationFrame: function requestAnimationFrame(f) {
      var frame = (void 0).requestAnimationFrame || this.timeoutFrame;
      return frame(f);
    },
    refresh: function refresh() {
      this.moveBar();
    },
    scrollTop: function scrollTop(_scrollTop) {
      var scrollableHeight = this.$refs.content.scrollHeight - this.$refs.content.clientHeight;
      _scrollTop = _scrollTop > scrollableHeight ? scrollableHeight : _scrollTop > 0 ? _scrollTop : 0;
      this.$refs.content.scrollTop = _scrollTop;
    },
    timeoutFrame: function timeoutFrame(fn) {
      setTimeout(fn, 0);
    },
    bindDocumentMouseListeners: function bindDocumentMouseListeners() {
      var _this5 = this;
      if (!this.documentMouseMoveListener) {
        this.documentMouseMoveListener = function(e) {
          _this5.onDocumentMouseMove(e);
        };
        (void 0).addEventListener("mousemove", this.documentMouseMoveListener);
      }
      if (!this.documentMouseUpListener) {
        this.documentMouseUpListener = function(e) {
          _this5.onDocumentMouseUp(e);
        };
        (void 0).addEventListener("mouseup", this.documentMouseUpListener);
      }
    },
    unbindDocumentMouseListeners: function unbindDocumentMouseListeners() {
      if (this.documentMouseMoveListener) {
        (void 0).removeEventListener("mousemove", this.documentMouseMoveListener);
        this.documentMouseMoveListener = null;
      }
      if (this.documentMouseUpListener) {
        (void 0).removeEventListener("mouseup", this.documentMouseUpListener);
        this.documentMouseUpListener = null;
      }
    },
    bindDocumentResizeListener: function bindDocumentResizeListener() {
      var _this6 = this;
      if (!this.documentResizeListener) {
        this.documentResizeListener = function() {
          _this6.moveBar();
        };
        (void 0).addEventListener("resize", this.documentResizeListener);
      }
    },
    unbindDocumentResizeListener: function unbindDocumentResizeListener() {
      if (this.documentResizeListener) {
        (void 0).removeEventListener("resize", this.documentResizeListener);
        this.documentResizeListener = null;
      }
    }
  },
  computed: {
    contentId: function contentId() {
      return this.$id + "_content";
    }
  }
};
var _hoisted_1 = ["id"];
var _hoisted_2 = ["aria-controls", "aria-valuenow"];
var _hoisted_3 = ["aria-controls", "aria-valuenow"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("contentContainer")
  }, _ctx.ptm("contentContainer")), [createElementVNode("div", mergeProps({
    ref: "content",
    id: $options.contentId,
    "class": _ctx.cx("content"),
    onScroll: _cache[0] || (_cache[0] = function() {
      return $options.onScroll && $options.onScroll.apply($options, arguments);
    }),
    onMouseenter: _cache[1] || (_cache[1] = function() {
      return $options.moveBar && $options.moveBar.apply($options, arguments);
    })
  }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "default")], 16, _hoisted_1)], 16), createElementVNode("div", mergeProps({
    ref: "xBar",
    "class": _ctx.cx("barx"),
    tabindex: "0",
    role: "scrollbar",
    "aria-orientation": "horizontal",
    "aria-controls": $options.contentId,
    "aria-valuenow": $data.lastScrollLeft,
    onMousedown: _cache[2] || (_cache[2] = function() {
      return $options.onXBarMouseDown && $options.onXBarMouseDown.apply($options, arguments);
    }),
    onKeydown: _cache[3] || (_cache[3] = function($event) {
      return $options.onKeyDown($event);
    }),
    onKeyup: _cache[4] || (_cache[4] = function() {
      return $options.onKeyUp && $options.onKeyUp.apply($options, arguments);
    }),
    onFocus: _cache[5] || (_cache[5] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[6] || (_cache[6] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    })
  }, _ctx.ptm("barx"), {
    "data-pc-group-section": "bar"
  }), null, 16, _hoisted_2), createElementVNode("div", mergeProps({
    ref: "yBar",
    "class": _ctx.cx("bary"),
    tabindex: "0",
    role: "scrollbar",
    "aria-orientation": "vertical",
    "aria-controls": $options.contentId,
    "aria-valuenow": $data.lastScrollTop,
    onMousedown: _cache[7] || (_cache[7] = function() {
      return $options.onYBarMouseDown && $options.onYBarMouseDown.apply($options, arguments);
    }),
    onKeydown: _cache[8] || (_cache[8] = function($event) {
      return $options.onKeyDown($event);
    }),
    onKeyup: _cache[9] || (_cache[9] = function() {
      return $options.onKeyUp && $options.onKeyUp.apply($options, arguments);
    }),
    onFocus: _cache[10] || (_cache[10] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    })
  }, _ctx.ptm("bary"), {
    "data-pc-group-section": "bar"
  }), null, 16, _hoisted_3)], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-CW26ro_Q.mjs.map
