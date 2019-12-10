//Basic Example
let vm = new Vue({
    el:"#example",
    data:{
        message:"123456"
    },
    methods:{
        reversedMessageMethod:function(){
            console.log("reversedMessageMethod");
            return this.message.split("").reverse().join("");
        }
    },
    computed:{
        reversedMessage:function(){
            console.log("reversedMessage");
            return this.message.split("").reverse().join("");
        }
    }
});