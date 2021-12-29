<script>
  import {types} from './types.js';

  export let inputClass;
  export let value = [];
  export let field;
  export let autoFocus;
  export let setFocus;

  let items = [];
  let focusLast = false;

  const arrayItemKey = [field.key, Object.keys(field.config.fields)[0]].join('.');

  const arrayEl = field.els.find(el => el.dataset.jamin === field.key)
  const template = field.els.find(el => el.dataset.jamin === field.key).children[0];
  const itemConfig = Object.values(field.config.fields)[0];

  $: if (value.length && template) {
    arrayEl.replaceChildren();
    items = value.map((itemVal) => {
      const itemEl = template.cloneNode(true)
      const itemValEl = itemEl.dataset?.jamin === arrayItemKey ? itemEl : itemEl.querySelector(`[data-jamin='${arrayItemKey}']`)

      arrayEl.appendChild(itemEl);

      return {
        component: types[itemConfig.type],
        els: [itemValEl], 
        config: itemConfig,
        value: itemVal,
        key: arrayItemKey,
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
    console.log('firstOrLast', focusLast, i, value.length - 1)
    return (focusLast && i === value.length - 1) || (!focusLast && i === 0)
  }
</script>

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
    <div class="flex-none">
      <button
        tabindex="-1"
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
