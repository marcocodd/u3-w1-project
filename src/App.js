import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import CloneFixNavbar from "./Components/CloneFlixNavbar";
import GenresNavBar from "./Components/GenresNavBar";

function App() {
 return (
  <div className="App">
   <header>
    <CloneFixNavbar />
    <main className="bg-dark text-white px-4">
     <GenresNavBar />
    </main>
   </header>
  </div>
 );
}

export default App;
