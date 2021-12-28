<script>
  import {types} from './types.js';

  export let inputClass;
  export let value = {};
  export let field;

  let items = {};
  value = value || {};

  $: if (Object.entries(field.config.fields).length) {
    items = Object.entries(field.config.fields).reduce((acc, [itemKey, itemConfig]) => {
      const fullItemKey = `${field.key}.${itemKey}`;
      const itemValEl = field.els[0].querySelector(`[data-jamin='${fullItemKey}']`)
      return {...acc, [itemKey]: {
        component: types[itemConfig.type],
        els: [itemValEl], 
        config: itemConfig,
        value: value[itemKey],
        key: fullItemKey,
      }};
    }, {})
  }
</script>

{#each Object.keys(field.config.fields) as key}
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