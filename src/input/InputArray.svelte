<script>
  import {types} from './types.js';
  import has from 'just-has';
  export let config;
  export let inputClass;
  export let el;
  export let value = [];

  let items = [];

  const template = el?.children[0]?.cloneNode(true);

  $: if (value?.length && template) {
    el.replaceChildren();
    items = value.map((itemVal) => {
      const itemEl = template.cloneNode(true)
      const itemValEl = has(itemEl.dataset, 'jaminitem') ? itemEl : itemEl.querySelector('[data-jaminitem]')
      el.appendChild(itemEl);

      return {
        component: types[config.field.type],
        el: itemValEl, 
        config: config.field,
        value: itemVal,
      };
    })
  }

  function addItem() {
    value = [...value, null]
  }

  function removeItem(index) {
    value.splice(index, 1);
    value = [...value]
  }
</script>

{#each value as val, i}
  <div class="flex mb-1">
    <div class="flex-grow">
      {#if items[i]}
        <svelte:component 
          this={items[i].component} 
          el={items[i].el}
          config={items[i].config}
          bind:value={val}
          {inputClass}
        />
      {/if}
    </div>
    <div class="flex-none">
      <button 
        on:click={() => removeItem(i)} 
        class="w-8 bg-red-300 ml-2 rounded text-center py-1 text-red-500 font-bold hover:bg-red-500 hover:text-red-300">
        X
      </button>
    </div>
  </div>
{/each}

<div>
  <button on:click={addItem} class="hover:text-gray-300 pl-2">
    <span>+</span>
    <span>New Item</span>
  </button>
</div> 
