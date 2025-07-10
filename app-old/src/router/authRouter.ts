import ConfirmView from "@/views/auth/confirm.vue"
import ForgotView from "@/views/auth/forgot.vue"
import IndexAuth from "@/views/auth/index.vue"
import LoginView from "@/views/auth/login.vue"
import OAuthCallback from "@/views/auth/OAuthCallback.vue"
import RegisterView from "@/views/auth/register.vue"

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
