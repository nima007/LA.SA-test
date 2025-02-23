import { unlink, readFile } from "node:fs/promises";
import path from 'path';

const storageProductsImage = useStorage('productsImages');

export async function saveFile(baseName, file, dir="/temp") {
  const fileName = `${baseName}_${Date.now()}`;
  const savedFile = await storeFileLocally(file, fileName, dir);
  return savedFile
  // `${dir}/${savedFile}`;
}

export async function saveProductImage(baseName,images) {
  const filesNameArray = [];
  let counter = 0;
  for (const file of images) {
    counter++;
    let storedFile =await saveFile(baseName,file)
    console.log("storedFile",storedFile);
    const tempFileAddress = path.join(
      process.cwd(),
      "server/files/temp/",
      storedFile
    );
    const imageKey = storedFile;
    await storageProductsImage.setItemRaw(imageKey, await readFile(tempFileAddress));
    unlink(tempFileAddress);
    filesNameArray.push(`/api/storage/${imageKey}`);
  }
  return filesNameArray;
}
