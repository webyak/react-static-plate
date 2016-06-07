// ==================================================
// Layout
// ==================================================

import React from 'react';
import Radium, { StyleRoot, Style } from 'radium';
import Helmet from 'react-helmet';

const Layout = ({ children }) => (
  <StyleRoot>
    <Helmet
      title="My site"
      meta={[{ name: 'description', content: 'A static site.' }]}
      link={[{ rel: 'shortcut icon', href: require('../assets/favicon.ico') }]}
    />
    <Style
      rules={{
        'html, body': {
          width: '100%',
          height: '100%',
        },
        '*, *:before, *:after': {
          boxSizing: 'border-box',
        },
      }}
    />
    {children}
  </StyleRoot>
);

Layout.propTypes = {
  children: React.PropTypes.element,
};

export default Radium(Layout);
