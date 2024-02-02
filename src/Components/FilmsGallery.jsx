//http://www.omdbapi.com/?apikey=metti-qui-la-api-key&s=Star Wars

import { Component } from "react";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

class FilmsGallery extends Component {
 state = {
  arrayFilms: [],
  isLoading: true,
 };

 fetchFilms = () => {
  fetch(this.props.url)
   .then((response) => {
    if (response.ok) {
     return response.json();
    } else {
     throw new Error("Errore nel recupero dati");
    }
   })
   .then((objOfFilms) => {
    this.setState({
     arrayFilms: objOfFilms.Search,
     isLoading: false,
    });
   })

   .catch((err) => {
    console.log(err);
    this.setState({
     isLoading: false,
    });
   });
 };

 componentDidMount() {
  this.fetchFilms();
 }

 render() {
  console.log(this.state.arrayFilms);
  return (
   <>
    {this.state.isLoading ? (
     <Spinner animation="grow" />
    ) : (
     this.state.arrayFilms.map((film) => (
      <Col key={film.imdbID}>
       <img className="img-thumbnail" src={film.Poster} alt="immagine film" />
      </Col>
     ))
    )}
   </>
  );
 }
}
export default FilmsGallery;
