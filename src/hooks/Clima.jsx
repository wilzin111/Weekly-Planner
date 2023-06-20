import { doc, getDoc } from "firebase/firestore"
import { db } from "../FireBaseConnection"
import { useState } from "react"
import axios from "axios"

export const Clima = () => {
    const usuarioLogado = JSON.parse(localStorage.getItem('userLogado'))
    const [pais, setPais] = useState('')
    const [cdd, setCdd] = useState('')
    const [data, setData] = useState('')

    async function buscarDadosLocal() {
        const dadosLocal = doc(db, "user", usuarioLogado)
        await getDoc(dadosLocal)
            .then((snapshot) => {
                setPais(snapshot.data().pais)
                setCdd(snapshot.data().cidade)
            })
    }
    buscarDadosLocal()

    //    const key = 'd59fd5695fc127ff63e08781a482015f'
    //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${cdd},${pais}&units=metric&appid=${key}&lang=pt_br;`
    //     const searchLocation = async () => {
    //        await axios.get(url)
    //        .then(() => {
    //             setData(response.data)
    //         })
    //     }
    //     searchLocation()

    const local = {
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '18px'
    }

    const temperature = {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: '48px',
        lineHeight: '60px'
    }

    return (
        <>
            {data ? (
                <>
                    <div style={local}>
                        {data.name} - {pais}
                    </div>
                    <div style={temperature}>
                        <img
                            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                            alt="Icon" />
                        {parseInt(data.main.temp)}°
                    </div>
                </>
            ) : (
                <div style={local}>
                    <p>{cdd} - {pais}</p>

                </div>
            )}
        </>
    )
}
