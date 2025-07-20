import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const logo = "" + buildAssetsURL("google_logo.DqYhSFa2.webp");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GoogleComponent",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<img${ssrRenderAttrs(mergeProps({
        src: unref(logo),
        class: "h-16 shadow rounded-xl w-fit py-4 px-6 hover:bg-gray-100 transition"
      }, _attrs))}>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-kit/GoogleComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=GoogleComponent-Cd1it7gx.mjs.map
