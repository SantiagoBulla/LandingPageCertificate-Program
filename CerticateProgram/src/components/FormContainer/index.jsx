import React, { useEffect, useState } from 'react'
import more from "../../assets/more.svg";
import Form from '../Form';
import './formContainer.css'
import { useWindowSize } from '../../hook/screen';

const FormContainer = () => {

    const [openForm, setOpenForm] = useState(false)
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
            <div className="formulario-container">
                <div className="title">
                    <div className="data">
                        <h1>
                            <mark>Diplomado en</mark>
                            <br />
                            Marketing Digital
                        </h1>
                        <p>Sesiones sincrónicas</p>
                    </div>
                    {
                        (width <= 768) ? <div className="btn-open">
                            <img src={more} alt="" srcset="" className='open-form' onClick={() => openFormFuction()} />
                        </div> : null
                    }

                </div>
                {openForm || (width >= 1024) ? <Form /> : null}
            </div>
        </>
    )
}

export default FormContainer