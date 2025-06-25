import budgetRouter from "./budgetRouter"
import NewSpaceView from "@/views/space/NewSpaceView.vue"
import IndexSpaceId from "@/views/space/id/IndexSpaceId.vue"
import IndexSpace from "@/views/space/IndexSpace.vue"
import SpaceView from "@/views/space/id/SpaceView.vue"
import expenseRouter from "./expenseRouter"
import SpacesView from "@/views/space/SpacesView.vue"

export default [
  {
    path: "/space",
    component: IndexSpace,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "spaces",
        component: SpacesView,
      },
      {
        path: "new",
        name: "new_space",
        component: NewSpaceView,
      },
      {
        path: ":space_id",
        props: true,
        component: IndexSpaceId,

        children: [
          {
            path: "",
            name: "space",
            component: SpaceView,
          },
          {
            path: "edit",
            name: "edit_space",
            component: NewSpaceView,
          },
          ...budgetRouter,
          ...expenseRouter,
        ],
      },
    ],
  },
]
