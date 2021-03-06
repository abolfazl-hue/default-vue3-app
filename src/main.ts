import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'virtual:windi.css'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale : 'en',
    messages
})

const app = createApp(App)

app.use(createPinia())
app.use(i18n)

app.mount('#app')
