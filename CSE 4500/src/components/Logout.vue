<template>
  <div class="logoutbox" v-if="showLogout">
        <div class="showsignedin">{{ signedIn }}</div>
        <button class="button logout">{{ logout }}</button>
    </div>
</template>

<script>
export default {
    props:{
        showLogout: Boolean
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
    }

    .logout{
        margin-left: 30px;
    }
</style>