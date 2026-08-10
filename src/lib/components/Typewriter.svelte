<script lang="ts">
	let { texts }: { texts: string[] } = $props();
	let showCursor = $state(false);
	let displayTexts = $state<string[]>(['', '']);
	let hasAnimated = $state(false);
	let aboutSectionRef: HTMLDivElement | undefined;
	
	$effect(() => {
		if (typeof window !== 'undefined') {
			hasAnimated = !!sessionStorage.getItem('typewriterAnimated');
			if (hasAnimated) {
				displayTexts = [...texts];
				showCursor = true;
			} else {
				// Set up IntersectionObserver
				const observer = new IntersectionObserver((entries) => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							startTyping();
							observer.unobserve(entry.target);
						}
					});
				}, { threshold: 0.3 });
				
				if (aboutSectionRef) {
					observer.observe(aboutSectionRef);
				}

				return () => observer.disconnect();
			}
		}
	});

	async function startTyping() {
		const typingSpeed = 15;
		let charIndex1 = 0;
		let charIndex2 = 0;

		const typeFirst = async () => {
			while (charIndex1 < texts[0].length) {
				displayTexts[0] += texts[0].charAt(charIndex1);
				charIndex1++;
				await new Promise(r => setTimeout(r, typingSpeed));
			}
			typeSecond();
		};

		const typeSecond = async () => {
			while (charIndex2 < texts[1].length) {
				displayTexts[1] += texts[1].charAt(charIndex2);
				charIndex2++;
				await new Promise(r => setTimeout(r, typingSpeed));
			}
			showCursor = true;
			sessionStorage.setItem('typewriterAnimated', 'true');
		};

		typeFirst();
	}
</script>

<div bind:this={aboutSectionRef} class="prose prose-invert prose-p:font-body-lg prose-p:text-body-lg prose-p:text-on-background prose-p:leading-relaxed max-w-none">
	<p class="typewriter-text">{displayTexts[0]}</p>
	<p class="typewriter-text mt-4">
		{displayTexts[1]}
		{#if showCursor}
			<span class="typing-cursor visible"></span>
		{/if}
	</p>
</div>
