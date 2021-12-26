<script lang="ts">
	import Tailwindcss from './Tailwindcss.svelte';
	import { draggable } from 'svelte-drag';
  import Dashboard from './Dashboard.svelte';
  import config from '../jamin.config.mjs';
  let adminWidthInit = 400;
  let adminWidth = adminWidthInit;
  let content;
  
  function loadContent(e) {
    content = e.target.contentDocument;
  }

  function resize(e) {
    adminWidth = adminWidthInit + (-1 * e.detail.offsetX);
  }
</script>

<Tailwindcss />

<div id="container">
  <div id="container-inner">
    <iframe on:load={loadContent} id="website" src={config.src_url} title="Website"></iframe>
    <div id="admin" class="bg-gray-800" style="width:{adminWidth}px">
      <div class="w-full h-full">
        {#key content}
          {#if content}
            <Dashboard {config} {content} />
          {/if}
        {/key}
      </div>
    </div>
  </div>
  <div 
    id="resizer" 
    style="right:{adminWidthInit - 10}px"
    class="bg-transparent"
    use:draggable={{axis: 'x'}}
    on:svelte-drag={resize}
  ></div>
</div>

<style>
  #container {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }

  #container-inner {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }

  #website {
    flex-grow: 1;
    min-height: 100%;
  }

  #resizer {
    position: absolute;
    top: 0;
    width: 10px;
    min-height: 100%;
    cursor: ew-resize;
  }

  #admin {
    flex: none;
    min-height: 100%;
  }

  #admin > * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif;
  }
</style>