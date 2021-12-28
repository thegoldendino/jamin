export default {
  site: 'rvcd',
  schemaVersion: '0.0.1',
  startUrl: '/test-p-02.html',
  sections: {
    PECAN_SEC: {
      label: 'Pecan Section',
      fields: {
        CLUBNAME: {
          label: 'Club Name',
          type: 'text',
        },
      },
    },
    BACON_SEC: {
      label: 'Bacon Section',
      fields: {
        FLAVORS: {
          label: 'Flavors',
          type: 'array',
          fields: {
            FLAVOR: {
              type: 'text',
            },
          },
        },
      },
    },
    BIRD_SEC: {
      label: 'Bird Section',
      fields: {
        KING_BIRD: {
          label: 'King Bird',
          type: 'object',
          fields: {
            NAME: {
              label: 'Name',
              type: 'text',
            },
            PHOTO: {
              label: 'Photo',
              type: 'image',
            },
          },
        },
      },
    },
    APPLE_SEC: {
      label: 'Apple Section',
      fields: {
        HONEYCRISPS: {
          label: 'Honeycrips',
          type: 'array',
          fields: {
            APPLE: {
              type: 'object',
              fields: {
                NAME: {
                  label: 'Name',
                  type: 'text',
                },
                BIO: {
                  label: 'Biography',
                  type: 'multiline',
                },
              },
            },
          },
        },
      },
    },
  },
};
