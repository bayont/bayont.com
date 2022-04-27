module.exports = {
   purge: ['./src/**/*.svelte', './src/**/*.css'],
   content: [],
   theme: {
      extend: {
         colors: {
            'main-accent': '#3e8ded',
            'main-accent-light': '#78b5ff',
            svelte: '#ff3e00',
            tailwind: 'rgb(14, 165, 233)',
         },
      },
   },
   plugins: [],
};
