import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import ItemCard from "../components/Item/ItemCard";
import ItemGrid from "../components/Item/ItemGrid";

const ProductsPage = () => {
  const { TabPane } = Tabs;
  const [results, setResults] = useState(null);

  const onFetchData = async () => {
    let result = await fetch("http://localhost:1234/products");
    setResults(await result.json());
    // console.log(await result.json());

    // fetch("http://localhost:1234/products")
    //   .then((response) => response.json())
    //   .then((result) => {
    //     setResults(result);
    //     // console.log(result);
    //   });
  };

  const furnisseurName = () => {
    if (results && results.length === 0) {
      return <h1>NO DATA HERE</h1>;
    }

    if (results && results.length > 0) {
      return (
        <div>
          {results.map((item) => (
            <div key={item._id.timestamp}>{item.product.furnisseur.nom}</div>
          ))}
        </div>
      );
    }

    return null;
  };

  const fabricantName = () => {
    if (results && results.length === 0) {
      return <h1>NO DATA HERE</h1>;
    }

    if (results && results.length > 0) {
      return <ItemGrid data={results} />;
    }

    return null;
  };

  return (
    <MainPageLayout>
      Here are the products :
      <br />
      <Tabs onChange={onFetchData}>
        <TabPane tab="Furnisseurs" key="1">
          {furnisseurName()}
        </TabPane>
        <TabPane tab="Fabricants" key="2">
          {fabricantName()}
        </TabPane>
      </Tabs>
    </MainPageLayout>
  );
};

export default ProductsPage;
