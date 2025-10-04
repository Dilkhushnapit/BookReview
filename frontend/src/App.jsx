import { useState } from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import AddEditBook from './pages/AddEdit'
import BookDetails from './pages/BookDetails'
import ReviewForm from './pages/Review.jsx'
function App() {

  return (
   <div>

     <Header />
     <Routes>
      <Route path='/login' element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/my-profile" element={<Profile />} />
      <Route path="/add-edit" element={<AddEditBook />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path='/review' element={<ReviewForm />} />

     </Routes>
   </div>
  )
}

export default App
