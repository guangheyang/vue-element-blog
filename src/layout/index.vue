<template>
    <div class="wrap">
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
    .wrap {
        min-height: 45rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .container {
        margin: 7.75rem 1rem 0;
        overflow-x: hidden;
    }
    .nav-box{
        padding:0 1.5rem;
    }
    .v-enter {
        transform: translateX(60rem);
    }
    .v-enter-active{
        transition: all .5s;
    }
    .v-enter-to {
        transform: translateX(0px);
    }
</style>
