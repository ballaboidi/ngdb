<template>
    <form 
        id="login"
        class="text-center"
    >
        <div class="form-group">
            <label for="email">Username</label>
            <input 
                type="email"
                class="form-control mx-auto my-2"
                :class="{error: error}"
                id="email" 
                placeholder="Username eingeben"
                v-model="username"
            >
        </div>
        <div class="form-group">
            <label for="password">Passwort</label>
            <input
                type="password"
                class="form-control mx-auto my-2"
                :class="{error: error}"
                id="password"
                placeholder="Passwort eingeben"
                v-model="password">
        </div>
        <div
            class="error text-danger font-weight-bold mb-3"
            v-if="this.error"
        >
            Bitte überprüfe Deine Eingaben
        </div>
        <button
            type="submit"
            class="btn btn-primary mx-auto"
            @click="loginHandler"
        >
            Anmelden
        </button>
    </form>
</template>
<script> 
import axios from 'axios';
export default {  
  name: "Signin",
  data() {
      return{
        username: '',
        password: '',
        apiKey: 'http://localhost:1337/auth/local',
        error: false
      }
  },
  methods: {
      loginHandler(e) {
          e.preventDefault()
          if(this.username != '' && this.password != '')
          {
            this.onlogin(this.username, this.password)
          } else {
              this.error = true
          }
      },
      onlogin(username, password){
        axios
            .post(this.apiKey, {
                identifier: username,
                password: password
            })
            .then(response => {
                localStorage.setItem('user', JSON.stringify(response.data.user))
                localStorage.setItem('jwt', JSON.stringify(response.data.jwt))
                this.$router.push('/')
            })
            .catch(error => {
                if(error){
                    this.error = true
                }
            })
      }
  }
}
</script>
<style lang="scss">
    form#login{
        input{
            max-width: 350px;
        }
    }
</style>