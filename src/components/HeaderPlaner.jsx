import { useNavigate } from 'react-router-dom'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../FireBaseConnection'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { timer } from '../hooks/timer'
import './HeaderPlaner.css'

export function HeaderPanel() {

    const [time, setTime] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
            const dados = timer()
            setTime(dados)

        }, 6000)
        return () => clearInterval(interval)
    },[])

    const navigatePL = useNavigate()

    async function logout() {
        await signOut(auth)
            .then(() => {
                localStorage.clear()
                navigatePL("/")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        async function checkoutLog() {
            onAuthStateChanged(auth, (user) => {
                if (!user) {
                    navigatePL("/")
                }
            })
        }
        checkoutLog()
    })

    return (
        <div className='header_planer'>
            <div className="name_planer">
                <h1>Weeky Planner</h1>
                <p>Use this planner to organize your daily issues.</p>
            </div>
            <div className="timer">
                <div className="time">{time?.hourMinute}</div>
                <div className="date">{time?.monthDayYear}</div>
            </div>
            <div className="climate">
                <div className="local">Asunción - Paraguay</div>
                <div className="temperature">22°</div>
            </div>
            <div className="container_right_planer">
                <Link className='logoCompass' to="https://compass.uol/en/home/" target="_blank">
                    <img src="../assets/logoCompassPlaner.png" alt="" />
                </Link>
                <button className='btn' onClick={logout}>
                    <img src="" alt="" /><br /><br />
                    Logout
                </button>
            </div>
        </div>
    )
}
