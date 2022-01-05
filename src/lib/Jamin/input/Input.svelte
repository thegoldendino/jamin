<script lang="ts">
  import type {FieldType} from '../types';
  import safeGet from 'just-safe-get';
  import {types} from './types.js';
  import { contentStore } from '../store/contentStore';
  export let field: FieldType;
  export let autoFocus: boolean;
  export let setFocus: boolean;

  let value = safeGet($contentStore, field.dbKey.join('.'));

  $: if (value) {
    contentStore.updateValue(field.dbKey, value)
  }
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="text-gray-400 mb-4 block">
  <svelte:component 
    this={types[field.config.type || 'object']} 
    inputClass="w-full bg-gray-400 text-gray-800 placeholder:text-gray-600 rounded py-1 px-2 focus:bg-gray-200"
    {field}
    bind:autoFocus={autoFocus} setFocus={setFocus}
    bind:value={value}
  />
</label>