import React from "react";
import Card from "./Card";
import creator1 from "../assets/images/pngs/creator-1.png";
import creator2 from "../assets/images/pngs/creator-2.png";
import creator3 from "../assets/images/pngs/creator-3.png";
import creator4 from "../assets/images/pngs/creator-4.png";
import creator5 from "../assets/images/pngs/creator-5.png";
import { Link } from "react-router-dom";

const creators = [
  { name: "Steve Mount", imagePath: creator1 },
  { name: "Foligo Mattew", imagePath: creator2 },
  { name: "Sweety Favour", imagePath: creator3 },
  { name: "Adesua Kay", imagePath: creator4 },
  { name: "Bela Seun", imagePath: creator5 },
];

function TopCreators() {
  return (
    <section className="section top-creator__section">
      <div className="section__container">
        <h3 className="heading__tetariary">Top creators</h3>
        <div
          className="top-creators__cards"
          style={{ gridTemplateColumns: `repeat(${creators.length}, 1fr)` }}
        >
          {creators.map((creator) => {
            return (
                <div className="creator">
                  <Card
                    key={creator.name}
                    imagePath={creator.imagePath}
                    title={""}
                  />
                  <p>{creator.name}</p>
                </div>
      
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TopCreators;
