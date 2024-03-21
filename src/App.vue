<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { md5 } from 'js-md5'
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
const isLoading = ref(false)
const searchQuery = ref('')


const fetchMarvel = async () => {
	isLoading.value = true
	try {
		const params = {
			nameStartsWith: searchQuery.value,
			ts: Date.now(), // Required by Marvel API
			apikey: 'ebd7c1228a53966885f0dbaffd4a9a64',
			hash: generateHash(Date.now(), 'ebd7c1228a53966885f0dbaffd4a9a64', 'bf659abe81fdeeb9fea581cd508c0faf5b79af3e')
		}
		//const response = await fetch('https://gateway.marvel.com/v1/public/characters', { params })
		const response = await fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchQuery.value}&ts=${Date.now()}&apikey=ebd7c1228a53966885f0dbaffd4a9a64&hash=${generateHash}`)
		const data = await response.json()
		console.log(data)
	} catch (error) {
		console.error(error)
	} finally {
		isLoading.value = false
	}
}


const generateHash = (ts, privateKey, publicKey) => {
	return md5(ts + privateKey + publicKey).toString()
}

</script>

<template>

	<input type="text" v-model="searchQuery" />
	<button @click="fetchMarvel">Search</button>

</template>

<style scoped>
header {
	line-height: 1.5;
	max-height: 100vh;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

nav {
	width: 100%;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}

@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}

	nav {
		text-align: left;
		margin-left: -1rem;
		font-size: 1rem;

		padding: 1rem 0;
		margin-top: 1rem;
	}
}
</style>
