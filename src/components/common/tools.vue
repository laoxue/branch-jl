<template>
    <div class="tools">
        <div v-if="type === 'infos'">
            <h4>基本信息</h4>
            <ul>
                <li>
                    <b>您的姓名</b>
                    <input type="text" placeholder="请输入您的姓名" v-model="infos.name"/>
                </li>
                <li>
                    <b>出生年月</b>
                    <input type="month" v-model="infos.brithday"/>
                </li>
                <li>
                    <b>联系电话</b>
                    <input type="text" placeholder="联系电话" v-model="infos.phonenumber"/>
                </li>
                <li>
                    <b>联系邮箱</b>
                    <input type="text" placeholder="联系邮箱" v-model="infos.email"/>
                </li>
                <li>
                    <b>工作年限</b>
                    <input type="number" placeholder="工作年限" v-model="infos.working"/>
                </li>
                <li>
                    <b>照片设置</b>
                    <input type="file"/>
                </li>
            </ul>
        </div>
        <div v-else-if="type === 'jiaoyu'">
            <h4>教育背景</h4>
            <ul>
                <li>
                    <b>学校名称</b>
                    <input type="text" placeholder="请输入您的姓名" v-model="infos.name"/>
                </li>
                <li>
                    <b>所学专业</b>
                    <input type="text" placeholder="所学专业" v-model="infos.phonenumber"/>
                </li>
                
                <li>
                    <b>就读时间</b>
                    <input type="month" v-model="infos.brithday"/>
                    
                </li>
                <li>
                    <b>&nbsp;&nbsp;&nbsp;&nbsp;</b>
                    <input type="month" v-model="infos.brithday"/>
                </li>
                <li>
                    <b>学历</b>
                    <div style="display:inline-block;position:relative">
                        <input type="text" readonly="readonly" autocomplete="off" placeholder="选择学历">
                        <span class="el-input__suffix"></span>
                    </div>
                    <!-- <select>
                        <option value="0">不填</option>
                        <option value="1">初中</option>
                        <option value="2">高中</option>
                        <option value="3">中专</option>
                        <option value="4">大专</option>
                        <option value="5">本科</option>
                        <option value="6">学士</option>
                        <option value="6">硕士</option>
                        <option value="6">博士</option>
                        <option value="6">MBA</option>
                    </select> -->
                </li>
                <li>
                    <b>内容</b>
                    <div style="display:inline-block;position:relative">
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </li>
            </ul>
        </div>
        <div v-else-if="type === 'work'">
            333333
        </div>
        <div v-else-if="type === 'jineng'">
            444444
        </div>
        <div v-else-if="type === 'zhengshu'">
            555555
        </div>
        <div v-else>
            666666
        </div>
    </div>
</template>
<script>

export default {
    props: ['type'],
    data() {
        return {
            infos: {
                name: '全民简历'
            }
        }
    },
    mounted() {
        console.log(this.type)
    }
}
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
.tools {
    float: right;
    text-align: left;
    width: 350px;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgb(0 0 0 / 6%);
    position: relative;
    border-radius: 6px;
    background-color: #fff;
    padding: 5px 20px;
    min-height: 500px;
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
                -webkit-transition: all .3s;
                transition: all .3s;
                pointer-events: none;
            }

        }
    }
    
}
</style>
