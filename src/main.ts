import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import profileData from '@/data/profile.json';

const app = createApp(App)

app.provide('profileData', profileData)
app.mount('#app')