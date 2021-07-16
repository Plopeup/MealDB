import React, { Component } from "react"
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Meal from './Meal'
import PropTypes from 'prop-types'


class Listing extends React.Component {
  static defaultProps = {
    meals : [
      {"strMeal": "", "strMealThumb": "", "idMeal": ""} 
    ]
  }

  render() {

    const {meals} = this.props

    
    return (
      <div>
        <h1>Search Results (Listings Page)</h1>
        {meals.map(
          (meal, i) =>
          <div>
            <Meal
              key = {i}
              name = {meal.strMeal}
              image = {meal.strMealThumb} />
          </div>
        )}
      </div>

    );
  }
}

Listing.propTypes = {
  meals: PropTypes.array
}

Meal.propTypes = {
  strMeal: PropTypes.string,
  strMealThumb: PropTypes.string,
  idMeal: PropTypes.string
}

export default Listing;