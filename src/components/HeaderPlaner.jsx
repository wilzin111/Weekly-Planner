import { useNavigate } from 'react-router-dom'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../FireBaseConnection'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HeaderPlaner'

export function HeaderPanel() {
    const navigatePL = useNavigate()
    
    async function logout() {
        await signOut(auth)
        .then(()=>{
            localStorage.clear()
            navigatePL("/")
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    useEffect(() => {
        async function checkoutLog(){
            onAuthStateChanged(auth, (user) => {
                if(!user){
                    navigatePL("/")
                }
            })
    }
    checkoutLog()
    })

    return (
        <div className='header_planer'>
            <div className="site_name_planer">
                <h1>Weeky Planner</h1>
                <p>Use this planner to organize your daily issues.</p>
            </div>
            <div className="timer">
                <div className="time">10:58</div>
                <div className="date">November 22th, 2022</div>
            </div>
            <div className="climate">
                <div className="local">Asunción - Paraguay</div>
                <div className="temperature">22°</div>
            </div>
            <div className="container_right_planer">
                <Link to="https://www.youtube.com/" target="_blank">Compass.UOL</Link>
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}
