import { defineComponent, resolveComponent, unref, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import script from './index-CkuOTgVv.mjs';
import { _ as _sfc_main$1 } from './FormInput-Br_NI2sO.mjs';
import { a as useRouter, d as useAuthService } from './server.mjs';
import { useMutation } from '@tanstack/vue-query';
import script$1 from './index-IJ23DGgI.mjs';
import '@primeuix/utils';
import './index-f6-L4oOs.mjs';
import '@primeuix/styled';
import '@primeuix/utils/dom';
import '@primeuix/utils/object';
import './WrapperInput-DUkpYxM9.mjs';
import './index-B95qXBXP.mjs';
import '@primeuix/styles/floatlabel';
import './index-BFREUk8o.mjs';
import './index-C319vlSQ.mjs';
import './index-BLn-pl6M.mjs';
import './index-2dA4pXcI.mjs';
import './index-DpRrGZTR.mjs';
import '@primeuix/utils/uuid';
import '@primeuix/styles/ripple';
import '@primeuix/styles/message';
import './index-D45wcmtf.mjs';
import './index-HVZBZE_C.mjs';
import './index-_YLQpnfS.mjs';
import '@primeuix/styles/inputtext';
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
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import 'node:url';
import 'ipx';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
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
  __name: "forgot",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const { forgot } = useAuthService();
    const forgotMutation = useMutation({
      mutationFn: (data) => forgot(data),
      onSuccess: () => {
        router.push({ name: "auth-reset" });
      }
    });
    const submitForgot = async (form) => {
      if (!form.valid) return;
      const email = form.states.email.value;
      forgotMutation.mutate({ email });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<!--[--><h2 class="text-center text-4xl mb-14">Mot de passe oubli\xE9</h2>`);
      _push(ssrRenderComponent(unref(script), {
        class: "flex flex-col md:w-1/2 mx-5 md:mx-auto gap-6 items-center",
        onSubmit: submitForgot
      }, {
        default: withCtx(($form, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$1, {
              name: "email",
              placeholder: "Ton email",
              form: $form,
              autocomplete: "email"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex flex-col items-center gap-0.5"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$1), {
              type: "submit",
              class: "w-fit"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Envoyer un mail`);
                } else {
                  return [
                    createTextVNode("Envoyer un mail")
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
              createVNode(_sfc_main$1, {
                name: "email",
                placeholder: "Ton email",
                form: $form,
                autocomplete: "email"
              }, null, 8, ["form"]),
              createVNode("div", { class: "flex flex-col items-center gap-0.5" }, [
                createVNode(unref(script$1), {
                  type: "submit",
                  class: "w-fit"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Envoyer un mail")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/forgot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=forgot-BeTarzfu.mjs.map
