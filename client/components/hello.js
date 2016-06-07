// ==================================================
// Hello
// ==================================================

import React from 'react';
import Radium from 'radium';

import colors from '../styling/colors.js';
import commonStyles from '../styling/common_styles.js';

const { resetHeading } = commonStyles;
const { darkGray } = colors;

const style = {
  padding: '8rem 0',
  textAlign: 'center',
};
const headingStyle = {
  ...resetHeading,
  color: darkGray,
  cursor: 'default',
  ':hover': {
    fontWeight: 'bold',
  },
};

const Hello = () => (
  <div style={style}>
    <h1 style={headingStyle}>Hi, React.</h1>
  </div>
);

export default Radium(Hello);
