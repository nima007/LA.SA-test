import fa from './locales/fa.json'
import en from './locales/en.json'
export default defineI18nConfig(() => {
    return {
        legacy: false,
        locales: [
            {
                code: 'fa',
                iso: 'fa-IR',
                language: 'fa-IR',
                name: 'فارسی',
                dir: 'rtl'
            },
            {
                code: 'en',
                iso: 'en-US',
                language: 'en-US',
                name: 'English',
                dir: 'ltr'
            }
        ],
        defaultLocale: 'fa',
        defaultDirection: 'rtl',
        messages: {
           fa,en
        },
    }
})
// "fa":{
//     "a":"نیما"
// },
// "en":{
//     "a":"Nima"
// }