import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-in": "slideIn 0.5s ease-out",
        blob: "blob 7s infinite",
        gradient: "gradient 15s ease infinite",
        shimmer: "shimmer 2s linear infinite",
        "aurora-1": "aurora1 20s ease-in-out infinite",
        "aurora-2": "aurora2 25s ease-in-out infinite",
        "aurora-3": "aurora3 18s ease-in-out infinite",
        "aurora-4": "aurora4 22s ease-in-out infinite",
        "aurora-5": "aurora5 30s ease-in-out infinite",
        "aurora-6": "aurora6 28s ease-in-out infinite",
        "aurora-7": "aurora7 24s ease-in-out infinite",
        "aurora-8": "aurora8 26s ease-in-out infinite",
        "aurora-center": "auroraCenter 35s ease-in-out infinite",
        "aurora-1": "aurora1 20s ease-in-out infinite",
        "aurora-2": "aurora2 25s ease-in-out infinite",
        "aurora-3": "aurora3 18s ease-in-out infinite",
        "aurora-4": "aurora4 22s ease-in-out infinite",
        "aurora-5": "aurora5 30s ease-in-out infinite",
        "aurora-6": "aurora6 24s ease-in-out infinite",
        "aurora-7": "aurora7 28s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        shimmer: {
          "0%": {
            "background-position": "-200% 0",
          },
          "100%": {
            "background-position": "200% 0",
          },
        },
        aurora1: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translate(100px, -50px) scale(1.2)",
            opacity: "0.6",
          },
        },
        aurora2: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.4",
          },
          "50%": {
            transform: "translate(-80px, 60px) scale(0.8)",
            opacity: "0.7",
          },
        },
        aurora3: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.2",
          },
          "50%": {
            transform: "translate(-120px, -80px) scale(1.3)",
            opacity: "0.5",
          },
        },
        aurora4: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.35",
          },
          "50%": {
            transform: "translate(90px, 70px) scale(1.1)",
            opacity: "0.6",
          },
        },
        aurora5: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.25",
          },
          "50%": {
            transform: "translate(150px, -100px) scale(1.4)",
            opacity: "0.5",
          },
        },
        aurora6: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.15",
          },
          "50%": {
            transform: "translate(-110px, 90px) scale(0.9)",
            opacity: "0.4",
          },
        },
        aurora7: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translate(-140px, -70px) scale(1.2)",
            opacity: "0.6",
          },
        },
        aurora8: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.35",
          },
          "50%": {
            transform: "translate(80px, 110px) scale(1.1)",
            opacity: "0.65",
          },
        },
        auroraCenter: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1) rotate(0deg)",
            opacity: "0.1",
          },
          "25%": {
            transform: "translate(-50%, -50%) scale(1.2) rotate(90deg)",
            opacity: "0.15",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.8) rotate(180deg)",
            opacity: "0.2",
          },
          "75%": {
            transform: "translate(-50%, -50%) scale(1.1) rotate(270deg)",
            opacity: "0.12",
          },
        },
        aurora1: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.35",
          },
          "50%": {
            transform: "translate(120px, -100px) scale(1.3)",
            opacity: "0.55",
          },
        },
        aurora2: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translate(-140px, 120px) scale(0.8)",
            opacity: "0.5",
          },
        },
        aurora3: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.4",
          },
          "50%": {
            transform: "translate(-160px, -120px) scale(1.4)",
            opacity: "0.6",
          },
        },
        aurora4: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.32",
          },
          "50%": {
            transform: "translate(100px, 140px) scale(1.2)",
            opacity: "0.52",
          },
        },
        aurora5: {
          "0%, 100%": {
            transform: "translate(-50%, 0) scale(1)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translate(-50%, -60px) scale(1.3)",
            opacity: "0.5",
          },
        },
        aurora6: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.28",
          },
          "50%": {
            transform: "translate(80px, -80px) scale(1.15)",
            opacity: "0.45",
          },
        },
        aurora7: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.25",
          },
          "50%": {
            transform: "translate(-80px, 80px) scale(1.2)",
            opacity: "0.42",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
