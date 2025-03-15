<template>
    <div id="admin-layout">
        <header>
            <nav>
                <ul>
                    <li>
                        <NuxtLinkLocale>داشبورد</NuxtLinkLocale>
                    </li>
                    <li>
                        <NuxtLinkLocale :to="{name:'admin_products_page'}">محصولات</NuxtLinkLocale>
                    </li>
                    <li>
                        <NuxtLinkLocale :to="{name:'admin_dash_blogs_page'}">بلاگ</NuxtLinkLocale>
                    </li>
                    <li>
                        <NuxtLinkLocale :to="{name:'admin_setting_page'}">تنظیمات</NuxtLinkLocale>
                    </li>
                    <li>
                        <NuxtLinkLocale :to="{name:'admin_messages_page'}">پیام ها</NuxtLinkLocale>
                    </li>
                    
                </ul>
            </nav>
        </header>
        <NuxtPage></NuxtPage>
    </div>
</template>
<script setup>
const adminDashState = useState("admin-dash-state")
useFetch("/api/admin/messsages",{method:"get"}).then(res=>{
adminDashState.value={
    messages:res.data.value
}
})
</script>
<style scoped>
#admin-layout{
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 250px 1fr;
    grid-template-rows: 1fr;
    overflow: hidden;
}
#admin-layout > header{
    background: #000;
    color: #fff;
}
#admin-layout > header a{
    color: #fff;
    padding: 16px ;
    width: 100%;
    display: flex;
}
#admin-layout > header a:hover{
    background: #fff;
    color: #000;
    cursor: pointer;
}
#admin-layout > header ul{
    list-style: none;
    padding: 16px 0 0 0;
    margin: 0;
}

</style>