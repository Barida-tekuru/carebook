import React from "react"

function AuthLayout ({title, text, children}) {
  return (
    <div className="auth-split">
        <AsideAuth title={title} text={text}/>
        <div className="auth-form">
            {children}
        </div>
    </div>
  )
}

export default AuthLayout




 function AsideAuth({title, text}) {
  return (
    <aside className="auth-panel">
        <div>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="auth-roles">
                <span>Patients</span>
                <span>Doctors</span>
                <span>Admins</span>
            </div>
        </div>
    </aside>
  )
}
