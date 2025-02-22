export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { files } = body;
  for (const file of files) await saveFile("testFile", file, "/Test");
  return true;
});
