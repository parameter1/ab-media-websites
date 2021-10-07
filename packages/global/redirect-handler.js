const getFileRedirect = ({ from, app }) => {
  const { config, tenantKey } = app.locals;
  const matches = /^\/images\//.exec(from);
  if (!matches) return null;

  const assetHost = config.website('assetHost');
  const host = config.website('host');
  const siteKey = host.replace(/^www\./, '').replace(/\.com$/, '');
  const [account] = tenantKey.split('_');

  const path = `imports/${account}/${siteKey}${from}`;
  const to = `https://${assetHost}/${path}`;
  return { to };
};

module.exports = ({ from, app }) => {
  if (/^\/images\/digitalissues/.test(from)) return null;
  return getFileRedirect({ from, app });
};
