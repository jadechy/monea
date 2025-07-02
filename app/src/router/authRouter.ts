import ConfirmView from "@/views/auth/ConfirmView.vue"
import ForgotView from "@/views/auth/ForgotView.vue"
import IndexAuth from "@/views/auth/IndexAuth.vue"
import LoginView from "@/views/auth/LoginView.vue"
import OAuthCallback from "@/views/auth/OAuthCallback.vue"
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
        path: "confirm",
        name: "confirm",
        component: ConfirmView,
      },
      {
        path: "forgot",
        name: "forgot",
        component: ForgotView,
      },
    ],
  },
  {
    path: "/oauth/callback",
    name: "OAuthCallback",
    component: OAuthCallback,
  },
]
