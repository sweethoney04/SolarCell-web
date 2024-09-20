import React from "react";
import { useTranslation } from "react-i18next";

export default function NewDetial() {
  const { t } = useTranslation('translation');
  return (
    <>
    <hr/>
      <div
        className="d-flex flex-column bd-highlight mb-3"
        style={{ marginLeft: 155, marginTop: 45 }}
      >
        <div className="p-2 bd-highlight">
          <h4 style={{ fontSize: 40, fontWeight: "bold" }}>
            {t('Topic')}
          </h4>
          <p style={{ fontSize: 20 }}>
            {t('Topic-ex')}
          </p>
          <img
            style={{ width: 1104, height: 545 }}
            src={require("../assets/img/Rectangle 103.png")}
          />
          <p style={{ color: "#CE1126", marginTop: 10 }}>
            {t('Date')}
          </p>
        </div>
        <div
          className="p-2 bd-highlight"
          style={{ textAlign: "justify", marginRight: 100 }}
        >
          <p>{t('Dear')}</p>
          <p>
            {t('Long-1')}
          </p>
          <h5 style={{fontWeight: 'bold'}}>{t('Q-1')}</h5>
          <p>
            {t('Long-2')}
          </p>
          <h5 style={{fontWeight: 'bold'}}>{t('Q-2')}</h5>
          <p>
            {t('Long-3')}
          </p>
        </div>
        <div
          className="p-2 bd-highlight"
          style={{ marginTop: 50, marginBottom: 50 }}
        >
          <div className="d-flex justify-content-start">
            <p style={{ fontWeight: "bold" }}>
              For more article from us, you can follow us on
            </p>
            <a href="https://www.tiktok.com/explore">
            <img
              style={{ marginLeft: 15, width: 30, height: 30 }}
              src={require("../assets/img/ic_baseline-tiktok.png")}
            />
            </a>
            <a href="https://www.instagram.com">
            <img
              style={{ marginLeft: 15, width: 30, height: 30 }}
              src={require("../assets/img/mdi_instagram.png")}
            />
            </a>
            <a href="https://www.facebook.com">
            <img
              style={{ marginLeft: 15, width: 30, height: 30 }}
              src={require("../assets/img/uil_facebook.png")}
            />
            </a>
            <img
              style={{ marginLeft: 15, width: 30, height: 30 }}
              src={require("../assets/img/mdi_twitter.png")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
