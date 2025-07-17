<script setup lang="ts">
import { ref, defineProps } from "vue";
import BaseSection from "~/components/ui-kit/BaseSection.vue";
import { Button, InputText, Select } from "primevue";
import { useMutation } from "@tanstack/vue-query";
import { useMemberService } from "~/composables/services/memberService";
import { MemberRoleEnum } from "~/types/memberEnumType";
import type { GroupType } from "~/types/groupType";

const props = defineProps<{
  group: GroupType | undefined;
}>();
const groupId = props.group?.id;

const input = ref("");

const roles = MemberRoleEnum.options;
const selectedRole = ref(roles[0]);

const { sendInvitation } = useMemberService();

const sendInvitationMutation = useMutation({
  mutationFn: sendInvitation,
  onSuccess: () => {
    input.value = "";
  },
  onError: (error) => {
    console.error("Erreur lors de l'invitation :", error);
  },
});

const submitInvitation = () => {
  if (!input.value || !groupId) return;

  sendInvitationMutation.mutate({
    role: selectedRole.value,
    groupeId: groupId,
    username:
      input.value && !input.value.includes("@") ? input.value : undefined,
    mail: input.value && input.value.includes("@") ? input.value : undefined,
  });
};
</script>

<template>
  <BaseSection label="Ajouter un membre">
    <div class="w-full lg:w-3/4 flex flex-col items-end">
      <div class="flex flex-col md:flex-row gap-5 w-full">
        <InputText
          v-model="input"
          placeholder="Pseudo/mail"
          class="w-full"
          fluid
        />
        <Select
          v-model="selectedRole"
          :options="roles"
          placeholder="Choisissez un role"
          class="w-full md:w-56"
        />
      </div>
      <Button
        variant="outlined"
        size="small"
        class="mt-2 ml-auto"
        @click="submitInvitation"
        icon="pi pi-inbox"
        label="Envoyer la demande"
      />
    </div>
  </BaseSection>
</template>
