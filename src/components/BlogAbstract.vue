<template>
    <ul class="content">
        <li class="main-item">
            <el-link :underline="false" @click="$emit('link-title', blogObj.id)">{{ blogObj.title }}</el-link>
            <div class="blog-abstract">
                {{ blogObj.blogAbstract }}
            </div>
            <div class="blog-info">
                <span class="blog-author">杨光贺</span>
                <span class="blog-created">发布于{{ blogObj.createTime }}</span>
                <span>浏览 ({{ blogObj.seeNum }})</span>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
       blogObj :{
           type: Object,
           required: true
       }
    }
}
</script>

<style lang="scss" scoped>
.main-item {
    max-width: 880px;
    margin: 0 auto 4rem;
    text-align: left;
    list-style: none;
    padding-bottom: 2rem;
    position: relative;
    border-bottom: 1px solid #ebf2f6;
    .el-link.el-link--default {
        font-size: 2.6rem;
        font-weight: 700;
        margin-bottom: .4rem;
        transition: color .3s ease;
        &:hover {
            color: #2e2e2e;
        }
    }
    .blog-abstract {
        font-size: 1.2rem;
        line-height: 1.9rem;
        padding-top: .5rem;
        height: 92px;
        color: #30363A;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        text-indent: 2rem;
    }
    .blog-info {
        font-size: 1rem;
        display: flex;
        color: #8492a6;
        text-transform: uppercase;
        font-weight: 500;
        padding-top: 2.2rem;
        .blog-author {
            padding: 0 .5rem 0 0;
        }
        .blog-created {
            padding: 0 1rem;
            margin-left: .5rem;
            border-left: 1px solid #d5dbde;
        }
    }
}
</style>
