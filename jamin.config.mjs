export default {
  src_url: '/test-p-01.html',
  sections: {
    arrayOfObjects: {
      label: 'Array O Section',
      fields: {
        array01: {
          label: 'Objects',
          type: 'array',
          field: {
            type: 'object',
            applyTo: 'innerHtml',
            fields: {
              title: {
                label: 'Title',
                type: 'text',
                applyTo: 'innerHtml',
              },
              blurb: {
                label: 'Blurb',
                type: 'multiline',
                applyTo: 'innerHtml',
              },
            },
          },
        },
      },
    },
    input01: {
      label: 'Basic Input',
      fields: {
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
    },
    input02: {
      label: 'Basic Input',
      fields: {
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
    },
    array: {
      label: 'Arrays',
      fields: {
        inputText: {
          label: 'Input Texts',
          type: 'array',
          field: {
            type: 'text',
            applyTo: 'innerHTML',
          },
        },
      },
    },
  },
};
