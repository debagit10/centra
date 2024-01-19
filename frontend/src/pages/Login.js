import React, { useState } from "react";
import logo from "../igbudu-logo.svg";
import man_cart from "../images/man-with-cart.png";
import {
  TextField,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useCookies } from "react-cookie";

const Login = () => {
  //const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cookies, setCookie, removeCookie] = useCookies();

  //console.log(email, password);

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    if (!password || !email) {
      toast.error("Please fill all fields", {
        // Set the position
        autoClose: 2000, // Set the autoClose time in milliseconds
        hideProgressBar: true, // Set to true to hide the progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: true, // Pause the autoClose timer when hovering
        draggable: true, // Allow the toast to be dragged
      });

      return;
    }

    const data = {
      password: password,
      email: email,
    };

    const config = { headers: { "Content-type": "application/json" } };
    try {
      //setLoading(true);
      const response = await axios.post(
        "https://itoju-production.up.railway.app/api/v1//auth/login/",
        data,
        config
      );
      const user = response.data;
      console.log(response.data);
      if (response.status == "Error") {
        //setLoading(false);
        toast.error("Invalid login credentials", {
          // Set the position
          autoClose: 2000, // Set the autoClose time in milliseconds
          hideProgressBar: true, // Set to true to hide the progress bar
          closeOnClick: true, // Close the toast when clicked
          pauseOnHover: true, // Pause the autoClose timer when hovering
          draggable: true, // Allow the toast to be dragged
        });

        return;
      } else {
        setCookie("Token", user.token);

        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ backgroundColor: "#FFF" }}>
      <div className="container">
        <div className="mt-5 flex justify-content-center">
          <img src={logo} alt="igbudu-logo" />
          <Typography
            style={{
              fontFamily: "Pacifico",
              color: "blue",
              fontSize: "30px",
              fontWeight: 400,
            }}
          >
            Centra
          </Typography>
        </div>

        <div className="row align-items-center">
          <div className="col-md">
            <img
              src={man_cart}
              alt="man with cart"
              style={{ width: "500px" }}
            />
          </div>

          <div className="col-md">
            <div className="container">
              <div>
                <div className="pb-5">
                  <Typography
                    variant="h5"
                    style={{
                      fontFamily: "Lato",
                      fontSize: "32px",
                      fontWeight: 700,
                    }}
                  >
                    Login
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      fontFamily: "Lato",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    Welcome Back please login to your account.
                  </Typography>
                </div>

                <form>
                  <Typography
                    //variant="body1"
                    style={{
                      fontFamily: "Lato",
                      fontSize: "20px",
                      fontWeight: 500,
                    }}
                  >
                    Email address
                  </Typography>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    className="pb-3"
                    placeholder="email@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Typography
                    variant="body1"
                    style={{
                      fontFamily: "Lato",
                      fontSize: "20px",
                      fontWeight: 500,
                    }}
                  >
                    Password
                  </Typography>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    type="password"
                    id="address"
                    className="pb-5 "
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    type="submit"
                    className="text-white"
                    style={{
                      border: "none",
                      width: "100%",
                      height: "64px",
                      backgroundColor: "#0F55BB",
                      borderRadius: "8px",
                    }}
                    onClick={submit}
                  >
                    Proceed
                  </button>
                  <ToastContainer position="top-center" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
