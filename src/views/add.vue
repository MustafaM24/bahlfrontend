<template>
	<div class="app">
		<!-- Sidebar -->
		<Sidebar />

		<!-- Content -->
		<!-- <router-view /> -->
	</div>
	<div class="bg-[#8fbc8f] text-white flex flex-col p-10 w-full h-screen overflow-hidden">
        <span class=" text-black text-3xl font-bold flex justify-start items-start">ADD CONDITION</span>
        <div class="h-full w-full flex flex-col justify-center items-center gap-5 border-2 border-black">
			
			<div class=" w-[50%] flex flex-row justify-between items-center gap-5 my-10">
				<span class=" text-black text-xl font-bold flex justify-start items-start">Type: </span>
				<Select>
					<SelectTrigger class="w-[80%] text-black">
					<SelectValue class="text-black" placeholder="Select a fruit" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Fruits</SelectLabel>
							<SelectItem value="apple">
							Apple
							</SelectItem>
							<SelectItem value="banana">
							Banana
							</SelectItem>
							<SelectItem value="blueberry">
							Blueberry
							</SelectItem>
							<SelectItem value="grapes">
							Grapes
							</SelectItem>
							<SelectItem value="pineapple">
							Pineapple
							</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>


			<!-- <div className="grid w-full items-center gap-1.5"> -->
				<div class="flex flex-row justify-center items-center gap-20 w-[50%] my-10">
				<Label class="text-black text-xl font-bold flex justify-start items-start" htmlFor="picture">Picture:</Label>
				<Input class="bg-black w-[80%]" id="picture" type="file" />
				</div>
			<!-- </div> -->
			<div class="w-[50%] my-10 ">
				<Progress v-model="progress" class="w-[100%] h-7" />
			</div>
            <!-- <Button class="w-80 h-16">Apply Condition</Button>
            <Button class="w-80 h-16">Remove Condition</Button> -->
			<div class="w-[50%] my-10 flex justify-between ">
				<Button class="w-[200px] h-10">Process</Button>
				<Button class="w-[200px] h-10">Exit</Button>
			</div>
        </div>
        <div class="flex flex-col justify-end items-end">
            <Button class="w-[200px] h-10">Back</Button>
        </div>
    </div>
</template>

<script setup>
import Sidebar from '../components/sidebar.vue'
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { ref, watchEffect } from 'vue'
import { Progress } from '@/components/ui/progress'

const progress = ref(13)

watchEffect((cleanupFn) => {
  const timer = setTimeout(() => progress.value = 90, 100)
  cleanupFn(() => clearTimeout(timer))
})
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