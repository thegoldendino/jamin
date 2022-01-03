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

  $: open = field.dbKey.length < 4;
  $: summaryUppercase = field.dbKey.length === 3;
  $: hideHorizontalBar = field.dbKey.length > 3
</script>

<div class="bg-gray-300 bg-opacity-10 px-2 py-1" >
  <details {open}>
    <summary
      class:uppercase="{summaryUppercase}"
      class="font-semibold text-gray-300 cursor-pointer hover:text-gray-100" >
      <h2 class="inline-block">{label}</h2>
    </summary>
    <hr class="border-gray-300 mt-2 mb-2" class:hidden="{hideHorizontalBar}" />
    {#each Object.keys(field.config.fields) as key, i}
      <div class="mt-1 mb-1">
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
  details {
    @apply text-right;
  }
  details[open] {
    @apply text-left;
  }
</style>