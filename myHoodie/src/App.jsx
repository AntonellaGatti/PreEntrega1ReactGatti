import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";


function App() {
  
  return (
    <div>

      <NavBar />

    
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a My Hoodie!"/> } >Inicio</Route>
        <Route path="/categoria/:id" component={ItemListContainer} />
        <Route path="/item/:id" component={ItemDetailContainer} />
      </Routes>

    </div>
    
  )
}


export default App
