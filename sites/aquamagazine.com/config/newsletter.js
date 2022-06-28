const baseConfig = {
  hiddenInputs: [
    { name: 'omedasite', value: 'aqua_pref' },
  ],
};

const defaults = {
  disabled: process.env.DISABLE_IDX_NEWSLETTER_SIGNUP === 'true',
  name: 'Your Industry Connection',
  description: 'Join other industry pros who get pertinent, fast-reading nationwide stories delivered twice a week to their inbox with AQUA Today.',
};

module.exports = {
  pushdown: {
    ...defaults,
    imagePath: 'files/base/p1/sandbox/image/static/newsletter-phone-half.png',
  },
  signupBanner: {
    ...defaults,
    imagePath: 'files/base/p1/sandbox/image/static/newsletter-phone-full.png',
  },
  signupBannerLarge: {
    ...defaults,
    name: 'Newsletter for Pool and Spa Professionals',
    description: 'Get industry news, insights, and new product information delivered straight to your inbox.',
  },
  signupFooter: {
    ...defaults,
    name: 'Newsletter for Pool/Spa Professionals',
    description: 'Get industry news, insights, and new product information delivered straight to your inbox.',
  },
  signupBannerStatic: {
    ...baseConfig,
    name: 'Newsletter for Pool and Spa Professionals',
    action: 'https://athleticbusiness.dragonforms.com/loading.do',
    description: 'Get industry news, insights, and new product information delivered straight to your inbox.',
  },
};
