<template>
<!--Design is a close representation of https://dribbble.com/shots/15701266-shop-fashion for practice purposes-->
<Layout>
  <template v-slot:nav>
    <Navbar />
  </template>
  <template v-slot:left>
    <Title />
  </template>
  <template v-slot:right>
    <Product />
  </template>
</Layout>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Title from "./components/Title.vue";
import Product from "./components/Product.vue";
import Layout from "./components/Layout.vue"

export default {
  name: "App",
  components: {
    Navbar,
    Title,
    Product,
    Layout
  },
};
</script>

<style>
*, *::before, *::after{
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  color: black;
  margin: 0px, auto;
}
</style>
