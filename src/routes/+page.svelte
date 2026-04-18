<script lang="ts">
	// Kodie AI Platform Homepage
	import { appState } from '$lib/store/app.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { inview } from '$lib/actions/inview';

	function triggerAnim(node: HTMLElement, animClass: string) {
		node.classList.remove('opacity-0');
		node.classList.add(animClass);
	}

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});

	const features = [
		{
			title: 'Create Magic',
			description: 'Build your own AI games and tools without complex code.',
			icon: '✨',
			color: 'bg-primary'
		},
		{
			title: 'Explore & Learn',
			description: 'Discover how artificial intelligence actually works under the hood.',
			icon: '🚀',
			color: 'bg-secondary'
		},
		{
			title: 'Safe Space',
			description: 'A protected environment designed specifically for young creators.',
			icon: '🛡️',
			color: 'bg-accent'
		}
	];
</script>

<svelte:head>
	<title>Kodie | Your AI Playground</title>
	<meta name="description" content="Kodie - The AI learning platform for kids" />
</svelte:head>

<div class="space-y-24 pb-20 w-full relative z-10">
	<!-- Hero Section -->
	<section use:inview={{ onEnter: (n) => triggerAnim(n, 'animate-slide-up-fade') }} class="max-w-5xl mx-6 lg:mx-auto relative pt-16 pb-20 lg:pt-28 lg:pb-36 overflow-hidden opacity-0 mt-4">
		<!-- Decorative floating elements -->
		{#if mounted}
			<div class="absolute top-10 left-10 md:left-20 text-6xl opacity-40 animate-bounce drop-shadow-md" style="animation-duration: 3s;" in:fade={{ duration: 1000, delay: 200 }}>
				🤖
			</div>
			<div class="absolute top-20 right-10 md:right-20 text-5xl opacity-40 animate-bounce drop-shadow-md" style="animation-duration: 4s;" in:fade={{ duration: 1000, delay: 400 }}>
				🌟
			</div>
			<div class="absolute bottom-20 left-1/4 text-5xl opacity-40 animate-pulse drop-shadow-md" in:fade={{ duration: 1000, delay: 600 }}>
				💡
			</div>
			<div class="absolute bottom-10 right-1/4 text-6xl opacity-40 animate-wiggle drop-shadow-md" in:fade={{ duration: 1000, delay: 800 }}>
				🎨
			</div>
		{/if}

		<div class="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
				<div use:inview={{ onEnter: (n) => triggerAnim(n, 'animate-crazy-bounce') }} class="flex flex-col items-center opacity-0">
					<div class="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-white font-bold text-sm md:text-base border border-white/50 shadow-sm mb-8 animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.3)]">
						🚀 Version 1.0 is now live!
					</div>

					<h1 class="text-6xl md:text-8xl font-black mb-6 tracking-tight font-['Fredoka'] text-white drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]">
						Meet Kodie.
					</h1>
					<h2 class="text-3xl md:text-5xl font-bold mb-8 text-white/95 font-['Fredoka'] drop-shadow-md">
						Your personal <span class="text-white relative inline-block font-black">
							AI Sidekick
							<svg class="absolute w-full h-3 -bottom-1 left-0 text-white/60" viewBox="0 0 100 10" preserveAspectRatio="none">
								<path d="M0,5 Q50,10 100,2" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round"/>
							</svg>
						</span>
					</h2>
					<p class="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed font-semibold drop-shadow-sm">
						Unleash your creativity. Build, play, and learn how the magic of Artificial Intelligence works!
					</p>
					
					<div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
						<a 
							href="/dashboard" 
							class="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-4 px-10 font-bold text-indigo-950 bg-white shadow-[0_10px_30px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 border-4 border-white/50 text-xl"
						>
							<span class="absolute inset-x-0 bottom-0 h-1 bg-indigo-100 transition-all duration-300 group-hover:h-full"></span>
							<span class="relative flex items-center gap-2">
								Start Building <span class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform inline-block">🚀</span>
							</span>
						</a>
						<button class="btn btn-ghost btn-lg rounded-full px-8 py-4 h-auto text-xl font-bold text-white bg-white/20 hover:bg-white/40 border-2 border-white shadow-sm transition-all drop-shadow-md">
							Watch Video 📺
						</button>
					</div>
				</div>
		</div>
	</section>

    	<!-- Meet Your Sidekicks Section - Arcade Style -->
		<section use:inview={{ onEnter: (n) => triggerAnim(n, 'animate-slide-left-fade') }} class="max-w-6xl mx-auto px-6 opacity-0">
			<div class="bg-indigo-950 p-8 md:p-16 rounded-[4rem] border-8 border-indigo-950/50 shadow-[0_30px_60px_rgba(30,27,75,0.6)] relative overflow-hidden">
				
				<!-- Arcady Top Bar -->
				<div class="text-center mb-16 relative z-10">
					<div class="inline-block py-2 px-6 bg-indigo-900/50 border-2 border-accent text-accent rounded-full font-black text-sm tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
						<span class="animate-pulse inline-block w-2 h-2 bg-accent rounded-full mr-2"></span> Select Character
					</div>
					<h2 class="text-5xl md:text-6xl font-black font-['Fredoka'] text-white drop-shadow-[0_6px_0_#4f46e5] uppercase tracking-tight">
						Meet Your <br class="sm:hidden" /> Sidekicks!
					</h2>
				</div>

				<div class="flex flex-col md:flex-row justify-center gap-6 relative z-10">
					<!-- Sidekick 1: from top -->
					<div use:inview={{ onEnter: (n) => triggerAnim(n, 'animate-slide-down-fade') }} class="opacity-0 flex-1 bg-gradient-to-b from-indigo-900 to-indigo-950 border-4 border-indigo-800 rounded-[2.5rem] p-8 text-center hover:-translate-y-6 hover:border-primary hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 group cursor-pointer">
						<div class="w-28 h-28 mx-auto bg-primary text-white text-6xl rounded-full flex items-center justify-center mb-8 shadow-inner border-4 border-white/20 transform group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300">🤖</div>
						<h3 class="font-black text-2xl text-white mb-2 font-['Fredoka'] uppercase italic tracking-wide group-hover:text-primary transition-colors">Kodie Bot</h3>
						<p class="text-indigo-300 text-sm font-bold uppercase tracking-widest">The Guide</p>
					</div>
					<!-- Sidekick 2: from bottom -->
					<div use:inview={{ onEnter: (n) => { setTimeout(() => triggerAnim(n, 'animate-slide-up-fade'), 200) } }} class="opacity-0 flex-1 bg-gradient-to-b from-indigo-900 to-indigo-950 border-4 border-indigo-800 rounded-[2.5rem] p-8 text-center hover:-translate-y-6 hover:border-accent hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 group cursor-pointer md:translate-y-8">
						<div class="w-28 h-28 mx-auto bg-accent text-white text-6xl rounded-full flex items-center justify-center mb-8 shadow-inner border-4 border-white/20 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">🪄</div>
						<h3 class="font-black text-2xl text-white mb-2 font-['Fredoka'] uppercase italic tracking-wide group-hover:text-accent transition-colors">Prompt Mage</h3>
						<p class="text-indigo-300 text-sm font-bold uppercase tracking-widest">The Wizard</p>
					</div>
					<!-- Sidekick 3: from top -->
					<div use:inview={{ onEnter: (n) => { setTimeout(() => triggerAnim(n, 'animate-slide-down-fade'), 400) } }} class="opacity-0 flex-1 bg-gradient-to-b from-indigo-900 to-indigo-950 border-4 border-indigo-800 rounded-[2.5rem] p-8 text-center hover:-translate-y-6 hover:border-secondary hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 group cursor-pointer">
						<div class="w-28 h-28 mx-auto bg-secondary text-white text-6xl rounded-full flex items-center justify-center mb-8 shadow-inner border-4 border-white/20 transform group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300">🎨</div>
						<h3 class="font-black text-2xl text-white mb-2 font-['Fredoka'] uppercase italic tracking-wide group-hover:text-secondary transition-colors">Space Artist</h3>
						<p class="text-indigo-300 text-sm font-bold uppercase tracking-widest">The Creator</p>
					</div>
					<!-- Sidekick 4: from bottom -->
					<div use:inview={{ onEnter: (n) => { setTimeout(() => triggerAnim(n, 'animate-slide-up-fade'), 600) } }} class="opacity-0 flex-1 bg-gradient-to-b from-indigo-900 to-indigo-950 border-4 border-indigo-800 rounded-[2.5rem] p-8 text-center hover:-translate-y-6 hover:border-info hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 group cursor-pointer md:translate-y-8">
						<div class="w-28 h-28 mx-auto bg-info text-white text-6xl rounded-full flex items-center justify-center mb-8 shadow-inner border-4 border-white/20 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">📖</div>
						<h3 class="font-black text-2xl text-white mb-2 font-['Fredoka'] uppercase italic tracking-wide group-hover:text-info transition-colors">Story Teller</h3>
						<p class="text-indigo-300 text-sm font-bold uppercase tracking-widest">The Author</p>
					</div>
				</div>

				<!-- Subtle glowing orb in background to tie it with rest of the design -->
				<div class="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none"></div>
			</div>
		</section>

	<!-- Features Section -->
	<section use:inview={{ onEnter: (n) => triggerAnim(n, 'animate-slide-right-fade') }} class="max-w-6xl mx-auto px-6 opacity-0">
			<div class="text-center mb-16">
				<h2 class="text-4xl md:text-5xl font-black font-['Fredoka'] text-indigo-950 drop-shadow-sm mb-4">Why play with Kodie?</h2>
				<p class="text-xl text-indigo-950/70 font-medium">Everything you need to become an AI expert.</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				{#each features as feature, i}
					<div 
						use:inview={{ onEnter: (n) => { setTimeout(() => triggerAnim(n, 'animate-spin-pop'), i * 150) } }}
						class="card bg-white/60 backdrop-blur-xl shadow-lg border-2 border-white hover:bg-white/80 hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 cursor-pointer group opacity-0"
					>
						<div class="card-body items-center text-center p-10">
							<div class="w-24 h-24 rounded-[2rem] {feature.color} text-white text-5xl flex items-center justify-center mb-8 shadow-inner border-4 border border-white/50 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
								{feature.icon}
							</div>
							<h3 class="card-title text-3xl font-black mb-4 font-['Fredoka'] text-indigo-950">{feature.title}</h3>
							<p class="text-indigo-950/70 leading-relaxed font-medium text-lg">{feature.description}</p>
						</div>
					</div>
				{/each}
			</div>
	</section>



	<!-- Call to Action Banner -->
		<section class="max-w-5xl mx-auto px-6 mb-16">
			<div use:inview={{ onEnter: (n) => triggerAnim(n, 'animate-jelly-pop') }} class="opacity-0 bg-indigo-950/90 backdrop-blur-lg rounded-[3rem] p-12 lg:p-16 text-center text-white relative overflow-hidden shadow-[0_20px_50px_rgba(30,27,75,0.4)] border-4 border-indigo-400/30">
				<!-- Animated background patterns -->
				<div class="absolute top-0 right-0 w-96 h-96 bg-primary opacity-30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 animate-pulse" style="animation-duration: 8s;"></div>
				<div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 animate-pulse" style="animation-duration: 6s;"></div>
				
				<div class="relative z-10 flex flex-col items-center">
					<h2 class="text-5xl md:text-6xl font-black mb-6 font-['Fredoka'] leading-tight">Ready to create something amazing?</h2>
					<p class="text-2xl mb-12 opacity-90 max-w-2xl mx-auto font-medium text-indigo-100">
						Join thousands of other kids who are already building the future with Kodie.
					</p>
					<a 
						href="/dashboard" 
						class="btn bg-white text-indigo-950 border-none hover:bg-gray-100 btn-lg rounded-full px-16 py-5 h-auto text-2xl font-black hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300"
					>
						Let's Go! 🎉
					</a>
				</div>
			</div>
		</section>
</div>

<style>
	@keyframes wiggle {
		0%, 100% { transform: rotate(-3deg); }
		50% { transform: rotate(3deg); }
	}
	.animate-wiggle {
		animation: wiggle 3s ease-in-out infinite;
	}
</style>
