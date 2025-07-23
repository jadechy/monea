import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CategoryLabel",
  __ssrInlineRender: true,
  props: {
    category: { default: () => ({
      label: "default",
      color: "gray"
    }) },
    edit: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex items-center gap-8 w-fit rounded-full px-3 py-1.5", [
          `bg-${_ctx.category.color}-100 text-${_ctx.category.color}-500 hover:bg-${_ctx.category.color}-200`
        ]]
      }, _attrs))}><p>${ssrInterpolate(_ctx.category.label !== "default" ? _ctx.category.label : "Cr\xE9er une cat\xE9gorie")}</p>`);
      if (_ctx.$slots.add) {
        _push(`<div class="flex gap-4">`);
        ssrRenderSlot(_ctx.$slots, "add", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-kit/CategoryLabel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=CategoryLabel-BTL_oUfU.mjs.map
