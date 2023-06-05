import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CardDetail from './components/CardDetail';
import Navbar from './components/Navbar';
import Home from './components/Home';

export const SearchContext = createContext()

function App() {

  const searchState = useState([])
  // console.log(searchState[0])


  return (
    <SearchContext.Provider value={searchState}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<CardDetail />} />
      </Routes>
    </SearchContext.Provider>
  )
}

export default App
