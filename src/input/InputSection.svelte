<script>
  import Input from './Input.svelte';
  export let section;
  export let autoFocus;
  export let setFocus;

  const fields = (section.config.fields ? Object.keys(section.config.fields) : [])
    .map((fieldKey) => {
      return {
        dbKey: [...section.dbKey, fieldKey],
        config: section.config.fields[fieldKey],
        el: section.el?.querySelector(`[data-jamin$='.${fieldKey}']`)
      }
    }); 
</script>

<details open>
  <summary class="font-semibold text-gray-300 cursor-pointer hover:text-gray-100">
    {#if section.config.label}
      <span class="left-arrow mr-2">&#9665;</span>
      <h2 class="pb-2 inline-block">{section.config.label}</h2>
      <span class="down-arrow ml-2">&#9661;</span>
    {/if}
    <hr class="border-gray-300 mb-4"/>
  </summary>
  {#each fields as field, i}
    <Input {field} bind:autoFocus={autoFocus} setFocus={setFocus && i === 0} />
  {/each}
</details>

<style>
  details > summary {
    list-style: none;
  }

  details {
    @apply text-right;
  }
  details[open] {
    @apply text-left;
  }
  details .left-arrow {
    @apply inline-block;
  }
  details[open] .left-arrow{
    @apply hidden;
  }
  details .down-arrow {
    @apply hidden;
  }

  details[open] .down-arrow {
    @apply inline-block;
  }

</style>