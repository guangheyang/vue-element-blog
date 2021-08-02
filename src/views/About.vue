<template>
  <div class="about">
    <el-row>
      <el-col :xs="24" :sm="11" :md="8" :lg="7" :xl="7">
        <div class="left">
          <el-card class="box-card">
            <div class="top">
              <el-avatar class="avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              <div class="name">{{ info.name }}</div>
              <div class="every">{{ info.sentence }}</div>
            </div>
            <div class="info">
              <div class="el-icon-s-platform"><span class="text">{{ info.occupation }} {{ info.nowYear - 2019 }}年工作经验</span></div>
              <div class="el-icon-office-building"><span class="text">{{ info.company }}</span></div>
              <div class="el-icon-location-information"><span class="text">{{ info.nativePlace }}</span></div>
              <div class="el-icon-phone-outline"><span class="text">{{ info.phone }}</span></div>
              <div class="el-icon-message"><span class="text">{{ info.email }}</span></div>
              <div></div>
            </div>
            <el-divider />
            <div class="tag">
              <div class="personTag">个人标签</div>
              <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                :closable="isPower"
                :disable-transitions="false"
                @close="handleClose(tag)"
              >{{tag}}</el-tag>
              <template v-if="isPower">
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
                <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
              </template>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :sm="13" :md="16" :lg="17" :xl="17">
        <div class="right">
          <el-card class="box-card">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="最新文章" name="first">
                  <el-timeline :reverse="true">
                    <el-timeline-item v-for="(item, index) in blogList" :key="index" :timestamp="item.createTime | timeStr" placement="top">
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
                <LineEchart :chart-data="lineChartData" :width="'50rem'" ></LineEchart>
              </el-tab-pane>
              <el-tab-pane label="类别占比" name="four">
                <LineEchart :chart-data="lineChartData" :width="'50rem'" ></LineEchart>
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
      actualData: [120, 82, 91, 154, 162, 140, 145]
    },
    messages: {
      expectedData: [200, 192, 120, 144, 160, 130, 140],
      actualData: [180, 160, 151, 106, 145, 150, 130]
    },
    purchases: {
      expectedData: [80, 100, 121, 104, 105, 90, 100],
      actualData: [120, 90, 100, 138, 142, 130, 130]
    },
    shoppings: {
      expectedData: [130, 140, 141, 142, 145, 150, 160],
      actualData: [120, 82, 91, 154, 162, 140, 130]
    }
  }
import LineEchart from '@/components/LineEchart'
import { queryBlog } from '@/api/about'
export default {
  components: {
    LineEchart
  },
  computed: {
    isPower() {
      return this.info.power === 'admin'
    }
  },
  data() {
    return {
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: '',
      activeName: 'first',
      lineChartData: lineChartData.newVisitis,
      info: {
        name: '杨光贺',
        occupation: '前端工程师',
        company: '杭州珞珈数据有限公司',
        nativePlace: '黑龙江省海伦市',
        phone: '18846059565',
        email: 'guangheyang@hotmail.com',
        sentence: '每日一句',
        nowYear: new Date().getFullYear(),
        power: 'admin'
      },
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      blogList: [],
      loading: false
    };
  },
  created() {
    this.getBlogList()
  },
  methods: {
    getBlogList() {
      this.loading = true
      queryBlog({ page: 1, size: 5 }).then(res => {
        console.log(res, 'res')
        this.blogList = res.data
      }).catch(() => {
        this.loading = false
      })
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
      this.inputValue = '';
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
<style lang="scss" scoped>
  .about {
    max-width: 80rem;
    margin: 0 auto;
    .left {
      margin: 0 0 1.75rem 1.5rem;
      .box-card {
        width: calc(100% - 2rem);
        box-sizing: border-box;
        margin: 0 auto;
        .top {
          margin-bottom: 1.5rem;
          text-align: center;
          .avatar {
            width: 6.5rem;
            height: 6.5rem;
            margin-bottom: 1.5rem;
          }
          .name {
            margin-bottom: 0.25rem;
            color: rgba(0,0,0,.85);
            font-weight: 500;
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
        }
        .info {
          flex: 1;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          div {
            width: 100%;
            margin-bottom: 0.5rem;
          }
          .text {
            margin-left: 0.75rem;
            line-height: 20px;
            height: 20px;
          }
        }
        .tag {
          .personTag {
            margin-bottom: 1.75rem;
          }
          .el-tag {
            margin-bottom: 0.625rem;
            margin-right: 0.625rem;
          }
          .el-tag + .el-tag {
            margin-right: 0.625rem;
          }
          .button-new-tag {
            height: 2rem;
            width: 5.5rem;
            line-height: 1.875rem;
            padding-top: 0;
            padding-bottom: 0;
          }
          .input-new-tag {
            width: 5.5rem;
            padding-top: 0;
            padding-bottom: 0;
            margin-bottom: 0.625rem;
            vertical-align: bottom;
          }
        }
      }
    }
    .right {
      max-width: 55rem;
      margin: 0 0 0 1.5rem;
      .box-card {
        width: calc(100% - 2rem);
        margin: 0 auto;
      }
    }
  }
</style>
