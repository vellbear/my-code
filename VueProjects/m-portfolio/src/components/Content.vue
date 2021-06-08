<template>

    <div class="content d-flex flex-column justify-content-center">
        <div class="content-head container-fluid row ps-4 pt-3 fs-1 m-0 align-self-start" v-if="showHeader">
            <div class="d-flex justify-content-start align-items-start col-6 p-0">
                <h1 class="brand animated fadeInDown">{{ contentBrand }}</h1>
            </div>
            <div class="animated fadeInDown col-6 d-flex flex-row justify-content-end m-0 p-0 gap-4">
                <h1 class="links">Portfolio</h1>
                <h1 class="links" @click="toggleSocials">Social</h1>
                <h1 class="links">Contact</h1>
            </div>
        </div>
        <div class="content-main container-flud d-flex flex-column align-items-center justify-content-center">
            <transition name="slide-fade-out">
                    <div @click="toggleSocials" v-if="showSocialLinks" class="social-links">
                        <div class="animated jello infinite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                            </svg>
                        </div>
                        <h1 class="social title animated fadeInLeft" style="max-width: 1600px" v-if="showSocialLinks"> LinkedIn</h1>
                        <h1 class="social title animated fadeInRight" style="max-width: 1600px" v-if="showSocialLinks"> Instagram </h1>
                        <h1 class="social title animated fadeInLeft" style="max-width: 1600px" v-if="showSocialLinks"> Pintrest </h1>
                        <h1 class="social title animated fadeInLeft" style="max-width: 1600px" v-if="showSocialLinks"> Youtube </h1>
                    </div>
            </transition>              
                <h1 class="title animated fadeInLeft" style="max-width: 1600px" v-if="showContentTitle"> {{ contentTitle }} </h1>              
                <h1 class="quote ps-1 pe-1" style="max-width: 900px" v-if="showContentSubtitle">{{ contentQuote }}</h1>                            
        </div>
        <div class="content-foot container-fluid fs-1" v-if="showContentFooter">
            <div class="animated fadeInUp container-fluid d-flex flex-column align-items-center">
                <h1 class="scroll-down fw-bold m-0 pt-5">Scroll Down</h1>
                <div class="animated wobble infinite">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            contentTitle: 'Title',
            contentBrand: 'Brand',
            contentQuote: 'quote',
            showSocialLinks: false,
            showContentTitle: true,
            showContentSubtitle: true,
            showContentHeader: true,
            showContentFooter: true
        }
    },

    props:{
        brand: String,
        title: String,
        quote: String,
        showHeader: {
            type: Boolean,
            default: true
        },
        showFooter: {
            type: Boolean,
            default: true
        },
        showTitle: {
            type: Boolean,
            default: true
        },
        showSubtitle: {
            type: Boolean,
            default: true
        }
    },

    beforeMount(){
        this.contentTitle = this.title
        this.contentBrand = this.brand
        this.contentQuote = this.quote
        this.showContentHeader = this.showHeader
        this.showContentFooter = this.showFooter
        this.showContentTitle = this.showTitle
        this.showContentSubtitle = this.showSubtitle
    },

    methods:{
        toggleSocials(e){
            this.showSocialLinks = !this.showSocialLinks
            this.showContentTitle = !this.showContentTitle
            this.showContentSubtitle = !this.showContentSubtitle
            this.showContentFooter = !this.showContentFooter
            console.log(e)
        },

        hideSocials(e){
            this.showSocialLinks = false
            this.showContentTitle = true
            this.showContentSubtitle = true
            this.showContentFooter = true
            console.log(e.target)
        }
    }
}
</script>

<style>
    .brand:hover, .links:hover{
        cursor: pointer;
    }
    .content{
        position: relative;
        min-height: 100vh;
        overflow-y: hidden;
        width: 100%;
    }
    .content-head{
        position: absolute;
        max-height: 50px;
        inset: 0;
    }
    .content-main{   
        min-height: 700px;
        margin: 0, auto;
    }
    .title{
        font-size: 200px;
        color: white;
    }
    .links, .brand{
        font-size: 35px;
    }
    .social-links{
        margin-top: 80px;
    }
    .scroll-down, .brand:hover, .links:hover{
        color: white;
    }
    .bi-x-circle-fill{
        fill: white;
    }
    .bi-x-circle-fill:hover{
        fill: black;
    }
    .social:hover{
        color: black;
        cursor: pointer;
    }

    .slide-fade-out-leave-active{
        transition: all 0.5s ease-out;
    }
    .slide-fade-out-leave-to{
        transform: translateY(-100px);
        opacity: 0;
    }
</style>