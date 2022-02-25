import React from "react";

import './ItemListContainer.css';



const Item = ({ name }) => (
  <li>
    {name}
  </li>
);

const ItemListContainer = () => {
  return (
    <div>
      <ul>
        <Item name="Catnip" />
        <Item name="Collar" />
        <Item name="Arena" />
        <Item name="Rascador" />
        <Item name="Campera" />
      </ul>
    </div>
  );
};

export default ItemListContainer;