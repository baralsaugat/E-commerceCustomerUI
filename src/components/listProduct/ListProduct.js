import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategory } from "../../pages/categoryList/CategoryAction";
import { fetchProduct } from "../../pages/productList/ProductAction";

const ListProduct = () => {
  // use select the product
  const { productList } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);
  const { slug } = useParams();

  // const [productListById, setProductListById] = useState([]);
  const dispatch = useDispatch();
 dispatch(fetchCategory())

  const slugCategory = categoryList.filter((row) => row.slug === slug);
  // dispatch(fetchCategory(slugCategory._id))

  return (
    <div>
      {productList.map((row, i) => (
        <Card key={i}>
          <Card.Body>{row.name}</Card.Body>
          <h3>{row.price}</h3>
        </Card>
      ))}
    </div>
  );
};

export default ListProduct;
