export default {
  src_url: '/test-p-01.html',
  sections: {
    input: {
      label: 'Basic Input',
      inputText: {
        label: 'Input Text',
        type: 'text',
        applyTo: 'innerHTML',
      },
      inputImage: {
        label: 'Input Image',
        type: 'image',
        applyTo: 'src',
      },
    },
    array: {
      label: 'Arrays',
      inputText: {
        label: 'Input Texts',
        type: 'array',
        values: {
          alpha: {
            type: 'text',
            applyTo: 'innerHTML',
          },
        },
      },
    },
  },
};
