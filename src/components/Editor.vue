<template>
    <div class="editor-container">
        <el-form ref="form" :model="form" :rules="rules" label-width="100px">
            <el-form-item label="标题" prop="title">
                <el-input v-model="form.title" maxlength="20"></el-input>
            </el-form-item>
            <el-form-item label="博客状态" prop="module">
                <el-select v-model="form.module">
                    <el-option label="全部可见" value="1" />
                    <el-option label="仅自己可见" value="2" />
                </el-select>
            </el-form-item>
            <el-form-item label="内容" prop="content" class="vab-quill-content">
                <vab-quill
                    v-model="form.content"
                    :min-height="400"
                    :options="options"
                ></vab-quill>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleSee">预览效果</el-button>
                <el-button type="primary" :loading="isClickSave" @click="handleSave">保存</el-button>
            </el-form-item>
        </el-form>
        <el-dialog title="预览效果" :visible.sync="dialogTableVisible">
            <div style="min-height: 60vh">
                <h1 class="news-title">{{ form.title }}</h1>
                <div class="news-content" v-html="form.content"></div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import vabQuill from '@/components/plugins/vabQuill'
// import axios from 'axios'
import { insertBlog } from '@/api/editor'
import { message } from "@/utils/message";
export default {
    name: 'Editor',
    components: { vabQuill },
    data() {
        return {
            options: {
                theme: 'snow',
                bounds: document.body,
                debug: 'warn',
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ size: ['small', false, 'large', 'huge'] }],
                        [{ color: [] }, { background: [] }],
                        ['blockquote', 'code-block'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        [{ script: 'sub' }, { script: 'super' }],
                        [{ indent: '-1' }, { indent: '+1' }],
                        [{ align: [] }],
                        [{ direction: 'rtl' }],
                        [{ font: [] }],
                        ['clean'],
                        ['link', 'image'],
                    ],
                },
                placeholder: '内容...',
                readOnly: false,
            },
            borderColor: '#dcdfe6',
            dialogTableVisible: false,
            form: {
                title: '',
                module: '',
                content: '',
            },
            rules: {
                title: [
                    {
                        required: true,
                        message: '请输入标题',
                        trigger: 'blur',
                    },
                ],
                module: [
                    {
                        required: true,
                        message: '请选择模块',
                        trigger: 'change',
                    },
                ],
                content: [
                    {
                        required: true,
                        message: '请输入内容',
                        trigger: 'blur',
                    },
                ],
            },
            isClickSave: false
        }
    },
    methods: {
        handleSee() {
            this.$refs['form'].validate((valid) => {
                this.$refs.form.validateField('content', (errorMsg) => {
                    console.log(errorMsg)
                })
                if (valid) {
                    this.dialogTableVisible = true
                } else {
                    return false
                }
            })
        },
        handleSave() {
            this.$refs['form'].validate((valid) => {
                this.$refs.form.validateField('content', (errorMsg) => {
                    console.log(errorMsg)
                    this.borderColor = '#dcdfe6'
                    if (errorMsg) {
                        this.borderColor = '#F56C6C'
                    }
                })
                this.isClickSave = true
                if (valid) {
                    const { title, content: data } = this.form
                    insertBlog({ title, data }).then(res => {
                        if (res.code === 20000) {
                            message({ message: '操作成功', type: 'success' })
                            this.$router.push({ path: '/'})
                        }
                    })
                } else {
                    this.isClickSave = false
                    return false
                }
            })
        },
    },
}
</script>
<style lang="scss" scoped>
    .editor-container {
        /*width: 1280px;*/
        margin: 0 auto;
        .news {
            &-title {
                text-align: center;
            }

            &-content {
                ::v-deep {
                    p {
                        line-height: 30px;

                        img {
                            display: block;
                            margin-right: auto;
                            margin-left: auto;
                        }
                    }
                }
            }
        }

        .vab-quill-content {
            ::v-deep {
                .el-form-item__content {
                    line-height: normal;
                }
            }
        }
    }
</style>
<style lang="scss">
    .news-title {
        font-size: 20px;
        padding: 10px 0 20px;
    }
    .news-content {
        img {
            width: 600px;
            margin-bottom: 10px;
        }
    }
</style>
