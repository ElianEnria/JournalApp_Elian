export const fileUpload = async (file) => {
  const CLOUDINARY_NAME = "dl3clb8cn";
  if (!file) throw new Error("No hay archivo");

  const cloudURL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/upload`;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "Journal-Elian");

  try {
    const resp = await fetch(cloudURL, {
      method: "POST",
      body: formData,
      
    });
    if (!resp.ok) throw new Error("No se pudo subir la imagen");

    const cloudResp = await resp.json();
    return cloudResp.secure_url;

  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
