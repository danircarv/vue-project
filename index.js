const app = Vue.createApp({
    data(){
        return{
            name: 'Lester',
            login: 'skibidi',
            bio: '...',
            company:'Toilet Inc.',
            avatar_url:'https://unsplash.it/256',
            searchInput: ''

        }
    },
    methods:{
        async fetchGithubUser(){
            const res = await fetch(`https://api.github.com/users/${this.searchInput}`)
            const {login, name, bio, company, avatar_url} = await res.json()

            this.login = login
            this.name = name
            this.bio = bio
            this.company = company
            this.avatar_url = avatar_url
        }
    }
})

app.mount('#app')