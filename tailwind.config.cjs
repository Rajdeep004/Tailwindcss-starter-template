/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        // => sm: @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => md: @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => lg: @media (min-width: 1280px) { ... }
      },
      colors: {
        // 'name' : 'value'
      },
      fontFamily: {
        // sans: ['Graphik', 'sans-serif'],
        // serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}
// More on Tailwindcss docs https://tailwindcss.com/docs/configuration