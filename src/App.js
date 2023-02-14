import "./App.css";
import Menu from "./components/Menu";
import Popup from "./components/Popup";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Popup/>
      <Menu textLogo={'streamreel'} />
      <Home />
    </div>
  );
}

export default App;
