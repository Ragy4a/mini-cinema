import { Component } from 'react'
import './Main.css'
export class Main extends Component {
  render() {
    const { movie } = this.props
    if (!movie) {
      return <main>Select a movie, please</main>
    }
    return (
      <main>
      <h2>{movie.name}</h2>
      <section className="info">
        <div className="img-container">
          <img src={movie.image} alt={`${movie.name} Poster`} />
        </div>
        <section className='text-content'>
          <p>Actors: {movie.actors.map((actor) => {
            return <span key={actor}>{actor}</span>
          })}</p>
            <p id='plot'>Plot: <span>{movie.plot}</span></p>
            <p>Country: <span>{movie.country}</span></p>
            <p>Studio: <span>{movie.studio}</span></p>
            <p>Genre: <span>{movie.genre}</span></p>
            <p>Year: <span>{movie.year}</span></p>
        </section>
      </section>
      </main>
    )
  }
}

export default Main