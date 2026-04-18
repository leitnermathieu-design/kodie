<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let mounted = $state(false);
	
	onMount(() => {
		mounted = true;
	});

	const lesson = {
		title: "Prompt Wizard",
		module: "Module 2: Advanced Prompts",
		progress: 60,
		content: `
			<p class="mb-4 text-lg">It's time to put on your wizard hat! 🪄 Let's learn how to construct complex spells (prompts).</p>
			
			<h3 class="text-2xl font-bold text-accent mt-8 mb-4">Adding Adjectives</h3>
			<p class="mb-4 text-lg">Describing what you want in detail helps the AI understand the vibe. Instead of a "castle", ask for a "floating crystal castle in the sky at magical sunset".</p>
			
			<div class="bg-base-200 p-6 rounded-2xl border-l-4 border-accent my-8">
				<p class="font-bold text-xl mb-2">💡 Kodie's Tip:</p>
				<p class="text-lg">Try casting a magic spell by giving me 3 crazy adjectives for an animal and see what I produce!</p>
			</div>
		`,
	};

	let chatInput = $state('');

	function handleAction() {
		if (chatInput.trim() === '') return;
		chatInput = '';
	}
</script>

<svelte:head>
	<title>{lesson.title} - Kodie</title>
</svelte:head>

<div class="flex flex-col lg:flex-row gap-6 min-h-[calc(100vh-160px)]">
	<div class="flex-[3] flex flex-col gap-6">
		{#if mounted}
			<div class="bg-white rounded-[2rem] p-8 shadow-sm border border-base-300 border-4 border-l-accent" in:fly={{ y: 20, duration: 600, delay: 100 }}>
				<div class="flex items-center justify-between mb-6">
					<div class="badge badge-ghost font-bold text-gray-500 p-4 border-2">{lesson.module}</div>
					<div class="flex items-center gap-3 w-1/3">
						<span class="text-sm font-bold text-gray-400">Progress</span>
						<progress class="progress progress-accent w-full shadow-inner" value={lesson.progress} max="100"></progress>
						<span class="text-sm font-bold text-accent">{lesson.progress}%</span>
					</div>
				</div>
				<h1 class="text-4xl md:text-5xl font-black font-['Fredoka'] mb-6 text-gray-800">{lesson.title}</h1>
				<div class="prose prose-lg max-w-none text-gray-600 font-['Nunito'] leading-relaxed gap-6">
					{@html lesson.content}
				</div>
			</div>

			<div class="flex justify-between items-center mt-auto pt-4" in:fade={{ duration: 600, delay: 300 }}>
				<a href="/dashboard" class="btn btn-ghost btn-lg rounded-full font-bold hover:bg-white text-gray-500">
					⬅️ Back to Missions
				</a>
				<a href="/lesson/space-artist" class="btn btn-accent btn-lg rounded-full px-8 shadow-lg shadow-accent/30 font-bold hover:scale-105 transition-transform text-white">
					Next Lesson ➡️
				</a>
			</div>
		{/if}
	</div>

	<div class="flex-[2] flex flex-col">
		{#if mounted}
			<div class="bg-gradient-to-b from-orange-50 to-amber-100 rounded-[2rem] p-2 shadow-inner border border-white flex flex-col flex-grow h-full relative overflow-hidden text-gray-800 border-4 border-deep-space shadow-[4px_4px_0_#0F172A]" in:fly={{ x: 20, duration: 600, delay: 200 }}>
				<div class="bg-white/60 backdrop-blur-md rounded-t-[1.5rem] rounded-b-xl p-4 flex items-center justify-between shadow-sm z-10 border border-white/80 m-2">
					<div class="flex items-center gap-3">
						<div class="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-xl shadow-md text-white border-2 border-white">🪄</div>
						<div>
							<h3 class="font-bold text-gray-800 tracking-tight font-['Fredoka']">Prompt Mage</h3>
							<p class="text-xs text-accent font-bold flex items-center gap-1">
								<span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span> Analyzing spells
							</p>
						</div>
					</div>
				</div>
				<div class="flex-grow p-6 flex flex-col gap-4 overflow-y-auto z-10">
					<div class="chat chat-start">
						<div class="chat-image avatar">
							<div class="w-10 rounded-full shadow-sm bg-white p-1">
								<div class="w-full h-full bg-accent rounded-full flex items-center justify-center text-sm text-white">🪄</div>
							</div>
						</div>
						<div class="chat-header text-xs opacity-50 ml-1 mb-1 font-bold text-gray-600">Kodie</div>
						<div class="chat-bubble bg-white text-gray-700 shadow-sm border border-gray-100 font-['Nunito']">Cast some magic! Give me crazy descriptions!</div>
					</div>
				</div>
				<div class="p-4 bg-white/70 backdrop-blur-md rounded-[1.5rem] mt-auto m-2 shadow-sm border border-white z-10 flex gap-2">
					<input type="text" placeholder="A fluffy blue..." class="input input-bordered w-full rounded-2xl bg-white/80 focus:bg-white border-0 shadow-inner text-gray-800" bind:value={chatInput} onkeydown={(e) => e.key === 'Enter' && handleAction()} />
					<button class="btn btn-accent btn-circle shadow-lg shadow-accent/30 hover:scale-110 transition-transform text-white" onclick={handleAction} disabled={chatInput.trim() === ''}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-white">
							<path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
						</svg>
					</button>
				</div>
			</div>
		{/if}
	</div>
</div>
