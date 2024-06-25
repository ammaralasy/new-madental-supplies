<script lang="ts">
	import HeroPage from './Hero/Hero-page.svelte';
	import Carousel from './Carousel.svelte';
	import AboutPage from './About/About-page.svelte';
	import WriteToUs from './Write-To-Us/Write-to-us.svelte';
	import ContactUs from './Contact-us/Contact-us.svelte';
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
</script>

<HeroPage />
<Carousel />
<AboutPage />
<WriteToUs />
<ContactUs />
