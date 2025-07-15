import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "BaseSection",
  __ssrInlineRender: true,
  props: {
    label: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(_attrs)}><header class="flex justify-between items-end"><h2 class="italic text-gray-600">${ssrInterpolate(_ctx.label)}</h2>`);
      ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
      _push(`</header><div class="flex flex-col gap-3 mt-1.5">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-kit/BaseSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BaseSection-DH0Z2QsE.mjs.map
