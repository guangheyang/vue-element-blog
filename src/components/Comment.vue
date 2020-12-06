<template>
    <el-card class="box-card">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="昵称">
                <el-input v-model="form.name" maxlength="10" show-word-limit placeholder="你的昵称" style="width: 228px;" />
            </el-form-item>
            <el-form-item label="评论">
                <el-input type="textarea" v-model="form.desc" :autosize="{ minRows: 3, maxRows: 5}" maxlength="400" show-word-limit placeholder="说点什么吧"  />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="$emit('comment-submit', form)">提交</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: '',
                desc: ''
            }
        }
    }
}
</script>
