import "./App.css";
import { useSelector } from 'react-redux'
import Menu from "./components/Menu";
import Popup from "./components/Popup";
import Home from "./pages/Home";
import { Navigate } from "react-router-dom";
function App() {

  const authenticated =  useSelector((state)=>state.login.value)
  if (!authenticated) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <div className="App">
        <Popup />
        <Menu textLogo={"streamreel"} />
        <Home />
      </div>
    );
  }
}

export default App;
