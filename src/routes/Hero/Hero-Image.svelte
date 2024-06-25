<script lang="ts">
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
</script>

<div
	class="relative bg-cover bg-center bg-no-repeat h-screen"
	style="background-image: url('/hero-image.jpg');"
	use:scrollRef={'home'}
	id="home"
>
	<div class="absolute inset-0 bg-black opacity-55"></div>
	<div class="flex h-full">
		<div class="h-full basis-1/6 hidden sm:block"></div>
		<div
			class="relative z-10 flex flex-col justify-center items-center w-full sm:w-2/3 font-montserrat text-white px-4 sm:basis-5/6"
		>
			<div class="mb-6 self-start hidden sm:block">
				<img src="/logo.png" alt="Company logo" class="inline-block h-20" />
			</div>
			<h2 class="text-lg sm:self-start">Madental Supplies</h2>
			<h1
				class="text-2xl md:text-3xl lg:text-4xl mb-4 sm:self-start font-extrabold max-w-xs sm:max-w-max text-center sm:text-left"
			>
				<span class="underline underline-offset-8 decoration-madental-red decoration-4">Your D</span
				>estination for Dental Needs
			</h1>
			<p
				class=" text-sm md:text-base mb-8 sm:self-start text-justify font-montserrat max-w-72 sm:max-w-md"
			>
				Madental Supplies, specializing in the sale of dental medical products. We aim to provide
				all the materials and tools that dentists need to complete their work efficiently and
				effectively.
			</p>
			<div class="flex justify-center sm:justify-start space-x-4 w-full">
				<a
					href="tel:009671403025"
					class=" bg-madental-red hover:bg-red-700 text-white font-montserrat font-light py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out"
				>
					Call now
				</a>
				<a
					href="mailto:info@example.com"
					class=" bg-madental-red hover:bg-red-700 text-white font-montserrat font-light py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out"
				>
					Write to us
				</a>
			</div>
		</div>
	</div>
</div>
