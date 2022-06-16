const baseConfig = {
  action: 'https://athleticbusiness.dragonforms.com/loading.do',
  hiddenInputs: [
    { name: 'omedasite', value: 'wfb_pref' },
  ],
};

const defaults = {
  name: 'Your Industry Connection',
  description: 'Join other industry professionals in the wood flooring industry to provide the latest news, information and insight delivered to your inbox twice a week.',
  privacyPolicy: {
    href: '/page/privacy-policy',
    label: 'Terms of Use and Privacy Policy',
  },
  defaultNewsletter: {
    deploymentTypeId: 23,
    name: 'WFB E-News',
    eventCategory: 'WFB E-News Subscription',
  },
  newsletters: [
    {
      deploymentTypeId: 23,
      name: 'WFB E-News',
      description: 'Sent Mondays and Wednesdays to professionals in the wood flooring industry to provide the latest news, information and insight',
      eventCategory: 'WFB E-News Subscription',
    },
    {
      deploymentTypeId: 27,
      name: 'WFB Product Updates',
      description: 'Leading products & special offers from the industry’s top suppliers.',
      eventCategory: 'WFB Product Subscription',
    },
    {
      deploymentTypeId: 26,
      name: 'WFB Editorial Promotions',
      description: 'Important updates on Wood Floor Business, online content, digital issues, content roundups and more.',
      eventCategory: 'WFB Editorial Subscription',
    },
    {
      deploymentTypeId: 25,
      name: 'WFB Marketing Promotions',
      description: 'Information on upcoming contests, surveys and more.',
      eventCategory: 'WFB Marketing Subscription',
    },
    {
      deploymentTypeId: 28,
      name: 'WFB Contractor Panel',
      description: 'These surveys will give contractors an opportunity to share their opinions about products and more.',
      eventCategory: 'WFB Contractor Panel Subscription',
    },
  ],
  demographic: {
    id: 11,
    label: 'Your primary role?',
    values: [
      { id: 118, label: 'Installer/Contractor/Sander/Refinisher' },
      { id: 119, label: 'Retail Floor Covering Store' },
      { id: 120, label: 'Distributor/Manufacturer Representative' },
      { id: 121, label: 'Manufacturer/Importer/Exporter' },
      { id: 122, label: 'Architect' },
      { id: 123, label: 'Interior Designer' },
      { id: 124, label: 'Builder' },
      { id: 125, label: 'Inspector' },
      { id: 126, label: 'Other (Please Specify)' },
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
    description: 'Join other industry professionals in the wood flooring industry to provide the latest news, information and insight delivered to your inbox twice a week.',
  },

  // links off to seperate omeda dragonform
  signupBannerLarge: {
    ...baseConfig,
    name: 'Newsletter for Wood Floor Professionals',
    description: 'Get industry news, insights, and new product information delivered straight to your inbox.',
  },
  signupFooter: {
    ...baseConfig,
    name: 'Newsletter for Wood Floor Professionals',
    description: 'Get industry news, insights, and new product information delivered straight to your inbox.',
  },
};
