import { s as script$2 } from './index--ctLNnjM.mjs';
import { s as script$3 } from './index-B8dwdDfW.mjs';
import script$4 from './index-Csa6qe6g.mjs';
import script$5 from './index-DBKs_M_r.mjs';
import script$6 from './index-BxfqW_8x.mjs';
import { mergeProps, resolveComponent, createElementBlock, openBlock, renderSlot, Fragment, renderList, createBlock, withCtx, createVNode, normalizeClass, createCommentVNode, resolveDynamicComponent, toDisplayString } from 'vue';
import { s as script$7 } from './index-f6-L4oOs.mjs';
import { style } from '@primeuix/styles/accordion';
import { B as BaseStyle } from './server.mjs';
import './index-BLn-pl6M.mjs';
import '@primeuix/utils/object';
import '@primeuix/styled';
import '@primeuix/utils/dom';
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
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
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
import './index-CMv313tU.mjs';
import './index-2dA4pXcI.mjs';
import './index-DpRrGZTR.mjs';
import '@primeuix/utils/uuid';

var classes = {
  root: "p-accordion p-component"
};
var AccordionStyle = BaseStyle.extend({
  name: "accordion",
  style,
  classes
});
var script$1 = {
  name: "BaseAccordion",
  "extends": script$7,
  props: {
    value: {
      type: [String, Number, Array],
      "default": void 0
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    lazy: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": 0
    },
    selectOnFocus: {
      type: Boolean,
      "default": false
    },
    expandIcon: {
      type: String,
      "default": void 0
    },
    collapseIcon: {
      type: String,
      "default": void 0
    },
    // @deprecated since v4.
    activeIndex: {
      type: [Number, Array],
      "default": null
    }
  },
  style: AccordionStyle,
  provide: function provide() {
    return {
      $pcAccordion: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Accordion",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:value", "update:activeIndex", "tab-open", "tab-close", "tab-click"],
  data: function data() {
    return {
      d_value: this.value
    };
  },
  watch: {
    value: function value(newValue) {
      this.d_value = newValue;
    },
    activeIndex: {
      immediate: true,
      handler: function handler(newValue) {
        if (this.hasAccordionTab) {
          this.d_value = this.multiple ? newValue === null || newValue === void 0 ? void 0 : newValue.map(String) : newValue === null || newValue === void 0 ? void 0 : newValue.toString();
        }
      }
    }
  },
  methods: {
    isItemActive: function isItemActive(value2) {
      var _this$d_value;
      return this.multiple ? (_this$d_value = this.d_value) === null || _this$d_value === void 0 ? void 0 : _this$d_value.includes(value2) : this.d_value === value2;
    },
    updateValue: function updateValue(newValue) {
      var _this$d_value2;
      var active = this.isItemActive(newValue);
      if (this.multiple) {
        if (active) {
          this.d_value = this.d_value.filter(function(v) {
            return v !== newValue;
          });
        } else {
          if (this.d_value) this.d_value.push(newValue);
          else this.d_value = [newValue];
        }
      } else {
        this.d_value = active ? null : newValue;
      }
      this.$emit("update:value", this.d_value);
      this.$emit("update:activeIndex", this.multiple ? (_this$d_value2 = this.d_value) === null || _this$d_value2 === void 0 ? void 0 : _this$d_value2.map(Number) : Number(this.d_value));
      this.$emit(active ? "tab-close" : "tab-open", {
        originalEvent: void 0,
        index: Number(newValue)
      });
    },
    // @deprecated since v4. Use new structure instead.
    isAccordionTab: function isAccordionTab(child) {
      return child.type.name === "AccordionTab";
    },
    getTabProp: function getTabProp(tab, name) {
      return tab.props ? tab.props[name] : void 0;
    },
    getKey: function getKey(tab, index) {
      return this.getTabProp(tab, "header") || index;
    },
    getHeaderPT: function getHeaderPT(tab, index) {
      var _this = this;
      return {
        root: mergeProps({
          onClick: function onClick(event) {
            return _this.onTabClick(event, index);
          }
        }, this.getTabProp(tab, "headerProps"), this.getTabPT(tab, "header", index)),
        toggleicon: mergeProps(this.getTabProp(tab, "headeractionprops"), this.getTabPT(tab, "headeraction", index))
      };
    },
    getContentPT: function getContentPT(tab, index) {
      return {
        root: mergeProps(this.getTabProp(tab, "contentProps"), this.getTabPT(tab, "toggleablecontent", index)),
        transition: this.getTabPT(tab, "transition", index),
        content: this.getTabPT(tab, "content", index)
      };
    },
    getTabPT: function getTabPT(tab, key, index) {
      var count = this.tabs.length;
      var tabMetaData = {
        props: tab.props || {},
        parent: {
          instance: this,
          props: this.$props,
          state: this.$data
        },
        context: {
          index,
          count,
          first: index === 0,
          last: index === count - 1,
          active: this.isItemActive("".concat(index))
        }
      };
      return mergeProps(this.ptm("accordiontab.".concat(key), tabMetaData), this.ptmo(this.getTabProp(tab, "pt"), key, tabMetaData));
    },
    onTabClick: function onTabClick(event, index) {
      this.$emit("tab-click", {
        originalEvent: event,
        index
      });
    }
  },
  computed: {
    // @deprecated since v4.
    tabs: function tabs() {
      var _this2 = this;
      return this.$slots["default"]().reduce(function(tabs2, child) {
        if (_this2.isAccordionTab(child)) {
          tabs2.push(child);
        } else if (child.children && child.children instanceof Array) {
          child.children.forEach(function(nestedChild) {
            if (_this2.isAccordionTab(nestedChild)) {
              tabs2.push(nestedChild);
            }
          });
        }
        return tabs2;
      }, []);
    },
    hasAccordionTab: function hasAccordionTab() {
      return this.tabs.length;
    }
  },
  components: {
    AccordionPanel: script$6,
    AccordionHeader: script$5,
    AccordionContent: script$4,
    ChevronUpIcon: script$3,
    ChevronRightIcon: script$2
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_AccordionHeader = resolveComponent("AccordionHeader");
  var _component_AccordionContent = resolveComponent("AccordionContent");
  var _component_AccordionPanel = resolveComponent("AccordionPanel");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [$options.hasAccordionTab ? (openBlock(true), createElementBlock(Fragment, {
    key: 0
  }, renderList($options.tabs, function(tab, i) {
    return openBlock(), createBlock(_component_AccordionPanel, {
      key: $options.getKey(tab, i),
      value: "".concat(i),
      pt: {
        root: $options.getTabPT(tab, "root", i)
      },
      disabled: $options.getTabProp(tab, "disabled")
    }, {
      "default": withCtx(function() {
        return [createVNode(_component_AccordionHeader, {
          "class": normalizeClass($options.getTabProp(tab, "headerClass")),
          pt: $options.getHeaderPT(tab, i)
        }, {
          toggleicon: withCtx(function(slotProps) {
            return [slotProps.active ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.collapseicon ? _ctx.$slots.collapseicon : _ctx.collapseIcon ? "span" : "ChevronDownIcon"), mergeProps({
              key: 0,
              "class": [_ctx.collapseIcon, slotProps["class"]],
              "aria-hidden": "true"
            }, {
              ref_for: true
            }, $options.getTabPT(tab, "headericon", i)), null, 16, ["class"])) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.expandicon ? _ctx.$slots.expandicon : _ctx.expandIcon ? "span" : "ChevronUpIcon"), mergeProps({
              key: 1,
              "class": [_ctx.expandIcon, slotProps["class"]],
              "aria-hidden": "true"
            }, {
              ref_for: true
            }, $options.getTabPT(tab, "headericon", i)), null, 16, ["class"]))];
          }),
          "default": withCtx(function() {
            return [tab.children && tab.children.headericon ? (openBlock(), createBlock(resolveDynamicComponent(tab.children.headericon), {
              key: 0,
              isTabActive: $options.isItemActive("".concat(i)),
              active: $options.isItemActive("".concat(i)),
              index: i
            }, null, 8, ["isTabActive", "active", "index"])) : createCommentVNode("", true), tab.props && tab.props.header ? (openBlock(), createElementBlock("span", mergeProps({
              key: 1,
              ref_for: true
            }, $options.getTabPT(tab, "headertitle", i)), toDisplayString(tab.props.header), 17)) : createCommentVNode("", true), tab.children && tab.children.header ? (openBlock(), createBlock(resolveDynamicComponent(tab.children.header), {
              key: 2
            })) : createCommentVNode("", true)];
          }),
          _: 2
        }, 1032, ["class", "pt"]), createVNode(_component_AccordionContent, {
          pt: $options.getContentPT(tab, i)
        }, {
          "default": withCtx(function() {
            return [(openBlock(), createBlock(resolveDynamicComponent(tab)))];
          }),
          _: 2
        }, 1032, ["pt"])];
      }),
      _: 2
    }, 1032, ["value", "pt", "disabled"]);
  }), 128)) : renderSlot(_ctx.$slots, "default", {
    key: 1
  })], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-CO6qaYYR.mjs.map
