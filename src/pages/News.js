import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function News() {
  const { t } = useTranslation('translation');
  return (
    <>
      <div style={{ position: "relative", width: "100%" }}>
        <img
          style={{ width: "100%", height: 299 }}
          src={require("../assets/img/Rectangle 79-2.png")}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: 48,
              margin: 0,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            {t('NEWS')}
          </h1>
          <h1 style={{ fontSize: 20, margin: 0 }}>
            {t('discover')}
          </h1>
        </div>
      </div>
      <div style={{ marginLeft: 80, marginTop: 50 }}>
        <h2 style={{ fontWeight: "bold", fontSize: 48, color: "#073B94" }}>
          {t('FEATURED')}
        </h2>
        <h2
          style={{
            fontWeight: "bold",
            fontSize: 48,
            color: "#073B94",
            marginTop: -10,
          }}
        >
          {t('NEWS')}
        </h2>
        <p
          style={{
            color: "#073B94",
            fontWeight: "bold",
            marginTop: -20,
            marginBottom: 40,
          }}
        >
          _______________________________________________________________________________________________________________________________________________________
        </p>
        <div className="d-flex flex-column mb-3">
          {/* line1 */}
          <div className="d-flex p-2 align-items-center">
            <img
              style={{
                marginRight: 40,
                width: 202,
                height: 181,
                marginBottom: 40,
              }}
              src={require("../assets/img/Rectangle 93.png")}
              alt="New Solar Panel Efficiency Record"
            />
            <div style={{ marginLeft: 25, marginBottom: 40 }}>
              <p style={{ color: "#CE1126", fontSize: 20 }}>
                {t('Update-1')}
              </p>
              <h4 style={{ fontSize: 32, fontWeight: "bold", marginTop: -17 }}>
                {t('Newso-1')}
              </h4>
              <p
                style={{
                  color: "#073B94",
                  marginTop: -10,
                  marginBottom: 40,
                  fontSize: 20,
                }}
              >
                {t('Caption-1')}
              </p>
              <Link to="/detail">
                <button
                  style={{
                    padding: "10px 30px",
                    fontSize: "1.2rem",
                    backgroundColor: "#073B94",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: 15,
                    marginTop: -15,
                  }}
                >
                  {t('Read-1')}
                </button>
              </Link>
            </div>
          </div>

          {/* line2 */}
          <div className="d-flex p-2 align-items-center">
            <img
              style={{
                marginRight: 40,
                width: 202,
                height: 181,
                marginBottom: 40,
              }}
              src={require("../assets/img/Rectangle 94.png")}
              alt="New Solar Panel Efficiency Record"
            />
            <div style={{ marginLeft: 25, marginBottom: 40 }}>
              <p style={{ color: "#CE1126", fontSize: 20 }}>
                {t('Update-2')}
              </p>
              <h4 style={{ fontSize: 32, fontWeight: "bold", marginTop: -17 }}>
                {t('Newso-2')}
              </h4>
              <p
                style={{
                  color: "#073B94",
                  marginTop: -10,
                  marginBottom: 40,
                  fontSize: 20,
                }}
              >
                {t('Caption-2')}
              </p>
              <Link to="/detail">
                <button
                  style={{
                    padding: "10px 30px",
                    fontSize: "1.2rem",
                    backgroundColor: "#073B94",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: 15,
                    marginTop: -15,
                  }}
                >
                  {t('Read-1')}
                </button>
              </Link>
            </div>
          </div>
          {/* line3 */}
          <div className="d-flex p-2 align-items-center">
            <img
              style={{
                marginRight: 40,
                width: 202,
                height: 181,
                marginBottom: 40,
              }}
              src={require("../assets/img/Rectangle 95.png")}
            />
            <div style={{ marginLeft: 25, marginBottom: 40 }}>
              <p style={{ color: "#CE1126", fontSize: 20 }}>
                {t('Update-3')}
              </p>
              <h4 style={{ fontSize: 32, fontWeight: "bold", marginTop: -17 }}>
                {t('Newso-3')}
              </h4>
              <p
                style={{
                  color: "#073B94",
                  marginTop: -10,
                  marginBottom: 40,
                  fontSize: 20,
                }}
              >
                {t('Caption-3')}
              </p>
              <Link to="/detail">
                <button
                  style={{
                    padding: "10px 30px",
                    fontSize: "1.2rem",
                    backgroundColor: "#073B94",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: 15,
                    marginTop: -15,
                  }}
                >
                  {t('Read-1')}
                </button>
              </Link>
            </div>
          </div>
          {/* line4 */}
          <div className="d-flex p-2 align-items-center">
            <img
              style={{
                marginRight: 40,
                width: 202,
                height: 181,
                marginBottom: 40,
              }}
              src={require("../assets/img/Rectangle 96.png")}
            />
            <div style={{ marginLeft: 25, marginBottom: 40 }}>
              <p style={{ color: "#CE1126", fontSize: 20 }}>
                {t('Update-4')}
              </p>
              <h4 style={{ fontSize: 32, fontWeight: "bold", marginTop: -17 }}>
                {t('Newso-4')}
              </h4>
              <p
                style={{
                  color: "#073B94",
                  marginTop: -10,
                  marginBottom: 40,
                  fontSize: 20,
                }}
              >
                {t('Caption-4')}
              </p>
              <Link to="/detail">
                <button
                  style={{
                    padding: "10px 30px",
                    fontSize: "20px",
                    backgroundColor: "#073B94",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: 15,
                    marginTop: -15,
                  }}
                >
                  {t('Read-1')}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", width: "100%", height: "60vh" }}>
        <img
          src={require("../assets/img/Rectangle 102.png")}
          alt="Background"
          style={{
            width: "100%",
            height: 644,
            objectFit: "cover",
            position: "absolute",
            zIndex: -1,
          }}
        />
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <div
            style={{
              backgroundColor: "#E6F0F6",
              width: "40%",
              padding: "40px 20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <h4
              style={{
                fontWeight: "bold",
                fontSize: 36,
                color: "#073B94",
                marginBottom: 20,
              }}
            >
              Subscribe for Newsletter
            </h4>

            <div
              className="mb-4"
              style={{ width: "80%", margin: "0 auto", textAlign: "left" }}
            >
              <label
                htmlFor="fullName"
                style={{
                  fontSize: 16,
                  color: "black",
                  marginBottom: 5,
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="form-control"
                placeholder="Full Name"
                aria-label="Full Name"
                style={{
                  padding: "10px",
                  fontSize: "16px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            <div
              className="mb-4"
              style={{ width: "80%", margin: "0 auto", textAlign: "left" }}
            >
              <label
                htmlFor="email"
                style={{
                  fontSize: 16,
                  color: "black",
                  marginBottom: 5,
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                style={{
                  padding: "10px",
                  fontSize: "16px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            <div
              className="d-flex justify-content-center"
              style={{ width: "80%", margin: "0 auto" }}
            >
              <button
                style={{
                  backgroundColor: "#073B94",
                  border: "none",
                  color: "white",
                  padding: "10px",
                  fontWeight: "bold",
                  fontSize: "20px",
                  borderRadius: "15px",
                  width: "100%",
                }}
                type="button"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* //template */}
    </>
  );
}
