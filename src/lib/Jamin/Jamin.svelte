<script lang="ts">
  import type {Config, Content} from './types';
  import {onMount} from 'svelte'
	import { draggable } from 'svelte-drag';
  import {contentStore } from './store/contentStore';
  import Dashboard from './Dashboard.svelte';
  import Toolbar from './toolbar/Toolbar.svelte';

  export let config: Config;
  export let content: Content;

  let adminWidthInit = 400;
  let adminWidth = adminWidthInit;
  let el: Document;
  let pageKey: string;
  let iframe: HTMLIFrameElement;

  if (content) {
    contentStore.set(content)
  }

  $: if (iframe) {
    handleLoad();
  }

  function handleLoad(e = null) {
    iframe = iframe || e.target
    pageKey = iframe.contentWindow.location.pathname;
    el = iframe.contentDocument;    
  }

  function resizeAdmin(e) {
    adminWidth = adminWidthInit + (-1 * e.detail.offsetX);
  }
</script>


<div id="container">
  <div id="container-inner">
    <iframe bind:this={iframe} on:load={handleLoad} id="website" src={config.startUrl || '/'} title="Website"></iframe>
    <div id="admin" class="bg-gray-800" style="width:{adminWidth}px">
      <div class="w-full h-full">
        <Toolbar on:save on:publish />
        {#key pageKey}
          {#if el && pageKey && config}
            <Dashboard {el} {pageKey} {config} />
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
    on:svelte-drag={resizeAdmin}
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