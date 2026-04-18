export function inview(
	node: HTMLElement, 
	{ onEnter, once = true, threshold = 0.1 }: { onEnter?: (node: HTMLElement) => void, once?: boolean, threshold?: number } = {}
) {
	let observer: IntersectionObserver;

	const handleIntersect = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				if (onEnter) onEnter(node);
				if (once) {
					observer.unobserve(node);
				}
			}
		});
	};

	observer = new IntersectionObserver(handleIntersect, { threshold });
	observer.observe(node);

	return {
		destroy() {
			if (observer) observer.disconnect();
		}
	};
}
