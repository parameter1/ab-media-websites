const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const newsletter = require('./newsletter');
const search = require('./search');
const subscribe = require('./subscribe');
const premiumPartners = require('./premium-partners');

module.exports = {
  navigation,
  premiumPartners,
  gam,
  nativeX,
  identityX,
  newsletter,
  search,
  subscribe,
  company: 'AB Media, Inc.',
  publicationIds: [
    '60f981b6d28860bc3375bcf7',
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
        'https://img.woodfloorbusiness.com/files/base/abmedia/all/image/static/wfb-site-logo.png?h=45&auto=format,compress&q=70&dpr=2',
      ],
    },
    footer: {
      src: 'https://img.woodfloorbusiness.com/files/base/abmedia/all/image/static/wfb-site-logo.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.woodfloorbusiness.com/files/base/abmedia/all/image/static/wfb-site-logo.png?h=60&auto=format,compress&q=70&dpr=2',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/WoodFloorBusiness', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/woodfloorbusiness/', target: '_blank' },
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
