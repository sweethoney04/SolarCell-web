import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation('translation');
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 700,
          backgroundImage: `url(${require("../assets/img/mainpic.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "10%",
            transform: "translateY(-50%)",
            color: "white",
          }}
        >
          <h1 style={{ fontSize: "3.5rem", margin: 0, fontWeight: "bold" }}>
            {t('Renewable-the-energy')}
          </h1>
          <h1 style={{ fontSize: "3.5rem", margin: 0, fontWeight: "bold" }}>
            {t('by-Solar-Panels')}
          </h1>
          <Link to="/product">
            <button
              style={{
                marginTop: "30px",
                padding: "10px 25px",
                fontSize: "1.2rem",
                backgroundColor: "#073B94",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              {t('Shop-now')}
            </button>
          </Link>
        </div>
      </div>
      <h2
        style={{
          textAlign: "center",
          paddingTop: 50,
          color: "#073B94",
          fontWeight: "bold",
        }}
      >
        {t('OUR-SERVICES')}
      </h2>

      <div className="d-flex justify-content-center" style={{ marginTop: 50 }}>
        <div
          style={{
            width: 268,
            textAlign: "center",
            marginLeft: 30,
          }}
        >
          <img
            style={{ width: "300", height: 350, marginTop: 25 }}
            src={require("../assets/img/Rectangle 35.png")}
          />
          <p
            style={{
              textAlign: "center",
              marginTop: 20,
              color: "#073B94",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            {t('Planning')}
          </p>
        </div>
        <div
          style={{
            width: 320,
            textAlign: "center",
          }}
        >
          <img
            style={{ width: "300", height: 350, marginTop: 25 }}
            src={require("../assets/img/Rectangle 36.png")}
          />
          <p
            style={{
              textAlign: "center",
              marginTop: 20,
              color: "#073B94",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            {t('Repair-Maintenance')}
          </p>
        </div>
        <div
          style={{
            width: 220,
            textAlign: "center",
          }}
        >
          <img
            style={{ width: "300", height: 350, marginTop: 25 }}
            src={require("../assets/img/Rectangle 38.png")}
          />
          <p
            style={{
              textAlign: "center",
              marginTop: 20,
              color: "#073B94",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            {t('Installation')}
          </p>
        </div>
        <div
          style={{
            width: 405,
            textAlign: "center",
          }}
        >
          <img
            style={{ width: "300", height: 350, marginTop: 25 }}
            src={require("../assets/img/Rectangle 37.png")}
          />
          <p
            style={{
              textAlign: "center",
              marginTop: 20,
              color: "#073B94",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            {t('Design')}
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5 mb-3">

        <Link to="/services">
          <button
            type="button"
            style={{
              backgroundColor: "#073B94",
              color: "#FFFFFF",
              border: "none",
              fontSize: 15,
              marginBottom: 20,
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 25,
              paddingRight: 25,
            }}
          >
            {t('View-More')}
          </button>

        </Link>
        </div>
      <div style={{ backgroundColor: "#D1E9F6" }}>
        <h1
          style={{
            textAlign: "center",
            paddingTop: 50,
            marginTop: 35,
            color: "#073B94",
            paddingBottom: 50,
            fontWeight: "bold",
            fontSize: 48,
          }}
        >
          {t('Why-choose-us')}
        </h1>
        <div
          className="d-flex justify-content-around"
          style={{ paddingBottom: 120 }}
        >
          <div className="d-flex align-items-center">
            <img
              style={{ width: "121px", marginTop: 25 }}
              src={require("../assets/img/streamline_affordable-and-clean-energy.png")}
              alt="Energy Icon"
            />
            <div style={{ marginLeft: 20 }}>
              <div style={{ fontSize: "64px", fontWeight: "bold" }}>62%</div>
              <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                {t('reduce-the-energy-at-home')}
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <img
              style={{ width: "121px", marginTop: 25 }}
              src={require("../assets/img/carbon_location-company-filled.png")}
              alt="Partners Icon"
            />
            <div style={{ marginLeft: 20 }}>
              <div style={{ fontSize: "64px", fontWeight: "bold" }}>15</div>
              <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                {t('Companies-Partners')}
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <img
              style={{ width: "121px", marginTop: 25 }}
              src={require("../assets/img/mdi_account-service.png")}
              alt="Service Guarantee Icon"
            />
            <div style={{ marginLeft: 20 }}>
              <div style={{ fontSize: "64px", fontWeight: "bold" }}>100%</div>
              <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                {t('Service-guarantee')}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", width: "100%", height: 280 }}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={require("../assets/img/Rectangle 43.png")}
          alt="Solar Panels"
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "48px",
            fontWeight: "bold",
            textAlign: "center",
            padding: "10px",
          }}
        >
          {t('The-best-Solar-panels-innovation-in-the-world')}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#D1E9F6",
          paddingLeft: 50,
          paddingBottom: 50,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <h2
                style={{
                  paddingTop: 60,
                  color: "#073B94",
                  fontWeight: "bold",
                  fontSize: 48,
                }}
              >
                {t('Our-Service')}
              </h2>
              <hr style={{borderTop: '1.5px solid #073B94', marginBottom: 35,}}/>
              <h4
                style={{ fontSize: 34, marginBottom: 25, textAlign: "justify" }}
              >
                {t('Components')}
              </h4>
              <h6
                style={{ color: "#073B94", fontSize: 20, textAlign: "justify" }}
              >
                {t('components-2')}
              </h6>
            </div>
            <div
              className="col"
              style={{
                marginTop: 20,
                marginBottom: 20,
                paddingTop: 50,
                marginLeft: 250,
              }}
            >
              <img
                style={{ width: 509, height: 364 }}
                src={require("../assets/img/enerygy.png")}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ paddingLeft: 50, paddingBottom: 50 }}>
        <div className="container">
          <div className="row">
            <div
              className="col"
              style={{ marginTop: 20, marginBottom: 20, paddingTop: 50 }}
            >
              <img
                style={{ width: 450, height: 320 }}
                src={require("../assets/img/tobyyjra.png")}
              />
            </div>
            <div className="col">
              <h2
                style={{
                  paddingTop: 60,
                  color: "#073B94",
                  fontWeight: "bold",
                  fontSize: 48,
                  marginBottom: 50,
                }}
              >
                {t('Innovation-of-Solar-panels')}
              </h2>
              <h4
                style={{
                  fontSize: 22,
                  marginBottom: 25,
                  fontWeight: "bold",
                  marginBottom: 20,
                  textAlign: "justify",
                }}
              >
                {t('Principle-of-operation')}
              </h4>
              <h4
                style={{
                  fontSize: 22,
                  marginBottom: 25,
                  fontWeight: "bold",
                  textAlign: "justify",
                }}
              >
                {t('Efficiency')}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
