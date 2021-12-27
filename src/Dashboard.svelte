<script>
  import config from '../jamin.config.mjs';
  import Section from './Section.svelte';
  export let jaminEls;

  const sections = Object.keys(config.sections)
    .filter((sectionKey) => (
      jaminEls.map((el) => el.dataset.jamin)
        .includes(sectionKey)
    ))
    .map((sectionKey) => {
      return {
        key: sectionKey,
        config: config.sections[sectionKey],
        els: jaminEls.filter(el => el.dataset.jamin.startsWith(sectionKey))
      }
    });
</script>

<div class="min-w-full p-4">
  {#each sections as section}
    <Section {section} />
  {/each}
</div>

