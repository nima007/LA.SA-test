<template>
    <li>
        <div>
            <span>
                از طرف : {{ message.senderName }}
            </span><span>
                از شرکت : {{ message?.senderCompany || "نا معلوم" }}
            </span>
            <span style="margin-inline-start: auto; background-color: transparent;font-size: 12px;">
                {{ new Date(message.createdAt).toLocaleString('fa-IR') }}
            </span>
        </div>
        <div>
            <span>
                شماره تماس : {{ message.senderMobile }}
            </span><span>
                email : {{ message.senderEmail || "نا معلوم" }}
            </span>
        </div>
        <span class="message">
            {{ message.message }}
        </span>
        <button v-if="!message.isRead" class="loading" :disabled="ctaLoading" @click="read">
            <span> خوانده شده</span>
        </button>
        <span v-else>  {{ new Date(message.updatedAt).toLocaleString('fa-IR') }}</span>
    </li>
</template>
<script setup>
const prp = defineProps(['message']);

const ctaLoading = ref(false);
async function read(){
    ctaLoading.value=true
    await $fetch("/api/admin/messsages/"+prp.message._id,{
        method:"put"
    }).then(res=>{
        if (res) {
            prp.message.isRead=true
        }
    })
    ctaLoading.value=false
    
}
</script>
<style scoped>
li {
    border: 1px solid #0003;
    border-radius: var(--gap);
    padding: var(--gap);
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 8px;
    height: fit-content;
}

li>div {
    border-bottom: 1px solid;
    padding-block: 16px;
    width: 100%;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

li>div:first-of-type {
    padding-top: 0;
}

div>span {
    background: #e6e6e6;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #d6d6d6;
}

span.message {
    width: 100%;
}

button {
    border-radius: 8px;
    margin-top: 8px;
    margin-inline-start: auto;
}
</style>