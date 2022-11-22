import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

function Card({ index, recipe, type }) {
  const { setLoading } = useContext(AppContext);
  const { strMealThumb, strMeal } = recipe;
  const { strDrinkThumb, strDrink } = recipe;
  return (
    <Link
      style={ { textDecoration: 'none' } }
      onClick={ () => setLoading(true) }
      to={ `/${type === '/meals' ? 'meals'
        : 'drinks'}/${type === '/meals' ? recipe.idMeal
        : recipe.idDrink}` }
    >
      <div
        className="card"
        data-testid={ `${index}-recipe-card` }
      >
        <img
          src={ type === '/meals' ? strMealThumb : strDrinkThumb }
          data-testid={ `${index}-card-img` }
          alt="imagem de uma receita"
        />
        <h2
          data-testid={ `${index}-card-name` }
        >
          {type === '/meals' ? strMeal : strDrink}
        </h2>
      </div>
    </Link>
  );
}

Card.propTypes = {
  index: PropTypes.string,
}.isRequired;

export default Card;
