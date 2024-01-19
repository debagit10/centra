import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Nav_side_bar from "./components/Nav_side_bar";
import Dashboard from "./pages/Dashboard";
import Notification from "./pages/Notification";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Report from "./pages/Report";
import Users from "./pages/Users";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Routes>
      {/* <Route path="/" Component={LandingPage} /> */}
      <Route path="/" Component={Login} />
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/customers" Component={Customers} />
      <Route path="/notification" Component={Notification} />
      <Route path="/orders" Component={Orders} />
      <Route path="/products" Component={Products} />
      <Route path="/report" Component={Report} />
      <Route path="/users" Component={Users} />
    </Routes>
  );
}

export default App;
