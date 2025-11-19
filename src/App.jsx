import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageSelectSet } from './components/PageSelectSet.jsx'
import { PageViewSet } from './components/PageViewSet.jsx'
import { PageCreateSet } from './components/PageCreateSet.jsx'
import './App.css'

function App() {
  return (
    /*<div className="App">
      <Header/>
      <Set />
    </div>*/
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageSelectSet/>}/>
        <Route path='/set' element={<PageViewSet/>}/>
        <Route path='/admin' element={<PageCreateSet/>}/>

        <Route path='*' element={<PageSelectSet/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
