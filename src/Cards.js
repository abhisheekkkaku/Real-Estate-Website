import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards(props) {
  const [background, setBackground] = useState("text-dark");

  const changeColor = () => {
    setBackground("bg-primary");
  };

  return (
    <div className=" rounded row m-5 ">
      {props.properties.map((card) => (
        <div className="p-2 m-3 col mx-4 rounded  " key={card.Title}>
          <Card className="bcd inner bg-light " style={{ width: "20rem" }}>
            <Card.Img variant="top" src={card.URL} />
            <Card.Body>
              <p className="">
                {" "}
                <button
                  className="h-h1"
                  onClick={() => props.favourates(card.Id)}
                >
                  <span className="text">Favourate</span>
                  <i className="icon ri-check-line ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="currentColor"
                      class="bi bi-check"
                      viewBox="0 0 9 10"
                    >
                      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                    </svg>
                  </i>
                </button>
              </p>
              <Card.Title className={background}>{card.Title}</Card.Title>
              <Card.Text>{card.Text}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Cards;
