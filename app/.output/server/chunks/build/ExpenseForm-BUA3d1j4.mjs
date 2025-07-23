import { _ as _sfc_main$2 } from './SubHeader-C9ASyuh9.mjs';
import { _ as _sfc_main$3 } from './WrapperInput-DUkpYxM9.mjs';
import { _ as _sfc_main$4 } from './FormInput-Br_NI2sO.mjs';
import { _ as _sfc_main$5 } from './BaseSection-DH0Z2QsE.mjs';
import { defineComponent, computed, ref, watchEffect, unref, withCtx, createVNode, createTextVNode, createBlock, createCommentVNode, openBlock, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { u as useExpenseMutation, N as NewExpenseSchema, F as FrequencyEnum } from './useExpenseMutation-1MMDEY_K.mjs';
import script$6 from './index-atZ0DPFK.mjs';
import script$2 from './index-vLeze0-z.mjs';
import script$1 from './index-CBQOMMAL.mjs';
import script$3 from './index-ByyIQ08N.mjs';
import { g as getGroupColor } from './getColor-DuOHLePg.mjs';
import script from './index-CkuOTgVv.mjs';
import { zodResolver } from '@primeuix/forms/resolvers/zod';
import { f as useRoute, c as useGroupsStore, b as useAuthStore } from './server.mjs';
import { e as convertToLocalDate } from './date-Bb1fHl5x.mjs';
import { storeToRefs } from 'pinia';
import { useQuery } from '@tanstack/vue-query';
import { u as useMemberService } from './memberService-BD3sQVr6.mjs';
import script$4 from './index-DNCIhQhs.mjs';
import script$5 from './index-IJ23DGgI.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RecurringExpenseFormComponent",
  __ssrInlineRender: true,
  props: {
    form: {},
    recurringExpense: { default: null }
  },
  setup(__props) {
    const isActif = ref(__props.recurringExpense !== void 0);
    const { repetitionCount, frequency, endDate, spentAt } = __props.form;
    const deleteRecurring = () => {
      repetitionCount.value = null;
      frequency.value = null;
      endDate.value = null;
      isActif.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_WrapperInput = _sfc_main$3;
      if (!isActif.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "item hover" }, _attrs))}><p>Cr\xE9er une r\xE9currence</p><i class="pi pi-arrow-right"></i></div>`);
      } else {
        _push(ssrRenderComponent(unref(script$6), mergeProps({ class: "w-full" }, _attrs), {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex lg:justify-center items-center gap-4 flex-wrap w-full"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_WrapperInput, {
                form: _ctx.form,
                name: "repetitionCount",
                placeholder: "Nombre de fois",
                class: "max-w-26"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(script$2), {
                      class: "w-full",
                      name: "repetitionCount",
                      fluid: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(script$2), {
                        class: "w-full",
                        name: "repetitionCount",
                        fluid: ""
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<p${_scopeId}>par</p>`);
              _push2(ssrRenderComponent(_component_WrapperInput, {
                name: "frequency",
                form: _ctx.form,
                placeholder: "R\xE9currence",
                class: "max-w-32"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(script$1), {
                      name: "frequency",
                      options: unref(FrequencyEnum).options,
                      class: "w-full",
                      "label-class": "capitalize",
                      fluid: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(script$1), {
                        name: "frequency",
                        options: unref(FrequencyEnum).options,
                        class: "w-full",
                        "label-class": "capitalize",
                        fluid: ""
                      }, null, 8, ["options"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<p${_scopeId}>jusqu&#39;au</p>`);
              _push2(ssrRenderComponent(_component_WrapperInput, {
                name: "endDate",
                form: _ctx.form,
                placeholder: "jj/mm/yyyy",
                class: "max-w-34"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(script$3), {
                      name: "endDate",
                      "show-icon": "",
                      "icon-display": "input",
                      fluid: "",
                      "min-date": unref(spentAt) ? new Date(unref(spentAt).value) : void 0,
                      "date-format": "dd/mm/yy"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(script$3), {
                        name: "endDate",
                        "show-icon": "",
                        "icon-display": "input",
                        fluid: "",
                        "min-date": unref(spentAt) ? new Date(unref(spentAt).value) : void 0,
                        "date-format": "dd/mm/yy"
                      }, null, 8, ["min-date"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex lg:justify-center items-center gap-4 flex-wrap w-full" }, [
                  createVNode(_component_WrapperInput, {
                    form: _ctx.form,
                    name: "repetitionCount",
                    placeholder: "Nombre de fois",
                    class: "max-w-26"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(script$2), {
                        class: "w-full",
                        name: "repetitionCount",
                        fluid: ""
                      })
                    ]),
                    _: 1
                  }, 8, ["form"]),
                  createVNode("p", null, "par"),
                  createVNode(_component_WrapperInput, {
                    name: "frequency",
                    form: _ctx.form,
                    placeholder: "R\xE9currence",
                    class: "max-w-32"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(script$1), {
                        name: "frequency",
                        options: unref(FrequencyEnum).options,
                        class: "w-full",
                        "label-class": "capitalize",
                        fluid: ""
                      }, null, 8, ["options"])
                    ]),
                    _: 1
                  }, 8, ["form"]),
                  createVNode("p", null, "jusqu'au"),
                  createVNode(_component_WrapperInput, {
                    name: "endDate",
                    form: _ctx.form,
                    placeholder: "jj/mm/yyyy",
                    class: "max-w-34"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(script$3), {
                        name: "endDate",
                        "show-icon": "",
                        "icon-display": "input",
                        fluid: "",
                        "min-date": unref(spentAt) ? new Date(unref(spentAt).value) : void 0,
                        "date-format": "dd/mm/yy"
                      }, null, 8, ["min-date"])
                    ]),
                    _: 1
                  }, 8, ["form"])
                ])
              ];
            }
          }),
          footer: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="item hover w-fit mx-auto mt-12"${_scopeId}><i class="pi pi-times-circle mr-2"${_scopeId}></i>Supprimer la r\xE9currence </p>`);
            } else {
              return [
                createVNode("p", {
                  class: "item hover w-fit mx-auto mt-12",
                  onClick: deleteRecurring
                }, [
                  createVNode("i", { class: "pi pi-times-circle mr-2" }),
                  createTextVNode("Supprimer la r\xE9currence ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/expense/RecurringExpenseFormComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useMemberMutation = () => {
  const route = useRoute();
  const { group_id } = route.params;
  const { getMembersByGroup } = useMemberService();
  const { data: members } = useQuery({
    queryKey: ["members-by-group", group_id],
    queryFn: () => getMembersByGroup(group_id),
    enabled: !!group_id
  });
  return { members };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ExpenseForm",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { group_id, category_id, expense_id } = route.params;
    console.log(expense_id);
    const { group } = storeToRefs(useGroupsStore());
    const { user } = useAuthStore();
    const categories = computed(() => {
      var _a;
      if (!group.value) return [];
      return (_a = group == null ? void 0 : group.value.categories) == null ? void 0 : _a.filter(
        (category) => category.label !== "default"
      );
    });
    const {
      expense,
      createExpenseMutation,
      updateExpenseMutation,
      deleteExpenseMutation
    } = useExpenseMutation();
    const { members } = useMemberMutation();
    const formattedMembers = computed(
      () => {
        var _a;
        return (_a = members.value) == null ? void 0 : _a.map((member) => ({
          label: member.user.username,
          value: member.user.id
        }));
      }
    );
    const getInitialAuthor = (userAuthorId) => computed(
      () => {
        var _a;
        return userAuthorId && ((_a = formattedMembers.value) == null ? void 0 : _a.filter(
          (member) => member.value === userAuthorId
        )[0]);
      }
    );
    const onDelete = () => {
      if (!expense_id) return;
      if (confirm("Es-tu s\xFBr de vouloir supprimer la d\xE9pense ?")) {
        deleteExpenseMutation.mutate();
      }
    };
    const initialValues = ref();
    watchEffect(() => {
      var _a2, _b2, _c2;
      var _a, _b, _c, _d, _e;
      if (!members.value || !formattedMembers.value) return;
      if (expense == null ? void 0 : expense.value) {
        const e = expense.value;
        initialValues.value = {
          title: e.title,
          amount: e.amount,
          spentAt: new Date(e.spentAt),
          author: getInitialAuthor(e.creator.id).value,
          category: e.category.label !== "default" ? e.category : null,
          frequency: (_a2 = (_a = e.recurring) == null ? void 0 : _a.frequency) != null ? _a2 : null,
          repetitionCount: (_b2 = (_b = e.recurring) == null ? void 0 : _b.repetitionCount) != null ? _b2 : null,
          endDate: (_c2 = (_c = e.recurring) == null ? void 0 : _c.endDate) != null ? _c2 : null,
          participants: ((_d = e.participants) == null ? void 0 : _d.map((p) => {
            var _a22;
            return (_a22 = formattedMembers.value) == null ? void 0 : _a22.find((m) => m.value === p.id);
          }).filter(Boolean)) || []
        };
      } else {
        initialValues.value = {
          title: "",
          amount: null,
          spentAt: /* @__PURE__ */ new Date(),
          author: user && getInitialAuthor(user == null ? void 0 : user.id).value,
          category: (_e = categories.value) == null ? void 0 : _e.find(
            (category) => category.id === Number(category_id)
          ),
          frequency: null,
          repetitionCount: null,
          endDate: null,
          participants: []
        };
      }
    });
    const onFormSubmit = (form) => {
      var _a;
      if (!form.valid || !group.value) return;
      const {
        title,
        amount,
        spentAt,
        author,
        category,
        frequency,
        repetitionCount,
        endDate,
        participants
      } = form.states;
      const data = {
        title: title.value,
        amount: amount.value,
        spentAt: convertToLocalDate(new Date(spentAt.value)),
        groupId: group.value.id,
        authorId: author.value.value,
        participants: (_a = participants.value) == null ? void 0 : _a.map(
          (participant) => participant.value
        )
      };
      if (expense_id) data["id"] = Number(expense_id);
      if (category && category.value) {
        data["categoryId"] = Number(category.value.id);
      }
      if (frequency && repetitionCount && endDate && frequency.value && repetitionCount.value && endDate.value) {
        data["recurring"] = {
          frequency: frequency.value,
          repetitionCount: repetitionCount.value,
          endDate: endDate.value
        };
      } else data["recurring"] = null;
      if (expense_id && expense) updateExpenseMutation.mutate(data);
      else createExpenseMutation.mutate(data);
    };
    const baseRoute = `/groups/${group_id}`;
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_SubHeader = _sfc_main$2;
      const _component_WrapperInput = _sfc_main$3;
      const _component_FormInput = _sfc_main$4;
      const _component_BaseSection = _sfc_main$5;
      const _component_RecurringExpenseFormComponent = _sfc_main$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_SubHeader, {
        label: unref(expense) ? unref(expense).title : "Nouveau expense",
        color: (_a = unref(group)) == null ? void 0 : _a.color,
        to: unref(expense) ? `${baseRoute}/expense/${unref(expense_id)}` : baseRoute
      }, null, _parent));
      if (!unref(initialValues) || !unref(formattedMembers)) {
        _push(`<div class="flex justify-center p-8"><p>Chargement...</p></div>`);
      } else {
        _push(ssrRenderComponent(unref(script), {
          "initial-values": unref(initialValues),
          resolver: unref(zodResolver)(unref(NewExpenseSchema)),
          class: "flex flex-col items-center gap-10 lg:w-2/3 mx-auto",
          onSubmit: onFormSubmit
        }, {
          default: withCtx(($form, _push2, _parent2, _scopeId) => {
            var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
            if (_push2) {
              if (unref(categories) && unref(categories).length > 0) {
                _push2(ssrRenderComponent(_component_WrapperInput, {
                  name: "category",
                  form: $form,
                  placeholder: "Cat\xE9gorie"
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    var _a4, _b3;
                    var _a3, _b2, _c2, _d2;
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(script$1), {
                        name: "category",
                        options: unref(categories),
                        "option-label": "label",
                        class: "w-full md:w-56",
                        "label-class": [
                          "capitalize",
                          `text-${(_a4 = (_b2 = (_a3 = $form.category) == null ? void 0 : _a3.value) == null ? void 0 : _b2.color) != null ? _a4 : "gray"}-600`
                        ]
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(script$1), {
                          name: "category",
                          options: unref(categories),
                          "option-label": "label",
                          class: "w-full md:w-56",
                          "label-class": [
                            "capitalize",
                            `text-${(_b3 = (_d2 = (_c2 = $form.category) == null ? void 0 : _c2.value) == null ? void 0 : _d2.color) != null ? _b3 : "gray"}-600`
                          ]
                        }, null, 8, ["options", "label-class"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_FormInput, {
                name: "title",
                placeholder: "Nom",
                form: $form
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex gap-4 w-full items-end"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_WrapperInput, {
                form: $form,
                name: "amount",
                placeholder: "Prix"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(script$2), {
                      class: "w-full",
                      name: "amount"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(script$2), {
                        class: "w-full",
                        name: "amount"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<p class="text-3xl font-black mb-1"${_scopeId}>\u20AC</p></div><div class="flex justify-between w-full gap-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_WrapperInput, {
                form: $form,
                name: "author",
                placeholder: "Auteur"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(script$1), {
                      name: "author",
                      options: unref(formattedMembers),
                      "option-label": "label",
                      "label-class": ["capitalize"],
                      class: "w-2/3"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(script$1), {
                        name: "author",
                        options: unref(formattedMembers),
                        "option-label": "label",
                        "label-class": ["capitalize"],
                        class: "w-2/3"
                      }, null, 8, ["options"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_WrapperInput, {
                name: "spentAt",
                form: $form,
                placeholder: "jj/mm/yyyy"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(script$3), {
                      name: "spentAt",
                      "show-icon": "",
                      "icon-display": "input",
                      "date-format": "dd/mm/yy"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(script$3), {
                        name: "spentAt",
                        "show-icon": "",
                        "icon-display": "input",
                        "date-format": "dd/mm/yy"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_BaseSection, {
                label: "Participants",
                class: "w-full"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(script$4), {
                      name: "participants",
                      options: unref(formattedMembers),
                      multiple: "",
                      "option-label": "label",
                      class: "w-full",
                      fluid: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(script$4), {
                        name: "participants",
                        options: unref(formattedMembers),
                        multiple: "",
                        "option-label": "label",
                        class: "w-full",
                        fluid: ""
                      }, null, 8, ["options"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (((_a2 = unref(group)) == null ? void 0 : _a2.type) === "daily") {
                _push2(ssrRenderComponent(_component_RecurringExpenseFormComponent, {
                  form: $form,
                  "recurring-expense": (_b = unref(expense)) == null ? void 0 : _b.recurring
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (unref(expense)) {
                _push2(`<div class="flex flex-col gap-3 w-64"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(script$5), {
                  class: [unref(getGroupColor)({ color: (_c = unref(group)) == null ? void 0 : _c.color })],
                  type: "submit"
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Modifier la d\xE9pense `);
                    } else {
                      return [
                        createTextVNode(" Modifier la d\xE9pense ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(unref(script$5), {
                  variant: "outlined",
                  class: unref(getGroupColor)({ color: (_d = unref(group)) == null ? void 0 : _d.color, outlined: true }),
                  onClick: ($event) => onDelete()
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Supprimer la d\xE9pense `);
                    } else {
                      return [
                        createTextVNode(" Supprimer la d\xE9pense ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(ssrRenderComponent(unref(script$5), {
                  class: ["w-64", [unref(getGroupColor)({ color: (_e = unref(group)) == null ? void 0 : _e.color })]],
                  type: "submit"
                }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Cr\xE9er la d\xE9pense `);
                    } else {
                      return [
                        createTextVNode(" Cr\xE9er la d\xE9pense ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              }
            } else {
              return [
                unref(categories) && unref(categories).length > 0 ? (openBlock(), createBlock(_component_WrapperInput, {
                  key: 0,
                  name: "category",
                  form: $form,
                  placeholder: "Cat\xE9gorie"
                }, {
                  default: withCtx(() => {
                    var _a4;
                    var _a3, _b2;
                    return [
                      createVNode(unref(script$1), {
                        name: "category",
                        options: unref(categories),
                        "option-label": "label",
                        class: "w-full md:w-56",
                        "label-class": [
                          "capitalize",
                          `text-${(_a4 = (_b2 = (_a3 = $form.category) == null ? void 0 : _a3.value) == null ? void 0 : _b2.color) != null ? _a4 : "gray"}-600`
                        ]
                      }, null, 8, ["options", "label-class"])
                    ];
                  }),
                  _: 2
                }, 1032, ["form"])) : createCommentVNode("", true),
                createVNode(_component_FormInput, {
                  name: "title",
                  placeholder: "Nom",
                  form: $form
                }, null, 8, ["form"]),
                createVNode("div", { class: "flex gap-4 w-full items-end" }, [
                  createVNode(_component_WrapperInput, {
                    form: $form,
                    name: "amount",
                    placeholder: "Prix"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(script$2), {
                        class: "w-full",
                        name: "amount"
                      })
                    ]),
                    _: 2
                  }, 1032, ["form"]),
                  createVNode("p", { class: "text-3xl font-black mb-1" }, "\u20AC")
                ]),
                createVNode("div", { class: "flex justify-between w-full gap-4" }, [
                  createVNode(_component_WrapperInput, {
                    form: $form,
                    name: "author",
                    placeholder: "Auteur"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(script$1), {
                        name: "author",
                        options: unref(formattedMembers),
                        "option-label": "label",
                        "label-class": ["capitalize"],
                        class: "w-2/3"
                      }, null, 8, ["options"])
                    ]),
                    _: 2
                  }, 1032, ["form"]),
                  createVNode(_component_WrapperInput, {
                    name: "spentAt",
                    form: $form,
                    placeholder: "jj/mm/yyyy"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(script$3), {
                        name: "spentAt",
                        "show-icon": "",
                        "icon-display": "input",
                        "date-format": "dd/mm/yy"
                      })
                    ]),
                    _: 2
                  }, 1032, ["form"])
                ]),
                createVNode(_component_BaseSection, {
                  label: "Participants",
                  class: "w-full"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(script$4), {
                      name: "participants",
                      options: unref(formattedMembers),
                      multiple: "",
                      "option-label": "label",
                      class: "w-full",
                      fluid: ""
                    }, null, 8, ["options"])
                  ]),
                  _: 1
                }),
                ((_f = unref(group)) == null ? void 0 : _f.type) === "daily" ? (openBlock(), createBlock(_component_RecurringExpenseFormComponent, {
                  key: 1,
                  form: $form,
                  "recurring-expense": (_g = unref(expense)) == null ? void 0 : _g.recurring
                }, null, 8, ["form", "recurring-expense"])) : createCommentVNode("", true),
                unref(expense) ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "flex flex-col gap-3 w-64"
                }, [
                  createVNode(unref(script$5), {
                    class: [unref(getGroupColor)({ color: (_h = unref(group)) == null ? void 0 : _h.color })],
                    type: "submit"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Modifier la d\xE9pense ")
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(unref(script$5), {
                    variant: "outlined",
                    class: unref(getGroupColor)({ color: (_i = unref(group)) == null ? void 0 : _i.color, outlined: true }),
                    onClick: ($event) => onDelete()
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Supprimer la d\xE9pense ")
                    ]),
                    _: 1
                  }, 8, ["class", "onClick"])
                ])) : (openBlock(), createBlock(unref(script$5), {
                  key: 3,
                  class: ["w-64", [unref(getGroupColor)({ color: (_j = unref(group)) == null ? void 0 : _j.color })]],
                  type: "submit"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Cr\xE9er la d\xE9pense ")
                  ]),
                  _: 1
                }, 8, ["class"]))
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/expense/ExpenseForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ExpenseForm-BUA3d1j4.mjs.map
