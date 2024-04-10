import { useState } from "react";
import { componente } from "./component"
import clima from "../../imagenes/clima.png"

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
        }
    }

    const [buscar, setBuscar] = useState(null)

    const cambio = () => {
        setBuscar(!buscar)
    }

    const actualizar = () => setBuscar(window.location.replace(''))

    return (
        <div className="weather">

            <div>
                <h1>Clima</h1>
            </div>
            <div className="know">
                <h2>Quiero saber el clima de:</h2>
            </div>
            <div className="divisor">
                <form onSubmit={handleSubmit} >
                    <input type="text" value={ciudad} onChange={handleCambioCiudad} name="city" id="city" placeholder="Introdusca la Ciudad" />

                    {
                        buscar ? (
                            <button type="submit" className="actualizar"  onClick={actualizar} >Actualizar</button>

                        ) : (
                            <button type="submit" onClick={cambio} >Buscar</button>
                        )
                    }


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
                <img src={clima} alt="Clima Logo" width={150} />
            </div>
            <div id="piepagina">
                <footer>
                    <div className="footer">
                        <span>&copy;</span><span> 2024 </span><span>Clima,
                        </span><span> Inc</span>
                        <div className="desarrolloweb">
                            <a href="https://oiluj69.github.io/jcdesarrolloweb.github.io">
                                <span>Desarrollado por:</span> <span>JCDesarrolloWeb</span>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>

    )
}
