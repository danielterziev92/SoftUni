import movies from "../assets/movies.js";

export default function Navigation() {
    return (
        <section>
            <h2>Movie List</h2>
            <ul>
                {
                    movies.map((movie, index) => (
                        <li key={index}>
                            <ul>
                                <li>Movie: {movie.movie}</li>
                                <li>Directed By: {movie.directedBy}</li>
                                <li>Release Date: {movie.releaseDates.toDateString()}</li>
                                <li>Running Time: {movie.runningTime}</li>
                            </ul>
                        </li>
                    ))}
            </ul>
        </section>
    )
}