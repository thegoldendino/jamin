<script>
  export let inputClass = '';
  export let value = '';
  export let field;

  const applyTo = field.config.applyTo || 'src'
  
  $: if (value || true) {
    field.els.forEach(el => {
      el[applyTo] = value;
    })
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
/>