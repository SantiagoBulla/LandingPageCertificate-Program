import React from 'react'
import banner from '/banner.jpg'
import date from '../../assets/date.svg'
import book from '../../assets/book.svg'
import dollar from '../../assets/dollar.svg'
import { BannerItem } from './Item'
import './banner.css'

const Banner = () => {
  return (
    <div className='container'>
      <img src={banner} alt="" srcset="" className='banner-img' />
      <div className="information">
        <div className="dates">
          <p>Fecha de inicio de clases:</p>
          <p>20 de Agosto de 2024</p>
        </div>
        <div className="items">
          <BannerItem icon={date} title={'Duración'} data={['15 semanas ', '(120 horas)']} />
          <BannerItem icon={book} title={'Módulos'} data={['Tres de', ' diferente temática']} />
          <BannerItem icon={dollar} title={'Inversión'} data={['$2.800.000']} />
        </div>
      </div>
    </div>
  )
}

export default Banner