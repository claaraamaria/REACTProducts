import React, { useState, useEffect } from "react";
import MainPageLayout from "../components/MainPageLayout";
import { Tabs } from "antd";
import "antd/dist/antd.css";
import ItemGrid from "../components/Item/ItemGrid";

const ProductsPage = () => {
  const { TabPane } = Tabs;
  const [results, setResults] = useState(null);

  useEffect( () => {

    async function fetchMyAPI() {
      let result = await fetch("http://localhost:1234/products");
      setResults(await result.json());
    }
    fetchMyAPI();
  }, []);

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
      <Tabs defaultActiveKey="2">
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
