import React from 'react'

import Navbar from '../Navbar/Navbar';
import BtnFlotante from '../BtnFlotante/BtnFlotante';

export default function Contacto() {
    return (
        <>
            <Navbar />
            <BtnFlotante />

            <h2 className='contacto'>Contacto</h2>

            <section id='formulario'>
                <form action='' class='form'>
                    <p class='field required half'>
                        <label class='label required' for='name'>Nombre</label>
                        <input class='text-input' id='name' name='name' required type='text'/>
                    </p>
                    <p class='field required half'>
                        <label class='label' for='email'>E-mail</label>
                        <input class='text-input' id='email' name='email' required type='email'/>
                    </p>
                    <p class='field'>
                        <label class='label' for='message'>Mensage</label>
                        <textarea class='textarea' cols='50' id='message' name='message' required rows='4'></textarea>
                    </p>
                    <p class='field'>
                        <input class='button' type='submit' value='Send message'/>
                    </p>
                </form>
            </section>
        </>
    )
}
