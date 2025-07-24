import { _ as _sfc_main$1 } from './AllExpensesDisplay-DlTD4XLh.mjs';
import { defineComponent, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { f as useRoute, c as useGroupsStore } from './server.mjs';
import { u as useSeo } from './useSeo-DW2KWPaD.mjs';
import { storeToRefs } from 'pinia';
import { u as useCategoryMutation } from './useCategoryMutation-DB35OXwz.mjs';
import { u as useExpenseMutation } from './useExpenseMutation-B9-DRSqA.mjs';
import './SubHeader-C9ASyuh9.mjs';
import './authorization-8JrFTBWl.mjs';
import './date-Bb1fHl5x.mjs';
import '@tanstack/vue-query';
import './budgetService-ChuA15Ln.mjs';
import 'zod';
import './index-C4htuZN6.mjs';
import '@primeuix/utils/dom';
import './index-DW6oY7cV.mjs';
import './index-v2M6uT44.mjs';
import './index-Cbv20wDn.mjs';
import '@primeuix/utils';
import '@primeuix/styles/message';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/utils/object';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/button';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/badge';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import 'node:url';
import 'ipx';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import '@primeuix/utils/uuid';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './index-MSKA1bv_.mjs';
import './index-chElUTCA.mjs';
import '@primeuix/utils/zindex';
import './index-B44kD9V6.mjs';
import './index-D21vFaAL.mjs';
import './index-Din928lO.mjs';
import './BaseSection-DH0Z2QsE.mjs';
import './ExpenseCardComponent-DBo2ngfB.mjs';
import './CategoryLabel-BTL_oUfU.mjs';
import './default_avatar-ixvbQY52.mjs';
import './index-B3l8jI1_.mjs';
import './index-BX2TxoDU.mjs';
import './AddAction-DUUaBN_W.mjs';
import './getColor-DuOHLePg.mjs';
import './useGroupMutation-BXeAD7m7.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[categoryId]",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c, _d, _e, _f;
    const route = useRoute();
    const { group_id } = route.params;
    const { group } = storeToRefs(useGroupsStore());
    const { category } = useCategoryMutation();
    const { expensesByCategory: expenses } = useExpenseMutation();
    useSeo({
      title: `D\xE9penses de la cat\xE9gorie "${(_a = category.value) == null ? void 0 : _a.label}"`,
      description: `Consultez toutes les d\xE9penses enregistr\xE9es dans la cat\xE9gorie "${(_b = category.value) == null ? void 0 : _b.label}" pour suivre pr\xE9cis\xE9ment votre budget au sein du groupe ${(_c = group.value) == null ? void 0 : _c.name}.`,
      ogTitle: `Suivi des d\xE9penses - ${(_d = category.value) == null ? void 0 : _d.label}`,
      ogDescription: `Visualisez et analysez les d\xE9penses li\xE9es \xE0 la cat\xE9gorie "${(_e = category.value) == null ? void 0 : _e.label}" du groupe ${(_f = group.value) == null ? void 0 : _f.name}. G\xE9rez votre budget efficacement.`
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a3;
      var _a2, _b2;
      const _component_AllExpensesDisplay = _sfc_main$1;
      if (unref(group) && unref(category)) {
        _push(ssrRenderComponent(_component_AllExpensesDisplay, mergeProps({
          group: unref(group),
          "sub-header": {
            label: (_a3 = (_a2 = unref(category)) == null ? void 0 : _a2.label) != null ? _a3 : "error",
            to: `/groups/${unref(group_id)}/budget`,
            color: (_b2 = unref(category)) == null ? void 0 : _b2.color
          },
          "expenses-date": unref(expenses),
          category: unref(category)
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/groups/[group_id]/category/[categoryId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_categoryId_-DwSi0yrW.mjs.map
