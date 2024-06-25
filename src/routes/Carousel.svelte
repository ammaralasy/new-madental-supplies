<script lang="ts">
	import { onMount } from 'svelte';
	import BlazeSlider from 'blaze-slider';
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
	const slides = [
		{ id: '0', src: 'https://via.placeholder.com/600x400?text=Slide+1', alt: 'Slide 1' },
		{ id: '1', src: 'https://via.placeholder.com/600x400?text=Slide+2', alt: 'Slide 2' },
		{ id: '2', src: 'https://via.placeholder.com/600x400?text=Slide+3', alt: 'Slide 3' },
		{ id: '3', src: 'https://via.placeholder.com/600x400?text=Slide+4', alt: 'Slide 4' }
	];
	const thumbnails = [
		{ id: '0', src: '/info-circle@2x.png', alt: 'Thumbnail 1' },
		{ id: '1', src: '/info-circle@2x.png', alt: 'Thumbnail 2' },
		{ id: '2', src: '/info-circle@2x.png', alt: 'Thumbnail 3' },
		{ id: '3', src: '/info-circle@2x.png', alt: 'Thumbnail 4' }
	];
	const thumbnailClass = 'blaze-pagination-button';
	let slider: BlazeSlider;
	//let thumbnails: NodeListOf<HTMLElement>;
	//const el = document.querySelector('.blaze-slider');

	onMount(() => {
		slider = new BlazeSlider(document.querySelector('.blaze-slider') as HTMLElement, {
			all: {
				slidesToShow: 1,
				enableAutoplay: true,
				autoplayInterval: 5000,
				draggable: true,
				loop: true,
				transitionDuration: 1000
			}
		});
		const paginationButtons = document.querySelectorAll('.blaze-pagination-button');

		//const pageIndex = activePage?.getAttribute('data-slide');
		paginationButtons.forEach((button) => {
			button.addEventListener('click', () => {
				const slideIndex: number = Number(button.getAttribute('data-slide'));
				//let step = document.querySelectorAll('active');
				let activePage = document.getElementById('active');
				let pageIndex: number = Number(activePage?.getAttribute('data-slide'));
				console.log(slideIndex, pageIndex);

				pageIndex > slideIndex
					? slider.prev(pageIndex - slideIndex)
					: slider.next(slideIndex - pageIndex);
				updateActivePagination(slideIndex);
			});
		});

		function updateActivePagination(activeIndex: number) {
			paginationButtons.forEach((button, index) => {
				if (index == activeIndex) {
					//button.classList.add('active');
					button.setAttribute('id', 'active');
				} else {
					button.removeAttribute('id');
					//button.classList.remove('active');
				}
			});
		}

		// Initialize the first button as active
		updateActivePagination(0);
	});
</script>

<div class="blaze-slider" use:scrollRef={'brand'} id="brand">
	<div class="blaze-container">
		<div class="blaze-track-container">
			<div class="blaze-track">
				{#each slides as slide (slide.id)}
					<div class="blaze-slide relative flex justify-center">
						<div class="description absolute left-1/2 -translate-x-1/2">
							Description for Image {parseInt(slide.id) + 1}
						</div>
						<div>
							<img src={slide.src} alt={slide.alt} />
						</div>
					</div>
				{/each}
			</div>
		</div>
		<!-- putting nav buttons and pagination in a custom structure -->
		<div class="my-structure flex justify-center">
			<button class="blaze-prev" aria-label="Go to previous slide">&lt;</button>
			<div class="">
				{#each thumbnails as thumbnail (thumbnail.id)}
					<button class={thumbnailClass} data-slide={thumbnail.id}
						><img src={thumbnail.src} alt={thumbnail.alt} /></button
					>
				{/each}
			</div>
			<button class="blaze-next" aria-label="Go to next slide">&gt;</button>
		</div>
	</div>
</div>
