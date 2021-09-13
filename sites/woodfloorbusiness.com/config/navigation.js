const topics = {
  primary: [
    { href: '/wood-flooring', label: 'Wood Flooring' },
    { href: '/installation', label: 'Installation' },
    { href: '/sanding', label: 'Sanding' },
    { href: '/finishing', label: 'Finishing' },
    { href: '/business', label: 'Business' },
  ],
  expanded: [
  ],
  secondary: [
    // { href: '/path', label: 'Path' },
  ],
};

const utilities = [
  { href: 'https://info.woodfloorbusiness.com', label: 'Advertise', target: '_blank' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: 'https://athleticbusiness.dragonforms.com/loading.do?omedasite=wfb_land', label: 'Subscribe', target: '_blank' },
];

const mobileMenu = {
  primary: [
    ...topics.primary,
    ...topics.expanded,
  ],
  secondary: [
    ...topics.secondary,
    { href: 'https://athleticbusiness.dragonforms.com/loading.do?omedasite=wfb_land', label: 'Subscribe', target: '_blank' },
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
      title: 'Wood Floor Business Magazine',
      callToAction: 'Subscribe',
      image: {
        src: 'https://img.woodfloorbusiness.com/files/base/abmedia/all/image/static/wfb/wfb-toolbox-homepage.jpg?auto=format%2Ccompress&amp;fit=crop&amp;h=78&amp;q=70&amp;w=85&amp;crop=top',
        srcset: [
          'https://img.woodfloorbusiness.com/files/base/abmedia/all/image/static/wfb/wfb-toolbox-homepage.jpg?auto=format%2Ccompress&amp;fit=crop&amp;h=78&amp;q=70 2x&amp;w=85&amp;crop=top',
        ],
      },
      link: 'https://toolbox.woodfloorbusiness.com/',
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
      { href: 'https://athleticbusiness.dragonforms.com/loading.do?omedasite=wfb_land', label: 'Subscribe', target: '_blank' },
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
