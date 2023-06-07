import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
  cloud_name: "dl3clb8cn",
  api_key: "152971213388275",
  api_secret: "dFMXoiRQwgwahowwVgR3ZK9akCQ",
  secure: true,
});

describe("Pruebas en fileUpload", () => {
  test("Debe Subir el archivo correctamente a cloudinary", async () => {
    const imgURL =
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80";
    const resp = await fetch(imgURL);
    const blob = await resp.blob();

    const file = new File([blob], "foto.jpg", { type: "image/jpg" });

    const url = await fileUpload(file);
    expect(typeof url).toBe("string");
    // console.log(url);
    const segments = url.split("/");
    const imageID = segments[segments.length-1].replace(".jpg", "");

    await cloudinary.api.delete_resources(['journal/'+imageID], {resource_type:'image'});
    
});

  test("Debe retornar un null si no se sube el archivo", async () => {
    const file = new File([], "foto.jpg", { type: "image/jpg" });

    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
