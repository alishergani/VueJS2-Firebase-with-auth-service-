<template>
  <div class="sign-up">
    <p>Let created a new account !</p>
    <input type="Email" v-model="email" placeholder="Email"><br>
    <input type="Password" v-model="password" placeholder="Password"><br>
    <button @click="signUp">Sign Up</button>
    <span>or go back to <router-link to="/login">login </router-link>.</span>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'signUp',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('hello')
        },
        (error) => {
          alert('Ooops :(' + error)
        }
      );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sign-up {
    margin-top: 40px;
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
  span {
    display: block;
    margin-top: 20px;
    font-size: 16px;
  }
  span a {
    text-decoration: none;
  }
</style>
