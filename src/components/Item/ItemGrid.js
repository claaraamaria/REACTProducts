import React from "react";
import ItemCard from "./ItemCard";

const ItemGrid = ({ data }) => {
  const renderCards = () => {
    return data.map((item) => {
      console.log(item);
      return (
        <ItemCard
          key={item._id.timestamp}
          id={item._id}
          name={item.product.fabricant.nom}
          family={item.product.fabricant.famille}
          image={item.product.img}
        />
      );
    });
  };

  return <div>{renderCards()}</div>;
};

export default ItemGrid;
