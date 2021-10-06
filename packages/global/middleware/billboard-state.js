const { get } = require('@parameter1/base-cms-object-path');
const parseReferrer = require('../utils/parse-referrer');

const cookieName = 'billboardAd';

module.exports = () => (req, res, next) => {
  const hasCookie = Boolean(get(req, `cookies.${cookieName}`));
  const referrer = parseReferrer(req);

  res.locals.billboardState = { hasCookie, referrer };
  next();
};
