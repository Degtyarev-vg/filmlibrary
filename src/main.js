// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Uimini from 'uimini/dist/css/uimini.css'

import App from './App'
import router from './router'
import store from './store'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'

Vue.use(
  Vuelidate,
  Uimini
)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    var firebaseConfig = {
      apiKey: 'AIzaSyAQkDJdt9QEojusUp-8lJWaeThfphCSp94',
      authDomain: 'filmlibrary-fe10d.firebaseapp.com',
      databaseURL: 'https://filmlibrary-fe10d.firebaseio.com',
      projectId: 'filmlibrary-fe10d',
      storageBucket: 'filmlibrary-fe10d.appspot.com',
      messagingSenderId: '476243516480',
      appId: '1:476243516480:web:edb04d64e49cb4949bd3a5'
    }
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
  }
})
