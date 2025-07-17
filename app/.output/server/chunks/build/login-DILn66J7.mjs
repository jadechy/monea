import { defineComponent, resolveComponent, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { b as useAuthStore, L as LoginRequestSchema } from './server.mjs';
import script from './index-CkuOTgVv.mjs';
import { zodResolver } from '@primeuix/forms/resolvers/zod';
import { _ as _sfc_main$3 } from './WrapperInput-DUkpYxM9.mjs';
import { _ as _sfc_main$1 } from './GoogleComponent-wSOheiWZ.mjs';
import { _ as _sfc_main$2 } from './FormInput-Br_NI2sO.mjs';
import { u as useSeo } from './useSeo-DrEeVm_h.mjs';
import script$1 from './index-D4kJrjbE.mjs';
import script$2 from './index-IJ23DGgI.mjs';
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
import 'pinia';
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
import './index-f6-L4oOs.mjs';
import './index-B95qXBXP.mjs';
import './index-BFREUk8o.mjs';
import './index-C319vlSQ.mjs';
import './index-BLn-pl6M.mjs';
import './index-2dA4pXcI.mjs';
import './index-DpRrGZTR.mjs';
import '@primeuix/utils/uuid';
import './index-D45wcmtf.mjs';
import './index-HVZBZE_C.mjs';
import './index-_YLQpnfS.mjs';
import '@primeuix/utils/zindex';
import './index-UnQD5FIJ.mjs';
import './index-BPiU8eAd.mjs';
import './index-rAVNvoJo.mjs';
import './index-D21vFaAL.mjs';
import './index-C1vnj6fg.mjs';
import './index-ik-SlIj1.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const { loginMutation } = useAuthStore();
    const submitLogin = async (form) => {
      if (!form.valid) return;
      loginMutation.mutate({
        username: form.states.pseudonym.value,
        password: form.states.password.value
      });
    };
    useSeo({
      title: "Connexion - Mon\xE9a",
      description: "Connectez-vous \xE0 Mon\xE9a pour acc\xE9der \xE0 vos comptes et g\xE9rer vos finances en toute simplicit\xE9.",
      ogTitle: "Connexion \xE0 Mon\xE9a",
      ogDescription: "Acc\xE9dez \xE0 votre compte Mon\xE9a et g\xE9rez vos budgets et d\xE9penses facilement."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<!--[--><h2 class="text-center text-4xl mb-14">Connexion</h2>`);
      _push(ssrRenderComponent(unref(script), {
        resolver: unref(zodResolver)(unref(LoginRequestSchema)),
        class: "flex flex-col md:w-1/2 mx-5 md:mx-auto gap-6 items-center",
        onSubmit: submitLogin
      }, {
        default: withCtx(($form, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "pseudonym",
              placeholder: "Ton pseudo",
              form: $form,
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(`<div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              form: $form,
              name: "password",
              placeholder: "Mot de passe"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(script$1), {
                    fluid: "",
                    name: "password",
                    class: "w-full",
                    "toggle-mask": "",
                    feedback: false,
                    "input-props": { autocomplete: "current-password" }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(script$1), {
                      fluid: "",
                      name: "password",
                      class: "w-full",
                      "toggle-mask": "",
                      feedback: false,
                      "input-props": { autocomplete: "current-password" }
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_RouterLink, {
              to: { name: "auth-forgot" },
              class: "w-full text-end block text-gray-400 hover:underline"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`J&#39;ai oubli\xE9 mon mot de passe`);
                } else {
                  return [
                    createTextVNode("J'ai oubli\xE9 mon mot de passe")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col items-center gap-0.5"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$2), {
              type: "submit",
              class: "w-fit"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Se connecter`);
                } else {
                  return [
                    createTextVNode("Se connecter")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_RouterLink, {
              to: { name: "auth-register" },
              class: "hover:underline"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Pas encore de compte`);
                } else {
                  return [
                    createTextVNode("Pas encore de compte")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-center" }, [
                createVNode(_sfc_main$1)
              ]),
              createVNode(_sfc_main$2, {
                name: "pseudonym",
                placeholder: "Ton pseudo",
                form: $form,
                autocomplete: "username"
              }, null, 8, ["form"]),
              createVNode("div", { class: "w-full" }, [
                createVNode(_sfc_main$3, {
                  form: $form,
                  name: "password",
                  placeholder: "Mot de passe"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(script$1), {
                      fluid: "",
                      name: "password",
                      class: "w-full",
                      "toggle-mask": "",
                      feedback: false,
                      "input-props": { autocomplete: "current-password" }
                    })
                  ]),
                  _: 2
                }, 1032, ["form"]),
                createVNode(_component_RouterLink, {
                  to: { name: "auth-forgot" },
                  class: "w-full text-end block text-gray-400 hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode("J'ai oubli\xE9 mon mot de passe")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "flex flex-col items-center gap-0.5" }, [
                createVNode(unref(script$2), {
                  type: "submit",
                  class: "w-fit"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Se connecter")
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "auth-register" },
                  class: "hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Pas encore de compte")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-DILn66J7.mjs.map
