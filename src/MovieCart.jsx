import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
            <div className="movie">
                <div>
                    <p>{movie.Year}</p>
                </div>
                <div>
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : '/Poster.png'} onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/Poster.png";
                    }} alt={movie.Title} />
                </div>
                <div>
                    <span>{movie.Type}</span>
                    <h3>{movie.Title}</h3>
                </div>
            </div>

        </div>
    );
}

export default MovieCard;