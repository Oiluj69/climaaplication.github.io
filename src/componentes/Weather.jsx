import { useState } from "react";
import { componente } from "./component"

export const AppWeather = () => {

    const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
    const Api_Key = '6c46dacc450ca6fd0c87747ce3c3d984'
    const difKelvin = 273.15

    const [ciudad, setCiudad] = useState('')

    const [dataclima, setDataClima] = useState(null)

    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (ciudad.length > 0) fetchClima()
    }

    const fetchClima = async () => {
        try {
            const response = await fetch(`${urlBase}?q=${ciudad}&appid=${Api_Key}`)
            const data = await response.json()
            setDataClima(data)
        } catch (error) {
            console.error('Ha ocurrido el siguiente problema:', error)
            alert('Compruebe su conección a Internet')
        }
    }

    return (
        <div className="weather">

            <div>
                <h1>Clima</h1>
            </div>
            <div className="divisor">
                <form onSubmit={handleSubmit} >
                    <input type="text" value={ciudad} onChange={handleCambioCiudad} name="city" id="city" placeholder="Teclee la Ciudad" />
                    <button type="submit">Buscar</button>
                </form>
                {
                    dataclima && (
                        <div className="clima">
                            <h2>{dataclima.name}</h2>
                            <p>Temperatura: {parseInt(dataclima?.main?.temp - difKelvin)}°C</p>
                            <p>Condición Meteorológica: {dataclima.weather[0].description} </p>
                        </div>
                    )
                }
            </div>
            <div>
                <img src="../imagenes/clima.png" alt="Logo" width={150} />
            </div>
            <div id="piepagina">
                <footer class="">
                    <div class="footer">
                        <span class="">&copy;</span><span class=""> 2024 </span><span
                            class="">Clima,</span><span class=""> Inc</span>
                        <div className="desarrolloweb">
                            <a href="https://oiluj69.github.io/jcdesarrolloweb.github.io">
                                Desarrollado por: JCDesarrolloWeb
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>

    )
}
