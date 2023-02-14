import React from "react";
import Description from "../../components/Description";
import Sugestion from "../../components/Sugestion";
import { useGetMovieByCodeQuery } from "../../services/movies";
import "./style.css";

function Home() {
  const { data, error, isLoading } = useGetMovieByCodeQuery("119051");

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <div className="home_wrapper">
            <div className="home_container">
              <div className="description_movie_container">
                <Description
                  genres={data?.genres}
                  title={data?.name}
                  overview={data?.overview}
                  author={data?.tagline}
                  duration={data?.release_date}
                  backdrop={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data?.backdrop_path}`}
                  id={data?.id}
                />
              </div>
              <div className="seugestion_home_container">
                <Sugestion />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Home;
