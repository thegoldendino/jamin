<script>
  import {types} from './types.js';

  export let inputClass;
  export let value = {};
  export let field;
  export let autoFocus;
  export let setFocus;

  let items = {};
  value = value || {};

  $: if (Object.entries(field.config.fields).length) {
    items = Object.entries(field.config.fields).reduce((acc, [itemKey, itemConfig]) => {
      return {...acc, [itemKey]: {
        component: types[itemConfig.type],
        el: field.el?.querySelector(`[data-jamin$='.${itemKey}']`),
        config: itemConfig,
        value: value[itemKey],
        dbKey: [...field.dbKey, itemKey],
      }};
    }, {})
  }
</script>

{#each Object.keys(field.config.fields) as key, i}
  <div class="mb-1">
    {#if items[key]}
      <svelte:component 
        this={items[key].component} 
        field={items[key]}
        bind:value={value[key]}
        bind:autoFocus={autoFocus}
        setFocus={setFocus && i === 0}
        {inputClass}
      />
    {/if}
  </div>
{/each}