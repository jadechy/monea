<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import { Button } from "primevue";
    import { useMemberService } from '~/composables/services/memberService';
    import { useAuthStore } from "@/stores/authStore";
    import type { MemberInvitationType } from '~/types/memberType';
    
    const route = useRoute();
    const userId = route.query.userId as string | undefined;
    const groupeId = route.query.groupeId as string | undefined;
    const { user } = useAuthStore();
    const invitations = ref<MemberInvitationType[]>([]);
    const { getInvitations, responseInvitation } = useMemberService();

    const fetchInvitations = async () => {
        try {
            invitations.value = await getInvitations(userId ?? user.id.toString());
        } catch (error) {
            console.error('Erreur lors du chargement des invitations :', error);
        }
    };

    const respond = async (
    accepted: boolean,
    invitation: MemberInvitationType
    ) => {
        try {
            await responseInvitation(
            invitation.user.id,
            groupeId ?? invitation.group.id.toString(),
            accepted
            );
            invitations.value = invitations.value.filter(
            (inv) => inv.group.id !== invitation.group.id
            );
        } catch (error) {
            console.error("Erreur lors de la réponse à l'invitation :", error);
        }
    };

    onMounted(fetchInvitations);
</script>

<template>
    <div v-if="invitations.length === 0">Aucune invitation reçue.</div>
    
    <div
    v-else
    v-for="inv in invitations"
    :key="inv.group.id"
    class="bg-white p-4 shadow rounded-lg mb-4"
    >
    <p class="mb-2">
        <strong>{{ inv.group.author }}</strong> vous a invité à rejoindre le groupe
        <strong>{{ inv.group.name }}</strong> en tant que <em>{{ inv.role }}</em>.
    </p>

    <div class="flex gap-2">
        <Button
        icon="pi pi-check"
        label="Accepter"
        severity="success"
        size="small"
        @click="respond(true, inv)"
        />
        <Button
        icon="pi pi-times"
        label="Refuser"
        severity="danger"
        size="small"
        @click="respond(false, inv)"
        />
    </div>
    </div>

    <!-- <div class="item block lg:flex w-fit lg:w-1/4 rounded-lg">
        <p>{{ username }} vous a invité au sein du groupe {{ groupename }}</p>
        <p class="font-bold">Souhaitez-vous rejoindre le groupe ?</p>

        <Button
            icon="pi pi-check"
            label="Accepter l'invitation"
            size="small"
            @click="response(true)"
        />

        <Button
            icon="pi pi-times"
            label="Refuser l'invitation"
            size="small"
            @click="response(false)"
        />
    </div> -->
</template>