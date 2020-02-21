import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Profile from './components/Profile'
import Education from './components/Education'
import Skill from './components/Skill'
import Portofolio from './components/Portofolio'
import Experience from './components/Experience'

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/', component: Home
    },
    {
      path: '/profile', component: Profile
    },
    {
      path: '/education', component: Education
    },
    {
      path: '/skill', component: Skill
    },
    {
      path: '/portofolio', component: Portofolio
    },
    {
      path: '/experience', component: Experience
    },
  ],
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
