<script>
  import config from '../jamin.config.mjs';
  import Section from './Section.svelte';
  export let jaminEls;

  let autoFocus = true;

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
  {#each sections as section, i}
    <Section {section} bind:autoFocus={autoFocus} setFocus={i === 0} />
  {/each}
</div>

