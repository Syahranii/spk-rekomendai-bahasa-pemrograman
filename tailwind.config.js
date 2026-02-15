/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Warna netral pastel (merah-putih)
        "red-50": "oklch(0.99 0.01 20)",
        "red-100": "oklch(0.98 0.02 20)",
        "red-200": "oklch(0.95 0.05 20)",
        "red-300": "oklch(0.90 0.08 20)",
        "red-400": "oklch(0.85 0.10 20)",
        "red-500": "oklch(0.75 0.15 20)", // Primary color
        "red-600": "oklch(0.65 0.18 20)",
        "red-700": "oklch(0.55 0.20 20)",
        "red-800": "oklch(0.45 0.22 20)",
        "red-900": "oklch(0.35 0.25 20)",
        
        "background": "oklch(1 0 0)",
        "foreground": "oklch(0.25 0 0)",
        
        // Warna netral
        "border": "oklch(0.9 0 0)",
        "input": "oklch(0.95 0 0)",
        "ring": "oklch(0.75 0.15 20)",
        
        // Warna untuk komponen
        "primary": "oklch(0.75 0.15 20)",
        "secondary": "oklch(0.95 0 0)",
        "muted": "oklch(0.95 0 0)",
        "accent": "oklch(0.95 0 0)",
        
        // Warna khusus untuk UMC
        "umc-red": "oklch(0.75 0.15 20)",
        "umc-gold": "oklch(0.85 0.12 80)",
        "umc-dark": "oklch(0.25 0 0)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}