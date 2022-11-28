import React from "react";

const Navbar = (props) => {
  return (
    <div className=""> 
    <marquee className=" m-0 p-0 bg-light  ">For Enquiry Call Us <strong >+919800000002 </strong>  & Connect with us on <strong className="text-danger">Facebook | Youtube | Instagram</strong></marquee>
      <h3 className="bg-warning m-0 fs-2">
     
        <svg
          className="mx-2 bi bi-buildings"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z" />
          <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z" />
        </svg>
        4 pillars
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          fill="currentColor"
          className="bi bi-buildings mx-2"
          viewBox="0 0 16 16"
        >
          <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z" />
          <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z" />
        </svg>
      </h3>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto-">
              <div
                className="collapse navbar-collapse"
                id="navbarNavDarkDropdown">
                <ul className="navbar-nav ">
                  <li className="pp rounded nav-item dropdown mx-2">
                    <a
                      className="nav-link dropdown-toggle active  fst-normal font-monospace color-warning fs-5"
                      href="#"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      BUY
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-light "
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item fw-bold" href="#">
                          Popular Choice
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider " />
                      </li>
                      <li>
                        <a className="dropdown-item " href="#">
                          Ready To Move
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Budget Homes
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Newly Launched
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item  " href="#">
                          Premium Homes
                          <span className="position-absolute top-40 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                            <span className="visually-hidden">New alerts</span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Owner Properties
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div
                className="pp collapse navbar-collapse rounded"
                id="navbarNavDarkDropdown"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle active mx-4 fst-normal font-monospace fs-5"
                      href="#"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      SELL
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-light "
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item fw-bold" href="#">
                          For Owner
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item " href="#">
                          Post Property{" "}
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <li className="pp rounded nav-item">
                <a
                  className="nav-link active mx-5 fst-normal font-monospace fs-5"
                  aria-current="page"
                  href="#"
                >
                  PLOT
                </a>
              </li>
              <li className="pp rounded nav-item">
                <a
                  id="menu"
                  className="nav-link active mx-4 fst-normal font-monospace fs-5"
                  aria-current="page"
                  href="#"
                >
                  COMMERCIAL
                </a>
              </li>
              <li className="pp rounded nav-item" id="">
                <a
                  className="nav-link active mx-5 fst-normal font-monospace fs-5"
                  aria-current="page"
                  href="#"
                >
                  MANAGER PROPERTY
                </a>
              </li>
              <div
                className="collapse navbar-collapse"
                id="navbarNavDarkDropdown"
              >
                <ul className="navbar-nav">
                  <li className="pp rounded nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle active mx-4 fst-normal font-monospace fs-5"
                      href="#"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      HELP
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-light "
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Enquiry
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Help Center
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <button className=" heart rounded text-danger bg-normal border border-2 mx-4 my-1 " onClick={props.gotofavourates}>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
              </button>
            </ul>
            <form className="d-flex">
              {/* <button disabled={true} className="btn btn-success m-1">
                {" "}
                Login{" "}
              </button> */}

              <button
                disabled={true}
                className="btn btn-primary m-1 mx-1"
                type="submit"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
