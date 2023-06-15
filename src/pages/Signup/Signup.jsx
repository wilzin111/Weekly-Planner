import './Signup.css'

const Signup = () => {
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
              <input type="text" placeholder='Your first name' id='first_name' />
            </div>

            <div className='input'>
              <label htmlFor="last_name">last name</label>
              <input type="text" placeholder='Your last name' id='last_name' />
            </div>

            <div className='input'>
              <label htmlFor="birthday">birth date</label>
              <input type="date" placeholder='MM/DD/YYYY' id='birthday' />
            </div>

            <div className='input'>
              <label htmlFor="country">Country</label>
              <input type="text" placeholder='Your Country' id='country'/>
            </div>

            <div className='input'>
              <label htmlFor="city">City</label>
              <input type="text" placeholder='Your City' id='city'/>
            </div>

            <div className='input'>
              <label htmlFor="signup_email">e-mail</label>
              <input type="text" placeholder="A valid e-mail here" id='signup_email'/>
            </div>

            <div className='input'>
              <label htmlFor="signup_password">password</label>
              <input type="password" placeholder="Your password" id='signup_password'/>
            </div>

            <div className='input'>
              <label htmlFor="signup_password_confirm">password</label>
              <input type="password" placeholder="Comfirm your password" id='signup_password_confirm'/>
            </div>
          </form>

          <button>Register Now</button>
        </div>
      </div>
      <div className="logo"></div>
    </div>
  )
}

export default Signup