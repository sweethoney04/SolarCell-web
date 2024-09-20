import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation('translation');
  return (
    <>
    <div className='d-flex justify-content-between' style={{backgroundColor: '#073B94',}}>
      <div>
        <a className='navbar-brand' href='#'>
          <img style={{width: 200, height: 100, marginTop: 10,}} src={require("../assets/img/tempImageeRKQ7I 6.png")} />
        </a>
      </div>
      <div>
        <nav className='navbar navbar-expand-lg' style={{height: 275, marginTop: -100, marginRight: 45,}}>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link style={{color: '#FFFFFF'}} className="nav-item nav-link active" to="/">
                {t('Home')}
              </Link>
              <Link style={{color: '#FFFFFF'}} className="nav-item nav-link active" to="/services">
                {t('Services')}
              </Link>
              <Link style={{color: '#FFFFFF'}} className="nav-item nav-link active" to="/product">
                {t('Product')}
              </Link>
              <Link style={{color: '#FFFFFF'}} className="nav-item nav-link active" to="/about">
                {t('About')}
              </Link>
              <Link style={{color: '#FFFFFF'}} className="nav-item nav-link active" to="/news">
                {t('News')}
              </Link>
              <Link  style={{color: '#FFFFFF'}} className="nav-item nav-link active" to="/contact">
                {t('Contact')}
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
    </>
  )
}
