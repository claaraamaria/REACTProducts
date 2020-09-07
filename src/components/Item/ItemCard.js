import React from "react";
import { Card } from "antd";

const { Meta } = Card;

// const ItemCard= ({ id, name, family, image}) => {
//   return (
//     <Card
//         hoverable
//         style={{ width: 240 }}
//         cover={
//           <img
//             alt="example"
//             src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//           />
//         }
//       >
//         <Meta title="Europe Street beat" description="www.instagram.com" />
//       </Card>
//   )
// }

class ItemCard extends React.Component {
  render() {
    return (
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    );
  }
}

export default ItemCard;
