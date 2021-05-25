import React, { Component } from 'react'

export default class RightSidebar extends Component {
    render () {
        return (
            <footer>
                <section className="footerLogo">
                    <img src="/Images/Logo_and_icons/logo.jpg" alt="logo.png"/>
                </section>
                <section className="footerInfo">
                    <ul>
                        <li><a href="/">Sobre nosotros </a></li>
                        <li><a href="/">Política de parqueaderos </a></li>
                        <li><a href="/">Política de datos </a></li>
                        <li><a href="/">Declaración de privacidad </a></li>
                        <li><a href="/">Canales de atención </a></li>
                        <li><a href="/">Contactanos </a></li>
                        <li><a href="/">Manejo de negocio </a></li>
                        <li><a href="/">Manejo de Cookies </a></li>
                    </ul>

                </section>
                <section className="footerSocial">
                    <img src="/Images/Logo_and_icons/facebook.png" alt="facebook" />
                    <img src="/Images/Logo_and_icons/instagram.png" alt="instagram" />
                    <img src="/Images/Logo_and_icons/twitter.png" alt="twitter" />
                    <img src="/Images/Logo_and_icons/whatsapp.png" alt="whatsapp" />
                </section>
            </footer>
        )
    }
}