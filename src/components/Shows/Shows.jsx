import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";


function Shows({Shows}) {
    const dispatch = useDispatch();
    const history = useHistory();
    

    const handleDelete = ()=>{
        dispatch({
            type:'DELETE_SHOW',
            payload: Shows.id,
        })
        console.log("in the fetch current watch>>>>>>>", Shows.id);
    
    }
    const Watched = (event) => {
        const name = event.target.getAttribute("name");
        const image = event.target.getAttribute("image");
        dispatch({
          type: "CURRENT_WATCH",
          payload: {
            name,
            image
          },
        });
        history.push('/watchedlist')
        console.log("showsReducer------>", Shows);
      };
    
    return (
        <div>
            <ul>
                <li>
                    Title: {Shows.name}
                    <img src={Shows.image} alt={Shows.title}/>
                </li>
            </ul>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={Watched}> add to watch</button>

        </div>
    )
}
export default Shows;