import React from "react";
import ListProduct from "../../components/listProduct/ListProduct";

import Layout from "../../components/layout/Layout";
import ListSubCategory from "../../components/listSubCategory/ListSubCategory";

const Product = () => {
  return (
    <div>
      <Layout>
        This is the page for the subcategory
        <div className="listnproducts-style">
          {" "}
          <ListSubCategory />
          
        </div>
      </Layout>
    </div>
  );
};

export default Product;
