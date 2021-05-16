import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

// Award component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

const MovieDetail = () => {
  // used to have access to the url calling the <MovieDetail /> tag.
  const history = useHistory();
  const url = history.location.pathname;

  //   States
  //   Array of movie objects.
  // here we can remove setMovies.
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //   UseEffect - executes everytime the <MovieDetail /> tag is rendered/mounted
  //   i.e everytime the url changes
  // using the url calling the <MovieDetail /> to find the currentMovie movie
  //   from the MovieState(function returning an array).
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    // most important part. setting the movie will let us to access the current
    // movie object using movie state.
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {/* checks if the movie is available i.e. not equal to null, then renders the movie details */}
      {/* Short ciruit condition */}
      {movie && (
        <Details>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>

          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>

          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay>
        </Details>
      )}
    </motion.div>
  );
};

// Styled components

const Details = styled.div`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    z-index: 1;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    /* position: absolute;
    top: 0; */
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1500px) {
    display: block;
    margin: 5rem 5rem;
    text-align: center;
  }
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default MovieDetail;
