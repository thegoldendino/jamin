<script>
  import config from '../jamin.config.mjs';
  import InputSection from './input/InputSection.svelte';
  export let pageKey;
  export let el;

  let autoFocus = true;
  
  const pageConfig = config.pages[pageKey]

  const sections = Object.keys(pageConfig)
    .map((sectionKey) => {
      return {
        dbKey: [pageKey, sectionKey],
        config: pageConfig[sectionKey],
        el: el?.querySelector(`[data-jamin='${sectionKey}']`)
      }
    });
</script>

<div class="min-w-full p-4">
  {#each sections as section, i}
    <InputSection {section} bind:autoFocus={autoFocus} setFocus={i === 0} />
  {/each}
</div>

