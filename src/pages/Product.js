import React from 'react'
import { Link, Outlet } from "react-router-dom";
import Solar from '../assets/img/image 17.png'
import one from '../assets/img/image 20.png'
import two from '../assets/img/image 21.png'
import three from '../assets/img/image 22.png'
import four from '../assets/img/tempImageWXkbJ4 9.png'
import five from '../assets/img/image 16.png'
import six from '../assets/img/image 18.png'
import seven from '../assets/img/image 19.png'


export default function Product() {
  const productData = [
    {
      name: "SunFlex 220W DualFace",
      price: 155.99,
      img: one,
      }, 
      {
        name: "SunFlex 220W DualFace",
        price: 155.99,
        img: two,
        }, 
        {
          name: "SunFlex 220W DualFace",
          price: 155.99,
          img: three,
          }, 
  ];
  const itemData = [
    {
      name: "Bificial Solar 220watt 12 volt",
      price: 225.99,
      img: four
      
    },
    {
      name: "SunFlex 220W DualFace",
      price: 155.99,
      img: one
    },
    {
      name: "EcoGen 220W Solar Max",
      price: 143.99,
      img: two
    },
    {
      name: "BrightVolt 220W Bi-Solar",
      price: 259.99,
      img: three
    },
  ];
  const item2Data = [
    {
      name: "TwinPower 220W Solar Pro",
      price: 305.99,
      img: five
    },
    {
      name: "OptiSun 220W Dual Panel",
      price: 347.99,
      img: Solar
    },
    {
      name: "VoltGuard 220W Bifacial",
      price: 278.99,
      img: six
    },
    {
      name: "Radiant 220W Solar Biflex",
      price: 499.99,
      img: seven
    },
  ];




  return (
    <>
    <hr/>
    
    <div style={{ position: "relative", width: "100%", }}>
        <img
          style={{ width: "100%", height: 243, marginTop: 35, marginBottom: 50, }}
          src={require("../assets/img/Rectangle 66.png")}
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
            Best Seller Products 
          </h1>
          <h1 style={{ fontSize: 20, margin: 0 }}>
          Save on energy costs with our best-selling solar panels. Efficient, durable, and perfect for sustainable living.
          </h1>
        </div>
      </div>

    {/* product render */}
      <div className='d-flex justify-content-evenly'>

  {productData.map((product, index) => (
    <Link to="/category" style={{color: 'black', textDecoration: 'none'}}>
    <div 
      key={index} 
      style={{
        width: 292, 
        height: 371, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 10,
        boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
        marginBottom: 20,
      }}
    >
      <img
        src={product.img}
        alt={product.name}
        style={{width: "55%", height: 180, objectFit: 'cover',marginTop: 35,}} // Adjust image fit
      />
      <h2 style={{fontSize: 18, 
        fontWeight: 'bold', 
        marginTop: 30, 
        marginBottom: 55, 
        marginLeft: 15,
        width: '100%'}}>{product.name}</h2>
      <p style={{color: '#073B94', 
        fontSize: 26, 
        fontWeight: 'bold', 
        marginBottom: 20, 
        marginTop: 0,
        marginLeft: 15, 
        width: '100%'}}>${product.price}</p>

        
    </div>
    </Link>
  ))}
  
</div>
{/* all product */}
<div style={{marginLeft: 45, color: '#073B94', marginTop: 50,}}>
  <h4 style={{fontWeight: 'bold', fontSize: 40,}}>All Products</h4>
  <p style={{marginTop: -15}}>_________________________</p>
</div>
<div className='d-flex justify-content-evenly mt-5'>
{itemData.map((item, index) => (
  <Link to="/category" style={{color: 'black', textDecoration: 'none'}}>
    <div 
      key={index} 
      style={{
        width: 292, 
        height: 371, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 10,
        boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
        marginBottom: 20,
      }}
    >
      <img
        src={item.img}
        alt={item.name}
        style={{width: "55%", height: 180, objectFit: 'cover',marginTop: 35,}} // Adjust image fit
      />
      <h2 style={{fontSize: 18, 
        fontWeight: 'bold', 
        marginTop: 30, 
        marginBottom: 55, 
        marginLeft: 15,
        width: '100%'}}>{item.name}</h2>
      <p style={{color: '#073B94', 
        fontSize: 26, 
        fontWeight: 'bold', 
        marginBottom: 20, 
        marginTop: 0,
        marginLeft: 15, 
        width: '100%'}}>${item.price}</p>

        
    </div>
    </Link>
  ))}
  </div>
 {/* column2 */}
  <div className='d-flex justify-content-evenly mt-5 mb-5'>
  
{item2Data.map((item2, index) => (
  <Link to="/category" style={{color: 'black', textDecoration: 'none'}}>
    <div 
      key={index} 
      style={{
        width: 292, 
        height: 371, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 10,
        boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
        marginBottom: 20,
      }}
    >
      <img
        src={item2.img}
        alt={item2.name}
        style={{width: "55%", height: 180, objectFit: 'cover',marginTop: 35,}} // Adjust image fit
      />
    
      <h2 style={{fontSize: 18, 
        fontWeight: 'bold', 
        marginTop: 30, 
        marginBottom: 55, 
        marginLeft: 15,
        width: '100%'}}>{item2.name}</h2>
        
      <p style={{color: '#073B94', 
        fontSize: 26, 
        fontWeight: 'bold', 
        marginBottom: 20, 
        marginTop: 0,
        marginLeft: 15, 
        width: '100%'}}>${item2.price}</p>
        

        
    </div>
    </Link>
  ))}

  </div>
  

    </>
  )
}
