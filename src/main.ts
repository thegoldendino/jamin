import Jamin from './Jamin.svelte';
import config from '../jamin.config.mjs';

const app = new Jamin({
  target: document.body,
  props: {
    config,
  },
});

export default app;
