<template>
    <main>
        <h1 class="page-title-large">
            {{ $t('menu.contact') }}
        </h1>
        <div id="wrapper-contact-us">
            <section>
                <p>{{ $t('contact-page.tell-title') }}</p>
                <a class="button" href="tel:093946573052">
                    <span>
                        093946573052
                    </span>
                </a>
            </section>
            <section>
                <p>
                    {{ $t('contact-page.social-title') }}
                </p>
                <ul>
                </ul>
            </section>
            <section>
                <form @submit.prevent id="message-section">
                    <p>
                        {{ $t('contact-page.message-title') }}
                    </p>
                    <label for>
                        <span>{{ $t('footer.name') }}</span>
                        <input type="text" />
                    </label>
                    <label for>
                        <span>{{ $t('footer.company') }}</span>
                        <input type="text" />
                    </label>
                    <label for class="vue-tel-input-label">
                        <span>{{ $t('footer.phone') }}</span>
                        <vue-tel-input v-model="mobileNumber" mode="international" />
                    </label>
                    <label for>
                        <span>{{ $t('footer.email') }}</span>
                        <input type="email" />
                    </label>
                    <label for>
                        <span>{{ $t('footer.message') }}</span>
                        <textarea></textarea>
                    </label>
                    <button>
                        <span>{{ $t('footer.send') }}</span>
                    </button>
                </form>
            </section>
        </div>
    </main>
</template>
<script setup>
definePageMeta({
    name: 'contact_us',
    auth:false
})
</script>
<style scoped>
#message-section {
    background: #fff !important;
    border-radius: var(--gap);
    border: 1px solid var(--dark-color);
    padding: var(--gap);
    width: 700px;
    max-width: 100%;
}
main {
    padding-top: calc(var(--menu-height) * 1.8);
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
}
main>#wrapper-contact-us {
    padding-block: 64px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 64px;
    align-items: center;
    border-bottom: 3px solid #ffdd55;
    max-width: 100%;
}
main>#wrapper-contact-us>section {
    background: var(--light-color);
    padding: var(--gap);
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    max-width: 100%;
}
main>#wrapper-contact-us>section >p{
    font-size: 18px;
    font-family: Kalameh-Medium;
}
main>#wrapper-contact-us>section>* {
    margin: 0;
}
#wrapper-contact-us::before {
    position: absolute;
    content: "";
    display: inline-block;
    height: 100%;
    width: 3px;
    left: 50%;
    top: 0;
    background: #ffdd55;
    z-index: -1;
}
form {
    display: flex;
    flex-flow: wrap;
    gap: calc(var(--gap) + 12px);
    column-gap: var(--gap);
}
form > p{
    width: 100%;
}
form label {
    position: relative;
    flex: 1;
    width: 100%;
    max-width: 50%;
    min-width: 40%;
}
form label span {
    position: absolute;
    top: 0;
    z-index: 10;
    background: #fff;
    transform: translate(0, -57%);
    font-size: 20px;
    padding-inline: 12px;
    margin-inline-start: 12px;
}
form label:last-of-type,
form>button {
    flex: 2;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    border-radius: 12px;
}
form p{
    font-size: 20px;
}
form > label > input{
    height: 56px !important;
    border-color: var(--dark-color) !important;
}
form > label > textarea{
    border-color: var(--dark-color) !important;
}

form label>textarea {
    height: 150px !important;
    resize: none;
}

form>button {
    margin-top: -12px;
    height: 56px;
    font-family: Kalameh-SemiBold;
    font-size: 20px;
}
@media (max-width:700px) {
    form > label{
        min-width: 100% !important;
    }
}
</style>