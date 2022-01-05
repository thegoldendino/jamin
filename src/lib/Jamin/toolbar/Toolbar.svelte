<script>
	import { createEventDispatcher } from 'svelte'
	import {contentStore } from '../store/contentStore.js'; 

	const dispatch = createEventDispatcher();

	function handleSave() {
		contentStore.save();
		dispatch('save', $contentStore);
	}

	function handlePublish() {
		contentStore.publish();
		dispatch('publish', $contentStore);
	}

	$: saveDisabled = ($contentStore.updatedAt || 0) <= ($contentStore.savedAt || 0);
	$: publishDisabled = ($contentStore.savedAt || 0) <= ($contentStore.publishedAt || 0);

</script>

<div class="flex justify-end items-center p-2">
	<button 
		on:click={handleSave} 
		disabled={saveDisabled}
		class="rounded bg-gray-400 px-2 py-1 font-bold text-gray-700 disabled:bg-gray-500" >
		<span>Save</span>
	</button>
	<button
		on:click={handlePublish} 
		disabled={publishDisabled}
		class="ml-3 rounded bg-gray-400 px-2 py-1 font-bold text-gray-700 border-4 border-gray-700 disabled:bg-gray-500">
		<span>Publish</span>
	</button>
</div>