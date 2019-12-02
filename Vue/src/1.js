//import '../vue.js'
Vue.component('todo-item',{
  props:['todo'],
  template:'<li>{{todo.text}}</li>'
});
let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

let app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})

let app3 = new Vue({
  el:'#app-3',
  data:{
    sss:true
  }
});
let app4 = new Vue({
  el:"#app-4",
  data:{
    beans:[
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
});
let app5 = new Vue({
  el:"#app-5",
  data:{
    message:"111122222Vue3333344444"
  },
  methods:{
    reverseMessage:function(){
      this.message = this.message.split("").reverse().join("");
    }
  }
});
let app6= new Vue({
  el:"#app-6",
  data:{
    message:"学习 Vue"
  }
});
let app7 = new Vue({
  el:"#app-7",
  data:{
    list:[
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ]
  }
})