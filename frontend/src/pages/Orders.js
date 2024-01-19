import React from "react";
import Nav_side_bar from "../components/Nav_side_bar";
import Order from "../components/Order";

import { Button, Paper } from "@mui/material";

import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import NoBackpackOutlinedIcon from "@mui/icons-material/NoBackpackOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

const Orders = ({ children }) => {
  return (
    <Nav_side_bar>
      <div className="mt-5 pb-5">
        <div class="row justify-content-evenly">
          <div class="col-3">
            <Paper
              elevation={6}
              sx={{ width: "240px", height: "120px", borderRadius: "10px" }}
            >
              <div
                className="p-3"
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  fontFamily: "Lato",
                  lineHeight: "21.6px",
                }}
              >
                Total Orders
              </div>
              <div
                className="p-3"
                style={{
                  fontSize: "24px",
                  fontWeight: 300,
                  fontFamily: "Lato",
                  lineHeight: "48px",
                }}
              >
                $300,000
                <span
                  style={{
                    marginLeft: "60px",
                    //backgroundColor: "#BB6BD9",
                    borderRadius: "100%",
                    justifyContent: "center",
                  }}
                >
                  <i className="p-1">
                    <MonetizationOnOutlinedIcon />
                  </i>
                </span>
              </div>
            </Paper>
          </div>
          <div class="col-3">
            <Paper
              elevation={6}
              sx={{ width: "240px", height: "120px", borderRadius: "10px" }}
            >
              <div
                className="p-3"
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  fontFamily: "Lato",
                  lineHeight: "21.6px",
                }}
              >
                Failed Orders
              </div>
              <div
                className="p-3"
                style={{
                  fontSize: "24px",
                  fontWeight: 300,
                  fontFamily: "Lato",
                  lineHeight: "48px",
                }}
              >
                5000
                <span
                  style={{
                    marginLeft: "110px",
                    //backgroundColor: "#BB6BD9",
                    borderRadius: "100%",
                    justifyContent: "center",
                  }}
                >
                  <i className="p-1">
                    <NoBackpackOutlinedIcon />
                  </i>
                </span>
              </div>
            </Paper>
          </div>
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
              + New Order
            </button>
          </div>
        </div>

        <div class="container pt-5 row justify-content-evenly">
          <div
            class="col-3"
            style={{
              fontSize: "32px",
              fontWeight: 700,
              fontFamily: "Lato",
              lineHeight: "48px",
            }}
          >
            All Orders
          </div>
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

        <div className="pt-3">
          <Order />
        </div>
      </div>
    </Nav_side_bar>
  );
};

export default Orders;
