import React from "react";
import styled from "styled-components";
import Writers1 from "../assets/images/pngs/writers-1.png"
import Writers2 from "../assets/images/pngs/writers-2.png"
import Writers3 from "../assets/images/pngs/writers-3.png"
import Writers4 from "../assets/images/pngs/writers-4.png"

const Writers = () => {
  return (
    <WritersContainer>
        <div>

      <div className="writers__container">
        <div className="w-[119px] h-[40px] bg-[#4CAF50] text-center text-16  text-white flex items-center cursor-pointer justify-center mt-15 ">
          Top Writers
        </div>

      <div className="view__all">View All</div>
      </div>
      {/* <section className=" py-10"> */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            <div className="bg-white rounded-lg shadow-md h-[267px] w-[201px]">
              <img src={Writers1} alt="Image 1" className="w-full h-auto" />
             
            </div>
            <div className="bg-white rounded-lg shadow-md h-[267px] w-[201px]">
              <img src={Writers2} alt="Image 2" className="w-full h-auto" />
              
            </div>
            <div className="bg-white rounded-lg shadow-md h-[267px] w-[201px]">
              <img src={Writers3} alt="Image 3" className="w-full h-auto" />
           
            </div>
            <div className="bg-white rounded-lg shadow-md h-[267px] w-[201px]">
              <img src={Writers4} alt="Image 4" className="w-full h-auto" />
            
            </div>
          </div>
        </div>

      {/* </section> */}
      </div>

    </WritersContainer>
  );
};

export default Writers;

const WritersContainer = styled.div`
  max-width: 1000px;
  margin-top: 34px;
  
  margin-bottom: 10px;
 

  .writers__container {
    display: flex;
  height: 40px;
  margin-top: 15px;
  margin-bottom: 10px;
  justify-content: space-between;
  }

  .view__all {
    margin-right: 10px;
  }
`;
