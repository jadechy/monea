import { _ as _sfc_main$2 } from './SubHeader-C9ASyuh9.mjs';
import { _ as _sfc_main$3 } from './CategoryLabel-BTL_oUfU.mjs';
import { _ as _sfc_main$4 } from './BaseSection-DH0Z2QsE.mjs';
import { defineComponent, unref, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { a as formatDayMonth } from './date-Bb1fHl5x.mjs';
import { g as getGroupColor } from './getColor-DuOHLePg.mjs';
import { d as default_avatar } from './default_avatar-ixvbQY52.mjs';
import { f as useRoute, a as useRouter, c as useGroupsStore } from './server.mjs';
import { u as useSeo } from './useSeo-BkYX_Gzo.mjs';
import { storeToRefs } from 'pinia';
import { u as useExpenseMutation } from './useExpenseMutation-1MMDEY_K.mjs';
import script from './index-CMfZuAsG.mjs';
import script$1 from './index-IJ23DGgI.mjs';
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
import '@tanstack/vue-query';
import 'zod';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './index-B5Uz4ly5.mjs';
import './index-BLn-pl6M.mjs';
import './index-f6-L4oOs.mjs';
import './index-C1vnj6fg.mjs';
import './index-ik-SlIj1.mjs';
import './index-2dA4pXcI.mjs';
import './index-DpRrGZTR.mjs';
import '@primeuix/utils/uuid';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PeopleComponent",
  __ssrInlineRender: true,
  props: {
    user: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "item p-0 pr-6" }, _attrs))}><div class="flex gap-2.5 items-center"><div class="rounded-full h-14 w-14 bg-gray-500"></div><p>${ssrInterpolate(_ctx.user.username)}</p></div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-kit/PeopleComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    var _a2;
    var _a, _b, _c, _d, _e;
    const route = useRoute();
    const { group_id, expense_id } = route.params;
    const router = useRouter();
    const { group } = storeToRefs(useGroupsStore());
    const { expense } = useExpenseMutation();
    useSeo({
      title: `Cr\xE9er une d\xE9pense dans ${(_a = group.value) == null ? void 0 : _a.name}`,
      description: `Ajoutez une nouvelle d\xE9pense au groupe ${(_b = group.value) == null ? void 0 : _b.name} pour mieux g\xE9rer votre budget.`,
      ogTitle: `Nouvelle d\xE9pense - ${(_c = group.value) == null ? void 0 : _c.name}`,
      ogDescription: `Page de cr\xE9ation d'une d\xE9pense pour le groupe ${(_d = group.value) == null ? void 0 : _d.name}.`,
      image: (_a2 = (_e = group.value) == null ? void 0 : _e.picture) != null ? _a2 : void 0
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a3, _b2;
      var _a22;
      const _component_SubHeader = _sfc_main$2;
      const _component_CategoryLabel = _sfc_main$3;
      const _component_BaseSection = _sfc_main$4;
      const _component_PeopleComponent = _sfc_main$1;
      _push(`<!--[-->`);
      if (unref(group)) {
        _push(ssrRenderComponent(_component_SubHeader, {
          label: (_a3 = (_a22 = unref(expense)) == null ? void 0 : _a22.title) != null ? _a3 : "error",
          color: unref(group).color,
          to: `/groups/${unref(group_id)}`
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(expense) && unref(group)) {
        _push(`<div class="flex flex-col items-center gap-10"><div class="flex flex-col md:flex-row gap-2 justify-between w-full"><div class="flex flex-col gap-2"><div class="flex gap-3 items-end"><p class="font-bold text-4xl">${ssrInterpolate(unref(expense).amount)} \u20AC</p>`);
        if (unref(expense).spentAt) {
          _push(`<p><i class="pi pi-calendar mr-1"></i>${ssrInterpolate(("formatDayMonth" in _ctx ? _ctx.formatDayMonth : unref(formatDayMonth))(new Date(unref(expense).spentAt)))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex flex-wrap items-center gap-3">`);
        if (unref(expense).category.label !== "default") {
          _push(ssrRenderComponent(_component_CategoryLabel, {
            category: unref(expense).category
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(unref(script), {
          label: unref(expense).creator.username,
          image: (_b2 = unref(expense).creator.picture) != null ? _b2 : unref(default_avatar)
        }, null, _parent));
        if (unref(expense).recurring) {
          _push(ssrRenderComponent(unref(script), {
            icon: "pi pi-replay",
            label: "D\xE9pense r\xE9currente"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        if (unref(group).userRole !== "viewer" && unref(group).userRole !== "banned") {
          _push(ssrRenderComponent(unref(script$1), {
            icon: "pi pi-pencil",
            label: "Edition",
            size: "small",
            class: [[("getGroupColor" in _ctx ? _ctx.getGroupColor : unref(getGroupColor))({ color: unref(group).color })], "h-fit w-fit"],
            onClick: ($event) => unref(router).push(`/groups/${unref(group_id)}/expense/${unref(expense_id)}/edit`)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if (unref(expense).participants) {
          _push(ssrRenderComponent(_component_BaseSection, {
            label: "Participants",
            class: "w-full"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
                ssrRenderList(unref(expense).participants, (participant) => {
                  _push2(ssrRenderComponent(_component_PeopleComponent, {
                    key: participant.id,
                    user: participant
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<p${_scopeId2}>${ssrInterpolate(unref(expense).amount / unref(expense).participants.length)} \u20AC</p>`);
                      } else {
                        return [
                          createVNode("p", null, toDisplayString(unref(expense).amount / unref(expense).participants.length) + " \u20AC", 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                return [
                  createVNode("div", { class: "grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(expense).participants, (participant) => {
                      return openBlock(), createBlock(_component_PeopleComponent, {
                        key: participant.id,
                        user: participant
                      }, {
                        default: withCtx(() => [
                          createVNode("p", null, toDisplayString(unref(expense).amount / unref(expense).participants.length) + " \u20AC", 1)
                        ]),
                        _: 2
                      }, 1032, ["user"]);
                    }), 128))
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/groups/[group_id]/expense/[expense_id]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B5cwwNx4.mjs.map
