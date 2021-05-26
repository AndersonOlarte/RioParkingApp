import React, {Component} from 'react'
import navComp from '../jsonDocs/NavBarComponents.json'
export default class Registry extends Component {
    render(){
        return (
            <section className="formItem">
                <div className="formContanier">
                    <form className="registryForm">
                        <h1>Registro</h1>
                        <input type="text" placeholder="Nombre"/>
                        <input type="text" placeholder="Apellido"/>
                        <input type="email" placeholder="Email"/>
                        <input type="Number" placeholder="Número"/>
                        <select placeholder="Tipo de vehiculo">
                            <option>auto</option>
                            <option>motocicleta</option>
                        </select>
                        <input type="password" placeholder="Contraseña"/>
                        <input type="password" placeholder="repite la contraseña"/>
                        <div classNameName="buttons">
                            <input type="button" value="enviar"/>
                            <input type="reset" />
                        </div>
                    </form>
                </div>
            </section>
        )}
}

export class Login extends Component {
    render () {
        return (
        <>
            <section className="formItem">
                <div className="formContanier">
                    <form className="loginForm">
                        <h1>Login here</h1>
                        <input type="email" name="Email" placeholder="Email"className="input" />
                        <input type="password" name="Password" placeholder="Password" className="input" />
                        <input type="button" value="Login" className="button"/>
                        <label>¿no te encuentras <a href={navComp["registry"].address} className="URL-Register">registrado</a>?</label>
                        <label>¿olvidaste tu <a href={navComp["registry"].address} className="URL-Register">password</a>?</label>
                    </form>
                </div>
            </section>
    </>
        )
    }
}