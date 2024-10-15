import React from 'react'
import './item.css'

export const BannerItem = ({ icon, title, data }) => {
    return (
        <div className='item-container'>
            <img src={icon} alt="" />
            <div className='info'>
                <h3>{title}</h3>
                <p>{data[0]} <br /> {data[1]}</p>
            </div>
        </div>
    )
}
