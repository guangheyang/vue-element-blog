<template>
  <div id="editor">
    <mavon-editor
      style="height: 100%"
      :subfield="false"
      :value="value"
      :toolbars="toolbars"
      @change="change"
      @imgAdd="imgAdd"
      @imgDel="imgDel"
    />
  </div>
</template>
<script>
// Local Registration
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "editor",
  components: {
    mavonEditor,
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      toolbars: {
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        rash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
      }
    };
  },
  methods: {
    change(value, render) {
      this.$emit('change-value', render, value)
    },
    imgAdd(pos, $file) {
      this.$emit('img-add', pos, $file)
    },
    imgDel(fileName) {
      this.$emit('img-add', fileName)
    }
  },
};
</script>