import { useState } from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import AddEditBook from './pages/AddEdit'
import BookDetails from './pages/BookDetails'
import ReviewForm from './pages/Review.jsx'
import About from './pages/aboutus.jsx'
import AppContextProvider, { AppContext } from './context/appContext'
  import { ToastContainer } from 'react-toastify';

function App() {

  return (
   <div>
     <ToastContainer />
        <AppContextProvider>
     <Header />
     <Routes>
      <Route path='/login' element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/my-profile" element={<Profile />} />
      <Route path="/add-edit" element={<AddEditBook />} />
      <Route path="/book/:bookId" element={<BookDetails />} />
      <Route path='/review/:bookId' element={<ReviewForm />} />
      <Route path='/about-us' element={<About />} />



     </Routes>
      </AppContextProvider>
   </div>
  )
}

export default App
