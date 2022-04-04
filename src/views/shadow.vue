<template>
  <div class="drop-shadow">
    <!-- <div class="inputWrap" :class="{ 'focus': focus }">
      <span data-placeholder="请输入用户名或手机号"></span>
      <input class="inputText" v-model="form.user_name" @focus="inputFocus" @blur="inputBlur" />
    </div> -->
    <template v-for="item in Object.keys(form)">
      <MimicryInput
        :key="item"
        :inputData="form[item]"
        placeholder="请输入用户名或手机号"
      />
    </template>
    <!-- <div class="inputWrap">
      <span data-placeholder="请输入密码"></span>
      <input class="inputText" v-model="form.password" show-password />
    </div>
    <div class="inputWrap">
      <span data-placeholder="再次输入密码"></span>
      <input class="inputText" v-model="form.confirm_password" />
    </div> -->
    <div class="buttonWrap">
      <button type="primary" @click="onSubmit('form')">立即创建</button>
    </div>
  </div>
</template>
<script>
import MimicryInput from "@/components/mimicryComp/input";
export default {
  components: { MimicryInput },
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

.buttonWrap {
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 5rem;
  button {
    color: #596275;
    border-radius: 3rem;
    border: 0;
    cursor: pointer;
    box-shadow: 9px 9px 18px rgba(0, 0, 0, 0.1),
      -9px -9px 18px rgba(255, 255, 255, 1);
    transition: box-shadow 0.2s ease-out;
    outline: none;
    width: 130px;
    height: 55px;
  }
  button:active {
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2),
      -1px -1px 2px rgba(255, 255, 255, 0.8);
  }
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