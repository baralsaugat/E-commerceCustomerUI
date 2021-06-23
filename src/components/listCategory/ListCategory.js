import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Card, Link } from "react-bootstrap";

import { fetchCategory } from "../../pages/categoryList/CategoryAction";

import "./listCategory.style.css";
import { useHistory } from "react-router-dom";

const ListCategory = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { categoryList } = useSelector((state) => state.category);

  dispatch(fetchCategory());



  const parentCategoryList = categoryList?.filter((row) => !row.parentCat);

  return (
    <div className="listCategory-style">
      {parentCategoryList.map((row, i) => (
        <a href={`/category/${row.slug}`}>
          <Card classname="card-body">
            <Card.Body key={i}> {row.name}</Card.Body>
          </Card>
        </a>
      ))}
    </div>
  );
};

export default ListCategory;
