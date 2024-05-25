import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="footer bg-info"
      style={{ padding: "30px ", color: "white", h5: "white" }}
    >
      <div style={{ height: "300px" }} className="container mt-5 w-100 ">
        <div className="d-flex justify-content-between">
          <div style={{ width: "400px" }} className="intro">
            <h5 style={{ color: "white" }}>
              <i className="fa-solid fa-truck-fast"></i>
              &nbsp; FF Store
            </h5>
            <p>
              Designed and built with all the love in the world by the Luminar
              team with the help of our contrubuters.
            </p>
            <p>Code Liscensed Luminar,docs CC By 3.0</p>
            <p>Currenlty v1.0.0.</p>
          </div>
          <div className="links d-flex flex-column">
            <h5>Links</h5>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
            <Link
              to={"/home"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Cart
            </Link>

            <Link
              to={"/history"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Wishlist
            </Link>
          </div>
          <div className="guides d-flex flex-column">
            <h5>Guides</h5>
            <a
              href="https://react.dev/"
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              React
            </a>

            <a
              href="https://react-bootstrap.github.io/"
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              React Bootstrap
            </a>

            <a
              href="https://reactrouter.com/en/main"
              style={{ textDecoration: "none", color: "white" }}
              target="_blank"
            >
              Routing
            </a>
          </div>
          <div className="contact  d-flex flex-column">
            <h5>Contact Us</h5>
            <div className="d-flex">
              <input
                type="text"
                placeholder="Enter Your email here "
                className="form-control bg-light p-2"
              />
              <button style={{border:'none',marginLeft:'5px'}} className="btns bg-warning p-3">
                {" "}
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="icons d-flex justify-content-between mt-3">
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href=""
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <p className="text-center mt-5">
          Copyright © Jan Batch 2024 Media Player.Built with React{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;