<script lang="ts">
	const classMain = 'hidden sm:flex items-center h-full';
	const classMainLogo = 'flex items-center h-full';
	const classImg = 'h-4 md:h-4 lg:h-5 mr-1.5 pt-0.5 ';
	const classA = ' hidden sm:flex items-center text-gray-900 hover:text-gray-700';
	const classImgLogo = 'h-16 md:h-16 lg:h-20 max-w-sm';
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
	const navbarLinks = [
		{
			id: 1,
			linkName: 'Home',
			src: '/home-1@2x.png',
			alt: 'Home link',
			href: '#home'
		},
		{
			id: 2,
			linkName: 'About',
			src: '/info-circle@2x.png',
			alt: 'About link',
			href: '#about'
		},
		{
			id: 3,
			linkName: 'Logo',
			src: '/logo.png',
			alt: 'Madental Supplies Logo'
		},
		{
			id: 4,
			linkName: 'Brand',
			src: '/fi-rr-megaphone@2x.png',
			alt: 'Brand link',
			href: '#brand'
		},
		{
			id: 5,
			linkName: 'Contact',
			src: '/phone@2x.png',
			alt: 'Contact link',
			href: '#contact'
		}
	];
</script>

<div
	class="flex items-center justify-end sm:justify-center space-x-2 md:space-x-6 text-base md:text-base lg:text-lg basis-1/2 sm:basis-8/12 h-full"
>
	{#each navbarLinks as navbarLink (navbarLink.id)}
		<div class={navbarLink.linkName !== 'Logo' ? classMain : classMainLogo}>
			<a
				href={navbarLink.href}
				class={navbarLink.linkName !== 'Logo' ? classA : ''}
				use:scrollTo={{ ref: navbarLink.linkName, duration: 1000, offset: -60 }}
				><img
					class={navbarLink.linkName !== 'Logo' ? classImg : classImgLogo}
					src={navbarLink.src}
					alt={navbarLink.alt}
				/>{navbarLink.linkName !== 'Logo' ? navbarLink.linkName : ''}</a
			>
		</div>
	{/each}
</div>
