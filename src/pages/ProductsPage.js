import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";
import { Button } from 'antd';
import 'antd/dist/antd.css';

const ProductsPage = () => {
  const [results, setResults] = useState(null);

  const onFetchData = () => {
    // /http://localhost:1234/products

    fetch("http://localhost:1234/products")
      .then((response) => response.json())
      .then((result) => {
        setResults(result);
        console.log(result);
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
            <div>{item.product.furnisseur.nom}</div>
          ))}
        </div>
      );
    }

    return null;
  };

  const userName = () => {
    if (results && results.length === 0) {
      return <h1>NO DATA HERE</h1>;
    }

    if (results && results.length > 0) {
      return (
        <div>
          {results.map((item) => (
            <div>{item.user.nom}</div>
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
      <Button type="primary" onClick={onFetchData}>
        Fetch Data
      </Button>
      {furnisseurName()}
      {userName()}
    </MainPageLayout>
  );
};

export default ProductsPage;