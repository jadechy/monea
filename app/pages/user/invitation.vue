<script setup lang="ts">
import { Button } from "primevue";

const { invitations, invitationMutation } = useMemberMutation();
console.log(invitations);
</script>

<template>
  <div v-if="invitations?.length === 0">Aucune invitation reçue.</div>

  <div
    v-else
    v-for="(inv, i) in invitations"
    :key="i"
    class="bg-white p-4 shadow rounded-lg mb-4"
  >
    <p class="mb-2">
      Vous avez invité à rejoindre le groupe
      <strong>{{ inv.group.name }}</strong> en tant que <em>{{ inv.role }}</em
      >.
    </p>

    <div class="flex gap-2">
      <Button
        icon="pi pi-check"
        label="Accepter"
        severity="success"
        size="small"
        @click="
          invitationMutation.mutate({
            accepted: true,
            invitation: inv,
          })
        "
      />
      <Button
        icon="pi pi-times"
        label="Refuser"
        severity="danger"
        size="small"
        @click="invitationMutation.mutate({ accepted: false, invitation: inv })"
      />
    </div>
  </div>
</template>
