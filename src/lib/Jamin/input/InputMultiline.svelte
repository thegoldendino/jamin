<script>
  import {onMount} from 'svelte';
  export let inputClass = '';
  export let value = '';
  export let field;
  export let autoFocus;
  export let setFocus;
  
  const applyTo = field.config.applyTo || 'innerHTML'
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

<input  
  bind:this={inputEl}
  type="text" 
  class={inputClass} 
  placeholder={field.config.label}
  bind:value={value} />
