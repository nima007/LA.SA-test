<template>
    <main>
        <form @submit.prevent>
            <label for="">
                <p>موبایل</p>
                <input v-model="form.mobile" type="text">
            </label>
            <label for="">
                <p>رمز عبور</p>
                <input v-model="form.password" type="password">
            </label>
            <button @click="doLogin">ورود</button>
            <NuxtLinkLocale :to="{'name':'register_pgae'}">ایجاد</NuxtLinkLocale>
        </form>
    </main>
</template>
<script setup>
definePageMeta({
    // name: "login_pgae",
    path: '/login',
    auth: { unauthenticatedOnly: true,  }
})
const auth = useAuth()

const form = ref({
    mobile: '',
    password: ''
});

const doLogin = async () => {
  try {
    auth.signIn('credentials',{mobile: form.value.mobile, password:form.value.password });
  } catch (err) {
    console.error('Login failed', err);
  }
};
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