const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dxnbnviuz/auto/upload";
const CLOUDINARY_UPLOAD_PRESET = "buzzbird";

export const uploadMedia = (media) => {
  const formData = new FormData();

  formData.append("file", media);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  formData.append("folder", "socialMedia");

  return fetch(CLOUDINARY_URL, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};
