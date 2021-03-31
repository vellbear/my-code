import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'

var firebaseConfig = {
    apiKey: "AIzaSyBfP9gmGN52iX6W-Gfq0eH9NpAaLkQXzX0",
    authDomain: "cse4500-vue3-project.firebaseapp.com",
    projectId: "cse4500-vue3-project",
    storageBucket: "cse4500-vue3-project.appspot.com",
    messagingSenderId: "819605304913",
    appId: "1:819605304913:web:e40473cdce597e0d92aa70",
    measurementId: "G-EL193E3RZB"
};

firebase.initializeApp(firebaseConfig);

createApp(App).mount('#app')