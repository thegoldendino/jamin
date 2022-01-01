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

<details open>
    <summary class="font-semibold text-gray-300 cursor-pointer hover:text-gray-100">
      <span class="left-arrow mr-2">&#9665;</span>
      {#if field.config.label }
        <h2 class="pb-2 inline-block">{field.config.label}</h2>
      {:else if field.config.display}
        <h2 class="pb-2 inline-block">{value[field.config.display]}</h2>
      {/if}
      <span class="down-arrow ml-2">&#9661;</span>
      <hr class="border-gray-300 mb-4"/>
    </summary>
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