import { cn } from '@primeuix/utils';
import { findSingle, getFirstFocusableElement, focus, isElement } from '@primeuix/utils/dom';
import { isNotEmpty, equals, findLastIndex, isPrintableCharacter, resolveFieldData } from '@primeuix/utils/object';
import { B as BaseStyle, F as FilterService } from './server.mjs';
import { s as script$2 } from './index-CjtQe7dy.mjs';
import { s as script$3 } from './index-CgJu4NhB.mjs';
import { s as script$4 } from './index-C21YqD03.mjs';
import script$5 from './index-4P6kumGy.mjs';
import script$6 from './index-B5Idjp61.mjs';
import script$8 from './index-D45wcmtf.mjs';
import { R as Ripple } from './index-2dA4pXcI.mjs';
import script$7 from './index-CXivEcTV.mjs';
import { s as script$9 } from './index-_YLQpnfS.mjs';
import { style } from '@primeuix/styles/listbox';
import { resolveComponent, resolveDirective, createElementBlock, openBlock, mergeProps, createElementVNode, createCommentVNode, renderSlot, normalizeClass, createVNode, withCtx, createBlock, normalizeProps, toDisplayString, createSlots, Fragment, renderList, withDirectives, createTextVNode } from 'vue';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './index-BLn-pl6M.mjs';
import './index-f6-L4oOs.mjs';
import './index-HVZBZE_C.mjs';
import './index-DpRrGZTR.mjs';
import '@primeuix/utils/uuid';
import './index-C1vnj6fg.mjs';

var classes = {
  root: function root(_ref) {
    var instance = _ref.instance, props = _ref.props;
    return ["p-listbox p-component", {
      "p-listbox-striped": props.striped,
      "p-disabled": props.disabled,
      "p-listbox-fluid": props.fluid,
      "p-invalid": instance.$invalid
    }];
  },
  header: "p-listbox-header",
  pcFilter: "p-listbox-filter",
  listContainer: "p-listbox-list-container",
  list: "p-listbox-list",
  optionGroup: "p-listbox-option-group",
  option: function option(_ref2) {
    var instance = _ref2.instance, props = _ref2.props, _option = _ref2.option, index = _ref2.index, getItemOptions = _ref2.getItemOptions;
    return ["p-listbox-option", {
      "p-listbox-option-selected": instance.isSelected(_option) && props.highlightOnSelect,
      "p-focus": instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
      "p-disabled": instance.isOptionDisabled(_option)
    }];
  },
  optionCheckIcon: "p-listbox-option-check-icon",
  optionBlankIcon: "p-listbox-option-blank-icon",
  emptyMessage: "p-listbox-empty-message"
};
var ListboxStyle = BaseStyle.extend({
  name: "listbox",
  style,
  classes
});
var script$1 = {
  name: "BaseListbox",
  "extends": script$9,
  props: {
    options: Array,
    optionLabel: null,
    optionValue: null,
    optionDisabled: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
    listStyle: null,
    scrollHeight: {
      type: String,
      "default": "14rem"
    },
    dataKey: null,
    multiple: {
      type: Boolean,
      "default": false
    },
    metaKeySelection: {
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
    virtualScrollerOptions: {
      type: Object,
      "default": null
    },
    autoOptionFocus: {
      type: Boolean,
      "default": true
    },
    selectOnFocus: {
      type: Boolean,
      "default": false
    },
    focusOnHover: {
      type: Boolean,
      "default": true
    },
    highlightOnSelect: {
      type: Boolean,
      "default": true
    },
    checkmark: {
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
    filterIcon: {
      type: String,
      "default": void 0
    },
    striped: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    fluid: {
      type: Boolean,
      "default": null
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
  style: ListboxStyle,
  provide: function provide() {
    return {
      $pcListbox: this,
      $parentInstance: this
    };
  }
};
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
  name: "Listbox",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["change", "focus", "blur", "filter", "item-dblclick", "option-dblclick"],
  list: null,
  virtualScroller: null,
  optionTouched: false,
  startRangeIndex: -1,
  searchTimeout: null,
  searchValue: "",
  data: function data() {
    return {
      filterValue: null,
      focused: false,
      focusedOptionIndex: -1
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
  methods: {
    getOptionIndex: function getOptionIndex(index, fn) {
      return this.virtualScrollerDisabled ? index : fn && fn(index)["index"];
    },
    getOptionLabel: function getOptionLabel(option2) {
      return this.optionLabel ? resolveFieldData(option2, this.optionLabel) : typeof option2 === "string" ? option2 : null;
    },
    getOptionValue: function getOptionValue(option2) {
      return this.optionValue ? resolveFieldData(option2, this.optionValue) : option2;
    },
    getOptionRenderKey: function getOptionRenderKey(option2, index) {
      return (this.dataKey ? resolveFieldData(option2, this.dataKey) : this.getOptionLabel(option2)) + "_" + index;
    },
    getPTOptions: function getPTOptions(option2, itemOptions, index, key) {
      return this.ptm(key, {
        context: {
          selected: this.isSelected(option2),
          focused: this.focusedOptionIndex === this.getOptionIndex(index, itemOptions),
          disabled: this.isOptionDisabled(option2)
        }
      });
    },
    isOptionDisabled: function isOptionDisabled(option2) {
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
    onFirstHiddenFocus: function onFirstHiddenFocus() {
      focus(this.list);
      var firstFocusableEl = getFirstFocusableElement(this.$el, ':not([data-p-hidden-focusable="true"])');
      this.$refs.lastHiddenFocusableElement.tabIndex = isElement(firstFocusableEl) ? void 0 : -1;
      this.$refs.firstHiddenFocusableElement.tabIndex = -1;
    },
    onLastHiddenFocus: function onLastHiddenFocus(event) {
      var relatedTarget = event.relatedTarget;
      if (relatedTarget === this.list) {
        var firstFocusableEl = getFirstFocusableElement(this.$el, ':not([data-p-hidden-focusable="true"])');
        focus(firstFocusableEl);
        this.$refs.firstHiddenFocusableElement.tabIndex = void 0;
      } else {
        focus(this.$refs.firstHiddenFocusableElement);
      }
      this.$refs.lastHiddenFocusableElement.tabIndex = -1;
    },
    onFocusout: function onFocusout(event) {
      if (!this.$el.contains(event.relatedTarget) && this.$refs.lastHiddenFocusableElement && this.$refs.firstHiddenFocusableElement) {
        this.$refs.lastHiddenFocusableElement.tabIndex = this.$refs.firstHiddenFocusableElement.tabIndex = void 0;
      }
    },
    onListFocus: function onListFocus(event) {
      this.focused = true;
      this.focusedOptionIndex = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.findSelectedOptionIndex();
      this.autoUpdateModel();
      this.scrollInView(this.focusedOptionIndex);
      this.$emit("focus", event);
    },
    onListBlur: function onListBlur(event) {
      this.focused = false;
      this.focusedOptionIndex = this.startRangeIndex = -1;
      this.searchValue = "";
      this.$emit("blur", event);
    },
    onListKeyDown: function onListKeyDown(event) {
      var _this2 = this;
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
          this.onSpaceKey(event);
          break;
        case "Tab":
          break;
        case "ShiftLeft":
        case "ShiftRight":
          this.onShiftKey(event);
          break;
        default:
          if (this.multiple && event.code === "KeyA" && metaKey) {
            var value = this.visibleOptions.filter(function(option2) {
              return _this2.isValidOption(option2);
            }).map(function(option2) {
              return _this2.getOptionValue(option2);
            });
            this.updateModel(event, value);
            event.preventDefault();
            break;
          }
          if (!metaKey && isPrintableCharacter(event.key)) {
            this.searchOptions(event, event.key);
            event.preventDefault();
          }
          break;
      }
    },
    onOptionSelect: function onOptionSelect(event, option2) {
      var index = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1;
      if (this.disabled || this.isOptionDisabled(option2)) {
        return;
      }
      this.multiple ? this.onOptionSelectMultiple(event, option2) : this.onOptionSelectSingle(event, option2);
      this.optionTouched = false;
      index !== -1 && (this.focusedOptionIndex = index);
    },
    onOptionMouseDown: function onOptionMouseDown(event, index) {
      this.changeFocusedOptionIndex(event, index);
    },
    onOptionMouseMove: function onOptionMouseMove(event, index) {
      if (this.focusOnHover && this.focused) {
        this.changeFocusedOptionIndex(event, index);
      }
    },
    onOptionTouchEnd: function onOptionTouchEnd() {
      if (this.disabled) {
        return;
      }
      this.optionTouched = true;
    },
    onOptionDblClick: function onOptionDblClick(event, item) {
      this.$emit("item-dblclick", {
        originalEvent: event,
        value: item
      });
      this.$emit("option-dblclick", {
        originalEvent: event,
        value: item
      });
    },
    onOptionSelectSingle: function onOptionSelectSingle(event, option2) {
      var selected = this.isSelected(option2);
      var valueChanged = false;
      var value = null;
      var metaSelection = this.optionTouched ? false : this.metaKeySelection;
      var _value = this.getOptionValue(option2) !== "" ? this.getOptionValue(option2) : this.getOptionLabel(option2);
      if (metaSelection) {
        var metaKey = event && (event.metaKey || event.ctrlKey);
        if (selected) {
          if (metaKey) {
            value = null;
            valueChanged = true;
          }
        } else {
          value = _value;
          valueChanged = true;
        }
      } else {
        value = selected ? null : _value;
        valueChanged = true;
      }
      if (valueChanged) {
        this.updateModel(event, value);
      }
    },
    onOptionSelectMultiple: function onOptionSelectMultiple(event, option2) {
      var selected = this.isSelected(option2);
      var value = null;
      var metaSelection = this.optionTouched ? false : this.metaKeySelection;
      var _value = this.getOptionValue(option2) !== "" ? this.getOptionValue(option2) : this.getOptionLabel(option2);
      if (metaSelection) {
        var metaKey = event.metaKey || event.ctrlKey;
        if (selected) {
          value = metaKey ? this.removeOption(option2) : [_value];
        } else {
          value = metaKey ? this.d_value || [] : [];
          value = [].concat(_toConsumableArray(value), [_value]);
        }
      } else {
        value = selected ? this.removeOption(option2) : [].concat(_toConsumableArray(this.d_value || []), [_value]);
      }
      this.updateModel(event, value);
    },
    onOptionSelectRange: function onOptionSelectRange(event) {
      var _this3 = this;
      var start = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
      var end = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1;
      start === -1 && (start = this.findNearestSelectedOptionIndex(end, true));
      end === -1 && (end = this.findNearestSelectedOptionIndex(start));
      if (start !== -1 && end !== -1) {
        var rangeStart = Math.min(start, end);
        var rangeEnd = Math.max(start, end);
        var value = this.visibleOptions.slice(rangeStart, rangeEnd + 1).filter(function(option2) {
          return _this3.isValidOption(option2);
        }).map(function(option2) {
          return _this3.getOptionValue(option2);
        });
        this.updateModel(event, value);
      }
    },
    onFilterChange: function onFilterChange(event) {
      this.$emit("filter", {
        originalEvent: event,
        value: event.target.value,
        filterValue: this.visibleOptions
      });
      this.focusedOptionIndex = this.startRangeIndex = -1;
    },
    onFilterBlur: function onFilterBlur() {
      this.focusedOptionIndex = this.startRangeIndex = -1;
    },
    onFilterKeyDown: function onFilterKeyDown(event) {
      switch (event.code) {
        case "ArrowDown":
          this.onArrowDownKey(event);
          break;
        case "ArrowUp":
          this.onArrowUpKey(event);
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
        case "ShiftLeft":
        case "ShiftRight":
          this.onShiftKey(event);
          break;
      }
    },
    onArrowDownKey: function onArrowDownKey(event) {
      var optionIndex = this.focusedOptionIndex !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex) : this.findFirstFocusedOptionIndex();
      if (this.multiple && event.shiftKey) {
        this.onOptionSelectRange(event, this.startRangeIndex, optionIndex);
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      event.preventDefault();
    },
    onArrowUpKey: function onArrowUpKey(event) {
      var optionIndex = this.focusedOptionIndex !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex) : this.findLastFocusedOptionIndex();
      if (this.multiple && event.shiftKey) {
        this.onOptionSelectRange(event, optionIndex, this.startRangeIndex);
      }
      this.changeFocusedOptionIndex(event, optionIndex);
      event.preventDefault();
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
        if (this.multiple && event.shiftKey && metaKey) {
          this.onOptionSelectRange(event, optionIndex, this.startRangeIndex);
        }
        this.changeFocusedOptionIndex(event, optionIndex);
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
        if (this.multiple && event.shiftKey && metaKey) {
          this.onOptionSelectRange(event, this.startRangeIndex, optionIndex);
        }
        this.changeFocusedOptionIndex(event, optionIndex);
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
      if (this.focusedOptionIndex !== -1) {
        if (this.multiple && event.shiftKey) this.onOptionSelectRange(event, this.focusedOptionIndex);
        else this.onOptionSelect(event, this.visibleOptions[this.focusedOptionIndex]);
      }
    },
    onSpaceKey: function onSpaceKey(event) {
      event.preventDefault();
      this.onEnterKey(event);
    },
    onShiftKey: function onShiftKey() {
      this.startRangeIndex = this.focusedOptionIndex;
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
      var _this4 = this;
      var optionValue = this.getOptionValue(option2) !== "" ? this.getOptionValue(option2) : this.getOptionLabel(option2);
      if (this.multiple) return (this.d_value || []).some(function(value) {
        return _this4.isEquals(value, optionValue);
      });
      else return this.isEquals(this.d_value, optionValue);
    },
    findFirstOptionIndex: function findFirstOptionIndex() {
      var _this5 = this;
      return this.visibleOptions.findIndex(function(option2) {
        return _this5.isValidOption(option2);
      });
    },
    findLastOptionIndex: function findLastOptionIndex() {
      var _this6 = this;
      return findLastIndex(this.visibleOptions, function(option2) {
        return _this6.isValidOption(option2);
      });
    },
    findNextOptionIndex: function findNextOptionIndex(index) {
      var _this7 = this;
      var matchedOptionIndex = index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex(function(option2) {
        return _this7.isValidOption(option2);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
    },
    findPrevOptionIndex: function findPrevOptionIndex(index) {
      var _this8 = this;
      var matchedOptionIndex = index > 0 ? findLastIndex(this.visibleOptions.slice(0, index), function(option2) {
        return _this8.isValidOption(option2);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex : index;
    },
    findSelectedOptionIndex: function findSelectedOptionIndex() {
      var _this9 = this;
      if (this.$filled) {
        if (this.multiple) {
          var _loop = function _loop2() {
            var value = _this9.d_value[index];
            var matchedOptionIndex = _this9.visibleOptions.findIndex(function(option2) {
              return _this9.isValidSelectedOption(option2) && _this9.isEquals(value, _this9.getOptionValue(option2));
            });
            if (matchedOptionIndex > -1) return {
              v: matchedOptionIndex
            };
          }, _ret;
          for (var index = this.d_value.length - 1; index >= 0; index--) {
            _ret = _loop();
            if (_ret) return _ret.v;
          }
        } else {
          return this.visibleOptions.findIndex(function(option2) {
            return _this9.isValidSelectedOption(option2);
          });
        }
      }
      return -1;
    },
    findFirstSelectedOptionIndex: function findFirstSelectedOptionIndex() {
      var _this0 = this;
      return this.$filled ? this.visibleOptions.findIndex(function(option2) {
        return _this0.isValidSelectedOption(option2);
      }) : -1;
    },
    findLastSelectedOptionIndex: function findLastSelectedOptionIndex() {
      var _this1 = this;
      return this.$filled ? findLastIndex(this.visibleOptions, function(option2) {
        return _this1.isValidSelectedOption(option2);
      }) : -1;
    },
    findNextSelectedOptionIndex: function findNextSelectedOptionIndex(index) {
      var _this10 = this;
      var matchedOptionIndex = this.$filled && index < this.visibleOptions.length - 1 ? this.visibleOptions.slice(index + 1).findIndex(function(option2) {
        return _this10.isValidSelectedOption(option2);
      }) : -1;
      return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
    },
    findPrevSelectedOptionIndex: function findPrevSelectedOptionIndex(index) {
      var _this11 = this;
      var matchedOptionIndex = this.$filled && index > 0 ? findLastIndex(this.visibleOptions.slice(0, index), function(option2) {
        return _this11.isValidSelectedOption(option2);
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
      var selectedIndex = this.findLastSelectedOptionIndex();
      return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
    },
    searchOptions: function searchOptions(event, _char) {
      var _this12 = this;
      this.searchValue = (this.searchValue || "") + _char;
      var optionIndex = -1;
      if (isNotEmpty(this.searchValue)) {
        if (this.focusedOptionIndex !== -1) {
          optionIndex = this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(option2) {
            return _this12.isOptionMatched(option2);
          });
          optionIndex = optionIndex === -1 ? this.visibleOptions.slice(0, this.focusedOptionIndex).findIndex(function(option2) {
            return _this12.isOptionMatched(option2);
          }) : optionIndex + this.focusedOptionIndex;
        } else {
          optionIndex = this.visibleOptions.findIndex(function(option2) {
            return _this12.isOptionMatched(option2);
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
        _this12.searchValue = "";
        _this12.searchTimeout = null;
      }, 500);
    },
    removeOption: function removeOption(option2) {
      var _this13 = this;
      return this.d_value.filter(function(val) {
        return !equals(val, _this13.getOptionValue(option2), _this13.equalityKey);
      });
    },
    changeFocusedOptionIndex: function changeFocusedOptionIndex(event, index) {
      if (this.focusedOptionIndex !== index) {
        this.focusedOptionIndex = index;
        this.scrollInView();
        if (this.selectOnFocus && !this.multiple) {
          this.onOptionSelect(event, this.visibleOptions[index]);
        }
      }
    },
    scrollInView: function scrollInView() {
      var _this14 = this;
      var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1;
      this.$nextTick(function() {
        var id = index !== -1 ? "".concat(_this14.$id, "_").concat(index) : _this14.focusedOptionId;
        var element = findSingle(_this14.list, 'li[id="'.concat(id, '"]'));
        if (element) {
          element.scrollIntoView && element.scrollIntoView({
            block: "nearest",
            inline: "nearest",
            behavior: "smooth"
          });
        } else if (!_this14.virtualScrollerDisabled) {
          _this14.virtualScroller && _this14.virtualScroller.scrollToIndex(index !== -1 ? index : _this14.focusedOptionIndex);
        }
      });
    },
    autoUpdateModel: function autoUpdateModel() {
      if (this.selectOnFocus && this.autoOptionFocus && !this.$filled && !this.multiple && this.focused) {
        this.focusedOptionIndex = this.findFirstFocusedOptionIndex();
        this.onOptionSelect(null, this.visibleOptions[this.focusedOptionIndex]);
      }
    },
    updateModel: function updateModel(event, value) {
      this.writeValue(value, event);
      this.$emit("change", {
        originalEvent: event,
        value
      });
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
    optionsListFlat: function optionsListFlat() {
      return this.filterValue ? FilterService.filter(this.options, this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale) : this.options;
    },
    optionsListGroup: function optionsListGroup() {
      var _this15 = this;
      var filteredOptions = [];
      (this.options || []).forEach(function(optionGroup) {
        var optionGroupChildren = _this15.getOptionGroupChildren(optionGroup) || [];
        var filteredChildren = _this15.filterValue ? FilterService.filter(optionGroupChildren, _this15.searchFields, _this15.filterValue, _this15.filterMatchMode, _this15.filterLocale) : optionGroupChildren;
        if (filteredChildren !== null && filteredChildren !== void 0 && filteredChildren.length) {
          filteredOptions.push.apply(filteredOptions, [{
            optionGroup,
            group: true
          }].concat(_toConsumableArray(filteredChildren)));
        }
      });
      return filteredOptions;
    },
    visibleOptions: function visibleOptions() {
      return this.optionGroupLabel ? this.optionsListGroup : this.optionsListFlat;
    },
    // @deprecated use $filled instead
    hasSelectedOption: function hasSelectedOption() {
      return isNotEmpty(this.d_value);
    },
    equalityKey: function equalityKey() {
      return this.optionValue ? null : this.dataKey;
    },
    searchFields: function searchFields() {
      return this.filterFields || [this.optionLabel];
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
      return this.$filled ? this.selectionMessageText.replaceAll("{0}", this.multiple ? this.d_value.length : "1") : this.emptySelectionMessageText;
    },
    focusedOptionId: function focusedOptionId() {
      return this.focusedOptionIndex !== -1 ? "".concat(this.$id, "_").concat(this.focusedOptionIndex) : null;
    },
    ariaSetSize: function ariaSetSize() {
      var _this16 = this;
      return this.visibleOptions.filter(function(option2) {
        return !_this16.isOptionGroup(option2);
      }).length;
    },
    virtualScrollerDisabled: function virtualScrollerDisabled() {
      return !this.virtualScrollerOptions;
    },
    containerDataP: function containerDataP() {
      return cn({
        invalid: this.$invalid,
        disabled: this.disabled
      });
    }
  },
  directives: {
    ripple: Ripple
  },
  components: {
    InputText: script$8,
    VirtualScroller: script$7,
    InputIcon: script$6,
    IconField: script$5,
    SearchIcon: script$4,
    CheckIcon: script$3,
    BlankIcon: script$2
  }
};
var _hoisted_1 = ["id", "data-p"];
var _hoisted_2 = ["tabindex"];
var _hoisted_3 = ["id", "aria-multiselectable", "aria-label", "aria-labelledby", "aria-activedescendant", "aria-disabled"];
var _hoisted_4 = ["id"];
var _hoisted_5 = ["id", "aria-label", "aria-selected", "aria-disabled", "aria-setsize", "aria-posinset", "onClick", "onMousedown", "onMousemove", "onDblclick", "data-p-selected", "data-p-focused", "data-p-disabled"];
var _hoisted_6 = ["tabindex"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_InputText = resolveComponent("InputText");
  var _component_SearchIcon = resolveComponent("SearchIcon");
  var _component_InputIcon = resolveComponent("InputIcon");
  var _component_IconField = resolveComponent("IconField");
  var _component_CheckIcon = resolveComponent("CheckIcon");
  var _component_BlankIcon = resolveComponent("BlankIcon");
  var _component_VirtualScroller = resolveComponent("VirtualScroller");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    id: _ctx.$id,
    "class": _ctx.cx("root"),
    onFocusout: _cache[7] || (_cache[7] = function() {
      return $options.onFocusout && $options.onFocusout.apply($options, arguments);
    }),
    "data-p": $options.containerDataP
  }, _ctx.ptmi("root")), [createElementVNode("span", mergeProps({
    ref: "firstHiddenFocusableElement",
    role: "presentation",
    "aria-hidden": "true",
    "class": "p-hidden-accessible p-hidden-focusable",
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    onFocus: _cache[0] || (_cache[0] = function() {
      return $options.onFirstHiddenFocus && $options.onFirstHiddenFocus.apply($options, arguments);
    })
  }, _ctx.ptm("hiddenFirstFocusableEl"), {
    "data-p-hidden-accessible": true,
    "data-p-hidden-focusable": true
  }), null, 16, _hoisted_2), _ctx.$slots.header ? (openBlock(), createElementBlock("div", {
    key: 0,
    "class": normalizeClass(_ctx.cx("header"))
  }, [renderSlot(_ctx.$slots, "header", {
    value: _ctx.d_value,
    options: $options.visibleOptions
  })], 2)) : createCommentVNode("", true), _ctx.filter ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("header")
  }, _ctx.ptm("header")), [createVNode(_component_IconField, {
    unstyled: _ctx.unstyled,
    pt: _ctx.ptm("pcFilterContainer")
  }, {
    "default": withCtx(function() {
      return [createVNode(_component_InputText, {
        modelValue: $data.filterValue,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function($event) {
          return $data.filterValue = $event;
        }),
        type: "text",
        "class": normalizeClass(_ctx.cx("pcFilter")),
        placeholder: _ctx.filterPlaceholder,
        role: "searchbox",
        autocomplete: "off",
        disabled: _ctx.disabled,
        unstyled: _ctx.unstyled,
        "aria-owns": _ctx.$id + "_list",
        "aria-activedescendant": $options.focusedOptionId,
        tabindex: !_ctx.disabled && !$data.focused ? _ctx.tabindex : -1,
        onInput: $options.onFilterChange,
        onBlur: $options.onFilterBlur,
        onKeydown: $options.onFilterKeyDown,
        pt: _ctx.ptm("pcFilter")
      }, null, 8, ["modelValue", "class", "placeholder", "disabled", "unstyled", "aria-owns", "aria-activedescendant", "tabindex", "onInput", "onBlur", "onKeydown", "pt"]), createVNode(_component_InputIcon, {
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
  }, 8, ["unstyled", "pt"]), createElementVNode("span", mergeProps({
    role: "status",
    "aria-live": "polite",
    "class": "p-hidden-accessible"
  }, _ctx.ptm("hiddenFilterResult"), {
    "data-p-hidden-accessible": true
  }), toDisplayString($options.filterResultMessageText), 17)], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("listContainer"),
    style: [{
      "max-height": $options.virtualScrollerDisabled ? _ctx.scrollHeight : ""
    }, _ctx.listStyle]
  }, _ctx.ptm("listContainer")), [createVNode(_component_VirtualScroller, mergeProps({
    ref: $options.virtualScrollerRef
  }, _ctx.virtualScrollerOptions, {
    items: $options.visibleOptions,
    style: [{
      height: _ctx.scrollHeight
    }, _ctx.listStyle],
    tabindex: -1,
    disabled: $options.virtualScrollerDisabled,
    pt: _ctx.ptm("virtualScroller")
  }), createSlots({
    content: withCtx(function(_ref) {
      var styleClass = _ref.styleClass, contentRef = _ref.contentRef, items = _ref.items, getItemOptions = _ref.getItemOptions, contentStyle = _ref.contentStyle, itemSize = _ref.itemSize;
      return [createElementVNode("ul", mergeProps({
        ref: function ref(el) {
          return $options.listRef(el, contentRef);
        },
        id: _ctx.$id + "_list",
        "class": [_ctx.cx("list"), styleClass],
        style: contentStyle,
        tabindex: -1,
        role: "listbox",
        "aria-multiselectable": _ctx.multiple,
        "aria-label": _ctx.ariaLabel,
        "aria-labelledby": _ctx.ariaLabelledby,
        "aria-activedescendant": $data.focused ? $options.focusedOptionId : void 0,
        "aria-disabled": _ctx.disabled,
        onFocus: _cache[3] || (_cache[3] = function() {
          return $options.onListFocus && $options.onListFocus.apply($options, arguments);
        }),
        onBlur: _cache[4] || (_cache[4] = function() {
          return $options.onListBlur && $options.onListBlur.apply($options, arguments);
        }),
        onKeydown: _cache[5] || (_cache[5] = function() {
          return $options.onListKeyDown && $options.onListKeyDown.apply($options, arguments);
        })
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
        })], 16, _hoisted_4)) : withDirectives((openBlock(), createElementBlock("li", mergeProps({
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
            return $options.onOptionSelect($event, option2, $options.getOptionIndex(i, getItemOptions));
          },
          onMousedown: function onMousedown($event) {
            return $options.onOptionMouseDown($event, $options.getOptionIndex(i, getItemOptions));
          },
          onMousemove: function onMousemove($event) {
            return $options.onOptionMouseMove($event, $options.getOptionIndex(i, getItemOptions));
          },
          onTouchend: _cache[2] || (_cache[2] = function($event) {
            return $options.onOptionTouchEnd();
          }),
          onDblclick: function onDblclick($event) {
            return $options.onOptionDblClick($event, option2);
          }
        }, {
          ref_for: true
        }, $options.getPTOptions(option2, getItemOptions, i, "option"), {
          "data-p-selected": !_ctx.checkmark && $options.isSelected(option2),
          "data-p-focused": $data.focusedOptionIndex === $options.getOptionIndex(i, getItemOptions),
          "data-p-disabled": $options.isOptionDisabled(option2)
        }), [_ctx.checkmark ? (openBlock(), createElementBlock(Fragment, {
          key: 0
        }, [$options.isSelected(option2) ? (openBlock(), createBlock(_component_CheckIcon, mergeProps({
          key: 0,
          "class": _ctx.cx("optionCheckIcon")
        }, {
          ref_for: true
        }, _ctx.ptm("optionCheckIcon")), null, 16, ["class"])) : (openBlock(), createBlock(_component_BlankIcon, mergeProps({
          key: 1,
          "class": _ctx.cx("optionBlankIcon")
        }, {
          ref_for: true
        }, _ctx.ptm("optionBlankIcon")), null, 16, ["class"]))], 64)) : createCommentVNode("", true), renderSlot(_ctx.$slots, "option", {
          option: option2,
          selected: $options.isSelected(option2),
          index: $options.getOptionIndex(i, getItemOptions)
        }, function() {
          return [createTextVNode(toDisplayString($options.getOptionLabel(option2)), 1)];
        })], 16, _hoisted_5)), [[_directive_ripple]])], 64);
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
      })], 16)) : createCommentVNode("", true)], 16, _hoisted_3)];
    }),
    _: 2
  }, [_ctx.$slots.loader ? {
    name: "loader",
    fn: withCtx(function(_ref2) {
      var options2 = _ref2.options;
      return [renderSlot(_ctx.$slots, "loader", {
        options: options2
      })];
    }),
    key: "0"
  } : void 0]), 1040, ["items", "style", "disabled", "pt"])], 16), renderSlot(_ctx.$slots, "footer", {
    value: _ctx.d_value,
    options: $options.visibleOptions
  }), !_ctx.options || _ctx.options && _ctx.options.length === 0 ? (openBlock(), createElementBlock("span", mergeProps({
    key: 2,
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
    ref: "lastHiddenFocusableElement",
    role: "presentation",
    "aria-hidden": "true",
    "class": "p-hidden-accessible p-hidden-focusable",
    tabindex: !_ctx.disabled ? _ctx.tabindex : -1,
    onFocus: _cache[6] || (_cache[6] = function() {
      return $options.onLastHiddenFocus && $options.onLastHiddenFocus.apply($options, arguments);
    })
  }, _ctx.ptm("hiddenLastFocusableEl"), {
    "data-p-hidden-accessible": true,
    "data-p-hidden-focusable": true
  }), null, 16, _hoisted_6)], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-DNCIhQhs.mjs.map
