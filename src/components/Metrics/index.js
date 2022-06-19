import React from "react";
import "./Metrics.css"

const Metrics = ({isLoading, getMetrics}) => {

    return(
        <>
      {isLoading ? (
        <h1>Loading .....</h1>
      ) : (
        <div>
            <h1> PROMETHEUS METRICS</h1>
           
            {getMetrics}
        </div>
      )}
    </>
    )
}

export default Metrics;