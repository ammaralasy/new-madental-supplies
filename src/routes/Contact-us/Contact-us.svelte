<script lang="ts">
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
	const classDiv = 'flex items-center mb-4';
	const classImg = 'h-4 mr-2';
	const classP = 'text-md md:text-lg';
	const contacts = [
		{
			id: 1,
			src: './placeholder.png',
			alt: 'our addres details in Sanaa',
			text: "Sana'a - Alwahda street, Near Alkhawlani Building"
		},
		{ id: 2, src: './wifi-signal.png', alt: 'phone number in sanaa', text: '+967 1 403025' },
		{
			id: 3,
			src: './placeholder.png',
			alt: 'our address details in aden',
			text: 'Aden - Alkahera, Near Alrahman Mosque'
		},
		{ id: 4, src: './wifi-signal.png', alt: 'phone number in aden', text: '+967 2 395002' }
	];
</script>

<div class="bg-red-600 w-full h-screen flex justify-center" use:scrollRef={'Contact'} id="Contact">
	<div
		class="text-center text-white font-montserrat flex flex-col sm:flex-row items-center justify-center w-full"
	>
		<div class="w-1/3">
			<h1 class=" text-2xl underline sm:no-underline sm:text-3xl md:text-4xl font-bold mb-8">
				<span class="no-underline sm:underline">Conta</span>ct Us
			</h1>
		</div>

		<div class="flex flex-col items-start justify-center w-2/3 text-left">
			{#each contacts as contact (contact.id)}
				<div class={classDiv}>
					<img class={classImg} src={contact.src} alt={contact.alt} />
					<p class={classP}>{contact.text}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
