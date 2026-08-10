<script lang="ts">
	let scrolled = $state(false);
	let mobileMenuOpen = $state(false);
	let activeSection = $state('home');

	const sections = ['home', 'about', 'stack', 'projects', 'contact'];

	$effect(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;

			let current = 'home';
			for (let i = sections.length - 1; i >= 0; i--) {
				const section = document.getElementById(sections[i]);
				if (section) {
					const sectionTop = section.offsetTop - 200;
					if (window.scrollY >= sectionTop) {
						current = sections[i];
						break;
					}
				}
			}
			activeSection = current;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function handleAnchorClick(e: MouseEvent, href: string) {
		e.preventDefault();
		const target = document.querySelector(href);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
		mobileMenuOpen = false;
	}
</script>

<nav class="fixed top-0 w-full border-b border-transparent transition-all duration-300 z-50 {scrolled ? 'glass scrolled' : ''}">
	<div class="flex justify-between items-center px-margin-mobile md:px-gutter py-5 max-w-container-max mx-auto w-full z-50">
		<a class="flex items-center gap-3 font-headline-md text-headline-md font-bold text-on-background tracking-tight hover:scale-105 transition-transform" href="#home" on:click={(e) => handleAnchorClick(e, '#home')}>
			<img src="/images/logo.svg" alt="SULTONI.DEV Logo" class="w-20 h-auto" />
		</a>    
		<div class="hidden md:flex items-center space-x-8">
			{#each ['home', 'about', 'stack', 'projects'] as section}
				<a 
					class="nav-link text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 pb-1 font-label-caps text-[18px] leading-tight {activeSection === section ? 'active' : ''}"
					data-section={section}
					href={`#${section}`}
					on:click={(e) => handleAnchorClick(e, `#${section}`)}
				>
					{section.charAt(0).toUpperCase() + section.slice(1)}
				</a>
			{/each}
		</div>
		<div class="hidden md:flex items-center">
			<a 
				class="nav-link bg-primary/10 text-primary px-5 py-2.5 rounded-lg font-label-caps text-[18px] font-semibold hover:bg-primary/20 transition-all duration-300 text-center {activeSection === 'contact' ? 'active' : ''}"
				data-section="contact"
				href="#contact"
				on:click={(e) => handleAnchorClick(e, '#contact')}
			>
				Contact
			</a>
		</div>
		<button class="md:hidden text-on-background p-2 rounded-lg hover:bg-surface-container-low transition-colors" on:click={() => mobileMenuOpen = !mobileMenuOpen}>
			<span class="material-symbols-outlined text-2xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
		</button>
	</div>

	<!-- Overlay -->
	<div 
		class="fixed inset-0 bg-black/50 transition-all duration-300 z-40 md:hidden {mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}"
		on:click={() => mobileMenuOpen = false}
	></div>

	<!-- Sidebar -->
	<div 
		class="fixed top-0 right-0 h-screen w-72 glass shadow-xl transform transition-transform duration-300 z-50 md:hidden {mobileMenuOpen ? '' : 'translate-x-full'}"
	>
		<div class="flex items-center justify-between p-5 border-b border-outline-variant">
			<h2 class="font-semibold text-lg">Menu</h2>
			<button on:click={() => mobileMenuOpen = false} class="text-2xl">
				✕
			</button>
		</div>

		<div class="px-6 py-5 space-y-3">
			{#each ['home', 'about', 'stack', 'projects'] as section}
				<a 
					class="nav-link-mobile block py-2.5 text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 {activeSection === section ? 'active' : ''}"
					href={`#${section}`}
					on:click={(e) => handleAnchorClick(e, `#${section}`)}
				>
					{section.charAt(0).toUpperCase() + section.slice(1)}
				</a>
			{/each}

			<a 
				class="mt-5 block w-full bg-primary text-[#13181A] px-5 py-3 rounded-lg font-semibold hover:bg-[#b8e600] transition-all duration-300 text-center"
				href="#contact"
				on:click={(e) => handleAnchorClick(e, '#contact')}
			>
				Contact
			</a>
		</div>
	</div>
</nav>

<style>
	.nav-link:not([data-section="contact"])::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 50%;
		transform: translateX(-50%) scaleX(0);
		width: 100%;
		height: 2px;
		background-color: #ff0fafff;
		transition: transform 0.3s ease;
	}

	.nav-link:not([data-section="contact"]):hover::after,
	.nav-link.active:not([data-section="contact"])::after {
		transform: translateX(-50%) scaleX(1);
	}

	.nav-link.active:not([data-section="contact"]) {
		color: #ff0fafff !important;
		font-weight: 700 !important;
	}

	.nav-link.active[data-section="contact"],
	.nav-link[data-section="contact"]:hover {
		box-shadow: 0 0 0 2px rgba(255, 15, 175, 0.5);
	}

	.nav-link-mobile.active {
		color: #ff0fafff !important;
		font-weight: 700 !important;
	}

	#navbar.scrolled {
		background-color: transparent !important;
		backdrop-filter: blur(5px);
		border-color: rgba(51, 63, 67, 0.5);
	}
</style>
