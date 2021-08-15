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
  search,
  subscribe,
  company: 'AB Media, Inc.',
  p1events: {
    tenant: 'abmedia',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'aquamagazine.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.aquamagazine.com/files/base/abmedia/all/image/static/aqua-site-logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.aquamagazine.com/files/base/abmedia/all/image/static/aqua-site-logo.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.aquamagazine.com/files/base/abmedia/all/image/static/aqua-site-logo.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.aquamagazine.com/files/base/abmedia/all/image/static/aqua-site-logo.png?h=120&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/AQUAMagazine', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/aquamagazine', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/aqua_magazine/', target: '_blank' },
    { provider: 'pinterest', href: 'https://www.pinterest.com/aquamagazine/_created/', target: '_blank' },
  ],
  podcastLinks: [],
  gtm: {
    containerId: 'GTM-NHTM4M7',
  },
  wufoo: {
    userName: 'NOT_SET',
  },
};
