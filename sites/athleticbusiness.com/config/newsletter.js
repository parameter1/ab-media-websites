const baseConfig = {
  hiddenInputs: [
    { name: 'omedasite', value: 'ab_pref' },
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
  },
  signupBanner: {
    ...defaults,
    imagePath: 'files/base/p1/sandbox/image/static/newsletter-phone-full.png',
  },
  signupBannerLarge: {
    ...defaults,
    imagePath: 'files/base/p1/sandbox/image/static/newsletter-phone-full.png',
  },
  signupFooter: {
    ...baseConfig,
    name: 'Sign Up for AB Today!',
    action: 'https://athleticbusiness.dragonforms.com/loading.do',
    description: 'Join other industry professionals in the wood flooring industry to provide the latest news, information and insight delivered to your inbox twice a week.',
  },
  signupBannerStatic: {
    ...baseConfig,
    name: 'Sign Up for AB Today!',
    action: 'https://athleticbusiness.dragonforms.com/loading.do',
    description: 'Join other industry professionals in the wood flooring industry to provide the latest news, information and insight delivered to your inbox twice a week.',
  },
};
