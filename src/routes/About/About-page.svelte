<script lang="ts">
	import About from './About.svelte';
	import Mission from './Mission.svelte';
	import { scrollRef } from 'svelte-scrolling';
	const header1 =
		'<span class="underline underline-offset-8 decoration-white decoration-3">Abou</span>t Us';
	const header2 =
		'<span class="underline underline-offset-8 decoration-white decoration-3">Our</span> Mission';
	const aboutParagraphs = [
		{
			id: 1,
			paragraph:
				'<span class="underline">Mohammed Alasbahi for Trading,</span> Dental Supplies is a leading provider of high-quality dental products in Yemen. Established in 1996, our mission has been to make quality dental supplies accessible across the country.'
		},
		{
			id: 2,
			paragraph:
				'At a time when the Yemeni dental sector was underserved, we set out to expand our product offerings and distribution to meet the needs of dental professionals nationwide. Today, we offer a broad spectrum of supplies catered to both lab technicians and dentists.'
		},
		{
			id: 3,
			paragraph:
				'Providing customers with good quality products at reasonable prices is our top priority. We constantly forge new partnerships to ensure we can supply the best possible solutions to support our customers.'
		},
		{
			id: 4,
			paragraph:
				'As we continue to grow, our goal is to make quality dental supplies available to all corners of Yemen. We are dedicated to expanding our business activities to fulfill the dental needs of professionals and their patients across the country.'
		}
	];
	const missionParagraphs = [
		{
			id: 1,
			paragraph:
				'<span class="text-2xl md:text-3xl"><span class="">We make it your trusted</span> destination for your dental needs</span>'
		},
		{
			id: 2,
			paragraph:
				'<span class="text-justify">We aim to support dentists in their journey towards professional excellence and achieving a brighter smile and a better life for their patients.</span>'
		}
	];
</script>

<div class=" bg-red-600" use:scrollRef={'about'} id="about">
	<About {header1} {aboutParagraphs} />

	<Mission {header2} {missionParagraphs} />
</div>
