(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"206d":function(t,a,e){"use strict";var r=e("4413"),s=e.n(r);s.a},4413:function(t,a,e){},a55b:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container login-container"},[e("div",{staticClass:"card register col-md-9 m-auto bg-gray-1"},[e("div",{staticClass:"card-body"},[t.flashMsg?e("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(t._s(t.flashMsg))]):t._e(),t.error?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(t._s(t.error))]):t._e(),e("h1",{staticClass:"text-center text-primary mt-3 mb-3"},[t._v("Đăng nhập")]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"email"}},[t._v("Email address")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"password"}},[t._v("Password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}})]),t.isLoading?e("button",{staticClass:"buttonload btn btn-primary btn-block mt-4 mb-4"},[e("i",{staticClass:"fa fa-spinner fa-spin mr-2"}),t._v("Loading ")]):e("button",{staticClass:"btn btn-primary btn-block mt-4 mb-4",on:{click:t.login}},[t._v("Login")]),e("p",{staticClass:"mt-3"},[t._v(" Chưa có tài khoản? "),e("router-link",{attrs:{to:"/register"}},[t._v("Đăng ký")])],1)])])])},s=[],i=(e("96cf"),e("1da1")),n=e("5530"),o=e("bc3a"),l=e.n(o),c=e("2f62"),d={name:"Login",computed:Object(n["a"])({},Object(c["b"])(["isLoading"])),data:function(){return{email:"",password:"",flashMsg:"",error:""}},methods:{login:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.$store.dispatch("setLoading",!0),a.next=3,l.a.post("/api/login",{email:t.email,password:t.password});case 3:e=a.sent,t.$store.dispatch("setLoading",!1),e.data.isError?(t.flashMsg="",t.error=e.data.error):(t.$bus.emit("loggedin"),t.error="","notVerified"===e.data.msg&&t.$router.push("/verification"));case 6:case"end":return a.stop()}}),a)})))()}},created:function(){"authenticateFail"===this.$route.query.err?this.error="Bạn cần đăng nhập để làm được việc này":"registerSuccess"===this.$route.query.msg&&(this.flashMsg="Đăng ký thành công. Hãy đăng nhập !")},beforeCreate:function(){this.forwardAuthenticate()}},u=d,m=(e("206d"),e("2877")),p=Object(m["a"])(u,r,s,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=about.93fffd4e.js.map