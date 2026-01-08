"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import afterlogin from "../afterlogin/page";


export default function Login(){
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const staticEmail = "example@gmail.com";
  const staticPassword = "Example@123";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === staticEmail && password === staticPassword) {
      setError("");
      router.push("/afterlogin");
    } else {
      setError("Invalid credentials");
    }
  };

  return (

      <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
        <h1 style={{ fontWeight: "bold", marginBottom: "20px" }}>Login</h1>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "8px" }}
              required
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", padding: "8px" }}
              required
            />
          </div>

          <button type="submit" style={{ padding: "8px 20px" }}>
            Login
          </button>
        </form>

        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            {error}
          </p>
        )}
      </div>
   
  );
}
