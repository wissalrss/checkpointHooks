import React from "react";


const  Filter = (props) =>{
    return(
        <>
    <input type="text" name="nameMovie" onChange={(e)=>props.handelChangeEvent(e.target.value)} />
        </>
        );
}
export default Filter;