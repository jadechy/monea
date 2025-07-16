import { defineComponent, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { a as useRouter } from './server.mjs';
import script from './index-IJ23DGgI.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddAction",
  __ssrInlineRender: true,
  props: {
    to: {},
    params: {},
    query: {}
  },
  setup(__props) {
    const router = useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(script), mergeProps({
        size: "large",
        icon: "pi pi-plus",
        "aria-label": "Filter",
        class: "fixed bottom-4 right-4",
        onClick: ($event) => unref(router).push(_ctx.to)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-kit/AddAction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=AddAction-BwZJ_x_i.mjs.map
