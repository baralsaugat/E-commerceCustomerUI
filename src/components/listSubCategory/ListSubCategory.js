import React, { useEffect } from "react";

import { fetchCategory } from "../../pages/categoryList/CategoryAction";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { Card, NavItem } from "react-bootstrap";

import "./listSubCategory.style.css";

const ListSubCategory = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { categoryList } = useSelector((state) => state.category);
  const {productList} = useSelector(state => state.product)


  useEffect(() => {
    dispatch(fetchCategory());
  }, []);
  
  

  const childCategoryList = categoryList.filter((row) => row.parentCat);

  const slugObj = categoryList.filter((row) => row.slug === slug)[0];

  const newCatList = childCategoryList.filter(
    (row) => row.parentCat === slugObj._id
  );
  



  return (
    <div>
    <div className="listsubcategory-style">

      <a href="">{newCatList.map((row, i) => (
      
        <Card>
          <Card.Body key={i} >{row.name}</Card.Body>
        </Card>
      ))}</a>
      
    </div>

    <div>
      
    </div>
    </div>
  );
};

export default ListSubCategory;
