/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        card: "hsl(var(--card))",
      },
    },
  },
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./src/**/*.css"],
  plugins: [],
};
