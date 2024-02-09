import { BrowserRouter as Router, Route, Routes  } from "react-router-dom"; 
import Navbar from "./Components/Navbar/Navbar";
import Navlist from "./Components/Navbar-list/Navlist";

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/kaviyat.github.io" Component={Navlist}/>
        </Routes>
      </Router>
  );
}

export default App;