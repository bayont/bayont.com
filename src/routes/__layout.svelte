<script>
   import '@fontsource/source-code-pro';
   import '../tailwind.css';
</script>

<main>
   <slot />
</main>
<footer class="bottom-2 w-full text-center text-gray-500 mt-10">
   Fabian Fetter &copy; 2022
   <div class="w-full text-a">
      This website is powered by <span class="text-svelte">Svelte.Kit</span> and
      <span class="text-tailwind">Tailwind</span>
   </div>
</footer>
