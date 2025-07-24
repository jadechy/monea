import { EventBus } from '@primeuix/utils/eventbus';
import { B as BaseStyle, g as script$6 } from './server.mjs';
import { style } from '@primeuix/styles/terminal';
import { createElementBlock, openBlock, mergeProps, createCommentVNode, createElementVNode, toDisplayString, Fragment, renderList, withDirectives, vModelText } from 'vue';
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
import '@primeuix/utils/object';
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
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import 'node:url';
import 'ipx';
import 'pinia';
import 'vue-router';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
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

var TerminalService = EventBus();
var classes = {
  root: "p-terminal p-component",
  welcomeMessage: "p-terminal-welcome-message",
  commandList: "p-terminal-command-list",
  command: "p-terminal-command",
  commandValue: "p-terminal-command-value",
  commandResponse: "p-terminal-command-response",
  prompt: "p-terminal-prompt",
  promptLabel: "p-terminal-prompt-label",
  promptValue: "p-terminal-prompt-value"
};
var TerminalStyle = BaseStyle.extend({
  name: "terminal",
  style,
  classes
});
var script$1 = {
  name: "BaseTerminal",
  "extends": script$6,
  props: {
    welcomeMessage: {
      type: String,
      "default": null
    },
    prompt: {
      type: String,
      "default": null
    }
  },
  style: TerminalStyle,
  provide: function provide() {
    return {
      $pcTerminal: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Terminal",
  "extends": script$1,
  inheritAttrs: false,
  data: function data() {
    return {
      commandText: null,
      commands: []
    };
  },
  mounted: function mounted() {
    TerminalService.on("response", this.responseListener);
    this.$refs.input.focus();
  },
  updated: function updated() {
    this.$el.scrollTop = this.$el.scrollHeight;
  },
  beforeUnmount: function beforeUnmount() {
    TerminalService.off("response", this.responseListener);
  },
  methods: {
    onClick: function onClick() {
      this.$refs.input.focus();
    },
    onKeydown: function onKeydown(event) {
      if (event.key === "Enter" && this.commandText) {
        this.commands.push({
          text: this.commandText
        });
        TerminalService.emit("command", this.commandText);
        this.commandText = "";
      }
    },
    responseListener: function responseListener(response) {
      this.commands[this.commands.length - 1].response = response;
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    onClick: _cache[2] || (_cache[2] = function() {
      return $options.onClick && $options.onClick.apply($options, arguments);
    })
  }, _ctx.ptmi("root")), [_ctx.welcomeMessage ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("welcomeMessage")
  }, _ctx.ptm("welcomeMessage")), toDisplayString(_ctx.welcomeMessage), 17)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("commandList")
  }, _ctx.ptm("content")), [(openBlock(true), createElementBlock(Fragment, null, renderList($data.commands, function(command, i) {
    return openBlock(), createElementBlock("div", mergeProps({
      key: command.text + i.toString(),
      "class": _ctx.cx("command")
    }, {
      ref_for: true
    }, _ctx.ptm("commands")), [createElementVNode("span", mergeProps({
      "class": _ctx.cx("promptLabel")
    }, {
      ref_for: true
    }, _ctx.ptm("prompt")), toDisplayString(_ctx.prompt), 17), createElementVNode("span", mergeProps({
      "class": _ctx.cx("commandValue")
    }, {
      ref_for: true
    }, _ctx.ptm("command")), toDisplayString(command.text), 17), createElementVNode("div", mergeProps({
      "class": _ctx.cx("commandResponse"),
      "aria-live": "polite"
    }, {
      ref_for: true
    }, _ctx.ptm("response")), toDisplayString(command.response), 17)], 16);
  }), 128))], 16), createElementVNode("div", mergeProps({
    "class": _ctx.cx("prompt")
  }, _ctx.ptm("container")), [createElementVNode("span", mergeProps({
    "class": _ctx.cx("promptLabel")
  }, _ctx.ptm("prompt")), toDisplayString(_ctx.prompt), 17), withDirectives(createElementVNode("input", mergeProps({
    ref: "input",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function($event) {
      return $data.commandText = $event;
    }),
    "class": _ctx.cx("promptValue"),
    type: "text",
    autocomplete: "off",
    onKeydown: _cache[1] || (_cache[1] = function() {
      return $options.onKeydown && $options.onKeydown.apply($options, arguments);
    })
  }, _ctx.ptm("commandText")), null, 16), [[vModelText, $data.commandText]])], 16)], 16);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-C8HLagBH.mjs.map
