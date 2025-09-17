export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        gold: "#f9d342",
        slate: {
          950: "#0b1220"
        }
      },
      fontFamily: {
        sans: ["Vazirmatn", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 10px 30px -10px rgba(249, 211, 66, 0.3)",
        card: "0 10px 25px -8px rgba(0,0,0,0.35)"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        fadeIn: "fadeIn 700ms ease-out both",
        shimmer: "shimmer 2.5s linear infinite"
      }
    }
  },
  plugins: []
}
