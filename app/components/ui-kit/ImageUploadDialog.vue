<script setup lang="ts">
import { ref } from "vue";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import type { FileUploadSelectEvent } from "primevue";

const { uploadFn } = defineProps<{
  header?: string;
  uploadFn: (file: File) => Promise<unknown>;
}>();

const visible = ref(false);
const selectedFile = ref<File | null>(null);
const previewUrl = ref<string | null>(null);

const open = () => {
  visible.value = true;
};

const close = () => {
  visible.value = false;
  selectedFile.value = null;
  previewUrl.value = null;
};

const onSelect = (event: FileUploadSelectEvent) => {
  const file = event.files?.[0];
  if (file) {
    selectedFile.value = file;
    previewUrl.value = URL.createObjectURL(file);
  }
};

const submit = async () => {
  if (!selectedFile.value) return;
  await uploadFn(selectedFile.value);
  close();
};

defineExpose({ open, close });
</script>

<template>
  <Dialog
    v-model:visible="visible"
    modal
    :header="header || 'Téléverser une image'"
    :style="{ width: '30rem' }"
  >
    <div class="flex justify-center items-center gap-10">
      <FileUpload
        ref="uploader"
        name="image"
        :customUpload="true"
        accept="image/*"
        mode="basic"
        auto
        chooseLabel="Parcourir"
        @select="onSelect"
      />
      <img
        v-if="previewUrl"
        :src="previewUrl"
        alt="Aperçu"
        class="w-24 h-24 rounded-full object-cover mt-4"
      />
    </div>
    <template #footer>
      <Button label="Annuler" icon="pi pi-times" @click="close" text />
      <Button
        label="Sauvegarder"
        icon="pi pi-check"
        @click="submit"
        :disabled="!selectedFile"
      />
    </template>
  </Dialog>
</template>
