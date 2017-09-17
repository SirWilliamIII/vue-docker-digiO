// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Employees from './components/Employees'
import About from './components/About'

const router = new VueRouter({
	base:   __dirname,
	routes: [
		{ path: '/', component: Employees },
		{ path: '/about', component: About }
	]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	router,
	template: `
    <div id="app">
      <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">H.R. Buddy - </a><em>at your service</em></a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="navlink"><router-link to="/">Home</router-link></li>
            <li class="navlink"><router-link to="/about">About</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right navlink">
            <li><router-link to="/add">Add Customer</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
      <router-view></router-view>
    </div>
  `
}).$mount('#app')
