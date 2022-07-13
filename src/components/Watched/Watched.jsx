import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Completed from "../Completed/Completed";

function Watched() {
const dispatch = useDispatch();
  const updatedShows = useSelector((store) => store.updatedShows);
useEffect(() => {
    dispatch({
      type: "FETCH_COMPLETED_SHOWS",
    });
  }, []);



    return (
        <div>
            {updatedShows.map((show)=> {
                return <Completed key={show.id} show={show}/>
                    
                
            })

            }
        </div>

    )
}
export default Watched;