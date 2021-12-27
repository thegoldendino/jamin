<script>
  export let config;
  export let inputClass;
  export let el;
  export let value = '';

  const applyTo = config.applyTo || 'src'
  
  $: if (value || true) {
    el[applyTo] = value;
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