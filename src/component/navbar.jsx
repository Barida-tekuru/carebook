import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav-links'>
        <div>
            <Link to={""} className='link'>Find a Doctor</Link>
            <Link to={""} className='link'>Specialties</Link>
            <Link to={""} className='link'>How it works</Link>
            <Link to={""} className='link'>For Doctors</Link>

        </div>
        <div>
            <Link to={"/login"} className='link auth-btn'>Log in</Link>
            <Link to={"/login"} className='link reg-btn'>Create account</Link>
        </div>
    </nav>
  )
}

export default Navbar