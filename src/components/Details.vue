<template>
  <div class="details">
      <Header/>
      <Nav :text="navlist"/>
      <div class="template_container">
        <model @changemodel="changemodel" :data="data" :color="colors" id="sprintReport"/>
        <color @changeColor="changeColor" @exportjl="exportPDF"/>
        <tools :type="type" :data="data" @changAvatar="changAvatar" @changeContent="changeContent" @removeWork="removeWork" @addWork="addWork"/>
      </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Nav from '@/components/common/textNav'
import model from './template/100'
import tools from './common/tools'
import color from './common/color'
import '../assets/css/reset.css'
import html2canvas from "html2canvas";
import avatar from './../assets/image/avatar.png'
import jspdf from 'jspdf';
export default {
  name: 'Details',
  props: {
    msg: String
  },
  data() {
      return {
          type:'infos',
          colors: 'rgb(21, 117, 191)',
          data: {
            basic: {
              name: 'Bilibili小哥',
              brithday: '1995-04',
              phonenumber: 'xxxxxxxxxxx',
              email: 'xxxxx@email.com',
              working: '5',
              showAge: true,
              job: '软件开发工程师',
              location: '上海',
              sex: '男',
              avatar: avatar
            },
            edu: {
              school: 'bilibili大学',
              major: '划水运营',
              startSchool: '2012-09',
              endSchool: '2016-07',
              xl: '本科',
              content: '<p><strong>专业成绩:</strong>  GPA 3.66/4 （专业前5%）</p><p data-v-19549cec=""><strong data-v-19549cec="">主修课程：</strong> 基础会计学、货币银行学、统计学、经济法概论、财务会计学、管理学原理、组织行为学、市场营销学、国际贸易理论、国际贸易实务、人力资源开发与管理、财务管理学、企业经营战略概论、质量管理学、西方经济学等等。 </p>'
            },
            work: [
              {
                componey: '生活不能自理科技有限公司',
                position: '行政专员',
                startWork: '2012-09',
                endWork: '2021-09',
                content: '<ul data-v-19549cec=""><li data-v-19549cec=""> 拥负责本部的行政人事管理和日常事务，协助总监搞好各部门之间的综合协调，落实公司规章制度，沟通内外联系，保证上情下达和下情上报，负责对会议文件决定的事项进行催办、查办和落实，负责全公司组织系统研讨和修订。 </li><li data-v-19549cec="">编制公司人事管理制度，规避各项人事风险。</li></ul>'
              },
              {
                componey: '划水全靠科技股份有限公司',
                position: '实习生',
                startWork: '2012-09',
                endWork: '2021-09',
                content: '<ul data-v-19549cec=""><li data-v-19549cec="">负责中心简单财务管理，资产管控；</li><li data-v-19549cec=""> 负责公司总部的来访客户接待工作，负责引导和介绍公司的分布情况；。 </li><li data-v-19549cec=""> 负责中心的行政事务，公司班车管理、负责建立员工归属感及前台管理； </li><li data-v-19549cec="">负责招聘工作，确保人才梯队发展和人才储备及培养。</li><li data-v-19549cec=""> 督导公司各项行政、人事制度、员工福利、员工生日会以及公司各种宴会活动的执行。 </li><li data-v-19549cec=""> 负责招聘工作，制定公司的人力资源发展计划，确保人才梯队发展和人才储备及培养。 </li></ul>'
              }
            ],
            jineng: {
               content: '<p data-v-19549cec="" style="text-align: left;"><strong data-v-19549cec="">语言能力：</strong> 大学英语6级证书，荣获全国大学生英语竞赛一等奖，能够熟练的进行交流、读写。 </p><p data-v-19549cec="" style="text-align: left;"><strong data-v-19549cec="">计算机：</strong> 计算机二级证书，熟练操作windows平台上的各类应用软件，如Word、Excel。 </p><p data-v-19549cec="" style="text-align: left;"><strong data-v-19549cec="">团队能力：</strong> 具有丰富的团队组建与扩充经验和项目管理与协调经验，能够独挡一面。 </p>'
            },
            rongyu: {
               content: '<ul data-v-19549cec=""><li data-v-19549cec=""> 英语四级，听说读写能力良好，能流利的用英语进行日常交流，能快速浏览英文文档和书籍； </li><li data-v-19549cec=""> 通过全国计算机二级考试，熟练运用office等常用的办公软件。 </li></ul>'
            },
            zwpj: {
               content: '<p>工作积极认真，细心负责，熟练运用办公自动化软件，善于在工作中提出问题、发现问题、解决问题，有较强的分析能力；勤奋好学，踏实肯干，动手能力强，认真负责，有很强的社会责任感；坚毅不拔，吃苦耐劳，喜欢迎接新挑战。</p>'
            }
          },
          navlist: [
              {
                  name: '首页',
                  route: '/',
              },
              {
                  name: '模板中心',
                  route: '/detail',
              }
          ]
      }
  },
  components: {
    Header,
    Nav,
    color,
    // bigTem,
    model,
    tools
  },
  methods: {
    // 切换类型
    changemodel(type) {
      this.type = type;
    },
    // 切换颜色
    changeColor(color) {
      this.colors = color;
    },
    // 切换头像
    changAvatar(file) {
      this.data.basic.avatar = file
    },
    // 切换内容
    changeContent(object) {
      this.data.edu.content = object.content.html
      // if(type === 'edu') {
        
      // } else {
      //   // this.data.work.content = object.content.html
      // }
      
    },
    exportPDF() {
      
      this.$confirm("请选择导出类型?", "提示", {
        confirmButtonText: "导出PDF",
        cancelButtonText: "导出Word",
        type: "warning",
        center: true,
      })
        .then(() => {
              var oD = document.getElementById('sprintReport');
              let eleW = oD.offsetWidth;
              let eleH = oD.offsetHeight;
              var canvas = document.createElement("canvas")
              canvas.width = eleW * 2
              canvas.height = eleH * 2
              var context = canvas.getContext("2d")
              context.scale(2, 2)
              html2canvas(oD, {
                    dpi:1000,
                    useCORS:true//允许canvas画布内可以跨域请求外部链接图片, 允许跨域请求。
              }).then(canvas=> {
                
                var contentWidth = canvas.width;
                var contentHeight = canvas.height;

                var pageData = canvas.toDataURL("image/jpeg", 1.0);

                var pageHeight = contentWidth / 592.28 * 841.89;
                var leftHeight = contentHeight;
                var position = 0;

                const doc = new jspdf('', 'pt', 'a4');
                doc.addImage(pageData, 'PNG', 0, 0, eleW/1.45, eleH/1.45);
                

                if(leftHeight < pageHeight) {
                    doc.addImage(pageData, 'PNG', 0, 0, eleW/1.45, eleH/1.45);
                } else {
                    while(leftHeight > 0) {
                        //arg3-->距离左边距;arg4-->距离上边距;arg5-->宽度;arg6-->高度
                        doc.addImage(pageData, 'PNG', 0, position, eleW/1.45, eleH/1.45);
                        leftHeight -= pageHeight;
                        position -= 841.89;
                        //避免添加空白页
                        if(leftHeight > 0) {
                            doc.addPage();
                        }
                    }
                }
                doc.save(this.data.basic.job + '-' + this.data.basic.name + '.pdf');
              })

              
        })
        .catch(() => {
          // alert('导出Word')
        });
    },
    removeWork(index) {
      this.data.work.splice(index,1)
    },
    addWork() {
      this.data.work.push({
        componey: '自媒体科技有限公司',
        position: '行政专员',
        startWork: '2012-09',
        endWork: '2021-09',
        content: '<ul data-v-19549cec=""><li data-v-19549cec=""> 拥负责本部的行政人事管理和日常事务，协助总监搞好各部门之间的综合协调，落实公司规章制度，沟通内外联系，保证上情下达和下情上报，负责对会议文件决定的事项进行催办、查办和落实，负责全公司组织系统研讨和修订。 </li><li data-v-19549cec="">编制公司人事管理制度，规避各项人事风险。</li></ul>'
      },)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.details {
    .template_container {
      width: 1215px;
      margin: 0 auto;
      position: absolute;
      min-height: 50px;
      // display: flex;
      // justify-content: space-between;
      left: 50%;
      transform: translateX(-50%);
      top: 124px;
    }
}
</style>
