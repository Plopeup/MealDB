import React from 'react'
import axios from 'axios';
import './DetailsPage.css'

class DetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { redirect: false };
        this.id = this.props.match.params.id
        this.ingredients = []
        this.getData = this.getData.bind(this)
    }

    getData() {
        if (this.state.redirect) {
            return
        }
        axios.get("https://cors-anywhere.herokuapp.com/https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + this.id)
            .then(res => {
                let recipe = res.data;
                let ingredients = [];
                for (var key in recipe.meals[0]) {
                    if (key.includes("Ingredient") && recipe.meals[0][key] !=="") {
                        ingredients.push(recipe.meals[0][key])
                    }
                }
                recipe = recipe.meals[0]
                this.title = recipe.strMeal
                this.category = recipe.strCategory
                this.image = recipe.strMealThumb
                var temp = ''
                for (var i = 0; i < ingredients.length; i++){ 
                    temp +=  ingredients[i] + ', ';
                }
                this.ingredients = temp.slice(0,-2)
                this.instructions = recipe.strInstructions
                let video = recipe.strYoutube
                this.video = video.replace('watch?v=', 'embed/')
                this.setState({ redirect: true })
            })
    }

    render() {
        return (
            <div className = "center">
                {this.getData()}
                <h1>Details Page: {this.title}</h1>
                <h3>Category: {this.category}</h3>
                <img src={this.image} width="420" height="315" />
                <iframe width="420" height="315"
                    src={this.video}>
                </iframe>
                <p>Ingredients: {this.ingredients}</p>
                <h3>Instructions: </h3>
                <span className = "textover">{this.instructions}</span>

            </div>
        )
    }
}

export default DetailsPage;