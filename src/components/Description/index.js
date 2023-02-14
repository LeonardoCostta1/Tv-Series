import React from "react";
import Button from "../Button";
import "./style.css";
import { useDispatch } from "react-redux";
import { setModalTrue } from "../../services/modalSlice";

function Description({
  genres,
  title,
  overview,
  author,
  duration,
  backdrop,
  id
}) {
  const dispatch = useDispatch();
  const sendToInfoPage = async (code) => {
    await dispatch({ type: "CODE_ID", code });
    dispatch(setModalTrue());
  };
  return (
    <div className="description_wrapper">
      <div className="overlay" />
      <img className="backPoster" src={backdrop} alt="backdrop" />
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
        <Button onClick={() => sendToInfoPage(id)} title={"ver a descrição"} />
      </div>
    </div>
  );
}

export default Description;
