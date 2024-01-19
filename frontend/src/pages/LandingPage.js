import { Typography } from "@mui/material";
import React from "react";
import logo from "../igbudu-logo.svg";

const LandingPage = () => {
  return (
    <div className=" " style={{ height: "100vh", backgroundColor: "blue" }}>
      <div className="container">
        <div className="row">
          <div className="col text-white m-5">
            <div className="m-5" style={{ textAlign: "" }}>
              <img
                src={logo}
                alt="igbudu-logo"
                style={{ width: "50px", fill: "white" }}
              />
              <Typography
                style={{
                  fontFamily: "Pacifico",
                  color: "white",
                  fontSize: "30px",
                  fontWeight: 400,
                }}
              >
                Centra
              </Typography>
            </div>
            <Typography
              style={{
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "36px",
                fontFamily: "Poppins",
              }}
            >
              Welcome to Centra
            </Typography>
            <Typography
              variant=""
              style={{
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "36px",
                fontFamily: "Poppins",
              }}
            >
              A platform that enables vendors track sales, delivery staus,
              failed orders and have inventory of goods they provide.
            </Typography>
          </div>
          <div className="col text-white">Column 2</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
