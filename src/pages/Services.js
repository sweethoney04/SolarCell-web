import React from "react";
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation('translation');
  return (
    <>
      <div style={{ position: "relative", width: "100%" }}>
        <img
          style={{ width: "100%", height: 361, }}
          src={require("../assets/img/Rectangle 107.png")}
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
            {t('OUR-SERVICES')}
          </h1>
          <h1 style={{ fontSize: 20, margin: 0 }}>
            {t('Reliable_solar_installation_services')}
          </h1>
        </div>
      </div>
      <div>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginTop: 50,
            color: "#073B94",
          }}
        >
          {t('Request_Your_Service')}
        </h2>
      </div>
      {/* line1 */}
      <div className="d-flex justify-content-center" style={{ marginTop: 55 }}>
  <div
    style={{
      width: 370,
      height: 442,
      borderColor: "#D9D9D9",
      borderRadius: "15px",
      textAlign: "justify",
      marginRight: 30,
      boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
      padding: 20, // Added padding for better spacing
    }}
  >
    <img
      style={{ marginLeft: 25, marginTop: 10, width: "94px" }}
      src={require("../assets/img/carbon_plan.png")}
    />
    <p
      style={{
        marginLeft: 25,
        marginTop: 10,
        fontSize: 28, // Adjusted font size
        color: "#073B94",
        fontWeight: "bold",
        marginBottom: -10,
      }}
    >
      {t('Planning')}
    </p>
    <p
      style={{
        marginLeft: 25,
        marginTop: 5, // Reduced top margin to keep spacing consistent
        color: "#073B94",
      }}
    >
      ______________________________________
    </p>
    <p
      style={{
        marginLeft: 25,
        marginTop: 10,
        marginRight: 25, // Reduced right margin to fit text better
        fontSize: 18, // Adjusted font size
      }}
    >
      {t('Comprehensive_solar_planning_services')}
    </p>
    <Link to="/contact" style={{textDecoration: 'none'}}>
      <button
        style={{
          display: "block", // Ensure button is block-level for alignment
          marginTop: "30px", // Adjusted top margin for better spacing
          padding: "12px 30px", 
          fontSize: "1.1rem", 
          backgroundColor: "#073B94",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: 15,
          marginLeft: "auto", 
          marginRight: 0, 
        }}
      >
        {t('Contact_us')}
      </button>
    </Link>
  </div>
  <div
    style={{
      width: 370,
      height: 442,
      borderColor: "#D9D9D9",
      borderRadius: "15px",
      textAlign: "justify",
      marginLeft: 30,
      boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
      padding: 20, // Added padding for consistency
    }}
  >
    <img
      style={{ marginLeft: 25, marginTop: 10, width: "94px" }}
      src={require("../assets/img/mdi_worker.png")}
    />
    <p
      style={{
        marginLeft: 25,
        marginTop: 10,
        fontSize: 28, // Adjusted font size
        color: "#073B94",
        fontWeight: "bold",
        marginBottom: -10,
      }}
    >
      {t('Installation')}
    </p>
    <p
      style={{
        marginLeft: 25,
        marginTop: 5, // Reduced top margin for consistency
        color: "#073B94",
      }}
    >
      ______________________________________
    </p>
    <p
      style={{
        marginLeft: 25,
        marginTop: 10,
        marginRight: 25, // Reduced right margin for better text fit
        fontSize: 18, // Adjusted font size
      }}
    >
      {t('Certified_professionals')}
    </p>
    <Link to="/contact" style={{textDecoration: 'none'}}>
      <button
        style={{
          display: "block", // Center align button
          marginTop: "30px", // Adjusted top margin for better spacing
          padding: "12px 30px", // Adjusted padding for a better look
          fontSize: "1.1rem", // Slightly smaller font size for the button
          backgroundColor: "#073B94",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: 15,
          marginLeft: "auto", // Center align button horizontally
          marginRight: 0,
        }}
      >
        {t('Contact_us')}
      </button>
    </Link>
  </div>
</div>
{/* line2 */}
<div className="d-flex justify-content-center" style={{ marginTop: 55 }}>
  <div
    style={{
      width: 370,
      height: 442,
      borderColor: "#D9D9D9",
      borderRadius: "15px",
      textAlign: "justify",
      marginRight: 30,
      boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
      padding: 20, 
    }}
  >
    <img
      style={{ marginLeft: 25, marginTop: 10, width: "94px" }}
      src={require("../assets/img/mdi_design.png")}
    />
    <p
      style={{
        marginLeft: 25,
        marginTop: 10,
        fontSize: 28, // Adjusted font size
        color: "#073B94",
        fontWeight: "bold",
        marginBottom: -10,
      }}
    >
      {t('Planning')}
    </p>
    <p
      style={{
        marginLeft: 25,
        marginTop: 5, // Reduced top margin to keep spacing consistent
        color: "#073B94",
      }}
    >
      ______________________________________
    </p>
    <p
      style={{
        marginLeft: 25,
        marginTop: 5,
        marginRight: 25, // Reduced right margin to fit text better
        fontSize: 17, // Adjusted font size
      }}
    >
      {t('Expertly_designed_solar_systems')}
    </p>
    <Link to="/contact" style={{textDecoration: 'none'}}>
      <button
        style={{
          display: "block", // Ensure button is block-level for alignment
          marginTop: "30px", // Adjusted top margin for better spacing
          padding: "12px 30px", 
          fontSize: "1.1rem", 
          backgroundColor: "#073B94",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: 15,
          marginLeft: "auto", 
          marginRight: 0, 
        }}
      >
        {t('Contact_us')}
      </button>
    </Link>
  </div>
  <div
    style={{
      width: 370,
      height: 442,
      borderColor: "#D9D9D9",
      borderRadius: "15px",
      textAlign: "justify",
      marginLeft: 30,
      boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
      padding: 20, 
    }}
  >
    <img
      style={{ marginLeft: 25, marginTop: 10, width: "94px" }}
      src={require("../assets/img/game-icons_auto-repair.png")}
    />
    <p
      style={{
        marginLeft: 25,
        marginTop: 10,
        fontSize: 27, // Adjusted font size
        color: "#073B94",
        fontWeight: "bold",
        marginBottom: -10,
        textAlign: 'left'
      }}
    >
      {t('Repair-Maintenance')}
    </p>
    <p
      style={{
        marginLeft: 25,
        marginTop: 5, // Reduced top margin for consistency
        color: "#073B94",
      }}
    >
      ______________________________________
    </p>
    <p
      style={{
        marginLeft: 25,
        marginTop: 5,
        marginRight: 25, // Reduced right margin for better text fit
        fontSize: 18, // Adjusted font size
      }}
    >
      {t('Reliable_repair_and_maintenance_services')}
    </p>
    <Link to="/contact" style={{textDecoration: 'none'}}>
      <button
        style={{
          display: "block",
          marginTop: "30px", // Adjusted top margin for better spacing
          padding: "12px 30px", // Adjusted padding for a better look
          fontSize: "1.1rem", // Slightly smaller font size for the button
          backgroundColor: "#073B94",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: 15,
          marginLeft: "auto", // Center align button horizontally
          marginRight: 0,
        }}
      >
        {t('Contact_us')}
      </button>
    </Link>
  </div>
</div>

      <div>
        <h2
          style={{
            color: "#073B94",
            textAlign: "center",
            fontSize: 40,
            fontWeight: "bold",
            marginBottom: 45,
            marginTop: 70,
          }}
        >
          {t('service-center')}
        </h2>
      </div>
      <div className="d-flex justify-content-evenly" style={{ marginBottom: 200,}}>
        <div
          style={{
            width: 360,
            height: 150,
            borderRadius: "15px",
            textAlign: 'center',
            boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
          }}
        >
          <img style={{marginTop: 40, }} src={require("../assets/img/solar_phone-calling-rounded-bold.png")} />
          <p style={{color: '#073B94', fontWeight: 'bold', fontSize: 22,}}>+856 20-22222222</p>
        </div>
        <div
          style={{
            width: 360,
            height: 150,
            borderRadius: "15px",
            textAlign: 'center',
            boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
          }}
        >
           <img style={{marginTop: 40, }} src={require("../assets/img/material-symbols_mail.png")} />
          <p style={{color: '#073B94', fontWeight: 'bold', fontSize: 22,}}>Singmahazon.ce@gmail.com
</p>
        </div>
        <div
          style={{
            width: 360,
            height: 150,
            borderRadius: "15px",
            textAlign: 'center',
            boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
          }}
        >
           <img style={{marginTop: 40, }} src={require("../assets/img/fluent_chat-20-filled.png")} />
          <p style={{color: '#073B94', fontWeight: 'bold', fontSize: 22,}}>Live chat</p>
        </div>
      </div>
    </>
  );
}
