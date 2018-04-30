<template>
  <div class="login">
    <h3>Sign in</h3>
    <input type="Email" v-model="email" placeholder="Email"><br>
    <input type="Password" v-model="password" placeholder="Password"><br>
    <button @click="signIn">Connection</button>
    <p>You don't have an acccount? <router-link to="/sign-up">Create it</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('hello')
        },
        (error) => {
          alert('Ooops :(' + error.message)
        }
      );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    margin: 40px 0;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 40px;
    padding: 10px 15px;
    cursor: pointer;
    border: 2px solid #333;
    background-color: #444;
    color: #fff;  
    text-transform: uppercase;
    font-weight: 600;
  }
  p {
    margin-top: 40px;
    font-size: 16px;
  }
  p a {
    text-decoration: none;
    cursor: pointer;
  }
</style>
