import React from 'react'

const BtnFlotante = () => {
    return (
        <div className="btn-flotante">
                <input type="checkbox" id="btn-mas" />
                <div className="redes">
                    <a href="https:www.facebook.com" className="icon-fb a" target="blank_"></a>
                    <a href="https:www.youtube.com" className="icon-yt a" target="blank_"></a>
                    <a href="https:www.twitter.com" className="icon-tw a" target="blank_"></a>
                    <a href="https:www.instagram.com" className="icon-ig a" target="blank_"></a>
                </div>
                <div className="boton-mas">
                    <label htmlFor="btn-mas" className="icon-mas"></label>
                </div>
        </div>
    )
}

export default BtnFlotante;
