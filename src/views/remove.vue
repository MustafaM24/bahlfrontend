<template>
	<div class="app">
		<!-- Sidebar -->
		<Sidebar />

		<!-- Content -->
		<!-- <router-view /> -->
	</div>
	<div class="bg-[#8fbc8f] text-white flex flex-col p-10 w-full h-screen overflow-hidden">
        <span class=" text-black text-3xl font-bold flex justify-start items-start">AL HABIB BANKING SYSTEM</span>
        <div class="h-full w-full flex flex-col justify-center items-center gap-5">
            <Button class="w-80 h-16">Apply Condition</Button>
            <Button class="w-80 h-16">Remove Condition</Button>
        </div>
        <div class="flex flex-col justify-end items-end">
            <Button class="w-[200px] h-10">Back</Button>
        </div>
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