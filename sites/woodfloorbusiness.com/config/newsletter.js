const baseConfig = {
  action: 'https://athleticbusiness.dragonforms.com/loading.do',
  hiddenInputs: [
    { name: 'omedasite', value: 'wfb_pref' },
  ],
};

const defaults = {
  name: 'NOT_SET',
  description: 'NOT_SET',
  defaultNewsletter: {
    deploymentTypeId: 0,
    name: 'NOT_SET',
    eventCategory: 'NOT_SET',
  },
  newsletters: [
    {
      deploymentTypeId: 0,
      name: 'NOT_SET',
      description: 'NOT_SET',
      eventCategory: 'NOT_SET',
    },
  ],
  demographic: {
    id: 0,
    label: 'Your primary role?',
    values: [
      { id: 0, label: 'NOT_SET' },
    ],
  },
};

module.exports = {
  // uses inline omeda form
  signupBanner: {
    ...defaults,
    imagePath: 'static/newsletter-pushdown/wfb-full.png',
  },
  pushdown: {
    ...defaults,
    imagePath: 'static/newsletter-pushdown/wfb-half.png',
    description: 'NOT_SET',
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
