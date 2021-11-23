<template>

  <Content :brand="brand" :title="title" :quote="quote" />
  <Content :title="pageTitle" :quote="pageQuote" :showFooter="false" :showHeader="false" class="page-secondary"/>
  <Content :title="pageTwoTitle" :quote="pageTwoQuote" :showFooter="false" :showHeader="false"/>
  <Content :title="pageThreeTitle" :quote="pageThreeQuote" :showFooter="false" :showHeader="false" class="page-secondary"/>

</template>

<script>
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: {
    Content
  },

  data(){
    return{
      brand: 'Melissa Guzman',
      title: "Melissa's Kitchen",
      quote: `"Characters are hard environments and they form incredibly strong characters..." - Gordon Ramsey`,
      pageTitle: "Page One",
      pageQuote: "This is the first page.",
      pageTwoTitle: "Page Two",
      pageTwoQuote: "This is the second page.",
      pageThreeTitle: "Page Three",
      pageThreeQuote: "This is the third page."
    }
  }
}
</script>

<style>
*, *:before, *:after{
  box-sizing: border-box;
}
:root{
  --candypink: #e56b70;
  --salmon: #f391a0;
  --skyblue:#54c6eb;
  --mint: #06d6a0;
  --celadon: #048a81;
}
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*font-family: 'Reenie Beanie', cursive;*/
  font-family: 'Limelight', cursive;
  /*font-family: 'Inconsolata', monospace;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 0px, auto;
  background: var(--candypink);
}

.page-secondary{
  background: var(--celadon);
}
</style>
