/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-blue": "0 4px 6px -1px rgba(59, 130, 246, 0.5)",
        "custom-green": "0 4px 6px -1px rgba(34, 197, 94, 0.5)",
      },
    },
  },
  plugins: [],
};
