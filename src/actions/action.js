
import axios from "axios";

export const FETCH_POPULATION_START = 'FETCH_POPULATION_START';
export const FETCH_POPULATION_SUCCESS = 'FETCH_POPULATION_SUCCESS';
export const FETCH_POPULATION_FAILURE = 'FETCH_POPULATION_FAILURE';


export const addPopulation = () => dispatch => {
    dispatch({ type: FETCH_POPULATION_START });
    axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
        .then(resp => {
            dispatch({type: FETCH_POPULATION_SUCCESS, payload: resp.data.data })
        })
        .catch(err => {
            console.log(err.response);
            dispatch({ 
                type: FETCH_POPULATION_FAILURE, 
                payload: `${err.response.status} ${err.response.data}`})
        });

};

