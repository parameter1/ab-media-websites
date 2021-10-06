const { get } = require('@parameter1/base-cms-object-path');
const parseReferrer = require('./parse-referrer');

module.exports = (req, res) => {
  const cookieName = 'billboard';
  const hasCookie = Boolean(get(req, `cookies.${cookieName}`));
  const referrer = parseReferrer(req);
  const hours = 24;
  const maxAge = hours * 60 * 60 * 1000;
  if (!hasCookie && referrer === 'internal') {
    res.cookie(cookieName, true, { maxAge });
    return 'billboard';
  }
  return 'leaderboard';
};
