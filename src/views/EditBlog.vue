<template>
  <div class="editBlog">
    <el-card class="box-card">
      <div class="editor-container">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item label="标题" prop="title">
            <el-input
              v-model="form.title"
              show-word-limit
              maxlength="20"
              style="width: 226px"
            ></el-input>
          </el-form-item>
          <el-form-item label="状态" prop="module">
            <el-select v-model="form.module">
              <el-option label="全部可见" value="1" />
              <el-option label="仅自己可见" value="2" />
            </el-select>
          </el-form-item>
          <el-form-item label="内容" prop="content" class="vab-quill-content">
            <Editor :value="value" @change-value="changeValue" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSee">预览效果</el-button>
            <el-button type="primary" :loading="isClickSave" @click="handleSave">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-dialog title="博客预览效果" width="80%" :visible.sync="dialogTableVisible">
      <div class="preview">
        <h1 class="news-title">{{ form.title }}</h1>
        <div class="news-content" v-html="form.content"></div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Editor from "@/components/EditorComp/Editor";
import { insertBlog } from '@/api/editor'
import { message } from "@/utils/message";
export default {
  components: {
    Editor,
  },
  data() {
    return {
      form: {
        title: "",
        module: "",
        content: "",
      },
      value: '',
      isClickSave: false,
      dialogTableVisible: false,
      rules: {
        title: [
          {
            required: true,
            message: "请输入标题",
            trigger: "blur",
          },
        ],
        module: [
          {
            required: true,
            message: "请选择模块",
            trigger: "change",
          },
        ],
        content: [
          {
            required: true,
            message: "请输入内容",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSave() {
      this.$refs["form"].validate((valid) => {
        this.isClickSave = true;
        if (valid) {
          const { title, content: data } = this.form;
          insertBlog({ title, data }).then((res) => {
            if (res.code === 20000) {
              message({ message: "操作成功", type: "success" });
              this.$router.push({ path: "/" });
            }
          });
        } else {
          this.isClickSave = false;
          return false;
        }
      });
    },
    handleSee(valid) {
      if (valid) {
        this.dialogTableVisible = true;
      } else {
        return false;
      }
    },
     changeValue(render) {
      this.form.content = render
    },
  },
};
</script>

<style scoped>
.editBlog {
  margin: 0 1rem;
}
.box-card {
  max-width: 80rem;
  margin: 0 auto;
}
</style>
<style lang="scss">
.preview {
  min-height: 60vh;
  .news-title {
    color: #2e2e2e;
    font-size: 3rem;
    font-weight: 700;
    font-weight: bolder;
    padding: 10px 0 20px;
  }
  .news-content {
    margin: 5rem 0;
    font-size: 1.2rem;
    text-indent: 2em;
    img {
      max-width: 37.5rem;
      margin-bottom: 0.625px;
    }
  }
}
</style>
