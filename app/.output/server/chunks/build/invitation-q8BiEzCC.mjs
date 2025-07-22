import { defineComponent, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useMemberService } from './memberService-DLrx04zQ.mjs';
import { e as useRoute } from './server.mjs';
import script from './index-IJ23DGgI.mjs';
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
import '@primeuix/styles/message';
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
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import '@tanstack/vue-query';
import 'zod';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './index-C1vnj6fg.mjs';
import './index-BLn-pl6M.mjs';
import './index-f6-L4oOs.mjs';
import './index-ik-SlIj1.mjs';
import './index-2dA4pXcI.mjs';
import './index-DpRrGZTR.mjs';
import '@primeuix/utils/uuid';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "invitation",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.query.userId;
    const groupeId = route.query.groupeId;
    const invitations = ref([]);
    const { responseInvitation } = useMemberService();
    const respond = async (accepted, invitation) => {
      try {
        await responseInvitation(
          invitation.user.id,
          groupeId != null ? groupeId : invitation.group.id.toString(),
          accepted
        );
        invitations.value = invitations.value.filter(
          (inv) => inv.group.id !== invitation.group.id
        );
      } catch (error) {
        console.error("Erreur lors de la r\xE9ponse \xE0 l'invitation :", error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (invitations.value.length === 0) {
        _push(`<div${ssrRenderAttrs(_attrs)}>Aucune invitation re\xE7ue.</div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(invitations.value, (inv, i) => {
          _push(`<div class="bg-white p-4 shadow rounded-lg mb-4"><p class="mb-2"> Vous avez invit\xE9 \xE0 rejoindre le groupe <strong>${ssrInterpolate(inv.group.name)}</strong> en tant que <em>${ssrInterpolate(inv.role)}</em>. </p><div class="flex gap-2">`);
          _push(ssrRenderComponent(unref(script), {
            icon: "pi pi-check",
            label: "Accepter",
            severity: "success",
            size: "small",
            onClick: ($event) => respond(true, inv)
          }, null, _parent));
          _push(ssrRenderComponent(unref(script), {
            icon: "pi pi-times",
            label: "Refuser",
            severity: "danger",
            size: "small",
            onClick: ($event) => respond(false, inv)
          }, null, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]-->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/invitation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=invitation-q8BiEzCC.mjs.map
