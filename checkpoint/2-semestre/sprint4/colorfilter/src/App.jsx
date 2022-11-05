import{ BrowserRouter, Routes, Route} from 'react-router-dom'
import FormVagas from './components/FormVagas'
import ListaVagas from './components/ListaVagas'

export default function App(){

    return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaVagas/>}/>
          <Route path='/incluir' element={<FormVagas/>}/>
          <Route path='/editar/:id' element={<FormVagas/>}/>
        </Routes>
      </BrowserRouter>
    )

}