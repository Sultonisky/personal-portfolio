<script lang="ts">
  import { onMount } from "svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Typewriter from "$lib/components/Typewriter.svelte";
  import { socialLinks } from "$lib/social-links";

  type StackItem = { name: string; img: string; level: number; white?: boolean };

  const typewriterTexts = [
    "I'm an Information Systems student from Indonesia, drawn to the moment an idea becomes something useful. When someone shares a frustration, I like listening for the real need and finding a thoughtful way to make things easier. Sometimes that means building a web app, sometimes a simpler solution is better. Either way, knowing my work helped someone or made their day a little brighter is what makes me happy.",
    "That curiosity has taken me from local experiments to deploying projects and learning what it takes to keep them running. I especially enjoy exploring PHP and Laravel, and I'm growing toward full-stack development. As AI becomes part of my workflow, I hope to become an AI orchestrator not just someone who uses AI, but someone who can eventually build AI-powered tools of my own, guided by human judgment and care. Away from code, I take my sport bike out, less for the destination than for the new things I notice along the way.",
  ];

  function getCurrentExperienceDuration(startDate: string) {
    const start = new Date(`${startDate}T00:00:00`);
    const today = new Date();
    const months =
      (today.getFullYear() - start.getFullYear()) * 12 +
      today.getMonth() -
      start.getMonth() +
      1;

    return `${Math.max(months, 1)} ${months === 1 ? "month" : "months"}`;
  }

  let mahakaryaDuration = $state(getCurrentExperienceDuration("2026-07-01"));

  const workExperiences = [
    {
      role: "Information Technology Developer",
      company: "PT. Mahakarya Sukses Indonesia",
      logo: "/images/experience/mito-electronic.png",
      employmentType: "Internship",
      period: "Jul 2026 - Present",
      duration: null,
      startDate: "2026-07-01",
      location: "Jakarta, Indonesia · On-site",
      summary:
        "Contributing to internal technology initiatives and web development workflows while collaborating with the team to support practical business needs.",
      skills: [
        "Git",
        "English",
        "Google Apps Script",
        "Communication",
        "Laravel",
        "JavaScript",
        "PHP",
        "GitHub",
        "IT Development",
        "Full-Stack Development",
      ],
    },
    {
      role: "Full Stack Web Developer",
      company: "Systeric",
      logo: "/images/experience/systeric.webp",
      employmentType: "Internship",
      period: "Jul 2025 - Dec 2025",
      duration: "6 months",
      location: "Bali, Indonesia · Remote",
      summary:
        "Worked across frontend and backend development to build and improve web experiences, APIs, and supporting application workflows in a remote team environment.",
      skills: [
        "NestJS",
        "Git",
        "English",
        "Windmill Dev",
        "Communication",
        "JavaScript",
        "TypeScript",
        "GitHub",
        "Full-Stack Development",
      ],
    },
    {
      role: "Technician",
      company: "StickEarn",
      logo: "/images/experience/stickearn.webp",
      employmentType: "Internship",
      period: "Jul 2022 - Sep 2022",
      duration: "3 months",
      location: "Jakarta, Indonesia · On-site",
      summary:
        "Supported on-site technical operations through equipment repair and workplace organization with 5S practices, while installing advertising stickers and LED units on ride-hailing vehicles including GoCar, Grab cars, motorcycles, and Gojek or Grab LED setups.",
      skills: [
        "Equipment Repair",
        "5S",
        "Sticker Installation",
        "LED Installation",
        "Vehicle Branding",
        "Field Operations",
      ],
    },
  ];

  const productionStack: StackItem[] = [
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

  const exploringStack: StackItem[] = [
    { name: "TypeScript", img: "/images/stacks/ts.svg", level: 3 },
    { name: "Turborepo", img: "/images/stacks/turborepo.svg", level: 2 },
    { name: "NestJS", img: "/images/stacks/nestjs.svg", level: 2 },
    { name: "SvelteKit", img: "/images/stacks/sveltekit.svg", level: 3 },
    { name: "Prisma", img: "/images/stacks/prisma.svg", level: 2 },
    { name: "PostgreSQL", img: "/images/stacks/postgres.svg", level: 2 },
    { name: "Node.js", img: "/images/stacks/nodejs.svg", level: 3 },
    { name: "Windmill", img: "/images/stacks/windmill.svg", level: 1 },
  ];

  const tools: StackItem[] = [
    { name: "Git", img: "/images/stacks/git.svg", level: 3 },
    { name: "GitHub", img: "/images/stacks/github.svg", level: 4 },
    { name: "Postman", img: "/images/stacks/postman.svg", level: 3 },
    { name: "Docker", img: "/images/stacks/docker.svg", level: 2 },
    { name: "Railway", img: "/images/stacks/railway.svg", level: 2 },
    { name: "Vercel", img: "/images/stacks/vercel.svg", level: 2 },
  ];

  const additionalStack: StackItem[] = [
    { name: "Alpine.js", img: "/images/stacks/alpinejs.svg", level: 2, white: true },
    { name: "Dart", img: "/images/stacks/dart-mono.svg", level: 2, white: true },
    { name: "Express.js", img: "/images/stacks/expressdotjs.svg", level: 2, white: true },
    { name: "FastAPI", img: "/images/stacks/fastapi.svg", level: 2, white: true },
    { name: "Flutter", img: "/images/stacks/flutter-mono.svg", level: 2, white: true },
    { name: "Nuxt", img: "/images/stacks/nuxt.svg", level: 2, white: true },
    { name: "Pinia", img: "/images/stacks/pinia-mono.svg", level: 2, white: true },
    { name: "Redis", img: "/images/stacks/redis.svg", level: 2, white: true },
    { name: "Sass", img: "/images/stacks/sass.svg", level: 2, white: true },
    { name: "SQLite", img: "/images/stacks/sqlite-mono.svg", level: 2, white: true },
    { name: "Supabase", img: "/images/stacks/supabase-mono.svg", level: 2, white: true },
    { name: "Vue.js", img: "/images/stacks/vuedotjs.svg", level: 2, white: true },
    { name: "Figma", img: "/images/stacks/figma-mono.svg", level: 2, white: true },
    { name: "GitHub Actions", img: "/images/stacks/github-actions.svg", level: 2, white: true },
    { name: "npm", img: "/images/stacks/npm-mono.svg", level: 2, white: true },
    { name: "pnpm", img: "/images/stacks/pnpm-mono.svg", level: 2, white: true },
    { name: "Google Cloud", img: "/images/stacks/googlecloud-mono.svg", level: 2, white: true },
    { name: "GCP API", img: "/images/stacks/gcp-api.svg", level: 2, white: true },
    { name: "Composer", img: "/images/stacks/composer-mono.svg", level: 2, white: true },
  ];

  const inventoryGroups: {
    name: string;
    icon: string;
    items: StackItem[];
    minCells: number;
  }[] = [
    {
      name: "Languages & Frameworks",
      icon: "code",
      minCells: 40,
      items: [
        ...productionStack.filter(({ name }) =>
          ["Laravel", "PHP", "Python", "HTML", "CSS", "JavaScript"].includes(name),
        ),
        ...exploringStack.filter(({ name }) =>
          ["TypeScript", "NestJS", "SvelteKit", "Node.js"].includes(name),
        ),
        ...additionalStack.filter(({ name }) =>
          [
            "Alpine.js",
            "Dart",
            "Express.js",
            "FastAPI",
            "Flutter",
            "Nuxt",
            "Sass",
            "Vue.js",
          ].includes(name),
        ),
        ...productionStack.filter(({ name }) =>
          ["Tailwind CSS", "Google Apps Script", "Bootstrap"].includes(name),
        ),
      ],
    },
    {
      name: "Databases & Data",
      icon: "database",
      minCells: 20,
      items: [
        ...productionStack.filter(({ name }) => name === "MySQL"),
        ...exploringStack.filter(({ name }) => ["Prisma", "PostgreSQL"].includes(name)),
        ...additionalStack.filter(({ name }) =>
          ["Redis", "SQLite", "Supabase"].includes(name),
        ),
      ],
    },
    {
      name: "Tools & Workflow",
      icon: "build",
      minCells: 20,
      items: [
        ...tools,
        ...additionalStack.filter(({ name }) =>
          [
            "Figma",
            "GitHub Actions",
            "Google Cloud",
            "GCP API",
            "Pinia",
            "npm",
            "pnpm",
            "Composer",
          ].includes(name),
        ),
        ...exploringStack.filter(({ name }) => ["Turborepo", "Windmill"].includes(name)),
      ],
    },
  ];
  const personalProjects = [
    {
      name: "CTRL Agent",
      img: "/images/projects/CTRLBuild-White.png",
      link: null,
      active: false,
      type: "Developer Tool",
      desc: "A terminal-first AI coding agent designed to keep developers in control. It combines a full-screen TUI with shell access, file editing, LSP diagnostics, web fetching, and code search in one focused workflow.",
      workflow: [
        { label: "Request", icon: "chat", detail: "Define the task" },
        { label: "Inspect", icon: "search", detail: "Explore the context" },
        { label: "Plan", icon: "route", detail: "Choose an approach" },
        { label: "Execute", icon: "edit_note", detail: "Apply the work" },
        { label: "Verify", icon: "task_alt", detail: "Review the output" },
      ],
      tags: ["Go", "Python", "AI Tooling"],
    },
    {
      name: "Scroll",
      img: "/images/projects/logo-scroll.png",
      preview: "/images/projects/previews/scroll-preview.jpg",
      link: "https://github.com/Sultonisky/Scroll",
      type: "Web Application",
      desc: "A self-hosted payroll platform for remote-first teams. It brings employee records, payroll operations, and recurring administrative workflows into a single private workspace.",
      workflow: [
        { label: "Input", icon: "edit_note", detail: "Prepare payroll data" },
        { label: "Review", icon: "fact_check", detail: "Check the records" },
        { label: "Approve", icon: "task_alt", detail: "Confirm the run" },
        { label: "Pay", icon: "account_balance", detail: "Complete the payment" },
      ],
      tags: ["Laravel", "PHP", "JavaScript", "MySQL", "SQLite", "Bootstrap"],
    },
    {
      name: "CTRL Build",
      img: "/images/projects/CTRLBuild-White.png",
      link: "https://www.ctrl-build.my.id/",
      active: false,
      type: "Interactive Website",
      desc: "An experimental interactive landing page focused on immersive motion and WebGL. It combines particle-based typography, fluid cursor interactions, and smooth scrolling into a responsive visual experience.",
      workflow: [
        { label: "Input", icon: "lightbulb", detail: "Set the visual direction" },
        { label: "Build", icon: "layers", detail: "Compose the experience" },
        { label: "Interact", icon: "motion_mode", detail: "Connect user actions" },
        { label: "Polish", icon: "tune", detail: "Refine the experience" },
      ],
      tags: ["React", "Vite", "Three.js", "Lenis"],
    },
    {
      name: "Slogy",
      img: "/images/projects/slogy-logo-r.png",
      preview: "/images/projects/previews/slogy-preview.jpg",
      link: "https://github.com/Sultonisky/Slogy",
      type: "Developer Package",
      desc: "A Laravel activity-logging package built for traceability and tamper awareness. It records application events, adds SHA-256 integrity checks, and provides tools for verifying log history.",
      workflow: [
        { label: "Capture", icon: "event_note", detail: "Record activity" },
        { label: "Hash", icon: "fingerprint", detail: "Protect the entry" },
        { label: "Chain", icon: "link", detail: "Relate the history" },
        { label: "Verify", icon: "verified", detail: "Check the integrity" },
      ],
      tags: ["Laravel", "PHP", "Composer", "SQLite"],
    },
    {
      name: "Rasanesia",
      img: "/images/projects/rasanesia.png",
      preview: "/images/projects/previews/rasanesia-preview.jpg",
      link: "https://github.com/Sultonisky/Rasanesia.git",
      type: "Web Application",
      desc: "A recipe-sharing platform for discovering, creating, and managing Indonesian recipes. It combines public recipe browsing with authentication, reviews and ratings, favorites, PDF export, and an admin dashboard for content management.",
      workflow: [
        { label: "Discover", icon: "search", detail: "Browse Indonesian recipes" },
        { label: "Create", icon: "edit_note", detail: "Share a recipe" },
        { label: "Review", icon: "star", detail: "Rate and discuss recipes" },
        { label: "Save", icon: "favorite", detail: "Keep favorite recipes" },
        { label: "Manage", icon: "admin_panel_settings", detail: "Control platform content" },
      ],
      tags: ["Laravel", "PHP", "JavaScript", "MySQL", "Bootstrap", "GCP", "GCP API"],
    },
    {
      name: "E-KTM Mobile",
      img: "/images/projects/logo_ketupat.png",
      preview: "/images/projects/previews/ektm-preview.jpg",
      link: "https://github.com/Sultonisky/ektm-project-monorepo",
      type: "Mobile Application",
      desc: "A mobile tuition-payment platform for Bina Sarana Informatika University (UBSI). It guides students through payment selection and checkout while connecting transaction processing to Midtrans.",
      workflow: [
        { label: "Select", icon: "receipt_long", detail: "Choose a bill" },
        { label: "Checkout", icon: "shopping_cart", detail: "Start the payment" },
        { label: "Process", icon: "payments", detail: "Handle the transaction" },
        { label: "Callback", icon: "sync", detail: "Receive the update" },
        { label: "Confirm", icon: "task_alt", detail: "Show the result" },
      ],
      tags: [
        "React Native",
        "NestJS",
        "SvelteKit",
        "TypeScript",
        "Prisma",
        "PNPM",
        "Turborepo",
        "Midtrans",
        "PostgreSQL",
      ],
    },
    {
      name: "Bookingin",
      img: "/images/projects/logo-putih.png",
      preview: "/images/projects/previews/bookingin-preview.jpg",
      link: "https://github.com/Sultonisky/Project-Laravel-Hotel-Bookingin",
      type: "Web Application",
      desc: "A hotel reservation platform with separate guest and admin experiences. It supports room booking, Midtrans payments, webhook-based confirmation, and email notifications from reservation to completion.",
      workflow: [
        { label: "Search", icon: "search", detail: "Find a room" },
        { label: "Reserve", icon: "event_available", detail: "Create a booking" },
        { label: "Pay", icon: "payments", detail: "Complete the payment" },
        { label: "Callback", icon: "sync", detail: "Confirm the transaction" },
        { label: "Notify", icon: "mail", detail: "Send confirmation" },
      ],
      tags: ["Laravel", "PHP", "JavaScript", "MySQL", "Bootstrap", "Midtrans"],
    },
  ];

  const clientProjects = [
    {
      name: "Job Portal | Anagata Executive",
      img: "/images/projects/anagata-white.png",
      preview: "/images/projects/previews/anagata-preview.png",
      link: "https://anagataexecutive.co.id/",
      type: "Client Platform",
      desc: "A recruitment platform for Anagata Executive that helps connect candidates with relevant opportunities. The experience presents job listings and company information through a clear, content-focused interface.",
      workflow: [
        { label: "Publish", icon: "post_add", detail: "Share opportunities" },
        { label: "Discover", icon: "search", detail: "Browse available roles" },
        { label: "Match", icon: "handshake", detail: "Connect candidates" },
        { label: "Apply", icon: "send", detail: "Start an application" },
      ],
      tags: ["Laravel", "PHP", "JavaScript", "MySQL", "Tailwind", "Bootstrap"],
    },
    {
      name: "Titip Kebaikan",
      img: "/images/projects/logo-tb.png",
      preview: "/images/projects/previews/titip-kebaikan-preview.jpg",
      link: null,
      type: "Client Platform",
      desc: "A foundation-management platform for Yayasan At-Tarbiyah Pintu Air. It supports donation processing, program administration, and financial reporting to make charitable operations easier to manage and review.",
      workflow: [
        { label: "Donate", icon: "volunteer_activism", detail: "Receive a donation" },
        { label: "Manage", icon: "folder_managed", detail: "Organize programs" },
        { label: "Record", icon: "receipt_long", detail: "Track the activity" },
        { label: "Report", icon: "analytics", detail: "Review the impact" },
      ],
      tags: ["Laravel", "PHP", "JavaScript", "MySQL", "Tailwind", "Bootstrap", "Supabase", "Midtrans"],
    },
    {
      name: "The Days Coffee",
      img: "/images/projects/dedyass.png",
      preview: "/images/projects/previews/days-coffee-preview.jpg",
      link: null,
      type: "Client Website",
      desc: "A simple and responsive coffee shop website. Users can place orders through a complete order form that automatically redirects to WhatsApp with their full order details for easy communication.",
      workflow: [
        { label: "Browse", icon: "coffee", detail: "Explore the menu" },
        { label: "Order", icon: "shopping_cart", detail: "Complete the order form" },
        { label: "Review", icon: "fact_check", detail: "Check the order details" },
        { label: "WhatsApp", icon: "send", detail: "Send the order directly" },
      ],
      tags: ["HTML", "CSS", "JavaScript", "Alpine.js"],
    },
  ];

  const stackIconMap: Record<string, string> = {
    Bootstrap: "/images/stacks/bootstrap.svg",
    "Alpine.js": "/images/stacks/alpinejs.svg",
    Composer: "/images/stacks/composer-mono.svg",
    CSS: "/images/stacks/css.svg",
    Git: "/images/stacks/git.svg",
    GitHub: "/images/stacks/github.svg",
    "Google Apps Script": "/images/stacks/google-apps-script.svg",
    HTML: "/images/stacks/html.svg",
    JavaScript: "/images/stacks/javascript.svg",
    Laravel: "/images/stacks/laravel.svg",
    Midtrans: "/images/stacks/midtrans.svg",
    MySQL: "/images/stacks/mysql.svg",
    NestJS: "/images/stacks/nestjs.svg",
    PHP: "/images/stacks/php.svg",
    PNPM: "/images/stacks/pnpm-mono.svg",
    PostgreSQL: "/images/stacks/postgres.svg",
    Prisma: "/images/stacks/prisma.svg",
    Python: "/images/stacks/python.svg",
    "React Native": "/images/stacks/react-native.svg",
    SQLite: "/images/stacks/sqlite-mono.svg",
    Supabase: "/images/stacks/supabase-mono.svg",
    SvelteKit: "/images/stacks/sveltekit.svg",
    Tailwind: "/images/stacks/tailwind.svg",
    "TypeScript": "/images/stacks/ts.svg",
    Turborepo: "/images/stacks/turborepo.svg",
    Vite: "/images/stacks/vite.svg",
    "Windmill Dev": "/images/stacks/windmill.svg",
    "GCP API": "/images/stacks/gcp-api.svg",
    "GCP": "/images/stacks/googlecloud-mono.svg",
  };

  const activePersonalProjects = personalProjects.filter(({ active = true }) => active);
  let personalProjectIndex = $state(0);
  let clientProjectIndex = $state(0);

  function showPersonalProject(index: number) {
    personalProjectIndex = (index + activePersonalProjects.length) % activePersonalProjects.length;
  }

  function showClientProject(index: number) {
    clientProjectIndex = (index + clientProjects.length) % clientProjects.length;
  }

  onMount(() => {
    const experienceDurationInterval = window.setInterval(() => {
      mahakaryaDuration = getCurrentExperienceDuration("2026-07-01");
    }, 24 * 60 * 60 * 1000);

    return () => {
      window.clearInterval(experienceDurationInterval);
    };
  });

  function handleAnchorClick(e: MouseEvent, href: string) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
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
          class="font-body-lg text-body-lg text-on-surface-variant text-pretty leading-relaxed mb-8"
        >
          Informatics and
          <span class="text-primary font-semibold">UX-first Full-Stack Developer</span>
          based in Indonesia. I start by understanding what people need and finding
          the simplest way to help. When software is the right fit, I build intuitive
          experiences and dependable systems, working primarily with Laravel &amp;
          PHP across accessible interfaces, APIs, and data layers.
        </p>

        <div class="flex flex-wrap items-center gap-3">
          <a
            class="bg-primary text-[#13181A] px-6 py-3.5 rounded-lg flex items-center gap-2 hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300 font-label-caps text-label-caps font-semibold"
            href={`mailto:${socialLinks.email}`}
          >
            <span class="material-symbols-outlined text-[20px]">mail</span>
            Contact
          </a>
          <a
            class="bg-[#1D2427]/70 border border-[#333F43] text-on-background px-6 py-3.5 rounded-lg flex items-center gap-2 hover:border-primary/50 hover:text-primary transition-all duration-300 font-label-caps text-label-caps"
            href="/images/RESUME_SULTONI.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="material-symbols-outlined text-[20px]">description</span>
            Open CV
          </a>
        </div>
      </div>

      <figure
        class="hero-portrait lg:col-span-5 lg:justify-self-end w-full max-w-[280px] sm:max-w-[340px] group relative isolate"
      >
        <!-- Ambient glows + geometry behind the cutout -->
        <div class="hero-portrait-glow hero-portrait-glow-core" aria-hidden="true"></div>
        <div class="hero-portrait-glow hero-portrait-glow-orbit" aria-hidden="true"></div>
        <div class="hero-portrait-glow hero-portrait-glow-soft" aria-hidden="true"></div>
        <div class="hero-portrait-ring" aria-hidden="true"></div>
        <div class="hero-portrait-ring hero-portrait-ring-outer" aria-hidden="true"></div>
        <div class="hero-portrait-grid" aria-hidden="true"></div>
        <div class="hero-portrait-ticks" aria-hidden="true">
          <span class="tick tick-tl-h"></span>
          <span class="tick tick-tl-v"></span>
          <span class="tick tick-tr-h"></span>
          <span class="tick tick-tr-v"></span>
          <span class="tick tick-bl-h"></span>
          <span class="tick tick-bl-v"></span>
          <span class="tick tick-br-h"></span>
          <span class="tick tick-br-v"></span>
        </div>

        <img
          src="/images/profile-rm1.png"
          alt="Mohammad Sultoni"
          class="hero-portrait-img relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:scale-[1.02]"
          width="386"
          height="646"
        />
      </figure>
      <!--
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
      -->
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
        <div class="flex items-center justify-between gap-3 mb-6 border-b border-[#333F43]/40 pb-4">
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
            <span>Turn real needs into intuitive, accessible digital experiences</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
            <span>Build full-stack apps with clean, responsive interfaces</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
            <span>Create dependable backends, REST APIs, and data layers</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
            <span>Make internal tools and automation that simplify everyday work</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
            <span>Choose software when it is the right solution for the need</span>
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
        <div class="flex items-center justify-between gap-3 mb-6 border-b border-[#333F43]/40 pb-4">
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
            <span>Listen closely and understand the real need</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="font-mono text-xs text-primary bg-primary/10 border border-primary/20 rounded-md px-2 py-1">02</span>
            <span>Explore options and choose the simplest effective solution</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="font-mono text-xs text-primary bg-primary/10 border border-primary/20 rounded-md px-2 py-1">03</span>
            <span>Shape a clear, accessible experience around the user</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="font-mono text-xs text-primary bg-primary/10 border border-primary/20 rounded-md px-2 py-1">04</span>
            <span>Build and test for usability and reliability</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="font-mono text-xs text-primary bg-primary/10 border border-primary/20 rounded-md px-2 py-1">05</span>
            <span>Learn from feedback and keep improving</span>
          </li>
        </ol>
      </article>
    </div>
  </section>

  <!-- Work Experience Section -->
  <section
    class="px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full py-section-gap border-t border-[#333F43]/30 relative overflow-hidden"
    id="experience"
  >
    <div class="section-cable section-cable-right" aria-hidden="true">
      <span class="section-cable-wire"></span>
      <span class="section-cable-node section-cable-node-top"></span>
      <span class="section-cable-node section-cable-node-bottom"></span>
    </div>
    <div class="section-cable-bridge" aria-hidden="true"></div>

    <div class="absolute -left-20 top-1/3 w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
    <div class="absolute -right-20 bottom-1/4 w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

    <div class="absolute top-20 right-[10%] opacity-[0.11] animate-float pointer-events-none hidden lg:block">
      <span class="material-symbols-outlined text-5xl text-primary">work_history</span>
    </div>

    <div class="absolute top-0 left-0 w-24 h-24 pointer-events-none corner-accent">
      <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary/40 to-transparent"></div>
      <div class="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-primary/40 to-transparent"></div>
    </div>

    <div class="relative z-10">
      <div class="mb-12">
        <p class="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-2">
          Work Experience
        </p>
        <h2 class="font-headline-md text-headline-md text-on-background mb-2">
          Where I Have Built
        </h2>
        <p class="text-on-surface-variant text-body-md">
          A look at the team experience and practical work that shaped how I build.
        </p>
      </div>

      <div class="glass rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-xl">
        <div class="relative z-10 flex flex-col">
          {#each workExperiences as experience, experienceIndex}
            <article class:work-experience-divider={experienceIndex < workExperiences.length - 1} class="relative pb-6 pt-2 first:pt-0 last:pb-0">
            <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-6 lg:gap-10">
              <div class="flex gap-4 md:gap-6">
                <div class="flex flex-col items-center shrink-0">
                  <div class="flex items-center justify-center w-11 h-11 rounded-xl border border-primary/30 bg-primary/10 text-primary overflow-hidden">
                    {#if experience.logo}
                      <img src={experience.logo} alt={`${experience.company} logo`} class="w-full h-full object-contain p-2" />
                    {:else}
                      <span class="material-symbols-outlined">work</span>
                    {/if}
                  </div>
                  <div class="w-px flex-1 mt-3 bg-gradient-to-b from-primary/50 to-transparent"></div>
                </div>

                <div class="min-w-0">
                  <div class="flex flex-wrap items-center gap-2 mb-2">
                    <h3 class="font-headline-md text-headline-md text-on-background leading-tight">
                      {experience.role}
                    </h3>
                    <span class="font-label-caps text-label-caps text-white border border-primary/25 bg-primary/10 rounded-md px-2 py-1">
                      {experience.employmentType}
                    </span>
                  </div>
                  <p class="font-body-lg text-body-lg text-on-background font-semibold">
                    {experience.company}
                  </p>
                  <p class="mt-1 text-on-surface-variant text-body-md">
                    {experience.summary}
                  </p>
                  <div class="flex flex-wrap gap-2 mt-5">
                    {#each experience.skills as skill}
                      <span class="font-label-caps text-label-caps text-xs text-white px-2.5 py-1 rounded-md border border-primary/20 bg-primary/10">
                        {skill}
                      </span>
                    {/each}
                  </div>
                </div>
              </div>

              <div class="lg:min-w-48 lg:text-right">
                <p class="font-mono text-xs text-white">{experience.period}</p>
                <p class="mt-1 text-sm text-on-surface-variant">
                  {experience.duration ?? mahakaryaDuration}
                </p>
                <p class="mt-4 text-sm text-on-surface-variant">{experience.location}</p>
              </div>
            </div>
            </article>
          {/each}
        </div>
      </div>
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
      <p
        class="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-2"
      >
        Technical Inventory
      </p>
      <h2 class="font-headline-md text-headline-md text-on-background mb-2">
        Stack & Explorations
      </h2>
      <p class="text-on-surface-variant text-body-md">
        The technologies, tools, and platforms I use and continue to explore.
      </p>
    </div>
    <div class="glass rounded-2xl p-6 md:p-8 relative z-10 shadow-xl">
      <div class="inventory-category-grid">
        {#each inventoryGroups as group, i}
          <div
            class="inventory-category glass rounded-xl border border-[#333F43]/50 p-4 md:p-5"
            style={`--inventory-column-span: ${i === 0 ? "1 / -1" : "auto"}; --inventory-grid-columns: ${i === 0 ? 20 : 10};`}
          >
            <div class="flex items-center gap-2.5 mb-4 border-b border-[#333F43]/40 pb-3">
              <span class="material-symbols-outlined text-primary">{group.icon}</span>
              <h3 class="font-label-caps text-label-caps text-on-background">{group.name}</h3>
            </div>
            <div class="contribution-grid">
              {#each group.items as item, i}
                <button
                  class="contribution-cell contribution-level-{item.level} cursor-pointer group relative"
                  aria-label={item.name}
                  title={item.name}
                  type="button"
                >
                  <img
                    alt={item.name}
                    class="w-7 h-7 object-contain opacity-60 group-hover:opacity-85 {item.white ? 'stack-icon-white' : ''}"
                    src={item.img}
                  />
                  <div
                    class="inventory-tooltip inventory-tooltip-hover absolute -top-12 left-1/2 -translate-x-1/2 bg-[#13181A] border border-[#333F43] rounded px-3 py-1.5 text-xs font-label-caps text-on-background opacity-0 pointer-events-none whitespace-nowrap z-20 before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-[#333F43]"
                    aria-hidden="true"
                  >
                    {item.name}
                  </div>
                </button>
              {/each}
              {#each Array.from({ length: Math.max(0, group.minCells - group.items.length) }) as _}
                <div class="contribution-cell contribution-level-0 inventory-empty-cell" aria-hidden="true"></div>
              {/each}
            </div>
          </div>
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

      <p class="inventory-hint mt-4 text-left font-label-caps text-xs text-on-surface-variant">
        Hover or tap an item to see the details.
      </p>
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
        <p
          class="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-2"
        >
          Project Portfolio
        </p>
        <h2 class="font-headline-md text-headline-md text-on-background mb-2">
          Selected Work
        </h2>
        <p class="text-on-surface-variant text-body-md">
          A selection of personal projects and client work I have built.
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
        >
        <div class="project-track">
          <div class="project-track-group">
        {#each activePersonalProjects as item, i}
          {#if i === personalProjectIndex}
          <div
            class="project-card group relative overflow-hidden rounded-2xl"
          >
            {#if item.preview}
              <div class="project-preview">
                <img
                  src={item.preview}
                  alt={`${item.name} preview`}
                  class="project-preview-img"
                  loading="lazy"
                  width="1280"
                  height="720"
                />
                <div class="project-preview-fade" aria-hidden="true"></div>
              </div>
            {/if}
            <div class="p-6 flex flex-col gap-6 relative z-10 min-h-full">
              <div class="flex justify-between items-start gap-4">
                <div class="flex items-center gap-4 min-w-0">
                  <div class="relative shrink-0">
                    <div
                      class="relative border border-[#333F43]/70 p-3 rounded-xl group-hover:border-primary/50 group-hover:scale-105 transition-all duration-300"
                    >
                      {#if item.img}
                        <img
                          alt={item.name}
                          class="w-9 h-auto object-contain"
                          src={item.img}
                        />
                      {:else}
                        <span class="material-symbols-outlined text-primary text-2xl">schedule</span>
                      {/if}
                    </div>
                  </div>
                  <div class="min-w-0">
                    <h3 class="font-body-lg text-body-lg text-on-background font-semibold truncate">
                      {item.name}
                    </h3>
                    <p class="mt-1 text-sm text-on-surface-variant truncate">{item.type}</p>
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
                <p
                  class="text-on-surface-variant text-body-md leading-relaxed line-clamp-4"
                >
                  {item.desc}
                </p>
              </div>

              <div class="workflow-run rounded-xl border border-[#333F43]/60 p-4">
                <div class="flex items-center gap-2 border-b border-[#333F43]/50 pb-3">
                  <span class="material-symbols-outlined text-primary text-base">account_tree</span>
                  <span class="font-mono text-[10px] text-on-surface-variant">SYSTEM FLOW</span>
                </div>
                <div class="workflow-run-steps">
                  {#each item.workflow as step, stepIndex}
                    <div class="workflow-run-step">
                      <div class="workflow-run-node">
                        <span class="material-symbols-outlined text-base">{step.icon}</span>
                      </div>
                      <div class="min-w-0">
                        <h4 class="font-label-caps text-label-caps text-on-background">{step.label}</h4>
                        <p class="mt-1 text-xs text-on-surface-variant">{step.detail}</p>
                      </div>
                    </div>
                    {#if stepIndex < item.workflow.length - 1}
                      <span class="workflow-run-connector" aria-hidden="true"></span>
                    {/if}
                  {/each}
                </div>
              </div>

              <div class="flex flex-wrap gap-2 mt-auto pt-2">
                {#each item.tags as tag}
                  {@const stackIcon = stackIconMap[tag]}
                  {@const stackIconIsWhite = tag === "PNPM" || tag === "Composer"}
                  <span class="project-stack-tag font-label-caps text-label-caps text-xs text-white px-2.5 py-1 rounded-md border border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                    {#if stackIcon}
                      <img class:stack-icon-white={stackIconIsWhite} src={stackIcon} alt="" aria-hidden="true" />
                    {/if}
                    <span>{tag}</span>
                  </span>
                {/each}
              </div>
            </div>
          </div>
          {/if}
        {/each}
          </div>
          <div class="project-track-group" aria-hidden="true">
            {#each activePersonalProjects as item, i}
              {@const duplicateItem = item}
              <div
                class="project-card group relative overflow-hidden rounded-2xl"
              >
                <div class="p-6 flex flex-col gap-6 relative z-10 min-h-full">
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
                      <h3 class="font-body-lg text-body-lg text-on-background font-semibold">{duplicateItem.name}</h3>
                    </div>
                    <p class="text-on-surface-variant text-body-md leading-relaxed line-clamp-4">{duplicateItem.desc}</p>
                  </div>
                  <div class="flex flex-wrap gap-2 mt-auto pt-2">
                    {#each duplicateItem.tags as tag}
                      {@const stackIcon = stackIconMap[tag]}
                      {@const stackIconIsWhite = tag === "PNPM" || tag === "Composer"}
                      <span class="project-stack-tag font-label-caps text-label-caps text-xs text-white px-2.5 py-1 rounded-md border border-primary/20">
                        {#if stackIcon}
                          <img class:stack-icon-white={stackIconIsWhite} src={stackIcon} alt="" aria-hidden="true" />
                        {/if}
                        <span>{tag}</span>
                      </span>
                    {/each}
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
      <div class="project-pagination" role="group" aria-label="Personal project pagination">
        {#each activePersonalProjects as item, i}
          <button
            type="button"
            class:active={i === personalProjectIndex}
            aria-label={`Show personal project ${i + 1}: ${item.name}`}
            aria-pressed={i === personalProjectIndex}
            onclick={() => showPersonalProject(i)}
          ></button>
        {/each}
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
        >
          <div class="project-track project-track-reverse">
            <div class="project-track-group">
          {#each clientProjects as item, i}
              {#if i === clientProjectIndex}
              <div
                class="project-card group relative overflow-hidden rounded-2xl"
              >
              {#if item.preview}
                <div class="project-preview">
                  <img
                    src={item.preview}
                    alt={`${item.name} preview`}
                    class="project-preview-img"
                    loading="lazy"
                    width="1280"
                    height="720"
                  />
                  <div class="project-preview-fade" aria-hidden="true"></div>
                </div>
              {/if}
              <div class="p-6 flex flex-col gap-6 relative z-10 min-h-full">
                <div class="flex justify-between items-start gap-4">
                  <div class="flex items-center gap-4 min-w-0">
                    <div class="relative shrink-0">
                      <div
                        class="relative border border-[#333F43]/70 p-3 rounded-xl group-hover:border-primary/50 group-hover:scale-105 transition-all duration-300"
                      >
                        {#if item.img}
                          <img
                            alt={item.name}
                            class="w-9 h-auto object-contain"
                            src={item.img}
                          />
                        {:else}
                          <span class="material-symbols-outlined text-primary text-2xl">apartment</span>
                        {/if}
                      </div>
                    </div>
                    <div class="min-w-0">
                      <h3 class="font-body-lg text-body-lg text-on-background font-semibold truncate">
                        {item.name}
                      </h3>
                      <p class="mt-1 text-sm text-on-surface-variant truncate">{item.type}</p>
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
                  <p
                    class="text-on-surface-variant text-body-md leading-relaxed line-clamp-4"
                  >
                    {item.desc}
                  </p>
                </div>

                <div class="workflow-run rounded-xl border border-[#333F43]/60 p-4">
                  <div class="flex items-center gap-2 border-b border-[#333F43]/50 pb-3">
                    <span class="material-symbols-outlined text-primary text-base">account_tree</span>
                    <span class="font-mono text-[10px] text-on-surface-variant">SYSTEM FLOW</span>
                  </div>
                  <div class="workflow-run-steps">
                    {#each item.workflow as step, stepIndex}
                      <div class="workflow-run-step">
                        <div class="workflow-run-node">
                          <span class="material-symbols-outlined text-base">{step.icon}</span>
                        </div>
                        <div class="min-w-0">
                          <h4 class="font-label-caps text-label-caps text-on-background">{step.label}</h4>
                          <p class="mt-1 text-xs text-on-surface-variant">{step.detail}</p>
                        </div>
                      </div>
                      {#if stepIndex < item.workflow.length - 1}
                        <span class="workflow-run-connector" aria-hidden="true"></span>
                      {/if}
                    {/each}
                  </div>
                </div>

                <div class="flex flex-wrap gap-2 mt-auto pt-2">
                  {#each item.tags as tag}
                    {@const stackIcon = stackIconMap[tag]}
                    {@const stackIconIsWhite = tag === "PNPM" || tag === "Composer"}
                    <span class="project-stack-tag font-label-caps text-label-caps text-xs text-white px-2.5 py-1 rounded-md border border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                      {#if stackIcon}
                        <img class:stack-icon-white={stackIconIsWhite} src={stackIcon} alt="" aria-hidden="true" />
                      {/if}
                      <span>{tag}</span>
                    </span>
                  {/each}
                </div>
              </div>
            </div>
            {/if}
          {/each}
            </div>
            <div class="project-track-group" aria-hidden="true">
              {#each clientProjects as item, i}
                <div
                  class="project-card group relative overflow-hidden rounded-2xl"
                >
                  <div class="p-6 flex flex-col gap-6 relative z-10 min-h-full">
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
                      {#if item.link}
                        <a
                          class="inline-flex items-center gap-1.5 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors"
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View
                          <span class="material-symbols-outlined text-base">arrow_outward</span>
                        </a>
                      {:else}
                        <span class="font-label-caps text-label-caps text-on-surface-variant/70">
                          Details on request
                        </span>
                      {/if}
                    </div>
                    <div class="flex flex-col gap-3">
                      <div class="flex items-baseline gap-2">
                        <h3 class="font-body-lg text-body-lg text-on-background font-semibold">{item.name}</h3>
                      </div>
                      <p class="text-on-surface-variant text-body-md leading-relaxed line-clamp-4">{item.desc}</p>
                    </div>
                    <div class="flex flex-wrap gap-2 mt-auto pt-2">
                      {#each item.tags as tag}
                        {@const stackIcon = stackIconMap[tag]}
                        {@const stackIconIsWhite = tag === "PNPM" || tag === "Composer"}
                        <span class="project-stack-tag font-label-caps text-label-caps text-xs text-white px-2.5 py-1 rounded-md border border-primary/20">
                          {#if stackIcon}
                            <img class:stack-icon-white={stackIconIsWhite} src={stackIcon} alt="" aria-hidden="true" />
                          {/if}
                          <span>{tag}</span>
                        </span>
                      {/each}
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
      <div class="project-pagination" role="group" aria-label="Client project pagination">
        {#each clientProjects as item, i}
          <button
            type="button"
            class:active={i === clientProjectIndex}
            aria-label={`Show client project ${i + 1}: ${item.name}`}
            aria-pressed={i === clientProjectIndex}
            onclick={() => showClientProject(i)}
          ></button>
        {/each}
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
      <div class="mb-12">
        <p
          class="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-2"
        >
          Connection Center
        </p>
        <h2 class="font-headline-md text-headline-md text-on-background mb-2">
          Let's Connect
        </h2>
        <p class="text-on-surface-variant text-body-md">
          Have an idea, project, or opportunity in mind? Let’s build something
          meaningful together.
        </p>
      </div>

      <div class="glass rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-xl">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <!-- Left: pitch -->
          <div class="md:col-span-5 flex flex-col justify-center gap-8 md:border-r md:border-[#333F43]/40 md:pr-8">
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
                class="group flex items-center gap-4 rounded-xl border border-[#333F43]/50 bg-white/[0.02] p-4 hover:border-primary/50 hover:bg-primary/[0.06] transition-all duration-300"
                href={`mailto:${socialLinks.email}`}
              >
                <div class="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary shrink-0">
                  <img src="/images/stacks/gmail.svg" alt="" class="w-5 h-5" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-xs mb-0.5">Email</p>
                  <p class="font-body-md text-on-background truncate">{socialLinks.email}</p>
                </div>
                <span class="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">arrow_outward</span>
              </a>
              <a
                class="group flex items-center gap-4 rounded-xl border border-[#333F43]/50 bg-white/[0.02] p-4 hover:border-primary/50 hover:bg-primary/[0.06] transition-all duration-300"
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
                class="group flex items-center gap-4 rounded-xl border border-[#333F43]/50 bg-white/[0.02] p-4 hover:border-primary/50 hover:bg-primary/[0.06] transition-all duration-300"
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
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<Footer />
