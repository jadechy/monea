import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { f as useRuntimeConfig } from './server.mjs';

const logo = "" + buildAssetsURL("google_logo.DqYhSFa2.webp");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GoogleComponent",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    console.log(config.public.apiBase);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div>API: ${ssrInterpolate(unref(config).public.apiBase)}</div><img${ssrRenderAttr("src", unref(logo))} class="h-16 shadow rounded-xl w-fit py-4 px-6 hover:bg-gray-100 transition"><!--]-->`);
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
//# sourceMappingURL=GoogleComponent-wSOheiWZ.mjs.map
