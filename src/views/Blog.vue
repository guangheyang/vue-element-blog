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
                <div class="news-content" v-html="form.content"></div>
            </div>
        </div>
        <el-backtop target=".content"></el-backtop>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                title: '从 egg-bin 聊到 command line interface Tool',
                create: '18 MARCH 2019',
                content: '最近正在看一些关于 egg 方面的东西，其中对于 egg 的运行方式是基于'+ '\r\n' +' egg-bin 来处理的，正好可以借此机会通过 egg-bin 来了解 egg 的运行过程以及 egg-bin 在其他场景下的作用。而 egg-bin 是基于common-bin（封装的 cli 开发工具）开发的，其中对于 node cli 工具的开发方式也颇有启发，一并进行下相关方面的学习。'
            }
        }
    },
    methods: {
        goBack() {
            console.log('go back');
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
