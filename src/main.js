import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyD1giRD_fFdkGYUzvZ4xmfrPUylSVIwpGM",
  authDomain: "vue-firebase-first-app.firebaseapp.com",
  databaseURL: "https://vue-firebase-first-app.firebaseio.com",
  projectId: "vue-firebase-first-app",
  storageBucket: "",
  messagingSenderId: "199467690366"
};

firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
