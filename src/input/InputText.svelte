<script>
  export let config;
  export let inputClass;
  export let el;
  export let value = '';

  $: if (value || true) {
    el[config.applyTo] = value;
  }

</script>

<input  
  type="text" 
  class={inputClass} 
  bind:value={value} />
