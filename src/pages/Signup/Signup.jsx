import { useState } from 'react'
import { error, success, warn } from '../../hooks/Alerts'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { db, auth } from '../../FireBaseConnection'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

const Signup = () => {
  const navigat = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [niver, setNiver] = useState('')
  const [pais, setPais] = useState('')
  const [cidade, setCidade] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [signupPasswordConfirm, setSignupPasswordConfirm] = useState('')

  //letra maiuscula nome
  function capitalizeFirstName(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
  }
  const capitalizedfirstName = capitalizeFirstName(firstName)

  //letra maiuscula sobrenome
  function capitalizeLastName(e) {
    let LastNameList = e.split(" ")

    for (let i = 0; i < LastNameList.length; i++) {
      let currentLastName = LastNameList[i]
      LastNameList[i] = currentLastName.charAt(0).toUpperCase() + currentLastName.slice(1)
    }
    return LastNameList.join(" ")
  }
  const capitalizedLastName = capitalizeLastName(lastName)

  // (capitalizedfirstName) primeiro nome com letra maiuscula ja
  // (capitalizedLastName) sobrenome com letra maiuscula ja

  async function handleRegister() {

    if (firstName === '' ||
      lastName === '' ||
      niver === '' ||
      pais === '' ||
      cidade === '' ||
      signupEmail === '' ||
      signupPassword === '' ||
      signupPasswordConfirm === '') {
      warn("Fill in all fields")
      return
    }

    const currentDate = new Date();
    const birthdateInput = new Date(niver);
    const ageDiffMilliseconds = currentDate - birthdateInput;
    const ageDate = new Date(ageDiffMilliseconds);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    //verifica idade
    if (age < 18) {
      error("Age must be over 18!")
      return
    }

    const Email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Verifica se o e-mail está correto
    if (!Email.test(signupEmail)) {
      error("Incorrect email")
      return
    }

    const senha = /^(?=.*[\W_])(?=.*[A-Z])(?=.*\d).{6,}$/
    if (!senha.test(signupPassword)) {
      error("Password must contain at least one special character, one uppercase letter and one number")
      return
    }

    if (signupPassword != signupPasswordConfirm) {
      error("Passwords must be the same")
      return
    }

    await createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then(async (value) => {
        const uid = value.user.uid
        await setDoc(doc(db, 'user', uid), {
          firstName: capitalizedfirstName,
          lastName: capitalizedLastName,
          niver: niver,
          pais: pais,
          cidade: cidade,
          signupEmail: signupEmail,
          signupPassword: signupPassword
        })
          .then(() => {
            success("Registration done successfully")
            navigat("/")
          })
          .catch((erro) => {
            error("Unable to register, please try again!")
            console.log(erro)
          })
      })
      .catch((erro) => {
        error("Already existing email")
        console.log(erro)
      })
  }

  return (
    <div className="container">
      <div className="inputs">
        <div className="container_texto">
          <h1>Welcome,</h1>
          <p>Please, register to continue</p>
        </div>
        <div className="container_register">

          <form>
            <div className='input'>
              <label htmlFor="first_name">first name</label>
              <input type="text" placeholder='Your first name' id='first_name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className='input'>
              <label htmlFor="last_name">last name</label>
              <input type="text" placeholder='Your last name' id='last_name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className='input'>
              <label htmlFor="birthday">birth date</label>
              <input type="date" placeholder='MM/DD/YYYY' id='birthday'
                value={niver}
                onChange={(e) => setNiver(e.target.value)}
              />
            </div>

            <div className='input'>
              <label htmlFor="country">Country</label>
              <input type="text" placeholder='Your Country' id='country'
                value={pais}
                onChange={(e) => setPais(e.target.value)}
              />
            </div>

            <div className='input'>
              <label htmlFor="city">City</label>
              <input type="text" placeholder='Your City' id='city'
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
            </div>

            <div className='input'>
              <label htmlFor="signup_email">e-mail</label>
              <input type="text" placeholder="A valid e-mail here" id='signup_email'
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
              />
            </div>

            <div className='input'>
              <label htmlFor="signup_password">password</label>
              <input type="password" placeholder="Your password" id='signup_password'
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
            </div>

            <div className='input'>
              <label htmlFor="signup_password_confirm">password</label>
              <input type="password" placeholder="Comfirm your password" id='signup_password_confirm'
                value={signupPasswordConfirm}
                onChange={(e) => setSignupPasswordConfirm(e.target.value)}
              />
            </div>
          </form>

          <button onClick={handleRegister}>Register Now</button>
        </div>
      </div>
      <div className="logo"></div>
    </div>
  )
}

export default Signup