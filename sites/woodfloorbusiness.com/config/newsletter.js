const baseConfig = {
  hiddenInputs: [
    { name: 'omedasite', value: 'wfb_pref' },
  ],
};

const defaults = {
  disabled: process.env.DISABLE_IDX_NEWSLETTER_SIGNUP === 'true',
  name: 'Your Industry Connection',
  description: 'Join other industry professionals in the wood flooring industry to provide the latest news, information and insight delivered to your inbox twice a week.',
};

module.exports = {
  pushdown: {
    ...defaults,
    imagePath: 'files/base/p1/sandbox/image/static/newsletter-phone-half.png',
    description: 'Join other industry professionals in the wood flooring industry to provide the latest news, information and insight delivered to your inbox twice a week.',
  },
  signupBanner: {
    ...defaults,
    imagePath: 'files/base/p1/sandbox/image/static/newsletter-phone-full.png',
  },
  signupBannerLarge: {
    ...defaults,
    name: 'Newsletter for Wood Floor Professionals',
    description: 'Get industry news, insights, and new product information delivered straight to your inbox.',
  },
  signupFooter: {
    ...defaults,
    name: 'Newsletter for Wood Floor Professionals',
    description: 'Get industry news, insights, and new product information delivered straight to your inbox.',
  },
  signupBannerStatic: {
    ...baseConfig,
    action: 'https://athleticbusiness.dragonforms.com/loading.do',
    name: 'Newsletter for Wood Floor Professionals',
    description: 'Get industry news, insights, and new product information delivered straight to your inbox.',
  },
};
