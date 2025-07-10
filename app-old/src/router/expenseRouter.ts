import EditExpenseView from "@/views/space/id/expense/id/EditExpenseView.vue"
import ExpenseView from "@/views/space/id/expense/id/ExpenseView.vue"
import IndexIdExpense from "@/views/space/id/expense/id/IndexIdExpense.vue"
import IndexExpense from "@/views/space/id/expense/IndexExpense.vue"
import NewExpenseView from "@/views/space/id/expense/NewExpenseView.vue"
import type { RouteLocationNormalized } from "vue-router"

export default [
  {
    path: "expense",
    component: IndexExpense,
    props: true,
    children: [
      {
        path: ":id",
        component: IndexIdExpense,
        props: true,
        children: [
          {
            path: "",
            name: "expense",
            component: ExpenseView,
          },
          {
            path: "edit",
            name: "edit_expense",
            component: EditExpenseView,
          },
        ],
      },
      {
        path: "new",
        name: "new_expense",
        component: NewExpenseView,
        props: (route: RouteLocationNormalized) => ({
          space_id: route.query.space_id,
          category: route.query.category,
        }),
      },
    ],
  },
]
