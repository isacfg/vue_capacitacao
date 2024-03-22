<script setup>
defineProps(['data', 'imgPath']);

</script>

<template>
	<div class="flex flex-col justify-center mx-auto">
		<img :src="imgPath" class="max-h-[300px] max-w-[300px] object-cover rounded-lg heroimg" alt="hero img">
		<p>
			{{ data.name }}
		</p>

	</div>

</template>

<style scoped>
.heroimg {
	transition: transform 0.2s;
	cursor: pointer;
}

.heroimg:hover {
	transform: scale(1.1);
}
</style>
