import React from 'react';


export default function Form() {
  return (
    <>
    <div style={{ position: "relative", width: "100%" }}>
        <img
          style={{ width: "100%", height: 156, }}
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
            Fill out your information
          </h1>
          <h1 style={{ fontSize: 20, margin: 0 }}>
          Please complete the form to receive detailed information and guidance on purchasing solar panels. We will contact you promptly
          </h1>
        </div>
      </div>

      <div style={{backgroundColor: '#E6F0F6'}}>
        <div className='d-flex justify-content-center align-items-center'>
            <div style={{backgroundColor: 'white', width: '50%'}}>
            
            <div
              className="mb-4 mt-4"
              style={{ width: "100%", margin: "0 auto", textAlign: "left" }}
            >
                <div className="row justify-content-center">
    <div className="col-4">
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
                First Name
              </label>
              <input
                type="text"
                id="fullName"
                className="form-control"
                placeholder="First Name"
                aria-label="First Name"
                style={{
                  padding: "10px",
                  fontSize: "16px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                }}
              />
    </div>
    <div className="col-4">
    <label
                htmlFor="phoneNumber"
                style={{
                  fontSize: 16,
                  color: "black",
                  marginBottom: 5,
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                Sure Name
              </label>
              <input
                type="sureName"
                id="surename"
                className="form-control"
                placeholder="Sure Name"
                aria-label="Sure Name"
                style={{
                  padding: "10px",
                  fontSize: "16px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                }}
              />
              
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-4">
    <label
                htmlFor="phoneNumber"
                style={{
                  fontSize: 16,
                  color: "black",
                  marginBottom: 5,
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                Phone Number
              </label>
              <input
                type="phonenumber"
                id="phoneNumber"
                className="form-control"
                placeholder="Phone Number"
                aria-label="Phone Number"
                style={{
                  padding: "10px",
                  fontSize: "16px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                }}
              />
    </div>
    <div className="col-4">
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
  </div>
  <div style={{width: '66%', alignItems: 'center', marginLeft: 131, marginTop: 15,}}>

  <label
                htmlFor="address"
                style={{
                  fontSize: 16,
                  color: "black",
                  marginBottom: 5,
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                Address 
              </label>
              <input
                type="address"
                id="address"
                className="form-control"
                placeholder="Address"
                aria-label="Address"
                style={{
                  padding: "10px",
                  fontSize: "16px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                }}
              />
               <label
                htmlFor="text"
                style={{
                  fontSize: 16,
                  color: "black",
                  marginBottom: 5,
                  display: "block",
                  fontWeight: "bold",
                  marginTop: 15,
                }}
              >
                Any question or comment
              </label>
              <input
                type="text"
                id="text"
                className="form-control"
                placeholder="Message"
                aria-label="Message"
                style={{
                  padding: "10px",
                  fontSize: "16px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                }}
              />

<button
                style={{
                  backgroundColor: "#073B94",
                  border: "none",
                  color: "white",
                  padding: "10px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  borderRadius: "15px",
                  width: "100%",
                  marginTop: 25,
                }}
                type="button"
              >
                Submit
              </button>
              </div>
              
            
        

            </div>
            </div>
            
        </div>
        

      </div>
      </>
  )
}
