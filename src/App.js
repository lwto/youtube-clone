import React, { useState } from 'react'
import Header from './components/header/Header.js'
import Sidebar from './components/sidebar/Sidebar.js'
import HomeScreen from './screens/homeScreen/HomeScreen.js'
import { Container } from 'react-bootstrap'
import './_app.scss'

function App() {
  const [sidebar, toggleSidebar] = useState(false)
  
  const handleToggleSidebar =() => toggleSidebar(value => !value)

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar}/>
      
      <div className="app_container border border-info">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />

        <Container fluid className="app__main border border-warning">
          <HomeScreen />
        </Container>
      </div>
    </>
  )
}

export default App 