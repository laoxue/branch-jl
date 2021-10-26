<template>
  <div class="tools">
    <div v-if="type === 'infos'">
      <h4 style="padding-bottom: 10px;">基本信息</h4>
      <el-form v-model="data.basic" label-width="80px">
        <el-form-item label="您的姓名">
          <el-input
            v-model="data.basic.name"
            placeholder="请输入您的姓名"
            size="small"
          ></el-input>
        </el-form-item>
        <el-form-item label="求职岗位">
          <el-input
            v-model="data.basic.job"
            placeholder="请输入求职岗位"
            size="small"
          ></el-input>
        </el-form-item>
        <el-form-item label="求职地点">
          <el-input
            v-model="data.basic.location"
            placeholder="请输入求职岗位"
            size="small"
          ></el-input>
        </el-form-item>
        <el-form-item label="出生年月">
          <el-date-picker
            size="small"
            type="month"
            placeholder="选择日期"
            v-model="data.basic.brithday"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio v-model="data.basic.sex" label="男" border>男</el-radio>
          <el-radio v-model="data.basic.sex" label="女" border>女</el-radio>
        </el-form-item>
        <el-form-item label="显示年龄">
          <el-switch
            size="small"
            v-model="data.basic.showAge"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input
            size="small"
            v-model="data.basic.phonenumber"
            placeholder="请输入您的姓名"
          ></el-input>
        </el-form-item>
        <el-form-item label="联系邮箱">
          <el-input
            size="small"
            v-model="data.basic.email"
            placeholder="请输入您的姓名"
          ></el-input>
        </el-form-item>
        <el-form-item label="工作年限">
          <el-input-number
            size="small"
            v-model="data.basic.working"
            controls-position="right"
            :min="1"
            :max="10"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="照片设置">
          <el-upload
            class="avatar-uploader"
            action=""
            :on-change="getfile"
            :show-file-list="false"
            
            :before-upload="beforeAvatarUpload"
          >
            <img
              v-if="data.basic.avatar"
              :src="data.basic.avatar"
              class="avatar"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
    </div>
    <div v-else-if="type === 'jiaoyu'">
      <h4 style="padding-bottom: 10px;">教育背景</h4>
      <el-form v-model="data.edu" label-width="80px">
        <el-form-item label="学校名称">
          <el-input
            v-model="data.edu.school"
            placeholder="请输入学校名称"
            size="small"
          ></el-input>
        </el-form-item>
        <el-form-item label="所学专业">
          <el-input
            v-model="data.edu.major"
            placeholder="请输入所学专业"
            size="small"
          ></el-input>
        </el-form-item>
        <el-form-item label="就读时间">
          <el-date-picker
            size="small"
            type="month"
            placeholder="选择日期"
            v-model="data.edu.startSchool"
            style="width: 100%"
          ></el-date-picker>
          <el-date-picker
            size="small"
            type="month"
            placeholder="选择日期"
            v-model="data.edu.endSchool"
            style="width: 100%"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="学历">
          <el-select v-model="data.edu.xl" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="内容">
           <quill-editor ref="text" 
                  v-model="data.edu.content"
                  class="myQuillEditor"
                  :options="editorOption"
                  />
        </el-form-item>
      </el-form>
    </div>
    <div v-else-if="type === 'work'">
      <h4 style="padding-bottom: 10px;">工作经验</h4>
      <el-collapse>
           <el-collapse-item :title="`第${index+1})段`" :name="index" v-for="(item, index) in data.work"
                    :key="index">
                <el-form
                    v-model="data.work"
                    label-width="80px"
                >
                    <el-form-item label="公司名称">
                    <el-input
                        v-model="item.componey"
                        placeholder="请输入公司名称"
                        size="small"
                    ></el-input>
                    </el-form-item>
                    <el-form-item label="任职职位">
                    <el-input
                        v-model="item.position"
                        placeholder="请输入任职职位"
                        size="small"
                    ></el-input>
                    </el-form-item>
                    <el-form-item label="工作时间">
                    <el-date-picker
                        size="small"
                        type="month"
                        placeholder="选择日期"
                        v-model="item.startWork"
                        style="width: 100%"
                    ></el-date-picker>
                    <el-date-picker
                        size="small"
                        type="month"
                        placeholder="选择日期"
                        v-model="item.endWork"
                        style="width: 100%"
                    ></el-date-picker>
                    </el-form-item>
                    <el-form-item label="内容">
                    <quill-editor ref="text" 
                            v-model="data.work[index].content"
                            class="myQuillEditor"
                            :options="editorOption"
                            />
                    </el-form-item>
                    <p style="display:flex;justify-content:space-between;line-height:37px;" v-if="index !== 0"><el-button type="danger" icon="el-icon-delete" size="small" style="height:30px" circle @click="removeWork(index)"></el-button></p>
                </el-form>
           </el-collapse-item>
      </el-collapse>
      <div><el-button style="position: relative;
    margin-left: 50%;
    transform: translateX(-50%);top: 20px;" @click="addWork" type="primary" plain>添加工作经历</el-button></div>
    </div>
    <div v-else-if="type === 'jineng'">
      <h4 style="padding-bottom: 10px;">技能特长</h4>
       <el-form v-model="data.jineng" label-width="40px">
           <el-form-item label="内容">
           <quill-editor ref="text" 
                  v-model="data.jineng.content"
                  class="myQuillEditor"
                  :options="editorOption"
                  />
        </el-form-item>
       </el-form>
    </div>
    <div v-else-if="type === 'zhengshu'">
      <h4>荣誉证书</h4>
      <el-form v-model="data.rongyu" label-width="40px">
           <el-form-item label="内容">
           <quill-editor ref="text" 
                  v-model="data.rongyu.content"
                  class="myQuillEditor"
                  :options="editorOption"
                  />
        </el-form-item>
       </el-form>
    </div>
    <div v-else>
      <h4 style="padding-bottom: 10px;">自我评价</h4>
      <el-form v-model="data.edu" label-width="40px">
           <el-form-item label="内容">
           <quill-editor ref="text" 
                  v-model="data.zwpj.content"
                  class="myQuillEditor"
                  :options="editorOption"
                  />
        </el-form-item>
       </el-form>
    </div>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  props: ["type", "data"],
  components: {
    quillEditor,
  },
  data() {
    return {
      content: "",
      options: [
        {
          value: "大专",
          label: "大专",
        },
        {
          value: "本科",
          label: "本科",
        },
        {
          value: "硕士",
          label: "硕士",
        },
        {
          value: "博士",
          label: "博士",
        },
      ],
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
          ],
        },
      },
    };
  },
  mounted() {
  },
  methods: {
    getfile(file) {
        this.getBase64(file.raw).then(res => {
          // console.log(res)
          this.$emit("changAvatar", res);
        })
    },
    // 更换头像
    // handleAvatarSuccess(res, file) {
    //   this.$emit("changAvatar", file);
    // },
    getBase64(file){
      return new Promise(function(resolve,reject){
        let reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function(){
          imgResult = reader.result;
        }
        reader.onerror = function(err) {
          reject(err)
        }
        reader.onloadend = function() {
          resolve(imgResult)
        }
      })
    },
    exportPDF () {
      this.$emit('exportPDF')
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }     
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    removeWork(index) {
        this.$emit('removeWork',index)
    },
    addWork() {
        this.$emit('addWork')
    }
    // 更换内容
  },
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
.anniu-btn {
  display: flex;
  justify-content: center;
}
.tools {
  float: right;
  text-align: left;
  width: 350px;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgb(0 0 0 / 6%);
  position: relative;
  border-radius: 6px;
  background-color: #fff;
  padding: 20px 20px 50px 20px;
//   min-height: 500px;
  ul {
    li {
      margin-top: 10px;
      b {
        display: inline-block;
        vertical-align: top;
        min-width: 65px;
        line-height: 32px;
        text-align: right;
        padding-right: 10px;
        color: #333;
        font-size: 14px;
        font-weight: 400;
      }
      input {
        border: none;
        width: 180px;
        background-color: #f3f4f6;
        border: 1px solid #f3f4f6;
        border-radius: 3px;
        height: 32px;
        line-height: 32px;
        font-size: 13px;
        color: #222;
        padding: 0 15px;
        &:focus {
          outline: 1px solid rgb(21, 117, 191);
        }
      }

      .el-input__suffix {
        position: absolute;
        height: 100%;
        right: 5px;
        top: 0;
        text-align: center;
        color: #c0c4cc;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        pointer-events: none;
      }
    }
  }
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
