import { _ as __nuxt_component_0 } from './nuxt-link-ClweVqxO.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "mt-16" }, _attrs))}><div class="border-t border-gray-300 max-w-7xl mx-auto px-6 py-10 flex gap-8"><div class="max-w-lg"><div><h3 class="text-lg font-semibold mb-4">Mon\xE9a</h3><p class="text-sm"> G\xE9rer vos d\xE9penses de groupe simplement. Visualisez vos \xE9conomies et pr\xE9voyez vos budgets mois par mois. </p></div><div><h4 class="text-md font-semibold mt-3">Informations</h4><ul class="space-y-2 text-sm"><li>`);
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
  _push(`</li></ul></div></div><div class="border-t text-center text-xs py-4 border-gray-300"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Mon\xE9a. Tous droits r\xE9serv\xE9s. </div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/FooterComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FooterComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { FooterComponent as F };
//# sourceMappingURL=FooterComponent-B87Aarxc.mjs.map
