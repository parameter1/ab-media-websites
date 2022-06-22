const baseConfig = {
  action: 'https://athleticbusiness.dragonforms.com/loading.do',
  hiddenInputs: [
    { name: 'omedasite', value: 'wfb_pref' },
  ],
};

const defaults = {
  name: 'Your Industry Connection',
  description: 'Join other industry professionals in the wood flooring industry to provide the latest news, information and insight delivered to your inbox twice a week.',
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
