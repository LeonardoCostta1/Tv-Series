import React from "react";
import Cover from "../Cover";
import Button from "../Button";
import "./style.css";

function Description({ genres, title, overview, author, duration, backdrop }) {
  return (
    <div className="description_wrapper">
      <div className="description_inforamtion_container">
        <div className="genres_container">
          <div className="backdrop">
            <img src={backdrop} alt="backdrop" />
          </div>
          {genres?.map((genre) => {
            return (
              <div key={genre.id} className="genre">
                {genre.name}
              </div>
            );
          })}
        </div>

        <div className="title">{title}</div>
        <div className="overview">{overview}</div>
        <div className="author_and_release_date">
          Criado por: {author} {duration}
        </div>
        <Button title={'assista agora'}/>
      </div>
      <div className="description_cover_container">
        <Cover backdrop={backdrop}/>
      </div>
    </div>
  );
}

export default Description;
