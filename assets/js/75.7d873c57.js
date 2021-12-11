(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{418:function(t,e,s){"use strict";s.r(e);var a=s(21),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、图床选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、图床选择"}},[t._v("#")]),t._v(" 一、图床选择")]),t._v(" "),s("p",[t._v("常见图床如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("图床")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("不足")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("Github")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("国内访问速度受限")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("Gitee")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("仓库及外链访问大小有限制")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("七牛云")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("需要备案域名")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("阿里云OSS")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("计量收费")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("SM.MS")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("怕不稳定")])])])]),t._v(" "),s("p",[t._v("综合个人需求考量，前期图片总量不多的情况下使用 Gitee 仓库存储，如有较大图片或后期图片总量过大时会考虑阿里云OSS付费存储。")]),t._v(" "),s("h2",{attrs:{id:"二、gitee"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、gitee"}},[t._v("#")]),t._v(" 二、Gitee")]),t._v(" "),s("h3",{attrs:{id:"创建仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建仓库"}},[t._v("#")]),t._v(" 创建仓库")]),t._v(" "),s("p",[t._v("首先在 Gitee 中新建一个仓库，选择 "),s("code",[t._v("开源")]),t._v(" 并添加 "),s("code",[t._v("README.md")]),t._v(" 文件。")]),t._v(" "),s("h3",{attrs:{id:"获取密钥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取密钥"}},[t._v("#")]),t._v(" 获取密钥")]),t._v(" "),s("p",[t._v("右上角用户头像 - 设置 - 私人令牌 - 生成新令牌（注意保存好 "),s("code",[t._v("token")]),t._v(" ）：\n"),s("img",{attrs:{src:"https://gitee.com/einsier/pics-bed/raw/master/pics/20210519075755.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"三、阿里云oss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、阿里云oss"}},[t._v("#")]),t._v(" 三、阿里云OSS")]),t._v(" "),s("blockquote",[s("p",[t._v("阿里云对象存储服务（Object Storage Service，简称OSS），是阿里云对外提供的海量、安全、低成本、高可靠的云存储服务。")])]),t._v(" "),s("h3",{attrs:{id:"创建-bucket"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-bucket"}},[t._v("#")]),t._v(" 创建 Bucket")]),t._v(" "),s("p",[t._v("阿里云控制台 - 对象存储OSS（先开通服务） - Bucket列表 - 创建Bucket（主要修改权限为 "),s("code",[t._v("公共读")]),t._v("）：\n"),s("img",{attrs:{src:"https://gitee.com/einsier/pics-bed/raw/master/pics/%E2%80%8E2021%E2%80%8E0%E2%80%8E5%E2%80%8E18%E2%80%8E%E2%80%8F144415.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"获取密钥-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取密钥-2"}},[t._v("#")]),t._v(" 获取密钥")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("右上角用户头像 - AccessKey管理：\n"),s("img",{attrs:{src:"https://gitee.com/einsier/pics-bed/raw/master/pics/%E2%80%8E2021%E2%80%8E05%E2%80%8E%E2%80%8E18%E2%80%8E%E2%80%8F145914.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("选择创建子用户（勾选 "),s("code",[t._v("编程访问")]),t._v("）：\n"),s("img",{attrs:{src:"https://gitee.com/einsier/pics-bed/raw/master/pics/2021%E2%80%8E0%E2%80%8E5%E2%80%8E%E2%80%8E18%E2%80%8E150206.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("添加权限（选择OSS的所有权限）：\n"),s("img",{attrs:{src:"https://gitee.com/einsier/pics-bed/raw/master/pics/2021%E2%80%8E05%E2%80%8E%E2%80%8E18%E2%80%8E150531.png",alt:""}})])])]),t._v(" "),s("blockquote",[s("p",[t._v("生成的 "),s("code",[t._v("AccessKey ID")]),t._v(" 和 "),s("code",[t._v("AccessKey Secret")]),t._v(" 只会显示一次，记得及时保存")])]),t._v(" "),s("h3",{attrs:{id:"防盗链设置-可选"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防盗链设置-可选"}},[t._v("#")]),t._v(" 防盗链设置（可选）")]),t._v(" "),s("p",[t._v("由于OSS采用计量计费方式，若发现流量数据异常，可进行防盗链设置 ，具体设置请参考"),s("a",{attrs:{href:"https://help.aliyun.com/document_detail/31869.html?spm=5176.8466032.referer.1.5dde1450boOJnF",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"四、picgo-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、picgo-使用"}},[t._v("#")]),t._v(" 四、PicGo 使用")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/einsier/pics-bed/raw/master/pics/20210519082731.png",alt:""}})]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/Molunerfinn/PicGo/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("PicGo "),s("OutboundLink")],1),t._v("是一个简单好用的图床工具，支持快速上传图片并生成相应格式的图片 URL 地址。")])]),t._v(" "),s("h3",{attrs:{id:"配置-gitee"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-gitee"}},[t._v("#")]),t._v(" 配置 Gitee")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("PicGo 默认图床中无 Gitee 选项，需先安装插件：\n"),s("img",{attrs:{src:"https://gitee.com/einsier/pics-bed/raw/master/pics/20210519075908.png",alt:""}})])]),t._v(" "),s("li",[s("p",[t._v("配置参数：\n"),s("img",{attrs:{src:"https://gitee.com/einsier/pics-bed/raw/master/pics/20210519081123.png",alt:""}})])])]),t._v(" "),s("h3",{attrs:{id:"配置阿里云oss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置阿里云oss"}},[t._v("#")]),t._v(" 配置阿里云OSS")]),t._v(" "),s("p",[t._v("按照输入框提示进行配置即可。")])])}),[],!1,null,null,null);e.default=r.exports}}]);