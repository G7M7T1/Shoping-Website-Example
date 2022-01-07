import React from "react";
import "../styles/Categories.css";

function Categories() {
  return (
    <div className="Categories">
      <h1>CATEGORIES</h1>
      <div className="CategoriesList">
        <div className="CategoriesListCard">
          <img src="./ca1.png" alt="ListCard" />
          <h5>Software</h5>
        </div>

        <div className="CategoriesListCard">
          <img src="./ca2.png" alt="ListCard" />
          <h5>Software</h5>
        </div>

        <div className="CategoriesListCard">
          <img src="./ca3.png" alt="ListCard" />
          <h5>Software</h5>
        </div>

        <div className="CategoriesListCard">
          <img src="./ca4.png" alt="ListCard" />
          <h5>Software</h5>
        </div>

        <div className="CategoriesListCard">
          <img src="./ca5.png" alt="ListCard" />
          <h5>Software</h5>
        </div>

        <div className="CategoriesListCard">
          <img src="./ca6.png" alt="ListCard" />
          <h5>Software</h5>
        </div>
      </div>
    </div>
  );
}

export default Categories;
