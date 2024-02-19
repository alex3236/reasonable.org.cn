import type {Config} from "tailwindcss";
import colors from 'tailwindcss/colors';

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                'light': colors.white,
                'midnight': 'rgb(219 234 254 / 0.1)',
                'dark': colors.gray["900"],
                'title': colors.gray["900"],
                'title-dark': colors.gray["100"],
                'content': colors.gray["500"],
                'content-dark': colors.gray["300"],
                'primary': 'rgb(30 58 138 / 0.2)',
                'primary-dark': 'rgb(147 197 253 / 0.2)',
                'secondary': 'rgb(30 58 138 / 0.1)',
                'secondary-dark': 'rgb(219 234 254 / 0.2)',
                'info': 'rgb(30 64 175 / 0.1)',
                'info-dark': 'rgb(239 246 255 / 0.2)',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
export default config;
