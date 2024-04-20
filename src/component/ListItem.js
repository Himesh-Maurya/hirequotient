import React, { useState } from 'react';

import MyTable from './MyTable';

const ListItem = ({ assetClass,items }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{  padding: '2px', backgroundColor: '#f0f0f0' }}>
      <div onClick={toggleExpand} style={{height: '40px', cursor: 'pointer' }}>
      {isExpanded ? '▲' : '▼'}{assetClass}({items.length}) 
      </div>
      {isExpanded &&  <MyTable items={items} assetClass={assetClass}/> }
    </div>
  );
};

export default ListItem;
