import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		// {
		// 	path: '/',
		// 	component: Home
		// },
		{
			path: '/login',
			component: () => import('../views/login.vue')
		},
		{
			path: '/',
			component: () => import('../views/teller.vue')
		},
		{
			path: '/teller',
			component: () => import('../views/teller.vue')
		},
		{
			path: '/menu',
			component: () => import('../views/menu.vue')
		},
		{
			path: '/add',
			component: () => import('../views/add.vue')
		},
		{
			path: '/remove',
			component: () => import('../views/remove.vue')
		},
	],
})

export default router