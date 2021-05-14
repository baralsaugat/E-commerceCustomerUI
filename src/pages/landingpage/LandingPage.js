import React from "react";
import Layout from "../../components/layout/Layout";
import CategoryList from "../categoryList/CategoryList";
const LandingPage = () => {
  return (
    <div>
      <Layout>
        This is the landing pages
        <CategoryList />
      </Layout>
    </div>
  );
};

export default LandingPage;
