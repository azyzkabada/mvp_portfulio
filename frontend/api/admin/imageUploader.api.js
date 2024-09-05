import axios from "axios";

const API_URL = "http://localhost:3000/api";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dlyf0syzk/image/upload";
const UPLOAD_PRESET = "testpresets";

const API = {
  uploadImage: async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);

      const response = await axios.post(CLOUDINARY_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("okkk", response);

      const { url } = response.data;
      return url;
    } catch (error) {
      throw new Error("Image upload failed.");
    }
  },
};

export default API;
