import React from 'react'
import './Docter_Detail.css'
import './css/bootstrap.min.css';
import './css/style.css';
export const Detail_Docter = () => {
    const i = require('./img/logo.png')
  return (
    <div className='container_docter_detail'>
    {/* <div className="container-fluid sticky-top bg-white shadow-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <a href="index.html" className="navbar-brand">
              <img src={i} className="logoImg"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <a href="service.html" className="nav-item nav-link">Service</a>
                <a href="price.html" className="nav-item nav-link">Pricing</a>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
              </div>
            </div>
          </nav>
        </div>
      </div> */}
        <div className='container_first'>
            {/* name */}
            <div className='Name_container'>
                Chetan
            </div>
            {/* addres */}
            <div className='Address_container'>
            0xe66d125041f0eabc15E0dEe318aBF49f8c864451
            </div>
        </div>
        <div className='detail'>
            <div className='mid'>
        <div className='medicine_detail'>        
        <div className='SearchFiled'>
                <input type='text' className='search' placeholder='Search medicine'/>
        </div>
        <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                </div>
                <div className='medicine_quantity_'>
                    InputQuantity:<input  className="quantity_" type='number'/>
                    <button className='add_medicine_'>Add</button>
                </div>
        </div>

            <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                </div>
                <div className='medicine_quantity_'>
                    InputQuantity:<input  className="quantity_" type='number'/>
                    <button className='add_medicine_'>Add</button>
                </div>
            </div>

            <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                </div>
                <div className='medicine_quantity_'>
                    InputQuantity:<input  className="quantity_" type='number'/>
                    <button className='add_medicine_'>Add</button>
                </div>
            </div>

            <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                </div>
                <div className='medicine_quantity_'>
                    InputQuantity:<input  className="quantity_" type='number'/>
                    <button className='add_medicine_'>Add</button>
                </div>
            </div>

            <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                </div>
                <div className='medicine_quantity_'>
                    InputQuantity:<input  className="quantity_" type='number'/>
                    <button className='add_medicine_'>Add</button>
                </div>
            </div>

            <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                </div>
                <div className='medicine_quantity_'>
                    InputQuantity:<input  className="quantity_" type='number'/>
                    <button className='add_medicine_'>Add</button>
                </div>
            </div>      
        </div>
        <div className="current_medicine">
            <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                    <span className='date'>26-02-2023</span>
                </div>
                <div className='medicine_quantity_'>
                    Quantity:12

                </div>
            </div>

            <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                    <span className='date'>26-02-2023</span>
                </div>
                <div className='medicine_quantity_'>
                    Quantity:12

                </div>
            </div>

            <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                    <span className='date'>26-02-2023</span>
                </div>
                <div className='medicine_quantity_'>
                    Quantity:12

                </div>
            </div>

            <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                    <span className='date'>26-02-2023</span>
                </div>
                <div className='medicine_quantity_'>
                    Quantity:12

                </div>
            </div>

            <div className='medicine_'>
                <div className='medicine_name_'>
                    XDCS12334Xf
                    <span className='date'>26-02-2023</span>
                </div>
                <div className='medicine_quantity_'>
                    Quantity:12

                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    
  )
}
