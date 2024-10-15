import React, { useEffect, useState } from 'react';
import menu from '../../assets/menu.svg';
import close from '../../assets/close.svg';
import { useWindowSize } from '../../hook/screen';
import "./header.css";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [width] = useWindowSize();

    useEffect(() => {
        if (width > 768) {
            setOpenForm(true)
        } else {
            setOpenForm(false)
        }
    }, [width])

    const openFormFuction = () => {
        if (width <= 768) {
            setOpenForm(!openForm)
        }
    }

    return (
        <>
            <header>
                <img src="/logo.png" alt="" srcset="" className='logo' />
                <img src={menu} alt="" srcset="" className='menu' onClick={() => {
                    setIsOpen(!isOpen);
                }} />
            </header>

            <div className="options" style={{ display: isOpen ? 'block' : 'none' }}>
                <img src={close} alt="" srcset="" className='close-menu' onClick={() => {
                    setIsOpen(false);
                }} />
                <ul>
                    <li>Oferta educativa</li>
                    <li>Especializaciones</li>
                    <li>Doctorados</li>
                    <li>Maestrías</li>
                    <li>¿Cómo me inscribo?</li>
                    <li>Modelo educativo</li>
                    <li>Nuestro Campus</li>
                    <li>Comienza tu inscripción</li>
                </ul>
            </div>
        </>
    );
}

export default Header;