import { _ as _sfc_main$5 } from './SubHeader-C9ASyuh9.mjs';
import { _ as _sfc_main$6 } from './FormInput-ek461nlA.mjs';
import { defineComponent, ref, watch, unref, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, isRef, createCommentVNode, mergeProps, useModel, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderAttrs, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { _ as _sfc_main$7 } from './BaseSection-DH0Z2QsE.mjs';
import { useMutation } from '@tanstack/vue-query';
import { u as useMemberService } from './memberService-C3Q4O3K1.mjs';
import { c as useGroupsStore, C as ColorSchema, N as NewGroupSchema, G as GroupTypeEnum, a as script$2$1, M as MemberRoleEnum } from './server.mjs';
import script$3 from './index-CArJ0zZr.mjs';
import script$4 from './index-C2-6mTxS.mjs';
import { _ as _sfc_main$8 } from './CategoryLabel-BTL_oUfU.mjs';
import script$5 from './index-chElUTCA.mjs';
import script$6 from './index-DZrJPbJU.mjs';
import script from './index-CwJbsQ-w.mjs';
import { zodResolver } from '@primeuix/forms/resolvers/zod';
import { g as getGroupColor } from './getColor-DuOHLePg.mjs';
import { storeToRefs } from 'pinia';
import { u as useGroupMutation } from './useGroupMutation-BXeAD7m7.mjs';
import script$1 from './index-DQsNwuAD.mjs';
import script$2 from './index-C7QzsGag.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MembersForm",
  __ssrInlineRender: true,
  props: {
    group: {}
  },
  setup(__props) {
    var _a;
    const props = __props;
    const groupId = (_a = props.group) == null ? void 0 : _a.id;
    const input = ref("");
    const roles = MemberRoleEnum.options;
    const selectedRole = ref(roles[0]);
    const { sendInvitation } = useMemberService();
    const sendInvitationMutation = useMutation({
      mutationFn: sendInvitation,
      onSuccess: () => {
        input.value = "";
      },
      onError: (error) => {
        console.error("Erreur lors de l'invitation :", error);
      }
    });
    const submitInvitation = () => {
      if (!input.value || !groupId) return;
      sendInvitationMutation.mutate({
        role: selectedRole.value,
        groupeId: groupId,
        username: input.value && !input.value.includes("@") ? input.value : void 0,
        mail: input.value && input.value.includes("@") ? input.value : void 0
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$7, mergeProps({ label: "Ajouter un membre" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full lg:w-3/4 flex flex-col items-end"${_scopeId}><div class="flex flex-col md:flex-row gap-5 w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$3), {
              modelValue: input.value,
              "onUpdate:modelValue": ($event) => input.value = $event,
              placeholder: "Pseudo/mail",
              class: "w-full",
              fluid: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(script$4), {
              modelValue: selectedRole.value,
              "onUpdate:modelValue": ($event) => selectedRole.value = $event,
              options: unref(roles),
              placeholder: "Choisissez un role",
              class: "w-full md:w-56"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(script$2$1), {
              variant: "outlined",
              size: "small",
              class: "mt-2 ml-auto",
              onClick: submitInvitation,
              icon: "pi pi-inbox",
              label: "Envoyer la demande"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-full lg:w-3/4 flex flex-col items-end" }, [
                createVNode("div", { class: "flex flex-col md:flex-row gap-5 w-full" }, [
                  createVNode(unref(script$3), {
                    modelValue: input.value,
                    "onUpdate:modelValue": ($event) => input.value = $event,
                    placeholder: "Pseudo/mail",
                    class: "w-full",
                    fluid: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(unref(script$4), {
                    modelValue: selectedRole.value,
                    "onUpdate:modelValue": ($event) => selectedRole.value = $event,
                    options: unref(roles),
                    placeholder: "Choisissez un role",
                    class: "w-full md:w-56"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                ]),
                createVNode(unref(script$2$1), {
                  variant: "outlined",
                  size: "small",
                  class: "mt-2 ml-auto",
                  onClick: submitInvitation,
                  icon: "pi pi-inbox",
                  label: "Envoyer la demande"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/space/MembersForm.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChoiceColor",
  __ssrInlineRender: true,
  props: {
    color: {},
    selected: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["h-12 rounded-sm flex justify-center items-center transition", [`bg-${_ctx.color}-200 hover:bg-${_ctx.color}-300`]]
      }, _attrs))}>`);
      if (_ctx.selected) {
        _push(`<i style="${ssrRenderStyle({ "font-weight": "bold" })}" class="${ssrRenderClass([[`text-${_ctx.color}-600`], "pi pi-check"])}"></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/space/ChoiceColor.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CategoryForm",
  __ssrInlineRender: true,
  props: {
    category: {},
    onSaveCategory: { type: Function },
    mode: {},
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const categoryState = ref({ label: "", color: "gray" });
    const selectedIndex = ref(null);
    watch(
      () => props.modelValue,
      (isOpen) => {
        if (isOpen) {
          categoryState.value = props.category ? { ...props.category } : { label: "", color: "gray" };
          const allowedColors = ColorSchema.options.filter((c) => c !== "gray");
          selectedIndex.value = props.category ? allowedColors.indexOf(
            props.category.color
          ) : null;
        }
      }
    );
    const save = () => {
      if (!categoryState.value.label || selectedIndex.value === null) return;
      const newCategory = {
        label: categoryState.value.label,
        color: ColorSchema.options.filter((c) => c !== "gray")[selectedIndex.value]
      };
      props.onSaveCategory(newCategory);
      emit("update:modelValue", false);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ChoiceColor = _sfc_main$3;
      _push(ssrRenderComponent(unref(script$5), mergeProps({
        visible: _ctx.modelValue,
        modal: "",
        header: _ctx.mode === "edit" ? "Modifier la cat\xE9gorie" : "Cr\xE9er une cat\xE9gorie",
        style: { width: "25rem" },
        "onUpdate:visible": ($event) => emit("update:modelValue", $event)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(script$6), {
              variant: "on",
              class: "mt-1"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(script$3), {
                    id: "label",
                    modelValue: categoryState.value.label,
                    "onUpdate:modelValue": ($event) => categoryState.value.label = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`<label for="label"${_scopeId2}>Nom</label>`);
                } else {
                  return [
                    createVNode(unref(script$3), {
                      id: "label",
                      modelValue: categoryState.value.label,
                      "onUpdate:modelValue": ($event) => categoryState.value.label = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("label", { for: "label" }, "Nom")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, {
              label: "Choisir la couleur",
              class: "my-6"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-5 md:grid-cols-6 gap-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(ColorSchema).options.filter((c) => c !== "gray"), (color, i) => {
                    _push3(ssrRenderComponent(_component_ChoiceColor, {
                      key: i,
                      color,
                      selected: selectedIndex.value === i,
                      onClick: ($event) => selectedIndex.value = i
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-5 md:grid-cols-6 gap-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(ColorSchema).options.filter((c) => c !== "gray"), (color, i) => {
                        return openBlock(), createBlock(_component_ChoiceColor, {
                          key: i,
                          color,
                          selected: selectedIndex.value === i,
                          onClick: ($event) => selectedIndex.value = i
                        }, null, 8, ["color", "selected", "onClick"]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(script$2$1), {
              label: _ctx.mode === "edit" ? "Sauvegarder" : "Ajouter",
              onClick: save
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(unref(script$6), {
                variant: "on",
                class: "mt-1"
              }, {
                default: withCtx(() => [
                  createVNode(unref(script$3), {
                    id: "label",
                    modelValue: categoryState.value.label,
                    "onUpdate:modelValue": ($event) => categoryState.value.label = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("label", { for: "label" }, "Nom")
                ]),
                _: 1
              }),
              createVNode(_sfc_main$7, {
                label: "Choisir la couleur",
                class: "my-6"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid grid-cols-5 md:grid-cols-6 gap-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(ColorSchema).options.filter((c) => c !== "gray"), (color, i) => {
                      return openBlock(), createBlock(_component_ChoiceColor, {
                        key: i,
                        color,
                        selected: selectedIndex.value === i,
                        onClick: ($event) => selectedIndex.value = i
                      }, null, 8, ["color", "selected", "onClick"]);
                    }), 128))
                  ])
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex justify-end" }, [
                createVNode(unref(script$2$1), {
                  label: _ctx.mode === "edit" ? "Sauvegarder" : "Ajouter",
                  onClick: save
                }, null, 8, ["label"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/space/CategoryForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const defaultCategories = [
  {
    label: "Abonnement",
    color: "red"
  },
  {
    label: "Course",
    color: "blue"
  },
  {
    label: "Famille",
    color: "green"
  },
  {
    label: "Sant\xE9",
    color: "orange"
  }
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CategoriesSelection",
  __ssrInlineRender: true,
  props: {
    "modelValue": { default: [] },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const selectedCategory = ref(void 0);
    const mode = ref("create");
    const categoryDialogVisible = ref(false);
    const categories = ref(defaultCategories);
    const addCategory = ({ category }) => {
      model.value.push(category);
      const index = categories.value.indexOf(category);
      categories.value.splice(index, 1);
    };
    const deleteCategory = ({ category }) => {
      if (!model.value) return;
      const index = model == null ? void 0 : model.value.indexOf(category);
      model == null ? void 0 : model.value.splice(index, 1);
      categories.value.push(category);
    };
    const openCreate = () => {
      selectedCategory.value = void 0;
      mode.value = "create";
      categoryDialogVisible.value = true;
    };
    const openEdit = (category) => {
      selectedCategory.value = category;
      mode.value = "edit";
      categoryDialogVisible.value = true;
    };
    const handleSave = (newCat) => {
      if (!model.value) return;
      if (mode.value === "edit" && selectedCategory.value) {
        const index = model == null ? void 0 : model.value.findIndex(
          (c) => {
            var _a;
            return c.label === ((_a = selectedCategory.value) == null ? void 0 : _a.label);
          }
        );
        if (index !== -1) model.value[index] = newCat;
      } else {
        model == null ? void 0 : model.value.push(newCat);
        const i = categories.value.findIndex((c) => c.label === newCat.label);
        if (i !== -1) categories.value.splice(i, 1);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (model.value.length) {
        _push(ssrRenderComponent(_sfc_main$7, { label: "Cat\xE9gorie s\xE9lectionn\xE9" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex gap-1.5 flex-wrap"${_scopeId}><!--[-->`);
              ssrRenderList(model.value, (category, i) => {
                _push2(ssrRenderComponent(_sfc_main$8, {
                  key: i,
                  category,
                  add: ""
                }, {
                  add: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<i class="pi pi-pencil"${_scopeId2}></i><i class="pi pi-minus"${_scopeId2}></i>`);
                    } else {
                      return [
                        createVNode("i", {
                          class: "pi pi-pencil",
                          onClick: ($event) => openEdit(category)
                        }, null, 8, ["onClick"]),
                        createVNode("i", {
                          class: "pi pi-minus",
                          onClick: ($event) => deleteCategory({ category })
                        }, null, 8, ["onClick"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "flex gap-1.5 flex-wrap" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(model.value, (category, i) => {
                    return openBlock(), createBlock(_sfc_main$8, {
                      key: i,
                      category,
                      add: ""
                    }, {
                      add: withCtx(() => [
                        createVNode("i", {
                          class: "pi pi-pencil",
                          onClick: ($event) => openEdit(category)
                        }, null, 8, ["onClick"]),
                        createVNode("i", {
                          class: "pi pi-minus",
                          onClick: ($event) => deleteCategory({ category })
                        }, null, 8, ["onClick"])
                      ]),
                      _: 2
                    }, 1032, ["category"]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$7, { label: "Ajouter une cat\xE9gorie" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-1.5 flex-wrap"${_scopeId}><!--[-->`);
            ssrRenderList(unref(categories), (category, i) => {
              _push2(ssrRenderComponent(_sfc_main$8, {
                key: i,
                category,
                add: ""
              }, {
                add: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i class="pi pi-plus"${_scopeId2}></i>`);
                  } else {
                    return [
                      createVNode("i", {
                        class: "pi pi-plus",
                        onClick: ($event) => addCategory({ category })
                      }, null, 8, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_sfc_main$8, { onClick: openCreate }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              modelValue: unref(categoryDialogVisible),
              "onUpdate:modelValue": ($event) => isRef(categoryDialogVisible) ? categoryDialogVisible.value = $event : null,
              category: unref(selectedCategory),
              mode: unref(mode),
              "on-save-category": handleSave
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex gap-1.5 flex-wrap" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category, i) => {
                  return openBlock(), createBlock(_sfc_main$8, {
                    key: i,
                    category,
                    add: ""
                  }, {
                    add: withCtx(() => [
                      createVNode("i", {
                        class: "pi pi-plus",
                        onClick: ($event) => addCategory({ category })
                      }, null, 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1032, ["category"]);
                }), 128)),
                createVNode(_sfc_main$8, { onClick: openCreate }),
                createVNode(_sfc_main$2, {
                  modelValue: unref(categoryDialogVisible),
                  "onUpdate:modelValue": ($event) => isRef(categoryDialogVisible) ? categoryDialogVisible.value = $event : null,
                  category: unref(selectedCategory),
                  mode: unref(mode),
                  "on-save-category": handleSave
                }, null, 8, ["modelValue", "onUpdate:modelValue", "category", "mode"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/space/CategoriesSelection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GroupForm",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const { group } = storeToRefs(useGroupsStore());
    const selectedIndex = ref(null);
    const currentCategories = ref([]);
    watch(
      () => group.value,
      (updateGroup) => {
        var _a3;
        var _a2;
        if (updateGroup) {
          selectedIndex.value = updateGroup.color && updateGroup.color !== "gray" ? ColorSchema.options.filter((color) => color !== "gray").indexOf(updateGroup.color) : null;
          currentCategories.value = (_a3 = (_a2 = updateGroup.categories) == null ? void 0 : _a2.filter(
            (category) => category.label !== "default"
          )) != null ? _a3 : [];
        }
      },
      { immediate: true }
    );
    const { createGroupMutation, editGroupMutation, deleteGroupMutation } = useGroupMutation(group);
    const handleClick = (i) => {
      selectedIndex.value = selectedIndex.value === i ? null : i;
    };
    const onFormSubmit = (form) => {
      var _a2;
      if (selectedIndex.value === null) return;
      const data = {
        name: form.states.name ? form.states.name.value : (_a2 = group.value) == null ? void 0 : _a2.name,
        type: form.states.type ? form.states.type.value : "personnal",
        color: ColorSchema.options.filter((color) => color !== "gray")[selectedIndex.value],
        categories: currentCategories.value
      };
      if (group.value) {
        editGroupMutation.mutate(data);
      } else {
        createGroupMutation.mutate(data);
      }
    };
    const onDelete = () => {
      if (confirm("Es-tu s\xFBr de vouloir supprimer le groupe ?")) {
        deleteGroupMutation.mutate();
      }
    };
    const initialValues = group.value && group.value ? { name: (_a = group.value.name) != null ? _a : "", type: group.value.type } : {};
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SubHeader = _sfc_main$5;
      const _component_FormInput = _sfc_main$6;
      const _component_MembersForm = _sfc_main$4;
      const _component_BaseSection = _sfc_main$7;
      const _component_ChoiceColor = _sfc_main$3;
      const _component_CategoriesSelection = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SubHeader, {
        label: unref(group) ? unref(group).name : "Nouveau group",
        color: unref(group) ? unref(group).color : "gray",
        to: unref(group) ? `/groups/${unref(group).id}` : "/groups"
      }, null, _parent));
      _push(ssrRenderComponent(unref(script), {
        "initial-values": unref(initialValues),
        resolver: unref(zodResolver)(unref(NewGroupSchema)),
        class: "flex flex-col gap-10",
        onSubmit: onFormSubmit
      }, {
        default: withCtx(($form, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            if (((_a2 = unref(group)) == null ? void 0 : _a2.type) !== "personnal") {
              _push2(ssrRenderComponent(_component_FormInput, {
                class: "w-full lg:w-3/4",
                placeholder: "Nom du group",
                name: "name",
                form: $form,
                fluid: ""
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (((_b = unref(group)) == null ? void 0 : _b.id) && ((_c = unref(group)) == null ? void 0 : _c.type) !== "personnal") {
              _push2(ssrRenderComponent(_component_MembersForm, { group: unref(group) }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (((_d = unref(group)) == null ? void 0 : _d.type) !== "personnal") {
              _push2(ssrRenderComponent(_component_BaseSection, { label: "Type de groupe" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(script$1), {
                      name: "type",
                      class: "flex flex-wrap gap-4"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center gap-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(script$2), {
                            "input-id": unref(GroupTypeEnum).options[1],
                            value: unref(GroupTypeEnum).options[1]
                          }, null, _parent4, _scopeId3));
                          _push4(`<label${ssrRenderAttr("for", unref(GroupTypeEnum).options[1])}${_scopeId3}>Occasional</label></div><div class="flex items-center gap-2"${_scopeId3}>`);
                          _push4(ssrRenderComponent(unref(script$2), {
                            "input-id": unref(GroupTypeEnum).options[2],
                            value: unref(GroupTypeEnum).options[2]
                          }, null, _parent4, _scopeId3));
                          _push4(`<label${ssrRenderAttr("for", unref(GroupTypeEnum).options[2])}${_scopeId3}>R\xE9gulier</label></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode(unref(script$2), {
                                "input-id": unref(GroupTypeEnum).options[1],
                                value: unref(GroupTypeEnum).options[1]
                              }, null, 8, ["input-id", "value"]),
                              createVNode("label", {
                                for: unref(GroupTypeEnum).options[1]
                              }, "Occasional", 8, ["for"])
                            ]),
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode(unref(script$2), {
                                "input-id": unref(GroupTypeEnum).options[2],
                                value: unref(GroupTypeEnum).options[2]
                              }, null, 8, ["input-id", "value"]),
                              createVNode("label", {
                                for: unref(GroupTypeEnum).options[2]
                              }, "R\xE9gulier", 8, ["for"])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(script$1), {
                        name: "type",
                        class: "flex flex-wrap gap-4"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(unref(script$2), {
                              "input-id": unref(GroupTypeEnum).options[1],
                              value: unref(GroupTypeEnum).options[1]
                            }, null, 8, ["input-id", "value"]),
                            createVNode("label", {
                              for: unref(GroupTypeEnum).options[1]
                            }, "Occasional", 8, ["for"])
                          ]),
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(unref(script$2), {
                              "input-id": unref(GroupTypeEnum).options[2],
                              value: unref(GroupTypeEnum).options[2]
                            }, null, 8, ["input-id", "value"]),
                            createVNode("label", {
                              for: unref(GroupTypeEnum).options[2]
                            }, "R\xE9gulier", 8, ["for"])
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_BaseSection, { label: "Choisir la couleur" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(ColorSchema).options.filter(
                    (color) => color !== "gray"
                  ), (color, i) => {
                    _push3(ssrRenderComponent(_component_ChoiceColor, {
                      key: i,
                      color,
                      selected: unref(selectedIndex) === i,
                      onClick: ($event) => handleClick(i)
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(ColorSchema).options.filter(
                        (color) => color !== "gray"
                      ), (color, i) => {
                        return openBlock(), createBlock(_component_ChoiceColor, {
                          key: i,
                          color,
                          selected: unref(selectedIndex) === i,
                          onClick: ($event) => handleClick(i)
                        }, null, 8, ["color", "selected", "onClick"]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CategoriesSelection, {
              modelValue: unref(currentCategories),
              "onUpdate:modelValue": ($event) => isRef(currentCategories) ? currentCategories.value = $event : null
            }, null, _parent2, _scopeId));
            if (unref(group)) {
              _push2(`<div class="flex flex-col gap-3 w-64 self-center"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(script$2$1), {
                class: [unref(getGroupColor)({ color: (_e = unref(group)) == null ? void 0 : _e.color })],
                type: "submit",
                label: "Modifier le groupe"
              }, null, _parent2, _scopeId));
              if (unref(group).type !== "personnal" && unref(group).userRole === "author") {
                _push2(ssrRenderComponent(unref(script$2$1), {
                  variant: "outlined",
                  class: unref(getGroupColor)({ color: (_f = unref(group)) == null ? void 0 : _f.color, outlined: true }),
                  label: "Supprimer le groupe",
                  onClick: ($event) => onDelete()
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<div class="flex justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(script$2$1), {
                class: ["w-64", [unref(getGroupColor)({ color: "gray" })]],
                type: "submit",
                label: "Cr\xE9er le groupe"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              ((_g = unref(group)) == null ? void 0 : _g.type) !== "personnal" ? (openBlock(), createBlock(_component_FormInput, {
                key: 0,
                class: "w-full lg:w-3/4",
                placeholder: "Nom du group",
                name: "name",
                form: $form,
                fluid: ""
              }, null, 8, ["form"])) : createCommentVNode("", true),
              ((_h = unref(group)) == null ? void 0 : _h.id) && ((_i = unref(group)) == null ? void 0 : _i.type) !== "personnal" ? (openBlock(), createBlock(_component_MembersForm, {
                key: 1,
                group: unref(group)
              }, null, 8, ["group"])) : createCommentVNode("", true),
              ((_j = unref(group)) == null ? void 0 : _j.type) !== "personnal" ? (openBlock(), createBlock(_component_BaseSection, {
                key: 2,
                label: "Type de groupe"
              }, {
                default: withCtx(() => [
                  createVNode(unref(script$1), {
                    name: "type",
                    class: "flex flex-wrap gap-4"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(unref(script$2), {
                          "input-id": unref(GroupTypeEnum).options[1],
                          value: unref(GroupTypeEnum).options[1]
                        }, null, 8, ["input-id", "value"]),
                        createVNode("label", {
                          for: unref(GroupTypeEnum).options[1]
                        }, "Occasional", 8, ["for"])
                      ]),
                      createVNode("div", { class: "flex items-center gap-2" }, [
                        createVNode(unref(script$2), {
                          "input-id": unref(GroupTypeEnum).options[2],
                          value: unref(GroupTypeEnum).options[2]
                        }, null, 8, ["input-id", "value"]),
                        createVNode("label", {
                          for: unref(GroupTypeEnum).options[2]
                        }, "R\xE9gulier", 8, ["for"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_BaseSection, { label: "Choisir la couleur" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(ColorSchema).options.filter(
                      (color) => color !== "gray"
                    ), (color, i) => {
                      return openBlock(), createBlock(_component_ChoiceColor, {
                        key: i,
                        color,
                        selected: unref(selectedIndex) === i,
                        onClick: ($event) => handleClick(i)
                      }, null, 8, ["color", "selected", "onClick"]);
                    }), 128))
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_CategoriesSelection, {
                modelValue: unref(currentCategories),
                "onUpdate:modelValue": ($event) => isRef(currentCategories) ? currentCategories.value = $event : null
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              unref(group) ? (openBlock(), createBlock("div", {
                key: 3,
                class: "flex flex-col gap-3 w-64 self-center"
              }, [
                createVNode(unref(script$2$1), {
                  class: [unref(getGroupColor)({ color: (_k = unref(group)) == null ? void 0 : _k.color })],
                  type: "submit",
                  label: "Modifier le groupe"
                }, null, 8, ["class"]),
                unref(group).type !== "personnal" && unref(group).userRole === "author" ? (openBlock(), createBlock(unref(script$2$1), {
                  key: 0,
                  variant: "outlined",
                  class: unref(getGroupColor)({ color: (_l = unref(group)) == null ? void 0 : _l.color, outlined: true }),
                  label: "Supprimer le groupe",
                  onClick: ($event) => onDelete()
                }, null, 8, ["class", "onClick"])) : createCommentVNode("", true)
              ])) : (openBlock(), createBlock("div", {
                key: 4,
                class: "flex justify-center"
              }, [
                createVNode(unref(script$2$1), {
                  class: ["w-64", [unref(getGroupColor)({ color: "gray" })]],
                  type: "submit",
                  label: "Cr\xE9er le groupe"
                }, null, 8, ["class"])
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/GroupForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=GroupForm-DGhsaIF0.mjs.map
