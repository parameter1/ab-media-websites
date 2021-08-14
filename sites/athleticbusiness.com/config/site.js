const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const newsletter = require('./newsletter');

module.exports = {
  navigation,
  gam,
  nativeX,
  identityX,
  newsletter,
  company: 'AB Media, Inc.',
  p1events: {
    tenant: 'abmedia',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'athleticbusiness.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/ab-site-logo.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/ab-site-logo.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/ab-site-logo.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.athleticbusiness.com/files/base/abmedia/all/image/static/ab-site-logo.png?h=120&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/athleticbusiness', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/Athleticbiz', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/athletic-business/', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/AthleticBusinessMag', target: '_blank' },
    { provider: 'youtube', href: 'https://www.instagram.com/athleticbiz/', target: '_blank' },
  ],
  podcastLinks: [],
  gtm: {
    containerId: 'NOT_SET',
  },
  wufoo: {
    userName: 'NOT_SET',
  },
};
