<script>
  import get from 'just-safe-get';
  import {types} from './types.js';
  import { contentStore } from '../store/contentStore';
  export let field;
  export let autoFocus;
  export let setFocus;

  let value = get($contentStore, field.key);

  $: if (value) {
    contentStore.updateValue(field.key, value)
  }
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="text-gray-400 mb-4 block">
  {#if field.config.label}
    <span class="block mb-1">{field.config.label}</span>
  {/if}
  <svelte:component 
    this={types[field.config.type]} 
    inputClass="w-full bg-gray-400 text-gray-800 rounded py-1 px-2 focus:bg-gray-200"
    {field}
    bind:autoFocus={autoFocus} setFocus={setFocus}
    bind:value={value}
  />
</label>