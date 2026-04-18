<script lang="ts">
	import { fly } from 'svelte/transition';

	// Mock achievements data
	const achievements = [
		{
			id: "first-login",
			title: "Space Explorer",
			description: "Started your Kodie adventure!",
			icon: "🚀",
			color: "bg-primary",
			unlocked: true,
			date: "Oct 15, 2026"
		},
		{
			id: "first-prompt",
			title: "First Words",
			description: "Talked to your AI buddy for the first time.",
			icon: "💬",
			color: "bg-accent",
			unlocked: true,
			date: "Oct 16, 2026"
		},
		{
			id: "image-wizard",
			title: "Artistic Vision",
			description: "Created 5 amazing AI images.",
			icon: "🎨",
			color: "bg-secondary",
			unlocked: true,
			date: "Oct 17, 2026"
		},
		{
			id: "story-maker",
			title: "Master Storyteller",
			description: "Wrote a 10-page interactive story.",
			icon: "📚",
			color: "bg-info",
			unlocked: false,
			date: null
		},
		{
			id: "fast-learner",
			title: "Speedy Learner",
			description: "Finished 3 lessons in a single day.",
			icon: "⚡",
			color: "bg-warning",
			unlocked: false,
			date: null
		},
		{
			id: "ai-friend",
			title: "Best Buddies",
			description: "Talked to Kodie every day for a week.",
			icon: "🧸",
			color: "bg-success",
			unlocked: false,
			date: null
		},
		{
			id: "coding-ninja",
			title: "Code Ninja",
			description: "Wrote your first mini-game using AI.",
			icon: "💻",
			color: "bg-primary",
			unlocked: false,
			date: null
		},
		{
			id: "bug-squasher",
			title: "Bug Squasher",
			description: "Fixed a tricky error without panicking.",
			icon: "🐛",
			color: "bg-error",
			unlocked: false,
			date: null
		},
		{
			id: "space-commander",
			title: "Space Commander",
			description: "Completed every single mission in the AI Lab.",
			icon: "🌌",
			color: "bg-accent",
			unlocked: false,
			date: null
		},
		{
			id: "creative-genius",
			title: "Creative Genius",
			description: "Combined a bedtime story with an AI image.",
			icon: "🧠",
			color: "bg-info",
			unlocked: false,
			date: null
		}
	];
	
	const unlockedCount = achievements.filter(a => a.unlocked).length;
</script>

<svelte:head>
	<title>Achievements | Kodie</title>
</svelte:head>

<div class="max-w-6xl mx-auto space-y-12 pb-20 w-full" in:fly={{ y: 20, duration: 600 }}>
	<!-- Header -->
	<div class="bg-white rounded-[2rem] p-8 border-4 border-deep-space shadow-[8px_8px_0_#0F172A] relative overflow-hidden flex flex-col items-center gap-6 text-center">
		<!-- Decorative bg -->
		<div class="absolute -left-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
		<div class="absolute -right-20 -bottom-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
		
		<div class="w-32 h-32 bg-gradient-to-tr from-warning to-accent rounded-full border-4 border-deep-space shadow-[4px_4px_0_#0F172A] flex items-center justify-center text-6xl z-10 animate-bounce">
			🥇
		</div>
		
		<div class="z-10 w-full max-w-2xl">
			<h1 class="text-4xl md:text-5xl font-black font-heading text-deep-space mb-4">Trophy Room</h1>
			<p class="text-xl text-neutral/70 font-bold mb-6">Explore your medals and see what you can unlock next!</p>
			
			<div class="badge badge-error badge-lg font-bold p-4 border-none text-white shadow-sm text-lg w-full sm:w-auto">
				{unlockedCount} / {achievements.length} Medals Unlocked
			</div>
		</div>
	</div>

	<!-- Medals Grid -->
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each achievements as achievement, i}
			<div 
				class="bg-base-100 rounded-3xl p-6 border-4 border-deep-space shadow-[6px_6px_0_#0F172A] transition-all duration-300 relative group {achievement.unlocked ? 'hover:-translate-y-2 hover:shadow-[10px_10px_0_#0F172A]' : 'opacity-80 grayscale-[30%]'}"
				in:fly={{ y: 30, duration: 500, delay: i * 100 }}
			>
				{#if !achievement.unlocked}
					<div class="absolute inset-0 bg-base-200/50 rounded-3xl z-20 flex flex-col items-center justify-center backdrop-blur-[1px]">
						<div class="bg-base-100 p-3 rounded-full border-2 border-deep-space shadow-md mb-2">
							<span class="text-2xl">🔒</span>
						</div>
						<span class="font-bold text-deep-space px-4 py-1 bg-white/80 rounded-full text-sm">Locked</span>
					</div>
				{/if}

				<div class="flex flex-col items-center text-center relative z-10 h-full">
					<div class="w-24 h-24 {achievement.color} text-white rounded-[2rem] border-4 border-deep-space shadow-[4px_4px_0_#0F172A] flex items-center justify-center text-5xl mb-6 {achievement.unlocked ? 'group-hover:rotate-12 group-hover:scale-110' : ''} transition-all duration-300">
						{achievement.icon}
					</div>
					
					<h3 class="text-2xl font-black font-heading text-deep-space leading-tight mb-3 px-2">{achievement.title}</h3>
					<p class="text-neutral/70 font-medium text-sm md:text-base flex-grow px-2 mb-4">
						{achievement.description}
					</p>

					{#if achievement.unlocked && achievement.date}
						<div class="mt-auto bg-base-200 px-4 py-2 rounded-xl text-xs font-bold text-deep-space/70 w-full border-2 border-dashed border-base-300">
							Unlocked on {achievement.date}
						</div>
					{:else}
						<div class="mt-auto bg-base-200 px-4 py-2 rounded-xl text-xs font-bold text-deep-space/50 w-full border-2 border-dashed border-base-300">
							Keep exploring!
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
