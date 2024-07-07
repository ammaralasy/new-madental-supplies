<script lang="ts">
	import emailjs from 'emailjs-com';
	import { fade, fly } from 'svelte/transition';
	import { scrollRef } from 'svelte-scrolling';
	// Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_USER_ID with your actual EmailJS credentials
	const SERVICE_ID = 'default_service';
	const TEMPLATE_ID = 'template_v0542hk';
	const USER_ID = 'GNYXlU_8JuGuwqrZP';
	let firstName = '';
	let lastName = '';
	let phone = '';
	//let name = firstName + ' ' + lastName;
	let email = '';
	let message = '';
	let showSuccessAlert = false;
	const testSubmit = () => {
		console.log('Sumbit has been pressed');
	};
	const sendEmail = () => {
		//event.stopPropagation();
		const templateParams = {
			email: email,
			message: message,
			phone: phone,
			firstName: firstName,
			lastName: lastName
		};

		emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
			(response) => {
				console.log('Email sent successfully!', response.status, response.text);
				// Reset form fields
				firstName = '';
				lastName = '';
				phone = '';
				email = '';
				message = '';
				showSuccessAlert = true;
				setTimeout(() => {
					showSuccessAlert = false;
				}, 3000); // Hide the alert after 3 seconds
			},
			(error) => {
				console.error('Failed to send email:', error);
			}
		);
	};
</script>

<main class="flex items-center justify-center max-h-max py-28" id="write-to-us" use:scrollRef={'write-to-us'}>
	<div class="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full font-montserrat">
		<h1 class="text-3xl font-bold mb-2">Write To Us</h1>
		<p class="mb-6 text-gray-700">When you are looking for your dental needs</p>
		<form class="space-y-4" on:submit|preventDefault={sendEmail}>
			<div class="flex flex-wrap -mx-2">
				<div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="first-name">
						First Name*
					</label>
					<input
						class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="first-name"
						type="text"
						required
						bind:value={firstName}
					/>
				</div>
				<div class="w-full md:w-1/2 px-2">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="last-name">
						Last Name*
					</label>
					<input
						class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="last-name"
						type="text"
						required
						bind:value={lastName}
					/>
				</div>
			</div>
			<div class="flex flex-wrap -mx-2">
				<div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Email* </label>
					<input
						class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						required
						bind:value={email}
					/>
				</div>
				<div class="w-full md:w-1/2 px-2">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
						Phone Number*
					</label>
					<input
						class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="phone"
						type="tel"
						required
						bind:value={phone}
					/>
				</div>
			</div>
			<div class="mb-6">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="message"> Message* </label>
				<textarea
					class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="message"
					required
					bind:value={message}
				></textarea>
			</div>
			<div class="flex items-center justify-between">
				<button
					class="bg-madental-red hover:bg-red-700 w-28 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline ml-auto"
					type="submit"
				>
					Send
				</button>
			</div>
		</form>

		{#if showSuccessAlert}
			<div class="bg-red-100 border border-red-400 text-red-700 rounded font-bold  px-4 py-3 fixed right-0 top-[95px] z-20"   out:fade in:fly={{ duration: 300, x: 100, opacity: 0.5}}>Message sent successfully!</div>
		{/if}
	</div>
</main>
