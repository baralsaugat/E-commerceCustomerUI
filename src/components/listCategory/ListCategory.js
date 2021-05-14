import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Card } from "react-bootstrap";
import { fetchAllCategorySuccess } from "../../pages/categoryList/CategorySlice";

import { fetchCategory } from "../../pages/categoryList/CategoryAction";

import "./listCategory.style.css";

const ListCategory = () => {
  const dispatch = useDispatch();
  const { categoryList } = useSelector((state) => state.category);
  console.log(categoryList);
  const [showListCategory, setShowListCategory] = useState("");

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  // handle to direct the category to product page\

  // const handleOnClick = () => {};

  return (
    <div className="listCategory-style">
      {categoryList.map((row, i) => (
        <a href="">
          <Card classname="card-body">
            <Card.Body key={i} >
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
