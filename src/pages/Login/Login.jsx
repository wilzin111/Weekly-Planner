import "./Login.css"
import { AiOutlineUser } from "react-icons/ai";
import { CiLock } from "react-icons/ci";

const Login = () => {
  return (
    <div className="container">
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
              />

              <label htmlFor="user_id" className="login"><AiOutlineUser /></label>
            </div>

            <div className="transition">
              <input type="password"
                placeholder="password"
                id="user_id_password"
                className="input_transition"
              />

              <label htmlFor="user_id_password" className="login"><CiLock /></label>
            </div>

          </form>

          <button>Log in</button>

        </div>

      </div>
      <div className="logo"></div>
    </div>
  )
}

export default Login

