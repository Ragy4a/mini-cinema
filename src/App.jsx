import { Component } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import gladiatorImg from './assets/movies/logos/gladiator-logo.png';
import lotrImg from './assets/movies/logos/lotr-logo.png';
import inceptionImg from './assets/movies/logos/inception-logo.png';
import { nanoid } from 'nanoid'
import './App.css'



export class App extends Component {

  state = {
    movies: [
      {
        name: 'Gladiator',
        id: nanoid(),
        plot: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
        actors: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen', 'Oliver Reed'],
        country: 'USA',
        studio: 'DreamWorks',
        genre: 'Action, Drama, Historical',
        year: 2000,
        image: gladiatorImg,
      },
      {
        name: 'LOTR',
        id: nanoid(),
        plot: 'A meek Hobbit and eight companions set out on a journey to destroy the powerful One Ring and save Middle Earth from the Dark Lord Sauron.',
        actors: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom', 'Viggo Mortensen'],
        country: 'New Zealand',
        studio: 'New Line Cinema',
        genre: 'Adventure, Fantasy',
        year: 2001,
        image: lotrImg,
      },
      {
        name: 'Inception',
        id: nanoid(),
        plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
        actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page', 'Tom Hardy'],
        country: 'USA',
        studio: 'Warner Bros',
        genre: 'Action, Adventure',
        year: 2010,
        image: inceptionImg,
      }
    ],
    selectedMovie: null,
  }

  selectMovie = (movieId) => {
    const movie = this.state.movies.find(movie => movie.id === movieId);
    this.setState({ selectedMovie: movie });
  }

  render() {
    return (
      <>
      <Header 
        movies={this.state.movies}
        onMovieSelect={this.selectMovie}
      />
      <Main 
        movie={this.state.selectedMovie}
      />
      <Footer />
      </>
    )
  }
}

export default App