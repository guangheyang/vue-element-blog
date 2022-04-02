<template>
  <div class="about">
    <el-row>
      <el-col :xs="24" :sm="11" :md="8" :lg="7" :xl="7">
        <div class="left">
          <el-card class="box-card">
            <PersonInfo :info="info" />
            <el-divider />
            <PersonTag :tags="dynamicTags" :power="isPower">
              <template slot="add-tag" v-if="isPower">
                <el-input
                  class="input-new-tag"
                  v-if="inputVisible"
                  v-model="inputValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm"
                  @blur="handleInputConfirm"
                >
                </el-input>
                <el-button v-else class="button-new-tag" size="small" @click="showInput"
                  >+ New Tag</el-button
                >
              </template>
            </PersonTag>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :sm="13" :md="16" :lg="17" :xl="17">
        <div class="right">
          <el-card class="box-card">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="最新文章" name="first">
                <el-timeline :reverse="false">
                  <el-timeline-item
                    v-for="(item, index) in blogList"
                    :key="index"
                    :timestamp="item.createTime | timeStr"
                    placement="top"
                  >
                    <el-card>
                      <h4 style="padding-bottom: 0.75rem">{{ item.title }}</h4>
                      <p>杨光贺 发布于 {{ item.createTime | timeStr }}</p>
                    </el-card>
                  </el-timeline-item>
                </el-timeline>
              </el-tab-pane>
              <el-tab-pane label="配置" name="second">
                <el-form ref="form" :model="form" label-width="5rem">
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="活跃状况" name="third">
                <LineEchart
                  :chart-data="lineChartData"
                  :width="'50rem'"
                ></LineEchart>
              </el-tab-pane>
              <el-tab-pane label="类别占比" name="four">
                <LineEchart
                  :chart-data="lineChartData"
                  :width="'50rem'"
                ></LineEchart>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145],
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130],
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130],
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130],
  },
};
import PersonInfo from '@/components/aboutComp/PersonInfo'
import PersonTag from '@/components/aboutComp/PersonTag'
import LineEchart from "@/components/LineEchart";
import { queryBlog } from "@/api/about";
export default {
  components: {
    LineEchart,
    PersonInfo,
    PersonTag
  },
  computed: {
    isPower() {
      return this.info.power === "admin";
    },
  },
  data() {
    return {
      dynamicTags: ["标签一", "标签二", "标签三"],
      inputVisible: false,
      inputValue: "",
      activeName: "first",
      lineChartData: lineChartData.newVisitis,
      info: {
        name: "杨光贺",
        occupation: "前端工程师",
        company: "杭州珞珈数据有限公司",
        nativePlace: "黑龙江省海伦市",
        phone: "18846059565",
        email: "young72674@gmail.com",
        sentence: "每日一句",
        nowYear: new Date().getFullYear(),
        power: "admin",
      },
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      blogList: [],
      loading: false,
    };
  },
  created() {
    this.getBlogList();
  },
  methods: {
    getBlogList() {
      this.loading = true;
      queryBlog({ page: 1, size: 5 })
        .then((res) => {
          console.log(res, "res");
          this.blogList = res.data;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
<style lang="scss" scoped>
.about {
  max-width: 80rem;
  margin: 0 0 0 1rem;
  .left {
    margin: 0 1rem 1rem 0;
  }
  .right {
    max-width: 55rem;
    margin: 0 1rem 0 0;
  }
}
</style>
