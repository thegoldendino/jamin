<script>
  import config from '../jamin.config.mjs';
  import Input from './input/Input.svelte';
  export let pageKey;
  export let el;

  let autoFocus = true;
  
  const pageConfig = config.pages[pageKey]

  const fields = Object.keys(pageConfig)
    .map((inputKey) => {
      return {
        dbKey: [pageKey, inputKey],
        config: pageConfig[inputKey],
        el: el?.querySelector(`[data-jamin='${inputKey}']`)
      }
    });
</script>

<div class="min-w-full p-4">
  {#each fields as field, i}
    <Input {field} bind:autoFocus={autoFocus} setFocus={i === 0} />
  {/each}
</div>

