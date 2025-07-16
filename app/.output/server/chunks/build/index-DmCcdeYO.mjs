import { cn } from '@primeuix/utils';
import { s as script$3 } from './index-6fx3juzz.mjs';
import { s as script$4 } from './index-hU8V0OJN.mjs';
import script$2 from './index-IJ23DGgI.mjs';
import { R as Ripple } from './index-2dA4pXcI.mjs';
import { s as script$5 } from './index-f6-L4oOs.mjs';
import { style } from '@primeuix/styles/panel';
import { B as BaseStyle } from './server.mjs';
import { resolveComponent, createElementBlock, openBlock, mergeProps, createElementVNode, createVNode, renderSlot, normalizeClass, createCommentVNode, toDisplayString, withCtx, createBlock, resolveDynamicComponent, Transition, withDirectives, vShow } from 'vue';
import './index-BLn-pl6M.mjs';
import '@primeuix/utils/object';
import './index-C1vnj6fg.mjs';
import './index-ik-SlIj1.mjs';
import '@primeuix/styles/badge';
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
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
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
import './client.manifest.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'file:///app/node_modules/@nuxt/vite-builder/dist/runtime/client.manifest.mjs';
import './index-DpRrGZTR.mjs';
import '@primeuix/utils/uuid';

var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-panel p-component", {
      "p-panel-toggleable": props.toggleable
    }];
  },
  header: "p-panel-header",
  title: "p-panel-title",
  headerActions: "p-panel-header-actions",
  pcToggleButton: "p-panel-toggle-button",
  contentContainer: "p-panel-content-container",
  content: "p-panel-content",
  footer: "p-panel-footer"
};
var PanelStyle = BaseStyle.extend({
  name: "panel",
  style,
  classes
});
var script$1 = {
  name: "BasePanel",
  "extends": script$5,
  props: {
    header: String,
    toggleable: Boolean,
    collapsed: Boolean,
    toggleButtonProps: {
      type: Object,
      "default": function _default() {
        return {
          severity: "secondary",
          text: true,
          rounded: true
        };
      }
    }
  },
  style: PanelStyle,
  provide: function provide() {
    return {
      $pcPanel: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Panel",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:collapsed", "toggle"],
  data: function data() {
    return {
      d_collapsed: this.collapsed
    };
  },
  watch: {
    collapsed: function collapsed(newValue) {
      this.d_collapsed = newValue;
    }
  },
  methods: {
    toggle: function toggle(event) {
      this.d_collapsed = !this.d_collapsed;
      this.$emit("update:collapsed", this.d_collapsed);
      this.$emit("toggle", {
        originalEvent: event,
        value: this.d_collapsed
      });
    },
    onKeyDown: function onKeyDown(event) {
      if (event.code === "Enter" || event.code === "NumpadEnter" || event.code === "Space") {
        this.toggle(event);
        event.preventDefault();
      }
    }
  },
  computed: {
    buttonAriaLabel: function buttonAriaLabel() {
      return this.toggleButtonProps && this.toggleButtonProps.ariaLabel ? this.toggleButtonProps.ariaLabel : this.header;
    },
    dataP: function dataP() {
      return cn({
        toggleable: this.toggleable
      });
    }
  },
  components: {
    PlusIcon: script$4,
    MinusIcon: script$3,
    Button: script$2
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1 = ["data-p"];
var _hoisted_2 = ["data-p"];
var _hoisted_3 = ["id"];
var _hoisted_4 = ["id", "aria-labelledby"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = resolveComponent("Button");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    "data-p": $options.dataP
  }, _ctx.ptmi("root")), [createElementVNode("div", mergeProps({
    "class": _ctx.cx("header"),
    "data-p": $options.dataP
  }, _ctx.ptm("header")), [renderSlot(_ctx.$slots, "header", {
    id: _ctx.$id + "_header",
    "class": normalizeClass(_ctx.cx("title"))
  }, function() {
    return [_ctx.header ? (openBlock(), createElementBlock("span", mergeProps({
      key: 0,
      id: _ctx.$id + "_header",
      "class": _ctx.cx("title")
    }, _ctx.ptm("title")), toDisplayString(_ctx.header), 17, _hoisted_3)) : createCommentVNode("", true)];
  }), createElementVNode("div", mergeProps({
    "class": _ctx.cx("headerActions")
  }, _ctx.ptm("headerActions")), [renderSlot(_ctx.$slots, "icons"), _ctx.toggleable ? renderSlot(_ctx.$slots, "togglebutton", {
    key: 0,
    collapsed: $data.d_collapsed,
    toggleCallback: function toggleCallback(event) {
      return $options.toggle(event);
    },
    keydownCallback: function keydownCallback(event) {
      return $options.onKeyDown(event);
    }
  }, function() {
    return [createVNode(_component_Button, mergeProps({
      id: _ctx.$id + "_header",
      "class": _ctx.cx("pcToggleButton"),
      "aria-label": $options.buttonAriaLabel,
      "aria-controls": _ctx.$id + "_content",
      "aria-expanded": !$data.d_collapsed,
      unstyled: _ctx.unstyled,
      onClick: _cache[0] || (_cache[0] = function($event) {
        return $options.toggle($event);
      }),
      onKeydown: _cache[1] || (_cache[1] = function($event) {
        return $options.onKeyDown($event);
      })
    }, _ctx.toggleButtonProps, {
      pt: _ctx.ptm("pcToggleButton")
    }), {
      icon: withCtx(function(slotProps) {
        return [renderSlot(_ctx.$slots, _ctx.$slots.toggleicon ? "toggleicon" : "togglericon", {
          collapsed: $data.d_collapsed
        }, function() {
          return [(openBlock(), createBlock(resolveDynamicComponent($data.d_collapsed ? "PlusIcon" : "MinusIcon"), mergeProps({
            "class": slotProps["class"]
          }, _ctx.ptm("pcToggleButton")["icon"]), null, 16, ["class"]))];
        })];
      }),
      _: 3
    }, 16, ["id", "class", "aria-label", "aria-controls", "aria-expanded", "unstyled", "pt"])];
  }) : createCommentVNode("", true)], 16)], 16, _hoisted_2), createVNode(Transition, mergeProps({
    name: "p-toggleable-content"
  }, _ctx.ptm("transition")), {
    "default": withCtx(function() {
      return [withDirectives(createElementVNode("div", mergeProps({
        id: _ctx.$id + "_content",
        "class": _ctx.cx("contentContainer"),
        role: "region",
        "aria-labelledby": _ctx.$id + "_header"
      }, _ctx.ptm("contentContainer")), [createElementVNode("div", mergeProps({
        "class": _ctx.cx("content")
      }, _ctx.ptm("content")), [renderSlot(_ctx.$slots, "default")], 16), _ctx.$slots.footer ? (openBlock(), createElementBlock("div", mergeProps({
        key: 0,
        "class": _ctx.cx("footer")
      }, _ctx.ptm("footer")), [renderSlot(_ctx.$slots, "footer")], 16)) : createCommentVNode("", true)], 16, _hoisted_4), [[vShow, !$data.d_collapsed]])];
    }),
    _: 3
  }, 16)], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-DmCcdeYO.mjs.map
