<script>
  import {onMount} from 'svelte';
  export let inputClass = '';
  export let value = '';
  export let field;
  export let autoFocus;
  export let setFocus;
  
  const applyTo = field.config.applyTo || 'href';
  let inputEl;

  onMount(() => {
    if (autoFocus && setFocus) {
      inputEl.focus();
      autoFocus = false;
    }
  })

  $: if (value && field.el && field.el[applyTo]) {
    field.el[applyTo] = `mailto:${value}`;
  }

</script>

<input  
  bind:this={inputEl}
  type="email" 
  class={inputClass} 
  bind:value={value} />
