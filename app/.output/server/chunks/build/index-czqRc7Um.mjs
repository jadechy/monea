import { isEmpty } from '@primeuix/utils/object';
import { s as script$2 } from './index-CMv313tU.mjs';
import script$4 from './index-IJ23DGgI.mjs';
import script$3 from './index-DCCm6MaI.mjs';
import { s as script$5 } from './index-f6-L4oOs.mjs';
import { style } from '@primeuix/styles/splitbutton';
import { B as BaseStyle } from './server.mjs';
import { resolveComponent, createElementBlock, openBlock, mergeProps, createVNode, createSlots, withCtx, renderSlot, normalizeClass, createElementVNode, createBlock, resolveDynamicComponent } from 'vue';
import './index-BLn-pl6M.mjs';
import '@primeuix/utils';
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
import './index-2dA4pXcI.mjs';
import './index-DpRrGZTR.mjs';
import '@primeuix/utils/uuid';
import '@primeuix/utils/zindex';
import './index-UnQD5FIJ.mjs';
import './index-rAVNvoJo.mjs';
import './index-D21vFaAL.mjs';
import './index-DbtuAreI.mjs';

var classes = {
  root: function root(_ref) {
    var instance = _ref.instance, props = _ref.props;
    return ["p-splitbutton p-component", {
      "p-splitbutton-raised": props.raised,
      "p-splitbutton-rounded": props.rounded,
      "p-splitbutton-fluid": instance.hasFluid
    }];
  },
  pcButton: "p-splitbutton-button",
  pcDropdown: "p-splitbutton-dropdown"
};
var SplitButtonStyle = BaseStyle.extend({
  name: "splitbutton",
  style,
  classes
});
var script$1 = {
  name: "BaseSplitButton",
  "extends": script$5,
  props: {
    label: {
      type: String,
      "default": null
    },
    icon: {
      type: String,
      "default": null
    },
    model: {
      type: Array,
      "default": null
    },
    autoZIndex: {
      type: Boolean,
      "default": true
    },
    baseZIndex: {
      type: Number,
      "default": 0
    },
    appendTo: {
      type: [String, Object],
      "default": "body"
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    fluid: {
      type: Boolean,
      "default": null
    },
    "class": {
      type: null,
      "default": null
    },
    style: {
      type: null,
      "default": null
    },
    buttonProps: {
      type: null,
      "default": null
    },
    menuButtonProps: {
      type: null,
      "default": null
    },
    menuButtonIcon: {
      type: String,
      "default": void 0
    },
    dropdownIcon: {
      type: String,
      "default": void 0
    },
    severity: {
      type: String,
      "default": null
    },
    raised: {
      type: Boolean,
      "default": false
    },
    rounded: {
      type: Boolean,
      "default": false
    },
    text: {
      type: Boolean,
      "default": false
    },
    outlined: {
      type: Boolean,
      "default": false
    },
    size: {
      type: String,
      "default": null
    },
    plain: {
      type: Boolean,
      "default": false
    }
  },
  style: SplitButtonStyle,
  provide: function provide() {
    return {
      $pcSplitButton: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "SplitButton",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["click"],
  inject: {
    $pcFluid: {
      "default": null
    }
  },
  data: function data() {
    return {
      isExpanded: false
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.$watch("$refs.menu.visible", function(newValue) {
      _this.isExpanded = newValue;
    });
  },
  methods: {
    onDropdownButtonClick: function onDropdownButtonClick(event) {
      if (event) {
        event.preventDefault();
      }
      this.$refs.menu.toggle({
        currentTarget: this.$el,
        relatedTarget: this.$refs.button.$el
      });
      this.isExpanded = this.$refs.menu.visible;
    },
    onDropdownKeydown: function onDropdownKeydown(event) {
      if (event.code === "ArrowDown" || event.code === "ArrowUp") {
        this.onDropdownButtonClick();
        event.preventDefault();
      }
    },
    onDefaultButtonClick: function onDefaultButtonClick(event) {
      if (this.isExpanded) {
        this.$refs.menu.hide(event);
      }
      this.$emit("click", event);
    }
  },
  computed: {
    containerClass: function containerClass() {
      return [this.cx("root"), this["class"]];
    },
    hasFluid: function hasFluid() {
      return isEmpty(this.fluid) ? !!this.$pcFluid : this.fluid;
    }
  },
  components: {
    PVSButton: script$4,
    PVSMenu: script$3,
    ChevronDownIcon: script$2
  }
};
var _hoisted_1 = ["data-p-severity"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PVSButton = resolveComponent("PVSButton");
  var _component_PVSMenu = resolveComponent("PVSMenu");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": $options.containerClass,
    style: _ctx.style
  }, _ctx.ptmi("root"), {
    "data-p-severity": _ctx.severity
  }), [createVNode(_component_PVSButton, mergeProps({
    type: "button",
    "class": _ctx.cx("pcButton"),
    label: _ctx.label,
    disabled: _ctx.disabled,
    severity: _ctx.severity,
    text: _ctx.text,
    icon: _ctx.icon,
    outlined: _ctx.outlined,
    size: _ctx.size,
    fluid: _ctx.fluid,
    "aria-label": _ctx.label,
    onClick: $options.onDefaultButtonClick
  }, _ctx.buttonProps, {
    pt: _ctx.ptm("pcButton"),
    unstyled: _ctx.unstyled
  }), createSlots({
    "default": withCtx(function() {
      return [renderSlot(_ctx.$slots, "default")];
    }),
    _: 2
  }, [_ctx.$slots.icon ? {
    name: "icon",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "icon", {
        "class": normalizeClass(slotProps["class"])
      }, function() {
        return [createElementVNode("span", mergeProps({
          "class": [_ctx.icon, slotProps["class"]]
        }, _ctx.ptm("pcButton")["icon"], {
          "data-pc-section": "buttonicon"
        }), null, 16)];
      })];
    }),
    key: "0"
  } : void 0]), 1040, ["class", "label", "disabled", "severity", "text", "icon", "outlined", "size", "fluid", "aria-label", "onClick", "pt", "unstyled"]), createVNode(_component_PVSButton, mergeProps({
    ref: "button",
    type: "button",
    "class": _ctx.cx("pcDropdown"),
    disabled: _ctx.disabled,
    "aria-haspopup": "true",
    "aria-expanded": $data.isExpanded,
    "aria-controls": _ctx.$id + "_overlay",
    onClick: $options.onDropdownButtonClick,
    onKeydown: $options.onDropdownKeydown,
    severity: _ctx.severity,
    text: _ctx.text,
    outlined: _ctx.outlined,
    size: _ctx.size,
    unstyled: _ctx.unstyled
  }, _ctx.menuButtonProps, {
    pt: _ctx.ptm("pcDropdown")
  }), {
    icon: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, _ctx.$slots.dropdownicon ? "dropdownicon" : "menubuttonicon", {
        "class": normalizeClass(slotProps["class"])
      }, function() {
        return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.menuButtonIcon || _ctx.dropdownIcon ? "span" : "ChevronDownIcon"), mergeProps({
          "class": [_ctx.dropdownIcon || _ctx.menuButtonIcon, slotProps["class"]]
        }, _ctx.ptm("pcDropdown")["icon"], {
          "data-pc-section": "menubuttonicon"
        }), null, 16, ["class"]))];
      })];
    }),
    _: 3
  }, 16, ["class", "disabled", "aria-expanded", "aria-controls", "onClick", "onKeydown", "severity", "text", "outlined", "size", "unstyled", "pt"]), createVNode(_component_PVSMenu, {
    ref: "menu",
    id: _ctx.$id + "_overlay",
    model: _ctx.model,
    popup: true,
    autoZIndex: _ctx.autoZIndex,
    baseZIndex: _ctx.baseZIndex,
    appendTo: _ctx.appendTo,
    unstyled: _ctx.unstyled,
    pt: _ctx.ptm("pcMenu")
  }, createSlots({
    _: 2
  }, [_ctx.$slots.menuitemicon ? {
    name: "itemicon",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "menuitemicon", {
        item: slotProps.item,
        "class": normalizeClass(slotProps["class"])
      })];
    }),
    key: "0"
  } : void 0, _ctx.$slots.item ? {
    name: "item",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "item", {
        item: slotProps.item,
        hasSubmenu: slotProps.hasSubmenu,
        label: slotProps.label,
        props: slotProps.props
      })];
    }),
    key: "1"
  } : void 0]), 1032, ["id", "model", "autoZIndex", "baseZIndex", "appendTo", "unstyled", "pt"])], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-czqRc7Um.mjs.map
