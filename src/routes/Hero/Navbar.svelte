<script lang="ts">
	import NavbarLinksDesktop from './Navbar-links-desktop.svelte';
	import NavbarLinksMobile from './Navbar-links-mobile.svelte';
	import { onMount } from 'svelte';

	const classMainLeftIcons =
		'flex items-center justify-start  sm:justify-end space-x-10 sm:space-x-6 h-full w-full navbar-mobile';
	const classImgLeftIcons = 'hidden sm:block h-4 md:h-4 lg:h-5';
	const classImgNavIcon = ' navbar-icon sm:hidden h-8 w-9 max-w-md';
	let classContains: boolean = false;
	//let navbarClicked: boolean = false;
	//let handleClick;

	onMount(() => {
		//const navbarIcon = document.querySelectorAll('.navbar-icon');
		// function to listen to click outside of hamburger icon and close if the click is outside
		// const closeNavbar = (event) => {
		// 	if (event.target.closest('.navbar-icon')) return (navbarClicked = true);
		// 	classContains = false;
		// 	navbarClicked = false;
		// };
		//document.addEventListener('click', closeNavbar);
	});

	const navbarLinks = [
		{
			id: 1,
			linkName: 'Home',
			src: '/home-1@2x.png',
			alt: 'Home link'
		},
		{
			id: 2,
			linkName: 'About',
			src: '/info-circle@2x.png',
			alt: 'About link'
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
			alt: 'Brand link'
		},
		{
			id: 5,
			linkName: 'Contact',
			src: '/phone@2x.png',
			alt: 'Contact link'
		}
	];
</script>

<nav class="bg-madental-red sm:bg-white py-2">
	<div class="max-w-7xl mx-auto px-4 sm:px-8">
		<div class="flex justify-between items-center h-[80px] font-montserrat relative">
			<!-- Left side icons -->
			<NavbarLinksMobile
				{classContains}
				{classMainLeftIcons}
				{classImgLeftIcons}
				{classImgNavIcon}
			/>
			<!-- Center logo and links -->
			<NavbarLinksDesktop />

			<!-- Right side empty space for balance -->
			<div class="hidden sm:flex items-center basis-2/12 space-x-4 h-full"></div>
		</div>
	</div>
</nav>
