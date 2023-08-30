import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import RegistrationForm from "./pages/RegistrationForm"
import SignInForm from "./pages/SignInForm"
import Todolist from "./compounents/todolist"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="/SignInForm" element={<SignInForm />} />
          <Route path="/Todolist" element={<Todolist />} />
        </Routes>
        
      </div>
    </>
  )
}

export default App
