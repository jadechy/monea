import { _ as _sfc_main$2 } from './SubHeader-C9ASyuh9.mjs';
import { _ as _sfc_main$3, h as hasEditPermission } from './authorization-8JrFTBWl.mjs';
import script$1 from './index-C4htuZN6.mjs';
import { defineComponent, ref, computed, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, mergeProps, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import script from './index-chElUTCA.mjs';
import { f as useRoute, c as useGroupsStore, u as useRouter, a as script$2 } from './server.mjs';
import { _ as _sfc_main$4 } from './BaseSection-DH0Z2QsE.mjs';
import { _ as _sfc_main$5 } from './ExpenseCardComponent-DBo2ngfB.mjs';
import { _ as _sfc_main$6 } from './AddAction-DUUaBN_W.mjs';
import { c as formatDayMonth } from './date-Bb1fHl5x.mjs';
import { g as getGroupColor } from './getColor-DuOHLePg.mjs';
import { storeToRefs } from 'pinia';
import { u as useGroupMutation } from './useGroupMutation-BXeAD7m7.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ImageUploadDialog",
  __ssrInlineRender: true,
  props: {
    label: { default: "T\xE9l\xE9verser une image" },
    uploadFn: {}
  },
  setup(__props, { expose: __expose }) {
    const { uploadFn } = __props;
    const visible = ref(false);
    const selectedFile = ref(null);
    const previewUrl = ref(null);
    const open = () => {
      visible.value = true;
    };
    const close = () => {
      visible.value = false;
      selectedFile.value = null;
      previewUrl.value = null;
    };
    const onSelect = (event) => {
      var _a;
      const file = (_a = event.files) == null ? void 0 : _a[0];
      if (file) {
        selectedFile.value = file;
        previewUrl.value = URL.createObjectURL(file);
      }
    };
    const submit = async () => {
      if (!selectedFile.value) return;
      await uploadFn(selectedFile.value);
      close();
    };
    __expose({ open, close });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FileUpload = script$1;
      _push(ssrRenderComponent(unref(script), mergeProps({
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        modal: "",
        header: _ctx.label,
        style: { width: "30rem" }
      }, _attrs), {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(script$2), {
              label: "Annuler",
              icon: "pi pi-times",
              text: "",
              onClick: close
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(script$2), {
              label: "Sauvegarder",
              icon: "pi pi-check",
              disabled: !selectedFile.value,
              onClick: submit
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(script$2), {
                label: "Annuler",
                icon: "pi pi-times",
                text: "",
                onClick: close
              }),
              createVNode(unref(script$2), {
                label: "Sauvegarder",
                icon: "pi pi-check",
                disabled: !selectedFile.value,
                onClick: submit
              }, null, 8, ["disabled"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-center items-center gap-10"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FileUpload, {
              ref: "uploader",
              name: "image",
              "custom-upload": true,
              accept: "image/*",
              mode: "basic",
              auto: "",
              "choose-label": "Parcourir",
              onSelect
            }, null, _parent2, _scopeId));
            if (previewUrl.value) {
              _push2(`<img${ssrRenderAttr("src", previewUrl.value)} alt="Aper\xE7u" class="w-24 h-24 rounded-full object-cover mt-4"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-center items-center gap-10" }, [
                createVNode(_component_FileUpload, {
                  ref: "uploader",
                  name: "image",
                  "custom-upload": true,
                  accept: "image/*",
                  mode: "basic",
                  auto: "",
                  "choose-label": "Parcourir",
                  onSelect
                }, null, 512),
                previewUrl.value ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: previewUrl.value,
                  alt: "Aper\xE7u",
                  class: "w-24 h-24 rounded-full object-cover mt-4"
                }, null, 8, ["src"])) : createCommentVNode("", true)
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui-kit/ImageUploadDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AllExpensesDisplay",
  __ssrInlineRender: true,
  props: {
    haveCategory: { type: Boolean },
    actionButton: { type: Boolean },
    subHeader: {},
    expensesDate: {},
    category: {}
  },
  setup(__props) {
    const route = useRoute();
    const { group } = storeToRefs(useGroupsStore());
    const dialogRef = ref(null);
    const props = __props;
    const safeExpensesDate = computed(() => {
      var _a;
      return (_a = props.expensesDate) != null ? _a : {};
    });
    const router = useRouter();
    const { uploadCoverGroupMutation } = useGroupMutation(group);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_SubHeader = _sfc_main$2;
      const _component_RemainingBudget = _sfc_main$3;
      const _component_ImageUploadDialog = _sfc_main$1;
      const _component_BaseSection = _sfc_main$4;
      const _component_ExpenseCardComponent = _sfc_main$5;
      const _component_AddAction = _sfc_main$6;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SubHeader, {
        label: _ctx.subHeader.label,
        color: (_a = _ctx.subHeader) == null ? void 0 : _a.color,
        to: _ctx.subHeader.to,
        params: _ctx.subHeader.params
      }, null, _parent));
      if (unref(group)) {
        _push(`<div class="flex flex-col gap-10"><div class="flex flex-col gap-2 sm:flex-row justify-between items-center">`);
        _push(ssrRenderComponent(_component_RemainingBudget, { category: _ctx.category }, null, _parent));
        if (_ctx.actionButton) {
          _push(`<div>`);
          _push(ssrRenderComponent(unref(script$2), {
            icon: "pi pi-eye",
            label: "Budget",
            size: "small",
            class: [unref(getGroupColor)({ color: (_b = unref(group)) == null ? void 0 : _b.color })],
            onClick: ($event) => unref(router).push(`/groups/${unref(group).id}/budget`)
          }, null, _parent));
          if (unref(hasEditPermission)(unref(group))) {
            _push(ssrRenderComponent(unref(script$2), {
              icon: "pi pi-pencil",
              label: "Edition",
              size: "small",
              class: ["mx-2", [unref(getGroupColor)({ color: (_c = unref(group)) == null ? void 0 : _c.color })]],
              onClick: ($event) => unref(router).push(`/groups/${unref(group).id}/edit`)
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (unref(hasEditPermission)(unref(group)) && unref(group).type !== "personnal") {
            _push(ssrRenderComponent(unref(script$2), {
              icon: "pi pi-download",
              label: "Cover",
              size: "small",
              class: [unref(getGroupColor)({ color: (_d = unref(group)) == null ? void 0 : _d.color })],
              onClick: ($event) => {
                var _a2;
                return (_a2 = unref(dialogRef)) == null ? void 0 : _a2.open();
              }
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_ImageUploadDialog, {
          ref_key: "dialogRef",
          ref: dialogRef,
          "upload-fn": (file) => unref(uploadCoverGroupMutation).mutateAsync(file),
          label: "Modifier la cover du groupe."
        }, null, _parent));
        _push(`</div>`);
        if (Object.keys(safeExpensesDate.value).length > 0) {
          _push(`<!--[-->`);
          ssrRenderList(Object.entries(safeExpensesDate.value), ([date, expenses], index) => {
            _push(ssrRenderComponent(_component_BaseSection, {
              key: index,
              label: unref(formatDayMonth)(new Date(date))
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"${_scopeId}><!--[-->`);
                  ssrRenderList(expenses, (expense) => {
                    _push2(ssrRenderComponent(_component_ExpenseCardComponent, {
                      key: expense.id,
                      "group-id": unref(group).id,
                      expense
                    }, null, _parent2, _scopeId));
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(expenses, (expense) => {
                        return openBlock(), createBlock(_component_ExpenseCardComponent, {
                          key: expense.id,
                          "group-id": unref(group).id,
                          expense
                        }, null, 8, ["group-id", "expense"]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]-->`);
        } else {
          _push(`<p>Cr\xE9er votre premi\xE8re d\xE9pense !</p>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(group) && unref(group).userRole !== "viewer" && unref(group).userRole !== "banned") {
        _push(ssrRenderComponent(_component_AddAction, {
          to: `${unref(route).path}/expense/new`,
          class: [unref(getGroupColor)({ color: unref(group).color })],
          query: {
            ..._ctx.category ? { category: _ctx.category.id } : { category: 0 }
          }
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/AllExpensesDisplay.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=AllExpensesDisplay-DlTD4XLh.mjs.map
