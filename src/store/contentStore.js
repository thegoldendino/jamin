import safeSet from 'just-safe-set';
import { writable } from 'svelte/store';

function createContentStore() {
  const { subscribe, update, set } = writable({});

  function updateValue(key, value) {
    update((state) => {
      safeSet(state, key.join('.'), value);
      return { ...state };
    });
  }

  return {
    set,
    subscribe,
    updateValue,
  };
}

export const contentStore = createContentStore();
