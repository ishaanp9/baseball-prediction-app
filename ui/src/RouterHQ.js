import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Models/Header/Header'
import HomePage from './Pages/HomePage/HomePage'
import PlayerPage from './Pages/PlayerPage/PlayerPage'
import TeamPage from './Pages/TeamPage/TeamPage'

const RouterHQ = () => {
    return (
      <Router>
  
        {/* <Header onClick={() => window.scrollTo(0,0)}/> */}
  
        <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/player/:playerId/:playerName" element={<PlayerPage/>}/>
         <Route path="/team/:teamName" element={<TeamPage/>}/>
         {/* <Route path="/about" element={<AboutPage/>}/>
         <Route path="/blog" element={<BlogPage/>}/>
         <Route path="/faq" element={<FAQPage/>}/>
         <Route path="/add-college" element={<AddCollegePage/>}/>
         <Route path="*" element={<Error404/>} /> */}
        </Routes>
  
        {/* <Footer /> */}
  
      </Router>
    )
  }
  
  export default RouterHQ