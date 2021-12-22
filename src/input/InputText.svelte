<script>
  export let config;
  export let inputClass;
  export let el;

  config.value = el[config.applyTo];

  function applyValue() {
    el[config.applyTo] = config.value;
  }
</script>

<input  
  type="text" 
  class={inputClass} 
  bind:value={config.value} 
  on:keyup={applyValue} />
