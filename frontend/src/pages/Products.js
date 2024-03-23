import React from "react";
import Nav_side_bar from "../components/Nav_side_bar";
import Product from "../components/Product";

import { Button, Paper } from "@mui/material";

import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import NoBackpackOutlinedIcon from "@mui/icons-material/NoBackpackOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import AddIcon from "@mui/icons-material/Add";

const Products = ({ children }) => {
  return (
    <Nav_side_bar>
      <div className="mt-5 pb-5">
        <div class="row justify-content-evenly">
          <div
            class="col-3"
            style={{
              fontSize: "32px",
              fontWeight: 700,
              fontFamily: "Lato",
              lineHeight: "48px",
            }}
          >
            All Products
          </div>

          <div class="col-3"></div>
          <div class="col-3"></div>
          <div class="col-3">
            <button
              type="submit"
              className="text-white"
              style={{
                border: "none",
                width: "196px",
                height: "48px",
                backgroundColor: "#0F55BB",
                borderRadius: "8px",
              }}
              // onClick={submit}
            >
              <i className="p-2">
                <AddIcon></AddIcon>
              </i>{" "}
              Add Product
            </button>
          </div>
        </div>

        <div class="container pt-5 row justify-content-evenly">
          <div class="col-3"></div>
          <div class="col-3"></div>
          <div class="col-3">
            <Paper elevation={6}>
              <i style={{ marginLeft: "15px" }}>
                <SearchOutlinedIcon />
              </i>
              <input
                placeholder="Search"
                className="m-2"
                style={{ border: "none" }}
              />
            </Paper>
          </div>
          <div class="col-3">
            <Paper elevation={6}>
              <i style={{ marginLeft: "15px" }}>
                <FilterListOutlinedIcon />
              </i>
              <input
                placeholder="Sort by"
                className="m-2"
                style={{ border: "none" }}
              />
              <i>
                <KeyboardArrowDownIcon />
              </i>
            </Paper>
          </div>
        </div>
      </div>

      <div>
        <Product />
      </div>
    </Nav_side_bar>
  );
};

export default Products;
