import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import DetailPage from './page/detailPage/DetailPage'
import MainPage from './page/mainPage/MainPage'
import ProductPage from './page/productPage/ProductPage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/productPage' element={<ProductPage/>}/>
        <Route path='/product-details/:id' element={<DetailPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
