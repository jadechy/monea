import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto px-6 py-12 mt-10" }, _attrs))}><div class="bg-white shadow-xl rounded-2xl p-8 space-y-6"><h1 class="text-3xl font-bold text-gray-800"> Politique de confidentialit\xE9 </h1><p class="text-gray-600"> Votre vie priv\xE9e est importante pour nous. Cette politique explique comment nous collectons, utilisons et prot\xE9geons vos donn\xE9es personnelles. </p><section><h2 class="text-xl font-semibold text-gray-700 mb-2"> 1. Donn\xE9es collect\xE9es </h2><p class="text-gray-600"> Nous collectons les informations que vous nous fournissez directement (nom, email, d\xE9penses, etc.) dans le but de fournir le service. </p></section><section><h2 class="text-xl font-semibold text-gray-700 mb-2"> 2. Utilisation des donn\xE9es </h2><p class="text-gray-600"> Vos donn\xE9es ne sont utilis\xE9es que pour le bon fonctionnement de l&#39;application et ne sont jamais revendues. </p></section><section><h2 class="text-xl font-semibold text-gray-700 mb-2"> 3. Stockage et s\xE9curit\xE9 </h2><p class="text-gray-600"> Vos informations sont stock\xE9es de mani\xE8re s\xE9curis\xE9e. Nous utilisons des pratiques modernes pour garantir leur protection. </p></section><section><h2 class="text-xl font-semibold text-gray-700 mb-2">4. Vos droits</h2><p class="text-gray-600"> Vous pouvez demander la suppression ou la modification de vos donn\xE9es \xE0 tout moment en nous contactant \xE0 <a href="mailto:contact@monea.com" class="text-blue-600 underline">contact@monea.com</a>. </p></section></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { privacy as default };
//# sourceMappingURL=privacy-KdOE6JHR.mjs.map
