import Sitemap from 'sitemap';

/**
 * Render a complete sitemap.
 * @param  {Array}  paths    /, /about
 * @param  {String} hostname http://example.com
 * @return {String}          Sitemap
 */
const renderSitemap = ({ paths, hostname }) => {
  const urls = paths.map(path => {
    const depth = (path.match(/\//g) || []).length;
    // '/' === 1, '/foo' === 0.5, '/foo/bar' === 0.33
    const priority = path === '/' ? 1 : 1 / (depth + 1);

    return { url: path, changefreq: 'weekly', priority, lastmod: new Date() };
  });

  const sitemap = Sitemap.createSitemap({
    hostname,
    cacheTime: 600000,
    urls,
  });

  return sitemap.toString();
};

export default renderSitemap;
