import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'

import router from './router'
//validate
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import {ValidationObserver} from 'vee-validate'

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
//
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("token") == null ) {
      next({
        path: "/login"
      });
    } else if(store.state.entercode) {
      next({path:'/'});
    } else{
		next();
	}
  } else {
    next();
  }
});

new Vue({
  render: h => h(App),store,router,
}).$mount('#app')
