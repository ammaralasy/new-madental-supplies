<script lang="ts">
	import NavbarLinksDesktop from './Navbar-links-desktop.svelte';
	import NavbarLinksMobile from './Navbar-links-mobile.svelte';

	const classMainLeftIcons =
		'flex items-center justify-start  sm:justify-center space-x-10 sm:space-x-6 h-full w-full navbar-mobile';
	const classImgLeftIcons = 'hidden sm:block h-4 md:h-4 lg:h-5';
	const classImgNavIcon = ' navbar-icon sm:hidden h-8 w-9 max-w-md';
	let classContains: boolean = false;
	//let navbarClicked: boolean = false;
	//let handleClick;
</script>

<nav class="bg-madental-red sm:bg-white py-2 sticky top-0 z-20 w-screen">
	<div class="max-w-7xl mx-auto px-4 sm:px-8">
		<div class="flex justify-between items-center h-[80px] font-montserrat">
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
