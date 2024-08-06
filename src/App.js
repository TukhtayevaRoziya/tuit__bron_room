import Register from "./components/register/Register";

import "./App.css";
import { useLocation } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  let location = useLocation();

  console.log(location)
  return (
    <div className="App">
      {location.pathname !== '/home' ?   <Register /> : <Home />}
    
    </div>
  );
}

export default App;
