const baseConfig = {
  action: 'https://athleticbusiness.dragonforms.com/loading.do',
  hiddenInputs: [
    { name: 'omedasite', value: 'aqua_pref' },
  ],
};

const defaults = {
  name: 'Your Industry Connection',
  description: 'Join other industry pros who get pertinent, fast-reading nationwide stories delivered twice a week to their inbox with AQUA Today.',
};

module.exports = {
  // uses inline omeda form
  signupBanner: {
    ...defaults,
    imagePath: 'files/base/p1/sandbox/image/static/newsletter-phone-full.png',
  },
  pushdown: {
    ...defaults,
    imagePath: 'files/base/p1/sandbox/image/static/newsletter-phone-half.png',
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
