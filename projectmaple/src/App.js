import "./App.css";
import Navbaroverlay from "./Navbar-overlay";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbaroverlay />
      <Navbar className="Auth-navbar" />
    </div>
  );
}

export default App;
