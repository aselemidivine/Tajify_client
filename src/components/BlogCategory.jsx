import React from "react";
import styled from "styled-components";

const BlogCategory = () => {
  return (
    <BlogCategoryContainer>
      <div className="lifestyle">
        <div className="wrapper__div">
          <div className="header-box"></div>
          <div className="bold__text">Lifestyle</div>
        </div>
      </div>
    </BlogCategoryContainer>
  );
};

export default BlogCategory;

const BlogCategoryContainer = styled.div`
  display: flex;
  margin-top: 34px;
  margin-bottom: 10px;
  justify-content: space-between;

  .wrapper__div {
    display: flex;
    align-items: end;
    justify-content: space-between;
  }
  .header-box {
    width: 11px;
    height: 29px;
    color: black;
    margin-right: 11px;
    background-color: #4caf50;
  }

  .bold__text {
    color: #000;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
