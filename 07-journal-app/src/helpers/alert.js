import Swal from 'sweetalert2';

const defaultConfig = {
  title: 'Title',
  text: 'Text message',
  showConfirmButton: true,
  confirmButtonText: 'Ok',
  position: 'top-end',
};

const showDialog = (config) => {
  const swalConfig = {
    ...defaultConfig,
    ...config,
  };
  Swal.fire(swalConfig);
};

export const showSuccess = (config) => {
  showDialog({ ...config, icon: 'success' });
};

export const showError = (config) => {
  showDialog({ ...config, icon: 'error' });
};
