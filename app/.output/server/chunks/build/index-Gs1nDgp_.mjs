import { $dt } from '@primeuix/styled';
import { find, hasClass, findSingle, focus } from '@primeuix/utils/dom';
import { s as script$2 } from './index-hU8V0OJN.mjs';
import script$3 from './index-IJ23DGgI.mjs';
import { R as Ripple } from './index-2dA4pXcI.mjs';
import { T as Tooltip } from './index-WoKANrDz.mjs';
import { s as script$4 } from './index-f6-L4oOs.mjs';
import { style } from '@primeuix/styles/speeddial';
import { B as BaseStyle } from './server.mjs';
import { resolveComponent, resolveDirective, createElementBlock, openBlock, Fragment, createElementVNode, createCommentVNode, mergeProps, renderSlot, createVNode, withCtx, createBlock, resolveDynamicComponent, renderList, withDirectives, createSlots, normalizeClass } from 'vue';
import './index-BLn-pl6M.mjs';
import '@primeuix/utils/object';
import '@primeuix/utils';
import './index-C1vnj6fg.mjs';
import './index-ik-SlIj1.mjs';
import '@primeuix/styles/badge';
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
import './index-DpRrGZTR.mjs';
import '@primeuix/utils/uuid';
import '@primeuix/utils/zindex';
import './index-UnQD5FIJ.mjs';

function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var inlineStyles = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      alignItems: (props.direction === "up" || props.direction === "down") && "center",
      justifyContent: (props.direction === "left" || props.direction === "right") && "center",
      flexDirection: props.direction === "up" ? "column-reverse" : props.direction === "down" ? "column" : props.direction === "left" ? "row-reverse" : props.direction === "right" ? "row" : null
    };
  },
  list: function list(_ref2) {
    var props = _ref2.props;
    return {
      flexDirection: props.direction === "up" ? "column-reverse" : props.direction === "down" ? "column" : props.direction === "left" ? "row-reverse" : props.direction === "right" ? "row" : null
    };
  }
};
var classes = {
  root: function root2(_ref3) {
    var instance = _ref3.instance, props = _ref3.props;
    return ["p-speeddial p-component p-speeddial-".concat(props.type), _defineProperty$1(_defineProperty$1(_defineProperty$1({}, "p-speeddial-direction-".concat(props.direction), props.type !== "circle"), "p-speeddial-open", instance.d_visible), "p-disabled", props.disabled)];
  },
  pcButton: function pcButton(_ref5) {
    var props = _ref5.props;
    return ["p-speeddial-button", {
      "p-speeddial-rotate": props.rotateAnimation && !props.hideIcon
    }];
  },
  list: "p-speeddial-list",
  item: "p-speeddial-item",
  action: "p-speeddial-action",
  actionIcon: "p-speeddial-action-icon",
  mask: function mask(_ref6) {
    var instance = _ref6.instance;
    return ["p-speeddial-mask", {
      "p-speeddial-mask-visible": instance.d_visible
    }];
  }
};
var SpeedDialStyle = BaseStyle.extend({
  name: "speeddial",
  style,
  classes,
  inlineStyles
});
var script$1 = {
  name: "BaseSpeedDial",
  "extends": script$4,
  props: {
    model: null,
    visible: {
      type: Boolean,
      "default": false
    },
    direction: {
      type: String,
      "default": "up"
    },
    transitionDelay: {
      type: Number,
      "default": 30
    },
    type: {
      type: String,
      "default": "linear"
    },
    radius: {
      type: Number,
      "default": 0
    },
    mask: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    hideOnClickOutside: {
      type: Boolean,
      "default": true
    },
    buttonClass: null,
    maskStyle: null,
    maskClass: null,
    showIcon: {
      type: String,
      "default": void 0
    },
    hideIcon: {
      type: String,
      "default": void 0
    },
    rotateAnimation: {
      type: Boolean,
      "default": true
    },
    tooltipOptions: null,
    style: null,
    "class": null,
    buttonProps: {
      type: Object,
      "default": function _default() {
        return {
          rounded: true
        };
      }
    },
    actionButtonProps: {
      type: Object,
      "default": function _default2() {
        return {
          severity: "secondary",
          rounded: true,
          size: "small"
        };
      }
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
  style: SpeedDialStyle,
  provide: function provide() {
    return {
      $pcSpeedDial: this,
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
var Math_PI = 3.14159265358979;
var script = {
  name: "SpeedDial",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["click", "show", "hide", "focus", "blur"],
  documentClickListener: null,
  container: null,
  list: null,
  data: function data() {
    return {
      d_visible: this.visible,
      isItemClicked: false,
      focused: false,
      focusedOptionIndex: -1
    };
  },
  watch: {
    visible: function visible(newValue) {
      this.d_visible = newValue;
    }
  },
  mounted: function mounted() {
    if (this.type !== "linear") {
      var button = findSingle(this.container, '[data-pc-name="pcbutton"]');
      var firstItem = findSingle(this.list, '[data-pc-section="item"]');
      if (button && firstItem) {
        var wDiff = Math.abs(button.offsetWidth - firstItem.offsetWidth);
        var hDiff = Math.abs(button.offsetHeight - firstItem.offsetHeight);
        this.list.style.setProperty($dt("item.diff.x").name, "".concat(wDiff / 2, "px"));
        this.list.style.setProperty($dt("item.diff.y").name, "".concat(hDiff / 2, "px"));
      }
    }
    if (this.hideOnClickOutside) {
      this.bindDocumentClickListener();
    }
  },
  beforeUnmount: function beforeUnmount() {
    this.unbindDocumentClickListener();
  },
  methods: {
    getPTOptions: function getPTOptions(id, key) {
      return this.ptm(key, {
        context: {
          active: this.isItemActive(id),
          hidden: !this.d_visible
        }
      });
    },
    onFocus: function onFocus(event) {
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      this.focusedOptionIndex = -1;
      this.$emit("blur", event);
    },
    onItemClick: function onItemClick(e, item) {
      if (item.command) {
        item.command({
          originalEvent: e,
          item
        });
      }
      this.hide();
      this.isItemClicked = true;
      e.preventDefault();
    },
    onClick: function onClick(event) {
      this.d_visible ? this.hide() : this.show();
      this.isItemClicked = true;
      this.$emit("click", event);
    },
    show: function show() {
      this.d_visible = true;
      this.$emit("show");
    },
    hide: function hide() {
      this.d_visible = false;
      this.$emit("hide");
    },
    calculateTransitionDelay: function calculateTransitionDelay(index) {
      var length = this.model.length;
      var visible2 = this.d_visible;
      return (visible2 ? index : length - index - 1) * this.transitionDelay;
    },
    onTogglerKeydown: function onTogglerKeydown(event) {
      switch (event.code) {
        case "ArrowDown":
        case "ArrowLeft":
          this.onTogglerArrowDown(event);
          break;
        case "ArrowUp":
        case "ArrowRight":
          this.onTogglerArrowUp(event);
          break;
        case "Escape":
          this.onEscapeKey();
          break;
      }
    },
    onKeyDown: function onKeyDown(event) {
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDown(event);
          break;
        case "ArrowUp":
          this.onArrowUp(event);
          break;
        case "ArrowLeft":
          this.onArrowLeft(event);
          break;
        case "ArrowRight":
          this.onArrowRight(event);
          break;
        case "Enter":
        case "NumpadEnter":
        case "Space":
          this.onEnterKey(event);
          break;
        case "Escape":
          this.onEscapeKey(event);
          break;
        case "Home":
          this.onHomeKey(event);
          break;
        case "End":
          this.onEndKey(event);
          break;
      }
    },
    onTogglerArrowUp: function onTogglerArrowUp(event) {
      this.show();
      this.navigatePrevItem(event);
      event.preventDefault();
    },
    onTogglerArrowDown: function onTogglerArrowDown(event) {
      this.show();
      this.navigateNextItem(event);
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event) {
      var _this = this;
      var items = find(this.container, '[data-pc-section="item"]');
      var itemIndex = _toConsumableArray(items).findIndex(function(item) {
        return item.id === _this.focusedOptionIndex;
      });
      var buttonEl = findSingle(this.container, "button");
      this.onItemClick(event, this.model[itemIndex]);
      this.onBlur(event);
      buttonEl && focus(buttonEl);
    },
    onEscapeKey: function onEscapeKey() {
      this.hide();
      var buttonEl = findSingle(this.container, "button");
      buttonEl && focus(buttonEl);
    },
    onArrowUp: function onArrowUp(event) {
      if (this.direction === "down") {
        this.navigatePrevItem(event);
      } else {
        this.navigateNextItem(event);
      }
    },
    onArrowDown: function onArrowDown(event) {
      if (this.direction === "down") {
        this.navigateNextItem(event);
      } else {
        this.navigatePrevItem(event);
      }
    },
    onArrowLeft: function onArrowLeft(event) {
      var leftValidDirections = ["left", "up-right", "down-left"];
      var rightValidDirections = ["right", "up-left", "down-right"];
      if (leftValidDirections.includes(this.direction)) {
        this.navigateNextItem(event);
      } else if (rightValidDirections.includes(this.direction)) {
        this.navigatePrevItem(event);
      } else {
        this.navigatePrevItem(event);
      }
    },
    onArrowRight: function onArrowRight(event) {
      var leftValidDirections = ["left", "up-right", "down-left"];
      var rightValidDirections = ["right", "up-left", "down-right"];
      if (leftValidDirections.includes(this.direction)) {
        this.navigatePrevItem(event);
      } else if (rightValidDirections.includes(this.direction)) {
        this.navigateNextItem(event);
      } else {
        this.navigateNextItem(event);
      }
    },
    onEndKey: function onEndKey(event) {
      event.preventDefault();
      this.focusedOptionIndex = -1;
      this.navigatePrevItem(event);
    },
    onHomeKey: function onHomeKey(event) {
      event.preventDefault();
      this.focusedOptionIndex = -1;
      this.navigateNextItem(event);
    },
    navigateNextItem: function navigateNextItem(event) {
      var optionIndex = this.findNextOptionIndex(this.focusedOptionIndex);
      this.changeFocusedOptionIndex(optionIndex);
      event.preventDefault();
    },
    navigatePrevItem: function navigatePrevItem(event) {
      var optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex);
      this.changeFocusedOptionIndex(optionIndex);
      event.preventDefault();
    },
    changeFocusedOptionIndex: function changeFocusedOptionIndex(index) {
      var items = find(this.container, '[data-pc-section="item"]');
      var filteredItems = _toConsumableArray(items).filter(function(item) {
        return !hasClass(findSingle(item, "a"), "p-disabled");
      });
      if (filteredItems[index]) {
        this.focusedOptionIndex = filteredItems[index].getAttribute("id");
        var buttonEl = findSingle(filteredItems[index], '[type="button"]');
        buttonEl && focus(buttonEl);
      }
    },
    findPrevOptionIndex: function findPrevOptionIndex(index) {
      var items = find(this.container, '[data-pc-section="item"]');
      var filteredItems = _toConsumableArray(items).filter(function(item) {
        return !hasClass(findSingle(item, "a"), "p-disabled");
      });
      var newIndex = index === -1 ? filteredItems[filteredItems.length - 1].id : index;
      var matchedOptionIndex = filteredItems.findIndex(function(link) {
        return link.getAttribute("id") === newIndex;
      });
      matchedOptionIndex = index === -1 ? filteredItems.length - 1 : matchedOptionIndex - 1;
      return matchedOptionIndex;
    },
    findNextOptionIndex: function findNextOptionIndex(index) {
      var items = find(this.container, '[data-pc-section="item"]');
      var filteredItems = _toConsumableArray(items).filter(function(item) {
        return !hasClass(findSingle(item, "a"), "p-disabled");
      });
      var newIndex = index === -1 ? filteredItems[0].id : index;
      var matchedOptionIndex = filteredItems.findIndex(function(link) {
        return link.getAttribute("id") === newIndex;
      });
      matchedOptionIndex = index === -1 ? 0 : matchedOptionIndex + 1;
      return matchedOptionIndex;
    },
    calculatePointStyle: function calculatePointStyle(index) {
      var type = this.type;
      if (type !== "linear") {
        var length = this.model.length;
        var radius = this.radius || length * 20;
        if (type === "circle") {
          var step = 2 * Math_PI / length;
          return {
            left: "calc(".concat(radius * Math.cos(step * index), "px + ").concat($dt("item.diff.x", "0px").variable, ")"),
            top: "calc(".concat(radius * Math.sin(step * index), "px + ").concat($dt("item.diff.y", "0px").variable, ")")
          };
        } else if (type === "semi-circle") {
          var direction = this.direction;
          var _step = Math_PI / (length - 1);
          var x = "calc(".concat(radius * Math.cos(_step * index), "px + ").concat($dt("item.diff.x", "0px").variable, ")");
          var y = "calc(".concat(radius * Math.sin(_step * index), "px + ").concat($dt("item.diff.y", "0px").variable, ")");
          if (direction === "up") {
            return {
              left: x,
              bottom: y
            };
          } else if (direction === "down") {
            return {
              left: x,
              top: y
            };
          } else if (direction === "left") {
            return {
              right: y,
              top: x
            };
          } else if (direction === "right") {
            return {
              left: y,
              top: x
            };
          }
        } else if (type === "quarter-circle") {
          var _direction = this.direction;
          var _step2 = Math_PI / (2 * (length - 1));
          var _x = "calc(".concat(radius * Math.cos(_step2 * index), "px + ").concat($dt("item.diff.x", "0px").variable, ")");
          var _y = "calc(".concat(radius * Math.sin(_step2 * index), "px + ").concat($dt("item.diff.y", "0px").variable, ")");
          if (_direction === "up-left") {
            return {
              right: _x,
              bottom: _y
            };
          } else if (_direction === "up-right") {
            return {
              left: _x,
              bottom: _y
            };
          } else if (_direction === "down-left") {
            return {
              right: _y,
              top: _x
            };
          } else if (_direction === "down-right") {
            return {
              left: _y,
              top: _x
            };
          }
        }
      }
      return {};
    },
    getItemStyle: function getItemStyle(index) {
      var transitionDelay = this.calculateTransitionDelay(index);
      var pointStyle = this.calculatePointStyle(index);
      return _objectSpread({
        transitionDelay: "".concat(transitionDelay, "ms")
      }, pointStyle);
    },
    bindDocumentClickListener: function bindDocumentClickListener() {
      var _this2 = this;
      if (!this.documentClickListener) {
        this.documentClickListener = function(event) {
          if (_this2.d_visible && _this2.isOutsideClicked(event)) {
            _this2.hide();
          }
          _this2.isItemClicked = false;
        };
        (void 0).addEventListener("click", this.documentClickListener);
      }
    },
    unbindDocumentClickListener: function unbindDocumentClickListener() {
      if (this.documentClickListener) {
        (void 0).removeEventListener("click", this.documentClickListener);
        this.documentClickListener = null;
      }
    },
    isOutsideClicked: function isOutsideClicked(event) {
      return this.container && !(this.container.isSameNode(event.target) || this.container.contains(event.target) || this.isItemClicked);
    },
    isItemVisible: function isItemVisible(item) {
      return typeof item.visible === "function" ? item.visible() : item.visible !== false;
    },
    isItemActive: function isItemActive(id) {
      return id === this.focusedOptionId;
    },
    containerRef: function containerRef(el) {
      this.container = el;
    },
    listRef: function listRef(el) {
      this.list = el;
    }
  },
  computed: {
    containerClass: function containerClass() {
      return [this.cx("root"), this["class"]];
    },
    focusedOptionId: function focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : null;
    }
  },
  components: {
    Button: script$3,
    PlusIcon: script$2
  },
  directives: {
    ripple: Ripple,
    tooltip: Tooltip
  }
};
var _hoisted_1 = ["id"];
var _hoisted_2 = ["id", "data-p-active"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = resolveComponent("Button");
  var _directive_tooltip = resolveDirective("tooltip");
  return openBlock(), createElementBlock(Fragment, null, [createElementVNode("div", mergeProps({
    ref: $options.containerRef,
    "class": $options.containerClass,
    style: [_ctx.style, _ctx.sx("root")]
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "button", {
    visible: $data.d_visible,
    toggleCallback: $options.onClick
  }, function() {
    return [createVNode(_component_Button, mergeProps({
      "class": [_ctx.cx("pcButton"), _ctx.buttonClass],
      disabled: _ctx.disabled,
      "aria-expanded": $data.d_visible,
      "aria-haspopup": true,
      "aria-controls": _ctx.$id + "_list",
      "aria-label": _ctx.ariaLabel,
      "aria-labelledby": _ctx.ariaLabelledby,
      unstyled: _ctx.unstyled,
      onClick: _cache[0] || (_cache[0] = function($event) {
        return $options.onClick($event);
      }),
      onKeydown: $options.onTogglerKeydown
    }, _ctx.buttonProps, {
      pt: _ctx.ptm("pcButton")
    }), {
      icon: withCtx(function(slotProps) {
        return [renderSlot(_ctx.$slots, "icon", {
          visible: $data.d_visible
        }, function() {
          return [$data.d_visible && !!_ctx.hideIcon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.hideIcon ? "span" : "PlusIcon"), mergeProps({
            key: 0,
            "class": [_ctx.hideIcon, slotProps["class"]]
          }, _ctx.ptm("pcButton")["icon"], {
            "data-pc-section": "icon"
          }), null, 16, ["class"])) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.showIcon ? "span" : "PlusIcon"), mergeProps({
            key: 1,
            "class": [$data.d_visible && !!_ctx.hideIcon ? _ctx.hideIcon : _ctx.showIcon, slotProps["class"]]
          }, _ctx.ptm("pcButton")["icon"], {
            "data-pc-section": "icon"
          }), null, 16, ["class"]))];
        })];
      }),
      _: 3
    }, 16, ["class", "disabled", "aria-expanded", "aria-controls", "aria-label", "aria-labelledby", "unstyled", "onKeydown", "pt"])];
  }), createElementVNode("ul", mergeProps({
    ref: $options.listRef,
    id: _ctx.$id + "_list",
    "class": _ctx.cx("list"),
    style: _ctx.sx("list"),
    role: "menu",
    tabindex: "-1",
    onFocus: _cache[1] || (_cache[1] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[2] || (_cache[2] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    onKeydown: _cache[3] || (_cache[3] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    })
  }, _ctx.ptm("list")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, function(item, index) {
    return openBlock(), createElementBlock(Fragment, {
      key: index
    }, [$options.isItemVisible(item) ? (openBlock(), createElementBlock("li", mergeProps({
      key: 0,
      id: "".concat(_ctx.$id, "_").concat(index),
      "class": _ctx.cx("item", {
        id: "".concat(_ctx.$id, "_").concat(index)
      }),
      style: $options.getItemStyle(index),
      role: "none",
      "data-p-active": $options.isItemActive("".concat(_ctx.$id, "_").concat(index))
    }, {
      ref_for: true
    }, $options.getPTOptions("".concat(_ctx.$id, "_").concat(index), "item")), [!_ctx.$slots.item ? withDirectives((openBlock(), createBlock(_component_Button, mergeProps({
      key: 0,
      tabindex: -1,
      role: "menuitem",
      "class": _ctx.cx("pcAction", {
        item
      }),
      "aria-label": item.label,
      disabled: _ctx.disabled,
      unstyled: _ctx.unstyled,
      onClick: function onClick2($event) {
        return $options.onItemClick($event, item);
      }
    }, {
      ref_for: true
    }, _ctx.actionButtonProps, {
      pt: $options.getPTOptions("".concat(_ctx.$id, "_").concat(index), "pcAction")
    }), createSlots({
      _: 2
    }, [item.icon ? {
      name: "icon",
      fn: withCtx(function(slotProps) {
        return [renderSlot(_ctx.$slots, "itemicon", {
          item,
          "class": normalizeClass(slotProps["class"])
        }, function() {
          return [createElementVNode("span", mergeProps({
            "class": [item.icon, slotProps["class"]]
          }, {
            ref_for: true
          }, $options.getPTOptions("".concat(_ctx.$id, "_").concat(index), "actionIcon")), null, 16)];
        })];
      }),
      key: "0"
    } : void 0]), 1040, ["class", "aria-label", "disabled", "unstyled", "onClick", "pt"])), [[_directive_tooltip, {
      value: item.label,
      disabled: !_ctx.tooltipOptions
    }, _ctx.tooltipOptions]]) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.item), {
      key: 1,
      item,
      onClick: function onClick2(event) {
        return $options.onItemClick(event, item);
      },
      toggleCallback: function toggleCallback(event) {
        return $options.onItemClick(event, item);
      }
    }, null, 8, ["item", "onClick", "toggleCallback"]))], 16, _hoisted_2)) : createCommentVNode("", true)], 64);
  }), 128))], 16, _hoisted_1)], 16), _ctx.mask ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": [_ctx.cx("mask"), _ctx.maskClass],
    style: _ctx.maskStyle
  }, _ctx.ptm("mask")), null, 16)) : createCommentVNode("", true)], 64);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-Gs1nDgp_.mjs.map
