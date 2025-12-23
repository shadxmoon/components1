import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageSelectSet } from './components/PageSelectSet.jsx'
import { PageViewSet } from './components/PageViewSet.jsx'
import { PageCreateSet } from './components/PageCreateSet.jsx'
import './App.css'
import { FormCreateSet } from './components/FormCreateSet/FormCreateSet.jsx'
import { FormCreateCard } from './components/FormCreateCard.jsx'
import cards from './data.json';
import { getSets, saveSets } from './storage';
import React from 'react'

function App() {
  React.useEffect(() => {
    if (getSets().length === 0) {
      saveSets(cards);
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageSelectSet/>}/>
        <Route path='/set/:id' element={<PageViewSet/>}/>
        <Route path='/admin' element={<PageCreateSet/>}>
          <Route path='createset' element={<FormCreateSet/>}/>
          <Route path='createcard' element={<FormCreateCard/>}/>
        </Route>
        <Route path='*' element={<PageSelectSet/>}/>
      </Routes> 
    </BrowserRouter>
  )
}

export default App
