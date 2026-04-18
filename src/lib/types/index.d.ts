export namespace Kodie {
    export interface User {
        id: string;
        username: string;
        age: number;
        learningPathId: string;
    }

    export interface Prompt {
        id: string;
        content: string;
        timestamp: Date;
    }

    export interface AIResponse {
        id: string;
        promptId: string;
        content: string;
        isSuccess: boolean;
    }

    export interface FeatureCardConfig {
        title: string;
        description: string;
        icon: string;
        step: number;
    }
}
