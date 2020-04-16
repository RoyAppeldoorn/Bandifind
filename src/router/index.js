import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Bands from '@/views/Bands'
import Search from '@/views/Search'
import Artists from '@/views/Artists'
import Profile from '@/views/Profile'
import ArtistRegistration from '@/views/ArtistRegistration'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/bands',
    name: 'Bands',
    component: Bands,
    meta: {
      title: 'Bands'
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: {
      title: 'Search'
    }
  },
  {
    path: '/artists',
    name: 'Artists',
    component: Artists,
    meta: {
      title: 'Artists'
    }
  },
  {
    path: '/artistregistration',
    name: 'ArtistRegistration',
    component: ArtistRegistration,
    meta: {
      title: 'ArtistRegistration'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: 'Profile'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Bandifind'
  next()
})

export default router
