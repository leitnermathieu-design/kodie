<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let mounted = $state(false);
	
	onMount(() => {
		mounted = true;
	});

	// Mock lesson data for Space Artists
	const lesson = {
		title: "Space Artists",
		module: "Module 3: Image Creation",
		progress: 15,
		content: `
			<p class="mb-4 text-lg">Ready to become a <strong>Space Artist</strong>? 👨‍🚀🎨 Today we'll learn how to ask the AI to draw amazing pictures of other planets, aliens, and cool spaceships!</p>
			
			<h3 class="text-2xl font-bold text-secondary mt-8 mb-4">Painting with Words</h3>
			<p class="mb-4 text-lg">Just like before, we use a <span class="badge badge-secondary text-white font-bold text-lg p-3">Prompt</span>. But this time instead of talking, we're <em>painting</em> with our words!</p>
			
			<div class="bg-base-200 p-6 rounded-2xl border-l-4 border-secondary my-8">
				<p class="font-bold text-xl mb-2">💡 Kodie's Tip:</p>
				<p class="text-lg">For images, describe exactly what you want to see! Colors, style, and lighting. Instead of just "a spaceship", try "a glowing neon spaceship faster than light flying through a purple nebula, 3D animated style". Feel free to try it out in the chat on the right!</p>
			</div>
		`,
	};

	let chatInput = $state('');
	let generatedImageUrl = $state('');
	let isGenerating = $state(false);

	function handleAction() {
		if (chatInput.trim() === '') return;
		isGenerating = true;
		
		// Simulate network delay for image generation
		setTimeout(() => {
			isGenerating = false;
			// A reliable unsplash placeholder for space/spaceship
			generatedImageUrl = 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=600&auto=format&fit=crop';
		}, 1500);
	}
</script>

<svelte:head>
	<title>{lesson.title} - Kodie</title>
</svelte:head>

<div class="flex flex-col lg:flex-row gap-6 min-h-[calc(100vh-160px)]">
	
	<!-- LEFT COLUMN: LESSON CONTENT (60%) -->
	<div class="flex-[3] flex flex-col gap-6">
		
		{#if mounted}
			<!-- Progress & Header -->
			<div 
				class="bg-white rounded-[2rem] p-8 shadow-sm border border-base-300 border-4 border-l-secondary"
				in:fly={{ y: 20, duration: 600, delay: 100 }}
			>
				<div class="flex items-center justify-between mb-6">
					<div class="badge badge-ghost font-bold text-gray-500 p-4 border-2">{lesson.module}</div>
					
					<!-- Progress bar -->
					<div class="flex items-center gap-3 w-1/3">
						<span class="text-sm font-bold text-gray-400">Progress</span>
						<progress class="progress progress-secondary w-full shadow-inner" value={lesson.progress} max="100"></progress>
						<span class="text-sm font-bold text-secondary">{lesson.progress}%</span>
					</div>
				</div>
				
				<h1 class="text-4xl md:text-5xl font-black font-['Fredoka'] mb-6 text-gray-800">
					{lesson.title}
				</h1>
				
				<!-- Render safe HTML (for mocked text body) -->
				<div class="prose prose-lg max-w-none text-gray-600 font-['Nunito'] leading-relaxed">
					{@html lesson.content}
				</div>
			</div>

			<!-- Navigation Buttons -->
			<div 
				class="flex justify-between items-center mt-auto pt-4"
				in:fade={{ duration: 600, delay: 300 }}
			>
				<a href="/dashboard" class="btn btn-ghost btn-lg rounded-full font-bold hover:bg-white text-gray-500">
					⬅️ Back to Missions
				</a>
				<button class="btn btn-secondary btn-lg rounded-full px-8 shadow-lg shadow-secondary/30 font-bold hover:scale-105 transition-transform text-white">
					Next Lesson ➡️
				</button>
			</div>
		{/if}

	</div>


	<!-- RIGHT COLUMN: INTERACTIVE AI PLAYGROUND (40%) -->
	<div class="flex-[2] flex flex-col">
		{#if mounted}
			<div 
				class="bg-gradient-to-b from-purple-50 to-pink-100 rounded-[2rem] p-2 shadow-inner border border-white flex flex-col flex-grow h-full relative overflow-hidden text-gray-800 border-4 border-deep-space shadow-[4px_4px_0_#0F172A]"
				in:fly={{ x: 20, duration: 600, delay: 200 }}
			>
				<!-- Glass Header for Interactive Area -->
				<div class="bg-white/60 backdrop-blur-md rounded-t-[1.5rem] rounded-b-xl p-4 flex items-center justify-between shadow-sm z-10 border border-white/80 m-2">
					<div class="flex items-center gap-3">
						<div class="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-xl shadow-md text-white border-2 border-white">
							🎨
						</div>
						<div>
							<h3 class="font-bold text-gray-800 tracking-tight font-['Fredoka']">Kodie Artist</h3>
							<p class="text-xs text-secondary font-bold flex items-center gap-1">
								<span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span> Ready to paint
							</p>
						</div>
					</div>
				</div>

				<!-- Chat / Interactive Space -->
				<div class="flex-grow p-6 flex flex-col gap-4 overflow-y-auto z-10">
					<!-- Bot Message -->
					<div class="chat chat-start">
						<div class="chat-image avatar">
							<div class="w-10 rounded-full shadow-sm bg-white p-1">
								<div class="w-full h-full bg-secondary rounded-full flex items-center justify-center text-sm text-white">🎨</div>
							</div>
						</div>
						<div class="chat-header text-xs opacity-50 ml-1 mb-1 font-bold text-gray-600">Kodie</div>
						<div class="chat-bubble bg-white text-gray-700 shadow-sm border border-gray-100 font-['Nunito']">
							Try describing a planet or spaceship you want me to draw!
						</div>
					</div>
					
					{#if generatedImageUrl}
					<div class="chat chat-end" in:fade>
						<div class="chat-bubble bg-secondary text-white shadow-sm p-4 w-64 max-w-full">
							<img src={generatedImageUrl} alt="Generated space art" class="rounded-xl w-full object-cover shadow-sm mb-2" />
							<p class="text-sm italic opacity-90 text-center">"{chatInput}"</p>
						</div>
					</div>
					{/if}

					{#if isGenerating}
					<div class="chat chat-end" in:fade>
						<div class="chat-bubble bg-secondary text-white shadow-sm flex gap-2 items-center">
							<span class="loading loading-dots loading-sm"></span> Painting...
						</div>
					</div>
					{/if}
				</div>

				<!-- Input Area -->
				<div class="p-4 bg-white/70 backdrop-blur-md rounded-[1.5rem] mt-auto m-2 shadow-sm border border-white z-10 flex gap-2">
					<input 
						type="text" 
						placeholder="A glowing neon spaceship..." 
						class="input input-bordered w-full rounded-2xl bg-white/80 focus:bg-white border-0 shadow-inner text-gray-800"
						bind:value={chatInput}
						onkeydown={(e) => e.key === 'Enter' && handleAction()}
					/>
					<button 
						class="btn btn-secondary btn-circle shadow-lg shadow-secondary/30 hover:scale-110 transition-transform"
						onclick={handleAction}
						disabled={isGenerating || chatInput.trim() === ''}
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-white">
							<path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
						</svg>
					</button>
				</div>
			</div>
		{/if}
	</div>

</div>

<style>
	/* Keep nice scrollbars for the chat */
	::-webkit-scrollbar {
		width: 8px;
	}
	::-webkit-scrollbar-track {
		background: transparent;
	}
	::-webkit-scrollbar-thumb {
		background: #e5e7eb;
		border-radius: 4px;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #d1d5db;
	}
</style>
