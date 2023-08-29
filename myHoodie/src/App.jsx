import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Route, Routes } from "react-router-dom";


function App() {
  
  return (
    <div>

      <NavBar />

    
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a My Hoodie!"/> } >Inicio</Route>
        <Route path="/hoodies">Hoodies</Route>
        <Route path="/remeras">Remeras</Route>
        <Route path="/camperas">Camperas</Route>
      </Routes>

    </div>
    
  )
}


export default App
