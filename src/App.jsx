import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Dashboard from './pages/Dashboard'
import ProfilePage from './pages/ProfilePage'
// import DeleteAccount from './pages/DeleteAccount'
import UpdateUserInfo from './pages/UpdateUserInfo'

import IsPrivate from './components/IsPrivate'
import IsAnon from './components/IsAnon'


function App() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<IsAnon><LoginPage /></IsAnon>} />
        <Route path="/signup" element={<IsAnon><SignupPage /></IsAnon>} />
        <Route path="/dashboard" element={<IsPrivate><Dashboard/></IsPrivate>} />
        <Route path="/profile" element={<IsPrivate><ProfilePage/></IsPrivate>} />
        <Route path="/update" element={<IsPrivate><UpdateUserInfo/></IsPrivate>} />
        {/* <Route path="/delete-account" element={<DeleteAccount />} /> */}
      </Routes>
      </div>
    </div>

  )
}
//protect page pending
export default App

