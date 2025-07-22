import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto px-6 py-12 mt-10" }, _attrs))}><div class="shadow-xl rounded-2xl p-8 space-y-6"><h1 class="text-3xl font-bold text-gray-800">Conditions d&#39;utilisation</h1><p class="text-gray-600"> Bienvenue sur Mon\xE9a. En utilisant notre service, vous acceptez les conditions suivantes. Veuillez les lire attentivement. </p><section><h2 class="text-xl font-semibold text-gray-700 mb-2"> 1. Utilisation du service </h2><p class="text-gray-600"> Vous vous engagez \xE0 utiliser l&#39;application dans un cadre personnel et l\xE9gal. Toute utilisation abusive ou frauduleuse entra\xEEnera la suspension de votre compte. </p></section><section><h2 class="text-xl font-semibold text-gray-700 mb-2"> 2. Comptes et s\xE9curit\xE9 </h2><p class="text-gray-600"> Vous \xEAtes responsable de la s\xE9curit\xE9 de votre mot de passe et des informations li\xE9es \xE0 votre compte. </p></section><section><h2 class="text-xl font-semibold text-gray-700 mb-2"> 3. Modification du service </h2><p class="text-gray-600"> Nous nous r\xE9servons le droit de modifier ou d&#39;interrompre le service \xE0 tout moment, sans pr\xE9avis. </p></section><section><h2 class="text-xl font-semibold text-gray-700 mb-2">4. Contact</h2><p class="text-gray-600"> Pour toute question, contactez-nous \xE0 <a href="mailto:contact@monea.com" class="text-blue-600 underline">contact@monea.com</a>. </p></section></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const terms = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { terms as default };
//# sourceMappingURL=terms-BSfE4AmK.mjs.map
