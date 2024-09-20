import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
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
            {t('Contact-us')}
          </h1>
          <h1 style={{ fontSize: 20, margin: 0 }}>
            {t('solution-ex')}
          </h1>
        </div>
      </div>
      <div
        className="row justify-content-around"
        style={{ marginBottom: 40, marginLeft: 55 }}
      >
        <div className="col-5">
          <h4 style={{ color: "#073B94", marginTop: 70, fontWeight: "bold" }}>
            {t('with-us')}
          </h4>
          <p style={{ color: "#073B94" }}>
            {t('explore')}
          </p>
          <hr style={{ borderTop: "1.5px solid #073B94", marginBottom: 35 }} />

          <div className="contact-info">
            <div className="d-flex align-items-center mb-3">
              <img
                style={{ width: 24, marginRight: 15, marginBottom: 32 }}
                src={require("../assets/img/mdi_address-marker.png")}
                alt="Address Icon"
              />
              <p style={{ color: "#073B94", marginBottom: 32 }}>
                {t('address')}
                <br />
                {t('house')}
              </p>
            </div>

            <div className="d-flex align-items-center mb-3">
              <img
                style={{ width: 24, marginRight: 15, marginBottom: 32 }}
                src={require("../assets/img/ic_baseline-email.png")}
                alt="Email Icon"
              />
              <p style={{ color: "#073B94", marginBottom: 32 }}>
                Singmahazon.ce@gmail.com
                <br />
                clean.energyDSing@gmail.com
              </p>
            </div>

            <div className="d-flex align-items-center mb-3">
              <img
                style={{ width: 24, marginRight: 15, marginBottom: 32 }}
                src={require("../assets/img/ic_baseline-phone.png")}
                alt="Phone Icon"
              />
              <p style={{ color: "#073B94", marginBottom: 32 }}>
                +856 20-22222222
                <br />
                021-546770
              </p>
            </div>

            <div className="d-flex align-items-center mb-3">
              <img
                style={{ width: 24, marginRight: 15, marginBottom: 32 }}
                src={require("../assets/img/carbon_time-filled.png")}
                alt="Time Icon"
              />
              <p style={{ color: "#073B94", marginBottom: 32 }}>
                {t('time')}
              </p>
            </div>
          </div>
        </div>
        {/* fill form */}
        <div className="col-6" style={{ marginTop: 70 }}>
          <div
            className="contact-form"
            style={{
              backgroundColor: "#F2F7FB",
              padding: "40px",
              width: "80%",
              marginLeft: 55,
            }}
          >
            <h4 style={{ color: "#073B94", fontWeight: "bold" }}>
              {t('send-mes')}
            </h4>
            <p style={{ color: "#073B94" }}>
              {t('detail-cap')}
            </p>

            <form>
              <div className="mb-3">
                <label
                  for="fullName"
                  className="form-label"
                  style={{ color: "#073B94" }}
                >
                  {t('full-name')}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-3">
                <label
                  for="email"
                  className="form-label"
                  style={{ color: "#073B94" }}
                >
                  {t('email')}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <label
                  for="message"
                  className="form-label"
                  style={{ color: "#073B94" }}
                >
                  {t('message')}
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  backgroundColor: "#073B94",
                  width: "100%",
                  padding: "10px",
                }}
              >
                {t('submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <h4
          style={{
            color: "#073B94",
            fontSize: 32,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          {t('location')}
        </h4>
        <div className="d-flex justify-content-center mb-5">
          <img src={require("../assets/img/image 5.png")} />
        </div>
      </div>
    </>
  );
}
