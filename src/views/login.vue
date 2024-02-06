<template>
	<div class="app">
		<!-- Sidebar -->
		<!-- <Sidebar /> -->

		<!-- Content -->
		<!-- <router-view /> -->
	</div>
	<div class="bg-[#4f7364] text-white flex flex-col justify-center w-screen h-screen overflow-hidden">
        <div class="flex flex-row justify-evenly">
            <div class=" flex flex-col justify-center items-baseline">
                <img src="../assets/logo.png" class="max-w-[65%]" alt="Logo" />
            </div>
            <div class="space-y-8 w-[27%] flex flex-col justify-end">
                <div class="relative mb-7">
                    <span class=" text-gradient-150 text-4xl flex justify-start items-center">BANK AL HABIB</span>
                </div>
                <div class="flex flex-row justify-between items-baseline">
                    <div class="space-y-2">
                        <Label class="text-l text-black mb-3"> Branch Code </Label>
                        <Input type="brncd" placeholder="branch" class="text-black bg-background-100 h-[30px]" />
                    </div>
                    <div class="space-y-2">
                        <Label class="text-l text-black mb-3"> Username </Label>
                        <Input type="password" placeholder="username" class="text-black bg-background-100 h-[30px]" />
                    </div>
                </div>
                <div class="space-y-2">
                    <Label class="text-black"> Password</Label>
                    <Input type="password" id="password" placeholder="password" class=" text-black bg-background-100 h-[30px]" />
                </div>
                <div class="flex flex-row justify-center items-baseline gap-20">
                    <!-- <Button variant="default" class="mt-8 w-40">
                        Sign In
                    </Button> -->
                    <router-link to="/">
                        <Button variant="default" class="mt-8 w-40">
                            Sign In
                        </Button>
                    </router-link>
                    <Button variant="default" class="mt-8 w-40">
                        Exit
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '../components/sidebar.vue'
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

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