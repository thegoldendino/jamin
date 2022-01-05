import InputText from './InputText.svelte';
import InputMultiline from './InputMultiline.svelte';
import InputEmail from './InputEmail.svelte';
import InputImage from './InputImage.svelte';
import InputArray from './InputArray.svelte';
import InputObject from './InputObject.svelte';

export const types = {
  text: InputText,
  multiline: InputMultiline,
  email: InputEmail,
  image: InputImage,
  array: InputArray,
  object: InputObject,
};
