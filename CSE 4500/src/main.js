import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAUAao8fe2N63Vbg8na2wOhNVA8e-DY29Y",
    authDomain: "cse4500.firebaseapp.com",
    projectId: "cse4500",
    storageBucket: "cse4500.appspot.com",
    messagingSenderId: "182128084957",
    appId: "1:182128084957:web:f3fef93b064bc7c00b5834",
    measurementId: "G-M178EHPTDD"
};

firebase.initializeApp(firebaseConfig);

createApp(App).mount('#app')