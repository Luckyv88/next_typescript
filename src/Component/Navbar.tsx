"use client";

import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        display: "flex",
        backgroundColor: "#0a1a33",
        color: "#fff",
        fontFamily: "sans-serif",
        padding: "10px 20px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>Demo</div>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link
          href="/"
          style={{
            backgroundColor: "#00d4ff",
            color: "#0a1a33",
            padding: "8px 16px",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Home
        </Link>

        <Link
          href="/login"
          style={{
            backgroundColor: "#00d4ff",
            color: "#0a1a33",
            padding: "8px 16px",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Login
        </Link>

        <Link
          href="/registration"
          style={{
            backgroundColor: "#00d4ff",
            color: "#0a1a33",
            padding: "8px 16px",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Registration
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
