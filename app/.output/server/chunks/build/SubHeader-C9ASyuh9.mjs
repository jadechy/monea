import { defineComponent, mergeProps, resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TitleComponent",
  __ssrInlineRender: true,
  props: {
    label: {},
    color: { default: "gray" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h1${ssrRenderAttrs(mergeProps({
        class: ["font-extrabold text-4xl mb-1.5", [`text-${_ctx.color}-600`]]
      }, _attrs))}>${ssrInterpolate(_ctx.label)}</h1>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/TitleComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BackComponent",
  __ssrInlineRender: true,
  props: {
    to: {},
    params: {},
    query: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(ssrRenderComponent(_component_RouterLink, mergeProps({
        to: _ctx.to,
        class: "border-b-1 py-1.5 pr-1.5 hover:bg-gray-100"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="pi pi-arrow-left mr-4"${_scopeId}></i> Back `);
          } else {
            return [
              createVNode("i", { class: "pi pi-arrow-left mr-4" }),
              createTextVNode(" Back ")
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/BackComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SubHeader",
  __ssrInlineRender: true,
  props: {
    label: {},
    color: {},
    to: {},
    params: {},
    query: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_TitleComponent = _sfc_main$2;
      const _component_BackComponent = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_TitleComponent, {
        label: (_a = _ctx.label) != null ? _a : "erorr",
        color: _ctx.color
      }, null, _parent));
      _push(ssrRenderComponent(_component_BackComponent, { to: _ctx.to }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header/SubHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=SubHeader-C9ASyuh9.mjs.map
