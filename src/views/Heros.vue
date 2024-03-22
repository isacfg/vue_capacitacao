<script setup>
import { ref } from 'vue'
import HeroCard from '@/components/HeroCard.vue'

const isLoading = ref(false)
const busca = ref('')
const results = ref([])

const fetchHeros = async () => {
	isLoading.value = true
	try {
		const res = await fetch('http://gateway.marvel.com/v1/public/characters?nameStartsWith=' + busca.value + '&limit=60&apikey=ebd7c1228a53966885f0dbaffd4a9a64')

		if (!res.ok) {
			throw new Error(`HTTP com erro, status: ${res.status}`);
		}
		const data = await res.json()
		results.value = data.data.results

		console.log(data)

	} catch (error) {
		console.error(error)
	} finally {
		isLoading.value = false
	}
}
</script>

<template>



	<div class="container mx-auto bg-[#151515] text-white min-h-screen w-full">

		<div class="search flex gap-x-4 w-full items-center justify-center">
			<label class="input input-bordered flex items-center gap-2 bg-transparent input-busca w-1/2">
				<input type="text" v-model="busca" class="grow" placeholder="Search" />
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
					class="w-4 h-4 opacity-70">
					<path fill-rule="evenodd"
						d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
						clip-rule="evenodd" />
				</svg>
			</label>

			<button @click="fetchHeros" class="btn btn-primary bg-[#1f1f1f] border-[#1f1f1f]">Search</button>
		</div>

		<div v-if="isLoading == true" class="container mx-auto flex items-center justify-center mt-24 h-full">
			<span class="loading loading-spinner loading-lg"></span>
		</div>

		<!-- heroes card -->
		<div v-if="results.length !== 0" class="grid grid-cols-3 gap-4 mt-16 mx-auto w-full ">
			<HeroCard v-for="hero in results" :key="hero.id" :data="hero"
				:img-path="`${hero.thumbnail.path}/standard_fantastic.${hero.thumbnail.extension}`" />
		</div>

	</div>
</template>

<style scoped>
.input-busca {
	background-color: #1f1f1f;
	border-color: #1f1f1f;
}
</style>
