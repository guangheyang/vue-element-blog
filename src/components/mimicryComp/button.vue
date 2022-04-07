<template>
  <div class="buttonWrap">
    <button @click="$emit('click')">
      <slot name="default" />
    </button>
  </div>
</template>
<style lang="scss" scoped>
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
</style>