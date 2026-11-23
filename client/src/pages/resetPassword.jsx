import React from 'react'

function ResetPassword() {
  return (
    <form action="" className="form card">
      <h1>Choose a new password</h1>
      <label  className="field">
        Enter new password
        <input type="password" required value={''} />
      </label>
    </form>
  )
}

export default ResetPassword