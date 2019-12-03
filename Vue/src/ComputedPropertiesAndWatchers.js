let vm = new Vue({
    el:"#example",
    data:{
        message:"123456"
    },
    computed:{
        reversedMessage:function(){
            return this.message.split("").reverse().join("");
        }
    }
});