import React from 'react'
import { Link } from 'react-router-dom';

const BtnFlotante = () => {
    return (
        <div className="btn-flotante">
                <input type="checkbox" id="btn-mas" />
                <div className="redes">
                    <Link to="https:www.facebook.com" className="icon-fb a" target="blank_"></Link>
                    <Link to="https:www.youtube.com" className="icon-yt a" target="blank_"></Link>
                    <Link to="https:www.twitter.com" className="icon-tw a" target="blank_"></Link>
                    <Link to="https:www.instagram.com" className="icon-ig a" target="blank_"></Link>
                </div>
                <div className="boton-mas">
                    <label htmlFor="btn-mas" className="icon-mas"></label>
                </div>
        </div>
    )
}

export default BtnFlotante;
