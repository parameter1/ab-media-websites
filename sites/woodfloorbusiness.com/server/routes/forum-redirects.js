/**
 * Adds temporary redirects for forum pages.
 */
module.exports = (app) => {
  const to = '/page/forum';
  const urls = [
    '/forum',
    '/floormasters*',
    '/component/com_kunena/*',
    '/viewforum.php',
  ];
  urls.forEach(url => app.get(url, (_, res) => res.redirect(302, to)));
};
