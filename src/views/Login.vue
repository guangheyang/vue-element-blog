<template>
  <div class="drop-shadow">
    <div class="logo">logo</div>
    <Verification :model="form" :rules="rules" ref="form" label-width="80px">
      <MimicryInput
        prop="user_name"
        v-model="form.user_name"
        placeholder="请输入用户名或手机号"
      />
      <MimicryInput
        prop="password"
        v-model="form.password"
        type="password"
        placeholder="请输入密码"
      />
      <MimicryInput
        prop="confirm_password"
        v-model="form.confirm_password"
        type="password"
        placeholder="再次输入密码"
      />
      <div class="button-wrap">
        <MimicryButton @click="$router.push({ path: 'register' })" >注册账号</MimicryButton>
        <MimicryButton @click="onSubmit">登录</MimicryButton>
      </div>
    </Verification>
  </div>
</template>
<script>
import MimicryInput from "@/components/mimicryComp/input";
import MimicryButton from "@/components/mimicryComp/button";
import Verification from "@/components/verificationComp/Verification";
export default {
  components: {
    MimicryInput,
    MimicryButton,
    Verification,
  },
  data() {
    return {
      form: {
        user_name: "111111",
        password: "1",
        confirm_password: "1",
      },
      rules: {
        user_name: [
          { required: true, message: "请输入手机号或用户名", trigger: "blur" },
          { min: 3, max: 5, message: "请输入手机号或用户名", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
        confirm_password: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    onSubmit(form) {
      this.$refs[form].validate((valid) => {
        console.log(valid, "value");
        //   if (valid) {
        //     const { user_name, password } = this.form;
        //     ax.get(
        //       `http://192.168.1.20:12306/queryUser?user_name=${user_name}`
        //     ).then((res) => {
        //       console.log(res, "res");
        //       if (password !== res.data.data[0].password) {
        //         alert("密码错误");
        //       } else {
        //         this.$router.push({
        //           path: "/",
        //         });
        //       }
        //     });
        //   } else {
        //     console.log("error submit!!");
        //     return false;
        //   }
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
  .logo {
    height: 200px;
    line-height: 200px;
    border: 1px solid #c3c3c3;
    text-align: center;
  }
  .button-wrap {
    display: flex;
    align-content: center;
    justify-content: space-around;
    margin-top: 5rem;
  }
}
.drop-shadow:hover {
  border-radius: 20px;
}
</style>
