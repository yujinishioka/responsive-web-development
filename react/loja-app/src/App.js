import { BrowserRouter, Route, Routes } from "react-router-dom"

import ListaProduto from "./components/ListaProduto";
import FormProduto from "./components/FormProduto"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact component = { ListaProduto } />
          <Route path="/incluir" exact component = { FormProduto } />
          <Route path="/editar/:id" exact component = { FormProduto } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;