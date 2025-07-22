import { _ as _sfc_main$1 } from './WrapperInput-DUkpYxM9.mjs';
import script$2 from './index-CQEsobbS.mjs';
import script$1 from './index-D4kJrjbE.mjs';
import { defineComponent, resolveComponent, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import script from './index-CkuOTgVv.mjs';
import { a as useRouter, d as useAuthService } from './server.mjs';
import { useRoute } from 'vue-router';
import { useMutation } from '@tanstack/vue-query';
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
import '@primeuix/styles/divider';
import '@primeuix/utils/zindex';
import './index-UnQD5FIJ.mjs';
import './index-BPiU8eAd.mjs';
import './index-D45wcmtf.mjs';
import './index-HVZBZE_C.mjs';
import './index-_YLQpnfS.mjs';
import '@primeuix/styles/inputtext';
import './index-rAVNvoJo.mjs';
import '@primeuix/utils/eventbus';
import './index-D21vFaAL.mjs';
import '@primeuix/styles/password';
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
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
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
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import 'node:url';
import 'ipx';
import 'pinia';
import '@primeuix/styles/base';
import 'zod';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './index-C1vnj6fg.mjs';
import './index-ik-SlIj1.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "reset",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const { reset } = useAuthService();
    const resetMutation = useMutation({
      mutationFn: (data) => reset(data),
      onSuccess: () => {
        router.push({ name: "auth-login" });
      }
    });
    const submitReset = async (form) => {
      if (!form.valid) return;
      const password = form.states.password.value;
      const repeatPassword = form.states.passwordConfirm.value;
      if (password !== repeatPassword) {
        alert("Les mots de passe ne correspondent pas.");
        return;
      }
      const resetToken = route.query.resetToken;
      resetMutation.mutate({ password, repeatPassword, resetToken });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WrapperInput = _sfc_main$1;
      const _component_Password = script$1;
      const _component_Divider = script$2;
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<!--[--><h2 class="text-center text-4xl mb-14"> R\xE9initialisation de votre mot de passe </h2>`);
      _push(ssrRenderComponent(unref(script), {
        class: "flex flex-col md:w-1/2 mx-5 md:mx-auto gap-6 items-center",
        onSubmit: submitReset
      }, {
        default: withCtx(($form, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_WrapperInput, {
              form: $form,
              name: "password",
              placeholder: "Nouveau mot de passe"
            }, {
              footer: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Divider, null, null, _parent3, _scopeId2));
                  _push3(`<ul class="pl-2 my-0 leading-normal"${_scopeId2}><li${_scopeId2}>Au moins une majuscule</li><li${_scopeId2}>Au moins une minuscule</li><li${_scopeId2}>Au moins un chiffre</li><li${_scopeId2}>Minimum 8 caract\xE8res</li></ul>`);
                } else {
                  return [
                    createVNode(_component_Divider),
                    createVNode("ul", { class: "pl-2 my-0 leading-normal" }, [
                      createVNode("li", null, "Au moins une majuscule"),
                      createVNode("li", null, "Au moins une minuscule"),
                      createVNode("li", null, "Au moins un chiffre"),
                      createVNode("li", null, "Minimum 8 caract\xE8res")
                    ])
                  ];
                }
              }),
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Password, {
                    name: "password",
                    class: "w-full",
                    "toggle-mask": "",
                    fluid: "",
                    feedback: false,
                    "input-props": { autocomplete: "new-password" }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Password, {
                      name: "password",
                      class: "w-full",
                      "toggle-mask": "",
                      fluid: "",
                      feedback: false,
                      "input-props": { autocomplete: "new-password" }
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_WrapperInput, {
              form: $form,
              name: "passwordConfirm",
              placeholder: "Confirme ton mot de passe"
            }, {
              footer: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Divider, null, null, _parent3, _scopeId2));
                  _push3(`<ul class="pl-2 my-0 leading-normal"${_scopeId2}><li${_scopeId2}>Au moins une majuscule</li><li${_scopeId2}>Au moins une minuscule</li><li${_scopeId2}>Au moins un chiffre</li><li${_scopeId2}>Minimum 8 caract\xE8res</li></ul>`);
                } else {
                  return [
                    createVNode(_component_Divider),
                    createVNode("ul", { class: "pl-2 my-0 leading-normal" }, [
                      createVNode("li", null, "Au moins une majuscule"),
                      createVNode("li", null, "Au moins une minuscule"),
                      createVNode("li", null, "Au moins un chiffre"),
                      createVNode("li", null, "Minimum 8 caract\xE8res")
                    ])
                  ];
                }
              }),
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Password, {
                    name: "passwordConfirm",
                    class: "w-full",
                    "toggle-mask": "",
                    fluid: "",
                    feedback: false,
                    "input-props": { autocomplete: "new-password" }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Password, {
                      name: "passwordConfirm",
                      class: "w-full",
                      "toggle-mask": "",
                      fluid: "",
                      feedback: false,
                      "input-props": { autocomplete: "new-password" }
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col items-center gap-0.5"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$3), {
              type: "submit",
              class: "w-fit"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Enregistrer`);
                } else {
                  return [
                    createTextVNode("Enregistrer")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_RouterLink, {
              to: { name: "auth-login" },
              class: "hover:underline"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`D\xE9j\xE0 un compte`);
                } else {
                  return [
                    createTextVNode("D\xE9j\xE0 un compte")
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
              createVNode(_component_WrapperInput, {
                form: $form,
                name: "password",
                placeholder: "Nouveau mot de passe"
              }, {
                footer: withCtx(() => [
                  createVNode(_component_Divider),
                  createVNode("ul", { class: "pl-2 my-0 leading-normal" }, [
                    createVNode("li", null, "Au moins une majuscule"),
                    createVNode("li", null, "Au moins une minuscule"),
                    createVNode("li", null, "Au moins un chiffre"),
                    createVNode("li", null, "Minimum 8 caract\xE8res")
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(_component_Password, {
                    name: "password",
                    class: "w-full",
                    "toggle-mask": "",
                    fluid: "",
                    feedback: false,
                    "input-props": { autocomplete: "new-password" }
                  })
                ]),
                _: 2
              }, 1032, ["form"]),
              createVNode(_component_WrapperInput, {
                form: $form,
                name: "passwordConfirm",
                placeholder: "Confirme ton mot de passe"
              }, {
                footer: withCtx(() => [
                  createVNode(_component_Divider),
                  createVNode("ul", { class: "pl-2 my-0 leading-normal" }, [
                    createVNode("li", null, "Au moins une majuscule"),
                    createVNode("li", null, "Au moins une minuscule"),
                    createVNode("li", null, "Au moins un chiffre"),
                    createVNode("li", null, "Minimum 8 caract\xE8res")
                  ])
                ]),
                default: withCtx(() => [
                  createVNode(_component_Password, {
                    name: "passwordConfirm",
                    class: "w-full",
                    "toggle-mask": "",
                    fluid: "",
                    feedback: false,
                    "input-props": { autocomplete: "new-password" }
                  })
                ]),
                _: 2
              }, 1032, ["form"]),
              createVNode("div", { class: "flex flex-col items-center gap-0.5" }, [
                createVNode(unref(script$3), {
                  type: "submit",
                  class: "w-fit"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Enregistrer")
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "auth-login" },
                  class: "hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode("D\xE9j\xE0 un compte")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/reset.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=reset-CHA42z-g.mjs.map
