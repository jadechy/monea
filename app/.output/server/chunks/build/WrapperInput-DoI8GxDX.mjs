import { defineComponent, mergeProps, unref, withCtx, renderSlot, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import script from './index-DZrJPbJU.mjs';
import script$1 from './index-Cbv20wDn.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WrapperInput",
  __ssrInlineRender: true,
  props: {
    name: {},
    placeholder: {},
    form: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "input" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(script), {
        variant: "on",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`<label${ssrRenderAttr("for", _ctx.name)} class="font-normal text-gray-400"${_scopeId}>${ssrInterpolate(_ctx.placeholder)}</label>`);
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode("label", {
                for: _ctx.name,
                class: "font-normal text-gray-400"
              }, toDisplayString(_ctx.placeholder), 9, ["for"])
            ];
          }
        }),
        _: 3
      }, _parent));
      if (_ctx.name && ((_a = _ctx.form[_ctx.name]) == null ? void 0 : _a.invalid)) {
        _push(ssrRenderComponent(unref(script$1), {
          severity: "error",
          size: "small"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b;
            if (_push2) {
              _push2(`${ssrInterpolate((_a2 = _ctx.form[_ctx.name].error) == null ? void 0 : _a2.message)}`);
            } else {
              return [
                createTextVNode(toDisplayString((_b = _ctx.form[_ctx.name].error) == null ? void 0 : _b.message), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-kit/input/WrapperInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=WrapperInput-DoI8GxDX.mjs.map
