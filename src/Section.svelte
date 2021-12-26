<script>
  import Dashboard from './Dashboard.svelte';
import Input from './input/Input.svelte';
  export let config;
  export let sectionEl;

  const sectionConfig = config.sections[sectionEl.dataset.jaminsection];
</script>


<details open>
  <summary>
    <h2 class="font-semibold text-gray-300 pb-2 inline-block cursor-pointer">{sectionEl.dataset.jaminsection}</h2>
    <hr class="border-gray-300 mb-4"/>
  </summary>
  {#each Array.from(sectionEl.querySelectorAll('[data-jamin]')) as el}
    {#if !sectionConfig}
      <div class="bg-red-200 text-red-800 break-normal min-w-full overflow-clip p-2">
        Error: <span class="font-bold">{sectionEl.dataset.jaminsection}</span>
        is not found in 
        jamin.config.mjs 
        sections.
      </div>
    {:else if !sectionConfig.fields[el.dataset.jamin]}
      <div class="bg-red-200 text-red-800 break-normal min-w-full overflow-clip p-2">
        Error: <span class="font-bold">{el.dataset.jamin}</span>
        is not found in 
        jamin.config.mjs, 
        section <span class="font-bold">{sectionEl.dataset.jaminsection}</span>.
      </div>        
    {:else}
      <Input 
        {el} 
        config={{
          key: `${sectionEl.dataset.jaminsection}-${el.dataset.jamin}`,
          ...sectionConfig.fields[el.dataset.jamin] 
        }} />
    {/if}
  {/each}
</details>

<style>
  details > summary {
    list-style: none;
  }
</style>