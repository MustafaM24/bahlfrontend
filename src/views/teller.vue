<template>
	<div class="app">
		<!-- Sidebar -->
		<Sidebar />

		<!-- Content -->
		<!-- <router-view /> -->
	</div>
	<div class="h-screen w-full bg-slate-500 flex flex-col justify-center items-center">
		<div class="text-3xl italic text-cyan-400 underline">teller</div>
		<!-- <Button></Button> -->
		<Button class=" bg-red-600 text-black h-7 w-20">Click me</Button>
	</div>
</template>

<script setup>
import Sidebar from '../components/sidebar.vue'
import { Button } from '@/components/ui/button';

</script>

<style lang="scss">
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;

		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
</style>