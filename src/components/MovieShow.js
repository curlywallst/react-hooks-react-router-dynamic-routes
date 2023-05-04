import React from "react";
import { Route, useParams } from "react-router-dom";

function MovieShow() {
    const {id} = useParams()
    return (
        <div>
        <h3>Movies Show Component! For Movie {id}</h3>
        </div>
    );
}

export default MovieShow;