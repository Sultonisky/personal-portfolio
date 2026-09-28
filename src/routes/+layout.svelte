<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="apple-touch-icon" href="/images/logo.svg" />
</svelte:head>

<!-- Page-wide Grid Lines Background -->
<div class="page-grid-lines scanline-effect" aria-hidden="true">
	<span class="grid-line-glow"></span>
	<span class="grid-line-glow"></span>
	<span class="grid-line-glow"></span>
	<span class="grid-line-glow"></span>
	<span class="grid-line-glow"></span>
	<span class="grid-line-glow"></span>
	<span class="grid-line-glow"></span>
	<span class="grid-line-glow"></span>
	<span class="grid-line-glow"></span>
	<span class="grid-line-glow"></span>
</div>

<!-- Floating Particles -->
<div class="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
	<div class="floating-particle" style="width: 4px; height: 4px; top: 15%; left: 10%; animation-delay: 0s;"></div>
	<div class="floating-particle" style="width: 6px; height: 6px; top: 25%; left: 85%; animation-delay: 0.5s;"></div>
	<div class="floating-particle" style="width: 3px; height: 3px; top: 45%; left: 5%; animation-delay: 1s;"></div>
	<div class="floating-particle" style="width: 5px; height: 5px; top: 60%; left: 90%; animation-delay: 1.5s;"></div>
	<div class="floating-particle" style="width: 4px; height: 4px; top: 80%; left: 15%; animation-delay: 2s;"></div>
	<div class="floating-particle" style="width: 3px; height: 3px; top: 35%; left: 75%; animation-delay: 2.5s;"></div>
	<div class="floating-particle" style="width: 5px; height: 5px; top: 70%; left: 60%; animation-delay: 0.3s;"></div>
	<div class="floating-particle" style="width: 4px; height: 4px; top: 20%; left: 50%; animation-delay: 1.2s;"></div>
	<div class="floating-particle" style="width: 3px; height: 3px; top: 90%; left: 40%; animation-delay: 1.8s;"></div>
	<div class="floating-particle" style="width: 6px; height: 6px; top: 50%; left: 25%; animation-delay: 2.2s;"></div>
</div>

<!-- Subtle falling letter constellation -->
<div class="falling-letters" aria-hidden="true">
	<span class="falling-letter">s</span>
	<span class="falling-letter">v</span>
	<span class="falling-letter">i</span>
	<span class="falling-letter">a</span>
	<span class="falling-letter">s</span>
	<span class="falling-letter">v</span>
	<span class="falling-letter">i</span>
	<span class="falling-letter">a</span>
	<span class="falling-letter">s</span>
	<span class="falling-letter">v</span>
	<span class="falling-letter">i</span>
	<span class="falling-letter">a</span>
</div>

<!-- Secondary falling letters layer -->
<div class="falling-letters falling-letters-secondary" aria-hidden="true">
	<span class="falling-letter">t</span>
	<span class="falling-letter">o</span>
	<span class="falling-letter">n</span>
	<span class="falling-letter">i</span>
	<span class="falling-letter">t</span>
	<span class="falling-letter">o</span>
	<span class="falling-letter">n</span>
	<span class="falling-letter">i</span>
</div>

{@render children()}
