<script lang="ts">
	import '../app.css'; // Global Tailwind styles
	import { appState } from '$lib/store/app.svelte';

	let { children } = $props();
</script>

<div class="min-h-screen bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 text-base-content font-sans flex flex-col relative overflow-x-hidden">
	<!-- Floating Glassmorphism Header -->
	<div class="fixed top-0 w-full z-50 px-4 py-4 pointer-events-none transition-all duration-300">
		<header class="max-w-6xl mx-auto navbar bg-white/70 backdrop-blur-md text-base-content shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-6 rounded-[2rem] border border-white/50 pointer-events-auto">
			<div class="flex-1">
				<a href="/" class="flex items-center gap-2 group hover:opacity-80 transition-opacity">
					<div class="w-10 h-10 bg-gradient-to-tr from-primary to-accent rounded-xl flex items-center justify-center text-white text-xl shadow-inner shadow-white/30 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
						✨
					</div>
					<span class="text-2xl font-black tracking-tight font-['Fredoka'] bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
						Kodie
					</span>
				</a>
			</div>
			
			<div class="flex-none gap-2">
				{#if appState.currentLearningPath}
					<div class="hidden sm:flex badge bg-gradient-to-r from-accent to-secondary border-none text-white px-4 py-3 shadow-md rounded-full font-bold text-sm">
						{appState.currentLearningPath.title}
					</div>
				{/if}
				
				<ul class="menu menu-horizontal px-1 gap-2 hidden md:flex">


					<li>
						<a 
							href="/dashboard" 
							class="rounded-full px-5 py-2.5 font-bold text-gray-600 hover:text-secondary hover:bg-secondary/10 transition-colors"
						>
							Dashboard
						</a>
					</li>
					<li>
						<a 
							href="/achievements" 
							class="rounded-full px-5 py-2.5 font-bold text-gray-600 hover:text-warning hover:bg-warning/10 transition-colors"
						>
							Medals
						</a>
					</li>
				</ul>

				<!-- Action Button -->
				<button class="btn btn-primary rounded-full px-6 shadow-primary/30 shadow-lg hover:scale-105 transition-transform font-bold ml-2">
					Play Now 🚀
				</button>
			</div>
		</header>
	</div>

	<!-- Add padding top so content isn't hidden under the fixed header -->
	<main class="w-full pt-32 pb-6 px-4 flex-grow flex flex-col">
		{@render children()}
	</main>
</div>
