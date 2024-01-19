import React from "react";
import { Paper, Typography } from "@mui/material";

const Earnings = () => {
  return (
    <div>
      <Paper elevation={6} style={{ width: "1215px", height: "420px" }}>
        <div className="container">
          <Typography
            sx={{ fontFamily: "Lato", fontWeight: 550, fontSize: "18px" }}
            className="p-3"
          >
            Earnings
          </Typography>
        </div>
      </Paper>
    </div>
  );
};

export default Earnings;
