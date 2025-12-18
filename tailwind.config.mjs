/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Enable dark mode with class strategy
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            // 1. COLORES PERSONALIZADOS
            colors: {
                primary: '#38bdf8',   // Azul eléctrico (Cyan-400)
                secondary: '#818cf8', // Índigo suave
                dark: {
                    900: '#0f172a',   // Fondo principal (Slate-900)
                    800: '#1e293b',   // Fondo secundario/tarjetas
                    100: '#f1f5f9',   // Texto principal
                    200: '#94a3b8',   // Texto secundario (grisáceo)
                }
            },
            // 2. FUENTES
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['Fira Code', 'Menlo', 'monospace'],
            },
            // 3. ANIMACIÓN CONTINUA (CARRUSEL)
            animation: {
                'loop-scroll': 'loop-scroll 40s linear infinite',
            },
            keyframes: {
                'loop-scroll': {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [
        // 4. PLUGIN PARA TEXTO MARKDOWN (Vital para la página de proyectos)
        require('@tailwindcss/typography'),
    ],
}