<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>评论区</span>
        </div>
        <div v-if="comments.length">
            <div class="comment" v-for="item in comments" :key="item.comment_id" @click="$emit('reply-comments', item)">
                <el-avatar :src="'avatar'+ item.avatar_id + '.jpeg'" />
                <div class="info">
                    <div class="top">
                        <span class="name" v-html="item.name"></span>
                        <span class="date">{{item.create_time | timeStr }}</span>
                    </div>
                    <span v-if="item.reply">回复</span>
                    <span v-if="item.reply" class="reply">{{ item.reply }}</span>
                    <span v-if="item.reply">：</span>
                    <span class="desc" v-html="item.desc"></span>
                </div>
            </div>
        </div>
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
        margin-top: 1.5rem;
        .comment {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
            cursor: pointer;
            .info {
                margin-left: 0.75rem;
                min-height: 2.5rem;
                flex: 1;
                .top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-bottom: 0.5rem;
                    /*/width: 16.125rem;*/
                    .name {
                        display: block;
                        color: #1989fa;
                        font-size: 0.875rem;
                    }
                    .desc {
                        display: block;
                        color: #606266;
                    }
                }
                .reply {
                    color: #1989fa;
                }
            }
        }
        .noComment {
            color: #9eabb3;
            text-align: center;
        }
    }
</style>
