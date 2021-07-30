<template>
  <div class="template">
    <div class="template_all">
      <!-- 头部信息 -->
      <div class="basicInfo" @click="edit('infos')">
        <dl class="basic_info">
          <dt id="myname">{{data.basic.name}}</dt>
          <dd id="yixiang" style="font-size: 14px; line-height: 16px">
            <span>求职岗位:{{data.basic.job}}</span>
          </dd>
          <dd style="font-size: 13px; line-height: 15px">
            <span v-if="data.basic.showAge">{{birToage(data.basic.brithday)}}岁</span>
            <span v-else>{{birToDate(data.basic.brithday)}}</span>
            <span>{{data.basic.sex}}</span>
            <span>{{data.basic.location}}</span>
            <span>{{data.basic.working}}年经验</span>
          </dd>
          <dd style="font-size: 13px; line-height: 15px">
            <span>{{data.basic.phonenumber}}</span>
            <span>{{data.basic.email}}</span>
          </dd>
        </dl>
        <div class="photo_box" style="right: 50px">
          <img
            :src="data.basic.avatar"
            width="100%"
          />
        </div>
      </div>
      <!-- 下面部分 -->
      <div class="resume_content_all" style="margin: 0 30px 0">
        <div id="jiaoyu" class="resume_content" style="margin-top: 26px" @click="edit('jiaoyu')">
          <div
            class="module_tit"
            :style="`font-size: 16px; color: ${color}; border-color: ${color}`"
          >
            <span>教育背景</span>
          </div>
          <div class="content_list" style="margin-top: 14px">
            <ul class="list_top">
              <li class="time">{{data.edu.startSchool}} ~ {{data.edu.endSchool}}</li>
              <li class="name">
                <b>{{data.edu.school}}</b>
              </li>
              <li>{{data.edu.major}}(<b>{{data.edu.xl}}</b>)</li>
            </ul>
            <div
              class="ql-editor"
              style="font-size: 13px; margin-top: 6px; line-height: 1.9"
              v-html="data.edu.content"
            >
            </div>
          </div>
        </div>
        <div id="work" class="resume_content" style="margin-top: 26px" @click="edit('work')">
          <div class="resume_content_main">
            <div
              class="module_tit"
              :style="`font-size: 16px; color: ${color}; border-color: ${color}`"
            >
              <span>工作经验</span>
            </div>
            <div class="content_list" style="margin-top: 14px" v-for="(item,index) in data.work" :key="index">
              <ul class="list_top">
                <li class="time">{{item.startWork}} ~ {{item.endWork}}</li>
                <li class="name">
                  <b>{{item.componey}}</b>
                </li>
                <li>{{item.position}}</li>
              </ul>
              <div
                class="ql-editor"
                style="font-size: 13px; margin-top: 6px; line-height: 1.9"
                v-html="item.content"
              >
              </div>
            </div>

            <div class="content_list" style="margin-top: 14px"></div>
          </div>
        </div>
        <div id="jineng" @click="edit('jineng')">
          <div class="resume_content">
            <div
              class="module_tit"
              :style="`font-size: 16px; color: ${color}; border-color: ${color}`"
            >
              <span>技能特长</span>
            </div>
            <div
              class="ql-editor"
              style="font-size: 13px; margin-top: 14px; line-height: 1.9"
              v-html="data.jineng.content"
            >
            </div>
          </div>
        </div>
        <div id="zhengshu" style="margin-top: 26px" class="resume_content" @click="edit('zhengshu')">
          <div
            class="module_tit"
            :style="`font-size: 16px; color: ${color}; border-color: ${color}`"
          >
            <span>荣誉证书</span>
          </div>
          <div class="content_list">
            <div
              class="ql-editor"
              style="font-size: 13px; margin-top: 14px; line-height: 1.9"
              v-html="data.rongyu.content"
            >
            </div>
          </div>
        </div>
        <div id="ziwopingjia" class="resume_content" style="margin-top:15px" @click="edit('pingjia')">
            <div
            class="module_tit"
            :style="`font-size: 16px; color: ${color}; border-color: ${color}`"
          >
            <span>自我评价</span>
          </div>
          <div
              class="ql-editor"
              style="font-size: 13px; margin-top: 14px; line-height: 1.9;text-align:left"
              v-html="data.zwpj.content"
            >
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:['data','color'],
    methods: {
        edit(type) {
            this.$emit('changemodel',type)
        },
        birToage(date) {
          const myDate = new Date(date);
          const nowDate = new Date();
          const NowYear = + nowDate.getFullYear();
          const myYear = + myDate.getFullYear();
          const age = NowYear - myYear;
          return age;
        },
        birToDate(date) {
          const d = new Date(date);
          const datetime=d.getFullYear() + ' - ' + ((d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1));
          return datetime;
        }
    }
};
</script>
<style lang="less" scoped>
dd,
div,
dl,
dt,
input,
li,
p,
textarea,
ul {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
ul,
p {
  margin: 0;
  padding: 0;
  li {
    list-style: none;
  }
}
.template {
float: left;
  width: 820px;
  box-shadow: 0 0 10px rgb(0 0 0 / 16%);
  position: relative;
  padding-bottom: 2px;
  min-height: 1150px;
  color: #333;
  background-color: #fff;
  &_all {
    box-sizing: border-box;
    text-size-adjust: none;
    font-family: Microsoft YaHei, SimSun, PingFang SC, PingFang SC Regular;
    .basicInfo {
      position: relative;
      min-height: 150px;
      text-align: left;
      padding: 29px 30px 0;
      .basic_info {
        padding-right: 130px;
        min-width: 300px;
        dt {
          font-size: 22px;
          color: #222;
          letter-spacing: 2px;
          padding-bottom: 2px;
        }
        dd {
          margin: 0;
          span {
            margin-top: 9px;
            padding: 0 10px;
            display: inline-block;
            border-right: 1px solid #ddd;
            white-space: nowrap;
            &:first-child {
              padding-left: 0;
            }
            &:last-child {
              border-right: 0px solid #ddd;
            }
          }
        }
      }
      .photo_box {
        position: absolute;
        right: 50px;
        top: 25px;
        z-index: 3;
        width: 106px;
        background-color: #f9f9f9;
        overflow: hidden;
        background-repeat: no-repeat;
        background-size: auto 100%;
        background-position: 50%;
      }
    }
    .resume_content_all {
      padding-top: 2px;
      position: relative;
      .resume_content {
        position: relative;
        top: -10px;
        font-size: 14px;
        .module_tit {
          text-align: left;
          line-height: 20px;
          height: 25px;
          font-size: 15px;
          font-weight: 400;
          color: #333;
          font-size: 18px;
          overflow: hidden;
          border-bottom: 1px solid #666;
          white-space: nowrap;
          span {
            font-weight: 700;
          }
        }
        .content_list {
          .list_top {
            box-sizing: border-box;
            height: 21px;
            li {
              margin-right: 30px;
              float: left;
              line-height: 1.6;
              text-align: left;
              font-weight: 700;
              &:first-child {
                text-align: left;
                float: left;
                margin-left: 0;
                min-width: 160px;
              }
              &:last-child {
                min-width: inherit;
                margin-right: 0;
                float: right;
              }
            }
            .name {
              min-width: 260px;
              text-align: center;
              margin-right: 0;
            }
          }
          .ql-editor {
            text-align: left;
            ul {
              li {
                padding-left: 1.5em;
                &::before {
                  content: "\2022" !important;
                  min-width: 20px;
                  margin-left: -20px;
                  margin-right: 0;
                  text-align: center;
                  font-weight: 700;
                  color: #666;
                  display: inline-block;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
