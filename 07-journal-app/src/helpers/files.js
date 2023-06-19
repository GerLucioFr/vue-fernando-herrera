import { axiosInstance } from '@/http/api';
import { showError } from '@/helpers/alert';

const cloudName = 'dfw28snhc';
const type = 'image';
const upload_preset = 'vue-course';
const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/${type}`;

const cloudinaryAPI = axiosInstance(cloudinaryUrl);

export const uploadFile = async (file) => {
  if (!file) {
    return;
  }
  try {
    const formData = new FormData();
    formData.append('upload_preset', upload_preset);
    formData.append('file', file);
    const res = await cloudinaryAPI.post('/upload', formData);
    return res.data;
  } catch (error) {
    showError({
      title: 'Error',
      text: error,
    });
  }
};
