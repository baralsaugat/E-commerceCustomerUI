import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Card, Link } from "react-bootstrap";
// import { fetchAllCategorySuccess } from "../../pages/categoryList/CategorySlice";

import { fetchCategory } from "../../pages/categoryList/CategoryAction";

import "./listCategory.style.css";
import { useHistory } from "react-router-dom";

const ListCategory = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { categoryList } = useSelector((state) => state.category);

  // const [showListCategory, setShowListCategory] = useState("");

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  // handle to direct the category to product page\

  // const handleOnClick = () => {};

  const parentCategoryList = categoryList.filter((row) => !row.parentCat);
  // const childCategoryList = categoryList.filter((row))

  return (
    <div className="listCategory-style">
      {parentCategoryList.map((row, i) => (
        <a href={`/category/${row.slug}`}>
          <Card classname="card-body">
            <Card.Body key={i}>
              {" "}
              {row.name}
            </Card.Body>
          </Card>
        </a>
      ))}
    </div>
  );
};

export default ListCategory;
