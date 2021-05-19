import React from "react";
import Layout from "../../components/layout/Layout";
import ListSubCategory from '../../components/listSubCategory/ListSubCategory'



const SubCatgoryList = () => {


  return (
    <div>
      <Layout>This is the page for the subcategory
          <ListSubCategory/>
      </Layout>
    </div>
  );
};

export default SubCatgoryList;
