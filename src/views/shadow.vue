<template>
  <div class="drop-shadow">
    <MimicryInput
      v-model="form.user_name"
      placeholder="请输入用户名或手机号"
    />
    <MimicryInput
        v-model="form.password"
        placeholder="请输入密码"
    />
    <MimicryInput
      v-model="form.confirm_password"
      placeholder="再次输入密码"
    />
    <MimicryButton @click="onSubmit">立即创建</MimicryButton>
  </div>
</template>
<script>
import MimicryInput from "@/components/mimicryComp/input";
import MimicryButton from "@/components/mimicryComp/button";
export default {
  components: {
    MimicryInput,
    MimicryButton
  },
  data() {
    return {
      form: {
        user_name: "yang",
        password: "",
        confirm_password: "",
      },
      focus: false,
      rules: {
        user_name: [
          { required: true, message: "请输入手机号或用户名", trigger: "blur" },
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
      console.log(this.form);
    },
    inputFocus() {
      console.log(this.focus);
      this.focus = true;
    },
    inputBlur() {
      console.log(this.focus);
      this.focus = false;
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

.inner-shadow {
  border-radius: 20px;
  box-shadow: inset 18px 18px 30px #d1d9e6, inset -18px -18px 30px #fff;
}
.inner-shadow-ring {
  border-radius: 100%;
  box-shadow: inset 9px 9px 15px #d1d9e6, inset -9px -9px 15px #fff;
}
.inner-shadow-ring:before {
  content: "";
  position: absolute;
  left: 20%;
  top: 20%;
  width: 60%;
  height: 60%;
  border-radius: 100%;
  background: #ecf0f3;
  box-shadow: 9px 9px 15px #d1d9e6, -9px -9px 15px #fff;
}
</style>