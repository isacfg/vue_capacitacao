<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

</script>

<template>

	<header>
		<div class="navbar bg-[#151515]">
			<div class="flex-1">
				<a class="btn btn-ghost text-xl text-white">MARVEL</a>
			</div>
			<div class="flex-none">
				<ul class="menu menu-horizontal px-1 text-white">
					<li>
						<RouterLink to="/" class="btn btn-ghost">Heróis</RouterLink>
					</li>
					<li>
						<RouterLink to="/about" class="btn btn-ghost">Quadrinhos</RouterLink>
					</li>
				</ul>
			</div>
		</div>
	</header>

	<main class="bg-[#151515]">

		<RouterView />

	</main>


</template>
