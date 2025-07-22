import { _ as _sfc_main$5 } from './SubHeader-C9ASyuh9.mjs';
import { _ as _sfc_main$6, t as truncateToTenth, h as hasEditPermission } from './authorization-utBDF56_.mjs';
import { _ as _sfc_main$7 } from './BaseSection-DH0Z2QsE.mjs';
import { defineComponent, resolveComponent, unref, withCtx, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, Fragment, renderList, createTextVNode, mergeProps, ref, watchEffect, useSSRContext, createElementBlock, createElementVNode } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import script$3 from './index-BpcQDK7p.mjs';
import script$4 from './index-CRAhKLp1.mjs';
import script$5 from './index-DKbFQW8l.mjs';
import script$6 from './index-IgvGNMhn.mjs';
import script$7 from './index-DXKszH9i.mjs';
import { s as script$8 } from './index-f6-L4oOs.mjs';
import { a as useRouter, e as useRoute, c as useGroupsStore, B as BaseStyle } from './server.mjs';
import tailwindcolors from 'tailwindcss/colors';
import { f as formatDateISO, b as getCurrentMonthStartDate, h as getDaysOfCurrentMonth, a as formatDayMonth } from './date-Bb1fHl5x.mjs';
import { storeToRefs } from 'pinia';
import { u as useExpenseMutation } from './useExpenseMutation-KIdN1JbK.mjs';
import { g as getGroupColor } from './getColor-DuOHLePg.mjs';
import { u as useBudget } from './useBudgetMutation-DF6nqViA.mjs';
import { u as useSeo } from './useSeo-DYN_ql2l.mjs';
import { u as useCategoryMutation } from './useCategoryMutation-BIAkPojI.mjs';
import script$2 from './index-IJ23DGgI.mjs';
import '@tanstack/vue-query';
import './budgetService-BqiLyGbY.mjs';
import 'zod';
import '@primeuix/styles/tabs';
import '@primeuix/utils';
import '@primeuix/utils/dom';
import './index-CFvji5m2.mjs';
import './index-BLn-pl6M.mjs';
import '@primeuix/utils/object';
import './index--ctLNnjM.mjs';
import './index-2dA4pXcI.mjs';
import './index-DpRrGZTR.mjs';
import '@primeuix/styled';
import '@primeuix/utils/uuid';
import '@primeuix/styles/ripple';
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
import 'node:url';
import 'ipx';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './index-C1vnj6fg.mjs';
import './index-ik-SlIj1.mjs';

var inlineStyles = {
  root: {
    position: "relative"
  }
};
var classes = {
  root: "p-chart"
};
var ChartStyle = BaseStyle.extend({
  name: "chart",
  classes,
  inlineStyles
});
var script$1 = {
  name: "BaseChart",
  "extends": script$8,
  props: {
    type: String,
    data: null,
    options: null,
    plugins: null,
    width: {
      type: Number,
      "default": 300
    },
    height: {
      type: Number,
      "default": 150
    },
    canvasProps: {
      type: null,
      "default": null
    }
  },
  style: ChartStyle,
  provide: function provide() {
    return {
      $pcChart: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Chart",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["select", "loaded"],
  chart: null,
  watch: {
    /*
     * Use deep watch to enable triggering watch for changes within structure
     * otherwise the entire data object needs to be replaced to trigger watch
     */
    data: {
      handler: function handler() {
        this.reinit();
      },
      deep: true
    },
    type: function type() {
      this.reinit();
    },
    options: function options() {
      this.reinit();
    }
  },
  mounted: function mounted() {
    this.initChart();
  },
  beforeUnmount: function beforeUnmount() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  },
  methods: {
    initChart: function initChart() {
      var _this = this;
      import('chart.js/auto').then(function(module) {
        if (_this.chart) {
          _this.chart.destroy();
          _this.chart = null;
        }
        if (module && module["default"]) {
          _this.chart = new module["default"](_this.$refs.canvas, {
            type: _this.type,
            data: _this.data,
            options: _this.options,
            plugins: _this.plugins
          });
        }
        _this.$emit("loaded", _this.chart);
      });
    },
    getCanvas: function getCanvas() {
      return this.$canvas;
    },
    getChart: function getChart() {
      return this.chart;
    },
    getBase64Image: function getBase64Image() {
      return this.chart.toBase64Image();
    },
    refresh: function refresh() {
      if (this.chart) {
        this.chart.update();
      }
    },
    reinit: function reinit() {
      this.initChart();
    },
    onCanvasClick: function onCanvasClick(event) {
      if (this.chart) {
        var element = this.chart.getElementsAtEventForMode(event, "nearest", {
          intersect: true
        }, false);
        var dataset = this.chart.getElementsAtEventForMode(event, "dataset", {
          intersect: true
        }, false);
        if (element && element[0] && dataset) {
          this.$emit("select", {
            originalEvent: event,
            element: element[0],
            dataset
          });
        }
      }
    },
    generateLegend: function generateLegend() {
      if (this.chart) {
        return this.chart.generateLegend();
      }
    }
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
var _hoisted_1 = ["width", "height"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    style: _ctx.sx("root")
  }, _ctx.ptmi("root")), [createElementVNode("canvas", mergeProps({
    ref: "canvas",
    width: _ctx.width,
    height: _ctx.height,
    onClick: _cache[0] || (_cache[0] = function($event) {
      return $options.onCanvasClick($event);
    })
  }, _objectSpread(_objectSpread({}, _ctx.canvasProps), _ctx.ptm("canvas"))), null, 16, _hoisted_1)], 16);
}
script.render = render;
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ChartCategory",
  __ssrInlineRender: true,
  props: {
    budgets: {}
  },
  setup(__props) {
    const getTailwindBgColor = (colorName) => {
      return "#000000";
    };
    const props = __props;
    const chartData = ref({
      labels: props.budgets.map((budget) => budget.category.label),
      datasets: [
        {
          data: props.budgets.map((budget) => budget.amount),
          backgroundColor: props.budgets.map(
            (budget) => getTailwindBgColor(`${budget.category.color}-400`)
          ),
          hoverBackgroundColor: props.budgets.map(
            (budget) => getTailwindBgColor(`${budget.category.color}-600`)
          )
        }
      ]
    });
    const chartOptions = ref({
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: tailwindcolors.gray[900]
          }
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(script), mergeProps({
        type: "pie",
        data: chartData.value,
        options: chartOptions.value,
        class: "w-[40rem] flex justify-center"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/budget/ChartCategory.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChartCategoryBalance",
  __ssrInlineRender: true,
  props: {
    budgets: {}
  },
  setup(__props) {
    const getTailwindBgColor = (colorName) => {
      return "#000000";
    };
    const props = __props;
    const groupedByCategory = props.budgets.reduce(
      (acc, budget) => {
        const id = budget.category.id;
        if (!acc[id]) {
          acc[id] = {
            label: budget.category.label || "Sans nom",
            color: budget.category.color,
            total: 0
          };
        }
        acc[id].total += budget.amount;
        return acc;
      },
      {}
    );
    const chartData = ref({
      labels: props.budgets.map((budget) => budget.category.label),
      datasets: [
        {
          label: "Object",
          data: Object.values(groupedByCategory).map((cat) => cat.total),
          backgroundColor: Object.values(groupedByCategory).map(
            (cat) => getTailwindBgColor(`${cat.color}-400`)
          )
        },
        {
          label: "R\xE9el",
          data: Object.values(groupedByCategory).map(() => 100),
          backgroundColor: Object.values(groupedByCategory).map(
            (cat) => getTailwindBgColor(`${cat.color}-200`)
          )
        }
      ]
    });
    const chartOptions = ref({
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: tailwindcolors.gray[900]
          }
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(script), mergeProps({
        type: "bar",
        data: chartData.value,
        options: chartOptions.value,
        class: "w-[40rem] flex justify-center"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/budget/ChartCategoryBalance.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ChartLinearEvolution",
  __ssrInlineRender: true,
  setup(__props) {
    const { group } = storeToRefs(useGroupsStore());
    const days = getDaysOfCurrentMonth();
    const labels = days.map((d) => formatDayMonth(d));
    const { expensesByMonthAndGroup: expenses } = useExpenseMutation();
    const chartData = ref({
      labels: [],
      datasets: []
    });
    const chartOptions = ref({
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: "#1f2937"
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#6b7280",
            maxRotation: 45,
            minRotation: 20,
            autoSkip: true,
            maxTicksLimit: 6
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: "#6b7280"
          }
        }
      },
      elements: {
        point: {
          radius: 0
        }
      }
    });
    watchEffect(() => {
      var _a;
      if (!((_a = group.value) == null ? void 0 : _a.categories) || !expenses.value) return;
      const filteredCategories = group.value.categories.filter(
        (category) => {
          var _a2;
          return Object.values((_a2 = expenses.value) != null ? _a2 : {}).some(
            (expenseArray) => expenseArray.some((e) => e.category.id === category.id)
          );
        }
      );
      const cumulativeByCategory = {};
      const totalData = new Array(labels.length).fill(0);
      filteredCategories.forEach((cat) => {
        cumulativeByCategory[cat.id] = new Array(labels.length).fill(0);
      });
      days.forEach((date, index) => {
        var _a3;
        var _a2;
        const dateKey = date.toISOString().slice(0, 10);
        const dayExpenses = (_a3 = (_a2 = expenses.value) == null ? void 0 : _a2[dateKey]) != null ? _a3 : [];
        let totalForDay = 0;
        dayExpenses.forEach((expense) => {
          const catId = expense.category.id;
          const amount = expense.amount;
          const prev = index > 0 ? cumulativeByCategory[catId][index - 1] : 0;
          cumulativeByCategory[catId][index] = prev + amount;
          totalForDay += amount;
        });
        filteredCategories.forEach((cat) => {
          if (!dayExpenses.some((e) => e.category.id === cat.id)) {
            cumulativeByCategory[cat.id][index] = index > 0 ? cumulativeByCategory[cat.id][index - 1] : 0;
          }
        });
        totalData[index] = (index > 0 ? totalData[index - 1] : 0) + totalForDay;
      });
      const datasets = [
        {
          label: "Total des d\xE9penses",
          data: totalData,
          borderColor: "#111827",
          backgroundColor: "#111827",
          borderWidth: 4,
          tension: 0.05,
          fill: false
        },
        ...filteredCategories.map((cat) => {
          var _a2;
          return {
            label: (_a2 = cat.label) != null ? _a2 : `Cat\xE9gorie ${cat.id}`,
            data: cumulativeByCategory[cat.id],
            borderColor: cat.color,
            backgroundColor: cat.color,
            borderWidth: 2,
            tension: 0.05,
            fill: false
          };
        })
      ];
      chartData.value = {
        labels,
        datasets
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(script), mergeProps({
        type: "line",
        data: unref(chartData),
        options: unref(chartOptions),
        class: "w-[40rem] flex justify-center"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/budget/ChartLinearEvolution.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChartLayout",
  __ssrInlineRender: true,
  props: {
    budgets: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(script$3), mergeProps({ value: "0" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(script$4), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(script$5), { value: "0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Budget par cat\xE9gories`);
                      } else {
                        return [
                          createTextVNode("Budget par cat\xE9gories")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(script$5), { value: "1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Initial / R\xE9alit\xE9`);
                      } else {
                        return [
                          createTextVNode("Initial / R\xE9alit\xE9")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(script$5), { value: "2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Evolution des d\xE9penses`);
                      } else {
                        return [
                          createTextVNode("Evolution des d\xE9penses")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(script$5), { value: "0" }, {
                      default: withCtx(() => [
                        createTextVNode("Budget par cat\xE9gories")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(script$5), { value: "1" }, {
                      default: withCtx(() => [
                        createTextVNode("Initial / R\xE9alit\xE9")
                      ]),
                      _: 1
                    }),
                    createVNode(unref(script$5), { value: "2" }, {
                      default: withCtx(() => [
                        createTextVNode("Evolution des d\xE9penses")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(script$6), { class: "full" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(script$7), {
                    value: "0",
                    class: "flex justify-center h-64 w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$4, {
                          budgets: _ctx.budgets.filter(
                            (budget) => budget.monthStart === unref(formatDateISO)(unref(getCurrentMonthStartDate)())
                          )
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$4, {
                            budgets: _ctx.budgets.filter(
                              (budget) => budget.monthStart === unref(formatDateISO)(unref(getCurrentMonthStartDate)())
                            )
                          }, null, 8, ["budgets"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(script$7), {
                    value: "1",
                    class: "flex justify-center h-64 w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$3, { budgets: _ctx.budgets }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$3, { budgets: _ctx.budgets }, null, 8, ["budgets"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(script$7), {
                    value: "2",
                    class: "flex justify-center h-64 w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$2, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$2)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(script$7), {
                      value: "0",
                      class: "flex justify-center h-64 w-full"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$4, {
                          budgets: _ctx.budgets.filter(
                            (budget) => budget.monthStart === unref(formatDateISO)(unref(getCurrentMonthStartDate)())
                          )
                        }, null, 8, ["budgets"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(script$7), {
                      value: "1",
                      class: "flex justify-center h-64 w-full"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$3, { budgets: _ctx.budgets }, null, 8, ["budgets"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(script$7), {
                      value: "2",
                      class: "flex justify-center h-64 w-full"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$2)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(script$4), null, {
                default: withCtx(() => [
                  createVNode(unref(script$5), { value: "0" }, {
                    default: withCtx(() => [
                      createTextVNode("Budget par cat\xE9gories")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(script$5), { value: "1" }, {
                    default: withCtx(() => [
                      createTextVNode("Initial / R\xE9alit\xE9")
                    ]),
                    _: 1
                  }),
                  createVNode(unref(script$5), { value: "2" }, {
                    default: withCtx(() => [
                      createTextVNode("Evolution des d\xE9penses")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(script$6), { class: "full" }, {
                default: withCtx(() => [
                  createVNode(unref(script$7), {
                    value: "0",
                    class: "flex justify-center h-64 w-full"
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$4, {
                        budgets: _ctx.budgets.filter(
                          (budget) => budget.monthStart === unref(formatDateISO)(unref(getCurrentMonthStartDate)())
                        )
                      }, null, 8, ["budgets"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(script$7), {
                    value: "1",
                    class: "flex justify-center h-64 w-full"
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$3, { budgets: _ctx.budgets }, null, 8, ["budgets"])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(script$7), {
                    value: "2",
                    class: "flex justify-center h-64 w-full"
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$2)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/budget/ChartLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    var _a2;
    var _a, _b, _c, _d, _e;
    const router = useRouter();
    const route = useRoute();
    const { group_id } = route.params;
    const { remainingBudget } = useBudget();
    const { group } = storeToRefs(useGroupsStore());
    useSeo({
      title: `Suivi du budget du groupe ${(_a = group.value) == null ? void 0 : _a.name}`,
      description: `Visualisez, g\xE9rez et optimisez le budget mensuel et les d\xE9penses par cat\xE9gorie du groupe ${(_b = group.value) == null ? void 0 : _b.name}. Gardez le contr\xF4le sur vos finances partag\xE9es.`,
      ogTitle: `Budget du groupe ${(_c = group.value) == null ? void 0 : _c.name}`,
      ogDescription: `Suivi complet du budget du groupe ${(_d = group.value) == null ? void 0 : _d.name} : r\xE9partition par cat\xE9gorie, d\xE9penses mensuelles et gestion partag\xE9e des finances.`,
      image: (_a2 = (_e = group.value) == null ? void 0 : _e.picture) != null ? _a2 : void 0
    });
    const { categories } = useCategoryMutation();
    return (_ctx, _push, _parent, _attrs) => {
      var _a22, _b2, _c2;
      const _component_SubHeader = _sfc_main$5;
      const _component_RemainingBudget = _sfc_main$6;
      const _component_BaseSection = _sfc_main$7;
      const _component_router_link = resolveComponent("router-link");
      const _component_ChartLayout = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SubHeader, {
        label: "Budget du mois",
        color: (_a22 = unref(group)) == null ? void 0 : _a22.color,
        to: `/groups/${(_b2 = unref(group)) == null ? void 0 : _b2.id}`
      }, null, _parent));
      if (unref(group)) {
        _push(`<div class="flex flex-col gap-10"><section class="flex justify-between"><div class="flex gap-5 w-full">`);
        _push(ssrRenderComponent(_component_RemainingBudget, null, null, _parent));
        _push(ssrRenderComponent(_component_RemainingBudget, {
          label: "Budget initial",
          "initial-budget": ""
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(unref(script$2), {
          icon: "pi pi-eye",
          label: "R\xE9cap des d\xE9penses",
          size: "small",
          class: [("getGroupColor" in _ctx ? _ctx.getGroupColor : unref(getGroupColor))({ color: (_c2 = unref(group)) == null ? void 0 : _c2.color })],
          onClick: ($event) => unref(router).push(`/groups/${unref(group_id)}/budget/forecast`)
        }, null, _parent));
        _push(`</section>`);
        if (unref(categories) && unref(categories).length > 0) {
          _push(ssrRenderComponent(_component_BaseSection, { label: "Budget du mois par cat\xE9gories" }, {
            header: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a3, _b3;
              if (_push2) {
                if (("hasEditPermission" in _ctx ? _ctx.hasEditPermission : unref(hasEditPermission))(unref(group))) {
                  _push2(ssrRenderComponent(unref(script$2), {
                    icon: "pi pi-pencil",
                    label: "Modifier les budgets",
                    size: "small",
                    class: [("getGroupColor" in _ctx ? _ctx.getGroupColor : unref(getGroupColor))({ color: (_a3 = unref(group)) == null ? void 0 : _a3.color })],
                    onClick: ($event) => unref(router).push(`/groups/${unref(group_id)}/budget/edit`)
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  ("hasEditPermission" in _ctx ? _ctx.hasEditPermission : unref(hasEditPermission))(unref(group)) ? (openBlock(), createBlock(unref(script$2), {
                    key: 0,
                    icon: "pi pi-pencil",
                    label: "Modifier les budgets",
                    size: "small",
                    class: [("getGroupColor" in _ctx ? _ctx.getGroupColor : unref(getGroupColor))({ color: (_b3 = unref(group)) == null ? void 0 : _b3.color })],
                    onClick: ($event) => unref(router).push(`/groups/${unref(group_id)}/budget/edit`)
                  }, null, 8, ["class", "onClick"])) : createCommentVNode("", true)
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="grid gap-2 grid-cols-2 md:grid-cols-3"${_scopeId}><!--[-->`);
                ssrRenderList(unref(categories), (category, i) => {
                  _push2(ssrRenderComponent(_component_router_link, {
                    key: i,
                    to: `/groups/${unref(group_id)}/category/${category.id}`,
                    class: ["flex justify-between rounded-full px-4 py-3", `bg-${category.color}-50 hover:bg-${category.color}-100 text-${category.color}-800`]
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      var _a4, _b4;
                      var _a3, _b3;
                      if (_push3) {
                        _push3(`<p${_scopeId2}>${ssrInterpolate(category.label !== "default" ? category.label : "Autres")}</p>`);
                        if (unref(remainingBudget)) {
                          _push3(`<p${_scopeId2}>${ssrInterpolate(("truncateToTenth" in _ctx ? _ctx.truncateToTenth : unref(truncateToTenth))(
                            (_a4 = (_a3 = unref(remainingBudget).find(
                              (budget) => budget.category.id === category.id && budget.monthStart === ("formatDateISO" in _ctx ? _ctx.formatDateISO : unref(formatDateISO))(("getCurrentMonthStartDate" in _ctx ? _ctx.getCurrentMonthStartDate : unref(getCurrentMonthStartDate))())
                            )) == null ? void 0 : _a3.amount) != null ? _a4 : 0
                          ))} \u20AC </p>`);
                        } else {
                          _push3(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode("p", null, toDisplayString(category.label !== "default" ? category.label : "Autres"), 1),
                          unref(remainingBudget) ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(("truncateToTenth" in _ctx ? _ctx.truncateToTenth : unref(truncateToTenth))(
                            (_b4 = (_b3 = unref(remainingBudget).find(
                              (budget) => budget.category.id === category.id && budget.monthStart === ("formatDateISO" in _ctx ? _ctx.formatDateISO : unref(formatDateISO))(("getCurrentMonthStartDate" in _ctx ? _ctx.getCurrentMonthStartDate : unref(getCurrentMonthStartDate))())
                            )) == null ? void 0 : _b3.amount) != null ? _b4 : 0
                          )) + " \u20AC ", 1)) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                return [
                  createVNode("div", { class: "grid gap-2 grid-cols-2 md:grid-cols-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category, i) => {
                      return openBlock(), createBlock(_component_router_link, {
                        key: i,
                        to: `/groups/${unref(group_id)}/category/${category.id}`,
                        class: ["flex justify-between rounded-full px-4 py-3", `bg-${category.color}-50 hover:bg-${category.color}-100 text-${category.color}-800`]
                      }, {
                        default: withCtx(() => {
                          var _a4;
                          var _a3;
                          return [
                            createVNode("p", null, toDisplayString(category.label !== "default" ? category.label : "Autres"), 1),
                            unref(remainingBudget) ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(("truncateToTenth" in _ctx ? _ctx.truncateToTenth : unref(truncateToTenth))(
                              (_a4 = (_a3 = unref(remainingBudget).find(
                                (budget) => budget.category.id === category.id && budget.monthStart === ("formatDateISO" in _ctx ? _ctx.formatDateISO : unref(formatDateISO))(("getCurrentMonthStartDate" in _ctx ? _ctx.getCurrentMonthStartDate : unref(getCurrentMonthStartDate))())
                              )) == null ? void 0 : _a3.amount) != null ? _a4 : 0
                            )) + " \u20AC ", 1)) : createCommentVNode("", true)
                          ];
                        }),
                        _: 2
                      }, 1032, ["to", "class"]);
                    }), 128))
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(ssrRenderComponent(unref(script$2), { size: "small" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Cr\xE9er vos budgets`);
              } else {
                return [
                  createTextVNode("Cr\xE9er vos budgets")
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        if (unref(remainingBudget) && unref(remainingBudget).length > 0) {
          _push(ssrRenderComponent(_component_ChartLayout, {
            budgets: unref(remainingBudget),
            group_id: unref(group_id)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/groups/[group_id]/budget/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BVTeijXm.mjs.map
