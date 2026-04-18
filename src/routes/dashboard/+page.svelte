<script lang="ts">
	import { fly } from 'svelte/transition';
	import Kodie from '$lib/components/Kodie/kodie.svelte';

	// Mock data for the dashboard
	const user = {
		name: "Astronaut Alex",
		level: 5,
		xp: 1250,
		nextLevelXp: 2000
	};

	const lessons = [
		{
			id: "ai-basics",
			title: "Talk to AI 101",
			description: "Learn how to say hello and give simple instructions to your AI buddy.",
			icon: "🗣️",
			color: "bg-primary",
			progress: 100,
			isCompleted: true,
			link: "/lesson/ai-basics"
		},
		{
			id: "prompt-master",
			title: "Prompt Wizard",
			description: "Discover the magic words to make the AI draw and write amazing things.",
			icon: "🪄",
			color: "bg-accent",
			progress: 60,
			isCompleted: false,
			link: "/lesson/prompt-master"
		},
		{
			id: "image-creator",
			title: "Space Artists",
			description: "Create mind-blowing pictures of alien worlds and cool spaceships.",
			icon: "🎨",
			color: "bg-secondary",
			progress: 15,
			isCompleted: false,
			link: "/lesson/space-artist"
		},
		{
			id: "story-teller",
			title: "Story Machine",
			description: "Write an interactive adventure story with the help of Kodie.",
			icon: "📖",
			color: "bg-info",
			progress: 0,
			isCompleted: false,
			link: "/lesson/story-teller"
		}
	];
</script>

<svelte:head>
	<title>Dashboard | Kodie</title>
</svelte:head>

<div class="max-w-6xl mx-auto space-y-12 pb-20 w-full" in:fly={{ y: 20, duration: 600 }}>
	<!-- Header & Stats -->
	<div class="bg-white rounded-[2rem] p-8 border-4 border-deep-space shadow-[8px_8px_0_#0F172A] relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
		<!-- Decorative bg -->
		<div class="absolute -right-20 -top-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
		
		<div class="w-32 h-32 bg-gradient-to-tr from-electric to-secondary rounded-full border-4 border-deep-space shadow-md flex items-center justify-center text-6xl z-10">
			🧑‍🚀
		</div>
		
		<div class="flex-1 z-10 text-center md:text-left w-full">
			<h1 class="text-4xl md:text-5xl font-black font-heading text-deep-space mb-2">Welcome back, {user.name}!</h1>
			<p class="text-xl text-neutral/70 font-bold mb-6">Ready for your next mission?</p>
			
			<div class="w-full max-w-md mx-auto md:mx-0">
				<div class="flex justify-between text-sm font-bold text-deep-space mb-2">
					<span>Level {user.level}</span>
					<span>{user.xp} / {user.nextLevelXp} XP</span>
				</div>
				<div class="w-full h-6 bg-base-200 rounded-full border-2 border-deep-space overflow-hidden">
					<div 
						class="h-full bg-accent rounded-full border-r-2 border-deep-space transition-all duration-1000"
						style="width: {(user.xp / user.nextLevelXp) * 100}%"
					></div>
				</div>
			</div>
		</div>
		
		<div class="hidden lg:flex gap-4 z-10">
			<div class="w-20 h-20 bg-base-100 rounded-2xl border-4 border-deep-space shadow-[4px_4px_0_#0F172A] flex flex-col items-center justify-center transform hover:-translate-y-1 transition-transform">
				<span class="text-2xl">🔥</span>
				<span class="font-bold text-sm">3 Days</span>
			</div>
			<a href="/achievements" class="w-20 h-20 bg-base-100 rounded-2xl border-4 border-deep-space shadow-[4px_4px_0_#0F172A] flex flex-col items-center justify-center transform hover:-translate-y-1 hover:bg-warning/10 transition-all cursor-pointer">
				<span class="text-2xl">🥇</span>
				<span class="font-bold text-sm">Medals</span>
			</a>
		</div>
	</div>

	<!-- Lesson Selection -->
	<div>
		<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
			<h2 class="text-3xl font-black font-heading text-deep-space flex items-center gap-3">
				<span>📚</span> Your Missions
			</h2>
			<div class="badge badge-primary badge-lg font-bold p-4 border-none text-white shadow-sm">
				{lessons.filter(l => l.isCompleted).length} / {lessons.length} Completed
			</div>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each lessons as lesson, i}
				<a 
					href={lesson.link}
					class="block bg-base-100 rounded-3xl p-6 border-4 border-deep-space shadow-[6px_6px_0_#0F172A] hover:shadow-[10px_10px_0_#0F172A] hover:-translate-y-2 hover:-translate-x-1 transition-all duration-300 relative overflow-hidden group"
					in:fly={{ y: 30, duration: 500, delay: i * 100 }}
				>
					<div class="flex gap-6 relative z-10">
						<div class="w-20 h-20 sm:w-24 sm:h-24 {lesson.color} text-white rounded-2xl border-4 border-deep-space shadow-sm flex items-center justify-center text-4xl shrink-0 group-hover:rotate-6 transition-transform">
							{lesson.icon}
						</div>
						
						<div class="flex-1 flex flex-col justify-center">
							<div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-2">
								<h3 class="text-2xl font-black font-heading text-deep-space leading-tight">{lesson.title}</h3>
								{#if lesson.isCompleted}
									<div class="badge badge-success text-white font-bold border-none shadow-sm shrink-0">Done! ✨</div>
								{/if}
							</div>
							<p class="text-neutral/70 font-medium mb-4 line-clamp-2 text-sm sm:text-base">{lesson.description}</p>
							
							<div class="mt-auto">
								<div class="flex justify-between text-xs font-bold text-deep-space mb-1">
									<span>Progress</span>
									<span>{lesson.progress}%</span>
								</div>
								<div class="w-full h-4 bg-base-200 rounded-full border-2 border-deep-space overflow-hidden">
									<div 
										class="h-full {lesson.progress === 100 ? 'bg-success' : 'bg-primary'} rounded-full transition-all duration-1000 border-r-2 border-deep-space"
										style="width: {lesson.progress}%"
									></div>
								</div>
							</div>
						</div>
					</div>
					
					<!-- Card hover subtle pattern -->
					<div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNlN2U1ZTQiIC8+Cjwvc3ZnPg==')] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 pointer-events-none"></div>
				</a>
			{/each}
		</div>
	</div>
</div>

<div class="kodie-container">
	<Kodie />
</div>
