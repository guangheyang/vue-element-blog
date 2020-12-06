<template>
    <div class="content">
        <div class="blogHeader">
            <el-page-header @back="goBack" content="博客内容">
            </el-page-header>
        </div>
        <div class="blog">
            <div>
                <h1 class="news-title">{{ form.title }}</h1>
                <span class="create">{{ form.create }}</span>
                <div class="news-content" v-html="form.blogAbstract"></div>
            </div>
        </div>
        <Comment @comment-submit="onSubmit" />
        <ShowComment :comments="comments" @reply-comments="replyComments" />
        <el-dialog :visible.sync="dialogFormVisible" center>
            <el-form :model="reply" label-width="80px">
                <el-form-item label="昵称">
                    <el-input v-model="reply.name" maxlength="10" show-word-limit placeholder="你的昵称" style="width: 228px;" />
                </el-form-item>
                <el-form-item label="评论">
                    <el-input type="textarea" v-model="reply.desc" :autosize="{ minRows: 3, maxRows: 5}" maxlength="400" show-word-limit :placeholder="`回复${replyName}`"  />
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="onReply(reply)">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import Comment from '@/components/Comment'
import ShowComment from '@/components/ShowComment'
import axios from 'axios';
export default {
    components: {
        Comment,
        ShowComment
    },
    data() {
        return {
            form: {},
            id: this.$route.params.id,
            comments: [],
            formLabelWidth: '120px',
            dialogFormVisible: false,
            reply: {},
            replyName: ''
        }
    },
    created() {
       this.render()
    },
    methods: {
        render() {
            axios.get(`http://192.168.1.20:12306/blogContent?id=${this.id}`).then(res => {
                this.form = res.data.data[0]
            })
            axios.get(`http://192.168.1.20:12306/queryBlogComment?blog_id=${this.id}`).then(res => {
                this.comments = res.data.data
            })
        },
        goBack() {
           this.$router.go(-1)
        },
        onSubmit(form) {
           axios.post(`http://192.168.1.20:12306/insertComment`,{
                blog_id: this.id,
                name: form.name,
                desc: form.desc,
                avatar_id: Math.floor(Math.random() * 27) + 1
            }).then(res => {
                if (res.status) {
                    this.render()
                    form.name = ''
                    form.desc = ''
                }
           })
        },
        replyComments(reply) {
            this.dialogFormVisible = true
            this.replyName = reply.name
        },
        onReply(reply) {
            this.dialogFormVisible = false
            axios.post(`http://192.168.1.20:12306/insertComment`,{
                blog_id: this.id,
                name: reply.name,
                reply: this.replyName,
                desc: reply.desc,
                avatar_id: Math.floor(Math.random() * 27) + 1
            }).then(res => {
                if (res.status) {
                    this.render()
                    reply.name = ''
                    reply.desc = ''
                }
            })
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
