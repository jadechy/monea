import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { c as getCurrentMonthIsoString } from './date-Bb1fHl5x.mjs';
import { useQuery } from '@tanstack/vue-query';
import { u as useBudgetService } from './budgetService-CfQ7_k9B.mjs';
import { g as useRoute } from './server.mjs';

const truncateToTenth = (num) => {
  return Math.trunc(num * 100) / 100;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RemainingBudget",
  __ssrInlineRender: true,
  props: {
    label: { default: "Budget restant" },
    initialBudget: { type: Boolean }
  },
  setup(__props) {
    const route = useRoute();
    const { group_id, category_id } = route.params;
    const {
      fetchBudgetGroup,
      fetchBudgetGroupDateRemaining,
      fetchBudgetCategoryDateRemaining
    } = useBudgetService();
    const query = () => {
      if (category_id)
        return {
          key: ["budget", "remaining", "category", category_id],
          fn: fetchBudgetCategoryDateRemaining(
            category_id,
            getCurrentMonthIsoString()
          )
        };
      else if (__props.initialBudget)
        return {
          key: ["budget", "initial", group_id],
          fn: fetchBudgetGroup(group_id, getCurrentMonthIsoString())
        };
      else
        return {
          key: ["budget", "remaining", group_id],
          fn: fetchBudgetGroupDateRemaining(group_id, getCurrentMonthIsoString())
        };
    };
    const { data: test } = useQuery({
      queryKey: query().key,
      queryFn: () => query().fn
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "item block lg:flex w-fit lg:w-1/4 rounded-lg" }, _attrs))}><p>${ssrInterpolate(_ctx.label)}</p><p class="font-bold">${ssrInterpolate(unref(truncateToTenth)((_a2 = (_a = unref(test)) == null ? void 0 : _a.amount) != null ? _a2 : 100))}\u20AC</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-kit/RemainingBudget.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hasEditPermission = (group) => group.userRole == "admin" || group.userRole === "author";

export { _sfc_main as _, hasEditPermission as h, truncateToTenth as t };
//# sourceMappingURL=authorization-C0XDHkz3.mjs.map
