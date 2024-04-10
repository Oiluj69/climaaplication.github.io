

export const componente = () => {


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

    return (
        <div>componente</div>
    )
}
