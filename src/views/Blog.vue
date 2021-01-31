<template>
    <div class="content">
        <div class="blogHeader">
            <el-page-header @back="goBack" content="博客内容">
            </el-page-header>
        </div>
        <div class="blog">
            <div>
                <h1 class="news-title">{{ form.title }}</h1>
                <span class="create">{{ form.createTime | timeMMMM }}</span>
                <div class="news-content" v-html="form.blogAbstract"></div>
            </div>
        </div>
        <el-card class="box-card">
            <Comment @comment-submit="onSubmit" />
        </el-card>
        <ShowComment :comments="comments" @reply-comments="replyComments" />
        <el-dialog :visible.sync="dialogFormVisible" center>
            <el-form ref="reply" :model="reply" :rules="rules" label-width="80px">
                <el-form-item label="昵称" prop="name">
                    <el-input v-model="reply.name" maxlength="10" show-word-limit placeholder="你的昵称" style="width: 228px;" />
                </el-form-item>
                <el-form-item label="评论" prop="desc">
                    <el-input type="textarea" v-model="reply.desc" :autosize="{ minRows: 3, maxRows: 5}" maxlength="400" show-word-limit :placeholder="`回复${replyName}`"  />
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="onReply('reply')">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import Comment from '@/components/Comment'
import ShowComment from '@/components/ShowComment'
import { addSeeNum, blogContent, queryBlogComment } from '@/api/blog'
import { insertComment } from '@/api/comment'
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
            reply: {
                name: '',
                desc: ''
            },
            replyName: '',
            rules: {
                name: [
                    { required: true, message: '请输入你的昵称', trigger: 'blur' }
                ],
                desc: [
                    { required: true, message: '请填写评论内容', trigger: 'blur' }
                ]
            }
        }
    },
    created() {
       this.render()
    },
    methods: {
        render() {
            const { id } = this
            addSeeNum(id)
            blogContent(id).then(res => {
                this.form = res.data[0]
            })
            queryBlogComment(id).then(res => {
                this.comments = res.data
            })
        },
        goBack() {
           this.$router.go(-1)
        },
        insertComment(data) {
            insertComment({
                blog_id: this.id,
                name: data.name,
                desc: data.desc,
                reply: this.replyName,
                avatar_id: Math.floor(Math.random() * 27) + 1
            }).then(res => {
                if (res.status) {
                    this.render()
                    data.name = ''
                    data.desc = ''
                    data.reply = ''
                }
            })
        },
        onSubmit(form) {
           this.insertComment(form)
        },
        replyComments(reply) {
            this.dialogFormVisible = true
            this.replyName = reply.name
        },
        onReply(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.insertComment(this.reply)
                    this.dialogFormVisible = false
                } else {
                    return false
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
