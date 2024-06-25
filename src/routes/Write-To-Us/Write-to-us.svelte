<main class="flex items-center justify-center h-screen">
	<div class="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full font-montserrat">
		<h1 class="text-3xl font-bold mb-2">Write To Us</h1>
		<p class="mb-6 text-gray-700">When you are looking for your dental needs</p>
		<form class="space-y-4">
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
					/>
				</div>
				<div class="w-full md:w-1/2 px-2">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="phone-number">
						Phone Number*
					</label>
					<input
						class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="phone-number"
						type="tel"
						required
					/>
				</div>
			</div>
			<div class="mb-6">
				<label class="block text-gray-700 text-sm font-bold mb-2" for="message"> Message* </label>
				<textarea
					class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="message"
					required
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
	</div>
</main>
