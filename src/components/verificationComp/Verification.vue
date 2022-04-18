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
    this.validate();
  },
  methods: {
    // 任一表单项被校验后触发
    validate() {
      let result = true;
      this.propList.forEach((p) => {
        const prop = p.data.attrs.prop;
        result = this.ruleExamine(prop)
        // console.log(trigger.slice(0, 1).toUpperCase() + trigger.slice(1), p)
        // console.log(p.componentInstance['input' + trigger.slice(0, 1).toUpperCase() + trigger.slice(1)])
        console.log(result, "res");
      });
    },
    // 检验规则
    ruleExamine(prop) {
      return this.rules[prop].some((rule) => {
        console.log(rule, 'rule')
        // const { trigger } = rule;
        // // 根据trigger,实现触发方式
        if (rule.required) {
          if (this.model[prop] === "") return false;
        }
        if (
          (rule.min && this.model[prop].length < rule.min) ||
          (rule.max && this.model[prop].length > rule.max)
        ) {
          return false;
        }
        return true;
      });
    },
  },
};
</script>