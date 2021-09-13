const subscribe = require('./subscribe');

const topics = {
  primary: [
    { href: '/retail', label: 'Retail' },
    { href: '/service', label: 'Service' },
    { href: '/builder', label: 'Builder' },
    { href: '/products', label: 'Products' },
    { href: '/news', label: 'News' },
    { href: '/homeowners-diy', label: 'Homeowners/DIY' },
  ],
  expanded: [
  ],
  secondary: [
    // { href: '/path', label: 'Path' },
  ],
};

const utilities = [
  { href: 'https://info.aquamagazine.com', label: 'Advertise', target: '_blank' },
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
      title: 'AB Magazine',
      callToAction: 'Subscribe',
      image: {
        src: 'https://img.aquamagazine.com/files/base/abmedia/all/image/static/aqua/aqua-09-2021.png?auto=format%2Ccompress&fit=crop&h=78&q=70&w=85&crop=top',
        srcset: [
          'https://img.aquamagazine.com/files/base/abmedia/all/image/static/aqua/aqua-09-2021.png?auto=format%2Ccompress&fit=crop&h=78&q=70&dpr=2&w=85&crop=top',
        ],
      },
      link: subscribe.href,
    },
  ],
  desktopMenu,
  mobileMenu,
  primary: {
    items: topics.primary,
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
      subscribe,
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
