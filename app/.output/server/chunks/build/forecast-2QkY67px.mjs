import { _ as _sfc_main$5 } from './SubHeader-C9ASyuh9.mjs';
import { defineComponent, unref, useModel, ref, watch, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, isRef, createSlots, toRef, computed, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _sfc_main$6 } from './BaseSection-DH0Z2QsE.mjs';
import { u as useBudget } from './useBudgetMutation-DtgGIAEp.mjs';
import { f as useRoute, c as useGroupsStore } from './server.mjs';
import { storeToRefs } from 'pinia';
import { u as useCategoryMutation } from './useCategoryMutation-DB35OXwz.mjs';
import script from './index-D8VJ77Tq.mjs';
import script$1 from './index-C2-6mTxS.mjs';
import { _ as _sfc_main$7 } from './ExpenseCardComponent-DBo2ngfB.mjs';
import { a as getCurrentMonthStartDate, e as getFirstDayOfYear, g as getFirstDayOfMonth, f as formatDateISO, c as formatDayMonth } from './date-Bb1fHl5x.mjs';
import { a as getColor } from './getColor-DuOHLePg.mjs';
import { u as useExpenseMutation } from './useExpenseMutation-B9-DRSqA.mjs';
import { u as useSeo } from './useSeo-DW2KWPaD.mjs';
import '@tanstack/vue-query';
import './budgetService-ChuA15Ln.mjs';
import 'zod';
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
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import 'node:url';
import 'ipx';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import '@primeuix/utils/uuid';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import '@primeuix/utils/zindex';
import './index-UnQD5FIJ.mjs';
import './index-CmU8UmpY.mjs';
import './index-BW8vgcWI.mjs';
import './index-BCBVIvNq.mjs';
import './index-BJHeCye1.mjs';
import './index-CArJ0zZr.mjs';
import './index-BJJLwLad.mjs';
import './index-wMdTEZV0.mjs';
import './index-rAVNvoJo.mjs';
import './index-D21vFaAL.mjs';
import './index-Cf3jdIN0.mjs';
import './index-CMg9969q.mjs';
import './index-SKHn8XPG.mjs';
import './index-v2M6uT44.mjs';
import './index-N-SFyyHw.mjs';
import './index-COKAxpN0.mjs';
import './index-CJZjQYFs.mjs';
import './CategoryLabel-BTL_oUfU.mjs';
import './default_avatar-ixvbQY52.mjs';
import './index-B3l8jI1_.mjs';
import './index-BX2TxoDU.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ItemYearBudget",
  __ssrInlineRender: true,
  props: {
    month: {},
    selectedCategory: {},
    year: {}
  },
  setup(__props) {
    const props = __props;
    const yearRef = toRef(props, "year");
    const selectedCategoryRef = toRef(props, "selectedCategory");
    const { month } = props;
    const { remainingBudgetInYear, getRemainingStyle } = useBudget(yearRef);
    const yearString = computed(() => `${yearRef.value.getFullYear()}-${month[0]}`);
    const remaining = computed(
      () => {
        var _a2, _b2;
        var _a, _b, _c, _d, _e;
        return selectedCategoryRef.value ? (_a2 = (_c = (_b = (_a = remainingBudgetInYear == null ? void 0 : remainingBudgetInYear.value) == null ? void 0 : _a[yearString.value]) == null ? void 0 : _b.categories.find(
          (category) => {
            var _a22;
            return category.id === ((_a22 = selectedCategoryRef.value) == null ? void 0 : _a22.id);
          }
        )) == null ? void 0 : _c.remaining) != null ? _a2 : 0 : (_b2 = (_e = (_d = remainingBudgetInYear == null ? void 0 : remainingBudgetInYear.value) == null ? void 0 : _d[yearString.value]) == null ? void 0 : _e.remaining.amount) != null ? _b2 : 0;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->${ssrInterpolate(unref(month)[1])} <p class="${ssrRenderClass(unref(getRemainingStyle)(remaining.value))}">${ssrInterpolate(remaining.value)} \u20AC</p><!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/budget/budgetForecast/Year/ItemYearBudget.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "YearBudget",
  __ssrInlineRender: true,
  props: {
    "selectedCategory": {},
    "selectedCategoryModifiers": {}
  },
  emits: ["update:selectedCategory"],
  setup(__props) {
    const selectedCategory = useModel(__props, "selectedCategory");
    const year = ref(/* @__PURE__ */ new Date());
    const { group } = storeToRefs(useGroupsStore());
    const { refetch, months } = useBudget(year);
    const { categories } = useCategoryMutation();
    watch(year, (newYear) => {
      if (!newYear) return;
      refetch();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$6, mergeProps({ label: "Budget restant mois par mois" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            if (unref(categories) && unref(categories).filter((category) => category.label !== "default").length > 0) {
              _push2(ssrRenderComponent(unref(script$1), {
                modelValue: selectedCategory.value,
                "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                editable: "",
                "show-clear": "",
                options: (_a = unref(categories)) == null ? void 0 : _a.filter((category) => category.label !== "default"),
                "option-label": "label",
                placeholder: "Choisir une cat\xE9gorie",
                class: ["ml-auto md:w-56", [
                  `bg-${(_b = selectedCategory.value) == null ? void 0 : _b.color}-50`,
                  `hover:bg-${(_c = selectedCategory.value) == null ? void 0 : _c.color}-100`
                ]],
                "label-class": ["capitalize", `text-${(_d = selectedCategory.value) == null ? void 0 : _d.color}-600`]
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(categories) && unref(categories).filter((category) => category.label !== "default").length > 0 ? (openBlock(), createBlock(unref(script$1), {
                key: 0,
                modelValue: selectedCategory.value,
                "onUpdate:modelValue": ($event) => selectedCategory.value = $event,
                editable: "",
                "show-clear": "",
                options: (_e = unref(categories)) == null ? void 0 : _e.filter((category) => category.label !== "default"),
                "option-label": "label",
                placeholder: "Choisir une cat\xE9gorie",
                class: ["ml-auto md:w-56", [
                  `bg-${(_f = selectedCategory.value) == null ? void 0 : _f.color}-50`,
                  `hover:bg-${(_g = selectedCategory.value) == null ? void 0 : _g.color}-100`
                ]],
                "label-class": ["capitalize", `text-${(_h = selectedCategory.value) == null ? void 0 : _h.color}-600`]
              }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "class", "label-class"])) : createCommentVNode("", true)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(script), {
              modelValue: year.value,
              "onUpdate:modelValue": ($event) => year.value = $event,
              view: "year",
              "date-format": "yy",
              class: "w-64 mx-auto mt-3",
              "input-class": "text-center"
            }, null, _parent2, _scopeId));
            if (unref(group)) {
              _push2(`<section class="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-1"${_scopeId}><!--[-->`);
              ssrRenderList(Object.entries(unref(months)), (month, i) => {
                _push2(`<div class="item"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$4, {
                  month,
                  year: year.value,
                  "selected-category": selectedCategory.value
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></section>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(unref(script), {
                modelValue: year.value,
                "onUpdate:modelValue": ($event) => year.value = $event,
                view: "year",
                "date-format": "yy",
                class: "w-64 mx-auto mt-3",
                "input-class": "text-center"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              unref(group) ? (openBlock(), createBlock("section", {
                key: 0,
                class: "grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-1"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(Object.entries(unref(months)), (month, i) => {
                  return openBlock(), createBlock("div", {
                    key: i,
                    class: "item"
                  }, [
                    createVNode(_sfc_main$4, {
                      month,
                      year: year.value,
                      "selected-category": selectedCategory.value
                    }, null, 8, ["month", "year", "selected-category"])
                  ]);
                }), 128))
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/budget/budgetForecast/Year/YearBudget.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DayBudget",
  __ssrInlineRender: true,
  props: {
    date: {},
    expensesInDay: {},
    color: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({
        class: _ctx.expensesInDay && _ctx.expensesInDay.length > 0 && unref(getColor)({ color: _ctx.color, text: 700 }).text
      }, _attrs))}>${ssrInterpolate(_ctx.date.day)}</p>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/budget/budgetForecast/DayBudget.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MonthBudget",
  __ssrInlineRender: true,
  setup(__props) {
    const { group } = storeToRefs(useGroupsStore());
    const currentDate = ref(null);
    const currentMonth = ref(getCurrentMonthStartDate());
    const {
      expensesByMonthAndGroup: expenses,
      refetchByMonthAndGroup: refetchExpenses
    } = useExpenseMutation();
    watch(currentMonth, () => {
      refetchExpenses();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$6, mergeProps({ label: "Les d\xE9penses pass\xE9s et futurs" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col gap-10"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script), {
              modelValue: unref(currentDate),
              "onUpdate:modelValue": ($event) => isRef(currentDate) ? currentDate.value = $event : null,
              inline: "",
              "panel-class": "border-none shadow rounded-xl ",
              class: "w-full",
              onMonthChange: (e) => {
                currentMonth.value = unref(getFirstDayOfMonth)(new Date(e.year, e.month - 1));
              },
              onYearChange: (e) => {
                currentMonth.value = unref(getFirstDayOfYear)(new Date(e.year, e.month - 1));
              }
            }, createSlots({ _: 2 }, [
              unref(expenses) ? {
                name: "date",
                fn: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2;
                  var _a, _b, _c, _d;
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$2, {
                      date: slotProps.date,
                      "expenses-in-day": (_a = unref(expenses)) == null ? void 0 : _a[`${slotProps.date.year}/${slotProps.date.day}/${slotProps.date.month}`],
                      color: (_a2 = (_b = unref(group)) == null ? void 0 : _b.color) != null ? _a2 : "gray"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$2, {
                        date: slotProps.date,
                        "expenses-in-day": (_c = unref(expenses)) == null ? void 0 : _c[`${slotProps.date.year}/${slotProps.date.day}/${slotProps.date.month}`],
                        color: (_b2 = (_d = unref(group)) == null ? void 0 : _d.color) != null ? _b2 : "gray"
                      }, null, 8, ["date", "expenses-in-day", "color"])
                    ];
                  }
                }),
                key: "0"
              } : void 0
            ]), _parent2, _scopeId));
            if (unref(group) && unref(currentDate) && unref(expenses) && unref(expenses)[unref(formatDateISO)(unref(currentDate))]) {
              _push2(ssrRenderComponent(_sfc_main$6, {
                label: unref(formatDayMonth)(unref(currentDate))
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(expenses)[unref(formatDateISO)(unref(currentDate))], (expense) => {
                      var _a;
                      _push3(ssrRenderComponent(_sfc_main$7, {
                        key: expense.id,
                        expense,
                        "group-id": (_a = unref(group)) == null ? void 0 : _a.id
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(expenses)[unref(formatDateISO)(unref(currentDate))], (expense) => {
                          var _a;
                          return openBlock(), createBlock(_sfc_main$7, {
                            key: expense.id,
                            expense,
                            "group-id": (_a = unref(group)) == null ? void 0 : _a.id
                          }, null, 8, ["expense", "group-id"]);
                        }), 128))
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col gap-10" }, [
                createVNode(unref(script), {
                  modelValue: unref(currentDate),
                  "onUpdate:modelValue": ($event) => isRef(currentDate) ? currentDate.value = $event : null,
                  inline: "",
                  "panel-class": "border-none shadow rounded-xl ",
                  class: "w-full",
                  onMonthChange: (e) => {
                    currentMonth.value = unref(getFirstDayOfMonth)(new Date(e.year, e.month - 1));
                  },
                  onYearChange: (e) => {
                    currentMonth.value = unref(getFirstDayOfYear)(new Date(e.year, e.month - 1));
                  }
                }, createSlots({ _: 2 }, [
                  unref(expenses) ? {
                    name: "date",
                    fn: withCtx((slotProps) => {
                      var _a2;
                      var _a, _b;
                      return [
                        createVNode(_sfc_main$2, {
                          date: slotProps.date,
                          "expenses-in-day": (_a = unref(expenses)) == null ? void 0 : _a[`${slotProps.date.year}/${slotProps.date.day}/${slotProps.date.month}`],
                          color: (_a2 = (_b = unref(group)) == null ? void 0 : _b.color) != null ? _a2 : "gray"
                        }, null, 8, ["date", "expenses-in-day", "color"])
                      ];
                    }),
                    key: "0"
                  } : void 0
                ]), 1032, ["modelValue", "onUpdate:modelValue", "onMonthChange", "onYearChange"]),
                unref(group) && unref(currentDate) && unref(expenses) && unref(expenses)[unref(formatDateISO)(unref(currentDate))] ? (openBlock(), createBlock(_sfc_main$6, {
                  key: 0,
                  label: unref(formatDayMonth)(unref(currentDate))
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(expenses)[unref(formatDateISO)(unref(currentDate))], (expense) => {
                        var _a;
                        return openBlock(), createBlock(_sfc_main$7, {
                          key: expense.id,
                          expense,
                          "group-id": (_a = unref(group)) == null ? void 0 : _a.id
                        }, null, 8, ["expense", "group-id"]);
                      }), 128))
                    ])
                  ]),
                  _: 1
                }, 8, ["label"])) : createCommentVNode("", true)
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/budget/budgetForecast/MonthBudget.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "forecast",
  __ssrInlineRender: true,
  setup(__props) {
    var _a2;
    var _a, _b, _c, _d, _e;
    const route = useRoute();
    const { group_id } = route.params;
    const { group } = storeToRefs(useGroupsStore());
    useSeo({
      title: `R\xE9capitulatif du budget du groupe ${(_a = group.value) == null ? void 0 : _a.name}`,
      description: `Consultez le bilan budg\xE9taire du groupe ${(_b = group.value) == null ? void 0 : _b.name} : d\xE9penses par cat\xE9gorie, \xE9carts, soldes et \xE9volution mensuelle.`,
      ogTitle: `Bilan du budget - ${(_c = group.value) == null ? void 0 : _c.name}`,
      ogDescription: `Analyse compl\xE8te du budget du groupe ${(_d = group.value) == null ? void 0 : _d.name}. Visualisez les totaux, les \xE9carts et la r\xE9partition des d\xE9penses pour une meilleure gestion collective.`,
      image: (_a2 = (_e = group.value) == null ? void 0 : _e.picture) != null ? _a2 : void 0
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a22;
      const _component_SubHeader = _sfc_main$5;
      const _component_YearBudget = _sfc_main$3;
      const _component_MonthBudget = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SubHeader, {
        label: "R\xE9cap budgets",
        color: (_a22 = unref(group)) == null ? void 0 : _a22.color,
        to: `/groups/${unref(group_id)}/budget`
      }, null, _parent));
      _push(`<div class="flex flex-col gap-10">`);
      _push(ssrRenderComponent(_component_YearBudget, { group_id: unref(group_id) }, null, _parent));
      _push(ssrRenderComponent(_component_MonthBudget, { "group-id": unref(group_id) }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/groups/[group_id]/budget/forecast.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=forecast-2QkY67px.mjs.map
