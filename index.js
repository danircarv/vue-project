const app = Vue.createApp({
    data(){
        return{
            name: 'Daniel',
            count: 0
        }
    },
    methods:{
        increaseCount(){
            this.count++
        }
    }
})

app.mount('#app')