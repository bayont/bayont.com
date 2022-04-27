<script lang="ts">
   import type { Project } from '../types';
   import ProjectCard from '../components/ProjectCard.svelte';

   export let projects: Project[];
</script>

<div class="sm:px-0 px-5 mt-10">
   <div class="w-full flex justify-center">
      <div class="relative w-[500px]">
         <img class="avatar" src="/avatar.png" alt="Avatar" />
         <div>
            <div class="text-left text-4xl m-5 first absolute left-0 top-0">
               Hi &#x1F44B;
               <div class="text-left text-lg mt-5 second">
                  My name is <span class="font-semibold">Fabian Fetter</span>
               </div>
               <div class="text-lg mt-5 third">
                  And I'm a <span class="text-main-accent-light"
                     >Frontend Developer</span
                  >
               </div>
            </div>
         </div>
      </div>
   </div>

   <h2 class="text-center text-2xl my-10">
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
