import React from "react";
import Layout from "../../components/layout/Layout";
import ListSubCategory from "../../components/listSubCategory/ListSubCategory";
import Product from "../../pages/productList/Product";
import ListProduct from "../../components/listProduct/ListProduct";

const SubCatgoryList = () => {
// get slug from the url
// use that slug to do the query over the category list and get the category idfor the selected 
// from the useselect , call backend send the selected id and get all the product from the selected id only
// create new state as selected category and add all the products inside that category

  return (
    <div>
      <Layout>
        This is the page for the subcategory
        <ListSubCategory />
        <ListProduct />
      </Layout>
    </div>
  );
};

export default SubCatgoryList;
