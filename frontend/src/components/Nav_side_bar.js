import React, { useState } from "react";
import logo from "../igbudu-logo.svg";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { margin } from "@mui/system";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

import { useNavigate } from "react-router-dom";

const drawerWidth = 267;

const Nav_side_bar = ({ children }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        className="bg-white text-black"
      >
        <Toolbar>
          <div style={{ textAlign: "center" }}>
            <SearchIcon />
          </div>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge color="error">
                <NotificationsNoneOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <div className="px-3">
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                Osa Emmanuel <br />{" "}
                <span style={{ fontWeight: "lighter" }}>Admin</span>
              </Typography>
            </div>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div
          className="m-5"
          style={{ textAlign: "center" }}
          onClick={() => navigate("/dashboard")}
        >
          <img src={logo} alt="igbudu-logo" style={{ width: "50px" }} />
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

        <List>
          <ListItem className="py-1">
            <ListItemButton
              onClick={() => navigate("/dashboard")}
              sx={{
                width: "241px",
                height: "48px",
                borderRadius: "8px",
              }}
            >
              <i className="px-3">
                <HomeOutlinedIcon />
              </i>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem className="py-1">
            <ListItemButton
              onClick={() => navigate("/orders")}
              sx={{
                width: "241px",
                height: "48px",
                borderRadius: "8px",
              }}
            >
              <i className="px-3">
                <InventoryOutlinedIcon />
              </i>
              <ListItemText primary="Orders" />
            </ListItemButton>
          </ListItem>
          <ListItem className="py-1">
            <ListItemButton
              onClick={() => navigate("/products")}
              sx={{
                width: "241px",
                height: "48px",
                borderRadius: "8px",
              }}
            >
              <i className="px-3">
                <WidgetsOutlinedIcon />
              </i>
              <ListItemText primary="Products" />
            </ListItemButton>
          </ListItem>
          <ListItem className="py-1">
            <ListItemButton
              onClick={() => navigate("/customers")}
              sx={{
                width: "241px",
                height: "48px",
                borderRadius: "8px",
              }}
            >
              <i className="px-3">
                <GroupOutlinedIcon />
              </i>
              <ListItemText primary="Customers" />
            </ListItemButton>
          </ListItem>
          <ListItem className="py-1">
            <ListItemButton
              onClick={() => navigate("/users")}
              sx={{
                width: "241px",
                height: "48px",
                borderRadius: "8px",
              }}
            >
              <i className="px-3">
                <GroupsOutlinedIcon />
              </i>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>
          <ListItem className="py-1">
            <ListItemButton
              onClick={() => navigate("/notification")}
              sx={{
                width: "241px",
                height: "48px",
                borderRadius: "8px",
              }}
            >
              <i className="px-3">
                <NotificationsNoneOutlinedIcon />
              </i>
              <ListItemText primary="Notification" />
            </ListItemButton>
          </ListItem>
          <ListItem className="py-1">
            <ListItemButton
              onClick={() => navigate("/report")}
              sx={{
                width: "241px",
                height: "48px",
                borderRadius: "8px",
              }}
            >
              <i className="px-3">
                <AnalyticsOutlinedIcon />
              </i>
              <ListItemText primary="Report" />
            </ListItemButton>
          </ListItem>
          <ListItem className="py-1">
            <ListItemButton
              sx={{
                width: "241px",
                height: "48px",
                borderRadius: "8px",
              }}
            >
              <i className="px-3">
                <LogoutIcon />
              </i>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "whitesmoke", p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Nav_side_bar;
