import React from 'react';

const ListOfGoods = ({goods}) => (
  <ul>
    {goods.map(good => <li>{good}</li>)}
  </ul>
);


export default ListOfGoods;