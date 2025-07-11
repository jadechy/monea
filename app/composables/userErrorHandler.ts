import { ref } from "vue";
import type { ErrorNotification } from "~/types/errors";

const globalErrors = ref<ErrorNotification[]>([]);

export const useErrorHandler = () => {
  const addError = (notification: ErrorNotification) => {
    globalErrors.value.push({
      ...notification,
      duration: notification.duration || 5000,
    });

    if (notification.duration !== 0) {
      setTimeout(() => {
        removeError(notification);
      }, notification.duration || 5000);
    }
  };

  const removeError = (notification: ErrorNotification) => {
    const index = globalErrors.value.indexOf(notification);
    if (index > -1) {
      globalErrors.value.splice(index, 1);
    }
  };

  const clearErrors = () => {
    globalErrors.value = [];
  };

  return {
    errors: globalErrors,
    addError,
    removeError,
    clearErrors,
  };
};
