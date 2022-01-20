
import { FETCH_POPULATION_START, FETCH_POPULATION_SUCCESS, FETCH_POPULATION_FAILURE } from "../actions/action";

const initialState = {
    population: [0],
    error: '',
    isFetching: false 
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POPULATION_START:
            return {
                ...state,
                error: '',
                isFetching: true,
            }
        case FETCH_POPULATION_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                population: action.payload,
            }    
        case FETCH_POPULATION_FAILURE:
            return {
                ...state,
                error: action.payload, 
                isFetching: false,
            }
        default:
            return {
        ...state,
        }
    }    
}

export default reducer;