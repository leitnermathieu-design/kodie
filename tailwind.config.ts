import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'deep-space': '#0F172A',
				'electric': '#7C3AED',
				'neon-mint': '#10B981'
			},
			fontFamily: {
				sans: ['"Nunito"', 'sans-serif'],
				heading: ['"Fredoka"', 'sans-serif']
			},
			keyframes: {
				'wobble-roll': {
					'0%, 100%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(-15deg)' },
					'50%': { transform: 'rotate(15deg)' },
					'75%': { transform: 'rotate(-5deg)' }
				},
				'crazy-bounce': {
					'0%': { transform: 'translateY(100px) scale(0.5)', opacity: '0' },
					'50%': { transform: 'translateY(-20px) scale(1.1)', opacity: '1' },
					'80%': { transform: 'translateY(10px) scale(0.9)' },
					'100%': { transform: 'translateY(0) scale(1)', opacity: '1' }
				},
				'spin-pop': {
					'0%': { transform: 'scale(0) rotate(-180deg)', opacity: '0' },
					'70%': { transform: 'scale(1.2) rotate(20deg)', opacity: '1' },
					'100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' }
				},
				'jelly-pop': {
					'0%': { transform: 'scale3d(1, 1, 1)', opacity: '0' },
					'30%': { transform: 'scale3d(1.25, 0.75, 1)', opacity: '1' },
					'40%': { transform: 'scale3d(0.75, 1.25, 1)' },
					'50%': { transform: 'scale3d(1.15, 0.85, 1)' },
					'65%': { transform: 'scale3d(0.95, 1.05, 1)' },
					'75%': { transform: 'scale3d(1.05, 0.95, 1)' },
					'100%': { transform: 'scale3d(1, 1, 1)', opacity: '1' }
				},
				'slide-up-fade': {
					'0%': { transform: 'translateY(150px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-down-fade': {
					'0%': { transform: 'translateY(-150px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-right-fade': {
					'0%': { transform: 'translateX(-150px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'slide-left-fade': {
					'0%': { transform: 'translateX(150px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				}
			},
			animation: {
				'wobble-roll': 'wobble-roll 0.8s ease-in-out',
                'crazy-bounce': 'crazy-bounce 0.8s cubic-bezier(0.28, 0.84, 0.42, 1) forwards',
                'spin-pop': 'spin-pop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
                'jelly-pop': 'jelly-pop 0.9s both',
                'slide-up-fade': 'slide-up-fade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'slide-down-fade': 'slide-down-fade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'slide-right-fade': 'slide-right-fade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'slide-left-fade': 'slide-left-fade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'
			}
		}
	},
	plugins: [daisyui],
	
	// Playful Professional DaisyUI Theme
	daisyui: {
		themes: [
			{
				kodie: {
					"primary": "#7C3AED", // Electric Purple
					"secondary": "#10B981", // Neon Mint
					"accent": "#F59E0B", // Energetic Amber
					"neutral": "#0F172A", // Deep Space Navy
					"base-100": "#F9FAFB",
					"base-200": "#F3F4F6",
					"info": "#3B82F6",
					"success": "#10B981",
					"warning": "#FBBF24",
					"error": "#EF4444",
				},
			},
		],
	},
} satisfies Config;
