<script lang="ts">
   import type { Project } from '../types';
   import ProjectCard from '../components/ProjectCard.svelte';

   export let projects: Project[];
</script>

<div class="sm:px-0 px-5">
   <h1 class="text-center text-4xl m-5">
      Hi &#x1F44B; My name is <span>Fabian Fetter</span>
   </h1>
   <h2 class="text-center text-2xl my-10">
      Here are a couple of my demo projects:
   </h2>
   <h3 class="sm:hidden text-center my-5 text-sm text-main-accent-light">
      Click to visit
   </h3>
</div>
<ul class="flex justify-center flex-wrap gap-y-10">
   {#each projects as project, i}
      <ProjectCard {project} />
   {/each}
</ul>
