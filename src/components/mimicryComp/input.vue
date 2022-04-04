
<template>
  <div class="inputWrap" :class="{ focus: focus }">
    <span :data-placeholder="placeholder"></span>
    <input
      class="inputText"
      :value="inputData"
      @input="inputChange"
      @focus="inputFocus"
      @blur="inputBlur"
    />
  </div>
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    inputData: {
      type: [Object, String, Number],
      default: "",
    },
  },
  data() {
    return {
      focus: false,
    };
  },
  methods: {
    inputFocus() {
      console.log(this.focus);
      this.focus = true;
    },
    inputBlur() {
      console.log(this.focus);
      this.focus = false;
    },
    inputChange($event) {
      this.inputData = $event.target.value
      console.log($event);
    },
  },
};
</script>
<style lang="scss" scoped>
.inputWrap {
  margin: 30px 0;
  position: relative;

  span {
    color: #adadad;
  }
  span::before {
    content: attr(data-placeholder);
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    transition: all 0.5s;
  }

  span::after {
    content: "";
    position: absolute;
    color: #adadad;
    top: 100%;
    left: 0%;
    width: 0%;
    height: 2px;
    transform: translateY(-50%);
    background: linear-gradient(120deg, #3498db, #8e44ad);
    transition: all 0.5s;
  }
  .inputText {
    width: 100%;
    height: 20px;
    outline: none;
    border: 0px;
    background-color: transparent;
    border-bottom: 2px solid #adadad;
    padding: 0;
  }
}

.focus span::before {
  top: -20px;
}
.focus span::after {
  width: 100%;
}
</style>