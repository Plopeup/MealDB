import React, { Component } from "react"
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Listing from './listing';



class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', meals: [], redirect: false };

    this.handleChange = this.handleChange.bind(this);
    this.apiCall = this.apiCall.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  apiCall() {
    axios.get(`https://cors-proxy.htmldriven.com/?url=https://www.themealdb.com/api/json/v1/1/filter.php?i=` + this.state.value)
      .then(res => {
        const meals = res.data;
        this.setState({ meals });
        this.setState({ redirect: true })
      })

  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return (<Listing meals={this.state.meals.meals} />)
    }
    return (
      <div>
        <h1>Search Page</h1>

        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" onClick={this.apiCall} />
      </div>
    );
  }
}


export default SearchBar;