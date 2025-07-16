import { focus, addClass, setAttribute, find, findSingle, getAttribute, removeClass } from '@primeuix/utils/dom';
import { ZIndex } from '@primeuix/utils/zindex';
import { F as FocusTrap } from './index-De0dg7Ws.mjs';
import { s as script$5 } from './index-D21vFaAL.mjs';
import { u as unblockBodyScroll, b as blockBodyScroll } from './index-Din928lO.mjs';
import { s as script$b } from './index-f6-L4oOs.mjs';
import { style } from '@primeuix/styles/galleria';
import { B as BaseStyle } from './server.mjs';
import { s as script$6 } from './index-C319vlSQ.mjs';
import { R as Ripple } from './index-2dA4pXcI.mjs';
import { s as script$a } from './index-CFvji5m2.mjs';
import { s as script$9 } from './index--ctLNnjM.mjs';
import { resolveDirective, createElementBlock, openBlock, mergeProps, createElementVNode, createCommentVNode, withDirectives, createBlock, resolveDynamicComponent, Fragment, renderList, resolveComponent, createVNode, withCtx, Transition } from 'vue';
import { localeComparator, sort } from '@primeuix/utils/object';
import { s as script$7 } from './index-CMv313tU.mjs';
import { s as script$8 } from './index-B8dwdDfW.mjs';
import './index-DpRrGZTR.mjs';
import '@primeuix/styled';
import '@primeuix/utils/uuid';
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
import './index-BLn-pl6M.mjs';

var classes = {
  mask: "p-galleria-mask p-overlay-mask p-overlay-mask-enter",
  root: function root(_ref) {
    var instance = _ref.instance;
    var thumbnailsPosClass = instance.$attrs.showThumbnails && instance.getPositionClass("p-galleria-thumbnails", instance.$attrs.thumbnailsPosition);
    var indicatorPosClass = instance.$attrs.showIndicators && instance.getPositionClass("p-galleria-indicators", instance.$attrs.indicatorsPosition);
    return ["p-galleria p-component", {
      "p-galleria-fullscreen": instance.$attrs.fullScreen,
      "p-galleria-inset-indicators": instance.$attrs.showIndicatorsOnItem,
      "p-galleria-hover-navigators": instance.$attrs.showItemNavigatorsOnHover && !instance.$attrs.fullScreen
    }, thumbnailsPosClass, indicatorPosClass];
  },
  closeButton: "p-galleria-close-button",
  closeIcon: "p-galleria-close-icon",
  header: "p-galleria-header",
  content: "p-galleria-content",
  footer: "p-galleria-footer",
  itemsContainer: "p-galleria-items-container",
  items: "p-galleria-items",
  prevButton: function prevButton(_ref2) {
    var instance = _ref2.instance;
    return ["p-galleria-prev-button p-galleria-nav-button", {
      "p-disabled": instance.isNavBackwardDisabled
    }];
  },
  prevIcon: "p-galleria-prev-icon",
  item: "p-galleria-item",
  nextButton: function nextButton(_ref3) {
    var instance = _ref3.instance;
    return ["p-galleria-next-button p-galleria-nav-button", {
      "p-disabled": instance.isNavForwardDisabled
    }];
  },
  nextIcon: "p-galleria-next-icon",
  caption: "p-galleria-caption",
  indicatorList: "p-galleria-indicator-list",
  indicator: function indicator(_ref4) {
    var instance = _ref4.instance, index = _ref4.index;
    return ["p-galleria-indicator", {
      "p-galleria-indicator-active": instance.isIndicatorItemActive(index)
    }];
  },
  indicatorButton: "p-galleria-indicator-button",
  thumbnails: "p-galleria-thumbnails",
  thumbnailContent: "p-galleria-thumbnails-content",
  thumbnailPrevButton: function thumbnailPrevButton(_ref5) {
    var instance = _ref5.instance;
    return ["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button", {
      "p-disabled": instance.isNavBackwardDisabled
    }];
  },
  thumbnailPrevIcon: "p-galleria-thumbnail-prev-icon",
  thumbnailsViewport: "p-galleria-thumbnails-viewport",
  thumbnailItems: "p-galleria-thumbnail-items",
  thumbnailItem: function thumbnailItem(_ref6) {
    var instance = _ref6.instance, index = _ref6.index, activeIndex2 = _ref6.activeIndex;
    return ["p-galleria-thumbnail-item", {
      "p-galleria-thumbnail-item-current": activeIndex2 === index,
      "p-galleria-thumbnail-item-active": instance.isItemActive(index),
      "p-galleria-thumbnail-item-start": instance.firstItemAciveIndex() === index,
      "p-galleria-thumbnail-item-end": instance.lastItemActiveIndex() === index
    }];
  },
  thumbnail: "p-galleria-thumbnail",
  thumbnailNextButton: function thumbnailNextButton(_ref7) {
    var instance = _ref7.instance;
    return ["p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button", {
      "p-disabled": instance.isNavForwardDisabled
    }];
  },
  thumbnailNextIcon: "p-galleria-thumbnail-next-icon"
};
var GalleriaStyle = BaseStyle.extend({
  name: "galleria",
  style,
  classes
});
var script$4 = {
  name: "BaseGalleria",
  "extends": script$b,
  props: {
    id: {
      type: String,
      "default": null
    },
    value: {
      type: Array,
      "default": null
    },
    activeIndex: {
      type: Number,
      "default": 0
    },
    fullScreen: {
      type: Boolean,
      "default": false
    },
    visible: {
      type: Boolean,
      "default": false
    },
    numVisible: {
      type: Number,
      "default": 3
    },
    responsiveOptions: {
      type: Array,
      "default": null
    },
    showItemNavigators: {
      type: Boolean,
      "default": false
    },
    showThumbnailNavigators: {
      type: Boolean,
      "default": true
    },
    showItemNavigatorsOnHover: {
      type: Boolean,
      "default": false
    },
    changeItemOnIndicatorHover: {
      type: Boolean,
      "default": false
    },
    circular: {
      type: Boolean,
      "default": false
    },
    autoPlay: {
      type: Boolean,
      "default": false
    },
    transitionInterval: {
      type: Number,
      "default": 4e3
    },
    showThumbnails: {
      type: Boolean,
      "default": true
    },
    thumbnailsPosition: {
      type: String,
      "default": "bottom"
    },
    verticalThumbnailViewPortHeight: {
      type: String,
      "default": "300px"
    },
    showIndicators: {
      type: Boolean,
      "default": false
    },
    showIndicatorsOnItem: {
      type: Boolean,
      "default": false
    },
    indicatorsPosition: {
      type: String,
      "default": "bottom"
    },
    baseZIndex: {
      type: Number,
      "default": 0
    },
    maskClass: {
      type: String,
      "default": null
    },
    containerStyle: {
      type: null,
      "default": null
    },
    containerClass: {
      type: null,
      "default": null
    },
    containerProps: {
      type: null,
      "default": null
    },
    prevButtonProps: {
      type: null,
      "default": null
    },
    nextButtonProps: {
      type: null,
      "default": null
    },
    ariaLabel: {
      type: String,
      "default": null
    },
    ariaRoledescription: {
      type: String,
      "default": null
    }
  },
  style: GalleriaStyle,
  provide: function provide() {
    return {
      $pcGalleria: this,
      $parentInstance: this
    };
  }
};
function _toConsumableArray$1(r) {
  return _arrayWithoutHoles$1(r) || _iterableToArray$1(r) || _unsupportedIterableToArray$1(r) || _nonIterableSpread$1();
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray$1(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
  }
}
function _iterableToArray$1(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles$1(r) {
  if (Array.isArray(r)) return _arrayLikeToArray$1(r);
}
function _arrayLikeToArray$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var script$3 = {
  name: "GalleriaItem",
  hostName: "Galleria",
  "extends": script$b,
  emits: ["start-slideshow", "stop-slideshow", "update:activeIndex"],
  props: {
    circular: {
      type: Boolean,
      "default": false
    },
    activeIndex: {
      type: Number,
      "default": 0
    },
    value: {
      type: Array,
      "default": null
    },
    showItemNavigators: {
      type: Boolean,
      "default": true
    },
    showIndicators: {
      type: Boolean,
      "default": true
    },
    slideShowActive: {
      type: Boolean,
      "default": true
    },
    changeItemOnIndicatorHover: {
      type: Boolean,
      "default": true
    },
    autoPlay: {
      type: Boolean,
      "default": false
    },
    templates: {
      type: null,
      "default": null
    },
    id: {
      type: String,
      "default": null
    }
  },
  mounted: function mounted() {
    if (this.autoPlay) {
      this.$emit("start-slideshow");
    }
  },
  methods: {
    getIndicatorPTOptions: function getIndicatorPTOptions(index) {
      return {
        context: {
          highlighted: this.activeIndex === index
        }
      };
    },
    next: function next() {
      var nextItemIndex = this.activeIndex + 1;
      var activeIndex2 = this.circular && this.value.length - 1 === this.activeIndex ? 0 : nextItemIndex;
      this.$emit("update:activeIndex", activeIndex2);
    },
    prev: function prev() {
      var prevItemIndex = this.activeIndex !== 0 ? this.activeIndex - 1 : 0;
      var activeIndex2 = this.circular && this.activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
      this.$emit("update:activeIndex", activeIndex2);
    },
    stopSlideShow: function stopSlideShow() {
      if (this.slideShowActive && this.stopSlideShow) {
        this.$emit("stop-slideshow");
      }
    },
    navBackward: function navBackward(e) {
      this.stopSlideShow();
      this.prev();
      if (e && e.cancelable) {
        e.preventDefault();
      }
    },
    navForward: function navForward(e) {
      this.stopSlideShow();
      this.next();
      if (e && e.cancelable) {
        e.preventDefault();
      }
    },
    onIndicatorClick: function onIndicatorClick(index) {
      this.stopSlideShow();
      this.$emit("update:activeIndex", index);
    },
    onIndicatorMouseEnter: function onIndicatorMouseEnter(index) {
      if (this.changeItemOnIndicatorHover) {
        this.stopSlideShow();
        this.$emit("update:activeIndex", index);
      }
    },
    onIndicatorKeyDown: function onIndicatorKeyDown(event, index) {
      switch (event.code) {
        case "Enter":
        case "NumpadEnter":
        case "Space":
          this.stopSlideShow();
          this.$emit("update:activeIndex", index);
          event.preventDefault();
          break;
        case "ArrowRight":
          this.onRightKey();
          break;
        case "ArrowLeft":
          this.onLeftKey();
          break;
        case "Home":
          this.onHomeKey();
          event.preventDefault();
          break;
        case "End":
          this.onEndKey();
          event.preventDefault();
          break;
        case "Tab":
          this.onTabKey();
          break;
        case "ArrowDown":
        case "ArrowUp":
        case "PageUp":
        case "PageDown":
          event.preventDefault();
          break;
      }
    },
    onRightKey: function onRightKey() {
      var indicators = _toConsumableArray$1(find(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      var activeIndex2 = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex2, activeIndex2 + 1 === indicators.length ? indicators.length - 1 : activeIndex2 + 1);
    },
    onLeftKey: function onLeftKey() {
      var activeIndex2 = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex2, activeIndex2 - 1 <= 0 ? 0 : activeIndex2 - 1);
    },
    onHomeKey: function onHomeKey() {
      var activeIndex2 = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex2, 0);
    },
    onEndKey: function onEndKey() {
      var indicators = _toConsumableArray$1(find(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      var activeIndex2 = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex2, indicators.length - 1);
    },
    onTabKey: function onTabKey() {
      var indicators = _toConsumableArray$1(find(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      var highlightedIndex = indicators.findIndex(function(ind) {
        return getAttribute(ind, "data-p-active") === true;
      });
      var activeIndicator = findSingle(this.$refs.indicatorContent, '[data-pc-section="indicator"] > [tabindex="0"]');
      var activeIndex2 = indicators.findIndex(function(ind) {
        return ind === activeIndicator.parentElement;
      });
      indicators[activeIndex2].children[0].tabIndex = "-1";
      indicators[highlightedIndex].children[0].tabIndex = "0";
    },
    findFocusedIndicatorIndex: function findFocusedIndicatorIndex() {
      var indicators = _toConsumableArray$1(find(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      var activeIndicator = findSingle(this.$refs.indicatorContent, '[data-pc-section="indicator"] > [tabindex="0"]');
      return indicators.findIndex(function(ind) {
        return ind === activeIndicator.parentElement;
      });
    },
    changedFocusedIndicator: function changedFocusedIndicator(prevInd, nextInd) {
      var indicators = _toConsumableArray$1(find(this.$refs.indicatorContent, '[data-pc-section="indicator"]'));
      indicators[prevInd].children[0].tabIndex = "-1";
      indicators[nextInd].children[0].tabIndex = "0";
      indicators[nextInd].children[0].focus();
    },
    isIndicatorItemActive: function isIndicatorItemActive(index) {
      return this.activeIndex === index;
    },
    ariaSlideNumber: function ariaSlideNumber(value) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g, value) : void 0;
    },
    ariaPageLabel: function ariaPageLabel(value) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g, value) : void 0;
    }
  },
  computed: {
    activeItem: function activeItem() {
      return this.value[this.activeIndex];
    },
    ariaSlideLabel: function ariaSlideLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.slide : void 0;
    },
    isNavBackwardDisabled: function isNavBackwardDisabled() {
      return !this.circular && this.activeIndex === 0;
    },
    isNavForwardDisabled: function isNavForwardDisabled() {
      return !this.circular && this.activeIndex === this.value.length - 1;
    }
  },
  components: {
    ChevronLeftIcon: script$a,
    ChevronRightIcon: script$9
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1$3 = ["disabled"];
var _hoisted_2$2 = ["id", "aria-label", "aria-roledescription"];
var _hoisted_3$2 = ["disabled"];
var _hoisted_4$1 = ["aria-label", "aria-selected", "aria-controls", "onClick", "onMouseenter", "onKeydown", "data-p-active"];
var _hoisted_5 = ["tabindex"];
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("itemsContainer")
  }, _ctx.ptm("itemsContainer")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("items")
  }, _ctx.ptm("items")), [$props.showItemNavigators ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 0,
    type: "button",
    "class": _ctx.cx("prevButton"),
    onClick: _cache[0] || (_cache[0] = function($event) {
      return $options.navBackward($event);
    }),
    disabled: $options.isNavBackwardDisabled
  }, _ctx.ptm("prevButton"), {
    "data-pc-group-section": "itemnavigator"
  }), [(openBlock(), createBlock(resolveDynamicComponent($props.templates.previousitemicon || "ChevronLeftIcon"), mergeProps({
    "class": _ctx.cx("prevIcon")
  }, _ctx.ptm("prevIcon")), null, 16, ["class"]))], 16, _hoisted_1$3)), [[_directive_ripple]]) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    id: $props.id + "_item_" + $props.activeIndex,
    "class": _ctx.cx("item"),
    role: "group",
    "aria-label": $options.ariaSlideNumber($props.activeIndex + 1),
    "aria-roledescription": $options.ariaSlideLabel
  }, _ctx.ptm("item")), [$props.templates.item ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.item), {
    key: 0,
    item: $options.activeItem
  }, null, 8, ["item"])) : createCommentVNode("", true)], 16, _hoisted_2$2), $props.showItemNavigators ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 1,
    type: "button",
    "class": _ctx.cx("nextButton"),
    onClick: _cache[1] || (_cache[1] = function($event) {
      return $options.navForward($event);
    }),
    disabled: $options.isNavForwardDisabled
  }, _ctx.ptm("nextButton"), {
    "data-pc-group-section": "itemnavigator"
  }), [(openBlock(), createBlock(resolveDynamicComponent($props.templates.nextitemicon || "ChevronRightIcon"), mergeProps({
    "class": _ctx.cx("nextIcon")
  }, _ctx.ptm("nextIcon")), null, 16, ["class"]))], 16, _hoisted_3$2)), [[_directive_ripple]]) : createCommentVNode("", true), $props.templates["caption"] ? (openBlock(), createElementBlock("div", mergeProps({
    key: 2,
    "class": _ctx.cx("caption")
  }, _ctx.ptm("caption")), [$props.templates.caption ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.caption), {
    key: 0,
    item: $options.activeItem
  }, null, 8, ["item"])) : createCommentVNode("", true)], 16)) : createCommentVNode("", true)], 16), $props.showIndicators ? (openBlock(), createElementBlock("ul", mergeProps({
    key: 0,
    ref: "indicatorContent",
    "class": _ctx.cx("indicatorList")
  }, _ctx.ptm("indicatorList")), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.value, function(item, index) {
    return openBlock(), createElementBlock("li", mergeProps({
      key: "p-galleria-indicator-".concat(index),
      "class": _ctx.cx("indicator", {
        index
      }),
      "aria-label": $options.ariaPageLabel(index + 1),
      "aria-selected": $props.activeIndex === index,
      "aria-controls": $props.id + "_item_" + index,
      onClick: function onClick($event) {
        return $options.onIndicatorClick(index);
      },
      onMouseenter: function onMouseenter($event) {
        return $options.onIndicatorMouseEnter(index);
      },
      onKeydown: function onKeydown($event) {
        return $options.onIndicatorKeyDown($event, index);
      }
    }, {
      ref_for: true
    }, _ctx.ptm("indicator", $options.getIndicatorPTOptions(index)), {
      "data-p-active": $options.isIndicatorItemActive(index)
    }), [!$props.templates["indicator"] ? (openBlock(), createElementBlock("button", mergeProps({
      key: 0,
      type: "button",
      tabindex: $props.activeIndex === index ? "0" : "-1",
      "class": _ctx.cx("indicatorButton")
    }, {
      ref_for: true
    }, _ctx.ptm("indicatorButton", $options.getIndicatorPTOptions(index))), null, 16, _hoisted_5)) : createCommentVNode("", true), $props.templates.indicator ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.indicator), {
      key: 1,
      index,
      activeIndex: $props.activeIndex,
      tabindex: $props.activeIndex === index ? "0" : "-1"
    }, null, 8, ["index", "activeIndex", "tabindex"])) : createCommentVNode("", true)], 16, _hoisted_4$1);
  }), 128))], 16)) : createCommentVNode("", true)], 16);
}
script$3.render = render$3;
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
var script$2 = {
  name: "GalleriaThumbnails",
  hostName: "Galleria",
  "extends": script$b,
  emits: ["stop-slideshow", "update:activeIndex"],
  props: {
    containerId: {
      type: String,
      "default": null
    },
    value: {
      type: Array,
      "default": null
    },
    numVisible: {
      type: Number,
      "default": 3
    },
    activeIndex: {
      type: Number,
      "default": 0
    },
    isVertical: {
      type: Boolean,
      "default": false
    },
    slideShowActive: {
      type: Boolean,
      "default": false
    },
    circular: {
      type: Boolean,
      "default": false
    },
    responsiveOptions: {
      type: Array,
      "default": null
    },
    contentHeight: {
      type: String,
      "default": "300px"
    },
    showThumbnailNavigators: {
      type: Boolean,
      "default": true
    },
    templates: {
      type: null,
      "default": null
    },
    prevButtonProps: {
      type: null,
      "default": null
    },
    nextButtonProps: {
      type: null,
      "default": null
    }
  },
  startPos: null,
  thumbnailsStyle: null,
  sortedResponsiveOptions: null,
  data: function data() {
    return {
      d_numVisible: this.numVisible,
      d_oldNumVisible: this.numVisible,
      d_activeIndex: this.activeIndex,
      d_oldActiveItemIndex: this.activeIndex,
      totalShiftedItems: 0,
      page: 0
    };
  },
  watch: {
    numVisible: function numVisible(newValue, oldValue) {
      this.d_numVisible = newValue;
      this.d_oldNumVisible = oldValue;
    },
    activeIndex: function activeIndex(newValue, oldValue) {
      this.d_activeIndex = newValue;
      this.d_oldActiveItemIndex = oldValue;
    }
  },
  mounted: function mounted2() {
    this.createStyle();
    this.calculatePosition();
    if (this.responsiveOptions) {
      this.bindDocumentListeners();
    }
  },
  updated: function updated() {
    var totalShiftedItems = this.totalShiftedItems;
    if (this.d_oldNumVisible !== this.d_numVisible || this.d_oldActiveItemIndex !== this.d_activeIndex) {
      if (this.d_activeIndex <= this.getMedianItemIndex()) {
        totalShiftedItems = 0;
      } else if (this.value.length - this.d_numVisible + this.getMedianItemIndex() < this.d_activeIndex) {
        totalShiftedItems = this.d_numVisible - this.value.length;
      } else if (this.value.length - this.d_numVisible < this.d_activeIndex && this.d_numVisible % 2 === 0) {
        totalShiftedItems = this.d_activeIndex * -1 + this.getMedianItemIndex() + 1;
      } else {
        totalShiftedItems = this.d_activeIndex * -1 + this.getMedianItemIndex();
      }
      if (totalShiftedItems !== this.totalShiftedItems) {
        this.totalShiftedItems = totalShiftedItems;
      }
      this.$refs.itemsContainer.style.transform = this.isVertical ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
      if (this.d_oldActiveItemIndex !== this.d_activeIndex) {
        (void 0).body.setAttribute("data-p-items-hidden", "false");
        !this.isUnstyled && removeClass(this.$refs.itemsContainer, "p-items-hidden");
        this.$refs.itemsContainer.style.transition = "transform 500ms ease 0s";
      }
      this.d_oldActiveItemIndex = this.d_activeIndex;
      this.d_oldNumVisible = this.d_numVisible;
    }
  },
  beforeUnmount: function beforeUnmount() {
    if (this.responsiveOptions) {
      this.unbindDocumentListeners();
    }
    if (this.thumbnailsStyle) {
      this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle);
    }
  },
  methods: {
    step: function step(dir) {
      var totalShiftedItems = this.totalShiftedItems + dir;
      if (dir < 0 && -1 * totalShiftedItems + this.d_numVisible > this.value.length - 1) {
        totalShiftedItems = this.d_numVisible - this.value.length;
      } else if (dir > 0 && totalShiftedItems > 0) {
        totalShiftedItems = 0;
      }
      if (this.circular) {
        if (dir < 0 && this.value.length - 1 === this.d_activeIndex) {
          totalShiftedItems = 0;
        } else if (dir > 0 && this.d_activeIndex === 0) {
          totalShiftedItems = this.d_numVisible - this.value.length;
        }
      }
      if (this.$refs.itemsContainer) {
        (void 0).body.setAttribute("data-p-items-hidden", "false");
        !this.isUnstyled && removeClass(this.$refs.itemsContainer, "p-items-hidden");
        this.$refs.itemsContainer.style.transform = this.isVertical ? "translate3d(0, ".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0)") : "translate3d(".concat(totalShiftedItems * (100 / this.d_numVisible), "%, 0, 0)");
        this.$refs.itemsContainer.style.transition = "transform 500ms ease 0s";
      }
      this.totalShiftedItems = totalShiftedItems;
    },
    stopSlideShow: function stopSlideShow2() {
      if (this.slideShowActive && this.stopSlideShow) {
        this.$emit("stop-slideshow");
      }
    },
    getMedianItemIndex: function getMedianItemIndex() {
      var index = Math.floor(this.d_numVisible / 2);
      return this.d_numVisible % 2 ? index : index - 1;
    },
    navBackward: function navBackward2(e) {
      this.stopSlideShow();
      var prevItemIndex = this.d_activeIndex !== 0 ? this.d_activeIndex - 1 : 0;
      var diff = prevItemIndex + this.totalShiftedItems;
      if (this.d_numVisible - diff - 1 > this.getMedianItemIndex() && (-1 * this.totalShiftedItems !== 0 || this.circular)) {
        this.step(1);
      }
      var activeIndex2 = this.circular && this.d_activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
      this.$emit("update:activeIndex", activeIndex2);
      if (e.cancelable) {
        e.preventDefault();
      }
    },
    navForward: function navForward2(e) {
      this.stopSlideShow();
      var nextItemIndex = this.d_activeIndex === this.value.length - 1 ? this.value.length - 1 : this.d_activeIndex + 1;
      if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && (-1 * this.totalShiftedItems < this.getTotalPageNumber() - 1 || this.circular)) {
        this.step(-1);
      }
      var activeIndex2 = this.circular && this.value.length - 1 === this.d_activeIndex ? 0 : nextItemIndex;
      this.$emit("update:activeIndex", activeIndex2);
      if (e.cancelable) {
        e.preventDefault();
      }
    },
    onItemClick: function onItemClick(index) {
      this.stopSlideShow();
      var selectedItemIndex = index;
      if (selectedItemIndex !== this.d_activeIndex) {
        var diff = selectedItemIndex + this.totalShiftedItems;
        var dir = 0;
        if (selectedItemIndex < this.d_activeIndex) {
          dir = this.d_numVisible - diff - 1 - this.getMedianItemIndex();
          if (dir > 0 && -1 * this.totalShiftedItems !== 0) {
            this.step(dir);
          }
        } else {
          dir = this.getMedianItemIndex() - diff;
          if (dir < 0 && -1 * this.totalShiftedItems < this.getTotalPageNumber() - 1) {
            this.step(dir);
          }
        }
        this.$emit("update:activeIndex", selectedItemIndex);
      }
    },
    onThumbnailKeydown: function onThumbnailKeydown(event, index) {
      if (event.code === "Enter" || event.code === "NumpadEnter" || event.code === "Space") {
        this.onItemClick(index);
        event.preventDefault();
      }
      switch (event.code) {
        case "ArrowRight":
          this.onRightKey();
          break;
        case "ArrowLeft":
          this.onLeftKey();
          break;
        case "Home":
          this.onHomeKey();
          event.preventDefault();
          break;
        case "End":
          this.onEndKey();
          event.preventDefault();
          break;
        case "ArrowUp":
        case "ArrowDown":
          event.preventDefault();
          break;
        case "Tab":
          this.onTabKey();
          break;
      }
    },
    onRightKey: function onRightKey2() {
      var indicators = find(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]');
      var activeIndex2 = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex2, activeIndex2 + 1 === indicators.length ? indicators.length - 1 : activeIndex2 + 1);
    },
    onLeftKey: function onLeftKey2() {
      var activeIndex2 = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex2, activeIndex2 - 1 <= 0 ? 0 : activeIndex2 - 1);
    },
    onHomeKey: function onHomeKey2() {
      var activeIndex2 = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex2, 0);
    },
    onEndKey: function onEndKey2() {
      var indicators = find(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]');
      var activeIndex2 = this.findFocusedIndicatorIndex();
      this.changedFocusedIndicator(activeIndex2, indicators.length - 1);
    },
    onTabKey: function onTabKey2() {
      var indicators = _toConsumableArray(find(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]'));
      var highlightedIndex = indicators.findIndex(function(ind) {
        return getAttribute(ind, "data-p-active") === true;
      });
      var activeIndicator = findSingle(this.$refs.itemsContainer, '[tabindex="0"]');
      var activeIndex2 = indicators.findIndex(function(ind) {
        return ind === activeIndicator.parentElement;
      });
      indicators[activeIndex2].children[0].tabIndex = "-1";
      indicators[highlightedIndex].children[0].tabIndex = "0";
    },
    findFocusedIndicatorIndex: function findFocusedIndicatorIndex2() {
      var indicators = _toConsumableArray(find(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]'));
      var activeIndicator = findSingle(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"] > [tabindex="0"]');
      return indicators.findIndex(function(ind) {
        return ind === activeIndicator.parentElement;
      });
    },
    changedFocusedIndicator: function changedFocusedIndicator2(prevInd, nextInd) {
      var indicators = find(this.$refs.itemsContainer, '[data-pc-section="thumbnailitem"]');
      indicators[prevInd].children[0].tabIndex = "-1";
      indicators[nextInd].children[0].tabIndex = "0";
      indicators[nextInd].children[0].focus();
    },
    onTransitionEnd: function onTransitionEnd(e) {
      if (this.$refs.itemsContainer && e.propertyName === "transform") {
        (void 0).body.setAttribute("data-p-items-hidden", "true");
        !this.isUnstyled && addClass(this.$refs.itemsContainer, "p-items-hidden");
        this.$refs.itemsContainer.style.transition = "";
      }
    },
    onTouchStart: function onTouchStart(e) {
      var touchobj = e.changedTouches[0];
      this.startPos = {
        x: touchobj.pageX,
        y: touchobj.pageY
      };
    },
    onTouchMove: function onTouchMove(e) {
      if (e.cancelable) {
        e.preventDefault();
      }
    },
    onTouchEnd: function onTouchEnd(e) {
      var touchobj = e.changedTouches[0];
      if (this.isVertical) {
        this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
      } else {
        this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
      }
    },
    changePageOnTouch: function changePageOnTouch(e, diff) {
      var touchThreshold = 10;
      if (Math.abs(diff) < touchThreshold) {
        return;
      }
      if (diff < 0) {
        this.navForward(e);
      } else {
        this.navBackward(e);
      }
    },
    getTotalPageNumber: function getTotalPageNumber() {
      return this.value.length > this.d_numVisible ? this.value.length - this.d_numVisible + 1 : 0;
    },
    createStyle: function createStyle() {
      if (!this.thumbnailsStyle) {
        var _this$$primevue;
        this.thumbnailsStyle = (void 0).createElement("style");
        this.thumbnailsStyle.type = "text/css";
        setAttribute(this.thumbnailsStyle, "nonce", (_this$$primevue = this.$primevue) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.config) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.csp) === null || _this$$primevue === void 0 ? void 0 : _this$$primevue.nonce);
        (void 0).body.appendChild(this.thumbnailsStyle);
      }
      var innerHTML = "\n                #".concat(this.containerId, ' [data-pc-section="thumbnailitem"] {\n                    flex: 1 0 ').concat(100 / this.d_numVisible, "%\n                }\n            ");
      if (this.responsiveOptions && !this.isUnstyled) {
        this.sortedResponsiveOptions = _toConsumableArray(this.responsiveOptions);
        var comparer = localeComparator();
        this.sortedResponsiveOptions.sort(function(data1, data22) {
          var value1 = data1.breakpoint;
          var value2 = data22.breakpoint;
          return sort(value1, value2, -1, comparer);
        });
        for (var i = 0; i < this.sortedResponsiveOptions.length; i++) {
          var res = this.sortedResponsiveOptions[i];
          innerHTML += "\n                        @media screen and (max-width: ".concat(res.breakpoint, ") {\n                            #").concat(this.containerId, " .p-galleria-thumbnail-item {\n                                flex: 1 0 ").concat(100 / res.numVisible, "%\n                            }\n                        }\n                    ");
        }
      }
      this.thumbnailsStyle.innerHTML = innerHTML;
    },
    calculatePosition: function calculatePosition() {
      if (this.$refs.itemsContainer && this.sortedResponsiveOptions) {
        var windowWidth = (void 0).innerWidth;
        var matchedResponsiveData = {
          numVisible: this.numVisible
        };
        for (var i = 0; i < this.sortedResponsiveOptions.length; i++) {
          var res = this.sortedResponsiveOptions[i];
          if (parseInt(res.breakpoint, 10) >= windowWidth) {
            matchedResponsiveData = res;
          }
        }
        if (this.d_numVisible !== matchedResponsiveData.numVisible) {
          this.d_numVisible = matchedResponsiveData.numVisible;
        }
      }
    },
    bindDocumentListeners: function bindDocumentListeners() {
      var _this = this;
      if (!this.documentResizeListener) {
        this.documentResizeListener = function() {
          _this.calculatePosition();
        };
        (void 0).addEventListener("resize", this.documentResizeListener);
      }
    },
    unbindDocumentListeners: function unbindDocumentListeners() {
      if (this.documentResizeListener) {
        (void 0).removeEventListener("resize", this.documentResizeListener);
        this.documentResizeListener = null;
      }
    },
    firstItemAciveIndex: function firstItemAciveIndex() {
      return this.totalShiftedItems * -1;
    },
    lastItemActiveIndex: function lastItemActiveIndex() {
      return this.firstItemAciveIndex() + this.d_numVisible - 1;
    },
    isItemActive: function isItemActive(index) {
      return this.firstItemAciveIndex() <= index && this.lastItemActiveIndex() >= index;
    },
    ariaPageLabel: function ariaPageLabel2(value) {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g, value) : void 0;
    }
  },
  computed: {
    ariaPrevButtonLabel: function ariaPrevButtonLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.prevPageLabel : void 0;
    },
    ariaNextButtonLabel: function ariaNextButtonLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.nextPageLabel : void 0;
    },
    isNavBackwardDisabled: function isNavBackwardDisabled2() {
      return !this.circular && this.d_activeIndex === 0 || this.value.length <= this.d_numVisible;
    },
    isNavForwardDisabled: function isNavForwardDisabled2() {
      return !this.circular && this.d_activeIndex === this.value.length - 1 || this.value.length <= this.d_numVisible;
    }
  },
  components: {
    ChevronLeftIcon: script$a,
    ChevronRightIcon: script$9,
    ChevronUpIcon: script$8,
    ChevronDownIcon: script$7
  },
  directives: {
    ripple: Ripple
  }
};
function _typeof$2(o) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$2(o);
}
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$2(e, r, t) {
  return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$2(t) {
  var i = _toPrimitive$2(t, "string");
  return "symbol" == _typeof$2(i) ? i : i + "";
}
function _toPrimitive$2(t, r) {
  if ("object" != _typeof$2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var _hoisted_1$2 = ["disabled", "aria-label"];
var _hoisted_2$1 = ["data-p-active", "aria-selected", "aria-controls", "onKeydown", "data-p-galleria-thumbnail-item-current", "data-p-galleria-thumbnail-item-active", "data-p-galleria-thumbnail-item-start", "data-p-galleria-thumbnail-item-end"];
var _hoisted_3$1 = ["tabindex", "aria-label", "aria-current", "onClick"];
var _hoisted_4 = ["disabled", "aria-label"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("thumbnails")
  }, _ctx.ptm("thumbnails")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("thumbnailContent")
  }, _ctx.ptm("thumbnailContent")), [$props.showThumbnailNavigators ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 0,
    "class": _ctx.cx("thumbnailPrevButton"),
    disabled: $options.isNavBackwardDisabled,
    type: "button",
    "aria-label": $options.ariaPrevButtonLabel,
    onClick: _cache[0] || (_cache[0] = function($event) {
      return $options.navBackward($event);
    })
  }, _objectSpread$2(_objectSpread$2({}, $props.prevButtonProps), _ctx.ptm("thumbnailPrevButton")), {
    "data-pc-group-section": "thumbnailnavigator"
  }), [(openBlock(), createBlock(resolveDynamicComponent($props.templates.previousthumbnailicon || ($props.isVertical ? "ChevronUpIcon" : "ChevronLeftIcon")), mergeProps({
    "class": _ctx.cx("thumbnailPrevIcon")
  }, _ctx.ptm("thumbnailPrevIcon")), null, 16, ["class"]))], 16, _hoisted_1$2)), [[_directive_ripple]]) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("thumbnailsViewport"),
    style: {
      height: $props.isVertical ? $props.contentHeight : ""
    }
  }, _ctx.ptm("thumbnailsViewport")), [createElementVNode("div", mergeProps({
    ref: "itemsContainer",
    "class": _ctx.cx("thumbnailItems"),
    role: "tablist",
    onTransitionend: _cache[1] || (_cache[1] = function($event) {
      return $options.onTransitionEnd($event);
    }),
    onTouchstart: _cache[2] || (_cache[2] = function($event) {
      return $options.onTouchStart($event);
    }),
    onTouchmove: _cache[3] || (_cache[3] = function($event) {
      return $options.onTouchMove($event);
    }),
    onTouchend: _cache[4] || (_cache[4] = function($event) {
      return $options.onTouchEnd($event);
    })
  }, _ctx.ptm("thumbnailItems")), [(openBlock(true), createElementBlock(Fragment, null, renderList($props.value, function(item, index) {
    return openBlock(), createElementBlock("div", mergeProps({
      key: "p-galleria-thumbnail-item-".concat(index),
      "class": _ctx.cx("thumbnailItem", {
        index,
        activeIndex: $props.activeIndex
      }),
      role: "tab",
      "data-p-active": $props.activeIndex === index,
      "aria-selected": $props.activeIndex === index,
      "aria-controls": $props.containerId + "_item_" + index,
      onKeydown: function onKeydown($event) {
        return $options.onThumbnailKeydown($event, index);
      }
    }, {
      ref_for: true
    }, _ctx.ptm("thumbnailItem"), {
      "data-p-galleria-thumbnail-item-current": $props.activeIndex === index,
      "data-p-galleria-thumbnail-item-active": $options.isItemActive(index),
      "data-p-galleria-thumbnail-item-start": $options.firstItemAciveIndex() === index,
      "data-p-galleria-thumbnail-item-end": $options.lastItemActiveIndex() === index
    }), [createElementVNode("div", mergeProps({
      "class": _ctx.cx("thumbnail"),
      tabindex: $props.activeIndex === index ? "0" : "-1",
      "aria-label": $options.ariaPageLabel(index + 1),
      "aria-current": $props.activeIndex === index ? "page" : void 0,
      onClick: function onClick($event) {
        return $options.onItemClick(index);
      }
    }, {
      ref_for: true
    }, _ctx.ptm("thumbnail")), [$props.templates.thumbnail ? (openBlock(), createBlock(resolveDynamicComponent($props.templates.thumbnail), {
      key: 0,
      item
    }, null, 8, ["item"])) : createCommentVNode("", true)], 16, _hoisted_3$1)], 16, _hoisted_2$1);
  }), 128))], 16)], 16), $props.showThumbnailNavigators ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 1,
    "class": _ctx.cx("thumbnailNextButton"),
    disabled: $options.isNavForwardDisabled,
    type: "button",
    "aria-label": $options.ariaNextButtonLabel,
    onClick: _cache[5] || (_cache[5] = function($event) {
      return $options.navForward($event);
    })
  }, _objectSpread$2(_objectSpread$2({}, $props.nextButtonProps), _ctx.ptm("thumbnailNextButton")), {
    "data-pc-group-section": "thumbnailnavigator"
  }), [(openBlock(), createBlock(resolveDynamicComponent($props.templates.nextthumbnailicon || ($props.isVertical ? "ChevronDownIcon" : "ChevronRightIcon")), mergeProps({
    "class": _ctx.cx("thumbnailNextIcon")
  }, _ctx.ptm("thumbnailNextIcon")), null, 16, ["class"]))], 16, _hoisted_4)), [[_directive_ripple]]) : createCommentVNode("", true)], 16)], 16);
}
script$2.render = render$2;
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
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
var script$1 = {
  name: "GalleriaContent",
  hostName: "Galleria",
  "extends": script$b,
  inheritAttrs: false,
  interval: null,
  emits: ["activeitem-change", "mask-hide"],
  data: function data2() {
    return {
      activeIndex: this.$attrs.activeIndex,
      numVisible: this.$attrs.numVisible,
      slideShowActive: false
    };
  },
  watch: {
    "$attrs.value": function $attrsValue(newVal) {
      if (newVal && newVal.length < this.numVisible) {
        this.numVisible = newVal.length;
      }
    },
    "$attrs.activeIndex": function $attrsActiveIndex(newVal) {
      this.activeIndex = newVal;
    },
    "$attrs.numVisible": function $attrsNumVisible(newVal) {
      this.numVisible = newVal;
    },
    "$attrs.autoPlay": function $attrsAutoPlay(newVal) {
      newVal ? this.startSlideShow() : this.stopSlideShow();
    }
  },
  updated: function updated2() {
    this.$emit("activeitem-change", this.activeIndex);
  },
  beforeUnmount: function beforeUnmount2() {
    if (this.slideShowActive) {
      this.stopSlideShow();
    }
  },
  methods: {
    getPTOptions: function getPTOptions(key) {
      return this.ptm(key, {
        props: _objectSpread$1(_objectSpread$1({}, this.$attrs), {}, {
          pt: this.pt,
          unstyled: this.unstyled
        })
      });
    },
    isAutoPlayActive: function isAutoPlayActive() {
      return this.slideShowActive;
    },
    startSlideShow: function startSlideShow() {
      var _this = this;
      this.interval = setInterval(function() {
        var activeIndex2 = _this.$attrs.circular && _this.$attrs.value.length - 1 === _this.activeIndex ? 0 : _this.activeIndex + 1;
        _this.activeIndex = activeIndex2;
      }, this.$attrs.transitionInterval);
      this.slideShowActive = true;
    },
    stopSlideShow: function stopSlideShow3() {
      if (this.interval) {
        clearInterval(this.interval);
      }
      this.slideShowActive = false;
    },
    getPositionClass: function getPositionClass(preClassName, position) {
      var positions = ["top", "left", "bottom", "right"];
      var pos = positions.find(function(item) {
        return item === position;
      });
      return pos ? "".concat(preClassName, "-").concat(pos) : "";
    },
    isVertical: function isVertical() {
      return this.$attrs.thumbnailsPosition === "left" || this.$attrs.thumbnailsPosition === "right";
    }
  },
  computed: {
    closeAriaLabel: function closeAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : void 0;
    }
  },
  components: {
    GalleriaItem: script$3,
    GalleriaThumbnails: script$2,
    TimesIcon: script$6
  },
  directives: {
    ripple: Ripple
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
var _hoisted_1$1 = ["id", "aria-label", "aria-roledescription"];
var _hoisted_2 = ["aria-label"];
var _hoisted_3 = ["aria-live"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_GalleriaItem = resolveComponent("GalleriaItem");
  var _component_GalleriaThumbnails = resolveComponent("GalleriaThumbnails");
  var _directive_ripple = resolveDirective("ripple");
  return _ctx.$attrs.value && _ctx.$attrs.value.length > 0 ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    id: _ctx.$id,
    role: "region",
    "class": [_ctx.cx("root"), _ctx.$attrs.containerClass],
    style: _ctx.$attrs.containerStyle,
    "aria-label": _ctx.$attrs.ariaLabel,
    "aria-roledescription": _ctx.$attrs.ariaRoledescription
  }, _objectSpread(_objectSpread({}, _ctx.$attrs.containerProps), $options.getPTOptions("root"))), [_ctx.$attrs.fullScreen ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 0,
    autofocus: "",
    type: "button",
    "class": _ctx.cx("closeButton"),
    "aria-label": $options.closeAriaLabel,
    onClick: _cache[0] || (_cache[0] = function($event) {
      return _ctx.$emit("mask-hide");
    })
  }, $options.getPTOptions("closeButton")), [(openBlock(), createBlock(resolveDynamicComponent(_ctx.$attrs.templates["closeicon"] || "TimesIcon"), mergeProps({
    "class": _ctx.cx("closeIcon")
  }, $options.getPTOptions("closeIcon")), null, 16, ["class"]))], 16, _hoisted_2)), [[_directive_ripple]]) : createCommentVNode("", true), _ctx.$attrs.templates && _ctx.$attrs.templates["header"] ? (openBlock(), createElementBlock("div", mergeProps({
    key: 1,
    "class": _ctx.cx("header")
  }, $options.getPTOptions("header")), [(openBlock(), createBlock(resolveDynamicComponent(_ctx.$attrs.templates["header"])))], 16)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("content"),
    "aria-live": _ctx.$attrs.autoPlay ? "polite" : "off"
  }, $options.getPTOptions("content")), [createVNode(_component_GalleriaItem, {
    id: _ctx.$id,
    activeIndex: $data.activeIndex,
    "onUpdate:activeIndex": _cache[1] || (_cache[1] = function($event) {
      return $data.activeIndex = $event;
    }),
    slideShowActive: $data.slideShowActive,
    "onUpdate:slideShowActive": _cache[2] || (_cache[2] = function($event) {
      return $data.slideShowActive = $event;
    }),
    value: _ctx.$attrs.value,
    circular: _ctx.$attrs.circular,
    templates: _ctx.$attrs.templates,
    showIndicators: _ctx.$attrs.showIndicators,
    changeItemOnIndicatorHover: _ctx.$attrs.changeItemOnIndicatorHover,
    showItemNavigators: _ctx.$attrs.showItemNavigators,
    autoPlay: _ctx.$attrs.autoPlay,
    onStartSlideshow: $options.startSlideShow,
    onStopSlideshow: $options.stopSlideShow,
    pt: _ctx.pt,
    unstyled: _ctx.unstyled
  }, null, 8, ["id", "activeIndex", "slideShowActive", "value", "circular", "templates", "showIndicators", "changeItemOnIndicatorHover", "showItemNavigators", "autoPlay", "onStartSlideshow", "onStopSlideshow", "pt", "unstyled"]), _ctx.$attrs.showThumbnails ? (openBlock(), createBlock(_component_GalleriaThumbnails, {
    key: 0,
    activeIndex: $data.activeIndex,
    "onUpdate:activeIndex": _cache[3] || (_cache[3] = function($event) {
      return $data.activeIndex = $event;
    }),
    slideShowActive: $data.slideShowActive,
    "onUpdate:slideShowActive": _cache[4] || (_cache[4] = function($event) {
      return $data.slideShowActive = $event;
    }),
    containerId: _ctx.$id,
    value: _ctx.$attrs.value,
    templates: _ctx.$attrs.templates,
    numVisible: $data.numVisible,
    responsiveOptions: _ctx.$attrs.responsiveOptions,
    circular: _ctx.$attrs.circular,
    isVertical: $options.isVertical(),
    contentHeight: _ctx.$attrs.verticalThumbnailViewPortHeight,
    showThumbnailNavigators: _ctx.$attrs.showThumbnailNavigators,
    prevButtonProps: _ctx.$attrs.prevButtonProps,
    nextButtonProps: _ctx.$attrs.nextButtonProps,
    onStopSlideshow: $options.stopSlideShow,
    pt: _ctx.pt,
    unstyled: _ctx.unstyled
  }, null, 8, ["activeIndex", "slideShowActive", "containerId", "value", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "prevButtonProps", "nextButtonProps", "onStopSlideshow", "pt", "unstyled"])) : createCommentVNode("", true)], 16, _hoisted_3), _ctx.$attrs.templates && _ctx.$attrs.templates["footer"] ? (openBlock(), createElementBlock("div", mergeProps({
    key: 2,
    "class": _ctx.cx("footer")
  }, $options.getPTOptions("footer")), [(openBlock(), createBlock(resolveDynamicComponent(_ctx.$attrs.templates["footer"])))], 16)) : createCommentVNode("", true)], 16, _hoisted_1$1)) : createCommentVNode("", true);
}
script$1.render = render$1;
var script = {
  name: "Galleria",
  "extends": script$4,
  inheritAttrs: false,
  emits: ["update:activeIndex", "update:visible"],
  container: null,
  mask: null,
  documentKeydownListener: null,
  data: function data3() {
    return {
      containerVisible: this.visible,
      target: null
    };
  },
  updated: function updated3() {
    if (this.fullScreen && this.visible) {
      this.containerVisible = this.visible;
    }
  },
  beforeUnmount: function beforeUnmount3() {
    if (this.fullScreen) {
      unblockBodyScroll();
    }
    this.mask = null;
    if (this.container) {
      ZIndex.clear(this.container);
      this.container = null;
    }
  },
  methods: {
    onBeforeEnter: function onBeforeEnter(el) {
      ZIndex.set("modal", el, this.baseZIndex || this.$primevue.config.zIndex.modal);
    },
    onEnter: function onEnter(el) {
      this.target = (void 0).activeElement;
      this.mask.style.zIndex = String(parseInt(el.style.zIndex, 10) - 1);
      blockBodyScroll();
      this.focus();
      this.bindGlobalListeners();
    },
    onBeforeLeave: function onBeforeLeave() {
      !this.isUnstyled && addClass(this.mask, "p-overlay-mask-leave");
    },
    onLeave: function onLeave() {
      focus(this.target);
      this.target = null;
    },
    onAfterLeave: function onAfterLeave(el) {
      ZIndex.clear(el);
      this.containerVisible = false;
      unblockBodyScroll();
      this.unbindGlobalListeners();
    },
    onActiveItemChange: function onActiveItemChange(index) {
      if (this.activeIndex !== index) {
        this.$emit("update:activeIndex", index);
      }
    },
    maskHide: function maskHide() {
      this.$emit("update:visible", false);
    },
    containerRef: function containerRef(el) {
      this.container = el;
    },
    maskRef: function maskRef(el) {
      this.mask = el;
    },
    onKeyDown: function onKeyDown(event) {
      if (event.code === "Escape") {
        this.maskHide();
      }
    },
    bindDocumentKeyDownListener: function bindDocumentKeyDownListener() {
      if (!this.documentKeydownListener) {
        this.documentKeydownListener = this.onKeyDown.bind(this);
        (void 0).document.addEventListener("keydown", this.documentKeydownListener);
      }
    },
    unbindDocumentKeyDownListener: function unbindDocumentKeyDownListener() {
      if (this.documentKeydownListener) {
        (void 0).document.removeEventListener("keydown", this.documentKeydownListener);
        this.documentKeydownListener = null;
      }
    },
    bindGlobalListeners: function bindGlobalListeners() {
      if (this.fullScreen) {
        this.bindDocumentKeyDownListener();
      }
    },
    unbindGlobalListeners: function unbindGlobalListeners() {
      if (this.fullScreen) {
        this.unbindDocumentKeyDownListener();
      }
    },
    focus: function focus2() {
      var focusTarget = this.container.$el.querySelector("[autofocus]");
      if (focusTarget) {
        focusTarget.focus();
      }
    }
  },
  components: {
    GalleriaContent: script$1,
    Portal: script$5
  },
  directives: {
    focustrap: FocusTrap
  }
};
var _hoisted_1 = ["aria-modal"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_GalleriaContent = resolveComponent("GalleriaContent");
  var _component_Portal = resolveComponent("Portal");
  var _directive_focustrap = resolveDirective("focustrap");
  return _ctx.fullScreen ? (openBlock(), createBlock(_component_Portal, {
    key: 0
  }, {
    "default": withCtx(function() {
      return [$data.containerVisible ? (openBlock(), createElementBlock("div", mergeProps({
        key: 0,
        ref: $options.maskRef,
        "class": [_ctx.cx("mask"), _ctx.maskClass],
        role: "dialog",
        "aria-modal": _ctx.fullScreen ? "true" : void 0
      }, _ctx.ptm("mask")), [createVNode(Transition, mergeProps({
        name: "p-galleria",
        onBeforeEnter: $options.onBeforeEnter,
        onEnter: $options.onEnter,
        onBeforeLeave: $options.onBeforeLeave,
        onLeave: $options.onLeave,
        onAfterLeave: $options.onAfterLeave,
        appear: ""
      }, _ctx.ptm("transition")), {
        "default": withCtx(function() {
          return [_ctx.visible ? withDirectives((openBlock(), createBlock(_component_GalleriaContent, mergeProps({
            key: 0,
            ref: $options.containerRef,
            onMaskHide: $options.maskHide,
            templates: _ctx.$slots,
            onActiveitemChange: $options.onActiveItemChange,
            pt: _ctx.pt,
            unstyled: _ctx.unstyled
          }, _ctx.$props), null, 16, ["onMaskHide", "templates", "onActiveitemChange", "pt", "unstyled"])), [[_directive_focustrap]]) : createCommentVNode("", true)];
        }),
        _: 1
      }, 16, ["onBeforeEnter", "onEnter", "onBeforeLeave", "onLeave", "onAfterLeave"])], 16, _hoisted_1)) : createCommentVNode("", true)];
    }),
    _: 1
  })) : (openBlock(), createBlock(_component_GalleriaContent, mergeProps({
    key: 1,
    templates: _ctx.$slots,
    onActiveitemChange: $options.onActiveItemChange,
    pt: _ctx.pt,
    unstyled: _ctx.unstyled
  }, _ctx.$props), null, 16, ["templates", "onActiveitemChange", "pt", "unstyled"]));
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-B0UXHiW1.mjs.map
