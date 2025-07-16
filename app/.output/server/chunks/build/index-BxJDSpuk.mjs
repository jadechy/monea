import { find, findSingle } from '@primeuix/utils/dom';
import { mergeProps, createElementBlock, openBlock, createElementVNode, Fragment, renderList, createCommentVNode, createBlock, toDisplayString, resolveDynamicComponent } from 'vue';
import { s as script$2 } from './index-f6-L4oOs.mjs';
import { style } from '@primeuix/styles/steps';
import { B as BaseStyle } from './server.mjs';
import '@primeuix/styled';
import '@primeuix/utils/object';
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
import '@primeuix/utils';
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

var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-steps p-component", {
      "p-readonly": props.readonly
    }];
  },
  list: "p-steps-list",
  item: function item(_ref2) {
    var instance = _ref2.instance, _item = _ref2.item, index = _ref2.index;
    return ["p-steps-item", {
      "p-steps-item-active": instance.isActive(index),
      "p-disabled": instance.isItemDisabled(_item, index)
    }];
  },
  itemLink: "p-steps-item-link",
  itemNumber: "p-steps-item-number",
  itemLabel: "p-steps-item-label"
};
var StepsStyle = BaseStyle.extend({
  name: "steps",
  style,
  classes
});
var script$1 = {
  name: "BaseSteps",
  "extends": script$2,
  props: {
    id: {
      type: String
    },
    model: {
      type: Array,
      "default": null
    },
    readonly: {
      type: Boolean,
      "default": true
    },
    activeStep: {
      type: Number,
      "default": 0
    }
  },
  style: StepsStyle,
  provide: function provide() {
    return {
      $pcSteps: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Steps",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:activeStep", "step-change"],
  data: function data() {
    return {
      d_activeStep: this.activeStep
    };
  },
  watch: {
    activeStep: function activeStep(newValue) {
      this.d_activeStep = newValue;
    }
  },
  mounted: function mounted() {
    var firstItem = this.findFirstItem();
    firstItem && (firstItem.tabIndex = "0");
  },
  methods: {
    getPTOptions: function getPTOptions(key, item2, index) {
      return this.ptm(key, {
        context: {
          item: item2,
          index,
          active: this.isActive(index),
          disabled: this.isItemDisabled(item2, index)
        }
      });
    },
    onItemClick: function onItemClick(event, item2, index) {
      if (this.disabled(item2) || this.readonly) {
        event.preventDefault();
        return;
      }
      if (item2.command) {
        item2.command({
          originalEvent: event,
          item: item2
        });
      }
      if (index !== this.d_activeStep) {
        this.d_activeStep = index;
        this.$emit("update:activeStep", this.d_activeStep);
      }
      this.$emit("step-change", {
        originalEvent: event,
        index
      });
    },
    onItemKeydown: function onItemKeydown(event, item2) {
      switch (event.code) {
        case "ArrowRight": {
          this.navigateToNextItem(event.target);
          event.preventDefault();
          break;
        }
        case "ArrowLeft": {
          this.navigateToPrevItem(event.target);
          event.preventDefault();
          break;
        }
        case "Home": {
          this.navigateToFirstItem(event.target);
          event.preventDefault();
          break;
        }
        case "End": {
          this.navigateToLastItem(event.target);
          event.preventDefault();
          break;
        }
        case "Tab":
          break;
        case "Enter":
        case "NumpadEnter":
        case "Space": {
          this.onItemClick(event, item2);
          event.preventDefault();
          break;
        }
      }
    },
    navigateToNextItem: function navigateToNextItem(target) {
      var nextItem = this.findNextItem(target);
      nextItem && this.setFocusToMenuitem(target, nextItem);
    },
    navigateToPrevItem: function navigateToPrevItem(target) {
      var prevItem = this.findPrevItem(target);
      prevItem && this.setFocusToMenuitem(target, prevItem);
    },
    navigateToFirstItem: function navigateToFirstItem(target) {
      var firstItem = this.findFirstItem(target);
      firstItem && this.setFocusToMenuitem(target, firstItem);
    },
    navigateToLastItem: function navigateToLastItem(target) {
      var lastItem = this.findLastItem(target);
      lastItem && this.setFocusToMenuitem(target, lastItem);
    },
    findNextItem: function findNextItem(item2) {
      var nextItem = item2.parentElement.nextElementSibling;
      return nextItem ? nextItem.children[0] : null;
    },
    findPrevItem: function findPrevItem(item2) {
      var prevItem = item2.parentElement.previousElementSibling;
      return prevItem ? prevItem.children[0] : null;
    },
    findFirstItem: function findFirstItem() {
      var firstSibling = findSingle(this.$refs.list, '[data-pc-section="item"]');
      return firstSibling ? firstSibling.children[0] : null;
    },
    findLastItem: function findLastItem() {
      var siblings = find(this.$refs.list, '[data-pc-section="item"]');
      return siblings ? siblings[siblings.length - 1].children[0] : null;
    },
    setFocusToMenuitem: function setFocusToMenuitem(target, focusableItem) {
      target.tabIndex = "-1";
      focusableItem.tabIndex = "0";
      focusableItem.focus();
    },
    isActive: function isActive(index) {
      return index === this.d_activeStep;
    },
    isItemDisabled: function isItemDisabled(item2, index) {
      return this.disabled(item2) || this.readonly && !this.isActive(index);
    },
    visible: function visible(item2) {
      return typeof item2.visible === "function" ? item2.visible() : item2.visible !== false;
    },
    disabled: function disabled(item2) {
      return typeof item2.disabled === "function" ? item2.disabled() : item2.disabled;
    },
    label: function label(item2) {
      return typeof item2.label === "function" ? item2.label() : item2.label;
    },
    getMenuItemProps: function getMenuItemProps(item2, index) {
      var _this = this;
      return {
        action: mergeProps({
          "class": this.cx("itemLink"),
          onClick: function onClick($event) {
            return _this.onItemClick($event, item2);
          },
          onKeyDown: function onKeyDown($event) {
            return _this.onItemKeydown($event, item2);
          }
        }, this.getPTOptions("itemLink", item2, index)),
        step: mergeProps({
          "class": this.cx("itemNumber")
        }, this.getPTOptions("itemNumber", item2, index)),
        label: mergeProps({
          "class": this.cx("itemLabel")
        }, this.getPTOptions("itemLabel", item2, index))
      };
    }
  }
};
var _hoisted_1 = ["id"];
var _hoisted_2 = ["aria-current", "onClick", "onKeydown", "data-p-active", "data-p-disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("nav", mergeProps({
    id: _ctx.id,
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [createElementVNode("ol", mergeProps({
    ref: "list",
    "class": _ctx.cx("list")
  }, _ctx.ptm("list")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.model, function(item2, index) {
    return openBlock(), createElementBlock(Fragment, {
      key: $options.label(item2) + "_" + index.toString()
    }, [$options.visible(item2) ? (openBlock(), createElementBlock("li", mergeProps({
      key: 0,
      "class": [_ctx.cx("item", {
        item: item2,
        index
      }), item2["class"]],
      style: item2.style,
      "aria-current": $options.isActive(index) ? "step" : void 0,
      onClick: function onClick($event) {
        return $options.onItemClick($event, item2, index);
      },
      onKeydown: function onKeydown($event) {
        return $options.onItemKeydown($event, item2, index);
      }
    }, {
      ref_for: true
    }, $options.getPTOptions("item", item2, index), {
      "data-p-active": $options.isActive(index),
      "data-p-disabled": $options.isItemDisabled(item2, index)
    }), [!_ctx.$slots.item ? (openBlock(), createElementBlock("span", mergeProps({
      key: 0,
      "class": _ctx.cx("itemLink")
    }, {
      ref_for: true
    }, $options.getPTOptions("itemLink", item2, index)), [createElementVNode("span", mergeProps({
      "class": _ctx.cx("itemNumber")
    }, {
      ref_for: true
    }, $options.getPTOptions("itemNumber", item2, index)), toDisplayString(index + 1), 17), createElementVNode("span", mergeProps({
      "class": _ctx.cx("itemLabel")
    }, {
      ref_for: true
    }, $options.getPTOptions("itemLabel", item2, index)), toDisplayString($options.label(item2)), 17)], 16)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.item), {
      key: 1,
      item: item2,
      index,
      active: index === $data.d_activeStep,
      label: $options.label(item2),
      props: $options.getMenuItemProps(item2, index)
    }, null, 8, ["item", "index", "active", "label", "props"]))], 16, _hoisted_2)) : createCommentVNode("", true)], 64);
  }), 128))], 16)], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-BxJDSpuk.mjs.map
