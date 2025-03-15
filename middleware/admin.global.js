export default defineNuxtRouteMiddleware((to, from) => {
  console.log("check admin");
  const auth = useAuth();
  if (
    to.meta.layout === "admin" &&
    (auth.status.value !== "authenticated" ||
      auth.data.value?.user.role !== "admin")
  ) {
    console.log("you are not admin");
    return navigateTo("/login");
  }
});
