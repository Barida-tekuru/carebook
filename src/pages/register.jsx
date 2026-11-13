import React from 'react'
import { Link } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'

function Register() {
  return (
    <AuthLayout 
    title={'See the right doctor, without the waiting room'}
    text={'Book a real open slot, pay with Paystack and keep your visit notes in one place.'}>
      <form action="">
        <h1>Creat your account</h1>
        <p className="muted">Choose how you'ii use CareBook</p>
        <fieldset className="role-cards">
          <legend className="sr-only">I am a</legend>
          <label  className="on">
            <input type="radio" name="role" value={'patient'} />
            <strong>I'm a patient</strong>
            <span>Book and pay for appointments </span>
          </label>
          <label  className="on">
            <input type="radio" name="role" value={'doctor'} />
            <strong>I'm a doctor</strong>
            <span>Needs admin approval</span>
          </label>
        </fieldset>
        <div className="two-col">
          <label  className="field">
            First name
            <input type="text" name="firstname" required value={""} />
          </label>
          <label  className="field">
            Last name
            <input type="text" name="lastname" required value={""} />
          </label>
        </div>
        <label  className="field">
            Email
            <input type="email" name="email" required value={""} />
          </label>
          <label  className="field">
            Phone number
            <input type="tel" name="phone" required value={""} placeholder='+234 803 5555'/>
          </label>
          <label  className="field">
            Date of Birth
            <input type="date" name="dateofBirth" required value={""} max={''}/>
          </label>
          <label  className="field">
            Specialty
            <input type="text" name="specialty" required value={""} />
          </label>
          <label  className="field">
           MDCN License Number
            <input type="text" name="mdcnNumber" required value={""}  placeholder='MDCN/R/12345'/>
            <span className="small muted">An admin checks this before your profile goes life.</span>
          </label>
          <label  className="field">
            Password
            <input type="password" name="password" required value={""} minLength={8} />
          </label>
          <button className="btn btn-block">Create account</button>
          <p className="small center">Already have an account? <Link to='/login'>Log in</Link></p>
      </form>
    </AuthLayout>
  )
}

export default Register