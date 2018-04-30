<template>
  <div class="hello">
    <h1>Hi, this is <code>Hello.vue</code></h1>

    <button @click="logOut">LogOut</button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'hello',
  data () {
    return {}
  },
  methods: {
    logOut() {
      firebase.auth().signOut().then( () => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>