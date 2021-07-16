import React from 'react'

import { Link } from 'react-router-dom';



import './Meal.css'

const Meal = ({ name = "No Name", image = "No Image", id = "No id" }) => {


    return (
        <section className="card">
            <div className="row">
                <div className="column">
                    <img src={image} className="card-image" />
                    <h1 align><b>{name}</b></h1>
                    <Link to={`/DetailsPage/${id}`} >
                        <button className="btn recipe">Full Recipe</button>
                    </Link>
                </div>

            </div >
        </section>

    )
}



export default Meal