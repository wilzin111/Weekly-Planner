import { AiOutlineUser } from "react-icons/ai";
import { error, success, warn } from '../../hooks/Alerts'
import { CiLock } from "react-icons/ci";
import { useState } from 'react'
import { auth } from '../../FireBaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { ModalLogin } from "../../components/ModalLogin";
import "./Login.css"


const Login = () => {
  const navigatL = useNavigate()
  const [loginModal, setloginModal] = useState(false)
  const [loginEmail, setloginEmail] = useState('')
  const [loginPassword, setloginPassword] = useState('')
  const [passwordE, setPasswordE] = useState('')
  const [borderE, setBorderE] = useState('')

  async function handleLogin() {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((value) => {
        success("User logged in successfully")
        navigatL("/planer")
        localStorage.setItem('userLogado', JSON.stringify(value.user.uid))
      })

      .catch((err) => {
        const errorCode = err.code;
        if (errorCode ===  'auth/user-not-found') {
          error('User not found')
          setTimeout(() => { setloginModal(true) }, 1000)

        } else if (errorCode === 'auth/missing-password' || 'auth/wrong-password') {
          error('Incorrect password')
          setBorderE('error')
          setPasswordE(
            <>
              <div className="textErro">
                <p>Wow, invalid username or password.
                  Please, try again!</p>
              </div>
            </>
          )
        }

      })
  }

  
  return (
    <div className="container">
      <ModalLogin e={loginModal} setCloseModal={() => setloginModal(!loginModal)}
        navigateML={() => navigatL("/signup")}>
        <h1>Oops, something went wrong!</h1>
        <p>Do you want to register a new account?</p>
      </ModalLogin>
      <div className="text">
        <div className="container_texto">
          <h1>Welcome,</h1>
          <p>To continue browsing safely, log in to the network.</p>
        </div>
        <div className="container_login">
          <h1>Login</h1>

          <form>

            <div className="transition">
              <input type="text"
                placeholder="email"
                id="user_id"
                className={borderE === 'error' ? 'password_error input_transition' : 'input_transition'}
                onChange={(e) => setloginEmail(e.target.value)}
              />

              <label htmlFor="user_id" className="login"><AiOutlineUser /></label>
            </div>

            <div className="transition">
              <input type="password"
                placeholder="password"
                id="user_id_password"
                className={borderE === 'error' ? 'password_error input_transition' : 'input_transition'}
                onChange={(e) => setloginPassword(e.target.value)}
              />

              <label htmlFor="user_id_password" className="login"><CiLock /></label>
            </div>

          </form>

          <div>
            {passwordE}
          </div>

          <button onClick={handleLogin}>Log in</button>

        </div>

      </div>
      <div className="logo"></div>
    </div>
  )
}

export default Login

