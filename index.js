const app = Vue.createApp({
    template: '<h1>Olá, {{ name }}!</h1> <button v-on:click="count++">Contador: {{count}}</button>',
    data(){
        return{
            name: 'Daniel',
            count: 0
        }
    }
})

app.mount('#app')