import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";


function App() {
  
  return (
    <div>

      <NavBar />

    
      <Routes>
        <Route path="/" element={<ItemListContainer/> } >Inicio</Route>
        <Route path="/categoria/:idCategoria"  element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemListContainer/>} />
      </Routes>

    </div>
    
  )
}


export default App
