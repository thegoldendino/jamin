<script>
  export let types; 
  export let config;
  export let inputClass;
  export let el;

  let items = Array.from(el.querySelectorAll('[data-jaminvalue]'))
    .map((valueEl) => {
      const itemConfig = {...config.values[valueEl.dataset.jaminvalue]}; 
      return {
        valueEl,
        config: itemConfig,
        component: types[itemConfig.type],
      }
    }); 

  function removeItem(index) {
    Array.from(el.children)[index].remove();
    items.splice(index, 1);
    items = [...items];
  }

  function addItem() {
    const template = Array.from(el.children)[0];
    if (!template) return;

    const newItem = template.cloneNode(true);
    el.appendChild(newItem);

    Array.from(newItem.querySelectorAll('[data-jaminvalue]'))
      .forEach((valueEl) => {
        const itemConfig = {...config.values[valueEl.dataset.jaminvalue]};
        valueEl[itemConfig.applyTo] = null;
        items = [...items, {
          valueEl,
          config: itemConfig,
          component: types[itemConfig.type]
        }];
      });
  }

</script>

{#each items as item, i}
  <div class="flex mb-1">
    <div class="flex-grow">
      <svelte:component 
        this={item.component} 
        el={item.valueEl}
        config={item.config}
        {inputClass}
      />
    </div>
    <div class="flex-none">
      {#if items.length > 1}
        <button 
          on:click={() => removeItem(i)} 
          class="w-8 bg-red-300 ml-2 rounded text-center py-1 text-red-500 font-bold hover:bg-red-500 hover:text-red-300">
          X
        </button>
      {/if}
    </div>
  </div>
{/each}

<div>
  <button on:click={addItem} class="hover:text-gray-300 pl-2">
    <span>+</span>
    <span>New Item</span>
  </button>
</div>
