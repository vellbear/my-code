<template>
  <div class="logoutbox" v-if="showLogout">
        <div class="showsignedin">{{ signedIn }}</div>
        <div class="logoutButton"><button class="button logout" @click="logoutClick">{{ logout }}</button></div>
    </div>
</template>

<script>
export default {
    props:{
        showLogout: Boolean,
        logoutClick: {
            type: Function
        }
    },

    data(){
        return{
            signedIn: `You've signed in!`,
            signedOut: `You've logged out!`,
            logout: 'Logout',
        }
    }
}
</script>

<style>
    .logoutbox {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        margin-bottom: 10px;
        width: 100vw;
        font-size: 30px;
        flex-wrap: wrap;
    }

    .logout{
        margin-left: 30px;
    }

    @media only screen and (max-width: 500px){
        .showsignedin{
            width: 100vw;
        }
        .logoutButton{
            width: 100vw;
        }
        .logout{
            margin-left: 0px;
            margin-top: 20px;
        }
    }
</style>