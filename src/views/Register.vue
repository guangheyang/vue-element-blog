<template>
    <el-card class="box-card">
        <el-form :model="form" :rules="rules" ref="form" label-width="80px">
            <el-form-item label="用户名" prop="user_name">
                <el-input v-model="form.user_name" placeholder="请输入用户名或手机号" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" show-password placeholder="请输入密码" />
            </el-form-item>
            <el-form-item label="确认密码" prop="confirm_password">
                <el-input v-model="form.confirm_password" placeholder="再次输入密码" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            form: {
                user_name: '',
                password: '',
                confirm_password: ''
            },
            rules: {
                user_name: [
                    { required: true, message: '请输入手机号或用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ],
                confirm_password: [
                    { required: true, message: '请输入密码', trigger: 'change' }
                ]
            }
        }
    },
    methods: {
        onSubmit(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    const { user_name, password } = this.form
                    axios.post('http://192.168.1.20:12306/insertUser', {
                        user_name, password, avatar_id: Math.floor(Math.random() * 27) + 1
                    }).then(res => {
                        if (res.status) {
                            this.$router.push({
                                path: '/login',
                                name: 'Login'
                            })
                        }
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    .box-card {
        max-width: 480px;
        margin: 40px auto 10rem;
    }
</style>
