import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const ItemCard = ({ name, family, image }) => {
  return (
    <Card
      className="shadow"
      hoverable
      style={{ width: 240, margin: 10 }}
      cover={<img alt="example" src={image} />}
    >
      <Meta title={name} description={family} />
    </Card>
  );
};

export default ItemCard;
