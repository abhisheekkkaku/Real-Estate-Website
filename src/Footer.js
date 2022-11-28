import React from "react";
import footer_2 from "./images/footer_2.png";

function Footer(props) {
  return (
    <div className="container-fluid bg-dark py-2 page-footer font-small special-color-light bg-light pt-4 ">
      <div className="container footer">
        <div className="row g-3">
          <div className="">
            
            <h3 className=" text-light font-weight-bold col-2 "><img className="rounded-circle m-1" src={footer_2} width="70px"></img>
              4 pillars
            </h3>
            <h4 className=" text-light col-3 text-monospace fst-italic fw-normal">Build Your Trust</h4>
            {/* <h5 className=" text-success  ">4 Pillors</h5> */}
          </div>
          <div className="card">
            <div className="">
              <div className="">
                <img src="" className="img-fluid rounded-start" alt="" />
              </div>
              <div className="">
                <div className="card-body">
                  <h5 className="card-title text-warning">
                    Properties in India
                  </h5>
                  <p className="card-text text-success">
                    Property in New Delhi | Property in Mumbai | Property in
                    Chennai | Property in Pune | Property in Noida | Property in
                    Gurgaon | Property in Bangalore | Property in Ahmedabad
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center text-white py-4 my-1">
        © 2020 Copyright:
        <a className=" text-warning" href="/">
          {" "}
          4
        </a>
        <a className=" text-warning " href="">
          {" "}
          Pillars.com
        </a>
      </div>
    </div>
  );
}

export default Footer;
