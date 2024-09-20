import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Category() {
  return (
    <>
    <hr/>
      <div style={{ marginTop: 60, marginBottom: 50 }}>
        <div className="row justify-content-around">
          <div className="col-3">
            <div
              style={{
                width: 500,
                height: 275,
                boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
                marginBottom: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{ alignItems: "center", width: 350, height: 250 }}
                src={require("../assets/img/image 6.png")}
              />
            </div>
          </div>
          <div className="col-6">
            <h4 style={{ fontSize: 32, fontWeight: "bold" }}>
              SunFlex 220W DualFace
            </h4>
            <ul
              style={{
                marginTop: 15,
                marginBottom: 20,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              <li style={{ marginBottom: 10 }}>
                Dual-sided power generation for maximum efficiency.
              </li>
              <li style={{ marginBottom: 10 }}>
                Perfect fit for off-grid and RV systems.
              </li>
              <li style={{ marginBottom: 5 }}>Backed by a 2-year guarantee.</li>
            </ul>
            <h4 style={{ fontSize: 36, color: "#073B94", fontWeight: "bold" }}>
              155.99 $
            </h4>
            <Link to="/form" >
              <button
                style={{
                  padding: "8px 35px",
                  fontSize: "15px",
                  backgroundColor: "#073B94",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: 15,
                }}
              >
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{
          marginLeft: 100,
          border: " 1px solid",
          width: 1232,
          height: 613,
          marginBottom: 50,
          borderRadius: 10,
          borderColor: "#D9D9D9",
        }}
      >
        <div style={{ marginLeft: 45, marginTop: 25 }}>
          <h5 style={{ fontSize: 32, fontWeight: "bold", color: "#073B94" }}>
            Description{" "}
          </h5>
          <p style={{ color: "#073B94", marginTop: -10 }}>
            _______________________________
          </p>
          <ol style={{ fontSize: 24, marginRight: 60, textAlign: "justify" }}>
            <li style={{ marginBottom: 25 }}>
              Dual-Sided Power Generation: Generates power from both sides,
              capturing more sunlight and increasing energy efficiency.
            </li>
            <li style={{ marginBottom: 25 }}>
              220W Output: Provides a robust 220-watt output, ideal for powering
              various devices in off-grid settings.
            </li>
            <li style={{ marginBottom: 25 }}>
              High-Efficiency Solar Cells: Utilizes advanced solar cell
              technology for maximum energy conversion and reliability.
            </li>
            <li style={{ marginBottom: 25 }}>
              Perfect for Off-Grid Use: Tailored for off-grid applications,
              making it an excellent choice for remote cabins, RVs, and outdoor
              adventures.
            </li>
            <li>
              Durable and Weather-Resistant: Built with high-quality materials
              to withstand harsh weather conditions, ensuring long-lasting
              performance.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
