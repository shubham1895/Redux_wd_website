import React from 'react';

const Pagination = () => {
    return (
    <div className ="ui pagination menu">
  <a className="active item">
    1
  </a>
  <div className="disabled item">
    ...
  </div>
  <a className="item">
    10
  </a>
  <a className="item">
    11
  </a>
  <a className="item">
    12
  </a>
  </div>
    );
}

export default Pagination;