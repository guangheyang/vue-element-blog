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
      default: () => {}
    },
    model: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      propList: [],
      message: ''
    }
  },
  mounted() {
    this.propList = this.$slots.default.filter(ele => {
      if (ele.data && ele.data.attrs && ele.data.attrs.prop) {
        return ele
      }
    })
    this.validate()
  },
  methods: {
    // 任一表单项被校验后触发
    validate() {
      let result = true
      this.propList.forEach(p => {
        const prop = p.data.attrs.prop
        console.log(prop)
        result = this.rules[prop].every(rule => {
          const { required, message, trigger } = rule
          if (required) {
            return this.model[prop] !== ''
          }
        })
      })
      // console.log(result, 'res')
    },
  },
};
</script>