
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer/Footer'

function App() {
 
  return (
   <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>

   </>
  )
}

export default App
