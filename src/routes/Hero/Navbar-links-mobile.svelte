<script lang="ts">
	export let classContains: boolean;
	//export let navbarClicked: boolean;
	export let classMainLeftIcons, classImgLeftIcons, classImgNavIcon;
	import { onMount } from 'svelte';
	import { slide, fly, fade } from 'svelte/transition';
	const classMain = 'flex h-full border-b-2 w-4/6';
	const classMainLast = 'flex h-full  w-4/6';
	const classA = 'flex items-center text-white';
	const classAMenuIcon = 'sm:hidden';
	const classALeftIcons = 'hidden sm:block';
	const classImgLeftIconsMob = ' sm:hidden h-4 max-w-md';
	const classImgCloseNavbarMob = ' navbar-close sm:hidden h-5 max-w-md';
	let menuIconClass: HTMLElement;
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
	onMount(() => {
		menuIconClass = document.getElementById('menuIcon');

		toggleNavbar = (event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) => {
			event.preventDefault();
			if (!event.target?.className.includes('navbar-close')) return;
			//console.log(`this is toggleNavbar ${event.target?.className.includes('navbar-close')}`);
			menuIconClass.setAttribute('class', 'sm:hidden');
			classContains = false;
		};

		handleClick = (event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) => {
			//event.preventDefault();
			classContains = event.target?.className.includes('navbar-icon');
			menuIconClass.setAttribute('class', 'hidden');
			//console.log(`this is handleClick ${classContains}`);
			return classContains;
		};
		const closeNavbar = (event) => {
			if (event.target.closest('.navbar-mobile') || event.target.closest('.navbar-icon')) return;
			classContains = false;
			menuIconClass.setAttribute('class', 'sm:hidden');
		};

		document.addEventListener('click', closeNavbar);
	});
	const navbarLinks = [
		{
			id: 1,
			linkName: 'Home'
		},
		{
			id: 2,
			linkName: 'About'
		},
		{
			id: 3,
			linkName: 'Brand'
		},
		{
			id: 4,
			linkName: 'Contact'
		}
	];
</script>

<div class=" h-full flex basis-1/2 sm:basis-2/12 justify-center">
	<div class={classMainLeftIcons}>
		{#each leftSideIcons as leftSideIcon (leftSideIcon.id)}
			<a
				href="#top"
				id={leftSideIcon.id == 3 ? 'menuIcon' : ''}
				class={leftSideIcon.id == 3 ? classAMenuIcon : classALeftIcons}
				on:click={(event) => handleClick(event)}
				in:fade
			>
				<img class={leftSideIcon.classForImg} src={leftSideIcon.src} alt={leftSideIcon.alt} />
			</a>
		{/each}
		{#if classContains}
			<div class="flex space-x-6 w-full pl-4" in:fly>
				{#each leftSideIconsMob as leftSideIcon (leftSideIcon.id)}
					<a href="#top" class={classAMenuIcon} on:click={(event) => toggleNavbar(event)}>
						<img class={leftSideIcon.classForImg} src={leftSideIcon.src} alt={leftSideIcon.alt} />
					</a>
				{/each}
			</div>
		{/if}
	</div>
	{#if classContains}
		<div
			class="flex sm:hidden absolute inset-0 top-full z-20 -left-4 navbar-mobile flex-col items-center justify-center space-y-4 text-base w-screen h-60 bg-madental-red"
			transition:slide={{ delay: 150 }}
		>
			{#each navbarLinks as navbarLink (navbarLink.id)}
				<div class={navbarLink.id !== 4 ? classMain : classMainLast}>
					<a href="#top" class={classA}>{navbarLink.linkName}</a>
				</div>
			{/each}
		</div>
	{/if}
</div>
