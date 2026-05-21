/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        night: '#050509',
        ink: '#09090f',
        violetGlow: '#a855f7',
        cyanGlow: '#22d3ee',
      },
      boxShadow: {
        glow: '0 0 30px rgba(168, 85, 247, 0.28)',
        cyan: '0 0 30px rgba(34, 211, 238, 0.2)',
      },
      backgroundImage: {
        'radial-fade':
          'radial-gradient(circle at top left, rgba(168,85,247,0.2), transparent 36%), radial-gradient(circle at bottom right, rgba(34,211,238,0.14), transparent 32%)',
      },
    },
  },
  plugins: [],
};
