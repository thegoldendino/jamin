<script>
  import {onMount} from 'svelte'
  import {types} from './types.js';
  import { inputState } from './inputState'
  export let el;
  export let config;
  
  let value;

  onMount(() => {
    value = $inputState[config.key] || value
  })

  $: if (value) {
    inputState.updateValue(config.key, value)
  }
</script>

<label class="text-gray-400 mb-4 block">
  <span class="block mb-1">{config.label}</span>
  <svelte:component 
    this={types[config.type]} 
    inputClass="w-full bg-gray-400 text-gray-800 rounded py-1 px-2 focus:bg-gray-200"
    {config}
    {el}
    bind:value={value}
  />
</label>