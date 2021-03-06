const digitalEdition = require('./digital-edition');
const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const magazine = require('./magazine');
const newsletter = require('./newsletter');
const search = require('./search');
const subscribe = require('./subscribe');
const omeda = require('./omeda');

module.exports = {
  navigation,
  gam,
  nativeX,
  identityX,
  magazine,
  // temp fix till we update base-cms package
  // Dep Upgrades after https://github.com/parameter1/base-cms/pull/364
  publicationIds: [
    '6156026eda016482232f7b11',
  ],
  newsletter,
  omeda,
  digitalEdition,
  search,
  subscribe,
  company: 'AB Media Inc',
  p1events: {
    tenant: 'abmedia',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'aquamagazine.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.aquamagazine.com/files/base/abmedia/all/image/static/aqua-site-logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.aquamagazine.com/files/base/abmedia/all/image/static/aqua-site-logo.png?h=45&auto=format,compress&q=70&dpr=2 2x',
      ],
    },
    footer: {
      src: 'https://img.aquamagazine.com/files/base/abmedia/all/image/static/aqua-site-logo.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.aquamagazine.com/files/base/abmedia/all/image/static/aqua-site-logo.png?h=60&auto=format,compress&q=70&dpr=2 2x',
      ],
    },
    corporate: {
      alt: 'AB Media Logo',
      href: 'https://www.abmedia.biz',
      src: 'https://img.aquamagazine.com/files/base/abmedia/all/image/static/abmedia-red-white.png?h=40&auto=format,compress',
      srcset: [
        'https://img.aquamagazine.com/files/base/abmedia/all/image/static/abmedia-red-white.png?h=40&auto=format,compress&dpr=2 2x',
      ],
    },
  },
  premiumPartners: {
    shuffle: true,
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/AQUAMagazine', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/aqua_magazine/', target: '_blank' },
    { provider: 'pinterest', href: 'https://www.pinterest.com/aquamagazine/_created/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/aquamagazine', target: '_blank' },
  ],
  podcastLinks: [],
  gtm: {
    containerId: 'GTM-NHTM4M7',
  },
  wufoo: {
    userName: 'NOT_SET',
  },
  gcse: {
    id: '119a8d0092c7bbf10',
  },
  layout: 'combined',
  inquiry: {
    enabled: true,
    directSend: false,
    sendTo: 'sales@aquamagazine.com',
    sendFrom: 'AquaMagazine.com <noreply@parameter1.com>',
    logo: 'https://img.aquamagazine.com/files/base/abmedia/all/image/static/aqua-site-logo.png?h=60&auto=format,compress&q=70&bg=FFFFFF&pad=5',
    bgColor: '#FFFFFF',
  },
};
