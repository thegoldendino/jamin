<script>
  import Section from './Section.svelte';
  export let config;
  export let content;
  const sectionEls = Array.from(content.querySelectorAll('[data-jaminsection]'));
</script>

<div class="min-w-full p-4">
  {#each Array.from(sectionEls) as sectionEl}
    <Section {config} {sectionEl} />
  {/each}
</div>

