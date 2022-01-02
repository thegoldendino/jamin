<script>
  import config from '../jamin.config.mjs';
  import Input from './input/Input.svelte';
  export let pageKey;
  export let el;

  let autoFocus = true;
  
  const globalConfig = config.global;
  const pageConfig = config.pages[pageKey]

  const pageFields = Object.keys(pageConfig)
    .map((inputKey) => {
      return {
        dbKey: ['pages', pageKey, inputKey],
        config: pageConfig[inputKey],
        el: el?.querySelector(`[data-jamin='${inputKey}']`)
      }
    });

  const globalFields = Object.keys(globalConfig)
    .map((inputKey) => {
      return {
        dbKey: ['global', inputKey],
        config: globalConfig[inputKey],
        el: el?.querySelector(`[data-jamin='${inputKey}']`)
      }
    });
</script>

<div class="min-w-full p-4">
  <details class="bg-gray-300 bg-opacity-10 px-2 py-1 mb-4">
    <summary class="font-semibold text-gray-300 cursor-pointer hover:text-gray-100">
      <h2 class="inline-block">GLOBAL</h2>
    </summary>
    <hr class="border-gray-300 mb-4 mt-2"/>
    {#each globalFields as field, i}
      <Input {field} bind:autoFocus={autoFocus} setFocus={i === 0} />
    {/each}
  </details>

  {#each pageFields as field, i}
    <Input {field} bind:autoFocus={autoFocus} setFocus={i === 0} />
  {/each}
</div>

<style>
  details {
    @apply text-right;
  }
  details[open] {
    @apply text-left;
  }
</style>