import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import Alert from './Components/Alert'
import About from './Components/About'
import Footer from './Components/Footer'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light')
  const [modetxt, setModetxt] = useState('Switch to Dark Mode')
  const [alertTxt, setAlertTxt] = useState(null)
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setModetxt('Switch to Light Mode')
      showAlert("Dark Mode has been Enabled", 'success')
    }
    else {
      setMode('light')
      setModetxt('Switch to Dark Mode')
      showAlert("Light Mode has been Enabled", 'success')
    }
  }
  const showAlert = (message, type) => {
    setAlertTxt({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlertTxt(null)
    }, 3000);
  }
  const titlepage = () => {
    document.title = 'TextUtils - Your Favourite Text Editor';
  }
  const homeTitle = () => {
    document.title = 'TextUtils - Home';
  }
  const aboutTitle = () => {
    document.title = 'TextUtils - About TextUtils';
  }
  return (
    <>
      <Navbar title='TextUtils App' home='Home' about='About TextUtils' contact='Reach Us' contact_1='Call Us' contact_2='Mail Us' contact_3='Custom Requests' mode={mode} modetxt={modetxt} toggleMode={toggleMode} titlepage={titlepage} homeTitle={homeTitle} aboutTitle={aboutTitle}/>
      <Alert alert={alertTxt} mode={mode} />
      <Routes>
        <Route exact path='/' element={<TextForm heading='Text Input Here' mode={mode} showAlert={showAlert} />} />
        <Route exact path='/about' element={<About mode={mode} />} />
      </Routes>
      <Footer webSiteName='MyTextUtils.com' mode={mode} />
    </>
  );
}

export default App;
