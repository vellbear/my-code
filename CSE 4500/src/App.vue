<template>
    <Auth><Timer /></Auth>
    <Quote />
</template>

<script>
import Timer from './components/Timer.vue'
import Quote from './components/Quote.vue'
import Auth from './components/Auth.vue'

export default {
    name: 'App',
    components: {
        Timer,
        Quote,
        Auth
    },

    data(){
        return {
            
        }
    }
}
</script>

<style>
*{
    font-family: 'Courier New', Courier, monospace;
}

#app {
    font-family: 'Courier New', Courier, monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    flex-wrap: wrap;
}

body{
    margin: 0 auto;
    background-color: black;
}

input {
    height: 50px;
    width: 30vw;
    color: white;
    background-color: black;
    border-style: none none solid none;
    outline: none;
    border-color: white;
}

span {
    color: dodgerblue;
}

.button:hover {
    border-color: dodgerblue;
}

.button{
    border: solid;
    background-color: white;
    border-color: white;
    border-width: 5px;
    font-size: 30px;
    outline: none;
    border-radius: 450px;
    width: 150px;
    height: 50px;
}

@media only screen and (max-width: 500px){
    input{
        width: 50vw;
    }
}

@media only screen and (max-width: 1190px){
    input{
        width: 60vw;
    }
}

@media only screen and (max-width: 768px) {
    .button{
        height: 40px;
        width: 120px;
        font-size: 20px;
    }
}
</style>
