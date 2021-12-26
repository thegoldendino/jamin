<script>
  import {onMount} from 'svelte'
  import { inputState } from './inputState'
  export let config;
  export let inputClass;
  export let el;

  let value; 
  
  onMount(() => {
    value = $inputState[config.key] || el[config.applyTo];
    el[config.applyTo] = value;
    inputState.applyValue(config.key, value)
  })

  function handleInput() {
    el[config.applyTo] = value;
    inputState.applyValue(config.key, value);
  }
</script>


<img 
  src={value} 
  class="max-w-full max-h-32 mb-2" alt="Update"
/>
<input  
  type="url" 
  class={inputClass}
  bind:value={value} 
  on:keyup={handleInput} 
/>