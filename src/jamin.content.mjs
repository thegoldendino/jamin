export default {
  updatedAt: null,
  savedAt: null,
  publishedAt: null,
  global: {
    INFO_EMAIL: 'test@gmail.com',
  },
  pages: {
    '/test-p-01': {
      PECAN_SEC: {
        CLUBNAME: 'Pirates of Pecan Valley',
      },
      BACON_SEC: {
        FLAVORS: ['smokey', 'bbq', 'mango'],
      },
    },
    '/test-p-02': {
      BIRD_SEC: {
        KING_BIRD: {
          NAME: 'Big Red',
          PHOTO:
            'https://ichef.bbci.co.uk/news/976/cpsprodpb/67CF/production/_108857562_mediaitem108857561.jpg',
        },
      },
      APPLE_SEC: {
        HONEYCRISPS: [
          { NAME: 'Herbert', BIO: "Is this love? That I'm feeling?" },
          {
            NAME: 'Joan',
            BIO: "After all that we've been through, it comes back to me and you.",
          },
        ],
      },
    },
  },
};
