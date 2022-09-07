import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import CommentSection from "./routes/CommentSection";
import TableRoute from "./routes/TableRoute";
import DrawerRoute from "./routes/DrawerRoute";
import Navbar1 from "./components/Navbar1";
import Container from "react-bootstrap/Container";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Navbar1 />
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Comments" element={<CommentSection />} />
          <Route path="/Table" element={<TableRoute />} />
          <Route path="/Drawers" element={<DrawerRoute />} />
        </Routes>
      </Router>
    </Container>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
