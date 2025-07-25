import { cn } from '@primeuix/utils';
import { findSingle, getFocusableElements, isTouchDevice, relativePosition, getOuterWidth, absolutePosition, addStyle, focus, getLastFocusableElement, getFirstFocusableElement } from '@primeuix/utils/dom';
import { isNotEmpty, isEmpty, findLastIndex, equals, isPrintableCharacter, resolveFieldData } from '@primeuix/utils/object';
import { ZIndex } from '@primeuix/utils/zindex';
import { w as script$4, v as Ripple, B as BaseStyle, F as FilterService } from './server.mjs';
import { C as ConnectedOverlayScrollHandler } from './index-UnQD5FIJ.mjs';
import { s as script$2 } from './index-CMg9969q.mjs';
import { s as script$3 } from './index-CmU8UmpY.mjs';
import { s as script$5 } from './index-SKHn8XPG.mjs';
import { s as script$6 } from './index-v2M6uT44.mjs';
import script$c from './index-DfGYe7Zl.mjs';
import script$9 from './index-B3l8jI1_.mjs';
import script$8 from './index-N-SFyyHw.mjs';
import script$7 from './index-COKAxpN0.mjs';
import script$d from './index-CArJ0zZr.mjs';
import { O as OverlayEventBus } from './index-rAVNvoJo.mjs';
import { s as script$a } from './index-D21vFaAL.mjs';
import script$b from './index-CJZjQYFs.mjs';
import { s as script$e } from './index-BJJLwLad.mjs';
import { style } from '@primeuix/styles/multiselect';
import { resolveComponent, resolveDirective, createElementBlock, openBlock, mergeProps, createElementVNode, renderSlot, createCommentVNode, createVNode, Fragment, createTextVNode, toDisplayString, renderList, normalizeClass, withCtx, createBlock, resolveDynamicComponent, Transition, normalizeProps, createSlots, withDirectives } from 'vue';
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
import './index-BnhPl9gy.mjs';
import './index-wMdTEZV0.mjs';
import './index-BX2TxoDU.mjs';

var inlineStyles = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === "self" ? "relative" : void 0
    };
  }
};
var classes = {
  root: function root2(_ref2) {
    var instance = _ref2.instance, props = _ref2.props;
    return ["p-multiselect p-component p-inputwrapper", {
      "p-multiselect-display-chip": props.display === "chip",
      "p-disabled": props.disabled,
      "p-invalid": instance.$invalid,
      "p-variant-filled": instance.$variant === "filled",
      "p-focus": instance.focused,
      "p-inputwrapper-filled": instance.$filled,
      "p-inputwrapper-focus": instance.focused || instance.overlayVisible,
      "p-multiselect-open": instance.overlayVisible,
      "p-multiselect-fluid": instance.$fluid,
      "p-multiselect-sm p-inputfield-sm": props.size === "small",
      "p-multiselect-lg p-inputfield-lg": props.size === "large"
    }];
  },
  labelContainer: "p-multiselect-label-container",
  label: function label(_ref3) {
    var instance = _ref3.instance, props = _ref3.props;
    return ["p-multiselect-label", {
      "p-placeholder": instance.label === props.placeholder,
      "p-multiselect-label-empty": !props.placeholder && !instance.$filled
    }];
  },
  clearIcon: "p-multiselect-clear-icon",
  chipItem: "p-multiselect-chip-item",
  pcChip: "p-multiselect-chip",
  chipIcon: "p-multiselect-chip-icon",
  dropdown: "p-multiselect-dropdown",
  loadingIcon: "p-multiselect-loading-icon",
  dropdownIcon: "p-multiselect-dropdown-icon",
  overlay: "p-multiselect-overlay p-component",
  header: "p-multiselect-header",
  pcFilterContainer: "p-multiselect-filter-container",
  pcFilter: "p-multiselect-filter",
  listContainer: "p-multiselect-list-container",
  list: "p-multiselect-list",
  optionGroup: "p-multiselect-option-group",
  option: function option(_ref4) {
    var instance = _ref4.instance, _option = _ref4.option, index = _ref4.index, getItemOptions = _ref4.getItemOptions, props = _ref4.props;
    return ["p-multiselect-option", {
      "p-multiselect-option-selected": instance.isSelected(_option) && props.highlightOnSelect,
      "p-focus": instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
      "p-disabled": instance.isOptionDisabled(_option)
    }];
  },
  emptyMessage: "p-multiselect-empty-message"
};
var MultiSelectStyle = BaseStyle.extend({
  name: "multiselect",
  style,
  classes,
  inlineStyles
});
var script$1 = {
  name: "BaseMultiSelect",
  "extends": script$e,
  props: {
    options: Array,
    optionLabel: null,
    optionValue: null,
    optionDisabled: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
    scrollHeight: {
      type: String,
      "default": "14rem"
    },
    placeholder: String,
    inputId: {
      type: String,
      "default": null
    },
    panelClass: {
      type: String,
      "default": null
    },
    panelStyle: {
      type: null,
      "default": null
    },
    overlayClass: {
      type: String,
      "default": null
    },
    overlayStyle: {
      type: null,
      "default": null
    },
    dataKey: null,
    showClear: {
      type: Boolean,
      "default": false
    },
    clearIcon: {
      type: String,
      "default": void 0
    },
    resetFilterOnClear: {
      type: Boolean,
      "default": false
    },
    filter: Boolean,
    filterPlaceholder: String,
    filterLocale: String,
    filterMatchMode: {
      type: String,
      "default": "contains"
    },
    filterFields: {
      type: Array,
      "default": null
    },
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    display: {
      type: String,
      "default": "comma"
    },
    selectedItemsLabel: {
      type: String,
      "default": null
    },
    maxSelectedLabels: {
      type: Number,
      "default": null
    },
    selectionLimit: {
      type: Number,
      "default": null
    },
    showToggleAll: {
      type: Boolean,
      "default": true
    },
    loading: {
      type: Boolean,
      "default": false
    },
    checkboxIcon: {
      type: String,
      "default": void 0
    },
    dropdownIcon: {
      type: String,
      "default": void 0
    },
    filterIcon: {
      type: String,
      "default": void 0
    },
    loadingIcon: {
      type: String,
      "default": void 0
    },
    removeTokenIcon: {
      type: String,
      "default": void 0
    },
    chipIcon: {
      type: String,
      "default": void 0
    },
    selectAll: {
      type: Boolean,
      "default": null
    },
    resetFilterOnHide: {
      type: Boolean,
      "default": false
    },
    virtualScrollerOptions: {
      type: Object,
      "default": null
    },
    autoOptionFocus: {
      type: Boolean,
      "default": false
    },
    autoFilterFocus: {
      type: Boolean,
      "default": false
    },
    focusOnHover: {
      type: Boolean,
      "default": true
    },
    highlightOnSelect: {
      type: Boolean,
      "default": false
    },
    filterMessage: {
      type: String,
      "default": null
    },
    selectionMessage: {
      type: String,
      "default": null
    },
    emptySelectionMessage: {
      type: String,
      "default": null
    },
    emptyFilterMessage: {
      type: String,
      "default": null
    },
    emptyMessage: {
      type: String,
      "default": null
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    ariaLabel: {
      type: String,
      "default": null
    },
    ariaLabelledby: {
      type: String,
      "default": null
    }
  },
  style: MultiSelectStyle,
  provide: function provide() {
    return {
      $pcMultiSelect: this,
      $parentInstance: this
    };
  }
};
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
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
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
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
  name: "MultiSelect",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["change", "focus", "blur", "before-show", "before-hide", "show", "hide", "filter", "selectall-change"],
  inject: {
    $pcFluid: {
      "default": null
    }
  },
  outsideClickListener: null,
  scrollHandler: null,
  resizeListener: null,
  overlay: null,
  list: null,
  virtualScroller: null,
  startRangeIndex: -1,
  searchTimeout: null,
  searchValue: "",
  selectOnFocus: false,
  data: function data() {
    return {
      clicked: false,
      focused: false,
      focusedOptionIndex: -1,
      filterValue: null,
      overlayVisible: false
    };
  },
  watch: {
    options: function options() {
      this.autoUpdateModel();
    }
  },
  mounted: function mounted() {
    this.autoUpdateModel();
  },
  beforeUnmount: function beforeUnmount() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.overlay) {
      ZIndex.clear(this.overlay);
      this.overlay = null;
    }
  },
  methods: {
    getOptionIndex: function getOptionIndex(index, fn) {
      return this.virtualScrollerDisabled ? index : fn && fn(index)["index"];
    },
    getOptionLabel: function getOptionLabel(option2) {
      return this.optionLabel ? resolveFieldData(option2, this.optionLabel) : option2;
    },
    getOptionValue: function getOptionValue(option2) {
      return this.optionValue ? resolveFieldData(option2, this.optionValue) : option2;
    },
    getOptionRenderKey: function getOptionRenderKey(option2, index) {
      return this.dataKey ? resolveFieldData(option2, this.dataKey) : this.getOptionLabel(option2) + "_".concat(index);
    },
    getHeaderCheckboxPTOptions: function getHeaderCheckboxPTOptions(key) {
      return this.ptm(key, {
        context: {
          selected: this.allSelected
        }
      });
    },
    getCheckboxPTOptions: function getCheckboxPTOptions(option2, itemOptions, index, key) {
      return this.ptm(key, {
        context: {
          selected: this.isSelected(option2),
          focused: this.focusedOptionIndex === this.getOptionIndex(index, itemOptions),
          disabled: this.isOptionDisabled(option2)
        }
      });
    },
    isOptionDisabled: function isOptionDisabled(option2) {
      if (this.maxSelectionLimitReached && !this.isSelected(option2)) {
        return true;
      }
      return this.optionDisabled ? resolveFieldData(option2, this.optionDisabled) : false;
    },
    isOptionGroup: function isOptionGroup(option2) {
      return this.optionGroupLabel && option2.optionGroup && option2.group;
    },
    getOptionGroupLabel: function getOptionGroupLabel(optionGroup) {
      return resolveFieldData(optionGroup, this.optionGroupLabel);
    },
    getOptionGroupChildren: function getOptionGroupChildren(optionGroup) {
      return resolveFieldData(optionGroup, this.optionGroupChildren);
    },
    getAriaPosInset: function getAriaPosInset(index) {
      var _this = this;
      return (this.optionGroupLabel ? index - this.visibleOptions.slice(0, index).filter(function(option2) {
        return _this.isOptionGroup(option2);
      }).length : index) + 1;
    },
    show: function show(isFocus) {
      this.$emit("before-show");
      this.overlayVisible = true;
      this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.findSelectedOptionIndex();
      isFocus && focus(this.$refs.focusInput);
    },
    hide: function hide(isFocus) {
      var _this2 = this;
      var _hide = function _hide2() {
        _this2.$emit("before-hide");
        _this2.overlayVisible = false;
        _this2.clicked = false;
        _this2.focusedOptionIndex = -1;
        _this2.searchValue = "";
        _this2.resetFilterOnHide && (_this2.filterValue = null);
        isFocus && focus(_this2.$refs.focusInput);
      };
      setTimeout(function() {
        _hide();
      }, 0);
    },
    onFocus: function onFocus(event) {
      if (this.disabled) {
        return;
      }
      this.focused = true;
      if (this.overlayVisible) {
        this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.findSelectedOptionIndex();
        !this.autoFilterFocus && this.scrollInView(this.focusedOptionIndex);
      }
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      var _this$formField$onBlu, _this$formField;
      this.clicked = false;
      this.focused = false;
      this.focusedOptionIndex = -1;
      this.searchValue = "";
      this.$emit("blur", event);
      (_this$formField$onBlu = (_this$formField = this.formField).onBlur) === null || _this$formField$onBlu === void 0 || _this$formField$onBlu.call(_this$formField);
    },
    onKeyDown: function onKeyDown(event) {
      var _this3 = this;
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      var metaKey = event.metaKey || event.ctrlKey;
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
        case "PageDown":
          this.onPageDownKey(event);
          break;
        case "PageUp":
          this.onPageUpKey(event);
          break;
        case "Enter":
        case "NumpadEnter":
        case "Space":
          this.onEnterKey(event);
          break;
        case "Escape":
          this.onEscapeKey(event);
          break;
        case "Tab":
          this.onTabKey(event);
          break;
        case "ShiftLeft":
        case "ShiftRight":
          this.onShiftKey(event);
          break;
        default:
          if (event.code === "KeyA" && metaKey) {
            var value = this.visibleOptions.filter(function(option2) {
              return _this3.isValidOption(option2);
            }).map(function(option2) {
              return _this3.getOptionValue(option2);
            });
            this.updateModel(event, value);
            event.preventDefault();
            break;
          }
          if (!metaKey && isPrintableCharacter(event.key)) {
            !this.overlayVisible && this.show();
            this.searchOptions(event);
            event.preventDefault();
          }
          break;
      }
      this.clicked = false;
    },
    onContainerClick: function onContainerClick(event) {
      if (this.disabled || this.loading) {
        return;
      }
      if (event.target.tagName === "INPUT" || event.target.getAttribute("data-pc-section") === "clearicon" || event.target.closest('[data-pc-section="clearicon"]')) {
        return;
      } else if (!this.overlay || !this.overlay.contains(event.target)) {
        this.overlayVisible ? this.hide(true) : this.show(true);
      }
      this.clicked = true;
    },
    onClearClick: function onClearClick(event) {
      this.updateModel(event, null);
      this.resetFilterOnClear && (this.filterValue = null);
    },
    onFirstHiddenFocus: function onFirstHiddenFocus(event) {
      var focusableEl = event.relatedTarget === this.$refs.focusInput ? getFirstFocusableElement(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;
      focus(focusableEl);
    },
    onLastHiddenFocus: function onLastHiddenFocus(event) {
      var focusableEl = event.relatedTarget === this.$refs.focusInput ? getLastFocusableElement(this.overlay, ':not([data-p-hidden-focusable="true"])') : this.$refs.focusInput;
      focus(focusableEl);
    },
    onOptionSelect: function onOptionSelect(event, option2) {
      var _this4 = this;
      var index = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1;
      var isFocus = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
      if (this.disabled || this.isOptionDisabled(option2)) {
        return;
      }
      var selected = this.isSelected(option2);
      var value = null;
      var _value = this.getOptionValue(option2) !== "" ? this.getOptionValue(option2) : this.getOptionLabel(option2);
      if (selected) value = this.d_value.filter(function(val) {
        return !equals(val, _value, _this4.equalityKey);
      });
      else value = [].concat(_toConsumableArray(this.d_value || []), [_value]);
      this.updateModel(event, value);
      index !== -1 && (this.focusedOptionIndex = index);
      isFocus && focus(this.$refs.focusInput);
    },
    onOptionMouseMove: function onOptionMouseMove(event, index) {
      if (this.focusOnHover) {
        this.changeFocusedOptionIndex(event, index);
      }
    },
    onOptionSelectRange: function onOptionSelectRange(event) {
      var _this5 = this;
      var start = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
      var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1;
      start === -1 && (start = this.findNearestSelectedOptionIndex(end, true));
      end === -1 && (end = this.findNearestSelectedOptionIndex(start));
      if (start !== -1 && end !== -1) {
        var rangeStart = Math.min(start, end);
        var rangeEnd = Math.max(start, end);
        var value = this.visibleOptions.slice(rangeStart, rangeEnd + 1).filter(function(option2) {
          return _this5.isValidOption(option2);
        }).map(function(option2) {
          return _this5.getOptionValue(option2);
        });
        this.updateModel(event, value);
      }
    },
    onFilterChange: function onFilterChange(event) {
      var value = event.target.value;
      this.filterValue = value;
      this.focusedOptionIndex = -1;
      this.$emit("filter", {
        originalEvent: event,
        value
      });
      !this.virtualScrollerDisabled && this.virtualScroller.scrollToIndex(0);
    },
    onFilterKeyDown: function onFilterKeyDown(event) {
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event, true);
          break;
        case "ArrowLeft":
        case "ArrowRight":
          this.onArrowLeftKey(event, true);
          break;
        case "Home":
          this.onHomeKey(event, true);
          break;
        case "End":
          this.onEndKey(event, true);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(event);
          break;
        case "Escape":
          this.onEscapeKey(event);
          break;
        case "Tab":
          this.onTabKey(event, true);
          break;
      }
    },
    onFilterBlur: function onFilterBlur() {
      this.focusedOptionIndex = -1;
    },
    onFilterUpdated: function onFilterUpdated() {
      if (this.overlayVisible) {
        this.alignOverlay();
      }
    },
    onOverlayClick: function onOverlayClick(event) {
      OverlayEventBus.emit("overlay-click", {
        originalEvent: event,
        target: this.$el
      });
    },
    onOverlayKeyDown: function onOverlayKeyDown(event) {
      switch (event.code) {
        case "Escape":
          this.onEscapeKey(event);
          break;
      }
    },
    onArrowDownKey: function onArrowDownKey(event) {
      if (!this.overlayVisible) {
        this.show();
      } else {
        var optionIndex = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
        if (event.shiftKey) {
          this.onOptionSelectRange(event, this.startRangeIndex, optionIndex);
        }
        this.changeFocusedOptionIndex(event, optionIndex);
      }
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (event.altKey && !pressedInInputText) {
        if (this.focusedOptionIndex !== -1) {
          this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
        }
        this.overlayVisible && this.hide();
        event.preventDefault();
      } else {
        var optionIndex = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.clicked ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
        if (event.shiftKey) {
          this.onOptionSelectRange(event, optionIndex, this.startRangeIndex);
        }
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
        event.preventDefault();
      }
    },
    onArrowLeftKey: function onArrowLeftKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      pressedInInputText && (this.focusedOptionIndex = -1);
    },
    onHomeKey: function onHomeKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (pressedInInputText) {
        var target = event.currentTarget;
        if (event.shiftKey) {
          target.setSelectionRange(0, event.target.selectionStart);
        } else {
          target.setSelectionRange(0, 0);
          this.focusedOptionIndex = -1;
        }
      } else {
        var metaKey = event.metaKey || event.ctrlKey;
        var optionIndex = this.findFirstOptionIndex();
        if (event.shiftKey && metaKey) {
          this.onOptionSelectRange(event, optionIndex, this.startRangeIndex);
        }
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
      }
      event.preventDefault();
    },
    onEndKey: function onEndKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (pressedInInputText) {
        var target = event.currentTarget;
        if (event.shiftKey) {
          target.setSelectionRange(event.target.selectionStart, target.value.length);
        } else {
          var len = target.value.length;
          target.setSelectionRange(len, len);
          this.focusedOptionIndex = -1;
        }
      } else {
        var metaKey = event.metaKey || event.ctrlKey;
        var optionIndex = this.findLastOptionIndex();
        if (event.shiftKey && metaKey) {
          this.onOptionSelectRange(event, this.startRangeIndex, optionIndex);
        }
        this.changeFocusedOptionIndex(event, optionIndex);
        !this.overlayVisible && this.show();
      }
      event.preventDefault();
    },
    onPageUpKey: function onPageUpKey(event) {
      this.scrollInView(0);
      event.preventDefault();
    },
    onPageDownKey: function onPageDownKey(event) {
      this.scrollInView(this.visibleOptions.length - 1);
      event.preventDefault();
    },
    onEnterKey: function onEnterKey(event) {
      if (!this.overlayVisible) {
        this.focusedOptionIndex = -1;
        this.onArrowDownKey(event);
      } else {
        if (this.focusedOptionIndex !== -1) {
          if (event.shiftKey) this.onOptionSelectRange(event, this.focusedOptionIndex);
          else this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
        }
      }
      event.preventDefault();
    },
    onEscapeKey: function onEscapeKey(event) {
      if (this.overlayVisible) {
        this.hide(true);
        event.stopPropagation();
      }
      event.preventDefault();
    },
    onTabKey: function onTabKey(event) {
      var pressedInInputText = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (!pressedInInputText) {
        if (this.overlayVisible && this.hasFocusableElements()) {
          focus(event.shiftKey ? this.$refs.lastHiddenFocusableElementOnOverlay : this.$refs.firstHiddenFocusableElementOnOverlay);
          event.preventDefault();
        } else {
          if (this.focusedOptionIndex !== -1) {
            this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
          }
          this.overlayVisible && this.hide(this.filter);
        }
      }
    },
    onShiftKey: function onShiftKey() {
      this.startRangeIndex = this.focusedOptionIndex;
    },
    onOverlayEnter: function onOverlayEnter(el) {
      ZIndex.set("overlay", el, this.$primevue.config.zIndex.overlay);
      addStyle(el, {
        position: "absolute",
        top: "0"
      });
      this.alignOverlay();
      this.scrollInView();
      this.autoFilterFocus && focus(this.$refs.filterInput.$el);
      this.autoUpdateModel();
      this.$attrSelector && el.setAttribute(this.$attrSelector, "");
    },
    onOverlayAfterEnter: function onOverlayAfterEnter() {
      this.bindOutsideClickListener();
      this.bindScrollListener();
      this.bindResizeListener();
      this.$emit("show");
    },
    onOverlayLeave: function onOverlayLeave() {
      this.unbindOutsideClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
      this.$emit("hide");
      this.overlay = null;
    },
    onOverlayAfterLeave: function onOverlayAfterLeave(el) {
      ZIndex.clear(el);
    },
    alignOverlay: function alignOverlay() {
      if (this.appendTo === "self") {
        relativePosition(this.overlay, this.$el);
      } else {
        this.overlay.style.minWidth = getOuterWidth(this.$el) + "px";
        absolutePosition(this.overlay, this.$el);
      }
    },
    bindOutsideClickListener: function bindOutsideClickListener() {
      var _this6 = this;
      if (!this.outsideClickListener) {
        this.outsideClickListener = function(event) {
          if (_this6.overlayVisible && _this6.isOutsideClicked(event)) {
            _this6.hide();
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
      var _this7 = this;
      if (!this.scrollHandler) {
        this.scrollHandler = new ConnectedOverlayScrollHandler(this.$refs.container, function() {
          if (_this7.overlayVisible) {
            _this7.hide();
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
      var _this8 = this;
      if (!this.resizeListener) {
        this.resizeListener = function() {
          if (_this8.overlayVisible && !isTouchDevice()) {
            _this8.hide();
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
    isOutsideClicked: function isOutsideClicked(event) {
      return !(this.$el.isSameNode(event.target) || this.$el.contains(event.target) || this.overlay && this.overlay.contains(event.target));
    },
    getLabelByValue: function getLabelByValue(value) {
      var _this9 = this;
      var options2 = this.optionGroupLabel ? this.flatOptions(this.options) : this.options || [];
      var matchedOption = options2.find(function(option2) {
        return !_this9.isOptionGroup(option2) && equals(_this9.getOptionValue(option2) !== "" ? _this9.getOptionValue(option2) : _this9.getOptionLabel(option2), value, _this9.equalityKey);
      });
      return matchedOption ? this.getOptionLabel(matchedOption) : null;
    },
    getSelectedItemsLabel: function getSelectedItemsLabel() {
      var pattern = /{(.*?)}/;
      var selectedItemsLabel = this.selectedItemsLabel || this.$primevue.config.locale.selectionMessage;
      if (pattern.test(selectedItemsLabel)) {
        return selectedItemsLabel.replace(selectedItemsLabel.match(pattern)[0], this.d_value.length + "");
      }
      return selectedItemsLabel;
    },
    onToggleAll: function onToggleAll(event) {
      var _this0 = this;
      if (this.selectAll !== null) {
        this.$emit("selectall-change", {
          originalEvent: event,
          checked: !this.allSelected
        });
      } else {
        var value = this.allSelected ? [] : this.visibleOptions.filter(function(option2) {
          return _this0.isValidOption(option2);
        }).map(function(option2) {
          return _this0.getOptionValue(option2);
        });
        this.updateModel(event, value);
      }
    },
    removeOption: function removeOption(event, optionValue) {
      var _this1 = this;
      event.stopPropagation();
      var value = this.d_value.filter(function(val) {
        return !equals(val, optionValue, _this1.equalityKey);
      });
      this.updateModel(event, value);
    },
    clearFilter: function clearFilter() {
      this.filterValue = null;
    },
    hasFocusableElements: function hasFocusableElements() {
      return getFocusableElements(this.overlay, ':not([data-p-hidden-focusable="true"])').length > 0;
    },
    isOptionMatched: function isOptionMatched(option2) {
      var _this$getOptionLabel;
      return this.isValidOption(option2) && typeof this.getOptionLabel(option2) === "string" && ((_this$getOptionLabel = this.getOptionLabel(option2)) === null || _this$getOptionLabel === void 0 ? void 0 : _this$getOptionLabel.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)));
    },
    isValidOption: function isValidOption(option2) {
      return isNotEmpty(option2) && !(this.isOptionDisabled(option2) || this.isOptionGroup(option2));
    },
    isValidSelectedOption: function isValidSelectedOption(option2) {
      return this.isValidOption(option2) && this.isSelected(option2);
    },
    isEquals: function isEquals(value1, value2) {
      return equals(value1, value2, this.equalityKey);
    },
    isSelected: function isSelected(option2) {
      var _this10 = this;
      var optionValue = this.getOptionValue(option2) !== "" ? this.getOptionValue(option2) : this.getOptionLabel(option2);
      return (this.d_value || []).some(function(value) {
        return _this10.isEquals(value, optionValue);
      });
    },
    findFirstOptionIndex: function findFirstOptionIndex() {
      var _this11 = this;
      return this.visibleOptions.findIndex(function(option2) {
        return _this11.isValidOption(option2);
      });
    },
    findLastOptionIndex: function findLastOptionIndex() {
      var _this12 = this;
      return findLastIndex(this.visibleOptions, function(option2) {
        return _this12.isValidOption(option2);
      });
    },
    findNextOptionIndex: function findNextOptionIndex(index) {
      var _this13 = this;
      var matchedOptionIndex = index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex(function(option2) {
        return _this13.isValidOption(option2);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    },
    findPrevOptionIndex: function findPrevOptionIndex(index) {
      var _this14 = this;
      var matchedOptionIndex = index > 0 ? findLastIndex(this.visibleOptions.slice(0, index), function(option2) {
        return _this14.isValidOption(option2);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    },
    findSelectedOptionIndex: function findSelectedOptionIndex() {
      var _this15 = this;
      if (this.$filled) {
        var _loop = function _loop2() {
          var value = _this15.d_value[index];
          var matchedOptionIndex = _this15.visibleOptions.findIndex(function(option2) {
            return _this15.isValidSelectedOption(option2) && _this15.isEquals(value, _this15.getOptionValue(option2));
          });
          if (matchedOptionIndex > -1) return {
            v: matchedOptionIndex
          };
        }, _ret;
        for (var index = this.d_value.length - 1; index >= 0; index--) {
          _ret = _loop();
          if (_ret) return _ret.v;
        }
      }
      return -1;
    },
    findFirstSelectedOptionIndex: function findFirstSelectedOptionIndex() {
      var _this16 = this;
      return this.$filled ? this.visibleOptions.findIndex(function(option2) {
        return _this16.isValidSelectedOption(option2);
      }) : -1;
    },
    findLastSelectedOptionIndex: function findLastSelectedOptionIndex() {
      var _this17 = this;
      return this.$filled ? findLastIndex(this.visibleOptions, function(option2) {
        return _this17.isValidSelectedOption(option2);
      }) : -1;
    },
    findNextSelectedOptionIndex: function findNextSelectedOptionIndex(index) {
      var _this18 = this;
      var matchedOptionIndex = this.$filled && index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex(function(option2) {
        return _this18.isValidSelectedOption(option2);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
    },
    findPrevSelectedOptionIndex: function findPrevSelectedOptionIndex(index) {
      var _this19 = this;
      var matchedOptionIndex = this.$filled && index > 0 ? findLastIndex(this.visibleOptions.slice(0, index), function(option2) {
        return _this19.isValidSelectedOption(option2);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
    },
    findNearestSelectedOptionIndex: function findNearestSelectedOptionIndex(index) {
      var firstCheckUp = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var matchedOptionIndex = -1;
      if (this.$filled) {
        if (firstCheckUp) {
          matchedOptionIndex = this.findPrevSelectedOptionIndex(index);
          matchedOptionIndex = matchedOptionIndex === -1 ? this.findNextSelectedOptionIndex(index) : matchedOptionIndex;
        } else {
          matchedOptionIndex = this.findNextSelectedOptionIndex(index);
          matchedOptionIndex = matchedOptionIndex === -1 ? this.findPrevSelectedOptionIndex(index) : matchedOptionIndex;
        }
      }
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    },
    findFirstFocusedOptionIndex: function findFirstFocusedOptionIndex() {
      var selectedIndex = this.findFirstSelectedOptionIndex();
      return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
    },
    findLastFocusedOptionIndex: function findLastFocusedOptionIndex() {
      var selectedIndex = this.findSelectedOptionIndex();
      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    },
    searchOptions: function searchOptions(event) {
      var _this20 = this;
      this.searchValue = (this.searchValue || "") + event.key;
      var optionIndex = -1;
      if (isNotEmpty(this.searchValue)) {
        if (this.focusedOptionIndex !== -1) {
          optionIndex = this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(option2) {
            return _this20.isOptionMatched(option2);
          });
          optionIndex = optionIndex === -1 ? this.visibleOptions.slice(0, this.focusedOptionIndex).findIndex(function(option2) {
            return _this20.isOptionMatched(option2);
          }) : optionIndex + this.focusedOptionIndex;
        } else {
          optionIndex = this.visibleOptions.findIndex(function(option2) {
            return _this20.isOptionMatched(option2);
          });
        }
        if (optionIndex === -1 && this.focusedOptionIndex === -1) {
          optionIndex = this.findFirstFocusedOptionIndex();
        }
        if (optionIndex !== -1) {
          this.changeFocusedOptionIndex(event, optionIndex);
        }
      }
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(function() {
        _this20.searchValue = "";
        _this20.searchTimeout = null;
      }, 500);
    },
    changeFocusedOptionIndex: function changeFocusedOptionIndex(event, index) {
      if (this.focusedOptionIndex !== index) {
        this.focusedOptionIndex = index;
        this.scrollInView();
        if (this.selectOnFocus) {
          this.onOptionSelect(event, this.visibleOptions[index]);
        }
      }
    },
    scrollInView: function scrollInView() {
      var _this21 = this;
      var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
      this.$nextTick(function() {
        var id = index !== -1 ? "".concat(_this21.$id, "_").concat(index) : _this21.focusedOptionId;
        var element = findSingle(_this21.list, 'li[id="'.concat(id, '"]'));
        if (element) {
          element.scrollIntoView && element.scrollIntoView({
            block: "nearest",
            inline: "nearest"
          });
        } else if (!_this21.virtualScrollerDisabled) {
          _this21.virtualScroller && _this21.virtualScroller.scrollToIndex(index !== -1 ? index : _this21.focusedOptionIndex);
        }
      });
    },
    autoUpdateModel: function autoUpdateModel() {
      if (this.autoOptionFocus) {
        this.focusedOptionIndex = this.findFirstFocusedOptionIndex();
      }
      if (this.selectOnFocus && this.autoOptionFocus && !this.$filled) {
        var value = this.getOptionValue(this.visibleOptions[this.focusedOptionIndex]);
        this.updateModel(null, [value]);
      }
    },
    updateModel: function updateModel(event, value) {
      this.writeValue(value, event);
      this.$emit("change", {
        originalEvent: event,
        value
      });
    },
    flatOptions: function flatOptions(options2) {
      var _this22 = this;
      return (options2 || []).reduce(function(result, option2, index) {
        result.push({
          optionGroup: option2,
          group: true,
          index
        });
        var optionGroupChildren = _this22.getOptionGroupChildren(option2);
        optionGroupChildren && optionGroupChildren.forEach(function(o) {
          return result.push(o);
        });
        return result;
      }, []);
    },
    overlayRef: function overlayRef(el) {
      this.overlay = el;
    },
    listRef: function listRef(el, contentRef) {
      this.list = el;
      contentRef && contentRef(el);
    },
    virtualScrollerRef: function virtualScrollerRef(el) {
      this.virtualScroller = el;
    }
  },
  computed: {
    visibleOptions: function visibleOptions() {
      var _this23 = this;
      var options2 = this.optionGroupLabel ? this.flatOptions(this.options) : this.options || [];
      if (this.filterValue) {
        var filteredOptions = FilterService.filter(options2, this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
        if (this.optionGroupLabel) {
          var optionGroups = this.options || [];
          var filtered = [];
          optionGroups.forEach(function(group) {
            var groupChildren = _this23.getOptionGroupChildren(group);
            var filteredItems = groupChildren.filter(function(item) {
              return filteredOptions.includes(item);
            });
            if (filteredItems.length > 0) filtered.push(_objectSpread(_objectSpread({}, group), {}, _defineProperty$1({}, typeof _this23.optionGroupChildren === "string" ? _this23.optionGroupChildren : "items", _toConsumableArray(filteredItems))));
          });
          return this.flatOptions(filtered);
        }
        return filteredOptions;
      }
      return options2;
    },
    label: function label2() {
      var label22;
      if (this.d_value && this.d_value.length) {
        if (isNotEmpty(this.maxSelectedLabels) && this.d_value.length > this.maxSelectedLabels) {
          return this.getSelectedItemsLabel();
        } else {
          label22 = "";
          for (var i = 0; i < this.d_value.length; i++) {
            if (i !== 0) {
              label22 += ", ";
            }
            label22 += this.getLabelByValue(this.d_value[i]);
          }
        }
      } else {
        label22 = this.placeholder;
      }
      return label22;
    },
    chipSelectedItems: function chipSelectedItems() {
      return isNotEmpty(this.maxSelectedLabels) && this.d_value && this.d_value.length > this.maxSelectedLabels;
    },
    allSelected: function allSelected() {
      var _this24 = this;
      return this.selectAll !== null ? this.selectAll : isNotEmpty(this.visibleOptions) && this.visibleOptions.every(function(option2) {
        return _this24.isOptionGroup(option2) || _this24.isOptionDisabled(option2) || _this24.isSelected(option2);
      });
    },
    // @deprecated use $filled instead.
    hasSelectedOption: function hasSelectedOption() {
      return this.$filled;
    },
    equalityKey: function equalityKey() {
      return this.optionValue ? null : this.dataKey;
    },
    searchFields: function searchFields() {
      return this.filterFields || [this.optionLabel];
    },
    maxSelectionLimitReached: function maxSelectionLimitReached() {
      return this.selectionLimit && this.d_value && this.d_value.length === this.selectionLimit;
    },
    filterResultMessageText: function filterResultMessageText() {
      return isNotEmpty(this.visibleOptions) ? this.filterMessageText.replaceAll("{0}", this.visibleOptions.length) : this.emptyFilterMessageText;
    },
    filterMessageText: function filterMessageText() {
      return this.filterMessage || this.$primevue.config.locale.searchMessage || "";
    },
    emptyFilterMessageText: function emptyFilterMessageText() {
      return this.emptyFilterMessage || this.$primevue.config.locale.emptySearchMessage || this.$primevue.config.locale.emptyFilterMessage || "";
    },
    emptyMessageText: function emptyMessageText() {
      return this.emptyMessage || this.$primevue.config.locale.emptyMessage || "";
    },
    selectionMessageText: function selectionMessageText() {
      return this.selectionMessage || this.$primevue.config.locale.selectionMessage || "";
    },
    emptySelectionMessageText: function emptySelectionMessageText() {
      return this.emptySelectionMessage || this.$primevue.config.locale.emptySelectionMessage || "";
    },
    selectedMessageText: function selectedMessageText() {
      return this.$filled ? this.selectionMessageText.replaceAll("{0}", this.d_value.length) : this.emptySelectionMessageText;
    },
    focusedOptionId: function focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? "".concat(this.$id, "_").concat(this.focusedOptionIndex) : null;
    },
    ariaSetSize: function ariaSetSize() {
      var _this25 = this;
      return this.visibleOptions.filter(function(option2) {
        return !_this25.isOptionGroup(option2);
      }).length;
    },
    toggleAllAriaLabel: function toggleAllAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria[this.allSelected ? "selectAll" : "unselectAll"] : void 0;
    },
    listAriaLabel: function listAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.listLabel : void 0;
    },
    virtualScrollerDisabled: function virtualScrollerDisabled() {
      return !this.virtualScrollerOptions;
    },
    hasFluid: function hasFluid() {
      return isEmpty(this.fluid) ? !!this.$pcFluid : this.fluid;
    },
    isClearIconVisible: function isClearIconVisible() {
      return this.showClear && this.d_value && this.d_value.length && this.d_value != null && isNotEmpty(this.options);
    },
    containerDataP: function containerDataP() {
      return cn(_defineProperty$1({
        invalid: this.$invalid,
        disabled: this.disabled,
        focus: this.focused,
        fluid: this.$fluid,
        filled: this.$variant === "filled"
      }, this.size, this.size));
    },
    labelDataP: function labelDataP() {
      return cn(_defineProperty$1(_defineProperty$1(_defineProperty$1({
        placeholder: this.label === this.placeholder,
        clearable: this.showClear,
        disabled: this.disabled
      }, this.size, this.size), "has-chip", this.display === "chip" && this.d_value && this.d_value.length && (this.maxSelectedLabels ? this.d_value.length <= this.maxSelectedLabels : true)), "empty", !this.placeholder && !this.$filled));
    },
    dropdownIconDataP: function dropdownIconDataP() {
      return cn(_defineProperty$1({}, this.size, this.size));
    },
    overlayDataP: function overlayDataP() {
      return cn(_defineProperty$1({}, "portal-" + this.appendTo, "portal-" + this.appendTo));
    }
  },
  directives: {
    ripple: Ripple
  },
  components: {
    InputText: script$d,
    Checkbox: script$c,
    VirtualScroller: script$b,
    Portal: script$a,
    Chip: script$9,
    IconField: script$8,
    InputIcon: script$7,
    TimesIcon: script$6,
    SearchIcon: script$5,
    ChevronDownIcon: script$3,
    SpinnerIcon: script$4,
    CheckIcon: script$2
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
var _hoisted_1 = ["data-p"];
var _hoisted_2 = ["id", "disabled", "placeholder", "tabindex", "aria-label", "aria-labelledby", "aria-expanded", "aria-controls", "aria-activedescendant", "aria-invalid"];
var _hoisted_3 = ["data-p"];
var _hoisted_4 = {
  key: 0
};
var _hoisted_5 = ["data-p"];
var _hoisted_6 = ["id", "aria-label"];
var _hoisted_7 = ["id"];
var _hoisted_8 = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousemove", "data-p-selected", "data-p-focused", "data-p-disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Chip = resolveComponent("Chip");
  var _component_SpinnerIcon = resolveComponent("SpinnerIcon");
  var _component_Checkbox = resolveComponent("Checkbox");
  var _component_InputText = resolveComponent("InputText");
  var _component_SearchIcon = resolveComponent("SearchIcon");
  var _component_InputIcon = resolveComponent("InputIcon");
  var _component_IconField = resolveComponent("IconField");
  var _component_VirtualScroller = resolveComponent("VirtualScroller");
  var _component_Portal = resolveComponent("Portal");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container",
    "class": _ctx.cx("root"),
    style: _ctx.sx("root"),
    onClick: _cache[7] || (_cache[7] = function() {
      return $options.onContainerClick && $options.onContainerClick.apply($options, arguments);
    }),
    "data-p": $options.containerDataP
  }, _ctx.ptmi("root")), [createElementVNode("div", mergeProps({
    "class": "p-hidden-accessible"
  }, _ctx.ptm("hiddenInputContainer"), {
    "data-p-hidden-accessible": true
  }), [createElementVNode("input", mergeProps({
    ref: "focusInput",
    id: _ctx.inputId,
    type: "text",
    readonly: "",
    disabled: _ctx.disabled,
    placeholder: _ctx.placeholder,
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    role: "combobox",
    "aria-label": _ctx.ariaLabel,
    "aria-labelledby": _ctx.ariaLabelledby,
    "aria-haspopup": "listbox",
    "aria-expanded": $data.overlayVisible,
    "aria-controls": _ctx.$id + "_list",
    "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
    "aria-invalid": _ctx.invalid || void 0,
    onFocus: _cache[0] || (_cache[0] = function() {
      return $options.onFocus && $options.onFocus.apply($options, arguments);
    }),
    onBlur: _cache[1] || (_cache[1] = function() {
      return $options.onBlur && $options.onBlur.apply($options, arguments);
    }),
    onKeydown: _cache[2] || (_cache[2] = function() {
      return $options.onKeyDown && $options.onKeyDown.apply($options, arguments);
    })
  }, _ctx.ptm("hiddenInput")), null, 16, _hoisted_2)], 16), createElementVNode("div", mergeProps({
    "class": _ctx.cx("labelContainer")
  }, _ctx.ptm("labelContainer")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("label"),
    "data-p": $options.labelDataP
  }, _ctx.ptm("label")), [renderSlot(_ctx.$slots, "value", {
    value: _ctx.d_value,
    placeholder: _ctx.placeholder
  }, function() {
    return [_ctx.display === "comma" ? (openBlock(), createElementBlock(Fragment, {
      key: 0
    }, [createTextVNode(toDisplayString($options.label || "empty"), 1)], 64)) : _ctx.display === "chip" ? (openBlock(), createElementBlock(Fragment, {
      key: 1
    }, [$options.chipSelectedItems ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString($options.label), 1)) : (openBlock(true), createElementBlock(Fragment, {
      key: 1
    }, renderList(_ctx.d_value, function(item) {
      return openBlock(), createElementBlock("span", mergeProps({
        key: $options.getLabelByValue(item),
        "class": _ctx.cx("chipItem")
      }, {
        ref_for: true
      }, _ctx.ptm("chipItem")), [renderSlot(_ctx.$slots, "chip", {
        value: item,
        removeCallback: function removeCallback(event) {
          return $options.removeOption(event, item);
        }
      }, function() {
        return [createVNode(_component_Chip, {
          "class": normalizeClass(_ctx.cx("pcChip")),
          label: $options.getLabelByValue(item),
          removeIcon: _ctx.chipIcon || _ctx.removeTokenIcon,
          removable: "",
          unstyled: _ctx.unstyled,
          onRemove: function onRemove($event) {
            return $options.removeOption($event, item);
          },
          pt: _ctx.ptm("pcChip")
        }, {
          removeicon: withCtx(function() {
            return [renderSlot(_ctx.$slots, _ctx.$slots.chipicon ? "chipicon" : "removetokenicon", {
              "class": normalizeClass(_ctx.cx("chipIcon")),
              item,
              removeCallback: function removeCallback(event) {
                return $options.removeOption(event, item);
              }
            })];
          }),
          _: 2
        }, 1032, ["class", "label", "removeIcon", "unstyled", "onRemove", "pt"])];
      })], 16);
    }), 128)), !_ctx.d_value || _ctx.d_value.length === 0 ? (openBlock(), createElementBlock(Fragment, {
      key: 2
    }, [createTextVNode(toDisplayString(_ctx.placeholder || "empty"), 1)], 64)) : createCommentVNode("", true)], 64)) : createCommentVNode("", true)];
  })], 16, _hoisted_3)], 16), $options.isClearIconVisible ? renderSlot(_ctx.$slots, "clearicon", {
    key: 0,
    "class": normalizeClass(_ctx.cx("clearIcon")),
    clearCallback: $options.onClearClick
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon ? "i" : "TimesIcon"), mergeProps({
      ref: "clearIcon",
      "class": [_ctx.cx("clearIcon"), _ctx.clearIcon],
      onClick: $options.onClearClick
    }, _ctx.ptm("clearIcon"), {
      "data-pc-section": "clearicon"
    }), null, 16, ["class", "onClick"]))];
  }) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("dropdown")
  }, _ctx.ptm("dropdown")), [_ctx.loading ? renderSlot(_ctx.$slots, "loadingicon", {
    key: 0,
    "class": normalizeClass(_ctx.cx("loadingIcon"))
  }, function() {
    return [_ctx.loadingIcon ? (openBlock(), createElementBlock("span", mergeProps({
      key: 0,
      "class": [_ctx.cx("loadingIcon"), "pi-spin", _ctx.loadingIcon],
      "aria-hidden": "true"
    }, _ctx.ptm("loadingIcon")), null, 16)) : (openBlock(), createBlock(_component_SpinnerIcon, mergeProps({
      key: 1,
      "class": _ctx.cx("loadingIcon"),
      spin: "",
      "aria-hidden": "true"
    }, _ctx.ptm("loadingIcon")), null, 16, ["class"]))];
  }) : renderSlot(_ctx.$slots, "dropdownicon", {
    key: 1,
    "class": normalizeClass(_ctx.cx("dropdownIcon"))
  }, function() {
    return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.dropdownIcon ? "span" : "ChevronDownIcon"), mergeProps({
      "class": [_ctx.cx("dropdownIcon"), _ctx.dropdownIcon],
      "aria-hidden": "true",
      "data-p": $options.dropdownIconDataP
    }, _ctx.ptm("dropdownIcon")), null, 16, ["class", "data-p"]))];
  })], 16), createVNode(_component_Portal, {
    appendTo: _ctx.appendTo
  }, {
    "default": withCtx(function() {
      return [createVNode(Transition, mergeProps({
        name: "p-connected-overlay",
        onEnter: $options.onOverlayEnter,
        onAfterEnter: $options.onOverlayAfterEnter,
        onLeave: $options.onOverlayLeave,
        onAfterLeave: $options.onOverlayAfterLeave
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          return [$data.overlayVisible ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            ref: $options.overlayRef,
            style: [_ctx.panelStyle, _ctx.overlayStyle],
            "class": [_ctx.cx("overlay"), _ctx.panelClass, _ctx.overlayClass],
            onClick: _cache[5] || (_cache[5] = function() {
              return $options.onOverlayClick && $options.onOverlayClick.apply($options, arguments);
            }),
            onKeydown: _cache[6] || (_cache[6] = function() {
              return $options.onOverlayKeyDown && $options.onOverlayKeyDown.apply($options, arguments);
            }),
            "data-p": $options.overlayDataP
          }, _ctx.ptm("overlay")), [createElementVNode("span", mergeProps({
            ref: "firstHiddenFocusableElementOnOverlay",
            role: "presentation",
            "aria-hidden": "true",
            "class": "p-hidden-accessible p-hidden-focusable",
            tabindex: 0,
            onFocus: _cache[3] || (_cache[3] = function() {
              return $options.onFirstHiddenFocus && $options.onFirstHiddenFocus.apply($options, arguments);
            })
          }, _ctx.ptm("hiddenFirstFocusableEl"), {
            "data-p-hidden-accessible": true,
            "data-p-hidden-focusable": true
          }), null, 16), renderSlot(_ctx.$slots, "header", {
            value: _ctx.d_value,
            options: $options.visibleOptions
          }), _ctx.showToggleAll && _ctx.selectionLimit == null || _ctx.filter ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            "class": _ctx.cx("header")
          }, _ctx.ptm("header")), [_ctx.showToggleAll && _ctx.selectionLimit == null ? (openBlock(), createBlock(_component_Checkbox, {
            key: 0,
            modelValue: $options.allSelected,
            binary: true,
            disabled: _ctx.disabled,
            variant: _ctx.variant,
            "aria-label": $options.toggleAllAriaLabel,
            onChange: $options.onToggleAll,
            unstyled: _ctx.unstyled,
            pt: $options.getHeaderCheckboxPTOptions("pcHeaderCheckbox"),
            formControl: {
              novalidate: true
            }
          }, {
            icon: withCtx(function(slotProps) {
              return [_ctx.$slots.headercheckboxicon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.headercheckboxicon), {
                key: 0,
                checked: slotProps.checked,
                "class": normalizeClass(slotProps["class"])
              }, null, 8, ["checked", "class"])) : slotProps.checked ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.checkboxIcon ? "span" : "CheckIcon"), mergeProps({
                key: 1,
                "class": [slotProps["class"], _defineProperty({}, _ctx.checkboxIcon, slotProps.checked)]
              }, $options.getHeaderCheckboxPTOptions("pcHeaderCheckbox.icon")), null, 16, ["class"])) : createCommentVNode("", true)];
            }),
            _: 1
          }, 8, ["modelValue", "disabled", "variant", "aria-label", "onChange", "unstyled", "pt"])) : createCommentVNode("", true), _ctx.filter ? (openBlock(), createBlock(_component_IconField, {
            key: 1,
            "class": normalizeClass(_ctx.cx("pcFilterContainer")),
            unstyled: _ctx.unstyled,
            pt: _ctx.ptm("pcFilterContainer")
          }, {
            "default": withCtx(function() {
              return [createVNode(_component_InputText, {
                ref: "filterInput",
                value: $data.filterValue,
                onVnodeMounted: $options.onFilterUpdated,
                onVnodeUpdated: $options.onFilterUpdated,
                "class": normalizeClass(_ctx.cx("pcFilter")),
                placeholder: _ctx.filterPlaceholder,
                disabled: _ctx.disabled,
                variant: _ctx.variant,
                unstyled: _ctx.unstyled,
                role: "searchbox",
                autocomplete: "off",
                "aria-owns": _ctx.$id + "_list",
                "aria-activedescendant": $options.focusedOptionId,
                onKeydown: $options.onFilterKeyDown,
                onBlur: $options.onFilterBlur,
                onInput: $options.onFilterChange,
                pt: _ctx.ptm("pcFilter"),
                formControl: {
                  novalidate: true
                }
              }, null, 8, ["value", "onVnodeMounted", "onVnodeUpdated", "class", "placeholder", "disabled", "variant", "unstyled", "aria-owns", "aria-activedescendant", "onKeydown", "onBlur", "onInput", "pt"]), createVNode(_component_InputIcon, {
                unstyled: _ctx.unstyled,
                pt: _ctx.ptm("pcFilterIconContainer")
              }, {
                "default": withCtx(function() {
                  return [renderSlot(_ctx.$slots, "filtericon", {}, function() {
                    return [_ctx.filterIcon ? (openBlock(), createElementBlock("span", mergeProps({
                      key: 0,
                      "class": _ctx.filterIcon
                    }, _ctx.ptm("filterIcon")), null, 16)) : (openBlock(), createBlock(_component_SearchIcon, normalizeProps(mergeProps({
                      key: 1
                    }, _ctx.ptm("filterIcon"))), null, 16))];
                  })];
                }),
                _: 3
              }, 8, ["unstyled", "pt"])];
            }),
            _: 3
          }, 8, ["class", "unstyled", "pt"])) : createCommentVNode("", true), _ctx.filter ? (openBlock(), createElementBlock("span", mergeProps({
            key: 2,
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm("hiddenFilterResult"), {
            "data-p-hidden-accessible": true
          }), toDisplayString($options.filterResultMessageText), 17)) : createCommentVNode("", true)], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
            "class": _ctx.cx("listContainer"),
            style: {
              "max-height": $options.virtualScrollerDisabled ? _ctx.scrollHeight : ""
            }
          }, _ctx.ptm("listContainer")), [createVNode(_component_VirtualScroller, mergeProps({
            ref: $options.virtualScrollerRef
          }, _ctx.virtualScrollerOptions, {
            items: $options.visibleOptions,
            style: {
              height: _ctx.scrollHeight
            },
            tabindex: -1,
            disabled: $options.virtualScrollerDisabled,
            pt: _ctx.ptm("virtualScroller")
          }), createSlots({
            content: withCtx(function(_ref2) {
              var styleClass = _ref2.styleClass, contentRef = _ref2.contentRef, items = _ref2.items, getItemOptions = _ref2.getItemOptions, contentStyle = _ref2.contentStyle, itemSize = _ref2.itemSize;
              return [createElementVNode("ul", mergeProps({
                ref: function ref(el) {
                  return $options.listRef(el, contentRef);
                },
                id: _ctx.$id + "_list",
                "class": [_ctx.cx("list"), styleClass],
                style: contentStyle,
                role: "listbox",
                "aria-multiselectable": "true",
                "aria-label": $options.listAriaLabel
              }, _ctx.ptm("list")), [(openBlock(true), createElementBlock(Fragment, null, renderList(items, function(option2, i) {
                return openBlock(), createElementBlock(Fragment, {
                  key: $options.getOptionRenderKey(option2, $options.getOptionIndex(i, getItemOptions))
                }, [$options.isOptionGroup(option2) ? (openBlock(), createElementBlock("li", mergeProps({
                  key: 0,
                  id: _ctx.$id + "_" + $options.getOptionIndex(i, getItemOptions),
                  style: {
                    height: itemSize ? itemSize + "px" : void 0
                  },
                  "class": _ctx.cx("optionGroup"),
                  role: "option"
                }, {
                  ref_for: true
                }, _ctx.ptm("optionGroup")), [renderSlot(_ctx.$slots, "optiongroup", {
                  option: option2.optionGroup,
                  index: $options.getOptionIndex(i, getItemOptions)
                }, function() {
                  return [createTextVNode(toDisplayString($options.getOptionGroupLabel(option2.optionGroup)), 1)];
                })], 16, _hoisted_7)) : withDirectives((openBlock(), createElementBlock("li", mergeProps({
                  key: 1,
                  id: _ctx.$id + "_" + $options.getOptionIndex(i, getItemOptions),
                  style: {
                    height: itemSize ? itemSize + "px" : void 0
                  },
                  "class": _ctx.cx("option", {
                    option: option2,
                    index: i,
                    getItemOptions
                  }),
                  role: "option",
                  "aria-label": $options.getOptionLabel(option2),
                  "aria-selected": $options.isSelected(option2),
                  "aria-disabled": $options.isOptionDisabled(option2),
                  "aria-setsize": $options.ariaSetSize,
                  "aria-posinset": $options.getAriaPosInset($options.getOptionIndex(i, getItemOptions)),
                  onClick: function onClick($event) {
                    return $options.onOptionSelect($event, option2, $options.getOptionIndex(i, getItemOptions), true);
                  },
                  onMousemove: function onMousemove($event) {
                    return $options.onOptionMouseMove($event, $options.getOptionIndex(i, getItemOptions));
                  }
                }, {
                  ref_for: true
                }, $options.getCheckboxPTOptions(option2, getItemOptions, i, "option"), {
                  "data-p-selected": $options.isSelected(option2),
                  "data-p-focused": $data.focusedOptionIndex === $options.getOptionIndex(i, getItemOptions),
                  "data-p-disabled": $options.isOptionDisabled(option2)
                }), [createVNode(_component_Checkbox, {
                  defaultValue: $options.isSelected(option2),
                  binary: true,
                  tabindex: -1,
                  variant: _ctx.variant,
                  unstyled: _ctx.unstyled,
                  pt: $options.getCheckboxPTOptions(option2, getItemOptions, i, "pcOptionCheckbox"),
                  formControl: {
                    novalidate: true
                  }
                }, {
                  icon: withCtx(function(slotProps) {
                    return [_ctx.$slots.optioncheckboxicon || _ctx.$slots.itemcheckboxicon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.optioncheckboxicon || _ctx.$slots.itemcheckboxicon), {
                      key: 0,
                      checked: slotProps.checked,
                      "class": normalizeClass(slotProps["class"])
                    }, null, 8, ["checked", "class"])) : slotProps.checked ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.checkboxIcon ? "span" : "CheckIcon"), mergeProps({
                      key: 1,
                      "class": [slotProps["class"], _defineProperty({}, _ctx.checkboxIcon, slotProps.checked)]
                    }, {
                      ref_for: true
                    }, $options.getCheckboxPTOptions(option2, getItemOptions, i, "pcOptionCheckbox.icon")), null, 16, ["class"])) : createCommentVNode("", true)];
                  }),
                  _: 2
                }, 1032, ["defaultValue", "variant", "unstyled", "pt"]), renderSlot(_ctx.$slots, "option", {
                  option: option2,
                  selected: $options.isSelected(option2),
                  index: $options.getOptionIndex(i, getItemOptions)
                }, function() {
                  return [createElementVNode("span", mergeProps({
                    ref_for: true
                  }, _ctx.ptm("optionLabel")), toDisplayString($options.getOptionLabel(option2)), 17)];
                })], 16, _hoisted_8)), [[_directive_ripple]])], 64);
              }), 128)), $data.filterValue && (!items || items && items.length === 0) ? (openBlock(), createElementBlock("li", mergeProps({
                key: 0,
                "class": _ctx.cx("emptyMessage"),
                role: "option"
              }, _ctx.ptm("emptyMessage")), [renderSlot(_ctx.$slots, "emptyfilter", {}, function() {
                return [createTextVNode(toDisplayString($options.emptyFilterMessageText), 1)];
              })], 16)) : !_ctx.options || _ctx.options && _ctx.options.length === 0 ? (openBlock(), createElementBlock("li", mergeProps({
                key: 1,
                "class": _ctx.cx("emptyMessage"),
                role: "option"
              }, _ctx.ptm("emptyMessage")), [renderSlot(_ctx.$slots, "empty", {}, function() {
                return [createTextVNode(toDisplayString($options.emptyMessageText), 1)];
              })], 16)) : createCommentVNode("", true)], 16, _hoisted_6)];
            }),
            _: 2
          }, [_ctx.$slots.loader ? {
            name: "loader",
            fn: withCtx(function(_ref4) {
              var options2 = _ref4.options;
              return [renderSlot(_ctx.$slots, "loader", {
                options: options2
              })];
            }),
            key: "0"
          } : void 0]), 1040, ["items", "style", "disabled", "pt"])], 16), renderSlot(_ctx.$slots, "footer", {
            value: _ctx.d_value,
            options: $options.visibleOptions
          }), !_ctx.options || _ctx.options && _ctx.options.length === 0 ? (openBlock(), createElementBlock("span", mergeProps({
            key: 1,
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm("hiddenEmptyMessage"), {
            "data-p-hidden-accessible": true
          }), toDisplayString($options.emptyMessageText), 17)) : createCommentVNode("", true), createElementVNode("span", mergeProps({
            role: "status",
            "aria-live": "polite",
            "class": "p-hidden-accessible"
          }, _ctx.ptm("hiddenSelectedMessage"), {
            "data-p-hidden-accessible": true
          }), toDisplayString($options.selectedMessageText), 17), createElementVNode("span", mergeProps({
            ref: "lastHiddenFocusableElementOnOverlay",
            role: "presentation",
            "aria-hidden": "true",
            "class": "p-hidden-accessible p-hidden-focusable",
            tabindex: 0,
            onFocus: _cache[4] || (_cache[4] = function() {
              return $options.onLastHiddenFocus && $options.onLastHiddenFocus.apply($options, arguments);
            })
          }, _ctx.ptm("hiddenLastFocusableEl"), {
            "data-p-hidden-accessible": true,
            "data-p-hidden-focusable": true
          }), null, 16)], 16, _hoisted_5)) : createCommentVNode("", true)];
        }),
        _: 3
      }, 16, ["onEnter", "onAfterEnter", "onLeave", "onAfterLeave"])];
    }),
    _: 3
  }, 8, ["appendTo"])], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-Dxyjx1h9.mjs.map
