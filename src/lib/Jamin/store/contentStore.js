import safeSet from 'just-safe-set';
import safeGet from 'just-safe-get';
import compare from 'just-compare';
import clone from 'just-clone';

import { writable } from 'svelte/store';

function createContentStore() {
  const { subscribe, update, set } = writable({});

  function updateValue(key, value) {
    update((state) => {
      const oldState = clone(state);
      const oldValue = safeGet(oldState, key.join('.'));

      if (compare(oldValue, value)) {
        return oldState;
      } else {
        const newState = clone(state);
        safeSet(newState, 'updatedAt', Date.now());
        safeSet(newState, key.join('.'), value);
        return newState;
      }
    });
  }

  function save() {
    update((state) => {
      safeSet(state, 'savedAt', Date.now());
      return { ...state };
    });
  }

  function publish() {
    update((state) => {
      safeSet(state, 'publishedAt', Date.now());
      return { ...state };
    });
  }

  return {
    set,
    subscribe,
    updateValue,
    save,
    publish,
  };
}

export const contentStore = createContentStore();
