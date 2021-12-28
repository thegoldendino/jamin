<script>
  import {types} from './types.js';

  export let inputClass;
  export let value = {};
  export let field;

  let items = {};

  $: if (Object.entries(value).length) {
    items = Object.entries(value).reduce((acc, [itemKey, itemVal]) => {
      const itemValEl = field.els[0].querySelector(`[data-jamin='${field.key}.${itemKey}']`)
      const itemConfig = field.config.fields[itemKey]
      return {...acc, [itemKey]: {
        component: types[itemConfig.type],
        els: [itemValEl], 
        config: itemConfig,
        value: itemVal,
      }};
    }, {})
  }
</script>

{#each Object.keys(value) as key}
  <div class="mb-1">
    {#if items[key]}
      <svelte:component 
        this={items[key].component} 
        field={items[key]}
        bind:value={value[key]}
        {inputClass}
      />
    {/if}
  </div>
{/each}