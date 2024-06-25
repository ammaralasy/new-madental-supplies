<script lang="ts">
	import AboutImage from './About-image.svelte';
	export let aboutParagraphs, header1;
</script>

<div class="max-w-4xl mx-auto px-4 py-12 h-max w-screen">
	<div class="flex flex-col items-stretch md:flex-row md:items-start rounded-lg overflow-hidden">
		<AboutImage />
		<div class="md:w-1/2 p-8">
			<h2 class="text-4xl text-white font-bold mb-3 font-montserrat text-center md:text-left">
				{@html header1}
			</h2>
			<div class=" text-base md:text-lg text-white space-y-4 text-justify">
				{#each aboutParagraphs as aboutParagraph (aboutParagraph.id)}
					<p>{@html aboutParagraph.paragraph}</p>
				{/each}
			</div>
		</div>
	</div>
</div>
