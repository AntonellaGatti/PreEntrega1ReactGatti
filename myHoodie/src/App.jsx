import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import CartContextProvider from "./components/Context/CartContextProvider";
import CheckOut from "./components/Cart/CheckOut";


function App() {
  
  return (
    <CartContextProvider>

      <NavBar />

    
      <Routes>
        <Route path="/" element={<ItemListContainer/> } >Inicio</Route>
        <Route path="/categoria/:idCategoria"  element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route />

      </Routes>

    </CartContextProvider>
    
  )
}


export default App
