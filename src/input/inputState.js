import { writable } from 'svelte/store';

function createInputState() {
  const { subscribe, set, update } = writable({});

  function updateValue(key, value) {
    update((state) => {
      state[key] = value;
      return { ...state };
    });
  }

  return {
    subscribe,
    updateValue,
    reset: () => set({}),
  };
}

export const inputState = createInputState();
