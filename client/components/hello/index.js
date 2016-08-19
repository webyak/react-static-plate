// ==================================================
// Hello
// ==================================================

import React from 'react';
import { wrap, heading } from './style.css';

const Hello = () => (
  <div className={wrap}>
    <h1 className={heading}>Hello React</h1>
    <div>🙈</div>
  </div>
);

export default Hello;
