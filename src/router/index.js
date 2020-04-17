import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Bands from '@/views/Bands'
import Search from '@/views/Search'
import Artists from '@/views/Artists'
import BandProfile from '@/views/profile/BandProfile.vue'
import ArtistRegistration from '@/views/ArtistRegistration'

const Profile = () => import('@/views/profile/Profile.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
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
    name: 'Registration',
    component: ArtistRegistration,
    meta: {
      title: 'Registration'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: 'Profile'
    }
  },
  {
    path: '/band',
    name: 'BandProfile',
    component: BandProfile,
    meta: {
      title: 'Band'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  document.title = to.meta.title || 'Bandifind'
  if (to.name == 'Profile' && !loggedIn) next({ name: 'Registration' })
  next()
})

export default router
