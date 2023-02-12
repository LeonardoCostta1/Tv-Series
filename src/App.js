import "./App.css";
import Menu from "./components/Menu";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Menu textLogo={'streamreel'} />
      <Home />
    </div>
  );
}

export default App;
