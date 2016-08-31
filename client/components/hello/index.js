// ==================================================
// Hello
// ==================================================

import React from 'react';
import classnames from 'classnames';
import style from './style.css';

const cx = classnames.bind(style);

const Hello = () => (
  <div className={cx('wrap')}>
    <h1 className={cx('heading')}>Hello React</h1>
    <div>🙈</div>
  </div>
);

export default Hello;
