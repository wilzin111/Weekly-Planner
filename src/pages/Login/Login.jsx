import { AiOutlineUser } from "react-icons/ai";
import { error, success, warn } from '../../hooks/Alerts'
import { CiLock } from "react-icons/ci";
import { useState } from 'react'
import { auth } from '../../FireBaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import "./Login.css"
import { ModalLogin } from "../../components/ModalLogin";

const Login = () => {
  const navigatL = useNavigate()
  const [loginModal, setloginModal] = useState(false)
  const [loginEmail, setloginEmail] = useState('')
  const [loginPassword, setloginPassword] = useState('')

  async function handleLogin() {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(() => {
        success("Usuario logado com sucesso")
        navigatL("/panel")
      })
      .catch(() => {
        error('Usuario não encontrado')
        setTimeout(() => { setloginModal(true) }, 4090)
      })

  }

  return (
    <div className="container">
      <ModalLogin e={loginModal} />
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
                className="input_transition"
                onChange={(e) => setloginEmail(e.target.value)}
              />

              <label htmlFor="user_id" className="login"><AiOutlineUser /></label>
            </div>

            <div className="transition">
              <input type="password"
                placeholder="password"
                id="user_id_password"
                className="input_transition"
                onChange={(e) => setloginPassword(e.target.value)}
              />

              <label htmlFor="user_id_password" className="login"><CiLock /></label>
            </div>

          </form>

          <button onClick={handleLogin}>Log in</button>

        </div>

      </div>
      <div className="logo"></div>
    </div>
  )
}

export default Login

