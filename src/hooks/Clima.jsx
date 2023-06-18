import { doc, getDoc } from "firebase/firestore"
import { db } from "../FireBaseConnection"
import { useState } from "react"


export const Clima = () => {
    const usuarioLogado = localStorage.getItem('userLogado')

    const [pais,  setPais] = useState('')
    const [cdd, setCdd] = useState('')
        async function buscarDadosLocal() {
            const dadosLocal = doc(db,"user",usuarioLogado)
            await getDoc(dadosLocal)
            .then((snapshot) =>{
                setPais(snapshot.data().pais)
                setCdd(snapshot.data().cidade)
            })
        }

    return {
        pais,cdd
    }
}
