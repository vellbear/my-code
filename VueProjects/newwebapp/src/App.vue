<template>
  <Navbar />
  <Hero />
  <Main />
</template>

<script>
import Hero from './components/Hero.vue'
import Navbar from './components/Navbar.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Hero,
    Navbar,
    Main
  }
}
</script>

<style>
*, *::before, *::after {
  box-sizing: border-box;
}
:root{
  --clr-navy: #0d3b66;
  --clr-cream: #faf0ca;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
}
.bg-default{
    background-color: rgb(13, 59, 102);
}
.bg-alt{
    background-color: rgb(250, 240, 202);
}
</style>
