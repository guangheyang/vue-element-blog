<template>
    <div>
        <Navigation />
        <div class="container">
            <transition >
                <router-view></router-view>
            </transition>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/Footer'
export default {
    components: {
        Navigation,
        Footer
    }
}
</script>

<style lang="scss" scoped>
    .container {
        margin: 124px auto 0;
        overflow-x: hidden;
        padding: 0 1rem;
        height: calc(100% - 100px);
    }
    .nav-box{
        padding:0 24px;
    }
    .v-enter {
        transform: translateX(1000px);
    }
    .v-enter-active{
        transition: all .5s;
    }
    .v-enter-to {
        transform: translateX(0px);
    }
</style>
