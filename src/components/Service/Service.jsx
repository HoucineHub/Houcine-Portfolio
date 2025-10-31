import React from 'react'
import './Service.css'
import serviceData from '../../assets/services_data'
import arrow from '../../assets/arrow_icon.svg'

function Service() {
  return (
    <div id='services' className='Services'>
      <div className="Services-title">
        <h1>My Services :</h1>
      </div>
      <div className="Services-container">
        {serviceData.map((service,index)=>{
            return <div key={index} className='service-format'>
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className="services-readmore">
                    <p>Read More</p>
                    <img src={arrow} alt="" />
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default Service



