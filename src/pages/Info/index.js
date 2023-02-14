import React from "react";
import { useGetOnlyMovieByCodeQuery } from "../../services/movies";
import { useSelector } from "react-redux";
import "./style.css";

function Info() {
  const code = useSelector((state) => state.code);

  const { data, error, isLoading } = useGetOnlyMovieByCodeQuery(code);

  return (
    <div className="info_wrapper">
      <>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <div className="top_image_container">
              <div className="overlay"></div>
              <img
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data?.backdrop_path}`}
                alt="cover film"
              />

              <div className="content_info_container">
                <div className="genres_container">
                  {data?.genres.map((genres) => {
                    return (
                      <div key={genres.id} className="genres">
                        {genres.name}
                      </div>
                    );
                  })}
                </div>

                <div className="title_info">{data?.name}</div>

                <div className="overview_info">{data?.overview}</div>

                <div className="container_other_infos">
                  <span>numero de epsiodios: </span>
                  {data?.number_of_episodes} <span>popularidade: </span>
                  {data?.popularity} <span>votos: </span>
                  {data?.vote_average} <span>idioma: </span>
                  {data?.original_language}
                  <span>lançamento: </span>
                  {data?.first_air_date}
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
    </div>
  );
}

export default Info;
