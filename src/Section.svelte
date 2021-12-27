<script>
  import Input from './input/Input.svelte';
  export let section;

  const fields = (section.config.fields ? Object.keys(section.config.fields) : [])
    .map((fieldKey) => {
      const key = `${section.key}.${fieldKey}`
      return {
        key,
        config: section.config.fields[fieldKey],
        els: section.els.filter(el => el.dataset.jamin.startsWith(key))
      }
    }); 
</script>

<details open>
  <summary>
    {#if section.config.label}
      <h2 class="font-semibold text-gray-300 pb-2 inline-block cursor-pointer">{section.config.label}</h2>
    {/if}
    <hr class="border-gray-300 mb-4"/>
  </summary>
  {#each fields as field}
    <Input {field} />
  {/each}
</details>

<style>
  details > summary {
    list-style: none;
  }
</style>