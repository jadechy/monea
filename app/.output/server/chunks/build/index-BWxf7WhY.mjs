import { isTouchDevice } from '@primeuix/utils/dom';
import script$2 from './index-D45wcmtf.mjs';
import { s as script$3 } from './index-HVZBZE_C.mjs';
import { style } from '@primeuix/styles/inputotp';
import { B as BaseStyle } from './server.mjs';
import { resolveComponent, createElementBlock, openBlock, mergeProps, Fragment, renderList, renderSlot, createVNode, normalizeClass } from 'vue';
import '@primeuix/utils';
import '@primeuix/styles/inputtext';
import './index-_YLQpnfS.mjs';
import './index-f6-L4oOs.mjs';
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

var classes = {
  root: "p-inputotp p-component",
  pcInputText: "p-inputotp-input"
};
var InputOtpStyle = BaseStyle.extend({
  name: "inputotp",
  style,
  classes
});
var script$1 = {
  name: "BaseInputOtp",
  "extends": script$3,
  props: {
    readonly: {
      type: Boolean,
      "default": false
    },
    tabindex: {
      type: Number,
      "default": null
    },
    length: {
      type: Number,
      "default": 4
    },
    mask: {
      type: Boolean,
      "default": false
    },
    integerOnly: {
      type: Boolean,
      "default": false
    }
  },
  style: InputOtpStyle,
  provide: function provide() {
    return {
      $pcInputOtp: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "InputOtp",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["change", "focus", "blur"],
  data: function data() {
    return {
      tokens: []
    };
  },
  watch: {
    modelValue: {
      immediate: true,
      handler: function handler(newValue) {
        this.tokens = newValue ? newValue.split("") : new Array(this.length);
      }
    }
  },
  methods: {
    getTemplateAttrs: function getTemplateAttrs(index) {
      return {
        value: this.tokens[index]
      };
    },
    getTemplateEvents: function getTemplateEvents(index) {
      var _this = this;
      return {
        input: function input(event) {
          return _this.onInput(event, index);
        },
        keydown: function keydown(event) {
          return _this.onKeyDown(event);
        },
        focus: function focus(event) {
          return _this.onFocus(event);
        },
        blur: function blur(event) {
          return _this.onBlur(event);
        },
        paste: function paste(event) {
          return _this.onPaste(event);
        }
      };
    },
    onInput: function onInput(event, index) {
      this.tokens[index] = event.target.value;
      this.updateModel(event);
      if (event.inputType === "deleteContentBackward") {
        this.moveToPrev(event);
      } else if (event.inputType === "insertText" || event.inputType === "deleteContentForward" || isTouchDevice() && event instanceof CustomEvent) {
        this.moveToNext(event);
      }
    },
    updateModel: function updateModel(event) {
      var newValue = this.tokens.join("");
      this.writeValue(newValue, event);
      this.$emit("change", {
        originalEvent: event,
        value: newValue
      });
    },
    moveToPrev: function moveToPrev(event) {
      var prevInput = this.findPrevInput(event.target);
      if (prevInput) {
        prevInput.focus();
        prevInput.select();
      }
    },
    moveToNext: function moveToNext(event) {
      var nextInput = this.findNextInput(event.target);
      if (nextInput) {
        nextInput.focus();
        nextInput.select();
      }
    },
    findNextInput: function findNextInput(element) {
      var nextElement = element.nextElementSibling;
      if (!nextElement) return;
      return nextElement.nodeName === "INPUT" ? nextElement : this.findNextInput(nextElement);
    },
    findPrevInput: function findPrevInput(element) {
      var prevElement = element.previousElementSibling;
      if (!prevElement) return;
      return prevElement.nodeName === "INPUT" ? prevElement : this.findPrevInput(prevElement);
    },
    onFocus: function onFocus(event) {
      event.target.select();
      this.$emit("focus", event);
    },
    onBlur: function onBlur(event) {
      this.$emit("blur", event);
    },
    onClick: function onClick(event) {
      setTimeout(function() {
        return event.target.select();
      }, 1);
    },
    onKeyDown: function onKeyDown(event) {
      if (event.ctrlKey || event.metaKey) {
        return;
      }
      switch (event.code) {
        case "ArrowLeft":
          this.moveToPrev(event);
          event.preventDefault();
          break;
        case "ArrowUp":
        case "ArrowDown":
          event.preventDefault();
          break;
        case "Backspace":
          if (event.target.value.length === 0) {
            this.moveToPrev(event);
            event.preventDefault();
          }
          break;
        case "ArrowRight":
          this.moveToNext(event);
          event.preventDefault();
          break;
        case "Enter":
        case "NumpadEnter":
        case "Tab":
          break;
        default:
          if (this.integerOnly && !(event.code !== "Space" && Number(event.key) >= 0 && Number(event.key) <= 9) || this.tokens.join("").length >= this.length && event.code !== "Delete") {
            event.preventDefault();
          }
          break;
      }
    },
    onPaste: function onPaste(event) {
      var paste = event.clipboardData.getData("text");
      if (paste.length) {
        var pastedCode = paste.substring(0, this.length);
        if (!this.integerOnly || !isNaN(pastedCode)) {
          this.tokens = pastedCode.split("");
          this.updateModel(event);
        }
      }
      event.preventDefault();
    }
  },
  computed: {
    inputMode: function inputMode() {
      return this.integerOnly ? "numeric" : "text";
    },
    inputType: function inputType() {
      return this.mask ? "password" : "text";
    }
  },
  components: {
    OtpInputText: script$2
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_OtpInputText = resolveComponent("OtpInputText");
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.length, function(i) {
    return renderSlot(_ctx.$slots, "default", {
      key: i,
      events: $options.getTemplateEvents(i - 1),
      attrs: $options.getTemplateAttrs(i - 1),
      index: i
    }, function() {
      return [createVNode(_component_OtpInputText, {
        value: $data.tokens[i - 1],
        type: $options.inputType,
        "class": normalizeClass(_ctx.cx("pcInputText")),
        name: _ctx.$formName,
        inputmode: $options.inputMode,
        variant: _ctx.variant,
        readonly: _ctx.readonly,
        disabled: _ctx.disabled,
        size: _ctx.size,
        invalid: _ctx.invalid,
        tabindex: _ctx.tabindex,
        unstyled: _ctx.unstyled,
        onInput: function onInput2($event) {
          return $options.onInput($event, i - 1);
        },
        onFocus: _cache[0] || (_cache[0] = function($event) {
          return $options.onFocus($event);
        }),
        onBlur: _cache[1] || (_cache[1] = function($event) {
          return $options.onBlur($event);
        }),
        onPaste: _cache[2] || (_cache[2] = function($event) {
          return $options.onPaste($event);
        }),
        onKeydown: _cache[3] || (_cache[3] = function($event) {
          return $options.onKeyDown($event);
        }),
        onClick: _cache[4] || (_cache[4] = function($event) {
          return $options.onClick($event);
        }),
        pt: _ctx.ptm("pcInputText")
      }, null, 8, ["value", "type", "class", "name", "inputmode", "variant", "readonly", "disabled", "size", "invalid", "tabindex", "unstyled", "onInput", "pt"])];
    });
  }), 128))], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-BWxf7WhY.mjs.map
