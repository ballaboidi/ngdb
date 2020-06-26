import Vue from 'vue'
import App from './App.vue'

import VueApollo from "vue-apollo"
import VueRouter from "vue-router"

import apolloClient from "./vue-apollo"

import AppImage from '@/components/global/AppImage.vue'
import AppIcon from '@/components/global/AppIcon.vue'
import EventNav from '@/components/page/EventNav.vue'
import defaultDetails from '@/components/page/defaultDetails.vue'
import EventDetails from '@/components/page/EventDetails.vue'
import Signin from '@/components/page/Signin.vue'

Vue.component(AppImage.name, AppImage)
Vue.component(AppIcon.name, AppIcon)

Vue.config.productionTip = false
Vue.use(VueApollo)
Vue.use(VueRouter)

const apolloProvider = new VueApollo({  
  defaultClient: apolloClient
})

const router = new VueRouter({  
  mode: "history",
  routes: [
    {
      path: '/',
      components: {
        nav: EventNav,
        content: defaultDetails
      },
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/login',
      components: {
        content: Signin
      },
      meta:{
        requiresAuth: false
      }
    },
    {
      path: '/events/:id',
      components: {
        nav: EventNav,
        content: EventDetails
      },
      meta:{
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const jwt = localStorage.getItem('jwt')
    if (!jwt && to.path != '/login'){
      next('/login')
    } else {
      next()
    }
})

new Vue({
  apolloProvider,
  router,
  render: h => h(App),
}).$mount('#app')
