<script>
  import {onMount} from 'svelte';
  export let inputClass = '';
  export let value = '';
  export let field;
  export let autoFocus;
  export let setFocus;

  const applyTo = field.config.applyTo || 'src'
  let inputEl;

  onMount(() => {
    if (autoFocus && setFocus) {
      inputEl.focus();
      autoFocus = false;
    }
  })

  
  $: if (value || field.el[applyTo]) {
    field.el[applyTo] = value;
  }

</script>


<img 
  src={value} 
  class="max-w-full max-h-32 mb-2" alt="Update"
/>
<input
  bind:this={inputEl}
  type="url" 
  class={inputClass}
  bind:value={value} 
/>