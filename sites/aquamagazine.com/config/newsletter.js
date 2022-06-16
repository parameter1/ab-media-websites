const baseConfig = {
  action: 'https://athleticbusiness.dragonforms.com/loading.do',
  hiddenInputs: [
    { name: 'omedasite', value: 'aqua_pref' },
  ],
};

const defaults = {
  name: 'Your Industry Connection',
  description: 'Join other industry pros who get pertinent, fast-reading nationwide stories delivered twice a week to their inbox with AQUA Today.',
  privacyPolicy: {
    href: '/page/privacy-policy',
    label: 'Terms of Use and Privacy Policy',
  },
  defaultNewsletter: {
    deploymentTypeId: 11,
    name: 'AQUA Today',
    eventCategory: 'Daily AQUA Subscription',
  },
  newsletters: [
    {
      deploymentTypeId: 11,
      name: 'AQUA Today',
      description: 'Professionals within the spa and pool industry to provide pertinent, fast-reading nationwide stories.',
      eventCategory: 'AQUA Product Subscription',
    },
    {
      deploymentTypeId: 16,
      name: 'AQUA Product Updates',
      description: 'Leading products & services from the industry\'s top suppliers.',
      eventCategory: 'AQUA Product Subscription',
    },
    {
      deploymentTypeId: 15,
      name: 'AQUA Editorial Promotions',
      description: 'Important updates on AQUA Magazine, online content, digital issues and more.',
      eventCategory: 'AQUA Editorial Subscription',
    },
    {
      deploymentTypeId: 14,
      name: 'AQUA Marketing Promotions',
      description: 'Information on upcoming contests, surveys and more.',
      eventCategory: 'AQUA Marketing Subscription',
    },
    {
      deploymentTypeId: 30,
      name: 'AQUA Live Promotional Emails',
      description: 'AQUA Live conference and expo floor updates, and messages from our sponsors.',
      eventCategory: 'AQUA Live Subscription',
    },
  ],
  demographic: {
    id: 7,
    label: 'Your primary role?',
    values: [
      { id: 3, label: 'Pool Dealer/Builder Only' },
      { id: 4, label: 'Pool and Spa Dealer/Builder' },
      { id: 5, label: 'Spa Dealer Only' },
      { id: 6, label: 'Pool and Spa Supply Dealer' },
      { id: 7, label: 'Maintenance/Service' },
      { id: 8, label: 'Distributor/Wholesaler' },
      { id: 9, label: 'Manufacturer, Manufacturer\'s Rep.' },
      { id: 10, label: 'Casual Furniture/Patio Dealer' },
      { id: 11, label: 'Landscape Architect/Designer' },
      { id: 12, label: 'Solar/Sauna Dealer' },
      { id: 13, label: 'Other (Please Specify)' },
    ],
  },
};

module.exports = {
  // uses inline omeda form
  signupBanner: {
    ...defaults,
    imagePath: 'files/base/p1/sandbox/image/static/newsletter-phone-full.png',
  },
  pushdown: {
    ...defaults,
    imagePath: 'files/base/p1/sandbox/image/static/newsletter-phone-full.png',
    description: 'Join other industry pros who get pertinent, fast-reading nationwide stories delivered twice a week to their inbox with AQUA Today.',
  },

  // links off to seperate omeda dragonform
  signupBannerLarge: {
    ...baseConfig,
    name: 'Newsletter for Pool and Spa Professionals',
    description: 'Get industry news, insights, and new product information delivered straight to your inbox.',
  },
  signupFooter: {
    ...baseConfig,
    name: 'Newsletter for Pool and Spa Professionals',
    description: 'Get industry news, insights, and new product information delivered straight to your inbox.',
  },
};
