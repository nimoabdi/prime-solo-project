import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Shows from "../Shows/Shows";


function CurrentWatch() {
  const dispatch = useDispatch();
  const shows = useSelector((store) => store.showsReducer);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: "FETCH_SHOWS",

    });
  }, []);

  return (
    <>
    {/* {JSON.stringify(shows)} */}
      <div>
        {shows &&
          shows.map((shows) => {
            // let push = item.show.image && item.show.image.original
            console.log("The list item is:");

            return (
              <>
                <Shows Shows={shows} /> 
                
              </>
              
            );
          })}
      </div>
      <div>
        <button key={shows.id} onClick={()=> history.push(`/search/${shows.id}`)} >
            Search
        </button>
      </div>
    </>
  );
}
export default CurrentWatch;
