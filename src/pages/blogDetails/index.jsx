import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import AdsSecond from "../../components/Ads2";

const BlogDetails = () => {
  return (
    <BlogDetailsContainer>
      <Navbar />
      <div className="custom__width">
          <div className="flex ads__body justify-between items-end">
            <div className="ads__second">
              <AdsSecond />
            </div>
          </div>
      </div>
    </BlogDetailsContainer>
  );
};

export default BlogDetails;

const BlogDetailsContainer = styled.div`
  .custom__width {
    max-width: 136rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ads__body {
    margin-bottom: 33px;
    margin-top: 33px;
    padding: 0 10px;
  }

  .ads__second {
    // width: 920px;
    display: flex;
    justify-content: space-between;
    .custom__style {
      width: 920px;
    }
  }
  .section__container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 2.8rem;
  }
`;
