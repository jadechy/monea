<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
import { useGroupsStore } from "@/stores/groupStore";
import default_avatar from "@/assets/default_avatar.svg";
import { storeToRefs } from "pinia";
import type ImageUploadDialog from "~/components/ui-kit/ImageUploadDialog.vue";
const { user } = storeToRefs(useAuthStore());
const { groupsCount, personnalGroup } = storeToRefs(useGroupsStore());
const router = useRouter();
const { clearAuth, uploadPicture } = useAuthStore();
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
          label="Epargne"
          class="mr-2"
          size="small"
          :class="[getGroupColor({ color: personnalGroup?.color })]"
          @click="router.push('/savings')"
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
    <div v-if="personnalGroup" class="grid grid-cols-3 gap-4 mt-12">
      <InfoProfil
        label="groupes membres"
        :stat="`${groupsCount}`"
        :color="personnalGroup?.color"
      />
      <InfoProfil
        label="dépensés"
        stat="304 €"
        :color="personnalGroup?.color"
      />
      <InfoProfil
        label="groupes créés"
        stat="8"
        :color="personnalGroup?.color"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      <CardProfil icon="pi-inbox" label="Email" :content="user?.email" />
      <CardProfil icon="pi-phone" label="Téléphone" content="07 83 05 89 63" />
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
        @click="(clearAuth(), router.push({ name: 'auth-login' }))"
      />
    </div>

    <ImageUploadDialog
      ref="dialogRef"
      :upload-fn="(file) => uploadPicture.mutateAsync(file)"
      label="Modifier la photo de profil"
    />
  </ClientOnly>
</template>
