import "./App.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons-font/dist/bootstrap-icons-font.min.css";
import CloneFixNavbar from "./Components/CloneFlixNavbar";
import CloneFlixGenresNavBar from "./Components/CloneFlixGenresNavBar";
import { Container, Row } from "react-bootstrap";
import FilmsGallery from "./Components/FilmsGallery";
import CloneFlixFooter from "./Components/CloneFlixFooter";

//http://www.omdbapi.com/?apikey=59396482&s=Star Wars

function App() {
 return (
  <div className="App">
   <Container fluid className="px-4 bg-dark text-white">
    <header>
     <CloneFixNavbar />
     <CloneFlixGenresNavBar />
    </header>
    <main>
     <h4>Trending Now</h4>
     <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 g-3 mb-4">
      <FilmsGallery url="http://www.omdbapi.com/?apikey=59396482s=Comedy" />
     </Row>
     <h4>Watch it Again</h4>
     <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 g-3 mb-4">
      <FilmsGallery url="http://www.omdbapi.com/?apikey=59396482&s=Pixar" />
     </Row>
     <h4>New Releases</h4>
     <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 g-3 mb-4">
      <FilmsGallery url="http://www.omdbapi.com/?apikey=59396482&s=Action" />
     </Row>
    </main>

    <footer>
     <CloneFlixFooter />
    </footer>
   </Container>
  </div>
 );
}

export default App;
