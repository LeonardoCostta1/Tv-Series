import React from "react";
import { useGetOnlyMovieByCodeQuery } from "../../services/movies";
import { useSelector } from "react-redux";
import "./style.css";
import TitleCategory from "../../components/TitleCategory";

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
              
            <div className="info_container">
         
              <div className="image_container">
              <div className="overlay"></div>
                <img
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data?.backdrop_path}`}
                  alt="cover film"
                />
              </div>
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

                <TitleCategory title="ultimo episódio"></TitleCategory>
                <div className="last_episode_container">
                  <div className="last_ep_title">
                    <span>ultimo episódio :</span>
                    {data?.last_episode_to_air.name}
                  </div>
                  <div className="last_ep_title">
                    <span>lançamento :</span>
                    {data?.last_episode_to_air.air_date}
                  </div>
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
