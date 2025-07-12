<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";
import { useGroupsStore } from "@/stores/groupStore";
import default_avatar from "@/assets/default_avatar.svg";
import { storeToRefs } from "pinia";
import type ProfilePictureDialog from "~/components/profil/ProfilePictureDialog.vue";
const { user } = storeToRefs(useAuthStore());
const { groupsCount, personnalGroup } = storeToRefs(useGroupsStore());
const router = useRouter();
const { clearAuth } = useAuthStore();
const dialogRef = ref<InstanceType<typeof ProfilePictureDialog> | null>(null);
</script>

<template>
  <div class="flex flex-col justify-center items-center" v-if="user">
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
        label="Budget"
        class="mr-2"
        size="small"
        :class="[getGroupColor({ color: personnalGroup?.color })]"
        @click="router.push({ name: 'budget_group' })"
      />
      <Button
        icon="pi pi-pencil"
        label="Edition"
        size="small"
        :class="[getGroupColor({ color: personnalGroup?.color })]"
        @click="router.push({ name: 'profil_edit' })"
      />
    </div>
  </div>
  <div class="grid grid-cols-3 gap-4 mt-12" v-if="personnalGroup">
    <InfoProfil
      label="groupes membres"
      :stat="`${groupsCount}`"
      :color="personnalGroup?.color"
    />
    <InfoProfil label="dépensés" stat="304 €" :color="personnalGroup?.color" />
    <InfoProfil label="groupes créés" stat="8" :color="personnalGroup?.color" />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12" v-if="user">
    <CardProfil icon="pi-inbox" label="Email" :content="user?.email" />
    <CardProfil icon="pi-phone" label="Téléphone" content="07 83 05 89 63" />
    <CardProfil
      icon="pi-gift"
      label="Anniversaire"
      :content="formatLongDate(user.birthday)"
    />
  </div>
  <div class="flex justify-center mt-10">
    <Button
      label="Deconnexion"
      @click="(clearAuth(), router.push({ name: 'auth-login' }))"
      severity="danger"
      variant="outlined"
    />
  </div>

  <ProfilePictureDialog ref="dialogRef" />
</template>
