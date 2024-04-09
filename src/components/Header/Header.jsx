import { Component } from 'react'
import './Header.css'

export class Header extends Component {
  render() {
    const { movies, onMovieSelect } = this.props;
    return (
      <header>
        <h2>Mini-Cinema</h2>
        <nav>
            <ul>
                {movies.map((movie) => {
                  return (
                    <li 
                    key={movie.id} 
                    onClick={() => {
                      onMovieSelect(movie.id)
                    }}>{movie.name}</li>
                  )
                })}
            </ul>
        </nav>
      </header>
    )
  }
}

export default Header