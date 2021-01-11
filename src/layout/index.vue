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
        min-height: 720px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .container {
        margin: 124px auto 0;
        overflow-x: hidden;
        padding: 0 1rem;
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
