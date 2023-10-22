import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer
        tit1="SAUCO INDUMENTARIA"
        tit2="HIGH PERFORMANCE APPAREL"
        tit3="¡BIENVENIDOS!"
      />
    </>
  );
}

export default App;
