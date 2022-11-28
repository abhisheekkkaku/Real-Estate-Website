import React, { useState } from "react";

import download_1 from "./images/download_1.jpg";

const SearchList = (props) => {
  const [filters, setFilters] = useState({});

  const updateFilters = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <img
        className="b-1 rounded img-fluid"
        src={download_1}
        align="left"
        alt=""
        width="700"
      />
      <div className="bg-white-50 bg-gradient">
        <span
          id="box-size"
          className="sb border rounded-box rounded row fw-bold  text-dark fw-bold bg-dark rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-house-add-fill my-2"
            viewBox="0 0 1 16"
          >
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 1 1-1 0v-1h-1a.5.5 0 1 1 0-1h1v-1a.5.5 0 0 1 1 0Z" />
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
            <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
          </svg>

          <div className="border1">
          <div className="fw-bold fs-6 my-1  text-dark">
            City
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-geo-alt mx-3 text-dark"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <input className="" name="location" onChange={updateFilters} />
          </div>

          <div className="fw-bold  fs-6 m-3  text-dark">
            Budget
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-currency-rupee mx-1 text-dark"
              viewBox="0 0 16 16"
            >
              <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
            </svg>
            <span className="mx-4 rounded  ">
              <select
                className=" my-2 w-25px h-25px"
                name="budget"
                id="specificSizeSelect"
                onChange={updateFilters}
              >
                <option  select="true">
                  Choose...
                </option>
                <option value="4999999">Under 50Lakh</option>
                <option value="5000000-7000000">50Lakh - 70Lakh</option>
                <option value="7000000-10000000">70Lakh - 1Crore</option>
                <option value="10000000-20000000">1Crore- 2Crore</option>
              </select>
            </span>
          </div>

          <div className="fw-bold fs-6 my-1  text-dark">
            Type
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              className="bi bi-list-check text-dark mx-3"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <input
              className=""
              type="text"
              placeholder="Near metro, Hopsital..."
              value={filters.propertyType}
              name="propertyType"
              onChange={updateFilters}
            />
          </div>

          <div className="fw-bold fs-6  my-1 text-dark">
            Property Size
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              fill="currentColor"
              className="bi bi-aspect-ratio mx-2 text-dark"
              viewBox="0 0 16 16"
            >
              <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
              <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z" />
            </svg>
            <span className=" rounded col-3 my-3 ">
              <select className=" my-3" name="bhk" onChange={updateFilters}>
                <option className="btn-group" value="" select="true">
                  Choose...
                </option>
                <option value="1-3">1-3 bhk Parking</option>
                <option value="3-5">3-5 bhk Parking</option>
                <option value="5+">5+ Parking</option>
              </select>
            </span>
          </div>
</div>

          <div className="">
            <button
              className="s-b btn btn-dark bg-success rounded-pill m-1"
              onClick={() => props.search({ filters })}
            >Search</button>
          </div>
        </span>
      </div>
    </>
  );
};

export default SearchList;
