<script lang="ts">
  import Close from 'svelte-material-icons/CloseCircleOutline.svelte';
  import type { FieldType } from '../types/input.type.js';
  import {types} from './types.js';

  export let inputClass: string;
  export let value = [];
  export let field: FieldType;
  export let autoFocus: boolean;
  export let setFocus: boolean;

  let items = [];
  let focusLast = false;

  const arrayItemKey = Object.keys(field.config.fields)[0];

  const template = field.el?.children[0];
  const itemConfig = Object.values(field.config.fields)[0];

  $: if (value.length && template) {
    field.el?.replaceChildren();
    items = value.map((itemVal) => {
      const itemEl = template.cloneNode(true) as HTMLElement;
      const itemValEl = itemEl.dataset?.jamin?.endsWith(arrayItemKey) 
        ? itemEl 
        : itemEl?.querySelector(`[data-jamin$='${arrayItemKey}']`)

      field.el?.appendChild(itemEl);

      return {
        component: types[itemConfig.type || 'object'],
        el: itemValEl, 
        config: itemConfig,
        value: itemVal,
        dbKey: [...field.dbKey, arrayItemKey],
      };
    })
  }

  function addItem() {
    focusLast = true;
    autoFocus = true;
    setFocus = true;
    value = [...value, null]
  }

  function removeItem(index) {
    autoFocus = true;
    setFocus = true;
    value.splice(index, 1);
    value = [...value];
  }

  function firstOrLast(i) {
    return (focusLast && i === value.length - 1) || (!focusLast && i === 0)
  }
</script>

<div class="bg-gray-300 bg-opacity-10 px-2 py-1" >
  {#if field.config.label}
    <div
      class:uppercase="{field.dbKey.length === 3}"
      class="font-semibold text-gray-300 mb-1" >
      {field.config.label}
    </div>
  {/if}

  {#each value as val, i}
    <div class="flex mb-1">
      <div class="flex-grow">
        {#if items[i]}
          <svelte:component 
            this={items[i].component} 
            field={items[i]}
            bind:autoFocus={autoFocus} setFocus={setFocus && firstOrLast(i)}
            bind:value={val}
            {inputClass}
          />
        {/if}
      </div>
      <div class="flex-none mt-1">
        <button
          tabindex="-1"
          on:click={() => removeItem(i)} 
          class="ml-2 text-gray-500 hover:text-gray-300">
          <Close size="1.5em"/> 
        </button>
      </div>
    </div>
  {/each}

  <div>
    <button on:click={addItem} class="hover:text-gray-300 pl-2">
      <span>+</span>
      <span>Add {field.config.label || 'Item'}</span>
    </button>
  </div> 
</div>
