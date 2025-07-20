import { defineComponent, resolveComponent, unref, withCtx, createVNode, createTextVNode, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import script from './index-CkuOTgVv.mjs';
import { zodResolver } from '@primeuix/forms/resolvers/zod';
import { a as useRouter, e as useAuthService, R as RegisterRequestSchema } from './server.mjs';
import { useMutation } from '@tanstack/vue-query';
import { useRoute } from 'vue-router';
import { _ as _sfc_main$3 } from './WrapperInput-DUkpYxM9.mjs';
import { _ as _sfc_main$2 } from './FormInput-Br_NI2sO.mjs';
import { _ as _sfc_main$1 } from './GoogleComponent-Cd1it7gx.mjs';
import { u as useSeo } from './useSeo-DF63g3st.mjs';
import script$1 from './index-ByyIQ08N.mjs';
import script$2 from './index-D4kJrjbE.mjs';
import script$3 from './index-CQEsobbS.mjs';
import script$4 from './index-BFREUk8o.mjs';
import script$5 from './index-IJ23DGgI.mjs';
import '@primeuix/utils';
import './index-f6-L4oOs.mjs';
import '@primeuix/styled';
import '@primeuix/utils/dom';
import '@primeuix/utils/object';
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
import 'node:url';
import 'ipx';
import 'pinia';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import 'zod';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './index-B95qXBXP.mjs';
import './index-D45wcmtf.mjs';
import './index-HVZBZE_C.mjs';
import './index-_YLQpnfS.mjs';
import '@primeuix/utils/zindex';
import './index-UnQD5FIJ.mjs';
import './index-BLn-pl6M.mjs';
import './index-CMv313tU.mjs';
import './index-CFvji5m2.mjs';
import './index--ctLNnjM.mjs';
import './index-B8dwdDfW.mjs';
import './index-rAVNvoJo.mjs';
import './index-D21vFaAL.mjs';
import './index-2dA4pXcI.mjs';
import './index-DpRrGZTR.mjs';
import '@primeuix/utils/uuid';
import './index-BPiU8eAd.mjs';
import './index-C319vlSQ.mjs';
import './index-C1vnj6fg.mjs';
import './index-ik-SlIj1.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const { register } = useAuthService();
    const registerMutation = useMutation({
      mutationFn: (data) => register(data),
      onSuccess: () => {
        router.push({ name: "auth-confirm" });
      }
    });
    const submitRegister = async (form) => {
      if (!form.valid) return;
      const data = Object.entries(form.states).reduce((acc, [key, state]) => {
        const k = key;
        acc[k] = state.value;
        return acc;
      }, {});
      if (data.password !== data.confirmPassword) return;
      const invitationToken = route.query.invitationToken;
      if (invitationToken) {
        data.invitationToken = invitationToken;
      }
      registerMutation.mutate(data);
    };
    useSeo({
      title: "Cr\xE9er un compte - Mon\xE9a",
      description: "Inscrivez-vous sur Mon\xE9a pour commencer \xE0 g\xE9rer facilement vos budgets et vos d\xE9penses.",
      ogTitle: "Cr\xE9ation de compte Mon\xE9a",
      ogDescription: "Rejoignez Mon\xE9a et prenez le contr\xF4le de vos finances en quelques clics."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<!--[--><h2 class="text-center text-4xl mb-14">Inscription</h2>`);
      _push(ssrRenderComponent(unref(script), {
        resolver: unref(zodResolver)(unref(RegisterRequestSchema)),
        class: "flex flex-col md:w-1/2 mx-5 md:mx-auto gap-6 items-center",
        onSubmit: submitRegister
      }, {
        default: withCtx(($form, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "lastname",
              placeholder: "Nom",
              form: $form
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "name",
              placeholder: "Pr\xE9nom",
              form: $form
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              name: "birthday",
              placeholder: "Date de naissance",
              form: $form
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(script$1), {
                    "date-format": "dd/mm/yy",
                    "show-icon": "",
                    fluid: "",
                    name: "birthday",
                    class: "w-full",
                    "icon-display": "input"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(script$1), {
                      "date-format": "dd/mm/yy",
                      "show-icon": "",
                      fluid: "",
                      name: "birthday",
                      class: "w-full",
                      "icon-display": "input"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "email",
              placeholder: "Email",
              type: "email",
              form: $form,
              autocomplete: "email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              name: "username",
              placeholder: "Pseudonyme",
              form: $form,
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              name: "password",
              placeholder: "Mot de passe",
              form: $form
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(script$2), {
                    placeholder: "Mot de passe",
                    name: "password",
                    "toggle-mask": "",
                    fluid: "",
                    class: "w-full",
                    "input-props": {
                      autocomplete: "new-password"
                    }
                  }, {
                    footer: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(script$3), null, null, _parent4, _scopeId3));
                        _push4(`<ul class="pl-2 my-0 leading-normal"${_scopeId3}><li${_scopeId3}>Au moins une majuscule</li><li${_scopeId3}>Au moins une minuscule</li><li${_scopeId3}>Au moins un chiffre</li><li${_scopeId3}>Minimum 8 caract\xE8res</li></ul>`);
                      } else {
                        return [
                          createVNode(unref(script$3)),
                          createVNode("ul", { class: "pl-2 my-0 leading-normal" }, [
                            createVNode("li", null, "Au moins une majuscule"),
                            createVNode("li", null, "Au moins une minuscule"),
                            createVNode("li", null, "Au moins un chiffre"),
                            createVNode("li", null, "Minimum 8 caract\xE8res")
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(script$2), {
                      placeholder: "Mot de passe",
                      name: "password",
                      "toggle-mask": "",
                      fluid: "",
                      class: "w-full",
                      "input-props": {
                        autocomplete: "new-password"
                      }
                    }, {
                      footer: withCtx(() => [
                        createVNode(unref(script$3)),
                        createVNode("ul", { class: "pl-2 my-0 leading-normal" }, [
                          createVNode("li", null, "Au moins une majuscule"),
                          createVNode("li", null, "Au moins une minuscule"),
                          createVNode("li", null, "Au moins un chiffre"),
                          createVNode("li", null, "Minimum 8 caract\xE8res")
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              form: $form,
              name: "confirmPassword",
              placeholder: "Confirmation mot de passe"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  _push3(ssrRenderComponent(unref(script$2), {
                    name: "confirmPassword",
                    placeholder: "Confirmation mot de passe",
                    fluid: "",
                    class: "w-full",
                    feedback: false,
                    "toggle-mask": "",
                    "input-props": {
                      autocomplete: "new-password"
                    }
                  }, null, _parent3, _scopeId2));
                  if (((_a = $form.confirmPassword) == null ? void 0 : _a.value) && ((_b = $form.password) == null ? void 0 : _b.value) && $form.confirmPassword.value !== $form.password.value) {
                    _push3(ssrRenderComponent(unref(script$4), {
                      severity: "error",
                      size: "small"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Les mots de passe ne correspondent pas `);
                        } else {
                          return [
                            createTextVNode(" Les mots de passe ne correspondent pas ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(unref(script$2), {
                      name: "confirmPassword",
                      placeholder: "Confirmation mot de passe",
                      fluid: "",
                      class: "w-full",
                      feedback: false,
                      "toggle-mask": "",
                      "input-props": {
                        autocomplete: "new-password"
                      }
                    }),
                    ((_c = $form.confirmPassword) == null ? void 0 : _c.value) && ((_d = $form.password) == null ? void 0 : _d.value) && $form.confirmPassword.value !== $form.password.value ? (openBlock(), createBlock(unref(script$4), {
                      key: 0,
                      severity: "error",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Les mots de passe ne correspondent pas ")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col items-center gap-0.5"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$5), {
              type: "submit",
              class: "w-fit"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`S&#39;inscrire`);
                } else {
                  return [
                    createTextVNode("S'inscrire")
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
                  _push3(`J&#39;ai d\xE9j\xE0 un compte`);
                } else {
                  return [
                    createTextVNode("J'ai d\xE9j\xE0 un compte")
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
                name: "lastname",
                placeholder: "Nom",
                form: $form
              }, null, 8, ["form"]),
              createVNode(_sfc_main$2, {
                name: "name",
                placeholder: "Pr\xE9nom",
                form: $form
              }, null, 8, ["form"]),
              createVNode(_sfc_main$3, {
                name: "birthday",
                placeholder: "Date de naissance",
                form: $form
              }, {
                default: withCtx(() => [
                  createVNode(unref(script$1), {
                    "date-format": "dd/mm/yy",
                    "show-icon": "",
                    fluid: "",
                    name: "birthday",
                    class: "w-full",
                    "icon-display": "input"
                  })
                ]),
                _: 2
              }, 1032, ["form"]),
              createVNode(_sfc_main$2, {
                name: "email",
                placeholder: "Email",
                type: "email",
                form: $form,
                autocomplete: "email"
              }, null, 8, ["form"]),
              createVNode(_sfc_main$2, {
                name: "username",
                placeholder: "Pseudonyme",
                form: $form,
                autocomplete: "username"
              }, null, 8, ["form"]),
              createVNode(_sfc_main$3, {
                name: "password",
                placeholder: "Mot de passe",
                form: $form
              }, {
                default: withCtx(() => [
                  createVNode(unref(script$2), {
                    placeholder: "Mot de passe",
                    name: "password",
                    "toggle-mask": "",
                    fluid: "",
                    class: "w-full",
                    "input-props": {
                      autocomplete: "new-password"
                    }
                  }, {
                    footer: withCtx(() => [
                      createVNode(unref(script$3)),
                      createVNode("ul", { class: "pl-2 my-0 leading-normal" }, [
                        createVNode("li", null, "Au moins une majuscule"),
                        createVNode("li", null, "Au moins une minuscule"),
                        createVNode("li", null, "Au moins un chiffre"),
                        createVNode("li", null, "Minimum 8 caract\xE8res")
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1032, ["form"]),
              createVNode(_sfc_main$3, {
                form: $form,
                name: "confirmPassword",
                placeholder: "Confirmation mot de passe"
              }, {
                default: withCtx(() => {
                  var _a, _b;
                  return [
                    createVNode(unref(script$2), {
                      name: "confirmPassword",
                      placeholder: "Confirmation mot de passe",
                      fluid: "",
                      class: "w-full",
                      feedback: false,
                      "toggle-mask": "",
                      "input-props": {
                        autocomplete: "new-password"
                      }
                    }),
                    ((_a = $form.confirmPassword) == null ? void 0 : _a.value) && ((_b = $form.password) == null ? void 0 : _b.value) && $form.confirmPassword.value !== $form.password.value ? (openBlock(), createBlock(unref(script$4), {
                      key: 0,
                      severity: "error",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Les mots de passe ne correspondent pas ")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }),
                _: 2
              }, 1032, ["form"]),
              createVNode("div", { class: "flex flex-col items-center gap-0.5" }, [
                createVNode(unref(script$5), {
                  type: "submit",
                  class: "w-fit"
                }, {
                  default: withCtx(() => [
                    createTextVNode("S'inscrire")
                  ]),
                  _: 1
                }),
                createVNode(_component_RouterLink, {
                  to: { name: "auth-login" },
                  class: "hover:underline"
                }, {
                  default: withCtx(() => [
                    createTextVNode("J'ai d\xE9j\xE0 un compte")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-BrBszCNV.mjs.map
