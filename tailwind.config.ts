import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                surface: "var(--surface)",
                foreground: "var(--foreground)",
                "accent-gold": "var(--accent-gold)",
                "accent-olive": "var(--accent-olive)",
            },
            fontFamily: {
                serif: ["var(--font-italiana)", "serif"],
                sans: ["var(--font-manrope)", "sans-serif"],
                display: ["var(--font-cinzel)", "serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
