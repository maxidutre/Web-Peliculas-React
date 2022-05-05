import { MovieCard } from "./MovieCard";
import movies from "./movies.json"
import styles from "./MoviesGrid.module.css";

export const MoviesGrid = () => { 
    /*useEffect(() => [
        fetch("/discover/movie", {
            headers: {
                Authorization: ""
            },
        })
    ])*/
    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </ul>
    );
}