<script>
  import {types} from './types.js';
  export let el;
  export let config;
</script>

<label class="text-gray-400 mb-4 block">
  <span class="block mb-1">{config.label}</span>
  <svelte:component 
    this={types[config.type]} 
    inputClass="w-full bg-gray-400 text-gray-800 rounded py-1 px-2 focus:bg-gray-200"
    {config}
    {el}
    {types}
  />
</label>