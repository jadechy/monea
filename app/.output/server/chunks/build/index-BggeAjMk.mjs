import { hasClass, findSingle, getOuterWidth, getOuterHeight, getViewport, removeClass, addClass, getWindowScrollLeft, getWindowScrollTop, createElement, isExist, fadeIn, isTouchDevice, getAttribute } from '@primeuix/utils/dom';
import { isEmpty } from '@primeuix/utils/object';
import { uuid } from '@primeuix/utils/uuid';
import { ZIndex } from '@primeuix/utils/zindex';
import { C as ConnectedOverlayScrollHandler } from './index-UnQD5FIJ.mjs';
import { y as BaseDirective, B as BaseStyle } from './server.mjs';
import { style } from '@primeuix/styles/tooltip';

var classes = {
  root: "p-tooltip p-component",
  arrow: "p-tooltip-arrow",
  text: "p-tooltip-text"
};
var TooltipStyle = BaseStyle.extend({
  name: "tooltip-directive",
  style,
  classes
});
var BaseTooltip = BaseDirective.extend({
  style: TooltipStyle
});
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
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
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
var Tooltip = BaseTooltip.extend("tooltip", {
  beforeMount: function beforeMount(el, options) {
    var _options$instance$$pr;
    var target = this.getTarget(el);
    target.$_ptooltipModifiers = this.getModifiers(options);
    if (!options.value) return;
    else if (typeof options.value === "string") {
      target.$_ptooltipValue = options.value;
      target.$_ptooltipDisabled = false;
      target.$_ptooltipEscape = true;
      target.$_ptooltipClass = null;
      target.$_ptooltipFitContent = true;
      target.$_ptooltipIdAttr = uuid("pv_id") + "_tooltip";
      target.$_ptooltipShowDelay = 0;
      target.$_ptooltipHideDelay = 0;
      target.$_ptooltipAutoHide = true;
    } else if (_typeof(options.value) === "object" && options.value) {
      if (isEmpty(options.value.value) || options.value.value.trim() === "") return;
      else {
        target.$_ptooltipValue = options.value.value;
        target.$_ptooltipDisabled = !!options.value.disabled === options.value.disabled ? options.value.disabled : false;
        target.$_ptooltipEscape = !!options.value.escape === options.value.escape ? options.value.escape : true;
        target.$_ptooltipClass = options.value["class"] || "";
        target.$_ptooltipFitContent = !!options.value.fitContent === options.value.fitContent ? options.value.fitContent : true;
        target.$_ptooltipIdAttr = options.value.id || uuid("pv_id") + "_tooltip";
        target.$_ptooltipShowDelay = options.value.showDelay || 0;
        target.$_ptooltipHideDelay = options.value.hideDelay || 0;
        target.$_ptooltipAutoHide = !!options.value.autoHide === options.value.autoHide ? options.value.autoHide : true;
      }
    }
    target.$_ptooltipZIndex = (_options$instance$$pr = options.instance.$primevue) === null || _options$instance$$pr === void 0 || (_options$instance$$pr = _options$instance$$pr.config) === null || _options$instance$$pr === void 0 || (_options$instance$$pr = _options$instance$$pr.zIndex) === null || _options$instance$$pr === void 0 ? void 0 : _options$instance$$pr.tooltip;
    this.bindEvents(target, options);
    el.setAttribute("data-pd-tooltip", true);
  },
  updated: function updated(el, options) {
    var target = this.getTarget(el);
    target.$_ptooltipModifiers = this.getModifiers(options);
    this.unbindEvents(target);
    if (!options.value) {
      return;
    }
    if (typeof options.value === "string") {
      target.$_ptooltipValue = options.value;
      target.$_ptooltipDisabled = false;
      target.$_ptooltipEscape = true;
      target.$_ptooltipClass = null;
      target.$_ptooltipIdAttr = target.$_ptooltipIdAttr || uuid("pv_id") + "_tooltip";
      target.$_ptooltipShowDelay = 0;
      target.$_ptooltipHideDelay = 0;
      target.$_ptooltipAutoHide = true;
      this.bindEvents(target, options);
    } else if (_typeof(options.value) === "object" && options.value) {
      if (isEmpty(options.value.value) || options.value.value.trim() === "") {
        this.unbindEvents(target, options);
        return;
      } else {
        target.$_ptooltipValue = options.value.value;
        target.$_ptooltipDisabled = !!options.value.disabled === options.value.disabled ? options.value.disabled : false;
        target.$_ptooltipEscape = !!options.value.escape === options.value.escape ? options.value.escape : true;
        target.$_ptooltipClass = options.value["class"] || "";
        target.$_ptooltipFitContent = !!options.value.fitContent === options.value.fitContent ? options.value.fitContent : true;
        target.$_ptooltipIdAttr = options.value.id || target.$_ptooltipIdAttr || uuid("pv_id") + "_tooltip";
        target.$_ptooltipShowDelay = options.value.showDelay || 0;
        target.$_ptooltipHideDelay = options.value.hideDelay || 0;
        target.$_ptooltipAutoHide = !!options.value.autoHide === options.value.autoHide ? options.value.autoHide : true;
        this.bindEvents(target, options);
      }
    }
  },
  unmounted: function unmounted(el, options) {
    var target = this.getTarget(el);
    this.hide(el, 0);
    this.remove(target);
    this.unbindEvents(target, options);
    if (target.$_ptooltipScrollHandler) {
      target.$_ptooltipScrollHandler.destroy();
      target.$_ptooltipScrollHandler = null;
    }
  },
  timer: void 0,
  methods: {
    bindEvents: function bindEvents(el, options) {
      var _this = this;
      var modifiers = el.$_ptooltipModifiers;
      if (modifiers.focus) {
        el.$_ptooltipFocusEvent = function(event) {
          return _this.onFocus(event, options);
        };
        el.$_ptooltipBlurEvent = this.onBlur.bind(this);
        el.addEventListener("focus", el.$_ptooltipFocusEvent);
        el.addEventListener("blur", el.$_ptooltipBlurEvent);
      } else {
        el.$_ptooltipMouseEnterEvent = function(event) {
          return _this.onMouseEnter(event, options);
        };
        el.$_ptooltipMouseLeaveEvent = this.onMouseLeave.bind(this);
        el.$_ptooltipClickEvent = this.onClick.bind(this);
        el.addEventListener("mouseenter", el.$_ptooltipMouseEnterEvent);
        el.addEventListener("mouseleave", el.$_ptooltipMouseLeaveEvent);
        el.addEventListener("click", el.$_ptooltipClickEvent);
      }
      el.$_ptooltipKeydownEvent = this.onKeydown.bind(this);
      el.addEventListener("keydown", el.$_ptooltipKeydownEvent);
      el.$_pWindowResizeEvent = this.onWindowResize.bind(this, el);
    },
    unbindEvents: function unbindEvents(el) {
      var modifiers = el.$_ptooltipModifiers;
      if (modifiers.focus) {
        el.removeEventListener("focus", el.$_ptooltipFocusEvent);
        el.$_ptooltipFocusEvent = null;
        el.removeEventListener("blur", el.$_ptooltipBlurEvent);
        el.$_ptooltipBlurEvent = null;
      } else {
        el.removeEventListener("mouseenter", el.$_ptooltipMouseEnterEvent);
        el.$_ptooltipMouseEnterEvent = null;
        el.removeEventListener("mouseleave", el.$_ptooltipMouseLeaveEvent);
        el.$_ptooltipMouseLeaveEvent = null;
        el.removeEventListener("click", el.$_ptooltipClickEvent);
        el.$_ptooltipClickEvent = null;
      }
      el.removeEventListener("keydown", el.$_ptooltipKeydownEvent);
      (void 0).removeEventListener("resize", el.$_pWindowResizeEvent);
      if (el.$_ptooltipId) {
        this.remove(el);
      }
    },
    bindScrollListener: function bindScrollListener(el) {
      var _this2 = this;
      if (!el.$_ptooltipScrollHandler) {
        el.$_ptooltipScrollHandler = new ConnectedOverlayScrollHandler(el, function() {
          _this2.hide(el);
        });
      }
      el.$_ptooltipScrollHandler.bindScrollListener();
    },
    unbindScrollListener: function unbindScrollListener(el) {
      if (el.$_ptooltipScrollHandler) {
        el.$_ptooltipScrollHandler.unbindScrollListener();
      }
    },
    onMouseEnter: function onMouseEnter(event, options) {
      var el = event.currentTarget;
      var showDelay = el.$_ptooltipShowDelay;
      this.show(el, options, showDelay);
    },
    onMouseLeave: function onMouseLeave(event) {
      var el = event.currentTarget;
      var hideDelay = el.$_ptooltipHideDelay;
      var autoHide = el.$_ptooltipAutoHide;
      if (!autoHide) {
        var valid = getAttribute(event.target, "data-pc-name") === "tooltip" || getAttribute(event.target, "data-pc-section") === "arrow" || getAttribute(event.target, "data-pc-section") === "text" || getAttribute(event.relatedTarget, "data-pc-name") === "tooltip" || getAttribute(event.relatedTarget, "data-pc-section") === "arrow" || getAttribute(event.relatedTarget, "data-pc-section") === "text";
        !valid && this.hide(el, hideDelay);
      } else {
        this.hide(el, hideDelay);
      }
    },
    onFocus: function onFocus(event, options) {
      var el = event.currentTarget;
      var showDelay = el.$_ptooltipShowDelay;
      this.show(el, options, showDelay);
    },
    onBlur: function onBlur(event) {
      var el = event.currentTarget;
      var hideDelay = el.$_ptooltipHideDelay;
      this.hide(el, hideDelay);
    },
    onClick: function onClick(event) {
      var el = event.currentTarget;
      var hideDelay = el.$_ptooltipHideDelay;
      this.hide(el, hideDelay);
    },
    onKeydown: function onKeydown(event) {
      var el = event.currentTarget;
      var hideDelay = el.$_ptooltipHideDelay;
      event.code === "Escape" && this.hide(event.currentTarget, hideDelay);
    },
    onWindowResize: function onWindowResize(el) {
      if (!isTouchDevice()) {
        this.hide(el);
      }
      (void 0).removeEventListener("resize", el.$_pWindowResizeEvent);
    },
    tooltipActions: function tooltipActions(el, options) {
      if (el.$_ptooltipDisabled || !isExist(el)) {
        return;
      }
      var tooltipElement = this.create(el, options);
      this.align(el);
      !this.isUnstyled() && fadeIn(tooltipElement, 250);
      var $this = this;
      (void 0).addEventListener("resize", el.$_pWindowResizeEvent);
      tooltipElement.addEventListener("mouseleave", function onTooltipLeave() {
        $this.hide(el);
        tooltipElement.removeEventListener("mouseleave", onTooltipLeave);
        el.removeEventListener("mouseenter", el.$_ptooltipMouseEnterEvent);
        setTimeout(function() {
          return el.addEventListener("mouseenter", el.$_ptooltipMouseEnterEvent);
        }, 50);
      });
      this.bindScrollListener(el);
      ZIndex.set("tooltip", tooltipElement, el.$_ptooltipZIndex);
    },
    show: function show(el, options, showDelay) {
      var _this3 = this;
      if (showDelay !== void 0) {
        this.timer = setTimeout(function() {
          return _this3.tooltipActions(el, options);
        }, showDelay);
      } else {
        this.tooltipActions(el, options);
      }
    },
    tooltipRemoval: function tooltipRemoval(el) {
      this.remove(el);
      this.unbindScrollListener(el);
      (void 0).removeEventListener("resize", el.$_pWindowResizeEvent);
    },
    hide: function hide(el, hideDelay) {
      var _this4 = this;
      clearTimeout(this.timer);
      if (hideDelay !== void 0) {
        setTimeout(function() {
          return _this4.tooltipRemoval(el);
        }, hideDelay);
      } else {
        this.tooltipRemoval(el);
      }
    },
    getTooltipElement: function getTooltipElement(el) {
      return (void 0).getElementById(el.$_ptooltipId);
    },
    getArrowElement: function getArrowElement(el) {
      var tooltipElement = this.getTooltipElement(el);
      return findSingle(tooltipElement, '[data-pc-section="arrow"]');
    },
    create: function create(el) {
      var modifiers = el.$_ptooltipModifiers;
      var tooltipArrow = createElement("div", {
        "class": !this.isUnstyled() && this.cx("arrow"),
        "p-bind": this.ptm("arrow", {
          context: modifiers
        })
      });
      var tooltipText = createElement("div", {
        "class": !this.isUnstyled() && this.cx("text"),
        "p-bind": this.ptm("text", {
          context: modifiers
        })
      });
      if (!el.$_ptooltipEscape) {
        tooltipText.innerHTML = el.$_ptooltipValue;
      } else {
        tooltipText.innerHTML = "";
        tooltipText.appendChild((void 0).createTextNode(el.$_ptooltipValue));
      }
      var container = createElement("div", _defineProperty(_defineProperty({
        id: el.$_ptooltipIdAttr,
        role: "tooltip",
        style: {
          display: "inline-block",
          width: el.$_ptooltipFitContent ? "fit-content" : void 0,
          pointerEvents: !this.isUnstyled() && el.$_ptooltipAutoHide && "none"
        },
        "class": [!this.isUnstyled() && this.cx("root"), el.$_ptooltipClass]
      }, this.$attrSelector, ""), "p-bind", this.ptm("root", {
        context: modifiers
      })), tooltipArrow, tooltipText);
      (void 0).body.appendChild(container);
      el.$_ptooltipId = container.id;
      this.$el = container;
      return container;
    },
    remove: function remove(el) {
      if (el) {
        var tooltipElement = this.getTooltipElement(el);
        if (tooltipElement && tooltipElement.parentElement) {
          ZIndex.clear(tooltipElement);
          (void 0).body.removeChild(tooltipElement);
        }
        el.$_ptooltipId = null;
      }
    },
    align: function align(el) {
      var modifiers = el.$_ptooltipModifiers;
      if (modifiers.top) {
        this.alignTop(el);
        if (this.isOutOfBounds(el)) {
          this.alignBottom(el);
          if (this.isOutOfBounds(el)) {
            this.alignTop(el);
          }
        }
      } else if (modifiers.left) {
        this.alignLeft(el);
        if (this.isOutOfBounds(el)) {
          this.alignRight(el);
          if (this.isOutOfBounds(el)) {
            this.alignTop(el);
            if (this.isOutOfBounds(el)) {
              this.alignBottom(el);
              if (this.isOutOfBounds(el)) {
                this.alignLeft(el);
              }
            }
          }
        }
      } else if (modifiers.bottom) {
        this.alignBottom(el);
        if (this.isOutOfBounds(el)) {
          this.alignTop(el);
          if (this.isOutOfBounds(el)) {
            this.alignBottom(el);
          }
        }
      } else {
        this.alignRight(el);
        if (this.isOutOfBounds(el)) {
          this.alignLeft(el);
          if (this.isOutOfBounds(el)) {
            this.alignTop(el);
            if (this.isOutOfBounds(el)) {
              this.alignBottom(el);
              if (this.isOutOfBounds(el)) {
                this.alignRight(el);
              }
            }
          }
        }
      }
    },
    getHostOffset: function getHostOffset(el) {
      var offset = el.getBoundingClientRect();
      var targetLeft = offset.left + getWindowScrollLeft();
      var targetTop = offset.top + getWindowScrollTop();
      return {
        left: targetLeft,
        top: targetTop
      };
    },
    alignRight: function alignRight(el) {
      this.preAlign(el, "right");
      var tooltipElement = this.getTooltipElement(el);
      var arrowElement = this.getArrowElement(el);
      var hostOffset = this.getHostOffset(el);
      var left = hostOffset.left + getOuterWidth(el);
      var top = hostOffset.top + (getOuterHeight(el) - getOuterHeight(tooltipElement)) / 2;
      tooltipElement.style.left = left + "px";
      tooltipElement.style.top = top + "px";
      arrowElement.style.top = "50%";
      arrowElement.style.right = null;
      arrowElement.style.bottom = null;
      arrowElement.style.left = "0";
    },
    alignLeft: function alignLeft(el) {
      this.preAlign(el, "left");
      var tooltipElement = this.getTooltipElement(el);
      var arrowElement = this.getArrowElement(el);
      var hostOffset = this.getHostOffset(el);
      var left = hostOffset.left - getOuterWidth(tooltipElement);
      var top = hostOffset.top + (getOuterHeight(el) - getOuterHeight(tooltipElement)) / 2;
      tooltipElement.style.left = left + "px";
      tooltipElement.style.top = top + "px";
      arrowElement.style.top = "50%";
      arrowElement.style.right = "0";
      arrowElement.style.bottom = null;
      arrowElement.style.left = null;
    },
    alignTop: function alignTop(el) {
      this.preAlign(el, "top");
      var tooltipElement = this.getTooltipElement(el);
      var arrowElement = this.getArrowElement(el);
      var tooltipWidth = getOuterWidth(tooltipElement);
      var elementWidth = getOuterWidth(el);
      var _getViewport = getViewport(), viewportWidth = _getViewport.width;
      var hostOffset = this.getHostOffset(el);
      var left = hostOffset.left + (elementWidth - tooltipWidth) / 2;
      var top = hostOffset.top - getOuterHeight(tooltipElement);
      if (left < 0) {
        left = 0;
      } else if (left + tooltipWidth > viewportWidth) {
        left = Math.floor(hostOffset.left + elementWidth - tooltipWidth);
      }
      tooltipElement.style.left = left + "px";
      tooltipElement.style.top = top + "px";
      var elementRelativeCenter = hostOffset.left - this.getHostOffset(tooltipElement).left + elementWidth / 2;
      arrowElement.style.top = null;
      arrowElement.style.right = null;
      arrowElement.style.bottom = "0";
      arrowElement.style.left = elementRelativeCenter + "px";
    },
    alignBottom: function alignBottom(el) {
      this.preAlign(el, "bottom");
      var tooltipElement = this.getTooltipElement(el);
      var arrowElement = this.getArrowElement(el);
      var tooltipWidth = getOuterWidth(tooltipElement);
      var elementWidth = getOuterWidth(el);
      var _getViewport2 = getViewport(), viewportWidth = _getViewport2.width;
      var hostOffset = this.getHostOffset(el);
      var left = hostOffset.left + (elementWidth - tooltipWidth) / 2;
      var top = hostOffset.top + getOuterHeight(el);
      if (left < 0) {
        left = 0;
      } else if (left + tooltipWidth > viewportWidth) {
        left = Math.floor(hostOffset.left + elementWidth - tooltipWidth);
      }
      tooltipElement.style.left = left + "px";
      tooltipElement.style.top = top + "px";
      var elementRelativeCenter = hostOffset.left - this.getHostOffset(tooltipElement).left + elementWidth / 2;
      arrowElement.style.top = "0";
      arrowElement.style.right = null;
      arrowElement.style.bottom = null;
      arrowElement.style.left = elementRelativeCenter + "px";
    },
    preAlign: function preAlign(el, position) {
      var tooltipElement = this.getTooltipElement(el);
      tooltipElement.style.left = "-999px";
      tooltipElement.style.top = "-999px";
      removeClass(tooltipElement, "p-tooltip-".concat(tooltipElement.$_ptooltipPosition));
      !this.isUnstyled() && addClass(tooltipElement, "p-tooltip-".concat(position));
      tooltipElement.$_ptooltipPosition = position;
      tooltipElement.setAttribute("data-p-position", position);
    },
    isOutOfBounds: function isOutOfBounds(el) {
      var tooltipElement = this.getTooltipElement(el);
      var offset = tooltipElement.getBoundingClientRect();
      var targetTop = offset.top;
      var targetLeft = offset.left;
      var width = getOuterWidth(tooltipElement);
      var height = getOuterHeight(tooltipElement);
      var viewport = getViewport();
      return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
    },
    getTarget: function getTarget(el) {
      var _findSingle;
      return hasClass(el, "p-inputwrapper") ? (_findSingle = findSingle(el, "input")) !== null && _findSingle !== void 0 ? _findSingle : el : el;
    },
    getModifiers: function getModifiers(options) {
      if (options.modifiers && Object.keys(options.modifiers).length) {
        return options.modifiers;
      }
      if (options.arg && _typeof(options.arg) === "object") {
        return Object.entries(options.arg).reduce(function(acc, _ref) {
          var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], val = _ref2[1];
          if (key === "event" || key === "position") acc[val] = true;
          return acc;
        }, {});
      }
      return {};
    }
  }
});

export { Tooltip as T };
//# sourceMappingURL=index-BggeAjMk.mjs.map
