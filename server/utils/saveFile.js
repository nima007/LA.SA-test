import { unlink, readFile } from "node:fs/promises";
import path from "path";

const storageProductsImage = useStorage("productsImages");
const storageBlogImage = useStorage("blogFile");

export async function saveFile(baseName, file) {
  const fileName = `${baseName}_${Date.now()}`;
  const savedFile = await storeFileLocally(file, fileName);
  console.log("try to store file : ",saveFile);
  
  return savedFile;
}


export async function saveProductImage(baseName, images) {
  const filesNameArray = [];
  let counter = 0;
  for (const file of images) {
    counter++;
    let storedFile = await saveFile(baseName, file);
    console.log("storedFile", storedFile);
    const tempFileAddress = path.join(
      process.cwd(),
      useRuntimeConfig().relStoreMountPath,
      storedFile
    );
    const imageKey = storedFile;
    await storageProductsImage.setItemRaw(
      imageKey,
      await readFile(tempFileAddress)
    );
    // unlink(tempFileAddress);
    filesNameArray.push(`/api/storage/${imageKey}`);
  }
  return filesNameArray;
}


export async function saveBlogImage(baseName, images) {
  const filesNameArray = [];
  let counter = 0;
  for (const file of images) {
    counter++;
    let storedFile = await saveFile(baseName, file);
    console.log("storedFile", storedFile);
    const tempFileAddress = path.join(
      process.cwd(),
      useRuntimeConfig().relStoreMountPath,
      storedFile
    );
    const imageKey = storedFile;
    await storageBlogImage.setItemRaw(
      imageKey,
      await readFile(tempFileAddress)
    );
    // unlink(tempFileAddress);
    filesNameArray.push(`/api/storage/blog/${imageKey}`);
  }
  return filesNameArray;
}

export function normalFileName(name) {
  return name.trim().replaceAll(" ", "-").normalize();
}
