<script>
  import Input from './input/Input.svelte';
  export let config;
  export let content;
  const sections = Array.from(content.querySelectorAll('[data-jaminsection]'));
</script>

<div class="min-w-full p-4">
  {#each Array.from(sections) as section}
    <details open>
      <summary>
        <h2 class="font-semibold text-gray-300 pb-2 inline-block cursor-pointer">{section.dataset.jaminsection}</h2>
        <hr class="border-gray-300 mb-4"/>
      </summary>
      {#each Array.from(section.querySelectorAll('[data-jamin]')) as el}
        {#if !config.sections[section.dataset.jaminsection]}
          <div class="bg-red-200 text-red-800 break-normal min-w-full overflow-clip p-2">
            Error: <span class="font-bold">{section.dataset.jaminsection}</span>
            is not found in 
            jamin.config.mjs 
            sections.
          </div>
        {:else if !config.sections[section.dataset.jaminsection][el.dataset.jamin]}
          <div class="bg-red-200 text-red-800 break-normal min-w-full overflow-clip p-2">
            Error: <span class="font-bold">{el.dataset.jamin}</span>
            is not found in 
            jamin.config.mjs, 
            section <span class="font-bold">{section.dataset.jaminsection}</span>.
          </div>        
        {:else}
          <Input {el} config={config.sections[section.dataset.jaminsection][el.dataset.jamin]} />
        {/if}
      {/each}
    </details>
  {/each}
</div>

<style>
  details > summary {
    list-style: none;
  }
</style>