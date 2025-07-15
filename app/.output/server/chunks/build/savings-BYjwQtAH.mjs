import { defineComponent, withCtx, createTextVNode, ref, resolveComponent, mergeProps, unref, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import script from './index-IJ23DGgI.mjs';
import script$1 from './index-Bd17IegO.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-zxCACZnm.mjs';
import { _ as _export_sfc } from './server.mjs';
import '@primeuix/utils';
import '@primeuix/utils/object';
import './index-C1vnj6fg.mjs';
import './index-BLn-pl6M.mjs';
import './index-f6-L4oOs.mjs';
import '@primeuix/styled';
import '@primeuix/utils/dom';
import './index-ik-SlIj1.mjs';
import '@primeuix/styles/badge';
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
import './index-C319vlSQ.mjs';
import './index-De0dg7Ws.mjs';
import './index-D21vFaAL.mjs';
import './index-Din928lO.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HeaderComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const visible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "flex justify-between lg:px-10 px-5 mt-5 items-center" }, _attrs))}><h1 class="font-extrabold text-4xl mb-1.5">Mon\xE9a</h1><nav class="md:flex gap-4 hidden">`);
      _push(ssrRenderComponent(_component_RouterLink, { to: { name: "groups" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Accueil`);
          } else {
            return [
              createTextVNode("Accueil")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouterLink, { to: { name: "savings" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Calcul \xE9pargne`);
          } else {
            return [
              createTextVNode("Calcul \xE9pargne")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RouterLink, { to: { name: "user" } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Profil`);
          } else {
            return [
              createTextVNode("Profil")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav>`);
      _push(ssrRenderComponent(unref(script), {
        icon: "pi pi-bars",
        variant: "text",
        class: "md:hidden",
        onClick: ($event) => visible.value = true
      }, null, _parent));
      _push(ssrRenderComponent(unref(script$1), {
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        header: "Drawer",
        position: "right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<nav class="flex flex-col gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_RouterLink, { to: { name: "groups" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Accueil`);
                } else {
                  return [
                    createTextVNode("Accueil")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_RouterLink, { to: { name: "savings" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Calcul \xE9pargne`);
                } else {
                  return [
                    createTextVNode("Calcul \xE9pargne")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_RouterLink, { to: { name: "user" } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Profil`);
                } else {
                  return [
                    createTextVNode("Profil")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</nav>`);
          } else {
            return [
              createVNode("nav", { class: "flex flex-col gap-2" }, [
                createVNode(_component_RouterLink, { to: { name: "groups" } }, {
                  default: withCtx(() => [
                    createTextVNode("Accueil")
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, { to: { name: "savings" } }, {
                  default: withCtx(() => [
                    createTextVNode("Calcul \xE9pargne")
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, { to: { name: "user" } }, {
                  default: withCtx(() => [
                    createTextVNode("Profil")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/HeaderComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeaderComponent = _sfc_main$1;
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_HeaderComponent, null, null, _parent));
  _push(`<main class="lg:px-10 px-5">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main><footer class="mt-16"><div class="border-t border-gray-300 max-w-7xl mx-auto px-6 py-10 flex gap-8"><div class="max-w-lg"><div><h3 class="text-lg font-semibold mb-4">Mon\xE9a</h3><p class="text-sm"> G\xE9rer vos d\xE9penses de groupe simplement. Visualisez vos \xE9conomies et pr\xE9voyez vos budgets mois par mois. </p></div><div><h4 class="text-md font-semibold mt-3">Informations</h4><ul class="space-y-2 text-sm"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/terms",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Conditions d&#39;utilisation`);
      } else {
        return [
          createTextVNode("Conditions d'utilisation")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/privacy",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Politique de confidentialit\xE9`);
      } else {
        return [
          createTextVNode("Politique de confidentialit\xE9")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div><div><h4 class="text-md font-semibold mb-3">Navigation</h4><ul class="space-y-2 text-sm"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Accueil`);
      } else {
        return [
          createTextVNode("Accueil")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/auth/login",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Connexion`);
      } else {
        return [
          createTextVNode("Connexion")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/auth/register",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Cr\xE9er un compte`);
      } else {
        return [
          createTextVNode("Cr\xE9er un compte")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/user",
    class: "hover:underline"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Profil`);
      } else {
        return [
          createTextVNode("Profil")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div><div class="border-t text-center text-xs py-4 border-gray-300"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Mon\xE9a. Tous droits r\xE9serv\xE9s. </div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/savings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const savings = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { savings as default };
//# sourceMappingURL=savings-BYjwQtAH.mjs.map
