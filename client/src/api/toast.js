import { toast } from 'react-hot-toast';

export const showSuccessToast = (message) => {
  toast.success(message, {
    duration: 3000,
    position: 'top-right',
  });
};

export const showErrorToast = (message) => {
  console.log("Toast Error Triggered:", message); // debug
  toast.error(message, {
    duration: 3000,
    position: 'top-right',
  });
};
