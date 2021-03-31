<template>
  <div class="authenticationbox" v-if="showAuthbox">
        <form>
            <span>Login</span><br>
            <input type="email" class="loginemail" placeholder="Email" autocomplete="email" v-model="loginemail"><br>
            <input type="password" class="loginpassword" placeholder="Password" autocomplete="current-password" v-model="loginpassword"><br><br>
            <button class="button login" @click="login"> Login </button><br><br>
        </form>
        <div class='error' v-if="showError">{{ error }}</div><br v-if="showError">
        <form>
            <span>Sign Up</span><br>
            <input type="text" class="signupusername" placeholder="Username"><br>
            <input type="email" class="signupemail" placeholder="Email" autocomplete="email" v-model="signupemail"><br>
            <input type="password" class="signuppassword" placeholder="Password" autocomplete="current-password" v-model="signuppassword"><br><br>
            <button class="button signup" @click="signup"> Sign Up </button>
        </form>
    </div>
</template>

<script>

import firebase from 'firebase/app'
import 'firebase/auth'

export default {
    data(){
        return{
            loginemail: '',
            loginpassword: '',
            signupemail: '',
            signuppassword: '',
            error: '',
            showError: false,
            showAuthbox: true
        }
    },

    methods:{
        login() {
            this.showAuthbox = false
            firebase.auth().signInWithEmailAndPassword(this.loginemail, this.loginpassword)
                .then(() => {    
                    this.showError = false                  
                    alert("You Signed In")                                   
                })
                .catch(() => {
                    this.showAuthbox = true
                    this.showError = true
                    this.error = 'Email or password is incorrect or does not exist!'
                })
        },

        signup() {   
            this.showAuthbox = false
            firebase.auth().createUserWithEmailAndPassword(this.signupemail, this.signuppassword)
                .then(() => {     
                    this.showError = false               
                    alert("You Signed Up")
                })
                .catch(() => {
                    this.showAuthbox = true
                    this.showError = true
                    this.error = 'Invalid email or password!'
                })
        },

        logout() {
            firebase.auth().signOut
            this.showAuthbox = true
        }
    }
}
</script>

<style>
    .authenticationbox {
        margin-top: 40px;
        color: white;
        font-size: 30px;
        width: 50vw;
    }

    .error{
        color: red;
        font-size: 16px;
    }
</style>