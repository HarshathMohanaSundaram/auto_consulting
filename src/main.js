import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD53AgVZdzHZaCRsaEL4S4xQWXFM6Cs1kk",
    authDomain: "kumaran-auto-consulting.firebaseapp.com",
    projectId: "kumaran-auto-consulting",
    storageBucket: "kumaran-auto-consulting.appspot.com",
    messagingSenderId: "128095424048",
    appId: "1:128095424048:web:44160c3a6dbd00d55d27f5"
  };

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')