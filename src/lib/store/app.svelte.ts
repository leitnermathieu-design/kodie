// Svelte 5 Global State using Runes
export interface LearningPath {
    id: string;
    title: string;
    description: string;
    progress: number;
}

class AppState {
    // Reactive rune for the current learning path
    currentLearningPath = $state<LearningPath | null>(null);

    constructor() {
        // Initialize with default state
        this.currentLearningPath = {
            id: 'path-1',
            title: 'Welcome to AI Lab!',
            description: 'Learn the basics of talking to AI.',
            progress: 0
        };
    }
    
    // Derived state representing progress in percentage
    progressPercentage = $derived(this.currentLearningPath ? `${this.currentLearningPath.progress}%` : '0%');

    updateProgress(newProgress: number) {
        if (this.currentLearningPath) {
            this.currentLearningPath.progress = newProgress;
        }
    }
}

export const appState = new AppState();
