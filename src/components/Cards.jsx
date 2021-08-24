import React from "react";
import Card from "./Card";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.png";
const cards = [
  {
    id: 1,
    title: 'Deku Web',
    image: image1,
  },
  { id: 2, title: "Deku Blog", image: image2 },
  { id: 3, title: "Deku Youtube", image: image3 },
];
function Cards() {
  return (
    <div className="container justify-content-center align-items-center">
      <div className="row">
        {
            cards.map(card =>(
                <div className="col-md-4" key={card.id}>
                    <Card title={card.title}imageSource={card.image} />
                </div>
            ))
        }
        </div>
      </div>
  );
}

export default Cards;
