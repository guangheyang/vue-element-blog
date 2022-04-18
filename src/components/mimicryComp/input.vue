
<template>
  <div class="inputWrap" :class="{ focus: focus }">
    <span :class="{ error: validate } " :data-placeholder="placeholder"></span>
    <input
      class="inputText"
      v-model="message"
      :type="type"
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
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      validator(val) {
        return ['text', 'number', 'password'].includes(val)
      }
    }
  },
  data() {
    return {
      focus: false,
      message: this.value,
      validate: false
    };
  },
  methods: {
    inputFocus() {
      this.focus = true;
    },
    inputBlur() {
      if (this.message) return
      this.focus = false;
    },
    inputChange() {
      this.$emit('input', this.message)
    }
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
  top: -10px;
}
.focus span::after {
  width: 100%;
}
</style>