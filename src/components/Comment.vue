<template>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
    <el-form-item label="昵称" prop="name">
        <el-input v-model="form.name" maxlength="10" show-word-limit placeholder="你的昵称" style="width: 228px;" />
    </el-form-item>
    <el-form-item label="评论" prop="desc">
        <el-input type="textarea" v-model="form.desc" :autosize="{ minRows: 3, maxRows: 5}" maxlength="400" show-word-limit placeholder="说点什么吧"  />
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
    </el-form-item>
</el-form>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: '',
                desc: ''
            },
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
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$emit('comment-submit', this.form)
                } else {
                    return false;
                }
            });
        },
    }
}
</script>
