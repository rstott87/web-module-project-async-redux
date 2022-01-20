import React from "react";
import { connect } from "react-redux";
import { addPopulation } from "../actions/action";
import PopulationList from "./PopulationList";

const mapStateToProps = (state) => {
    return {
        population: state.population,
        error: state.error,
        isFetching: state.isFetching
    }
  };

const Population = (props) => {
    const fetchPopulation = e => {
        e.preventDefault();
        props.addPopulation();
        
    }
   
   console.log(props.population);
    return (
        <div>
            <h2>Population</h2>
            {props.isFetching && <p>Fetching your Population</p>}
            <div>
                {props.population.map(element => (

                <div>{` Year: ${element.Year} Population: ${element.Population}`}</div>
                ))}
            </div>
            <button onClick={fetchPopulation}> Click To Get Population </button>
            <PopulationList population={props.population} />
        </div>
    )
 } 



 export default connect(mapStateToProps,{ addPopulation }) (Population);