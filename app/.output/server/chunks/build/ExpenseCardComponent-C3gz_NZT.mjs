import { defineComponent, resolveComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './CategoryLabel-BTL_oUfU.mjs';
import { d as default_avatar } from './default_avatar-ixvbQY52.mjs';
import { e as useRoute } from './server.mjs';
import script from './index-CMfZuAsG.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ExpenseCardComponent",
  __ssrInlineRender: true,
  props: {
    expense: {},
    groupId: {}
  },
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(ssrRenderComponent(_component_router_link, mergeProps({
        to: `${unref(route).path}/expense/${_ctx.expense.id}`,
        class: "flex shadow px-4 py-3 justify-between w-full rounded-3xl hover:bg-gray-50"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div${_scopeId}><p class="font-bold mb-2.5"${_scopeId}>${ssrInterpolate(_ctx.expense.title)}</p><div class="flex items-center gap-2.5"${_scopeId}>`);
            if (_ctx.expense.category.label !== "default") {
              _push2(ssrRenderComponent(_sfc_main$1, {
                category: _ctx.expense.category
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(script), {
              label: _ctx.expense.creator.username,
              image: (_a = _ctx.expense.creator.picture) != null ? _a : unref(default_avatar)
            }, null, _parent2, _scopeId));
            _push2(`</div></div><p${_scopeId}><span class="font-bold"${_scopeId}>${ssrInterpolate(_ctx.expense.amount)}</span>\u20AC </p>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", { class: "font-bold mb-2.5" }, toDisplayString(_ctx.expense.title), 1),
                createVNode("div", { class: "flex items-center gap-2.5" }, [
                  _ctx.expense.category.label !== "default" ? (openBlock(), createBlock(_sfc_main$1, {
                    key: 0,
                    category: _ctx.expense.category
                  }, null, 8, ["category"])) : createCommentVNode("", true),
                  createVNode(unref(script), {
                    label: _ctx.expense.creator.username,
                    image: (_b = _ctx.expense.creator.picture) != null ? _b : unref(default_avatar)
                  }, null, 8, ["label", "image"])
                ])
              ]),
              createVNode("p", null, [
                createVNode("span", { class: "font-bold" }, toDisplayString(_ctx.expense.amount), 1),
                createTextVNode("\u20AC ")
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-kit/ExpenseCardComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ExpenseCardComponent-C3gz_NZT.mjs.map
