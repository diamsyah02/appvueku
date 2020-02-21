<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand class="text-center" href="#">
        <img :src="require('./assets/logo.png')" alt="" width="30">
        Diamsyah.com
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
            <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link class="nav-link" to="/profile">Profile</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link class="nav-link" to="/education">Education</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link class="nav-link" to="/skill">Skill</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link class="nav-link" to="/portofolio">Portofolio</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link class="nav-link" to="/experience">Experience</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import axios from 'axios';
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(BootstrapVueIcons)
Vue.use(axios)
export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
}

b-navbar{
  position: fixed;
  z-index: 999;
}
</style>
