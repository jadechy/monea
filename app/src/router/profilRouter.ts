import IndexProfilView from "@/views/profil/IndexProfilView.vue"
import ProfilEditView from "@/views/profil/ProfilEditView.vue"
import ProfilView from "@/views/profil/ProfilView.vue"

export default [
  {
    path: "/profil",
    component: IndexProfilView,
    children: [
      {
        path: "",
        name: "profil",
        component: ProfilView,
      },
      {
        path: "edit",
        name: "profil_edit",
        component: ProfilEditView,
      },
    ],
  },
]
