import React from "react";
import img_1 from "./images/img_1.png";
import img_2 from "./images/img_2.jpg";
import img_3 from "./images/img_3.jpg";
import img_4 from "./images/img_4.jpg";
import img_5 from "./images/img_5.png";
import img_6 from "./images/img_6.png";

const SmallCards = () => {
  return (
    <div className=" container experience text-decoration-none row my-2 mx-4">
      <div className="sm col-2 mx-4 ">
        <span href="">
          <img src={img_1} alt="alt=" width="90px" height="90px" />
          <p>Villa</p>
        </span>
      </div>
      <div className="sm col-2">
        <span href="https://www.youtube.com/c/DarkRidee/.html" title="Click Me">
          <img src={img_2} alt="" width="90px" height="90px" />
          <p>Appartment House</p>
        </span>
      </div>
      <div className="sm col-2 mx-2">
        <span href="https://www.youtube.com/c/DarkRidee/.html" title="Click Me">
          <img src={img_3} alt="" width="90px" height="90px" />
          <p>Office & Studio </p>
        </span>
      </div>
      <div className="sm col-2">
        <span href="https://www.youtube.com/c/DarkRidee/.html" title="Click Me">
          <img src={img_4} alt="" width="90px" height="90px" />
          <p>Family House</p>
        </span>
      </div>
      
      <div className="sm col-2">
        <span href="https://www.youtube.com/c/DarkRidee/.html" title="Click Me">
          <img src={img_5} alt="" width="90px" height="90px" />
          <p>Pent House</p>
        </span>
      </div>
      <div className="sm col-1">
        <span href="https://www.youtube.com/c/DarkRidee/.html" title="Click Me">
          <img src={img_6} alt="" width="90px" height="90px" />
          <p className="mx-4">House</p>
        </span>
      </div>
    </div>
  );
};

export default SmallCards;
