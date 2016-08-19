// ==================================================
// Layout
// ==================================================

import React from 'react';
import Helmet from 'react-helmet';
import './style.css';

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="My site"
      meta={[
        { name: 'description', content: 'A static site.' },
      ]}
      link={[
        { rel: 'shortcut icon', href: require('../../assets/favicon.ico') },
      ]}
    />
    {children}
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.element,
};

export default Layout;
