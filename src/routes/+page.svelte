<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Typewriter from "$lib/components/Typewriter.svelte";
  import { socialLinks } from "$lib/social-links";

  type GridItem =
    | { type: "stack"; name: string; img: string; level: number; white?: boolean }
    | { type: "filler"; level: number };

  const typewriterTexts = [
    "I'm an Information Systems student from Indonesia and a UX-first full-stack developer. I build web apps that feel intuitive on the surface and stay dependable underneath.",
    "From user flows and accessible interfaces to APIs and data models, I like breaking complex problems down and rebuilding them as simple, maintainable systems.",
  ];

  const productionStack = [
    { name: "Laravel", img: "/images/stacks/laravel.svg", level: 4 },
    { name: "PHP", img: "/images/stacks/php.svg", level: 4 },
    { name: "Python", img: "/images/stacks/python.svg", level: 4 },
    { name: "HTML", img: "/images/stacks/html.svg", level: 4 },
    { name: "CSS", img: "/images/stacks/css.svg", level: 4 },
    { name: "JavaScript", img: "/images/stacks/javascript.svg", level: 4 },
    { name: "MySQL", img: "/images/stacks/mysql.svg", level: 4 },
    { name: "Tailwind CSS", img: "/images/stacks/tailwind.svg", level: 4 },
    {
      name: "Google Apps Script",
      img: "/images/stacks/google-apps-script.svg",
      level: 3,
    },
    { name: "Bootstrap", img: "/images/stacks/bootstrap.svg", level: 3 },
  ];

  const exploringStack = [
    { name: "TypeScript", img: "/images/stacks/ts.svg", level: 3 },
    { name: "Turborepo", img: "/images/stacks/turborepo.svg", level: 2 },
    { name: "NestJS", img: "/images/stacks/nestjs.svg", level: 2 },
    { name: "SvelteKit", img: "/images/stacks/sveltekit.svg", level: 3 },
    { name: "Prisma", img: "/images/stacks/prisma.svg", level: 2 },
    { name: "PostgreSQL", img: "/images/stacks/postgres.svg", level: 2 },
    { name: "Node.js", img: "/images/stacks/nodejs.svg", level: 3 },
    { name: "Markdown", img: "/images/stacks/markdown.svg", level: 2 },
    { name: "Windmill", img: "/images/stacks/windmill.svg", level: 1 },
  ];

  const tools = [
    { name: "Git", img: "/images/stacks/git.svg", level: 3 },
    { name: "GitHub", img: "/images/stacks/github.svg", level: 4 },
    { name: "VSCode", img: "/images/stacks/vscode.svg", level: 4 },
    { name: "Postman", img: "/images/stacks/postman.svg", level: 3 },
    { name: "Docker", img: "/images/stacks/docker.svg", level: 2 },
    { name: "Railway", img: "/images/stacks/railway.svg", level: 2 },
    { name: "Vercel", img: "/images/stacks/vercel.svg", level: 2 },
    { name: "Odoo", img: "/images/stacks/odoo.svg", level: 2 },
    { name: "TablePlus", img: "/images/stacks/tableplus.svg", level: 2 },
    { name: "Laragon", img: "/images/stacks/laragon.svg", level: 3 },
  ];

  const additionalStack = [
    { name: "Alpine.js", img: "/images/stacks/alpinejs.svg", level: 2, white: true },
    { name: "Dart", img: "/images/stacks/dart-mono.svg", level: 2, white: true },
    { name: "Express.js", img: "/images/stacks/expressdotjs.svg", level: 2, white: true },
    { name: "FastAPI", img: "/images/stacks/fastapi.svg", level: 2, white: true },
    { name: "Flutter", img: "/images/stacks/flutter-mono.svg", level: 2, white: true },
    { name: "MongoDB", img: "/images/stacks/mongodb.svg", level: 2, white: true },
    { name: "Nuxt", img: "/images/stacks/nuxt.svg", level: 2, white: true },
    { name: "Pinia", img: "/images/stacks/pinia-mono.svg", level: 2, white: true },
    { name: "Redis", img: "/images/stacks/redis.svg", level: 2, white: true },
    { name: "Sass", img: "/images/stacks/sass.svg", level: 2, white: true },
    { name: "SQLite", img: "/images/stacks/sqlite-mono.svg", level: 2, white: true },
    { name: "Supabase", img: "/images/stacks/supabase-mono.svg", level: 2, white: true },
    { name: "Vite", img: "/images/stacks/vite.svg", level: 2, white: true },
    { name: "Vitest", img: "/images/stacks/vitest.svg", level: 2, white: true },
    { name: "Vue.js", img: "/images/stacks/vuedotjs.svg", level: 2, white: true },
    { name: "Figma", img: "/images/stacks/figma-mono.svg", level: 2, white: true },
    { name: "GitHub Actions", img: "/images/stacks/github-actions.svg", level: 2, white: true },
    { name: "npm", img: "/images/stacks/npm-mono.svg", level: 2, white: true },
    { name: "pnpm", img: "/images/stacks/pnpm-mono.svg", level: 2, white: true },
    { name: "Google Cloud", img: "/images/stacks/googlecloud-mono.svg", level: 2, white: true },
    { name: "GCP API", img: "/images/stacks/gcp-api.svg", level: 2, white: true },
    { name: "SVG", img: "/images/stacks/svg-mono.svg", level: 2, white: true },
    { name: "Composer", img: "/images/stacks/composer-mono.svg", level: 2, white: true },
  ];

  // Combine all items for contribution grid
  const allStackItems: GridItem[] = [
    ...productionStack,
    ...exploringStack,
    ...tools,
    ...additionalStack,
  ].map(
    (item) => ({ ...item, type: "stack" as const }),
  );

  // Fixed filler cells pattern - 9 cells to make 40 total (31 stack + 9 filler), alternating levels for visual consistency
  const fillerCells: GridItem[] = Array.from({ length: 9 }, (_, i) => ({
    type: "filler",
    level: i % 2, // deterministic: alternates 0,1,0,1...
  }));

  // Place fillers at the end for consistent layout
  const gridItems = [...allStackItems, ...fillerCells];

  const personalProjects = [
    {
      name: "CTRL Agent",
      img: "/images/projects/CTRLBuild-White.png",
      link: null,
      desc: "A terminal-first AI coding agent with a full TUI. It connects to your LLM of choice and provides tools for shell access, file editing, LSP diagnostics, web fetch, and code search so you can work through engineering tasks while staying in control.",
      tags: ["OpenCode", "Go", "Python"],
    },
    {
      name: "Scroll",
      img: "/images/projects/logo-scroll.png",
      link: "https://github.com/Sultonisky/Scroll",
      desc: "Self-hosted payroll management for remote-first companies.",
      tags: ["Laravel", "PHP", "CoreUI", "MySQL"],
    },
    {
      name: "CTRL Build",
      img: "/images/projects/CTRLBuild-White.png",
      link: "https://www.ctrl-build.my.id/",
      desc: "This is a modern web application built with React, Vite, and Three.js. It features interactive WebGL particle text systems, fluid cursor effects, and high-performance animations using Lenis scroll.",
      tags: ["React", "Vite", "Three.js", "Lenis"],
    },
    {
      name: "Slogy",
      img: null,
      link: "https://github.com/Sultonisky/Slogy",
      desc: "Laravel activity logging with SHA-256 tamper detection and log verification tools.",
      tags: ["Laravel", "PHP", "Composer"],
    },
    {
      name: "E-KTM Mobile",
      img: "/images/projects/logo_ketupat.png",
      link: null,
      desc: "A comprehensive tuition payment management system for Bina Sarana Informatika University (UBSI). This system enables students to make tuition payments online using various payment methods integrated with the Midtrans payment gateway.",
      tags: [
        "React Native",
        "NestJS",
        "TypeScript",
        "Prisma",
        "PNPM",
        "Turborepo",
        "Midtrans",
      ],
    },
    {
      name: "Bookingin",
      img: "/images/projects/logo-putih.png",
      link: null,
      desc: "Bookingin is a hotel reservation platform built with Laravel 10, MySQL, HTML, CSS, JavaScript, and Bootstrap 5, featuring a frontend for users and a backend for admins. It integrates the Midtrans Payment Gateway with webhook callbacks and email notifications to ensure smooth and secure booking confirmations.",
      tags: ["Laravel", "MySQL", "Bootstrap", "Midtrans"],
    },
  ];

  const clientProjects = [
    {
      name: "Job Portal | Anagata Executive",
      img: "/images/projects/anagata-white.png",
      link: "https://anagataexecutive.co.id/",
      desc: "Anagata Executive is a modern, data-driven Human Resources Recruitment Agency platform built with Laravel. We specialize in connecting exceptional talent with remarkable opportunities through cutting-edge technology, data-driven insights, and human expertise.",
      tags: ["Laravel", "MySQL", "PHP"],
    },
    {
      name: "Titip Kebaikan",
      img: "/images/projects/logo-tb.png",
      link: null,
      desc: "Titip Kebaikan for Yayasan At-Tarbiyah Pintu Air is a comprehensive web-based platform designed for foundation management. It streamlines donation processing, program management, and financial reporting to ensure transparency and efficiency in charitable operations.",
      tags: ["Laravel", "MySQL", "Tailwind", "Bootstrap", "Midtrans"],
    },
  ];

  const featuredProjects = personalProjects
    .filter(({ name }) => name === "Slogy" || name === "Scroll")
    .reverse();
  let featuredProjectIndex = $state(0);
  let featuredProject = $derived(featuredProjects[featuredProjectIndex]);
  let featuredPointerStartX = 0;
  let featuredPointerId = $state<number | null>(null);
  let isFeaturedHovered = false;
  let isFeaturedFocused = false;
  let isFeaturedDragging = false;
  let scheduleFeaturedProjectRotation = () => {};

  function getFeaturedProjectImage(item: (typeof featuredProjects)[number]) {
    return item.img ?? (item.name === "Slogy" ? "/images/projects/slogy-logo-r.png" : null);
  }

  function showFeaturedProject(index: number) {
    featuredProjectIndex = (index + featuredProjects.length) % featuredProjects.length;
    scheduleFeaturedProjectRotation();
  }

  onMount(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let rotationTimeout: ReturnType<typeof setTimeout> | undefined;

    scheduleFeaturedProjectRotation = () => {
      window.clearTimeout(rotationTimeout);

      if (
        isFeaturedHovered ||
        isFeaturedFocused ||
        isFeaturedDragging ||
        document.hidden ||
        reducedMotion.matches
      ) {
        return;
      }

      rotationTimeout = window.setTimeout(() => {
        showFeaturedProject(featuredProjectIndex + 1);
      }, 4_000);
    };

    const handleVisibilityChange = () => scheduleFeaturedProjectRotation();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    reducedMotion.addEventListener("change", handleVisibilityChange);
    scheduleFeaturedProjectRotation();

    return () => {
      window.clearTimeout(rotationTimeout);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      reducedMotion.removeEventListener("change", handleVisibilityChange);
    };
  });

  function handleFeaturedFocusOut(e: FocusEvent) {
    const carousel = e.currentTarget as HTMLElement;
    if (e.relatedTarget instanceof Node && carousel.contains(e.relatedTarget)) return;

    isFeaturedFocused = false;
    scheduleFeaturedProjectRotation();
  }

  function startFeaturedProjectDrag(e: PointerEvent) {
    if (
      e.button !== 0 ||
      (e.target instanceof Element && e.target.closest("a, button"))
    ) {
      return;
    }

    featuredPointerStartX = e.clientX;
    featuredPointerId = e.pointerId;
    isFeaturedDragging = true;
    scheduleFeaturedProjectRotation();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }

  function endFeaturedProjectDrag(e: PointerEvent) {
    if (featuredPointerId !== e.pointerId) return;

    const distance = e.clientX - featuredPointerStartX;
    featuredPointerId = null;
    isFeaturedDragging = false;

    if (Math.abs(distance) > 45) {
      showFeaturedProject(featuredProjectIndex + (distance < 0 ? 1 : -1));
    } else {
      scheduleFeaturedProjectRotation();
    }

    const carousel = e.currentTarget as HTMLElement;
    if (carousel.hasPointerCapture(e.pointerId)) {
      carousel.releasePointerCapture(e.pointerId);
    }
  }

  function handleAnchorClick(e: MouseEvent, href: string) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  let dragStartX = 0;
  let dragScrollLeft = 0;

  function startProjectDrag(e: PointerEvent) {
    const container = e.currentTarget as HTMLElement;
    dragStartX = e.clientX;
    dragScrollLeft = container.scrollLeft;
    container.classList.add("is-dragging");
    container.setPointerCapture(e.pointerId);
  }

  function moveProjectDrag(e: PointerEvent) {
    const container = e.currentTarget as HTMLElement;
    if (!container.classList.contains("is-dragging")) return;
    container.scrollLeft = dragScrollLeft - (e.clientX - dragStartX);
  }

  function endProjectDrag(e: PointerEvent) {
    const container = e.currentTarget as HTMLElement;
    container.classList.remove("is-dragging");
    if (container.hasPointerCapture(e.pointerId)) {
      container.releasePointerCapture(e.pointerId);
    }
  }
</script>

<Navbar />

<!-- Main Content -->
<main class="flex-grow pt-[72px]">
  <!-- Hero Section -->
  <section
    class="min-h-[80vh] flex flex-col justify-center px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full py-16 md:py-24 relative overflow-hidden"
    id="home"
  >
    <div class="section-cable section-cable-right" aria-hidden="true">
      <span class="section-cable-wire"></span>
      <span class="section-cable-node section-cable-node-top"></span>
      <span class="section-cable-node section-cable-node-bottom"></span>
    </div>
    <div class="section-cable-bridge" aria-hidden="true"></div>
    <!-- Floating Decorative Elements -->
    <div
      class="absolute top-20 right-[15%] opacity-[0.12] animate-float-slow pointer-events-none hidden lg:block"
    >
      <span class="material-symbols-outlined text-8xl text-primary"
        >{"{ }"}</span
      >
    </div>
    <div
      class="absolute top-40 right-[8%] opacity-[0.10] animate-float pointer-events-none hidden lg:block"
    >
      <span class="material-symbols-outlined text-4xl text-primary">code</span>
    </div>
    <div
      class="absolute bottom-32 left-[5%] opacity-[0.12] animate-float-slow pointer-events-none hidden lg:block"
    >
      <span class="material-symbols-outlined text-6xl text-primary"
        >{"</>"}</span
      >
    </div>
    <div
      class="absolute bottom-16 right-[20%] opacity-[0.10] animate-float pointer-events-none hidden lg:block"
    >
      <span class="material-symbols-outlined text-4xl text-primary"
        >terminal</span
      >
    </div>

    <!-- Corner Accent Lines -->
    <div
      class="absolute top-0 left-0 w-32 h-32 pointer-events-none corner-accent"
    >
      <div
        class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent"
      ></div>
      <div
        class="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-primary/50 to-transparent"
      ></div>
    </div>
    <div
      class="absolute top-0 right-0 w-32 h-32 pointer-events-none corner-accent"
      style="animation-delay: 1.5s;"
    >
      <div
        class="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-primary/50 to-transparent"
      ></div>
      <div
        class="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-primary/50 to-transparent"
      ></div>
    </div>

    <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-10">
      <div class="lg:col-span-7">
        <h1
          class="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-background mb-6 text-balance leading-tight"
        >
          <span
            class="block text-on-surface-variant text-sm md:text-base font-label-caps tracking-widest uppercase mb-2"
            >Hello, there</span
          >
          I'm Mohammad Sultoni.
        </h1>

        <p
          class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-pretty leading-relaxed mb-8"
        >
          A <span class="text-primary font-semibold"
            >UX-first Full-Stack Developer</span
          > based in Indonesia. I build intuitive web experiences and dependable
          systems, working primarily with Laravel &amp; PHP across accessible
          interfaces, APIs, and data layers.
        </p>

        <div class="flex flex-wrap items-center gap-3">
          <a
            class="bg-primary text-[#13181A] px-6 py-3.5 rounded-lg flex items-center gap-2 hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300 font-label-caps text-label-caps font-semibold"
            href="#projects"
            onclick={(e) => handleAnchorClick(e, "#projects")}
          >
            <span class="material-symbols-outlined text-[20px]">work</span>
            View Projects
          </a>
          <a
            class="bg-[#1D2427]/70 border border-[#333F43] text-on-background px-6 py-3.5 rounded-lg flex items-center gap-2 hover:border-primary/50 hover:text-primary transition-all duration-300 font-label-caps text-label-caps"
            href="#contact"
            onclick={(e) => handleAnchorClick(e, "#contact")}
          >
            <span class="material-symbols-outlined text-[20px]">mail</span>
            Let's Talk
          </a>
        </div>

        <div class="flex flex-wrap items-center gap-3 mt-7">
          <span class="font-mono text-xs text-on-surface-variant mr-1">Find me</span>
          <a
            class="flex items-center justify-center w-10 h-10 rounded-xl border border-[#333F43]/50 bg-[#1D2427]/60 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img alt="" class="w-5 h-auto" src="/images/stacks/linkedin.svg" />
          </a>
          <a
            class="flex items-center justify-center w-10 h-10 rounded-xl border border-[#333F43]/50 bg-[#1D2427]/60 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img alt="" class="w-5 h-auto" src="/images/stacks/github.svg" />
          </a>
          <a
            class="flex items-center justify-center w-10 h-10 rounded-xl border border-[#333F43]/50 bg-[#1D2427]/60 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <span class="material-symbols-outlined text-xl">photo_camera</span>
          </a>
        </div>
      </div>

      <div
        class="featured-project-carousel lg:col-span-5 group relative isolate overflow-hidden rounded-2xl border border-[#333F43]/70 p-5 sm:p-7 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
        role="region"
        aria-roledescription="carousel"
        aria-label={`Featured project: ${featuredProject.name}`}
        class:is-dragging={featuredPointerId !== null}
        onpointerenter={() => {
          isFeaturedHovered = true;
          scheduleFeaturedProjectRotation();
        }}
        onpointerleave={() => {
          isFeaturedHovered = false;
          scheduleFeaturedProjectRotation();
        }}
        onpointerdown={startFeaturedProjectDrag}
        onpointerup={endFeaturedProjectDrag}
        onpointercancel={endFeaturedProjectDrag}
        onfocusin={() => {
          isFeaturedFocused = true;
          scheduleFeaturedProjectRotation();
        }}
        onfocusout={handleFeaturedFocusOut}
      >
        <div class="project-card-grid opacity-20 group-hover:opacity-35" aria-hidden="true"></div>
        <div class="relative z-10 flex flex-col gap-3">
          <div class="featured-project-content">
            {#key featuredProjectIndex}
              <div
                class="featured-project-panel"
                in:fade={{ duration: 240 }}
                out:fade={{ duration: 240 }}
              >
                <div class="relative z-10">

                  <div class="flex items-start gap-4 mb-5">
                    {#if getFeaturedProjectImage(featuredProject)}
                      <div class="shrink-0 rounded-lg p-1">
                        <img
                          src={getFeaturedProjectImage(featuredProject) ?? ""}
                          alt={`${featuredProject.name} logo`}
                          class="w-12 h-12 object-contain rounded-md"
                          width="48"
                          height="48"
                        />
                      </div>
                    {:else}
                      <div class="shrink-0 rounded-lg bg-[#13181A]/80 border border-[#333F43]/70 p-2.5 text-primary">
                        <span class="material-symbols-outlined text-2xl">deployed_code</span>
                      </div>
                    {/if}
                    <div class="min-w-0">
                      <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h2
                          class="font-headline-md text-headline-md text-on-background"
                        >
                          {featuredProject.name}
                        </h2>

                      </div>
                      <p class="text-on-surface-variant text-body-md leading-relaxed mt-1 line-clamp-3">
                        {featuredProject.desc}
                      </p>
                    </div>
                  </div>
                </div>

        {#if featuredProject.name === "Slogy"}
          <div
            class="relative z-10 rounded-xl border border-[#333F43]/70 p-4 sm:p-5 mb-5 overflow-hidden"
            aria-hidden="true"
          >
            <div class="flex items-center justify-between gap-2 pb-3 border-b border-[#333F43]/50">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-lg">verified_user</span>
                <span class="font-mono text-[10px] sm:text-xs text-on-surface-variant">INTEGRITY CHAIN</span>
              </div>
            </div>
            <div class="space-y-3 pt-4">
              {#each ["CREATED", "UPDATED"] as action, i}
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary text-lg">link</span>
                  <div class="min-w-0 flex-1">
                    <div class="font-mono text-[10px] text-on-surface-variant">ENTRY 00{i + 1} · {action}</div>
                    <div class="font-mono text-xs text-on-background/90 truncate">event → hash → previous</div>
                  </div>
                  <span class="material-symbols-outlined text-primary/80 text-base">verified</span>
                </div>
                {#if i === 0}
                  <div class="ml-2 h-3 border-l border-dashed border-primary/40" aria-hidden="true"></div>
                {/if}
              {/each}
            </div>
            <div class="absolute -right-10 -bottom-12 w-36 h-36 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
          </div>
        {:else if featuredProject.name === "Scroll"}
          <div
            class="relative z-10 rounded-xl border border-[#333F43]/70 p-3 sm:p-4 mb-5 overflow-hidden"
            aria-hidden="true"
          >
            <div class="flex items-center justify-between gap-2 pb-2.5 border-b border-[#333F43]/50">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-lg">payments</span>
                <span class="font-mono text-[10px] sm:text-xs text-on-surface-variant">PAYROLL WORKFLOW</span>
              </div>
            </div>
            <div class="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-start gap-1 pt-3">
              {#each [
                { label: "DRAFT", icon: "edit_note" },
                { label: "APPROVED", icon: "task_alt" },
                { label: "PAID", icon: "account_balance" },
              ] as step, i}
                <div class="flex flex-col items-center gap-1.5 text-center">
                  <span class="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                    <span class="material-symbols-outlined text-base">{step.icon}</span>
                  </span>
                  <span class="font-mono text-[9px] sm:text-[10px] text-on-surface-variant">{step.label}</span>
                </div>
                {#if i < 2}
                  <span
                    class="mt-4 w-5 sm:w-8 border-t border-primary/50"
                    aria-hidden="true"
                  ></span>
                {/if}
              {/each}
            </div>
            <div class="mt-3 rounded-lg border border-[#333F43]/50 bg-[#13181A]/10 px-2.5 py-1.5 flex items-center gap-2.5">
              <span class="material-symbols-outlined text-primary text-base">groups</span>
              <span class="font-mono text-[10px] sm:text-xs text-on-surface-variant flex-1">EMPLOYEE PAYROLL</span>
              <span class="material-symbols-outlined text-primary/80 text-base">arrow_forward</span>
              <span class="font-mono text-[10px] sm:text-xs text-on-surface-variant">CSV EXPORT</span>
            </div>
            <div class="absolute -right-10 -bottom-12 w-36 h-36 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
          </div>
        {:else}
          <div
            class="relative z-10 flex items-center justify-center rounded-xl border border-[#333F43]/70 bg-[#13181A]/75 p-4 mb-5 h-36 overflow-hidden"
            aria-hidden="true"
          >
            {#if getFeaturedProjectImage(featuredProject)}
              <img
                src={getFeaturedProjectImage(featuredProject) ?? ""}
                alt=""
                class="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            {:else}
              <span class="material-symbols-outlined text-6xl text-primary/70">deployed_code</span>
            {/if}
            <div class="absolute inset-0 bg-gradient-to-t from-[#13181A]/40 to-transparent pointer-events-none"></div>
          </div>
        {/if}

                <div class="relative z-10 flex flex-col gap-3">
                  {#if featuredProject.link}
                    <a
                      class="inline-flex w-full items-center justify-between gap-2 rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 text-primary hover:bg-primary/10 hover:border-primary/60 font-label-caps text-label-caps transition-all"
                      href={featuredProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explore {featuredProject.name} on GitHub
                      <span class="material-symbols-outlined text-base">arrow_outward</span>
                    </a>
                  {:else}
                    <span class="font-label-caps text-label-caps text-on-surface-variant/70">
                      Details on request
                    </span>
                  {/if}
                </div>
              </div>
            {/key}
          </div>
          <div class="flex items-center justify-center gap-2 pt-1" role="group" aria-label="Featured project pagination">
            {#each featuredProjects as project, i}
              <button
                type="button"
                class="h-2.5 cursor-pointer rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#13181A] {i === featuredProjectIndex ? 'w-6 bg-primary' : 'w-2.5 bg-on-surface-variant/40 hover:bg-on-surface-variant'}"
                aria-pressed={i === featuredProjectIndex}
                aria-label={`Show ${project.name} featured project`}
                onclick={() => showFeaturedProject(i)}
              ></button>
            {/each}
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Background Glows -->
    <div
      class="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none"
    ></div>
    <div
      class="absolute left-0 bottom-0 w-[300px] h-[300px] bg-primary/8 rounded-full blur-[120px] -z-10 pointer-events-none"
    ></div>
  </section>

  <!-- About Section -->
  <section
    class="px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full py-section-gap border-t border-[#333F43]/30 relative overflow-hidden"
    id="about"
  >
    <div class="section-cable section-cable-left" aria-hidden="true">
      <span class="section-cable-wire"></span>
      <span class="section-cable-node section-cable-node-top"></span>
      <span class="section-cable-node section-cable-node-bottom"></span>
    </div>
    <div class="section-cable-bridge" aria-hidden="true"></div>
    <!-- Background glow for glass effect -->
    <div
      class="absolute -left-20 -bottom-20 w-80 h-80 rounded-full blur-3xl opacity-40 pointer-events-none"
    ></div>
    <div
      class="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-3xl opacity-40 pointer-events-none"
    ></div>

    <!-- Section Floating Decorators -->
    <div
      class="absolute top-10 left-[10%] opacity-[0.11] animate-float pointer-events-none hidden lg:block"
    >
      <span class="material-symbols-outlined text-5xl text-primary"
        >database</span
      >
    </div>
    <div
      class="absolute bottom-10 right-[15%] opacity-[0.11] animate-float-slow pointer-events-none hidden lg:block"
    >
      <span class="material-symbols-outlined text-4xl text-primary">api</span>
    </div>

    <!-- Corner Accent Lines -->
    <div
      class="absolute top-0 left-0 w-24 h-24 pointer-events-none corner-accent"
    >
      <div
        class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary/40 to-transparent"
      ></div>
      <div
        class="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-primary/40 to-transparent"
      ></div>
    </div>

    <div class="relative z-10 mb-8 flex flex-col gap-2">
      <p
        class="font-label-caps text-label-caps text-primary uppercase tracking-widest"
      >
        About Me
      </p>
      <h2 class="font-headline-md text-headline-md text-on-background">
        System Context
      </h2>
      <p class="text-on-surface-variant text-body-md">
        A little about my background, focus, and the way I approach building.
      </p>
    </div>

    <div class="system-context-grid relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-x-5 md:gap-x-6">
      <article
        class="glass rounded-2xl p-6 md:p-8 relative overflow-hidden group shadow-xl lg:col-span-2"
      >
        <div
          class="absolute top-0 left-0 w-full h-1 opacity-70"
        ></div>
        <div
          class="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-[#333F43]/40 pb-4"
        >
          <div class="flex items-center gap-3 min-w-0">
            <span class="material-symbols-outlined text-primary">code_blocks</span>
            <span class="font-label-caps text-label-caps text-on-background font-semibold">
              Profile
            </span>
          </div>
          <span class="font-mono text-xs text-on-surface-variant">
            ~/profile/readme.md
          </span>
        </div>
        <Typewriter texts={typewriterTexts} />
      </article>

      <div class="system-context-connector system-context-connector-branch" aria-hidden="true">
        <svg class="h-full w-full text-primary" viewBox="0 0 100 28" preserveAspectRatio="none">
          <path class="system-context-connector-mobile" d="M50 0V28" />
          <path class="system-context-connector-desktop" d="M50 0V14H25V28M50 14H75V28" />
          <circle class="system-context-connector-desktop" cx="50" cy="14" r="1.5" />
        </svg>
      </div>

      <article
        class="glass rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-xl flex flex-col"
      >
        <div
          class="absolute top-0 left-0 w-full h-1 opacity-70"
        ></div>
        <div class="flex items-center justify-between gap-3 mb-6">
          <span class="material-symbols-outlined text-primary">deployed_code</span>
          <div class="flex flex-1 items-center justify-between gap-3 min-w-0">
            <h3 class="font-body-lg text-body-lg text-on-background font-semibold">
              What I Build
            </h3>
            <span class="font-mono text-xs text-on-surface-variant text-right">
              ~/profile/focus-areas.md
            </span>
          </div>
        </div>
        <ul class="flex flex-1 flex-col justify-between gap-4 text-on-surface-variant text-body-md leading-relaxed">
          <li class="flex items-start gap-3">
            <span class="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
            <span>Full-stack web applications with clean, responsive interfaces</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
            <span>Backend systems and REST APIs backed by reliable data layers</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
            <span>Internal business tools, management systems, and automation</span>
          </li>
        </ul>
      </article>

      <div class="system-context-connector system-context-connector-mobile-branch" aria-hidden="true">
        <svg class="h-full w-full text-primary" viewBox="0 0 100 28" preserveAspectRatio="none">
          <path d="M50 0V28" />
        </svg>
      </div>

      <article
        class="glass rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-xl flex flex-col"
      >
        <div
          class="absolute top-0 left-0 w-full h-1"
        ></div>
        <div class="flex items-center justify-between gap-3 mb-6">
          <span class="material-symbols-outlined text-primary">conversion_path</span>
          <div class="flex flex-1 items-center justify-between gap-3 min-w-0">
            <h3 class="font-body-lg text-body-lg text-on-background font-semibold">
              How I Build
            </h3>
            <span class="font-mono text-xs text-on-surface-variant text-right">
              ~/profile/working-process.md
            </span>
          </div>
        </div>
        <ol class="flex flex-1 flex-col justify-between gap-3 text-on-surface-variant text-body-md leading-relaxed">
          <li class="flex items-center gap-3">
            <span class="font-mono text-xs text-primary bg-primary/10 border border-primary/20 rounded-md px-2 py-1">01</span>
            <span>Understand the user and the problem</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="font-mono text-xs text-primary bg-primary/10 border border-primary/20 rounded-md px-2 py-1">02</span>
            <span>Design a clear, accessible experience</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="font-mono text-xs text-primary bg-primary/10 border border-primary/20 rounded-md px-2 py-1">03</span>
            <span>Build and test the system end to end</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="font-mono text-xs text-primary bg-primary/10 border border-primary/20 rounded-md px-2 py-1">04</span>
            <span>Improve it through feedback and iteration</span>
          </li>
        </ol>
      </article>
    </div>
  </section>

  <!-- Stack & Explore Section -->
  <section
    class="px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full py-section-gap border-t border-[#333F43]/30 relative overflow-hidden"
    id="stack"
  >
    <div class="section-cable section-cable-right" aria-hidden="true">
      <span class="section-cable-wire"></span>
      <span class="section-cable-node section-cable-node-top"></span>
      <span class="section-cable-node section-cable-node-bottom"></span>
    </div>
    <div class="section-cable-bridge" aria-hidden="true"></div>
    <!-- Background glow for glass effect -->
    <div
      class="absolute -left-20 -top-10 w-96 h-96 rounded-full blur-3xl opacity-50 pointer-events-none"
    ></div>
    <div
      class="absolute -right-20 -bottom-10 w-96 h-96 rounded-full blur-3xl opacity-50 pointer-events-none"
    ></div>

    <!-- Section Floating Decorators -->
    <div
      class="absolute top-20 left-[8%] opacity-[0.11] animate-float-slow pointer-events-none hidden lg:block"
    >
      <span class="material-symbols-outlined text-5xl text-primary"
        >{"{ }"}</span
      >
    </div>
    <div
      class="absolute top-32 right-[12%] opacity-[0.11] animate-float pointer-events-none hidden lg:block"
    >
      <span class="material-symbols-outlined text-4xl text-primary"
        >javascript</span
      >
    </div>
    <div
      class="absolute bottom-20 left-[15%] opacity-[0.11] animate-float-slow pointer-events-none hidden lg:block"
    >
      <span class="material-symbols-outlined text-3xl text-primary">code</span>
    </div>

    <!-- Corner Accent Lines -->
    <div
      class="absolute top-0 right-0 w-24 h-24 pointer-events-none corner-accent"
    >
      <div
        class="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-primary/40 to-transparent"
      ></div>
      <div
        class="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-primary/40 to-transparent"
      ></div>
    </div>
    <div
      class="absolute bottom-0 left-0 w-24 h-24 pointer-events-none corner-accent"
    >
      <div
        class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary/40 to-transparent"
      ></div>
      <div
        class="absolute bottom-0 left-0 h-full w-[1px] bg-gradient-to-t from-primary/40 to-transparent"
      ></div>
    </div>

    <div class="mb-12 relative z-10">
      <h2 class="font-headline-md text-headline-md text-on-background mb-2">
        Technical Inventory
      </h2>
      <p
        class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest"
      >
        Current Stack & Explorations
      </p>
    </div>
    <div class="glass rounded-2xl p-6 md:p-8 relative z-10 shadow-xl">
      <div class="contribution-grid">
        {#each gridItems as item, i}
          {#if item.type === "filler"}
            <div
              class="contribution-cell contribution-level-{item.level}"
              title="Filler"
            ></div>
          {:else}
            <div
              class="contribution-cell contribution-level-{item.level} cursor-pointer group relative contribution-animate contribution-animate-delay-{i %
                8}"
              title={item.name}
            >
              <img
                alt={item.name}
                class="w-7 h-7 object-contain opacity-70 group-hover:opacity-100 {item.white ? 'stack-icon-white' : ''}"
                src={item.img}
              />
              <!-- Tooltip -->
              <div
                class="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#13181A] border border-[#333F43] rounded px-3 py-1.5 text-xs font-label-caps text-on-background opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-[#333F43]"
              >
                {item.name}
              </div>
            </div>
          {/if}
        {/each}
      </div>

      <!-- Legend -->
      <div class="flex items-center justify-end gap-2 mt-6">
        <span
          class="font-label-caps text-label-caps text-on-surface-variant text-xs"
          >Less</span
        >
        {#each [0, 1, 2, 3, 4] as level}
          <div
            class="contribution-cell contribution-level-{level}"
            style="width: 16px; height: 16px; padding: 0;"
          ></div>
        {/each}
        <span
          class="font-label-caps text-label-caps text-on-surface-variant text-xs"
          >More</span
        >
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section
    class="px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full py-section-gap border-t border-[#333F43]/30 relative overflow-hidden"
    id="projects"
  >
    <div class="section-cable section-cable-left" aria-hidden="true">
      <span class="section-cable-wire"></span>
      <span class="section-cable-node section-cable-node-top"></span>
      <span class="section-cable-node section-cable-node-bottom"></span>
    </div>
    <div class="section-cable-bridge" aria-hidden="true"></div>
    <!-- Background glow for glass effect -->
    <div
      class="absolute -left-20 top-1/3 w-80 h-80 rounded-full blur-3xl opacity-40 pointer-events-none"
    ></div>
    <div
      class="absolute -right-20 bottom-1/3 w-80 h-80 rounded-full blur-3xl opacity-40 pointer-events-none"
    ></div>

    <!-- Section Floating Decorators -->
    <div
      class="absolute top-20 right-[10%] opacity-[0.11] animate-float pointer-events-none hidden lg:block"
    >
      <span class="material-symbols-outlined text-5xl text-primary"
        >folder_open</span
      >
    </div>
    <div
      class="absolute bottom-24 left-[8%] opacity-[0.11] animate-float-slow pointer-events-none hidden lg:block"
    >
      <span class="material-symbols-outlined text-4xl text-primary"
        >description</span
      >
    </div>

    <!-- Corner Accent Lines -->
    <div
      class="absolute top-0 left-0 w-24 h-24 pointer-events-none corner-accent"
    >
      <div
        class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary/40 to-transparent"
      ></div>
      <div
        class="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-primary/40 to-transparent"
      ></div>
    </div>
    <div
      class="absolute bottom-0 right-0 w-24 h-24 pointer-events-none corner-accent"
    >
      <div
        class="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-primary/40 to-transparent"
      ></div>
      <div
        class="absolute bottom-0 right-0 h-full w-[1px] bg-gradient-to-t from-primary/40 to-transparent"
      ></div>
    </div>

    <div class="relative z-10">
      <div class="mb-12">
        <h2 class="font-headline-md text-headline-md text-on-background mb-2">
          Project Portfolio
        </h2>
        <p
          class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest"
        >
          Personal & Client Work
        </p>
      </div>

      <!-- Personal Projects -->
      <div class="flex items-center gap-4 mb-6">
        <h3
          class="font-body-lg text-body-lg text-on-background font-semibold whitespace-nowrap"
        >
          Personal Projects
        </h3>

        <div
          class="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent"
        ></div>
      </div>
        <div
          class="project-marquee"
          role="region"
          aria-label="Personal projects"
          onpointerdown={startProjectDrag}
          onpointermove={moveProjectDrag}
          onpointerup={endProjectDrag}
          onpointercancel={endProjectDrag}
        >
        <div class="project-track">
          <div class="project-track-group">
        {#each personalProjects as item, i}
          <div
            class="project-card group relative overflow-hidden rounded-2xl border border-[#333F43]/60 bg-[#1D2427]/70 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10"
          >
            <!-- Top accent line on hover -->
            <div
              class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div class="project-card-grid"></div>

            <!-- Watermark index -->
            <div
              class="absolute -right-2 -top-6 text-[80px] leading-none font-bold text-primary/5 select-none pointer-events-none"
            >
              {String(i + 1).padStart(2, "0")}
            </div>

            <div class="p-6 flex flex-col gap-6 relative z-10 min-h-full">
              <div class="project-card-meta">
                <span class="project-card-status">
                  <span class="project-card-status-dot"></span>
                  SYSTEM ONLINE
                </span>
                <span class="font-mono text-[10px] text-on-surface-variant/60"
                  >PRJ-{String(i + 1).padStart(2, "0")}</span
                >
              </div>
              <div class="flex justify-between items-start gap-4">
                <div class="relative">
                  <div
                    class="absolute inset-0 bg-primary/25 blur-xl rounded-full"
                  ></div>
                  <div
                    class="relative bg-[#13181A]/90 border border-[#333F43]/70 p-3 rounded-xl group-hover:border-primary/50 group-hover:scale-105 transition-all duration-300"
                  >
                    {#if item.img}
                      <img
                        alt={item.name}
                        class="w-9 h-auto object-contain"
                        src={item.img}
                      />
                    {:else}
                      <span
                        class="material-symbols-outlined text-primary text-2xl"
                        >schedule</span
                      >
                    {/if}
                  </div>
                </div>
                {#if item.link}
                  <a
                    class="group/link inline-flex items-center gap-1.5 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      class="underline-offset-4 group-hover/link:underline decoration-primary/50"
                      >View</span
                    >
                    <span
                      class="material-symbols-outlined text-base transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5"
                      >arrow_outward</span
                    >
                  </a>
                {:else}
                  <span class="font-label-caps text-label-caps text-on-surface-variant/70">
                    Details on request
                  </span>
                {/if}
              </div>

              <div class="flex flex-col gap-3">
                <div class="flex items-baseline gap-2">
                  <span class="font-mono text-xs text-primary/70"
                    >{"0" + (i + 1)}/</span
                  >
                  <h3
                    class="font-body-lg text-body-lg text-on-background font-semibold group-hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </h3>
                </div>
                <p
                  class="text-on-surface-variant text-body-md leading-relaxed line-clamp-4"
                >
                  {item.desc}
                </p>
              </div>

              <div class="flex flex-wrap gap-2 mt-auto pt-2">
                {#each item.tags as tag}
                  <span
                    class="font-label-caps text-label-caps text-xs bg-primary/10 text-primary/90 px-2.5 py-1 rounded-md border border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                    >{tag}</span
                  >
                {/each}
              </div>
            </div>
          </div>
        {/each}
          </div>
          <div class="project-track-group" aria-hidden="true">
            {#each personalProjects as item, i}
              {@const duplicateItem = item}
              <div
                class="project-card group relative overflow-hidden rounded-2xl border border-[#333F43]/60 bg-[#1D2427]/70 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div class="project-card-grid"></div>
                <div class="p-6 flex flex-col gap-6 relative z-10 min-h-full">
                  <div class="project-card-meta">
                    <span class="project-card-status"><span class="project-card-status-dot"></span> SYSTEM ONLINE</span>
                    <span class="font-mono text-[10px] text-on-surface-variant/60">PRJ-{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div class="flex justify-between items-start gap-4">
                    <div class="relative">
                      <div class="absolute inset-0 bg-primary/25 blur-xl rounded-full"></div>
                      <div class="relative bg-[#13181A]/90 border border-[#333F43]/70 p-3 rounded-xl">
                        {#if duplicateItem.img}
                          <img alt={duplicateItem.name} class="w-9 h-auto object-contain" src={duplicateItem.img} />
                        {:else}
                          <span class="material-symbols-outlined text-primary text-2xl">schedule</span>
                        {/if}
                      </div>
                    </div>
                    <span class="font-label-caps text-label-caps text-on-surface-variant/70">
                      {duplicateItem.link ? "View ↗" : "Details on request"}
                    </span>
                  </div>
                  <div class="flex flex-col gap-3">
                    <div class="flex items-baseline gap-2">
                      <span class="font-mono text-xs text-primary/70">{"0" + (i + 1)}/</span>
                      <h3 class="font-body-lg text-body-lg text-on-background font-semibold">{duplicateItem.name}</h3>
                    </div>
                    <p class="text-on-surface-variant text-body-md leading-relaxed line-clamp-4">{duplicateItem.desc}</p>
                  </div>
                  <div class="flex flex-wrap gap-2 mt-auto pt-2">
                    {#each duplicateItem.tags as tag}
                      <span class="font-label-caps text-label-caps text-xs bg-primary/10 text-primary/90 px-2.5 py-1 rounded-md border border-primary/20">{tag}</span>
                    {/each}
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>

      <!-- Client Projects -->
      <div class="mt-14">
        <div class="flex items-center gap-4 mb-6">
          <h3
            class="font-body-lg text-body-lg text-on-background font-semibold whitespace-nowrap"
          >
            Client Projects
          </h3>
          <div
            class="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent"
          ></div>
        </div>
        <div
          class="project-marquee"
          role="region"
          aria-label="Client projects"
          onpointerdown={startProjectDrag}
          onpointermove={moveProjectDrag}
          onpointerup={endProjectDrag}
          onpointercancel={endProjectDrag}
        >
          <div class="project-track project-track-reverse">
            <div class="project-track-group">
          {#each clientProjects as item, i}
            <div
              class="project-card group relative overflow-hidden rounded-2xl border border-[#333F43]/60 bg-[#1D2427]/70 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10"
            >
              <!-- Top accent line on hover -->
              <div
                class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
              <div class="project-card-grid"></div>

              <!-- Watermark index -->
              <div
                class="absolute -right-2 -top-6 text-[80px] leading-none font-bold text-primary/5 select-none pointer-events-none"
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div class="p-6 flex flex-col gap-6 relative z-10 min-h-full">
                <div class="project-card-meta">
                  <span class="project-card-status">
                    <span class="project-card-status-dot"></span>
                    SYSTEM ONLINE
                  </span>
                  <span class="font-mono text-[10px] text-on-surface-variant/60"
                    >CLIENT-{String(i + 1).padStart(2, "0")}</span
                  >
                </div>
                <div class="flex justify-between items-start gap-4">
                  <div class="relative">
                    <div
                      class="absolute inset-0 bg-primary/25 blur-xl rounded-full"
                    ></div>
                    <div
                      class="relative bg-[#13181A]/90 border border-[#333F43]/70 p-3 rounded-xl group-hover:border-primary/50 group-hover:scale-105 transition-all duration-300"
                    >
                      {#if item.img}
                        <img
                          alt={item.name}
                          class="w-9 h-auto object-contain"
                          src={item.img}
                        />
                      {:else}
                        <span
                          class="material-symbols-outlined text-primary text-2xl"
                          >apartment</span
                        >
                      {/if}
                    </div>
                  </div>
                  {#if item.link}
                    <a
                      class="group/link inline-flex items-center gap-1.5 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span
                        class="underline-offset-4 group-hover/link:underline decoration-primary/50"
                        >View</span
                      >
                      <span
                        class="material-symbols-outlined text-base transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5"
                        >arrow_outward</span
                      >
                    </a>
                  {:else}
                    <span class="font-label-caps text-label-caps text-on-surface-variant/70">
                      Details on request
                    </span>
                  {/if}
                </div>

                <div class="flex flex-col gap-3">
                  <div class="flex items-baseline gap-2">
                    <span class="font-mono text-xs text-primary/70"
                      >{"0" + (i + 1)}/</span
                    >
                    <h3
                      class="font-body-lg text-body-lg text-on-background font-semibold group-hover:text-primary transition-colors duration-300"
                    >
                      {item.name}
                    </h3>
                  </div>
                  <p
                    class="text-on-surface-variant text-body-md leading-relaxed line-clamp-4"
                  >
                    {item.desc}
                  </p>
                </div>

                <div class="flex flex-wrap gap-2 mt-auto pt-2">
                  {#each item.tags as tag}
                    <span
                      class="font-label-caps text-label-caps text-xs bg-primary/10 text-primary/90 px-2.5 py-1 rounded-md border border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                      >{tag}</span
                    >
                  {/each}
                </div>
              </div>
            </div>
          {/each}
            </div>
            <div class="project-track-group" aria-hidden="true">
              {#each clientProjects as item, i}
                <div
                  class="project-card group relative overflow-hidden rounded-2xl border border-[#333F43]/60 bg-[#1D2427]/70 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div class="project-card-grid"></div>
                  <div class="p-6 flex flex-col gap-6 relative z-10 min-h-full">
                    <div class="project-card-meta">
                      <span class="project-card-status"><span class="project-card-status-dot"></span> SYSTEM ONLINE</span>
                      <span class="font-mono text-[10px] text-on-surface-variant/60">CLIENT-{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div class="flex justify-between items-start gap-4">
                      <div class="relative">
                        <div class="absolute inset-0 bg-primary/25 blur-xl rounded-full"></div>
                        <div class="relative bg-[#13181A]/90 border border-[#333F43]/70 p-3 rounded-xl">
                          {#if item.img}
                            <img alt={item.name} class="w-9 h-auto object-contain" src={item.img} />
                          {:else}
                            <span class="material-symbols-outlined text-primary text-2xl">apartment</span>
                          {/if}
                        </div>
                      </div>
                      <span class="font-label-caps text-label-caps text-on-surface-variant/70">
                        {item.link ? "View ↗" : "Details on request"}
                      </span>
                    </div>
                    <div class="flex flex-col gap-3">
                      <div class="flex items-baseline gap-2">
                        <span class="font-mono text-xs text-primary/70">{"0" + (i + 1)}/</span>
                        <h3 class="font-body-lg text-body-lg text-on-background font-semibold">{item.name}</h3>
                      </div>
                      <p class="text-on-surface-variant text-body-md leading-relaxed line-clamp-4">{item.desc}</p>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section
    class="px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full py-section-gap border-t border-[#333F43]/30 relative overflow-hidden"
    id="contact"
  >
    <div class="section-cable section-cable-right" aria-hidden="true">
      <span class="section-cable-wire"></span>
      <span class="section-cable-node section-cable-node-top"></span>
      <span class="section-cable-node section-cable-node-bottom"></span>
    </div>
    <!-- Background glow for glass effect -->
    <div
      class="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-3xl opacity-40 pointer-events-none"
    ></div>
    <div
      class="absolute -left-20 -bottom-20 w-80 h-80 rounded-full blur-3xl opacity-40 pointer-events-none"
    ></div>

    <!-- Section Floating Decorators -->
    <div
      class="absolute top-16 right-[12%] opacity-[0.11] animate-float-slow pointer-events-none hidden lg:block"
    >
      <span class="material-symbols-outlined text-5xl text-primary">mail</span>
    </div>
    <div
      class="absolute bottom-16 left-[10%] opacity-[0.11] animate-float pointer-events-none hidden lg:block"
    >
      <span class="material-symbols-outlined text-4xl text-primary">call</span>
    </div>

    <!-- Corner Accent Lines -->
    <div
      class="absolute top-0 right-0 w-24 h-24 pointer-events-none corner-accent"
    >
      <div
        class="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-l from-primary/40 to-transparent"
      ></div>
      <div
        class="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-primary/40 to-transparent"
      ></div>
    </div>

    <div class="relative z-10">
      <div class="flex items-center gap-4 mb-10">
        <h2
          class="font-headline-md text-headline-md text-on-background whitespace-nowrap"
        >
          Connection Center
        </h2>
      </div>

      <!-- Gradient Border Panel -->
      <div class="gradient-border">
        <div
          class="rounded-[calc(1.5rem-1px)] bg-[#13181A]/95 backdrop-blur-xl overflow-hidden"
        >
          <div class="grid grid-cols-1 md:grid-cols-12 gap-10 p-6 md:p-10">
            <!-- Left: pitch + quick links -->
            <div class="md:col-span-5 flex flex-col gap-8">
              <div class="flex flex-col gap-4">
                <span class="font-mono text-xs text-primary/80"
                  >&gt;_ Let's build something great</span
                >
                <h3
                  class="font-headline-md text-headline-md text-on-background leading-tight"
                >
                  Have an idea? Let's turn it into a real product.
                </h3>
                <p class="text-on-surface-variant text-body-md leading-relaxed">
                  I'm currently open to freelance projects, collaboration, and
                  interesting backend/API challenges. Usually responds within 24
                  hours.
                </p>
              </div>

            </div>

            <!-- Right: direct links -->
            <div class="md:col-span-7 flex flex-col gap-3">
              <div class="mb-2">
                <span class="font-mono text-xs text-primary/80"
                  >&gt;_ Open channels</span
                >
                <h3 class="font-body-lg text-body-lg text-on-background font-semibold mt-2">
                  Find me across the network.
                </h3>
              </div>
              <a
                class="group flex items-center gap-4 rounded-xl border border-[#333F43]/50 bg-[#1D2427]/45 p-4 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                href={`mailto:${socialLinks.email}`}
              >
                <div class="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary shrink-0">
                  <span class="material-symbols-outlined">mail</span>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-xs mb-0.5">Email</p>
                  <p class="font-body-md text-on-background truncate">{socialLinks.email}</p>
                </div>
                <span class="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">arrow_outward</span>
              </a>
              <a
                class="group flex items-center gap-4 rounded-xl border border-[#333F43]/50 bg-[#1D2427]/45 p-4 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                href="tel:+6289684267761"
              >
                <div class="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary shrink-0">
                  <span class="material-symbols-outlined">call</span>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-xs mb-0.5">Phone</p>
                  <p class="font-body-md text-on-background truncate">+62 896-8426-7761</p>
                </div>
                <span class="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">arrow_outward</span>
              </a>
              <a
                class="group flex items-center gap-4 rounded-xl border border-[#333F43]/50 bg-[#1D2427]/45 p-4 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  class="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary shrink-0"
                >
                  <img src="/images/stacks/github.svg" alt="" class="w-5 h-5" />
                </div>
                <div class="flex-1">
                  <p class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-xs mb-0.5">
                    GitHub
                  </p>
                  <p class="font-body-md text-on-background">Sultonisky</p>
                </div>
                <span class="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                  arrow_outward
                </span>
              </a>
              <a
                class="group flex items-center gap-4 rounded-xl border border-[#333F43]/50 bg-[#1D2427]/45 p-4 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary shrink-0">
                  <img src="/images/stacks/linkedin.svg" alt="" class="w-5 h-5" />
                </div>
                <div class="flex-1">
                  <p class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-xs mb-0.5">
                    LinkedIn
                  </p>
                  <p class="font-body-md text-on-background">mohammad-sultoni</p>
                </div>
                <span class="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                  arrow_outward
                </span>
              </a>
              <a
                class="group flex items-center gap-4 rounded-xl border border-[#333F43]/50 bg-[#1D2427]/45 p-4 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary shrink-0">
                  <span class="material-symbols-outlined">photo_camera</span>
                </div>
                <div class="flex-1">
                  <p class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-xs mb-0.5">
                    Instagram
                  </p>
                  <p class="font-body-md text-on-background">@sultoniiii</p>
                </div>
                <span class="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                  arrow_outward
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<Footer />
