<script>
  export let inputClass = '';
  export let value = '';
  export let field;
  
  const applyTo = field.config.applyTo || 'innerHTML'

  $: if (value || true) {
    field.els.forEach(el => {
      el[applyTo] = value;
    })
  }

</script>

<input  
  type="text" 
  class={inputClass} 
  bind:value={value} />
