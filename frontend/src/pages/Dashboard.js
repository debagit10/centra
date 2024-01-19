import React, { useEffect, useState } from "react";

import Nav_side_bar from "../components/Nav_side_bar";
import Earnings from "../components/Earnings";
import Recent_orders from "../components/Recent_orders";
import axios from "axios";

import { Paper } from "@mui/material";

import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import NoBackpackOutlinedIcon from "@mui/icons-material/NoBackpackOutlined";

const Dashboard = ({ children }) => {
  const [totalEarnings, setTotalEarnings] = useState(null);
  const [totalOrders, setTotalOrders] = useState(null);

  const getDetails = async () => {
    const config = { headers: { "Content-type": "application/json" } };
    try {
      const response = await axios.get(
        "https://itoju-production.up.railway.app/api/v1//dashboard/",
        config
      );
      //console.log(response.data.data[3].totalEarnings);
      for (let i = 0; i < response.data.data.length; i++) {
        if (response.data.data[i].totalEarnings) {
          setTotalEarnings(response.data.data[i].totalEarnings);
          setTotalOrders(response.data.data[i].totalOrders);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  });

  return (
    <Nav_side_bar>
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
              Total Earnings
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
              {"$" + totalEarnings}
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
              Total Number of Orders
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
              {totalOrders}
              <span
                style={{
                  marginLeft: "110px",
                  //backgroundColor: "#BB6BD9",
                  borderRadius: "100%",
                  justifyContent: "center",
                }}
              >
                <i className="p-1">
                  <InventoryOutlinedIcon />
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
              Total Deliveries
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
              3789
              <span
                style={{
                  marginLeft: "110px",
                  //backgroundColor: "#BB6BD9",
                  borderRadius: "100%",
                  justifyContent: "center",
                }}
              >
                <i className="p-1">
                  <LocalShippingOutlinedIcon />
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
              Cancelled Orders
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
              220
              <span
                style={{
                  marginLeft: "120px",
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
      </div>

      <div className="pt-5">
        <Earnings />
      </div>
      <div className="pt-5">
        <Recent_orders />
      </div>
    </Nav_side_bar>
  );
};

export default Dashboard;
