import type {Config} from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin'),
    ],
};

export default config;
