import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, useHistory } from 'react-router-dom';

function Carousel(props) {
  const history = useHistory();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const { recommendationList } = props;

  const handleNext = () => {
    const upperLimit = 4;
    if (carouselIndex < upperLimit) {
      setCarouselIndex((prevState) => (prevState + 2));
    } if (carouselIndex === upperLimit) {
      setCarouselIndex(0);
    }
  };

  const handleBack = () => {
    const lowerLimit = 0;
    const upperLimit = 4;
    if (carouselIndex > lowerLimit) {
      setCarouselIndex((prevState) => (prevState - 2));
    } if (carouselIndex === lowerLimit) {
      setCarouselIndex(upperLimit);
    }
  };

  const urlHelper = () => {
    const url = history.location.pathname.split('/');
    return (url[1] === 'meals') ? 'drinks' : 'meals';
  };

  const handleHidden = (aIndex) => (
    aIndex === carouselIndex || aIndex === carouselIndex + 1);

  return (
    <Box
      component="section"
      sx={ {
        margin: '5px 10px 50px 10px' } }
    >
      <Typography
        variant="h5"
        sx={ { padding: '10px 20px', fontWeight: '700' } }
      >
        Recommendation
      </Typography>

      <Box sx={ { display: 'flex', alignItems: 'center' } }>
        <IconButton
          className="btn btn-primary mx-2"
          type="button"
          onClick={ handleBack }
        >
          <ArrowBackIcon color="primary" />
        </IconButton>
        {recommendationList
          .map(({ name, image, id }, i) => (
            <Link to={ `/${urlHelper()}/${id}` } key={ name }>
              <Paper
                elevation={ 3 }
                sx={ { borderRadius: '5px' } }
                className="mx-2 text-center"
                hidden={ !handleHidden(i) }
                name={ name }
                data-testid={ `${i}-recommendation-card` }
              >
                <img
                  className="img-thumbnail"
                  src={ image }
                  alt={ name }
                />
                <p data-testid={ `${i}-recommendation-title` }>
                  {name}
                </p>
              </Paper>
            </Link>
          ))}
        <IconButton
          className="btn btn-primary"
          type="button"
          onClick={ handleNext }
        >
          <ArrowForwardIcon color="primary" />
        </IconButton>
      </Box>

    </Box>
  );
}

Carousel.propTypes = { recommendationList: PropTypes.shape() }.isRequired;

export default Carousel;
