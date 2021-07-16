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

      axios.get("https://cors-anywhere.herokuapp.com/https://www.themealdb.com/api/json/v1/1/filter.php?i=" + this.state.value)
      .then(res => {
        const meals = res.data;
        this.setState({ meals });
        if (res.data.meals != null) {
          this.setState({ redirect: true })
        }
        else {
          alert("No Recipes Found")
          console.log(res.data.meals)
        }
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
          <h5>
            If search is not working please click Proxy Fix to allow a proxy to handle the cor error!
            <br />
            <br />
            <button onClick={() => window.open('https://cors-anywhere.herokuapp.com/corsdemo','_blank')}>Proxy Fix</button>
            </h5>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" onClick={this.apiCall} />
      </div>
    );
  }
}


export default SearchBar;