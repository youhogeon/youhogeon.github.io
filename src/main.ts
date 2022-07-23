import { createApp } from 'vue'
import App from './App.vue'

import aes from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8'

import './assets/main.css'

import profileData from '@/data/profile.json';
import projectData from '@/data/project.json';
import linkData from '@/data/link.json';

const app = createApp(App)

const urlParams = new URLSearchParams(window.location.search)
let getKey = urlParams.get('key');

if (getKey !== null) {
    let bytes = aes.decrypt(projectData.encrypted, getKey);
    try {
        projectData.projects = JSON.parse(bytes.toString(Utf8));
    } catch(e) {

    }
}

app.provide('profileData', profileData)
app.provide('projectData', projectData)
app.provide('linkData', linkData)

app.mount('#app')

//let data = [];
//console.log(aes.encrypt(JSON.stringify(data), '').toString())