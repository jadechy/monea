import { _ as _sfc_main$2 } from './SubHeader-C9ASyuh9.mjs';
import { _ as _sfc_main$3 } from './WrapperInput-DUkpYxM9.mjs';
import { defineComponent, ref, watch, computed, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import script$4 from './index-C4LGfKx7.mjs';
import { g as getGroupColor } from './getColor-DuOHLePg.mjs';
import { u as useBudget } from './useBudgetMutation-MqvL_g2d.mjs';
import { f as useRoute, c as useGroupsStore } from './server.mjs';
import script$1 from './index-CkuOTgVv.mjs';
import { zodResolver } from '@primeuix/forms/resolvers/zod';
import { N as NewBudgetSchemaResolver } from './budgetService-_Nf4nPLI.mjs';
import { u as useSeo } from './useSeo-DF63g3st.mjs';
import { storeToRefs } from 'pinia';
import { u as useCategoryMutation } from './useCategoryMutation-UgP78f7I.mjs';
import { f as formatDateISO, g as getFirstDayOfMonth } from './date-Bb1fHl5x.mjs';
import script from './index-ByyIQ08N.mjs';
import script$2 from './index-D45wcmtf.mjs';
import script$3 from './index-IJ23DGgI.mjs';
import './index-B95qXBXP.mjs';
import './index-f6-L4oOs.mjs';
import '@primeuix/styled';
import '@primeuix/utils/dom';
import '@primeuix/utils/object';
import '@primeuix/styles/floatlabel';
import './index-BFREUk8o.mjs';
import '@primeuix/utils';
import './index-C319vlSQ.mjs';
import './index-BLn-pl6M.mjs';
import './index-2dA4pXcI.mjs';
import './index-DpRrGZTR.mjs';
import '@primeuix/utils/uuid';
import '@primeuix/styles/ripple';
import '@primeuix/styles/message';
import '@primeuix/styles/progressspinner';
import '@tanstack/vue-query';
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
import 'zod';
import './client.manifest.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'file:///app/node_modules/@nuxt/vite-builder/dist/runtime/client.manifest.mjs';
import '@primeuix/utils/zindex';
import './index-UnQD5FIJ.mjs';
import './index-CMv313tU.mjs';
import './index-CFvji5m2.mjs';
import './index--ctLNnjM.mjs';
import './index-B8dwdDfW.mjs';
import './index-rAVNvoJo.mjs';
import './index-D21vFaAL.mjs';
import './index-HVZBZE_C.mjs';
import './index-_YLQpnfS.mjs';
import './index-C1vnj6fg.mjs';
import './index-ik-SlIj1.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LoadingComponent",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex justify-center h-24" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(script$4), { "aria-label": "Loading" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-kit/LoadingComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "edit",
  __ssrInlineRender: true,
  setup(__props) {
    var _a2;
    var _a, _b, _c, _d, _e;
    const route = useRoute();
    const { group_id } = route.params;
    const year = ref(null);
    const { group } = storeToRefs(useGroupsStore());
    const formRef = ref(null);
    const { categories } = useCategoryMutation();
    useSeo({
      title: `Modifier le budget du groupe ${(_a = group.value) == null ? void 0 : _a.name}`,
      description: `Ajustez les montants par cat\xE9gorie, modifiez les plafonds mensuels et g\xE9rez les priorit\xE9s budg\xE9taires du groupe ${(_b = group.value) == null ? void 0 : _b.name}.`,
      ogTitle: `\xC9dition du budget - ${(_c = group.value) == null ? void 0 : _c.name}`,
      ogDescription: `Modifiez le budget partag\xE9 du groupe ${(_d = group.value) == null ? void 0 : _d.name} : ajustez les cat\xE9gories, ma\xEEtrisez vos d\xE9penses et anticipez les impr\xE9vus.`,
      image: (_a2 = (_e = group.value) == null ? void 0 : _e.picture) != null ? _a2 : void 0
    });
    const { refetchBudget, postBudgetsMutation, budgetList } = useBudget(year);
    const computeInitialValues = () => {
      if (!budgetList.value || !categories.value) return {};
      return categories.value.reduce(
        (acc, current) => {
          var _a3;
          var _a22;
          acc[current.id] = (_a3 = (_a22 = budgetList.value.find(
            (budget) => Number(budget.category.id) === Number(current.id)
          )) == null ? void 0 : _a22.amount) != null ? _a3 : 0;
          return acc;
        },
        {}
      );
    };
    watch(year, async () => {
      if (!categories.value) return;
      await refetchBudget();
      if (formRef.value) {
        const newValues = computeInitialValues();
        formRef.value.setValues(newValues);
      }
    });
    const onFormSubmit = (form) => {
      if (!form.valid || !categories.value || !year.value) return;
      const budgets = Object.entries(form.states).map(
        (e) => {
          var _a22;
          return {
            amount: Number(e[1] && ((_a22 = e[1]) == null ? void 0 : _a22.value) ? e[1].value : 0),
            monthStart: formatDateISO(getFirstDayOfMonth(year.value)),
            categoryId: Number(e[0])
          };
        }
      );
      const data = {
        groupId: Number(group_id),
        budgets
      };
      postBudgetsMutation.mutate(data);
    };
    const initialValues = computed(() => computeInitialValues());
    return (_ctx, _push, _parent, _attrs) => {
      var _a22;
      const _component_SubHeader = _sfc_main$2;
      const _component_WrapperInput = _sfc_main$3;
      const _component_LoadingComponent = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SubHeader, {
        label: "Edition des Budgets",
        color: (_a22 = unref(group)) == null ? void 0 : _a22.color,
        to: `/groups/${unref(group_id)}/budget`
      }, null, _parent));
      _push(`<div class="w-full flex justify-center">`);
      _push(ssrRenderComponent(unref(script), {
        modelValue: year.value,
        "onUpdate:modelValue": ($event) => year.value = $event,
        view: "month",
        "date-format": "mm/yy",
        class: "w-64 mt-3",
        "input-class": "text-center"
      }, null, _parent));
      _push(`</div>`);
      if (unref(budgetList) && unref(categories)) {
        _push(ssrRenderComponent(unref(script$1), {
          ref_key: "formRef",
          ref: formRef,
          "initial-values": initialValues.value,
          resolver: unref(zodResolver)(unref(NewBudgetSchemaResolver)),
          class: "flex justify-center flex-col items-center gap-10",
          onSubmit: onFormSubmit
        }, {
          default: withCtx(($form, _push2, _parent2, _scopeId) => {
            var _a3, _b2;
            if (_push2) {
              _push2(`<section class="grid gap-2 grid-cols-2 md:grid-cols-3 mt-6 w-full"${_scopeId}><!--[-->`);
              ssrRenderList(unref(categories), (category) => {
                _push2(`<div class="${ssrRenderClass([`bg-${category.color}-50 text-${category.color}-800`, "flex justify-between items-center rounded-full px-4 py-3"])}"${_scopeId}><p${_scopeId}>${ssrInterpolate(category.label !== "default" ? category.label : "Autres")}</p><div class="flex items-center gap-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_WrapperInput, {
                  form: $form,
                  name: String(category.id),
                  placeholder: "Budget",
                  class: "w-24"
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(script$2), {
                        name: String(category.id),
                        fluid: ""
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(script$2), {
                          name: String(category.id),
                          fluid: ""
                        }, null, 8, ["name"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<p class="text-2xl"${_scopeId}>\u20AC</p></div></div>`);
              });
              _push2(`<!--]--></section>`);
              _push2(ssrRenderComponent(unref(script$3), {
                class: [[("getGroupColor" in _ctx ? _ctx.getGroupColor : unref(getGroupColor))({ color: (_a3 = unref(group)) == null ? void 0 : _a3.color })], "w-64"],
                type: "submit",
                label: "Sauvergarde les budgets"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("section", { class: "grid gap-2 grid-cols-2 md:grid-cols-3 mt-6 w-full" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                    return openBlock(), createBlock("div", {
                      key: category.id,
                      class: ["flex justify-between items-center rounded-full px-4 py-3", `bg-${category.color}-50 text-${category.color}-800`]
                    }, [
                      createVNode("p", null, toDisplayString(category.label !== "default" ? category.label : "Autres"), 1),
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(_component_WrapperInput, {
                          form: $form,
                          name: String(category.id),
                          placeholder: "Budget",
                          class: "w-24"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(script$2), {
                              name: String(category.id),
                              fluid: ""
                            }, null, 8, ["name"])
                          ]),
                          _: 2
                        }, 1032, ["form", "name"]),
                        createVNode("p", { class: "text-2xl" }, "\u20AC")
                      ])
                    ], 2);
                  }), 128))
                ]),
                createVNode(unref(script$3), {
                  class: [[("getGroupColor" in _ctx ? _ctx.getGroupColor : unref(getGroupColor))({ color: (_b2 = unref(group)) == null ? void 0 : _b2.color })], "w-64"],
                  type: "submit",
                  label: "Sauvergarde les budgets"
                }, null, 8, ["class"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_LoadingComponent, null, null, _parent));
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/groups/[group_id]/budget/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=edit-DDUgIZmr.mjs.map
