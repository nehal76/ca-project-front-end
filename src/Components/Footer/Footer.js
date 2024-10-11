import React from "react";
import WhatsAppButton from "../WhatsAppButton";
import style from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import useScrollTop from "../../Hooks/useScrollTop";
import { useState } from "react";
import axios from "axios";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/submit-form", {
        email: email,
        query: query,
      });
      setStatus("Form submitted successfully!");
      alert("Seccessfully")
      setTimeout(() => {
        setStatus(null);
      }, 3000);
    } 
    catch (error) {
      console.error("There was an error submitting the form:", error);
      setStatus("Failed to submit form");
    }

    setEmail("");
    setQuery("");
  };

  useScrollTop();

  return (
    <div className="container footer">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Page Links</h5>
            <ul className="nav flex-column text-spacing">
              <li className="nav-item mb-2">
                <NavLink
                  to="/"
                  exact
                  className="nav-link"
                  activeClassName="active"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink
                  to="/Services"
                  exact
                  className="nav-link"
                  activeClassName="active"
                  aria-current="page"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink
                  to="/About"
                  exact
                  className="nav-link"
                  activeClassName="active"
                  aria-current="page"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink
                  to="/contact"
                  exact
                  className="nav-link"
                  activeClassName="active"
                  aria-current="page"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Services</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link">
                  Income Tax Filling
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link">
                  Investment & Financial Planning
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link">
                  TDS Return Filing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link">
                  GST Registration & GST Returns Filing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link">
                  NRI Income Tax Filing
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link">
                  Who we are
                </a>
              </li>
              <li className="nav-item mb-2">
                <NavLink
                  to="/about"
                  className="nav-link"
                  activeClassName="active"
                >
                  Why choose Me
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink
                  to="/about_shuaib"
                  className="nav-link"
                  activeClassName="active"
                  aria-current="page"
                >
                  About Shuaib Akhter
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Query Form ---------------->>>>>>>>>>>>>>>>>*/}

          <div className="col-md-5 offset-md-1 mb-3">
            <form onSubmit={handleSubmit}>
              <h5>Connect By E-Mail</h5>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label
                  htmlFor="newsletter1"
                  className="visually-hidden"
                ></label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  id="newsletter2"
                  type="text"
                  className="form-control"
                  placeholder="Query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  required
                />
                <button className="btn btn-success" type="submit">
                  Send
                </button>
              </div>
              <div className="footer-whatsapp">
                <WhatsAppButton
                  phoneNumber="+91 8800721984"
                  message="Hello, I need support!"
                />
              </div>
            </form>
            <p>{status}</p>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2022 Shuaib Akhter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
