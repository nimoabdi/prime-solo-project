import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Completed from "../Completed/Completed";
import ShowRating from "../Rating/Rating";
import { Stack} from '@mui/material'

function Watched() {
  const dispatch = useDispatch();
  const updatedShows = useSelector((store) => store.updatedShows);
  const shows = useSelector((store) => store.showsReducer);

  useEffect(() => {
    dispatch({
      type: "FETCH_COMPLETED_SHOWS",
    });
    console.log("updated>>>>>>>>>>>>>", updatedShows);
  }, []);

  return (
    <div>
      {updatedShows.map((show) => {
        <ShowRating />
        return <Completed key={show.id} show={show} />
        
      })}
    </div>

  );
  
}
export default Watched;
