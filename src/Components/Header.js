import React from "react";
import logo from "./CA.jpg";
import { NavLink } from "react-router-dom";
import "../App.css";
import { useEffect } from 'react';
import useScrollTop from '../Hooks/useScrollTop'

export default function Header() {
  useScrollTop();
  
  return (
    <div className="container sticky-navbar">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <NavLink
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <div>
            <img src={logo} alt="logo" className="logo" />
          </div>

          <div>
            <h1
              style={{
                color: "navy",
                fontFamily: "Arial, sans-serif",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              Shuaib
              <span style={{ color: "green", fontSize: "24px" }}>▲</span>
              Akhter.
            </h1>
            <h2
              style={{
                color: "gray",
                fontFamily: "Arial, sans-serif",
                fontSize: "16px",
              }}
            >
              Chartered Accountant.
            </h2>
          </div>
        </NavLink>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link" activeClassName="active bg-green" aria-current="page">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className="nav-link" activeClassName="active bg-green">
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeClassName="active bg-green">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" activeClassName="active bg-green">
              Contact us
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}
