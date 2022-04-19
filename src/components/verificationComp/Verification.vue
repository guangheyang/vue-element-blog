<template>
  <div>
    <slot name="default" />
  </div>
</template>
<script>
export default {
  props: {
    rules: {
      type: Object,
      default: () => {},
    },
    model: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      propList: [],
      message: "",
    };
  },
  mounted() {
    this.propList = this.$slots.default.filter((ele) => {
      if (ele.data && ele.data.attrs && ele.data.attrs.prop) {
        return ele;
      }
    });
  },
  methods: {
    // 任一表单项被校验后触发
    validate(valid) {
      valid(this.ruleExamine())
    },
    // 检验规则
    ruleExamine() {
      let result = true;
      this.propList.forEach((p) => {
        const prop = p.data.attrs.prop;
        this.rules[prop].some((rule) => {
          // const { trigger } = rule;
          // // 根据trigger,实现触发方式
          if (rule.required) {
            if (this.model[prop] === "") result = false;
          }
          if (
            (rule.min && this.model[prop].length < rule.min) ||
            (rule.max && this.model[prop].length > rule.max)
          ) {
            result = false;
          }
        })
      });
      return result
    },
  },
};
</script>