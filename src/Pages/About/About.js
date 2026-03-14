
import "./AboutMe.css";

function AboutMe() {
  const favoriteMovies = [
    {
      title: "Inception",
      year: 2010,
      description: "A mind-bending sci-fi thriller by Christopher Nolan.",
    },
    {
      title: "The Godfather",
      year: 1972,
      description: "A legendary mafia crime film directed by Francis Ford Coppola.",
    },
    {
      title: "Interstellar",
      year: 2014,
      description: "An epic space exploration film about love, time, and survival.",
    },
  ];

  return (
    <div className="about-container">
      <h1 className="about-title">Our Movies</h1>
      <p className="about-description">
        Hello! I'm a movie enthusiast who loves exploring different genres of cinema.
        Whether it's classic crime films, thought-provoking sci-fi, or emotional dramas,
        movies are my passion and source of inspiration.
      </p>

      <section className="movies-section">
        <h2>🎬 Favorite Movies</h2>
        <ul className="movies-list">
          {favoriteMovies.map((movie, index) => (
            <li key={index} className="movie-item">
              <h4>{movie.title} <span>({movie.year})</span></h4>
              <p>{movie.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AboutMe;
