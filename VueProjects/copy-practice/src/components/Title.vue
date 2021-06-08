<template>
  <div class="container-fluid pe-3 p-0">
    <div class="container-fluid d-flex flex-column align-items-end animated zoomIn" style="height: 33vh">              
        <p class="details fw-bold lh-1 mb-1">Materials:</p>
        <p class="lh-1 pb-3">Leather</p>
            
            
        <p class="details fw-bold lh-1 mb-1">Colours:</p>
        <p class="lh-1 pb-3">Black</p>
           
           
        <p class="details fw-bold lh-1 mb-1">Article number:</p>
        <p class="lh-1 pb-3">#16746</p>                    
    </div>
    
    <div class="container-fluid d-flex justify-content-end">
        <h1 class="title animated fadeInRight">JACKET</h1>
    </div>
       
    <div class="container-fluid d-flex align-items-center justify-content-end pe-5 animated slideInUp">
        <div class="fw-bold shop">Shop the look</div>
        <div class="pe-3"></div><!--Empty Space-->
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }

}
</script>

<style>
    .title{
        font-size: 230px;
        font-family: 'Oswald', sans-serif;
    }
    .shop{
        font-size: 18px;
        font-family: 'Noto Sans JP', sans-serif;
        border-bottom-style: solid;
        border-width: thin;
    }
    .details{
        font-family: 'Noto Sans', sans-serif;
    }
</style>