import { useDispatch } from "react-redux";
import { useState } from "react";


function Shows({Shows}) {
    const dispatch = useDispatch();
    

    const handleDelete = ()=>{
        dispatch({
            type:'DELETE_SHOW',
            payload: Shows.id,
        })
        console.log("in the fetch current watch>>>>>>>", Shows.id);
    
    }
    
    return (
        <div>
            <ul>
                <li>
                    Title: {Shows.name}
                    <img src={Shows.image} alt={Shows.title}/>
                </li>
            </ul>
                <button>Add to watched</button>
                <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
export default Shows;