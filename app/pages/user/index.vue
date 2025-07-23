<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
import { useGroupsStore } from "@/stores/groupStore";
import default_avatar from "@/assets/default_avatar.svg";
import { storeToRefs } from "pinia";
import type ImageUploadDialog from "~/components/ui-kit/ImageUploadDialog.vue";
const { user } = storeToRefs(useAuthStore());
const { personnalGroup } = storeToRefs(useGroupsStore());
const router = useRouter();
const { clearAuth, uploadPicture } = useAuthStore();
const { trackMatomoEvent } = useMatomoTracker();
const dialogRef = ref<InstanceType<typeof ImageUploadDialog> | null>(null);
useSeo({
  title: "Mon profil",
  description:
    "Consultez et modifiez les informations de votre profil utilisateur pour personnaliser votre expérience sur MonApp.",
  ogTitle: "Profil utilisateur",
  ogDescription:
    "Gérez vos informations personnelles et paramètres de compte depuis votre profil Monea.",
  image: user.value?.picture ?? undefined,
});
</script>

<template>
  <ClientOnly>
    <div v-if="user" class="flex flex-col justify-center items-center">
      <div class="relative">
        <img
          :src="user.picture ?? default_avatar"
          class="rounded-full w-32 h-32 bg-gray-100 object-cover"
        />
        <Button
          v-if="!user.googleId"
          icon="pi pi-pencil"
          size="small"
          class="absolute right-0 top-0"
          @click="dialogRef?.open()"
        />
      </div>
      <p class="text-sm mt-3">
        Membre depuis le {{ formatLongDate(user.createdAt) }}
      </p>
      <p
        class="text-2xl font-bold"
        :class="[`text-${personnalGroup?.color}-700`]"
      >
        {{ user?.name }} {{ user?.lastname }}
      </p>
      <p class="font-bold">{{ user?.username }}</p>
      <div class="mt-1">
        <Button
          icon="pi pi-eye"
          label="Invitation"
          class="mr-2"
          size="small"
          :class="[getGroupColor({ color: personnalGroup?.color })]"
          @click="router.push('/user/invitation')"
        />
        <Button
          icon="pi pi-pencil"
          label="Edition"
          size="small"
          :class="[getGroupColor({ color: personnalGroup?.color })]"
          @click="router.push('/user/edit')"
        />
      </div>
    </div>

    <div class="flex flex-col md:flex-row w-full lg:max-w-3/4 gap-8 mt-12">
      <CardProfil icon="pi-inbox" label="Email" :content="user?.email" />
      <CardProfil
        v-if="user?.birthday"
        icon="pi-gift"
        label="Anniversaire"
        :content="formatLongDate(user?.birthday)"
      />
    </div>
    <div class="flex justify-center mt-10">
      <Button
        label="Deconnexion"
        severity="danger"
        variant="outlined"
        @click="
          (clearAuth(),
          trackMatomoEvent('User', 'Logout', 'logout_user'),
          router.push({ name: 'auth-login' }))
        "
      />
    </div>

    <ImageUploadDialog
      ref="dialogRef"
      :upload-fn="(file) => uploadPicture.mutateAsync(file)"
      label="Modifier la photo de profil"
    />
  </ClientOnly>
</template>
