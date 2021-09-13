const subscribe = require('./subscribe');

const topics = {
  primary: [
    { href: '/facilities', label: 'Facilities' },
    { href: '/operations', label: 'Operations' },
    { href: '/leadership', label: 'Leadership' },
    { href: '/multimedia', label: 'Multimedia' },
  ],
  expanded: [
    // { href: 'https://www.abshow.com', label: 'AB Show', target: '_blank' },
  ],
  secondary: [
    { href: 'https://www.abshow.com', label: 'AB Show', target: '_blank' },
    // { href: '/operations', label: 'Operations' },
  ],
};

const utilities = [
  { href: 'https://www.athleticbusiness.info', label: 'Advertise', target: '_blank' },
  { href: '/page/contact-us', label: 'Contact Us' },
  subscribe,
];

const mobileMenu = {
  primary: [
    ...topics.primary,
    ...topics.expanded,
  ],
  secondary: [
    ...topics.secondary,
    subscribe,
  ],
};

const desktopMenu = {
  about: [...utilities],
  sections: [
    ...topics.primary,
    ...topics.expanded,
    ...topics.secondary,
  ],
};

module.exports = {
  type: 'navbar2',
  promos: [
    {
      title: 'AB Show 2021 in San Antonio',
      callToAction: 'Learn More',
      image: {
        src: 'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/ab/ABshow21_tile100.jpeg?auto=format%2Ccompress&amp;fit=crop&amp;h=78&amp;q=70&amp;w=85&amp;crop=top',
        srcset: [
          'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/ab/ABshow21_tile100.jpeg?auto=format%2Ccompress&amp;fit=crop&amp;h=78&amp;q=70 2x&amp;w=85&amp;crop=top',
        ],
      },
      link: 'https://www.abshow.com/',
    },
    {
      title: 'AB Buyers Guide',
      callToAction: 'Read More',
      image: {
        src: 'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/ab/ab-bg-promo.jpeg?auto=format%2Ccompress&amp;fit=crop&amp;h=78&amp;q=70&amp;w=85&amp;crop=top',
        srcset: [
          'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/ab/ab-bg-promo.jpeg?auto=format%2Ccompress&amp;fit=crop&amp;h=78&amp;q=70 2x&amp;w=85&amp;crop=top',
        ],
      },
      link: 'https://www.athleticbusiness.com/buyers-guide',
    },
  ],
  desktopMenu,
  mobileMenu,
  primary: {
    items: [
      ...topics.primary,
      { href: 'https://www.abshow.com', label: 'AB Show', target: '_blank' },
    ],
  },
  secondary: {
    items: [],
  },
  tertiary: {
    items: [],
  },
  footer: {
    items: [
      { href: '/page/about', label: 'About' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: 'https://athleticbusiness.dragonforms.com/loading.do?omedasite=ab_land', label: 'Subscribe', target: '_blank' },
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
      { href: '/site-map', label: 'Site Map' },
    ],
    topics: topics.primary,
    more: [
      ...utilities,
      // { href: '/path', label: 'Path' },
    ],
  },
};
