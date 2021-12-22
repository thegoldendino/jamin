<script>
  export let config;
  export let inputClass;
  export let el;

  config.value = el[config.applyTo];

  function applyValue() {
    el[config.applyTo] = config.value;
  }
</script>


<img 
  src={config.value} 
  class="max-w-full max-h-32 mb-2" alt="Update"
/>
<input  
  type="url" 
  class={inputClass}
  bind:value={config.value} 
  on:keyup={applyValue} 
/>