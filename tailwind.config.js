/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fafa",
          100: "#e0f2f2",
          200: "#b2d8d8", // User Lightest
          300: "#8cc5c5",
          400: "#66b2b2", // User Light
          500: "#008080", // User Medium
          600: "#006666", // User Dark
          700: "#004c4c", // User Darkest
          800: "#003333",
          900: "#001a1a",
        },
        // Mapping Pink to Lighter Teal shades
        pink: {
          50: "#ffffff",
          100: "#f0fafa",
          200: "#e0f2f2",
          300: "#b2d8d8",
          400: "#b2d8d8", // Lightest as accent
          500: "#66b2b2", // Light as base
          600: "#008080",
          700: "#006666",
          800: "#004c4c",
          900: "#003333",
        },
        // Mapping Purple to Mid Teal shades
        purple: {
          50: "#f0fafa",
          100: "#e0f2f2",
          200: "#b2d8d8",
          300: "#8cc5c5",
          400: "#66b2b2", // Light
          500: "#008080", // Medium
          600: "#006666", // Dark
          700: "#004c4c",
          800: "#003333",
          900: "#001a1a",
        },
        // Mapping Blue to Darker Teal shades
        blue: {
          50: "#e0f2f2",
          100: "#b2d8d8",
          200: "#8cc5c5",
          300: "#66b2b2",
          400: "#008080", // Medium as highlight
          500: "#006666", // Dark
          600: "#004c4c", // Darkest
          700: "#003333",
          800: "#001a1a",
          900: "#000000",
        },
        dark: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
        display: ["Orbitron", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s infinite",
        "pulse-glow": "pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "33%": { transform: "translateY(-20px) rotate(2deg)" },
          "66%": { transform: "translateY(-10px) rotate(-2deg)" },
        },
        glow: {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.8", filter: "brightness(1.2)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        pulseGlow: {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 20px rgba(102, 126, 234, 0.5)",
          },
          "50%": {
            opacity: "0.8",
            boxShadow:
              "0 0 40px rgba(102, 126, 234, 0.8), 0 0 60px rgba(118, 75, 162, 0.6)",
          },
        },
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
