import './App.css'
import { Routes, Route } from 'react-router-dom'
import Footer from './component/footer'
import Header from './component/header'
import HomePage from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import ResetPassword from './pages/resetPassword'
import ForgotPassword from './pages/forgotPassword'
import NotFound from './pages/notFound'

function App() {
  return (
    <>
    <Header/>
    <main className="container">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        {/* <Route path='/doctorProfile' element={<DoctorProfile/>}/> */}
        <Route path='/resetPassword' element={<ResetPassword/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App

