import "reflect-metadata";
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import {initDb} from "./data/database/init/init-db";
import {useDatabaseStores} from "./stores/database-stores";

const app = createApp(App)

app.use(createPinia())

const dbStores = useDatabaseStores()

initDb(dbStores).then(() => {
    app.mount('#app')
});

