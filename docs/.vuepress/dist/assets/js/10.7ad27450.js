(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{176:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"mock-数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mock-数据","aria-hidden":"true"}},[s._v("#")]),s._v(" Mock 数据")]),s._v(" "),a("p",[s._v("利用"),a("code",[s._v("umi")]),s._v("实现数据Mock。")]),s._v(" "),a("p",[a("code",[s._v("umi")]),s._v(" 约定 "),a("code",[s._v("mock")]),s._v(" 目录下的 "),a("code",[s._v("*.js")]),s._v(" 会被用来生成模拟API数据。")]),s._v(" "),a("h2",{attrs:{id:"mock-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mock-配置","aria-hidden":"true"}},[s._v("#")]),s._v(" Mock 配置")]),s._v(" "),a("p",[s._v("Mock 文件配置参考如下pattern:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[HTTP-Method API-Path]: <Static Data Object> | <Dynamic Data Provider>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("具体示例")])]),s._v(" "),a("p",[s._v("假设 "),a("code",[s._v("mock")]),s._v(" 目录结构如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+ mock/\n  - users.js\n  - cities.js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"静态数据模拟"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态数据模拟","aria-hidden":"true"}},[s._v("#")]),s._v(" 静态数据模拟")]),s._v(" "),a("p",[s._v("然后在 "),a("code",[s._v("users.js")]),s._v(" 里做如下配置")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token string"}},[s._v("'get /users'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    result"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        id"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        name"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'zhangsan'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        alias"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'张三'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        email"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'zhangsan@qq.com'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[a("code",[s._v("dev")]),s._v("启动后，可以通过"),a("code",[s._v("/users")]),s._v("直接在代码请求该API。")]),s._v(" "),a("h2",{attrs:{id:"动态数据模拟配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态数据模拟配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 动态数据模拟配置")]),s._v(" "),a("p",[s._v("然后在 "),a("code",[s._v("cities.js")]),s._v(" 里做如下配置")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{attrs:{class:"token string"}},[s._v("'get /cities'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("req"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" next"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{attrs:{class:"token function"}},[s._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      res"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{attrs:{class:"token function"}},[s._v("json")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        result"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            id"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            name"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'beijing'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            alias"),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'北京'")]),s._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("1500")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[a("code",[s._v("dev")]),s._v("启动后，可以通过"),a("code",[s._v("/cities")]),s._v("直接在代码请求该API，"),a("code",[s._v("1.5s")]),s._v("后得到了返回数据。")])])}],!1,null,null,null);e.options.__file="mock.md";t.default=e.exports}}]);