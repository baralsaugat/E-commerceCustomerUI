import React, { useEffect } from "react";
import { Card } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../pages/productList/ProductAction";

const ListProduct = () => {


  // use select the product
  const { productList } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [

  ]);
  console.log(productList);

  return <div>
    {productList.map((row, i) =>
     
    <Card key= {i}>
    <Card.Body>{row.name}</Card.Body>
    <h3>{row.price}</h3>
    </Card>
    
    
    )
    }
  </div>;
};

export default ListProduct;
