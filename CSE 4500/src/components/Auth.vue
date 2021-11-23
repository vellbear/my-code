<template>
    <Logout :showLogout="showLogout" :logoutClick="this.logout"/>
    <slot></slot> 
  <div class="authenticationbox" v-if="showAuthbox">
        <form>
            <span>Login</span><br>
            <input type="email" class="loginemail" placeholder="Email" autocomplete="email" v-model="loginemail" required><br>
            <input type="password" class="loginpassword" placeholder="Password" autocomplete="current-password" v-model="loginpassword" required><br><br>
            <button type="button" class="button login" @click="login"> Login </button><br><br>
        </form>
        <div class='error' v-if="showError">{{ error }}</div>
        <br v-if="showError">
        <form>
            <span>Sign Up</span><br>
            <input type="text" class="signupusername" placeholder="Username" v-model="username"><br>
            <input type="email" class="signupemail" placeholder="Email" autocomplete="email" v-model="signupemail"><br>
            <input type="password" class="signuppassword" placeholder="Password" autocomplete="current-password" v-model="signuppassword"><br><br>
            <button type="button" class="button signup" @click="signup"> Sign Up </button>
        </form>
    </div>  
</template>

<script>

import Logout from './Logout.vue'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
    components:{
        Logout
    },

    data(){
        return{
            loginemail: '',
            loginpassword: '',
            signupemail: '',
            signuppassword: '',
            username: '',
            error: '',
            showError: false,
            showAuthbox: false,
            showLogout: false
        }
    },

    beforeCreate(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                console.log('signed in')
                this.showAuthbox = false
                this.showLogout = true
                this.showError = false
            } else {
                // User is signed out
                this.showAuthbox = true
                console.log('signed out')
            }
        })
    },

    methods:{
        login() {
            //this.showAuthbox = false
            firebase.auth().signInWithEmailAndPassword(this.loginemail, this.loginpassword)
                .then(() => {
                    this.signedin()
                })
                .catch(() => {
                    this.showAuthbox = true
                    this.showError = true
                    this.error = 'Email or password is incorrect or does not exist!'
                })             
        },

        signup() {   
            //this.showAuthbox = false
            firebase.auth().createUserWithEmailAndPassword(this.signupemail, this.signuppassword)
                .then(() => {
                    this.signedin()
                })
                .catch(() => {
                    this.showAuthbox = true
                    this.showError = true
                    this.error = 'Invalid email or password is too short!'
                })
        },

        logout() {
            firebase.auth().signOut()
            //this.showLogout = false
            //this.showAuthbox = true
            location.reload()
        },

        signedin(){
            firebase.auth().onAuthStateChanged((user) => {
                if(user){
                    this.loginemail = ''
                    this.loginpassword = ''
                    this.signupemail = ''
                    this.signuppassword = ''
                    this.username = ''
                    this.showAuthbox = false
                    this.showError = false
                    this.showLogout = true
                }
            })
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

    @media only screen and (max-width: 1190px) {
        .authenticationbox{
            width: 100vw;
        }
    }
</style>