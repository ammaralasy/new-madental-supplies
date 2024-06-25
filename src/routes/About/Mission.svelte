<script lang="ts">
	import MissionImage from './Mission-image.svelte';
	export let missionParagraphs, header2;
	const classTextMission = 'w-3/4 md:w-full mx-auto';
</script>

<div class="max-w-4xl mx-auto px-4 py-8 h-max w-screen">
	<div
		class="flex flex-col-reverse md:flex-row md:items-center bg-red-600 rounded-lg overflow-hidden h-max"
	>
		<div class="md:w-1/2 p-8">
			<h2 class="text-4xl text-white font-bold mb-3 font-montserrat text-center md:text-left">
				{@html header2}
			</h2>
			<div class="text-base md:text-lg text-white space-y-4 text-center md:text-left">
				{#each missionParagraphs as missionParagraph (missionParagraph.id)}
					<p class={missionParagraph.id === 1 ? classTextMission : ''}>
						{@html missionParagraph.paragraph}
					</p>
				{/each}
			</div>
		</div>
		<MissionImage />
	</div>
</div>
