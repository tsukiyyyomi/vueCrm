import Vue from "vue";
import Vuelidate from 'vuelidate'
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import messagePlagin from './utils/message.plagin';
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;
Vue.use(messagePlagin);
Vue.use(Vuelidate);

const firebaseConfig = {
  apiKey: "AIzaSyDVJGeUAq2icWV5Xf7_oy5pb24geo6HpbU",
  authDomain: "vue-crm-tsukyyyomi.firebaseapp.com",
  databaseURL: "https://vue-crm-tsukyyyomi.firebaseio.com",
  projectId: "vue-crm-tsukyyyomi",
  storageBucket: "vue-crm-tsukyyyomi.appspot.com",
  messagingSenderId: "983510924369",
  appId: "1:983510924369:web:b3eaaf6f4943853c370c70"
};
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,    
  render: h => h(App)
}).$mount("#app");



// createApp(App)
//   .use(store)
//   .use(router)  
//   .use(Vuelidate)
//   .mount("#app");
