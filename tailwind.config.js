/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(220deg, rgb(110, 22, 182) 0%, hsl(265deg 66% 44%) 6%, hsl(257deg 55% 48%) 12%, hsl(249deg 50% 52%) 18%, hsl(241deg 49% 57%) 24%, hsl(235deg 50% 59%) 29%, hsl(230deg 52% 59%) 35%, hsl(224deg 54% 60%) 41%, hsl(219deg 56% 61%) 47%, hsl(213deg 57% 62%) 53%, hsl(207, 58%, 63%) 59%, hsl(201deg 59% 65%) 65%, hsl(195deg 60% 67%) 71%, hsl(190deg 61% 68%) 76%, hsl(185deg 63% 70%) 82%, hsl(180deg 65% 72%) 88%, hsl(176deg 67% 74%) 94%, hsl(171deg 69% 76%) 100%)',
      },
    },
  },
  plugins: [],
}

