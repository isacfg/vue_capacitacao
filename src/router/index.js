import { createRouter, createWebHistory } from 'vue-router'
import Heros from '../views/Heros.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Herois',
			component: Heros
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/Comics.vue')
		}
	]
})

export default router
