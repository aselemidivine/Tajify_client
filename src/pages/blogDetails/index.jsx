import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import AdsSecond from "../../components/Ads2";

const BlogDetails = () => {
  return (
    <BlogDetailsContainer>
      <Navbar />
      <div className="flex justify-between items-end">
        <div className="ads__second">
          <AdsSecond />
        </div>
      </div>
    </BlogDetailsContainer>
  );
};

export default BlogDetails;

const BlogDetailsContainer = styled.div`

.ads__second {
  width: 920px;
  display: flex;
  justify-content: space-between;
  .custom__style {
    width: 100%;
  }
}
.section__container {
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2.8rem;
}
`;
