import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { defineComponent, mergeProps, unref, ref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import script$1 from './index-atZ0DPFK.mjs';
import script$2 from './index-CtTONRgI.mjs';
import script$3 from './index-0V99AVn5.mjs';
import script from './index-IJ23DGgI.mjs';
import { g as getGroupColor } from './getColor-DuOHLePg.mjs';
import { u as useSeo } from './useSeo-DF63g3st.mjs';
import { a as useRouter } from './server.mjs';
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
import './index-f6-L4oOs.mjs';
import '@primeuix/utils/dom';
import '@primeuix/utils';
import './index-BLn-pl6M.mjs';
import './index-_YLQpnfS.mjs';
import './index-C1vnj6fg.mjs';
import './index-ik-SlIj1.mjs';
import './index-2dA4pXcI.mjs';
import './index-DpRrGZTR.mjs';
import '@primeuix/utils/uuid';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TestimonialComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const testimonials = [
      {
        name: "Alice Martin",
        role: "\xC9tudiante en coloc",
        avatar: "https://i.pravatar.cc/100?img=1",
        feedback: "Depuis que j\u2019utilise cette app avec mes colocs, on ne se dispute plus pour les courses. Tout est clair et bien r\xE9parti."
      },
      {
        name: "Youssef Benali",
        role: "P\xE8re de famille",
        avatar: "https://i.pravatar.cc/100?img=5",
        feedback: "Tr\xE8s pratique pour suivre nos d\xE9penses mensuelles. M\xEAme mes enfants peuvent voir ce qu\u2019il reste."
      },
      {
        name: "Camille Durand",
        role: "Tr\xE9sori\xE8re d\u2019association",
        avatar: "https://i.pravatar.cc/100?img=12",
        feedback: "J\u2019adore la simplicit\xE9 d\u2019utilisation. G\xE9rer les budgets de mon association n\u2019a jamais \xE9t\xE9 aussi rapide."
      }
    ];
    const value = ref(4);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid md:grid-cols-3 gap-6 my-10" }, _attrs))}><!--[-->`);
      ssrRenderList(testimonials, (testimonial, index) => {
        _push(ssrRenderComponent(unref(script$1), { key: index }, {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-3"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(script$3), {
                image: testimonial.avatar,
                shape: "circle"
              }, null, _parent2, _scopeId));
              _push2(`<div${_scopeId}><p class="font-semibold"${_scopeId}>${ssrInterpolate(testimonial.name)}</p><p class="text-sm text-gray-500"${_scopeId}>${ssrInterpolate(testimonial.role)}</p></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-3" }, [
                  createVNode(unref(script$3), {
                    image: testimonial.avatar,
                    shape: "circle"
                  }, null, 8, ["image"]),
                  createVNode("div", null, [
                    createVNode("p", { class: "font-semibold" }, toDisplayString(testimonial.name), 1),
                    createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(testimonial.role), 1)
                  ])
                ])
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(script$2), {
                modelValue: value.value,
                "onUpdate:modelValue": ($event) => value.value = $event,
                value: 5,
                readonly: "",
                class: "mb-3"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-gray-700 text-sm"${_scopeId}>${ssrInterpolate(testimonial.feedback)}</p>`);
            } else {
              return [
                createVNode(unref(script$2), {
                  modelValue: value.value,
                  "onUpdate:modelValue": ($event) => value.value = $event,
                  value: 5,
                  readonly: "",
                  class: "mb-3"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("p", { class: "text-gray-700 text-sm" }, toDisplayString(testimonial.feedback), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/homepage/TestimonialComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const homepage = "" + buildAssetsURL("homepage.DVBwg8au.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const averages = [
      {
        icon: "pi-chart-bar",
        label: "Suivi des d\xE9penses par cat\xE9gorie"
      },
      {
        icon: "pi-users",
        label: "Partage entre membres d\u2019un groupe"
      },
      {
        icon: "pi-planner",
        label: "Vue mensuelle / annuelle"
      }
    ];
    useSeo({
      title: "Bienvenue sur Mon\xE9a - G\xE9rez facilement vos finances",
      description: "Mon\xE9a vous aide \xE0 g\xE9rer vos d\xE9penses, suivre votre budget et \xE9conomiser intelligemment. Commencez d\xE8s aujourd\u2019hui !",
      ogTitle: "MonApp - Gestion facile et intuitive de vos finances",
      ogDescription: "D\xE9couvrez Mon\xE9a, la solution pour suivre vos d\xE9penses, g\xE9rer vos budgets et atteindre vos objectifs financiers."
    });
    const router = useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = script;
      const _component_TestimonialComponent = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "p-10" }, _attrs))}><section class="flex gap-10 items-center"><div class="flex flex-col gap-6"><p class="text-6xl font-extrabold">Mon\xE9a</p><p class="text-2xl font-light text-gray-700"> G\xE9rez vos budgets en toute simplicit\xE9. </p><p> Une application intuitive pour suivre vos d\xE9penses, planifier l\u2019avenir et garder le contr\xF4le de vos finances personnelles ou en groupe. </p><div class="flex gap-3 flex-col md:flex-row">`);
      _push(ssrRenderComponent(_component_Button, {
        label: "Se connecter",
        class: [unref(getGroupColor)({ color: "pink" })],
        onClick: ($event) => unref(router).push({ name: "auth-login" })
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        label: "Cr\xE9er un compte gratuitement",
        class: [unref(getGroupColor)({ color: "pink" })],
        onClick: ($event) => unref(router).push({ name: "auth-register" })
      }, null, _parent));
      _push(`</div></div><img class="w-1/2 h-full rounded md:block hidden"${ssrRenderAttr("src", unref(homepage))}></section><section class="flex justify-center gap-5 my-20"><!--[-->`);
      ssrRenderList(averages, (average, i) => {
        _push(`<div class="w-48 flex flex-col items-center"><p class="${ssrRenderClass([average.icon, "text-6xl text-center mb-3 pi text-gray-700"])}"></p><p class="text-center">${ssrInterpolate(average.label)}</p></div>`);
      });
      _push(`<!--]--></section>`);
      _push(ssrRenderComponent(_component_TestimonialComponent, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cb5CsnSk.mjs.map
