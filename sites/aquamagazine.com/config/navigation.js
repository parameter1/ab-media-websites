const topics = {
  primary: [
    { href: '/retail', label: 'Retail' },
    { href: '/service', label: 'Service' },
    { href: '/builder', label: 'Builder' },
    { href: '/products', label: 'Products' },
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
  { href: 'https://athleticbusiness.dragonforms.com/loading.do?omedasite=aqua_land', label: 'Subscribe', target: '_blank' },
];

const mobileMenu = {
  primary: [
    ...topics.primary,
    ...topics.expanded,
  ],
  secondary: [
    ...topics.secondary,
    { href: 'https://athleticbusiness.dragonforms.com/loading.do?omedasite=aqua_land', label: 'Subscribe', target: '_blank' },
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
      title: 'Aqua Toolbox',
      callToAction: 'Learn More',
      image: {
        src: 'https://img.aquamagazine.com/files/base/abmedia/all/image/static/aqua/Bookpile.jpeg?auto=format%2Ccompress&amp;fit=crop&amp;h=78&amp;q=70&amp;w=85&amp;crop=top',
        srcset: [
          'https://img.aquamagazine.com/files/base/abmedia/all/image/static/aqua/Bookpile.jpeg?auto=format%2Ccompress&amp;fit=crop&amp;h=78&amp;q=70 2x&amp;w=85&amp;crop=top',
        ],
      },
      link: 'https://library.aquamagazine.com/',
    },
    {
      title: 'Buyers Guide',
      callToAction: 'Read More',
      image: {
        src: 'https://img.aquamagazine.com/files/base/abmedia/all/image/static/aqua/geometric15square.jpeg?auto=format%2Ccompress&amp;fit=crop&amp;h=78&amp;q=70&amp;w=85&amp;crop=top',
        srcset: [
          'https://img.aquamagazine.com/files/base/abmedia/all/image/static/aqua/geometric15square.jpeg?auto=format%2Ccompress&amp;fit=crop&amp;h=78&amp;q=70 2x&amp;w=85&amp;crop=top',
        ],
      },
      link: 'https://www.aquamagazine.com/buyers-guide',
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
      { href: 'https://athleticbusiness.dragonforms.com/loading.do?omedasite=aqua_land', label: 'Subscribe', target: '_blank' },
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
