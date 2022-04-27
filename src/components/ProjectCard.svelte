<script lang="ts">
   import { element } from 'svelte/internal';
   import type { Project } from '../types';

   export let project: Project;
   const { link, title, message, framework, techStack } = project;
</script>

<li
   class="mx-5 sm:w-[300px] w-[90%] sm:aspect-square border-2 border-main-accent rounded-xl hover:rounded-md bg-gray-800 hover:border-main-accent-light hover:bg-gray-700 transition-all cursor-pointer"
>
   <a class="flex flex-col relative left-0 top-0 w-full h-full p-5" href={link}>
      <header class="my-5 text-center font-bold text-xl">{title}</header>
      <section>
         <div class="text-center text-3xl font-semibold w-full mb-5">
            <div>{framework}</div>
         </div>
         {#if techStack.length > 0}
            <div>
               Tech stack:
               <ul class="list-disc pl-10">
                  {#each techStack as element, i}
                     <li>{element}</li>
                  {/each}
               </ul>
            </div>
         {/if}
      </section>
      <section class="sm:hidden mt-5">
         {message}
      </section>
   </a>
</li>
