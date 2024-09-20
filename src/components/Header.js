import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/img/logo2.png";
import laoFlag from "../assets/img/laos-flag.png";
import usFlag from "../assets/img/us-flag.png";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { i18n } = useTranslation();
  const { t } = useTranslation("translation");
  const [currentLang, setCurrentLang] = useState(i18n.language || "en");

  // Change language and update state
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
  };

  useEffect(() => {
    i18n.changeLanguage("la");
    setCurrentLang("la");
  }, [i18n]);

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  return (
    <div style={{ backgroundColor: "#fff", marginBottom: -23, marginTop: -5 }}>
      <div className="d-flex mb-3">
        {/* Logo Section */}
        <div className="me-auto p-2">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" height="70" />
          </a>
        </div>


        {/* Navigation Links */}
        <div className="p-2">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{ height: 70 }}
          >
            <div className="navbar-nav">
              <Link
                className="nav-item nav-link"
                style={{ marginRight: 30, color: "black" }}
                to="/"
              >
                {t("Home")}
              </Link>
              <Link
                className="nav-item nav-link"
                style={{ marginRight: 30, color: "black" }}
                to="/services"
              >
                {t("Services")}
              </Link>
              <Link
                className="nav-item nav-link"
                style={{ marginRight: 30, color: "black" }}
                to="/product"
              >
                {t("Product")}
              </Link>
              <Link
                className="nav-item nav-link"
                style={{ marginRight: 30, color: "black" }}
                to="/about"
              >
                {t("About")}
              </Link>
              <Link
                className="nav-item nav-link"
                style={{ marginRight: 30, color: "black" }}
                to="/news"
              >
                {t("News")}
              </Link>
              <Link
                className="nav-item nav-link"
                to="/contact"
                style={{
                  backgroundColor: "#073B94",
                  color: "#fff",
                  padding: "10px 20px",
                  marginRight: 30,
                }}
              >
                {i18n.t("Contact")}
              </Link>
            </div>
          </nav>
          </ul>
        </div>


        {/* Language Selection */}
        <div className="d-flex align-items-center" style={{ marginRight: 30 }}>
          {/* Lao Language Switch */}
          <div
            className={`d-flex align-items-center ${
              currentLang === "la" ? "active-lang" : ""
            }`}
            onClick={() => changeLanguage("la")}
            style={{ cursor: "pointer", marginRight: 15 }}
          >
            <img src={laoFlag} alt="Lao" style={{ marginRight: 5 }} />
            <span>Lao</span>
          </div>

          {/* English Language Switch */}
          <div
            className={`d-flex align-items-center ${
              currentLang === "en" ? "active-lang" : ""
            }`}
            onClick={() => changeLanguage("en")}
            style={{ cursor: "pointer" }}
          >
            <img src={usFlag} alt="English" style={{ marginRight: 5 }} />
            <span>EN</span>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
