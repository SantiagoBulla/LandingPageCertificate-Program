import React from 'react'
import './form.css'

const Form = () => {
    return (
        <div className='form-container'>
            <h1>¿Necesitas información?</h1>
            <h4>¡Llena el formulario y descubre como unirte a esta familia!</h4>
            <div className='form'>
                <input type="text" name="name" id="name" placeholder='Nombre(s)' />
                <input type="text" name="surname" id="surname" placeholder='Apellido(s)' />
                <input type="text" name="email" id="email" placeholder='Correo electrónico' />
                <input type="number" name="phone" id="phone" placeholder='+57' min={0} />
                <div className='terms'>
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">Acepto el envío de información a mi correo electrónico. He revisado la Política de Protección de Datos.</label>
                </div>
                <button>Enviar</button>
            </div>
        </div>
    )
}

export default Form