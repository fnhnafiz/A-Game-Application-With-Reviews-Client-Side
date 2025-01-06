/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        reviewImageBg: "url('/public/assets/allReviewBg.png')",
        loginBanner: "url('/public/assets/login-banner.png')",
        watchListBanner: "url('/public/assets/whatchlist.png')",
      },
    },
  },
  plugins: [daisyui],
};
