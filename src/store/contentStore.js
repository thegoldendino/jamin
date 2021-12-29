import safeSet from 'just-safe-set';
import { writable } from 'svelte/store';
import contentStub from './contentStub.mjs';

function createContentStore(initStore = {}) {
  const { subscribe, update } = writable(initStore);

  function updateValue(key, value) {
    update((state) => {
      safeSet(state, key, value);
      console.log('update', key, value, state);
      return { ...state };
    });
  }

  return {
    subscribe,
    updateValue,
  };
}

export const contentStore = createContentStore(contentStub);