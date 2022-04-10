<template>
   <div class="drop-shadow">
    <el-form :model="form" :rules="rules" ref="form" label-width="80px">
      <MimicryInput
        v-model="form.user_name"
        placeholder="请输入用户名或手机号"
      />
      <MimicryInput
        v-model="form.password"
        type="password"
        placeholder="请输入密码"
      />
      <MimicryInput
        v-model="form.confirm_password"
        type="password"
        placeholder="再次输入密码"
      />
      <MimicryButton @click="onSubmit">立即创建</MimicryButton>
      <MimicryButton @click="$router.go(-1)">返回</MimicryButton>
    </el-form>
  </div>
</template>
<script>
import MimicryInput from "@/components/mimicryComp/input";
import MimicryButton from "@/components/mimicryComp/button";
export default {
   components: {
    MimicryInput,
    MimicryButton,
  },
  data() {
    return {
      form: {
        user_name: "",
        password: "",
        confirm_password: "",
      },
      rules: {
        user_name: [{ required: true, message: "请输入手机号或用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        confirm_password: [{ required: true, message: "请输入密码", trigger: "change" }],
      },
    };
  },
  methods: {
    onSubmit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          const { user_name, password } = this.form;
          axios
            .post("/insertUser", {
              user_name,
              password,
              avatar_id: Math.floor(Math.random() * 27) + 1,
            })
            .then((res) => {
              if (res.status) {
                this.$router.push({
                  path: "/login",
                  name: "Login",
                });
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.drop-shadow {
  border-radius: 20px;
  max-width: 416px;
  margin: 80px auto;
  background: #ecf0f3;
  transition: 0.3s ease all;
  padding: 3rem 2rem;
  box-sizing: border-box;
  box-shadow: 9px 9px 15px #d1d9e6, -9px -9px 15px #fff;
}
.drop-shadow:hover {
  border-radius: 20px;
}
</style>
