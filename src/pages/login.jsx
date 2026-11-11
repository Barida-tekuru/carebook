import React from 'react'
import { Link } from 'react-router-dom'
import { FaStethoscope } from "react-icons/fa";

function Login() {
  return (
    <form action="">
      <h1>Welcome back</h1>
      <p className="muted">Log in to manage your appointments.</p>
       <label  className="field">
            Email address
            <input type="email" name="email" required value={""} />
          </label>
          <div className="field">
            <div className="row between">
              <label htmlFor="password">Password</label>
              <Link to={"/forgetpassword"} className="small">Forgot passord?</Link>
            </div>
            <div className="password-field">
              <input type="password" name="password" id="password" value={""}/>
              <button type='button' className='show-password'></button>
            </div>
          </div>
          <button className='btn btn-block'>Log in</button>
          <p className="small center">
            New to CareBook?
            <Link to={"/register"}>Create an account</Link>
            </p>
            <div className="auth-note">
              <FaStethoscope />
              <div>
                <strong>Are you a doctor?</strong>
                <Link to="">Register as a doctor</Link>
                your profile goeslive once an admin checks your MDCN license
              </div>
            </div>
    </form>
  )
}

export default Login