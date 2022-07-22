import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import profileData from '@/data/profile.json';
import projectData from '@/data/project.json';
import linkData from '@/data/link.json';

const app = createApp(App)

app.provide('profileData', profileData)
app.provide('projectData', projectData)
app.provide('linkData', linkData)

app.mount('#app')