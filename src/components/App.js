import React from 'react';
import PostList from './PostList';
import Pagination from './pagination';

const App = () => {
  return <div className="ui container"><PostList/>
  
  <Pagination/>
  
  </div>;
};

export default App;