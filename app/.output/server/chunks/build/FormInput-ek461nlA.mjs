import { defineComponent, mergeProps, withCtx, unref, readonly, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './WrapperInput-DoI8GxDX.mjs';
import script from './index-CArJ0zZr.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormInput",
  __ssrInlineRender: true,
  props: {
    name: {},
    required: {},
    placeholder: {},
    disabled: {},
    readonly: {},
    type: {},
    autocomplete: {},
    form: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        name: _ctx.name,
        placeholder: _ctx.placeholder,
        form: _ctx.form
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(script), {
              id: _ctx.name,
              name: _ctx.name,
              disabled: _ctx.disabled,
              readonly: "readonly" in _ctx ? _ctx.readonly : unref(readonly),
              type: _ctx.type || "text",
              class: "w-full",
              autocomplete: _ctx.autocomplete
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(script), {
                id: _ctx.name,
                name: _ctx.name,
                disabled: _ctx.disabled,
                readonly: "readonly" in _ctx ? _ctx.readonly : unref(readonly),
                type: _ctx.type || "text",
                class: "w-full",
                autocomplete: _ctx.autocomplete
              }, null, 8, ["id", "name", "disabled", "readonly", "type", "autocomplete"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-kit/input/FormInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=FormInput-ek461nlA.mjs.map
