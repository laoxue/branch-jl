<template>
  <div class="template">
    <div class="template_all">
      <!-- 头部信息 -->
      <div class="basicInfo" @click="edit('infos')">
        <dl class="basic_info">
          <dt id="myname">{{data.name}}</dt>
          <dd id="yixiang" style="font-size: 14px; line-height: 16px">
            <span>求职岗位:行政专员</span>
          </dd>
          <dd style="font-size: 13px; line-height: 15px">
            <span v-if="data.showAge">{{birToage(data.brithday)}}岁</span>
            <span v-else>{{data.brithday}}</span>
            <span>男</span>
            <span>上海</span>
            <span>{{data.working}}年经验</span>
          </dd>
          <dd style="font-size: 13px; line-height: 15px">
            <span>{{data.phonenumber}}</span>
            <span>{{data.email}}</span>
          </dd>
        </dl>
        <div class="photo_box" style="right: 50px">
          <img
            src="https://www.qmjianli.com/images/edit/man.png"
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
              <li class="time">2012-09 ~ 2016-07</li>
              <li class="name">
                <b>全民简历师范大学</b>
              </li>
              <li>工商管理(<b>本科</b>)</li>
            </ul>
            <div
              class="ql-editor"
              style="font-size: 13px; margin-top: 6px; line-height: 1.9"
            >
              <p><strong>专业成绩：</strong> GPA 3.66/4 （专业前5%）</p>
              <p>
                <strong>主修课程：</strong>
                基础会计学、货币银行学、统计学、经济法概论、财务会计学、管理学原理、组织行为学、市场营销学、国际贸易理论、国际贸易实务、人力资源开发与管理、财务管理学、企业经营战略概论、质量管理学、西方经济学等等。
              </p>
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
            <div class="content_list" style="margin-top: 14px">
              <ul class="list_top">
                <li class="time">2012-09 ~ 至今</li>
                <li class="name">
                  <b>全民简历科技有限公司</b>
                </li>
                <li>行政专员</li>
              </ul>
              <div
                class="ql-editor"
                style="font-size: 13px; margin-top: 6px; line-height: 1.9"
              >
                <ul>
                  <li>
                    拥负责本部的行政人事管理和日常事务，协助总监搞好各部门之间的综合协调，落实公司规章制度，沟通内外联系，保证上情下达和下情上报，负责对会议文件决定的事项进行催办、查办和落实，负责全公司组织系统研讨和修订。
                  </li>
                  <li>编制公司人事管理制度，规避各项人事风险。</li>
                </ul>
              </div>
            </div>

            <div class="content_list" style="margin-top: 14px">
              <ul class="list_top">
                <li class="time">2016-10 ~ 2018-08</li>
                <li class="name">
                  <b>全民简历科技有限公司</b>
                </li>
                <li>实习生</li>
              </ul>
              <div
                class="ql-editor"
                style="font-size: 13px; margin-top: 6px; line-height: 1.9"
              >
                <ul>
                  <li>负责中心简单财务管理，资产管控；</li>
                  <li>
                    负责公司总部的来访客户接待工作，负责引导和介绍公司的分布情况；。
                  </li>
                  <li>
                    负责中心的行政事务，公司班车管理、负责建立员工归属感及前台管理；
                  </li>
                  <li>负责招聘工作，确保人才梯队发展和人才储备及培养。</li>
                  <li>
                    督导公司各项行政、人事制度、员工福利、员工生日会以及公司各种宴会活动的执行。
                  </li>
                  <li>
                    负责招聘工作，制定公司的人力资源发展计划，确保人才梯队发展和人才储备及培养。
                  </li>
                </ul>
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
            >
              <p style="text-align: left">
                <strong>语言能力：</strong>
                大学英语6级证书，荣获全国大学生英语竞赛一等奖，能够熟练的进行交流、读写。
              </p>
              <p style="text-align: left">
                <strong>计算机：</strong>
                计算机二级证书，熟练操作windows平台上的各类应用软件，如Word、Excel。
              </p>
              <p style="text-align: left">
                <strong>团队能力：</strong>
                具有丰富的团队组建与扩充经验和项目管理与协调经验，能够独挡一面。
              </p>
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
            >
              <ul>
                <li>
                  英语四级，听说读写能力良好，能流利的用英语进行日常交流，能快速浏览英文文档和书籍；
                </li>
                <li>
                  通过全国计算机二级考试，熟练运用office等常用的办公软件。
                </li>
              </ul>
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
            >
              <p>工作积极认真，细心负责，熟练运用办公自动化软件，善于在工作中提出问题、发现问题、解决问题，有较强的分析能力；勤奋好学，踏实肯干，动手能力强，认真负责，有很强的社会责任感；坚毅不拔，吃苦耐劳，喜欢迎接新挑战。</p>
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
          console.log(date)
          const nowDate = new Date();
          const year = + nowDate.getFullYear();
          const birthYear = + date.split('-')[0];
          const age = year - birthYear;
          return age;
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
