<template>
    <section id="get-user-info">
        <div class="header">
            <button @click="$emit('close-get-customer-info')" class="button-close">
                <div></div>
                <div></div>
            </button>
        </div>
        <form @submit.prevent>
            <p>{{ $t('getuserinfo.text') }}</p>
            <div class="row">
               
                <label for="">
                    <span>{{ $t('getuserinfo.name') }}</span>
                    <input v-model="customerInfo.name" type="text" name="" id="">
                </label>
                <label for="">
                    <span> {{ $t('getuserinfo.email') }}*</span>
                    <input v-model="customerInfo.email" type="email" name="" id="">
                </label>
            </div>
            <button @click="saveCustomerInfo">{{ $t('getuserinfo.submit') }}</button>
        </form>
    </section>
</template>
<script setup>
const emit = defineEmits(['close-get-customer-info']);

let isSignedEmail = ref(localStorage.getItem('signedEmail')?? false);
console.log(isSignedEmail);

if (isSignedEmail.value) emit("close-get-customer-info");
const customerInfo = ref({
    name:"",
    email:""
})
async function saveCustomerInfo(){
if(!customerInfo.value.email){
    alert("please fill all inputs !");
    return
}
await $fetch('/api/customerInfo',{
    method:'post',
    body:customerInfo.value
}).then(res=>{
    console.log(res);
    localStorage.setItem('signedEmail','true');
    emit('close-get-customer-info')
}).catch(e=>
    alert("try again")
)
}
</script>
<style scoped>
#get-user-info {
    width: fit-content;
    max-width: 90%;
    height: fit-content;
    max-height: 60vh;
    min-height: 300px;
    overflow: auto;
    background: var(--dark-color);
    border: 2px solid var(--light-color);
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: 102;
    padding: var(--gap);
    color: #fff;
    border-radius: var(--gap);
}

.button-close {
    position: relative;
    margin-left: auto;
}

.button-close>div {
    position: absolute;
    width: 50%;
    height: 3px;
    background-color: var(--light-color);
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    rotate: 45deg;
}

.button-close>div:last-child {
    rotate: -45deg;
}

form {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    margin-top: 42px;
}
form > p{
    margin: 0;
}
.row {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: var(--gap);
}
.row label{

    flex: 1;
}
input{
    color: #fff;
}
@media (max-width:980px) {
    #get-user-info {
        width: 100%;
    }
    form .row{
        flex-direction: column;
    }
}
</style>