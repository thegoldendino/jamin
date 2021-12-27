<script>
  export let config;
  export let inputClass;
  export let el;
  export let value = '';
  
  const applyTo = config.applyTo || 'innerHtml'

  $: if (value || true) {
    el[applyTo] = value;
  }

</script>

<input  
  type="text" 
  class={inputClass} 
  bind:value={value} />
