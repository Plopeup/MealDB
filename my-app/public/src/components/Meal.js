import React from 'react'
import axios from 'axios';
import './Meal.css'

const Meal = ({ name = "No Name", image = "No Image", id="No id"}) => {
    return (
        <section className="card">
            <div className="row">
                <div className="column">
                    <img src={image} className="card-image" />
                    <h1 align><b>{name}</b></h1>
                    <button className ="btn recipe" onClick = {Details}>Full Recipe</button>
                </div>

            </div >
        </section>

    )
}

const Details = ({text}) => {
    let apireturn = false;
    const recipe = "";

}

export default Meal