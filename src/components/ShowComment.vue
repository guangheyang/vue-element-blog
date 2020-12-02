<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>评论区</span>
        </div>
        <div v-if="comments.length"></div>
        <div v-else class="noComment">暂时还没有人评论,快来抢沙发吧</div>
    </el-card>
</template>
<script>
export default {
    props: {
        comments: {
            type: Array,
            default: () => {
                return []
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .box-card {
        margin-top: 24px;
        .noComment {
            color: #9eabb3;
            text-align: center;
        }
    }
</style>
