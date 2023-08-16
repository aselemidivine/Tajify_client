import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WriterFooter = () => {
  return (
    <WriterFooterContainer>
      <div className="custom__style bg-[#D9D9D9] w-[728px] h-[90px]">
        <div className="links__style ">
          <ul className="writer__footer__list">
            <li>
              <Link to="/help">Help Center</Link>
            </li>
            <li className="about__border">
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
          <div className="copyright">
            <div className="tajify__logo">Tajify</div>
            <span>Copyright 2023</span>
          </div>
        </div>
      </div>
    </WriterFooterContainer>
  );
};

export default WriterFooter;

const WriterFooterContainer = styled.div`
  .custom__style {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  // .links__style {
  //   display: grid;
  //   align-items: center;
  //   justify-content: space-between;
  // }

  .about__border {
    padding: 0 10px;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
  }

  .writer__footer__list {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 231px;
    margin-bottom: 20px;
    li {
      font-size: 11.11px;
    }
  }

  .copyright {
    display: flex;
    align-items: center;
    justify-content: space-between;
      span {
      font-size: 11.11px;
      font-weight: 500;

      }
  }
`;
