import { cn } from '@primeuix/utils';
import { resolveFieldData } from '@primeuix/utils/object';
import { B as BaseStyle, g as script$6 } from './server.mjs';
import { style } from '@primeuix/styles/timeline';
import { createElementBlock, openBlock, mergeProps, Fragment, renderList, createElementVNode, renderSlot, createCommentVNode } from 'vue';
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

var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-timeline p-component", "p-timeline-" + props.align, "p-timeline-" + props.layout];
  },
  event: "p-timeline-event",
  eventOpposite: "p-timeline-event-opposite",
  eventSeparator: "p-timeline-event-separator",
  eventMarker: "p-timeline-event-marker",
  eventConnector: "p-timeline-event-connector",
  eventContent: "p-timeline-event-content"
};
var TimelineStyle = BaseStyle.extend({
  name: "timeline",
  style,
  classes
});
var script$1 = {
  name: "BaseTimeline",
  "extends": script$6,
  props: {
    value: null,
    align: {
      mode: String,
      "default": "left"
    },
    layout: {
      mode: String,
      "default": "vertical"
    },
    dataKey: null
  },
  style: TimelineStyle,
  provide: function provide() {
    return {
      $pcTimeline: this,
      $parentInstance: this
    };
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
var script = {
  name: "Timeline",
  "extends": script$1,
  inheritAttrs: false,
  methods: {
    getKey: function getKey(item, index) {
      return this.dataKey ? resolveFieldData(item, this.dataKey) : index;
    },
    getPTOptions: function getPTOptions(key, index) {
      return this.ptm(key, {
        context: {
          index,
          count: this.value.length
        }
      });
    }
  },
  computed: {
    dataP: function dataP() {
      return cn(_defineProperty(_defineProperty({}, this.layout, this.layout), this.align, this.align));
    }
  }
};
var _hoisted_1 = ["data-p"];
var _hoisted_2 = ["data-p"];
var _hoisted_3 = ["data-p"];
var _hoisted_4 = ["data-p"];
var _hoisted_5 = ["data-p"];
var _hoisted_6 = ["data-p"];
var _hoisted_7 = ["data-p"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root"), {
    "data-p": $options.dataP
  }), [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.value, function(item, index) {
    return openBlock(), createElementBlock("div", mergeProps({
      key: $options.getKey(item, index),
      "class": _ctx.cx("event")
    }, {
      ref_for: true
    }, $options.getPTOptions("event", index), {
      "data-p": $options.dataP
    }), [createElementVNode("div", mergeProps({
      "class": _ctx.cx("eventOpposite", {
        index
      })
    }, {
      ref_for: true
    }, $options.getPTOptions("eventOpposite", index), {
      "data-p": $options.dataP
    }), [renderSlot(_ctx.$slots, "opposite", {
      item,
      index
    })], 16, _hoisted_3), createElementVNode("div", mergeProps({
      "class": _ctx.cx("eventSeparator")
    }, {
      ref_for: true
    }, $options.getPTOptions("eventSeparator", index), {
      "data-p": $options.dataP
    }), [renderSlot(_ctx.$slots, "marker", {
      item,
      index
    }, function() {
      return [createElementVNode("div", mergeProps({
        "class": _ctx.cx("eventMarker")
      }, {
        ref_for: true
      }, $options.getPTOptions("eventMarker", index), {
        "data-p": $options.dataP
      }), null, 16, _hoisted_5)];
    }), index !== _ctx.value.length - 1 ? renderSlot(_ctx.$slots, "connector", {
      key: 0,
      item,
      index
    }, function() {
      return [createElementVNode("div", mergeProps({
        "class": _ctx.cx("eventConnector")
      }, {
        ref_for: true
      }, $options.getPTOptions("eventConnector", index), {
        "data-p": $options.dataP
      }), null, 16, _hoisted_6)];
    }) : createCommentVNode("", true)], 16, _hoisted_4), createElementVNode("div", mergeProps({
      "class": _ctx.cx("eventContent")
    }, {
      ref_for: true
    }, $options.getPTOptions("eventContent", index), {
      "data-p": $options.dataP
    }), [renderSlot(_ctx.$slots, "content", {
      item,
      index
    })], 16, _hoisted_7)], 16, _hoisted_2);
  }), 128))], 16, _hoisted_1);
}
script.render = render;

export { script as default };
//# sourceMappingURL=index-BM3q1YGm.mjs.map
