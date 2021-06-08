<template>
  <div class="pageContent">
      <section class="page">
          <slot>

          </slot>
      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.pageContent{
    width: 100%;
    height: 100%;
}
.page{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}
</style>