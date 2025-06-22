import ForgotView from "@/views/auth/ForgotView.vue"
import IndexAuth from "@/views/auth/IndexAuth.vue"
import LoginView from "@/views/auth/LoginView.vue"
import RegisterView from "@/views/auth/RegisterView.vue"

export default [
  {
    path: "/auth",
    component: IndexAuth,
    children: [
      {
        path: "login",
        name: "login",
        component: LoginView,
      },
      {
        path: "register",
        name: "register",
        component: RegisterView,
      },
      {
        path: "forgot",
        name: "forgot",
        component: ForgotView,
      },
    ],
  },
]
