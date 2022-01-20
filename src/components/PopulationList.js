import React from "react"

const PopulationList = (props) => {
    return (
        <div>{props.population.map(element=>element.year)}</div>

    )
}

export default PopulationList;