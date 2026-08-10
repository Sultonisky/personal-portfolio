/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: "class",
	theme: {
		extend: {
			"colors": {
				// Core Palette (80% Gunmetal, 20% Cyber Neon Yellow)
				"background": "#13181A",       // Darkest Gunmetal (Main Background)
				"surface": "#13181A",          // Same as background
				"surface-container": "#1D2427", // Medium Gunmetal (Cards, Navbar, Footer)
				"surface-container-low": "#1D2427",
				"surface-container-high": "#1D2427",
				"surface-container-highest": "#1D2427",
				"surface-container-lowest": "#13181A",
				"surface-dim": "#13181A",
				"surface-bright": "#1D2427",
				"surface-variant": "#333F43",  // Light Gunmetal (Borders, Dividers)
				"primary": "#ff0fafff",          // Cyber Neon Yellow (Primary Accent & CTA)
				"primary-container": "#13181A",
				"on-primary": "#13181A",       // Dark background for yellow text
				"on-primary-container": "#ff0fafff",
				"primary-fixed": "#ff0fafff",
				"primary-fixed-dim": "#fff200ff",
				"on-primary-fixed": "#13181A",
				"on-primary-fixed-variant": "#13181A",
				"outline": "#333F43",          // Light Gunmetal (Borders)
				"outline-variant": "#333F43",  // Light Gunmetal (Dividers)
				
				// Text Colors
				"on-background": "#F1F5F9",    // Ice White (Headings)
				"on-surface": "#F1F5F9",       // Ice White (Headings)
				"on-surface-variant": "#94A3B8", // Slate Silver (Body Text)
				"secondary": "#475569",        // Muted Gray (Secondary Text)
				"on-secondary": "#F1F5F9",
				"secondary-container": "#1D2427",
				"on-secondary-container": "#94A3B8",
				"secondary-fixed": "#1D2427",
				"secondary-fixed-dim": "#1D2427",
				"on-secondary-fixed": "#F1F5F9",
				"on-secondary-fixed-variant": "#94A3B8",
				
				// Tertiary (keep as gunmetal for consistency)
				"tertiary": "#333F43",
				"on-tertiary": "#F1F5F9",
				"tertiary-container": "#1D2427",
				"on-tertiary-container": "#94A3B8",
				"tertiary-fixed": "#1D2427",
				"tertiary-fixed-dim": "#1D2427",
				"on-tertiary-fixed": "#F1F5F9",
				"on-tertiary-fixed-variant": "#94A3B8",
				
				// Error (keep or adjust if needed)
				"error": "#ffb4ab",
				"on-error": "#690005",
				"error-container": "#93000a",
				"on-error-container": "#ffdad6",
				
				// Inverse
				"inverse-surface": "#F1F5F9",
				"inverse-on-surface": "#13181A",
				"inverse-primary": "#fff200ff",
				"surface-tint": "#fff200ff",
				"accent-magenta": "#ff0fafff"
			},
			"borderRadius": {
				"DEFAULT": "0.125rem",
				"lg": "0.25rem",
				"xl": "0.5rem",
				"full": "0.75rem"
			},
			"spacing": {
				"container-max": "1200px",
				"base": "8px",
				"gutter": "24px",
				"margin-mobile": "16px",
				"section-gap": "80px"
			},
			"fontFamily": {
				"headline-md": ["Geist", "sans-serif"],
				"headline-lg-mobile": ["Geist", "sans-serif"],
				"body-lg": ["Geist", "sans-serif"],
				"headline-lg": ["Geist", "sans-serif"],
				"body-md": ["Geist", "sans-serif"],
				"label-caps": ["JetBrains Mono", "monospace"],
				"code-sm": ["JetBrains Mono", "monospace"]
			},
			"fontSize": {
				"headline-md": ["24px", { "lineHeight": "1.3", "fontWeight": "600" }],
				"headline-lg-mobile": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700" }],
				"body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
				"headline-lg": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
				"body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "400" }],
				"label-caps": ["12px", { "lineHeight": "1.0", "letterSpacing": "0.05em", "fontWeight": "600" }],
				"code-sm": ["14px", { "lineHeight": "1.5", "fontWeight": "400" }]
			}
		}
	},
	plugins: []
};
