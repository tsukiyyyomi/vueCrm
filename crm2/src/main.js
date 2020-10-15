import Vue from "vue";
//import Vuelidate from 'vuelidate'
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false;

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
