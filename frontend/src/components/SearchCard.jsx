import React from "react";

export default function SearchCard(props){
    return (
        <main className="search-card">
            <img src={props.image} className="search-card-image" />
            <div className="headers">
                <h3>{props.name}</h3>
                <h3>{props.artist}</h3>
            </div>

        </main>
    )
}