import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/store'

// Components
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import NoteFound from './components/NotFound/NoteFound'
import Footer from './components/Footer/Footer'

function App() {
  document.title = 'OMDb API'
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <div className='header'>
            <Header />
          </div>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/movie/:id' element={<MovieDetail />} />
              <Route path='*' element={<NoteFound />} />
            </Routes>
          </div>
          <div className='footer'>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
