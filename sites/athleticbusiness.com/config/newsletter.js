const baseConfig = {
  action: 'https://athleticbusiness.dragonforms.com/loading.do',
  hiddenInputs: [
    { name: 'omedasite', value: 'ab_pref' },
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
    deploymentTypeId: 17,
    name: 'Athletic Business Today',
    eventCategory: 'AB\'s E-Newsletter sent Monday through Friday to professionals within the athletic, fitness and recreation industries to provide pertinent, fast-reading nationwide stories.',
  },
  newsletters: [
    {
      deploymentTypeId: 17,
      name: 'Athletic Business Today',
      description: 'AB\'s E-Newsletter sent Monday through Friday to professionals within the athletic, fitness and recreation industries to provide pertinent, fast-reading nationwide stories.',
      eventCategory: 'Athletic Business Today Subscription',
    },
    {
      deploymentTypeId: 17,
      name: 'AB Product Updates',
      description: 'Leading products & services from the industry’s top suppliers.',
      eventCategory: 'AB Product Updates Subscription',
    },
    {
      deploymentTypeId: 20,
      name: 'AB Editorial Promotions',
      description: 'important updates on Athletic Business, online content, digital issues and more.',
      eventCategory: 'AB Editorial Promotions Subscription',
    },
    {
      deploymentTypeId: 19,
      name: 'AB Marketing Promotions',
      description: 'Information on upcoming contests, surveys and more.',
      eventCategory: 'AB Marketing Promotions Subscription',
    },
    {
      deploymentTypeId: 22,
      name: 'AB Show Promotional Emails',
      description: 'AB Show conference and expo floor updates, and messages from our sponsors.',
      eventCategory: 'AB Show Promotional Emails Subscription',
    },
  ],
  demographic: {
    id: 9,
    label: 'Your primary role?',
    values: [
      { id: 74, label: 'Amateur/Governmental Sports Org.' },
      { id: 72, label: 'Architectural/Specialty Design Firm' },
      { id: 73, label: 'Business/Program Management Consulting Firm' },
      { id: 70, label: 'Church' },
      { id: 58, label: 'College/University' },
      { id: 173, label: 'Commercial Sportsplex' },
      { id: 66, label: 'Corporate Rec./Fitness Center' },
      { id: 78, label: 'Correctional Instituition' },
      { id: 75, label: 'Dealer/Distributor' },
      { id: 62, label: 'Health Club' },
      { id: 59, label: 'High School/School District/Private School' },
      { id: 63, label: 'Hotel/Resort' },
      { id: 80, label: 'Ice Rink' },
      { id: 65, label: 'Jewish Community Center' },
      { id: 174, label: 'Manufacturers' },
      { id: 68, label: 'Military' },
      { id: 60, label: 'Parks & Rec., Community/Municipal Rec.' },
      { id: 69, label: 'Police/Fire Dept./Law Enforcement' },
      { id: 77, label: 'Private School' },
      { id: 61, label: 'Private Sports/Recreational Center' },
      { id: 71, label: 'Pro Sports' },
      { id: 79, label: 'Stadium/Arena' },
      { id: 67, label: 'Wellness Center/Hospital/Clinic' },
      { id: 64, label: 'YMCA/YWCA' },
      { id: 76, label: 'Other' },
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
    name: 'Sign Up for AB Today!',
    description: 'Join other industry professionals in the wood flooring industry to provide the latest news, information and insight delivered to your inbox twice a week.',
  },
  signupFooter: {
    ...baseConfig,
    name: 'Sign Up for AB Today!',
    description: 'Join other industry professionals in the wood flooring industry to provide the latest news, information and insight delivered to your inbox twice a week.',
  },
};
