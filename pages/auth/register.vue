<template>
    <main>
        <form @submit.prevent>
            <label for="">
                <p>نام و نام خانوادگی</p>
                <input v-model="form.name" type="text">
            </label>
            <label for="">
                <p>موبایل</p>
                <input v-model="form.mobile" type="text">
            </label>
            <label for="">
                <p>email</p>
                <input v-model="form.email" type="email">
            </label>
            <label for="">
                <p>رمز عبور</p>
                <input v-model="form.password" type="password">
            </label>
            <button @click="registerUser">ایجاد</button>
        </form>
    </main>
</template>
<script setup>
definePageMeta({
    name: "register_pgae",
    auth: { unauthenticatedOnly: true, navigateAuthenticatedTo: '/fa/adminDashLasa' }
})
const auth = useAuth();
const form = ref({
    mobile: '',
    password: '',
    email: '',
    name: ''
});

async function registerUser() {
  try {
    const res = await $fetch.raw('/api/auth/register', {
      method: "POST",
      body: { ...form.value }
    });

    console.log("res:", res);
    console.log("res data:", res._data);
    router.replace({name:"login"})
  } catch (e) {
    console.log("err:", e);
    if (e.response) {
      let messages = JSON.parse(e.response?._data?.message)
      console.log("Error status:", e.response.status);
      console.log("Error data:", messages);
      formErrorHandler(FORM, messages)
    } else {
      // Fallback for other types of errors
      console.log("Unknown error:", e.message);
    }
  }
}
</script>
<style scoped>

main{
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
main > form{
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: #fff;
    padding: var(--gap);
    border-radius: var(--gap);
}
main > form input{
    border-color: #000 !important;
    max-height: 48px !important;
}
label p{
    margin: 8px 0;
}

</style>