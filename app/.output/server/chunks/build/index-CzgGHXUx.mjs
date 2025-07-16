import { defineComponent, resolveComponent, unref, mergeProps, withCtx, createVNode, createBlock, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { b as useAuthStore, c as useGroupsStore } from './server.mjs';
import { storeToRefs } from 'pinia';
import { _ as _sfc_main$4 } from './AddAction-BwZJ_x_i.mjs';
import { u as useSeo } from './useSeo-BkYX_Gzo.mjs';
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
import './index-IJ23DGgI.mjs';
import './index-C1vnj6fg.mjs';
import './index-BLn-pl6M.mjs';
import './index-f6-L4oOs.mjs';
import './index-ik-SlIj1.mjs';
import './index-2dA4pXcI.mjs';
import './index-DpRrGZTR.mjs';
import '@primeuix/utils/uuid';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PersonalGroup",
  __ssrInlineRender: true,
  setup(__props) {
    const { personnalGroup } = storeToRefs(useGroupsStore());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      if (unref(personnalGroup)) {
        _push(ssrRenderComponent(_component_router_link, mergeProps({
          to: { name: "groups-group_id", params: { group_id: unref(personnalGroup).id } },
          class: "item text-gray-700 hover"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p${_scopeId}>Egroup personnel</p><i class="pi pi-chevron-right"${_scopeId}></i>`);
            } else {
              return [
                createVNode("p", null, "Egroup personnel"),
                createVNode("i", { class: "pi pi-chevron-right" })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/group/PersonalGroup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CardGroup",
  __ssrInlineRender: true,
  props: {
    group: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(ssrRenderComponent(_component_router_link, mergeProps({
        to: `/groups/${_ctx.group.id}`,
        class: [[
          `bg-${_ctx.group.color}-100`,
          `hover:bg-${_ctx.group.color}-200`,
          `text-${_ctx.group.color}-500`
        ], "p-2.5 rounded-2xl transition-all text-gray-700"]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-38 mb-4 flex justify-center items-center"${_scopeId}>`);
            if (_ctx.group.picture) {
              _push2(`<img${ssrRenderAttr("src", _ctx.group.picture)} class="w-full h-full object-cover rounded-xl"${_scopeId}>`);
            } else {
              _push2(`<p class="pi pi-wallet text-7xl"${_scopeId}></p>`);
            }
            _push2(`</div><div class="flex items-center justify-between font-semibold"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.group.name)}</p><i class="pi pi-chevron-right"${_scopeId}></i></div>`);
          } else {
            return [
              createVNode("div", { class: "h-38 mb-4 flex justify-center items-center" }, [
                _ctx.group.picture ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: _ctx.group.picture,
                  class: "w-full h-full object-cover rounded-xl"
                }, null, 8, ["src"])) : (openBlock(), createBlock("p", {
                  key: 1,
                  class: "pi pi-wallet text-7xl"
                }))
              ]),
              createVNode("div", { class: "flex items-center justify-between font-semibold" }, [
                createVNode("p", null, toDisplayString(_ctx.group.name), 1),
                createVNode("i", { class: "pi pi-chevron-right" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/group/CardGroup.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AllGroups",
  __ssrInlineRender: true,
  setup(__props) {
    const groupsStore = useGroupsStore();
    const { groups, groupsCount } = storeToRefs(groupsStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardGroup = _sfc_main$2;
      if (unref(groupsCount) > 0) {
        _push(`<article${ssrRenderAttrs(mergeProps({ class: "grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-7" }, _attrs))}><!--[-->`);
        ssrRenderList(unref(groups), (group) => {
          _push(ssrRenderComponent(_component_CardGroup, {
            key: group.id,
            group
          }, null, _parent));
        });
        _push(`<!--]--></article>`);
      } else {
        _push(`<p${ssrRenderAttrs(mergeProps({ class: "mt-4" }, _attrs))}>Vous n&#39;avez pas encore de groupe.</p>`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/group/AllGroups.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { user } = useAuthStore();
    useSeo({
      title: `Groupes de ${user == null ? void 0 : user.name} - Vos comptes partag\xE9s`,
      description: `Retrouvez tous les groupes de ${user == null ? void 0 : user.name}, suivez vos d\xE9penses, budgets et pr\xE9visions.`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PersonalGroup = _sfc_main$3;
      const _component_AllGroups = _sfc_main$1;
      const _component_AddAction = _sfc_main$4;
      _push(`<!--[--><div class="mt-5">`);
      _push(ssrRenderComponent(_component_PersonalGroup, null, null, _parent));
      _push(ssrRenderComponent(_component_AllGroups, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_AddAction, { to: "/groups/new" }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/groups/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CzgGHXUx.mjs.map
