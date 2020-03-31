## vue-admin-template

一个基于 vue 全家桶的后台管理系统脚手架。此项目并非管理系统的全套模板库或者UI，仅仅是一套初始化项目的脚手架，或者说是 vue 开发管理系统的一套规范。

### 1.1 项目运行

先 git clone 项目到本地：

```
yarn install
npm run dev
```

### 1.2 项目发布
```
npm run build:staging // 测试环境
npm run build  // 生产环境
```

### 1.3 单元测试
```
npm run test:unit
```

### 1.4 代码检测
```
npm run lint
```

以上基本上是 vue-cli 相关的配置，具体见[配置详情](https://cli.vuejs.org/config/).

### 2. 目录结构

文件目录结构的主要特点是 model, router 和 service 下发至页面模块，方便后期维护及协同开发。

```
 .
 ├── mock                           mock 数据文件目录
 ├── public                         本地的静态文件目录
 ├── scripts                        脚本运行目录
 ├── src
 │   ├── assets                     本地资源努力
 │   ├── components                 公共全局组件存放文件
 │   │   ├── EzComponent            
 │   ├── config                      配置文件 - 可存放一些常量等
 │   ├── layouts                    layout 文件 - 存放页面的 layout
 │   │   └── index.vue              
 │   ├── locales                    语言包目录
 │   ├── pages                      存放所有页面
 │   │   ├── home                   某一个页面文件夹
 │   │   |    ├── index.vue         页面模板
 │   │   |    ├── model.js          页面数据管理
 │   │   |    ├── router.js         路由配置
 │   │   |    ├── service.js        api 请求
 │   │   |    ├── style.scss        样式
 │   ├── styles                     全局样式
 │   ├── utils
 │   │   ├── assist.js              自定义组件方法
 │   │   ├── index.js               一般工具方法
 │   │   ├── permission.js          全局路由权限控制
 │   │   └── request                封装网络请求
 │   ├── App.vue                    页面入口文件
 │   ├── main.js                    入口文件
 │   ├── model.js                   全局数据组装
 │   └── router.js                  全局路由配置组装
 ├── .env.development               设置development环境下，所要的全局属性（开发环境）
 ├── .env.staging                   设置staging环境下，所要的全局属性（测试环境）
 ├── .env.production                设置production环境下，所要的全局属性（生产环境）
 ├── CHANGELOG.md                   版本信息
 └── vue.config.js
```

### 3. 开发页面及组件

开发页面及组件的时候，我们可以使用命令创建。当然原则上也可以不这么做，但是你可能需要做很多重复性的工作。

#### 3.1 开发页面

当需要开发一个新页面的时候，只需要运行以下命令：
```
npm run page 页面(传入页面名称)
```

比如下面的例子则会自动在 pages 文件夹下面生成一个 login 页面的文件夹

```
npm run page login
```
打开 login 文件夹，我们发现里面有 5 个文件，并且每个文件里面都定义好了页面所需要的基础代码。

```
 │   │   |    ├── index.vue         页面模板
 │   │   |    ├── model.js          页面数据管理
 │   │   |    ├── router.js         路由配置
 │   │   |    ├── service.js        api 请求
 │   │   |    ├── style.scss        样式
```

有时候，我们可能需要生成某个子模块下面的页面，比如在 **用户管理模块** 下要生成一个 **角色管理页面**。我们依然可以使用命令：
```
npm run page user-management/role-management
```

#### 3.2 开发组件
开发组件的时候，我们同样可以使用相同的方式：
```
npm run component ez-table
```
使用上面的命令，则会在 components 文件夹下生产一个 EzTable 的组件文件夹。组件的命名会自动转为 Pascal。

EzTable 文件夹下包含两个文件，并且文件中初始化了你所需要的基础代码。
```
 │   │   |    ├── index.vue         页面模板
 │   │   |    ├── style.scss        样式
```

#### 3.3 注意点：

1. 生成页面和组件中，模板中外层 class 为 名称（login-page 或者 ez-table）
2. 页面中 style 标签默认带上 scoped，组件中不带 scoped（方便后期组件的提取）

### 4. mock 数据

有时候，前端把页面画好了，但是接口还没写好或者没发布，并且没有规范的接口管理平台时。这时候前端自己 mock 数据就非常重要了。

#### 4.1 文件路径 
mock 默认文件夹为 /mock，入口文件为 /mock/index.js
当然这个是允许修改的。

只需要修改 vue.config.js 中的 pluginOptions.mock.entry 字段即可。

#### 4.2 如何编写

mock 的编写使用的是 common.js 的模块化方案，原理是利用 webpacl-dev-server 的 apply 。

```
module.exports = {
  // mock
  'GET /mock/userInfo': (req, res) => {
    return res.json({
      code: 0,
      msg: '操作成功',
      datas: {
        name: 'admin'
      }
    })
  }
}
```

### 5. 代码规范

#### 5.1 一般规范
```
 .普通 JS 文件以小写字母命名，多个单词以小驼峰，例如 util.js、utilHelper.js
 .按模块划分文件，每个文件一般都以index命名的文件作为入口页面
 .文件头部、方法、属性必须要有注释
 .模块文件夹中，必需要有index文件，代表入口
 .当前页面的组件处于同级的文件夹下，新建页面则新开文件夹,例如：
   -home
    --index.vue
    --components
      -- List.vue
 .文件夹的命名，遵循 横线连接 (kebab-case) 命名法，组件文件夹命名 遵循 单词大写开头 (PascalCase)命名法
 .变量的命名遵循见名知义的原则
 .组件函数名以 on 开头
 .组件中尽量少使用ref，这会破坏组件的封装性
 .封装第三方UI库组件是，方法和属性命名需与第三方UI组件保持一致
 .封装其他组件时，供父组件使用的函数名已 on 开头
 .尽量使用async await处理异步，js尽量使用es6语法
 .class 命名尽量使用 BEM 规范，尽量避免行内样式
```

#### 5.2 vue 文件书写规范
**组件名**
组件名采用大驼峰命名，避免与 HTML 标签冲突，并且结构更加清晰。

```js
// 反例
export default {
    name: 'page-article-item'
}

// 正例
export default {
    name: 'PageArticleItem'
}
```

**组件文件**
组件的名字应该始终是大驼峰命名，一方面可与组件名一致，使项目更加清晰，另一方面这样的写法对编辑器引入也很友好。

```
// 反例
├── index.html
├── main.js
└── components
    ├── pageheader
    ├── pagearticle
    └── pageheader

// 正例
├── index.html
├── main.js
└── components
    ├── PageHeader
    ├── PageArticle
    └── PageHeader
```

**组件的使用**
组件在父组件中使用，始终使用连接线（-）。并且尽量使用单标签。

```html
// 反例
<childComponent></childComponent>

// 正例
<child-component />
```

**Prop**
定义 Prop 的时候应该始终以驼峰格式（camelCase）命名，在父组件赋值的时候使用连接线（-）。这里遵循每个语言的特性，因为在 HTML 标记中对大小写是不敏感的，使用连接线更加友好；而在 JavaScript 中更自然的是驼峰命名。

```html
// 反例
// Vue
props: {
    article-status: Boolean
}
// HTML
<article-item :articleStatus="true"></article-item>

// 正例
// Vue
props: {
    articleStatus: Boolean
}
// HTML
<article-item :article-status="true"></article-item>
```
Prop 的定义应该尽量详细的指定其类型、默认值和验证。

```js
// 反例
props: ['attrM', 'attrA', 'attrZ']

// 正例
props: {
    attrM: Number,
    attrA: {
        type: String,
        required: true
    },
    attrZ: {
        type: Object,
        // 数组/对象的默认值应该由一个工厂函数返回
        default: function () {
            return {
                msg: '成就你我'
            }
        }
    },
    attrE: {
        type: String,
        validator: function (v) {
            return !(['success', 'fail'].indexOf(v) === -1) 
        }
    }
}
```

**v-for**
在执行 v-for 遍历的时候，总是应该带上 key 值使更新 DOM 时渲染效率更高。

```html
// 反例
<ul>
    <li v-for="item in list">
        {{ item.title }}
    </li>
</ul>

// 正例
<ul>
    <li v-for="item in list" :key="item.id">
        {{ item.title }}
    </li>
</ul>
```
v-for 应该避免与 v-if 在同一个元素上使用，因为 v-for 的优先级比 v-if 更高，为了避免无效计算和渲染，应该尽量将 v-if 放到容器的父元素之上。

```html
// 反例
<ul>
    <li v-for="item in list" :key="item.id" v-if="showList">
        {{ item.title }}
    </li>
</ul>

// 正例
<ul v-if="showList">
    <li v-for="item in list" :key="item.id">
        {{ item.title }}
    </li>
</ul>
```

**v-if / v-else-if / v-else**
若同一组 v-if 逻辑控制中的元素逻辑相同，Vue 为了更高效的元素切换，会复用相同的部分，例如：value。为了避免复用带来的不合理效果，应该在同种元素上加上 key 做标识。

```html
// 反例
<div v-if="hasData">
    <span>{{ mazeyData }}</span>
</div>
<div v-else>
    <span>无数据</span>
</div>

// 正例
<div v-if="hasData" key="mazey-data">
    <span>{{ mazeyData }}</span>
</div>
<div v-else key="mazey-none">
    <span>无数据</span>
</div>
```

**指令缩写**
为了统一规范始终使用指令缩写，使用v-bind，v-on并没有什么不好，这里仅为了统一规范。

```html
<input :value="mazeyUser" @click="verifyUser">
```

**样式**
为了避免样式冲突，整个项目要么全都使用 scoped 特性，要么使用 BEM 约定。

```html
// 反例
<template>
    <button class="btn btn-sure">确认</button>
</template>
<style>
    .btn{
        border: 1px solid #F1F1F1;
    }
    .btn-sure{
        background-color: blue;
    }
</style>

// 正例
<!-- 使用 scoped 特性 -->
<template>
    <button class="btn btn-sure">确认</button>
</template>
<style scoped>
    .btn{
        border: 1px solid #F1F1F1;
    }
    .btn-sure{
        background-color: blue;
    }
</style>

<!-- 使用 BEM（Block Element Modifier） 特性 -->
<template>
    <button class="menu-btn menu-btn-sure">确认</button>
</template>
<style>
    .menu-btn{
        border: 1px solid #F1F1F1;
    }
    .menu-btn-sure{
        background-color: blue;
    }
</style>
```

**单文件组件的顶级元素顺序**
为了统一和便于阅读，应该按顺序放置。

```html
// 反例
<style>
/* CSS */
</style>
<script>
/* JavaScript */
</script>
<template>
<!-- HTML -->
</template>

// 正例
<template>
<!-- HTML -->
</template>
<script>
/* JavaScript */
</script>
<style>
/* CSS */
</style>
```

**组件属性顺序**
一定是按照下面例子的顺序来编写组件属性
```js
export default {
    name: '',
    components: {},
    mixins: [],
    props: {},
    data() {
        return {}
    },
    computed: {},
    watch: {},
    created() {},
    ...
    methods: {}
}
```

### 6. Git 相关

关于 Git 的版本管理及提交规范做了如下的定义

#### 6.1 git flow 规范管理版本

参考了git flow 的架构管理规范，尽量使用这套规范，但也不强求，但是有以下几个注意点需要遵守：

1. 开发必须新开分支，开发完了再合并到 dev 分支
2. 修改测试 bug 也需要新开分支，修改完了再合并到 dev 分支
3. 上线必须打 tag（需注明日期及版本号）
4. 线上 bug 修复，需要新开 hotfix 分支，修改完了也要打 tag

#### 6.2 git commit 规范

git 提交的时候对代码的检查及 git commit msg 做了检测。如果不符合 eslint 规定的代码风格将无法提交。

git commit msg 的规范采用了 cz-conventional-changelog 校验，需要符合规范才能 push。

#### 6.3 自动生成 changelog

重要的版本信息或者修复问题需要在版本信息中记录，发版完了使用以下命令生成：
```
npm run changelog
```

