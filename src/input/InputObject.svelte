<script>
  import {types} from './types.js';

  export let inputClass;
  export let value;
  export let field;
  export let autoFocus;
  export let setFocus;

  let items = {};
  value = value || {};
  
  $: label = field.config.label || (field.config.display && value[field.config.display]) || '*'

  $: if (Object.entries(field.config.fields).length) {
    items = Object.entries(field.config.fields).reduce((acc, [itemKey, itemConfig]) => {
      return {...acc, [itemKey]: {
        component: types[itemConfig.type || 'object'],
        el: field.el?.querySelector(`[data-jamin$='.${itemKey}']`),
        config: itemConfig,
        value: value[itemKey],
        dbKey: [...field.dbKey, itemKey],
      }};
    }, {})
  }
</script>

<div class="bg-gray-300 bg-opacity-10 px-2 py-1" >
  <details open={field.dbKey.length < 4 || label === '*'}>
    <summary
      class:uppercase="{field.dbKey.length === 3}"
      class="font-semibold text-gray-300 cursor-pointer hover:text-gray-100" >
      <span class="left-arrow mr-2">&#9665;</span>
      <h2 class="inline-block">{label}</h2>
      <span class="down-arrow ml-2">&#9661;</span>
    </summary>
    <hr class="border-gray-300 mb-4 mt-2" class:hidden="{field.dbKey.length > 3}" />
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
</div>

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