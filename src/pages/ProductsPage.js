import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";
import { Tabs } from 'antd';
import 'antd/dist/antd.css';

const ProductsPage = () => {
  const { TabPane } = Tabs
  const [results, setResults] = useState(null);

  const onFetchData = () => {

    fetch("http://localhost:1234/products")
      .then((response) => response.json())
      .then((result) => {
        setResults(result);
       // console.log(result);
      });
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

  const productFabricant = () => {
    if (results && results.length === 0) {
      return <h1>NO DATA HERE</h1>;
    }

    if (results && results.length > 0) {
      return (
        <div>
          {results.map((item) => (
            <div key={item._id.timestamp}>{(item.product.fabricant.nom) + " & " + (item.product.fabricant.famille)}</div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <MainPageLayout>
      Here are the products :
      <br />
      <Tabs onChange={onFetchData}>
        <TabPane tab="Furnisseurs" key="1">{furnisseurName()}</TabPane>
        <TabPane tab="Products" key="2">{productFabricant()}</TabPane>
      </Tabs>
    </MainPageLayout>
  );
};

export default ProductsPage;