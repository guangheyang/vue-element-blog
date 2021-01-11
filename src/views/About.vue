<template>
  <div class="about">
    <div class="left">
      <el-card class="box-card">
       <div class="top">
         <el-avatar class="avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
         <div class="name">杨光贺</div>
         <div class="every">每日一句</div>
       </div>
        <div class="info">
          <div class="el-icon-s-platform"><span class="text">前端工程师</span></div>
          <div class="el-icon-office-building"><span class="text">杭州珞珈数据</span></div>
          <div class="el-icon-location-information"><span class="text">浙江省杭州市</span></div>
          <div class="el-icon-phone-outline"><span class="text">18846059565</span></div>
          <div class="el-icon-message"><span class="text">guangheyang@hotmail.com</span></div>
        </div>
        <el-divider />
        <div class="tag">
          <div class="personTag">个人标签</div>
          <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >{{tag}}</el-tag>
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
        </div>
      </el-card>
    </div>
    <div class="right">
      <el-card class="box-card">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="最新文章" name="first">
            <div class="block">
              <el-timeline>
                <el-timeline-item v-for="(item, index) in blogList" :key="index" :timestamp="item.createTime" placement="top">
                  <el-card>
                    <h4 style="padding-bottom: 12px">{{ item.title }}</h4>
                    <p>杨光贺 发布于 {{ item.createTime }}</p>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
          </el-tab-pane>
          <el-tab-pane label="配置" name="second">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="即时配送">
                <el-switch v-model="form.delivery"></el-switch>
              </el-form-item>
              <el-form-item label="活动性质">
                <el-checkbox-group v-model="form.type">
                  <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                  <el-checkbox label="地推活动" name="type"></el-checkbox>
                  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="特殊资源">
                <el-radio-group v-model="form.resource">
                  <el-radio label="线上品牌商赞助"></el-radio>
                  <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="活动形式">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="活跃状况" name="third">
            <LineEchart :chart-data="lineChartData" :width="'880px'" ></LineEchart>
          </el-tab-pane>
          <el-tab-pane label="类别占比" name="wrw">
            <LineEchart :chart-data="lineChartData" :width="'880px'" ></LineEchart>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
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
import axios from 'axios'
import LineEchart from '@/components/LineEchart'
export default {
  components: {
    LineEchart
  },
  data() {
    return {
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: '',
      activeName: 'second',
      lineChartData: lineChartData.newVisitis,
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
    this.loading = true
    axios.get(`http://192.168.1.30:12306/queryBlog?page=1&size=5`).then(res => {
      console.log(res, 'res')
      this.blogList = res.data.data
      this.loading = false
    }).catch(() => {
      this.loading = false
    })
  },
  methods: {
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
    width: 1280px;
    margin: 0 auto;
    display: flex;
    .left {
      width: 350px;
      .box-card {
        width: 100%;
        .top {
          margin-bottom: 24px;
          text-align: center;
          .avatar {
            width: 104px;
            height: 104px;
            margin-bottom: 24px;
          }
          .name {
            margin-bottom: 4px;
            color: rgba(0,0,0,.85);
            font-weight: 500;
            font-size: 20px;
            line-height: 28px;
          }
        }
        .info {
          padding-left: 26px;
          display: flex;
          flex-wrap: wrap;
          div {
            width: 100%;
            margin-bottom: 8px;
          }
          .text {
            margin-left: 12px;
          }
        }
        .tag {
          .personTag {
            margin-bottom: 24px;
          }
          .el-tag + .el-tag {
            margin-left: 10px;
            margin-bottom: 10px;
          }
          .button-new-tag {
            /*margin-left: 10px;*/
            height: 32px;
            line-height: 30px;
            padding-top: 0;
            padding-bottom: 0;
          }
          .input-new-tag {
            width: 90px;
            margin-left: 10px;
            vertical-align: bottom;
          }
        }
      }
    }
    .right {
      width: 880px;
      margin-left: 24px;
      .box-card {
        width: 880px;
        .el-tabs__content {
          width: 880px;
        }
      }
    }
  }
</style>
