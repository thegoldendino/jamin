import Jamin from './Jamin.svelte';
import config from '../jamin.config.mjs';
import content from '../jamin.content.mjs';

const app = new Jamin({
  target: document.body,
  props: {
    content,
    config,
  },
});

export default app;
