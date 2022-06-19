import React from "react";
import "./Epoch.css"  

const Epoch = ({isLoading,promEpoch, difference }) => {
 
  return (
    <>
      {isLoading ? (
        <h1>Loading .....</h1>
      ) : (
        <>
          <h1>PROMETHEUS TIME : {promEpoch} </h1>
          <h1>
            DIFFERENCE :{difference}
          
          </h1>
        </>
      )}
    </>
    
  );
};

export default Epoch;
