import { useNavigate } from 'react-router-dom'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../FireBaseConnection'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { timer } from '../hooks/timer'
import { Clima } from '../hooks/Clima'
import logo from '../assets/logoCompassPlaner.png'
import './HeaderPlaner.css'


export function HeaderPanel() {
    const [time, setTime] = useState(timer)
    useEffect(() => {
        const interval = setInterval(() => {
            const dados = timer()
            setTime(dados)

        }, 7000)    
        return () => clearInterval(interval)
    },[])

    const navigatePL = useNavigate()

    async function logout() {
        await signOut(auth)
            .then(() => {
                localStorage.clear()
                navigatePL("/")
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
                <Clima/>
            </div>
            <div className="container_right_planer">
                <Link className='logoCompass' to="https://compass.uol/en/home/" target="_blank">
                    <img src={logo} alt="" />
                </Link>
                <button className='btn' onClick={logout}>
                    <img src="" alt="" /><br /><br />
                    Logout
                </button>
            </div>
        </div>
    )
}
