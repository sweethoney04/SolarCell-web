import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation('translation');
  return (
    <>
      <div style={{ position: "relative", width: "100%", }}>
        <img
          style={{ width: "100%", height: 299, }}
          src={require("../assets/img/Rectangle 79.png")}
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
            {t('about-us')}
          </h1>
          <h1 style={{ fontSize: 20, margin: 0 }}>
            {t('empowering-homes-with-sustainable-energy')}
          </h1>
        </div>
      </div>

      <div style={{ paddingLeft: 50, paddingBottom: 50, marginRight: 25 }}>
        <div className="container">
          <div className="row">
            <div
              className="col"
              style={{ marginTop: 20, marginBottom: 20, paddingTop: 50 }}
            >
              <img
                style={{ width: 506, height: 357, marginRight: 35, }}
                src={require("../assets/img/Rectangle 44.png")}
              />
            </div>
            <div className="col" style={{ marginRight: 25 }}>
              <h2
                style={{
                  paddingTop: 60,
                  color: "#073B94",
                  fontWeight: "bold",
                  fontSize: 48,
                  marginBottom: 50,
                }}
              >
                {t('about-our-company')}
              </h2>
              <h4
                style={{
                  fontSize: 19,
                  marginBottom: 25,
                  fontWeight: "bold",
                  marginBottom: 20,
                  textAlign: 'justify'
                }}
              >
                {t('caption-sing')}
              </h4>
              <h4
                style={{ fontSize: 19, marginBottom: 25, fontWeight: "bold", textAlign: 'justify' }}
              >
                {t('caption-2')}
              </h4>
              <h4
                style={{ fontSize: 19, marginBottom: 25, fontWeight: "bold", textAlign: 'justify' }}
              >
                {t('caption-3')}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2
          style={{
            textAlign: "center",
            color: "#073B94",
            fontWeight: "bold",
            fontSize: 48,
            marginTop: 25,
            marginBottom: 40,
          }}
        >
         {t('what-we-do')}
        </h2>
        <div
          className="d-flex justify-content-evenly"
          style={{ marginTop: 25, marginBottom: 120 }}
        >
          <div
            style={{
              width: 268,
              height: 324,
              boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
              borderRadius: "15px",
              textAlign: "center",
              marginLeft: 30,
            }}
          >
            <img
              style={{ width: "121", height: 121, marginTop: 25 }}
              src={require("../assets/img/ph_solar-panel-fill.png")}
            />
            <p
              style={{
                textAlign: "center",
                marginTop: 20,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {t('solar-panel-installation')}
            </p>
            <p style={{ textAlign: "center", fontSize: 16 }}>
              {t('solar-cap')}
            </p>
          </div>

          <div
            style={{
              width: 268,
              height: 324,
              textAlign: "center",
              marginLeft: 30,
              boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
              borderRadius: "15px",
            }}
          >
            <img
              style={{ width: "121", height: 121, marginTop: 25 }}
              src={require("../assets/img/hugeicons_ai-innovation-03.png")}
            />
            <p
              style={{
                textAlign: "center",
                marginTop: 20,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {t('customized-solar-solutions')}
            </p>
            <p style={{ textAlign: "center", fontSize: 16 }}>
              {t('customized-cap')}
            </p>
          </div>

          <div
            style={{
              width: 268,
              height: 324,
              textAlign: "center",
              marginLeft: 30,
              boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
              borderRadius: "15px",
            }}
          >
            <img
              style={{ width: "121", height: 121, marginTop: 25 }}
              src={require("../assets/img/icons8_support.png")}
            />
            <p
              style={{
                textAlign: "center",
                marginTop: 20,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {t('maintenance-and-support')}
            </p>
            <p style={{ textAlign: "center", fontSize: 16 }}>
              {t('mains-cap')}
            </p>
          </div>
        </div>
      </div>
      <div style={{backgroundColor: '#D1E9F6', paddingBottom: 55,}}>
        <h2 style={{fontSize: 48, color: '#073B94', marginLeft: 100, paddingTop: 50,}}>{t('our-projects')}</h2>
        <p style={{color: '#073B94', marginLeft: 100, marginTop: -15,}}>__________________________________________</p>
        <div className="d-flex justify-content-start" style={{marginLeft: 100}}>
          <div>
            <p style={{marginRight: 15, color:'#073B94', fontWeight: 'bold',}}>2020</p>
          </div>
          <div>
            <p style={{marginRight: 15, fontWeight: 'bold',}}>2021</p>
          </div>
          <div>
            <p style={{marginRight: 15, fontWeight: 'bold',}}>2022</p>
          </div>
          <div>
            <p style={{marginRight: 15, fontWeight: 'bold',}}>2023</p>
          </div>
          <div>
            <p style={{marginRight: 15, fontWeight: 'bold',}}>2024</p>
          </div>
        </div>

        <div className="d-flex justify-content-start">
          <div style={{marginLeft: 100,}}>
            <img src={require("../assets/img/Rectangle 83.png")} />
          </div>
          <div style={{marginLeft: 45,}}>
            <img src={require("../assets/img/Rectangle 84.png")} />
          </div>
          <div style={{marginLeft: 45,}}>
            <img src={require("../assets/img/Rectangle 85.png")} />
          </div>
          <div style={{marginLeft: 45,}}>
            <img src={require("../assets/img/Rectangle 86.png")} />
          </div>
          <div style={{ transform: "translate(50%, 50%)", }}>
            <p style={{marginLeft: 20, color: '#073B94', fontWeight: 'bold'}}>{t('view-more')}</p>
            <img style={{marginLeft: 45,}} src={require("../assets/img/carbon_next-filled.png")} />
          </div>
        </div>
        <p style={{marginLeft: 100, marginTop: 35, fontSize: 20, fontWeight: 'bold', marginRight: 250, textAlign: 'justify'}}>{t('project-detail')}</p>
      </div>
    </>
  );
}
