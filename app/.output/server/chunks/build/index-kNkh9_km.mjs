import { addClass, hasCSSAnimation, createElement } from '@primeuix/utils/dom';
import { ZIndex } from '@primeuix/utils/zindex';
import { u as unblockBodyScroll, b as blockBodyScroll } from './index-Din928lO.mjs';
import { s as script$2 } from './index-f6-L4oOs.mjs';
import { style } from '@primeuix/styles/blockui';
import { B as BaseStyle } from './server.mjs';
import { createElementBlock, openBlock, mergeProps, renderSlot } from 'vue';
import '@primeuix/styled';
import '@primeuix/utils';
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

var classes = {
  root: "p-blockui"
};
var BlockUIStyle = BaseStyle.extend({
  name: "blockui",
  style,
  classes
});
var script$1 = {
  name: "BaseBlockUI",
  "extends": script$2,
  props: {
    blocked: {
      type: Boolean,
      "default": false
    },
    fullScreen: {
      type: Boolean,
      "default": false
    },
    baseZIndex: {
      type: Number,
      "default": 0
    },
    autoZIndex: {
      type: Boolean,
      "default": true
    }
  },
  style: BlockUIStyle,
  provide: function provide() {
    return {
      $pcBlockUI: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "BlockUI",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["block", "unblock"],
  mask: null,
  data: function data() {
    return {
      isBlocked: false
    };
  },
  watch: {
    blocked: function blocked(newValue) {
      if (newValue === true) this.block();
      else this.unblock();
    }
  },
  mounted: function mounted() {
    if (this.blocked) {
      this.block();
    }
  },
  methods: {
    block: function block() {
      var styleClass = "p-blockui-mask p-overlay-mask p-overlay-mask-enter";
      if (this.fullScreen) {
        styleClass += " p-blockui-mask-document";
        this.mask = createElement("div", {
          style: {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%"
          },
          "class": !this.isUnstyled && styleClass,
          "p-bind": this.ptm("mask")
        });
        (void 0).body.appendChild(this.mask);
        blockBodyScroll();
        (void 0).activeElement.blur();
      } else {
        this.mask = createElement("div", {
          style: {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%"
          },
          "class": !this.isUnstyled && styleClass,
          "p-bind": this.ptm("mask")
        });
        this.$refs.container.appendChild(this.mask);
      }
      if (this.autoZIndex) {
        ZIndex.set("modal", this.mask, this.baseZIndex + this.$primevue.config.zIndex.modal);
      }
      this.isBlocked = true;
      this.$emit("block");
    },
    unblock: function unblock() {
      var _this = this;
      if (this.mask) {
        !this.isUnstyled && addClass(this.mask, "p-overlay-mask-leave");
        var _handleAnimationEnd = function handleAnimationEnd() {
          clearTimeout(fallbackTimer);
          _this.mask.removeEventListener("animationend", _handleAnimationEnd);
          _this.mask.removeEventListener("webkitAnimationEnd", _handleAnimationEnd);
        };
        var fallbackTimer = setTimeout(function() {
          _this.removeMask();
        }, 10);
        if (hasCSSAnimation(this.mask) > 0) {
          this.mask.addEventListener("animationend", _handleAnimationEnd);
          this.mask.addEventListener("webkitAnimationEnd", _handleAnimationEnd);
        }
      } else {
        this.removeMask();
      }
    },
    removeMask: function removeMask() {
      ZIndex.clear(this.mask);
      if (this.fullScreen) {
        (void 0).body.removeChild(this.mask);
        unblockBodyScroll();
      } else {
        var _this$$refs$container;
        (_this$$refs$container = this.$refs.container) === null || _this$$refs$container === void 0 || _this$$refs$container.removeChild(this.mask);
      }
      this.isBlocked = false;
      this.$emit("unblock");
    }
  }
};
var _hoisted_1 = ["aria-busy"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "container",
    "class": _ctx.cx("root"),
    "aria-busy": $data.isBlocked
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-kNkh9_km.mjs.map
