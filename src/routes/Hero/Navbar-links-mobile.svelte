<script lang="ts">
	export let classContains: boolean;
	//export let navbarClicked: boolean;
	export let classMainLeftIcons, classImgLeftIcons, classImgNavIcon;

	import { onMount, onDestroy } from 'svelte';
	import { slide, fly, fade } from 'svelte/transition';
	import { browser } from '$app/environment';
	import { scrollingStore } from '../store.js';
	const classMain = 'flex h-full border-b-2 w-4/6';
	const classMainLast = 'flex h-full  w-4/6';
	const classA = 'flex items-center text-white';
	const classAMenuIcon = 'sm:hidden';
	const classALeftIcons = 'hidden sm:block';
	const classImgLeftIconsMob = ' sm:hidden h-4 max-w-md';
	const classImgCloseNavbarMob = ' navbar-close sm:hidden h-5 max-w-md';
	let menuIconClass: HTMLElement;
	// let contactScroll: HTMLElement,
	// 	brandScroll: HTMLElement,
	// 	homeScroll: HTMLElement,
	// 	aboutScroll: HTMLElement;
	let width;
	let targetElement;
	let mutationObserver;

	const leftSideIcons = [
		{
			id: 1,
			iconName: 'language',
			src: '/world-wide_13312.png',
			alt: 'language option',
			classForImg: classImgLeftIcons
		},
		{
			id: 2,
			iconName: 'store',
			src: '/store_4574776.png',
			alt: 'link to store',
			classForImg: classImgLeftIcons
		},
		{
			id: 3,
			iconName: 'menuIcon',
			src: '/menu-bar.png',
			alt: 'navbar icon',
			classForImg: classImgNavIcon
		}
	];
	const leftSideIconsMob = [
		{
			id: 1,
			iconName: 'closeNavbar',
			src: '/cancel.png',
			alt: 'close navbar list icon',
			classForImg: classImgCloseNavbarMob
		},
		{
			id: 2,
			iconName: 'language2',
			src: '/worldwide2.png',
			alt: 'language icon',
			classForImg: classImgLeftIconsMob
		},
		{
			id: 3,
			iconName: 'store2',
			src: '/store2.png',
			alt: 'got to store icon',
			classForImg: classImgLeftIconsMob
		}
	];

	//$: console.log(`Here in Navbar-links-mobile classContains: ${classContains}`);
	let handleClick: (arg0: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) => any;
	let toggleNavbar: (arg0: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) => any;
	let closeNavbar: (arg0: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) => any;
	//let scrollingFunc: (arg0: HTMLElement) => any;

	function addEventListener() {
		if (browser) {
			document.addEventListener('click', closeNavbar);
		}
	}

	function removeEventListener() {
		if (browser) {
			document.removeEventListener('click', closeNavbar);
		}
	}
	//this is reactive if statment to check for classContains if true then the menu will appear and event listener will be active
	$: if (classContains) {
		console.log(`classContains changed here to true`);
		addEventListener();
	} else {
		console.log(`classContains changed here to false`);
		removeEventListener();
	}

	onMount(() => {
		width = window.innerWidth;
		classContains = false;
		menuIconClass = document.getElementById('menuIcon');

		// contactScroll = document.getElementById('contact');
		// homeScroll = document.getElementById('home');
		// aboutScroll = document.getElementById('about');
		// brandScroll = document.getElementById('brand');

		targetElement = document.getElementById('mobile-menu');
		//addEventListener();

		// let scrollingArray = [
		// 	{ id: 'home', view: homeScroll },
		// 	{ id: 'about', view: aboutScroll },
		// 	{ id: 'brand', view: brandScroll },
		// 	{ id: 'contact', view: contactScroll }
		// ];
		// scrollingFunc = (element, event) => {
		// 	event.preventDefault();
		// 	const findScroll = scrollingArray.find((obj) => obj.id === element);
		// 	console.log(findScroll['view']);
		// 	findScroll['view'].scrollIntoView(true);
		// };
		closeNavbar = (event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) => {
			event.preventDefault();

			if (event.target.closest('.navbar-icon') || width >= 641) {
				console.log(`this is closeNavbar ${classContains} and the width of the screen is ${width}`);
				return;
			}

			menuIconClass.setAttribute('class', 'sm:hidden');
			classContains = false;
		};
		toggleNavbar = (event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) => {
			event.preventDefault();
			if (!event.target?.className.includes('navbar-close')) return;
			//console.log(`this is toggleNavbar ${event.target?.className.includes('navbar-close')}`);
			menuIconClass.setAttribute('class', 'sm:hidden');
			classContains = false;
		};

		handleClick = (event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) => {
			event.preventDefault();
			//width = window.innerWidth;
			if (width >= 641) return;
			classContains = event.target?.className.includes('navbar-icon');
			menuIconClass.setAttribute('class', 'hidden');
			console.log(`this is handleClick ${classContains} and this width ${width}`);
			//document.addEventListener('click', closeNavbar);
			return (classContains = true);
		};

		//
	});
	onDestroy(() => {
		removeEventListener();
		console.log(`this is inside onDestroy`);
		//mutationObserver.disconnect();
	});
	const navbarLinks = [
		{
			id: 1,
			linkName: 'Home',
			href: '#home',
			scroll: 'home'
		},
		{
			id: 2,
			linkName: 'About',
			href: '#about',
			scroll: 'about'
		},
		{
			id: 3,
			linkName: 'Brand',
			href: '#brand',
			scroll: 'brand'
		},
		{
			id: 4,
			linkName: 'Contact',
			href: '#contact',
			scroll: 'contact'
		}
	];
</script>

<!-- This for desktop leftside icons Language and Store icons and menu icon for mobile view only -->
<div class=" h-full flex basis-1/2 sm:basis-2/12 justify-center">
	<div class={classMainLeftIcons}>
		{#each leftSideIcons as leftSideIcon (leftSideIcon.id)}
			{#if leftSideIcon.iconName === 'menuIcon'}
				<button
					id="menuIcon"
					class={classAMenuIcon}
					on:click={(event) => handleClick(event)}
					in:fade
					><img class={leftSideIcon.classForImg} src={leftSideIcon.src} alt={leftSideIcon.alt} />
				</button>
			{:else}
				<a href="#top" class={classALeftIcons}>
					<img class={leftSideIcon.classForImg} src={leftSideIcon.src} alt={leftSideIcon.alt} />
				</a>
			{/if}
		{/each}
		<!-- This is close menu icon, store and language icons for mobile view only -->
		
			<div class="flex space-x-6 w-full pl-6" in:fly class:hide={!classContains}>
				{#each leftSideIconsMob as leftSideIcon (leftSideIcon.id)}
					{#if leftSideIcon.iconName === 'closeNavbar'}
						<button class={classAMenuIcon} on:click={(event) => toggleNavbar(event)}>
							<img class={leftSideIcon.classForImg} src={leftSideIcon.src} alt={leftSideIcon.alt} />
						</button>
					{:else}
						<a href="#top" class={classAMenuIcon}>
							<img class={leftSideIcon.classForImg} src={leftSideIcon.src} alt={leftSideIcon.alt} />
						</a>
					{/if}
				{/each}
			</div>
		
	</div>
	<!-- This the vertical navigation menu for mobile view only it shows when menu icon bar is clicked only -->
	{#if classContains}
		<div
			id="mobile-menu"
			class="flex sm:hidden absolute inset-0 top-full z-20 navbar-mobile flex-col items-center justify-center space-y-4 text-base w-full h-60 bg-madental-red bg-opacity-75"
			transition:slide={{ delay: 150 }}
		>
			{#each navbarLinks as navbarLink (navbarLink.id)}
				<div class={navbarLink.id !== 4 ? classMain : classMainLast}>
					<a
						on:click|preventDefault={() => $scrollingStore(navbarLink.scroll)}
						href={navbarLink.href}
						class={classA}>{navbarLink.linkName}</a
					>
				</div>
			{/each}
		</div>
	{/if}
</div>
<style>
	.hide {
		display: none
	}
</style>