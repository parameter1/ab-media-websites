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
  company: 'AB Media, Inc.',
  publicationIds: [
    '60f981d5d28860bc33766203',
  ],
  subscribe,
  p1events: {
    tenant: 'abmedia',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'athleticbusiness.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/ab/ab-logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/ab/ab-logo.png?h=45&auto=format,compress&q=70&dpr=2',
      ],
    },
    footer: {
      src: 'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/ab/ab-logo.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/ab/ab-logo.png?h=60&auto=format,compress&q=70&dpr=2',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/athleticbusiness', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/athleticbiz/', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/athletic-business/', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/AthleticBusinessMag', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/Athleticbiz', target: '_blank' },
  ],
  podcastLinks: [],
  gtm: {
    containerId: 'GTM-KKMNMDK',
  },
  wufoo: {
    userName: 'NOT_SET',
  },
  layout: 'default',
};
