<template>
    <div class="content">
        <div class="blogHeader">
            <el-page-header @back="goBack" content="博客内容">
            </el-page-header>
        </div>
        <div class="blog">
            <div style="min-height: 60vh">
                <h1 class="news-title">{{ form.title }}</h1>
                <span class="create">{{ form.create }}</span>
                <div class="news-content" v-html="form.blogAbstract"></div>
            </div>
        </div>
        <Comment />
    </div>
</template>

<script>
import Comment from '@/components/Comment'
import axios from 'axios';
export default {
    components: {
        Comment
    },
    data() {
        return {
            form: {},
            id: this.$route.params.id
        }
    },
    created() {
        axios.get(`http://192.168.1.20:12306/blogContent?id=${this.id}`).then(res => {
            console.log(res, 'res')
            this.form = res.data.data[0]
        })
    },
    methods: {
        goBack() {
           this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
    .content {
        width: 880px;
        margin: 0 auto;
        .blogHeader {
            /*position: fixed;*/
            /*top: 100px;*/
            margin: 2rem 0;
        }
    }
    .news-title {
        padding: 10px 0 20px;
        text-align: left;
        color: #2e2e2e;
        font-size: 3.2rem;
        font-weight: 700;
    }
    .create {
        color: #9eabb3;
        line-height: 2.2rem;
        font-size: 1.3rem;
        text-transform: uppercase;
    }
    .news-content {
        margin: 5rem 0;
        font-size: 1.2rem;
        text-indent: 2em;
        img {
            width: 600px;
            margin-bottom: 10px;
        }
    }
</style>
