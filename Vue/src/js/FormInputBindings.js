Vue.component("button-counter",{
    data:function(){
        return{
            count:0
        }
    },
    template:'<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});
Vue.component('blog-post', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <button v-on:click="$emit('enlarge-text', 0.1)">
          Enlarge text
        </button>
        <div v-html="post.content"></div>
      </div>
    `
  })
  Vue.component('alert-box', {
    template: `
      <div class="demo-alert-box">
        <strong>Error!</strong>
        <slot></slot>
      </div>
    `
  })
  Vue.component('base-input', {
    inheritAttrs: false,
    props: ['label', 'value'],
    template: `
      <label>
        {{ label }}
        <input
          v-bind="$attrs"
          v-bind:value="value"
          v-on:input="$emit('input', $event.target.value)"
        >
      </label>
    `
  })
let example1 = new Vue({
    el:"#example1",
    data:{
        message:""
    }
})
let example2 = new Vue({
    el:"#example2",
    data:{
        message:""
    }
})
let example = new Vue({
    el:"#example3",
    data:{
        checked:true
    }
})
new Vue({
    el: '#blog-posts-events-demo',
    data: {
      posts: [
          {id:1,title:"sada",content:"aaaaaaaaaa"}
      ],
      postFontSize: 1
    },
    methods:{
        onEnlargeText:function(enlargeAmount){
            this.postFontSize += enlargeAmount;
        }
    }
  })
  new Vue({el:"#example5"});
  new Vue({el:"#example6",data:{username:"123",label:"asdasdas"}});
