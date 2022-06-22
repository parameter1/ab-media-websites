const baseConfig = {
  action: 'https://athleticbusiness.dragonforms.com/loading.do',
  hiddenInputs: [
    { name: 'omedasite', value: 'ab_pref' },
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
    name: 'Sign Up for AB Today!',
    description: 'Join other industry professionals in the wood flooring industry to provide the latest news, information and insight delivered to your inbox twice a week.',
  },
  signupFooter: {
    ...baseConfig,
    name: 'Sign Up for AB Today!',
    description: 'Join other industry professionals in the wood flooring industry to provide the latest news, information and insight delivered to your inbox twice a week.',
  },
};
