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
  console.log(categoryList);

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);
  console.log(slug);

  const childCategoryList = categoryList.filter((row) => row.parentCat);

  const slugObj = categoryList.filter((row) => row.slug === slug)[0];

  const newCatList = childCategoryList.filter(
    (row) => row.parentCat === slugObj._id
  );

  return (
    <div className="listsubcategory-style">
      {newCatList.map((row, i) => (
        <Card>
          <Card.Body key={i}>{row.name}</Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ListSubCategory;
