const digitalEdition = require('./digital-edition');
const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const newsletter = require('./newsletter');
const search = require('./search');
const subscribe = require('./subscribe');

module.exports = {
  navigation,
  gam,
  nativeX,
  identityX,
  newsletter,
  digitalEdition,
  search,
  subscribe,
  company: 'AB Media Inc',
  mostPopularExludeIds: [15161984],
  publicationIds: [
    '61560280da016482233042ea',
  ],
  p1events: {
    tenant: 'abmedia',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'woodfloorbusiness.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.woodfloorbusiness.com/files/base/abmedia/all/image/static/wfb-site-logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.woodfloorbusiness.com/files/base/abmedia/all/image/static/wfb-site-logo.png?h=45&auto=format,compress&q=70&dpr=2 2x',
      ],
    },
    footer: {
      src: 'https://img.woodfloorbusiness.com/files/base/abmedia/all/image/static/wfb-site-logo.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.woodfloorbusiness.com/files/base/abmedia/all/image/static/wfb-site-logo.png?h=60&auto=format,compress&q=70&dpr=2 2x',
      ],
    },
  },
  premiumPartners: {
    shuffle: false,
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/WoodFloorBusiness', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/woodfloorbusiness/', target: '_blank' },
    { provider: 'pinterest', href: 'https://www.pinterest.com/wfbiz/_created/', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/wood-floor-business/', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/c/WoodFloorBusiness', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/WFBusinessMag', target: '_blank' },
  ],
  podcastLinks: [],
  gtm: {
    containerId: 'GTM-WT2JX6S',
  },
  wufoo: {
    userName: 'NOT_SET',
  },
  layout: 'default',
};
