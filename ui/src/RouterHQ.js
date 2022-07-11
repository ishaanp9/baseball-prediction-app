import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'

const RouterHQ = () => {
    return (
      <Router>
  
        {/* <Header onClick={() => window.scrollTo(0,0)}/> */}
  
        <Routes>
         <Route path="/" element={<HomePage/>}/>
         {/* <Route path="/colleges/:collegeName" element={<CollegeHomePage/>}/>
         <Route path="/about" element={<AboutPage/>}/>
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