import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="d-flex align-items-center justify-content-between px-5">
      <div>
        <Link className="text-decoration-none" to="/">
          <h2>Shopping Cart</h2>
        </Link>
      </div>
      <div>
        <Link  className="text-decoration-none me-4" to="/">Home</Link>
        <Link  className="text-decoration-none me-4" to="/shop">Shop</Link>
        <Link  className="text-decoration-none me-4" to="/profile">Profile</Link>
        <Link  className="text-decoration-none me-4" to="/about">About</Link>
      </div>
      <div>
        <Link to="/login">
          <button className="btn btn-info">Sign in</button>
        </Link>
        <Link to="/login">
          <button  className="btn btn-danger">Sign out</button>
        </Link>
        <Link to="/register">
          <button  className="btn btn-success">Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
