const topics = {
  primary: [
    { href: '/path', label: 'Path' },
  ],
  expanded: [
  ],
  secondary: [
    { href: '/path', label: 'Path' },
  ],
};

const utilities = [
  { href: 'https://www.athleticbusiness.info', label: 'Advertise', target: '_blank' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: 'https://athleticbusiness.dragonforms.com/loading.do?omedasite=ab_land', label: 'Subscribe', target: '_blank' },
];

const mobileMenu = {
  primary: [
    ...topics.primary,
    ...topics.expanded,
  ],
  secondary: [
    ...topics.secondary,
    { href: 'https://athleticbusiness.dragonforms.com/loading.do?omedasite=ab_land', label: 'Subscribe', target: '_blank' },
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
  desktopMenu,
  mobileMenu,
  primary: {
    items: [],
  },
  secondary: {
    items: topics.primary,
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
      { href: '/path', label: 'Path' },
    ],
  },
};
