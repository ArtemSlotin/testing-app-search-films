import React from "react";
import { DetailsOfFilm } from "./DetailsOfFilm";

const DetailsContainer = ({ details }) => {

  return (
      <div className="layout">
        <div className="film_container">
          <div className="film_title">{details.Title}</div>
          <div className="film_information">
            <div className="film_poster">
              <img src={details.Poster !== "N/A" ? details.Poster : 'https://www.2queue.com/wp-content/uploads/tdomf/4299/movie-poster-coming-soon.png' } alt={details.Title} />
            </div>
            <div className="film_data">
              <ul>
                <DetailsOfFilm details={details}/>
               {/* {Object.entries(details).map(([key, value]) => (
                 value !== 'N/A' && typeof value === 'string' ? (<li key={key}>
                    <span className="data_keys">{`${key} :`}</span> <span className="data_values"> {value}</span>
                    </li>) : null
              ))} */}
              </ul>
            </div>
          </div>
        </div>
      </div>)
}

export {DetailsContainer}