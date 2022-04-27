<script lang="ts">
   import type { Project } from '../types';
   import ProjectCard from '../components/ProjectCard.svelte';

   export let projects: Project[];
</script>

<div class="sm:px-0 px-5 mt-10 ">
   <div class="w-full flex justify-center">
      <div class="flex items-center">
         <img class="avatar aspect-square" src="/avatar.png" alt="Avatar" />
      </div>
      <div class="flex flex-col ml-5">
         <div class="text-center text-4xl first">Hi &#x1F44B;</div>
         <div class="text-center text-base mt-5 second">
            My name is <span class="font-semibold">Fabian Fetter</span>
         </div>
         <div class="text-center text-base mt-5 third">
            And I'm a <span class="text-main-accent-light"
               >Frontend Developer</span
            >
         </div>
      </div>
   </div>

   <h2 class="text-center text-2xl my-10 mt-20">
      Here's a couple of my demo projects:
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
