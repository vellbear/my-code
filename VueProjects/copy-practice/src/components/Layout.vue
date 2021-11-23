<template>
<div style="height: 100vh"> 
    <slot name="nav"></slot>    
    <div class="container-fluid d-flex col-12 p-0">
        <div class="container-fluid col-7 p-0">
            <slot name="left"></slot>
        </div>
        <div class="container-fluid col-5 p-0">
            <slot name="right"></slot>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>