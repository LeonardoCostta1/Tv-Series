import React from "react";
import Button from "../Button";
import "./style.css";
import { useDispatch } from "react-redux";
import { setModalTrue } from "../../services/modalSlice";
import { useGetMovieByCodeQuery } from "../../services/movies";

function Description() {
  const { data, error, isLoading } = useGetMovieByCodeQuery("100088");

  const dispatch = useDispatch();

  const sendToInfoPage = async (code) => {

    await dispatch({ type: "CODE_ID", code });

    dispatch(setModalTrue());
  };
  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <div className="description_wrapper">
            <div className="overlay" />
            <img
              className="backPoster"
              src={`https://art-gallery-latam.api.hbo.com/images/default-6398a1a2e34d07002b91bd12$$$979689d207d0198eeff16bbf8beeba67$$$latam/tile?v=db746dc2dfd1c91b8823035848d2744f&format=png&size=1920x1080&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&language=pt-br`}
              alt="backdrop"
            />
            <div className="description_inforamtion_container">
              <div className="genres_container">
                <div className="backdrop">
                  <img
                    src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data?.backdrop_path}`}
                    alt="backdrop"
                  />
                </div>
                {data?.genres.map((genre) => {
                  return (
                    <div key={genre.id} className="genre">
                      {genre.name}
                    </div>
                  );
                })}
              </div>

              <div className="title">{data?.name}</div>
              <div className="overview">
                {data?.overview.substring(0, 150)}...
              </div>
              <div className="author_and_release_date">
                <div className="created_text">Criado por :</div>
                {data?.created_by.map((author, index) => {
                  return (
                    <div key={index} className="author_name">
                      {author.name}
                    </div>
                  );
                })}
              </div>

              <Button
                onClick={() => sendToInfoPage(data?.id)}
                title={"descrição"}
              />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
export default Description;
