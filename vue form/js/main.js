const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            loggedIn: false,
            loginError: '',
            user: {
                name: '',
                password: '',
                email:'',
            }
        };
    },
    methods: {
        onLoginFormSubmit(){
            if (this.user.name==="Alex.Banana" && this.user.password==='Banana33' && this.user.email==='banana@glock.it'){
                this.loggedIn=true;
            } else if (this.user.name!=="Alex.Banana"){
                this.loginError='user name sbagliato';
                this.user.name='';
                return;
            } else if (this.user.password!=='Banana33'){
                this.loginError='password errata';
                this.user.password='';
                return;
            } else if (this.user.email!=='banana@gcock.it'){
                this.loginError='email sbagliata';
                this.user.email='';
                return;
            }
            this.name='';
            this.password='';
            this.email='';
        }
    }

}).mount('#app');