import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventDetails from '../views/event/Details.vue'
import EventRegister from '../views/event/Register.vue'
import EventLayout from '../views/event/Layout.vue'
import EventEdit from '../views/event/Edit.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/events/:id', //:id - dynamic segment
    name: 'EventLayout',
    component: EventLayout,
    props: true,
    children: [
      {
        path: '', //:id - dynamic segment
        name: 'EventDetails',
        component: EventDetails
      },
      {
        path: 'register', //:id - dynamic segment
        name: 'EventRegister',
        component: EventRegister
      },
      {
        path: 'edit', //:id - dynamic segment
        name: 'EventEdit',
        component: EventEdit
      },
      {
        path: '/event/:afterEvent(.*)',
        redirect: to => {
          return { path: '/events/' + to.params.afterEvent }
        }
        /* children: [
          { path: 'register', redirect: () => ({ name: 'EventRegister' }) },
           { path: 'edit', redirect: () => ({ name: 'EventEdit' }) }
        ] */
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
