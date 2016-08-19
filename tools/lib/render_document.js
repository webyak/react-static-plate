import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

/**
 * Render an html document from a template.
 * @param  {Object} props
 * @return {String}
 */
const renderDocument = (props) => {
  const Html = ({
    Title = [<title key={1}>*No title defined*</title>],
    metas = [<meta key={1} name="description" content="Use react-helmet." />],
    links = [<link key={1} rel="shortcut icon" href="#" />],
    scripts,
    cssBundle,
    jsBundle = '/bundle.js',
    body = '',
  }) => (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1"
        />
        {Title}
        {metas}
        {links}
        {scripts}
        {cssBundle && <link rel="stylesheet" href={cssBundle} />}
      </head>
      <body>
        <div id="react-root" dangerouslySetInnerHTML={{ __html: body }} />
        <script src={jsBundle} />
      </body>
    </html>
  );

  Html.propTypes = {
    Title: React.PropTypes.node,
    metas: React.PropTypes.node,
    links: React.PropTypes.node,
    scripts: React.PropTypes.node,
    cssBundle: React.PropTypes.string,
    jsBundle: React.PropTypes.string,
    body: React.PropTypes.string,
  };

  return `<!doctype html>${renderToStaticMarkup(<Html {...props} />)}`;
};

export default renderDocument;
