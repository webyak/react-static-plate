import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import Helmet from 'react-helmet';

import getPaths from './lib/get_paths.js';
import renderSitemap from './lib/render_sitemap.js';
import writeFile from './lib/write_file.js';
import renderDocument from './lib/render_document.js';

import config from '../package.json';
import webpackConfig from './webpack.prod.config.js';
import routes from '../client/routes.js';

/**
 * Build a site by rendering every route into it's own file.
 * @param  {String} bundle Public path to bundled js file
 */
const buildStatic = ({ jsBundle, cssBundle }) => {
  const { website } = config.plate_config;
  const paths = getPaths(routes);
  // make sure the not found route is not part of the sitemap.
  const sitemapPaths = paths.filter(value => value !== '/*');

  const sitemap = renderSitemap({ paths: sitemapPaths, hostname: website });
  writeFile({
    dir: webpackConfig.output.path,
    fileName: '/sitemap.xml',
    content: sitemap,
  });

  paths.forEach(path => {
    match({ routes, location: path }, (error, redirectLocation, renderProps) => {
      if (error) throw error;

      if (renderProps) {
        const body = renderToString(<RouterContext {...renderProps} />);
        const { title, meta, link, script } = Helmet.rewind();

        let fileName = path === '/*'
          ? '/404'
          // replace trailing slash with /index
          : path.replace(/\/$/, '/index');

        fileName = `${fileName}.html`;

        const html = renderDocument({
          Title: title.toComponent(),
          metas: meta.toComponent(),
          links: link.toComponent(),
          scripts: script.toComponent(),
          jsBundle,
          cssBundle,
          body,
        });

        writeFile({
          dir: webpackConfig.output.path,
          fileName,
          content: html,
        });
      }
    });
  });
};

export default buildStatic;
