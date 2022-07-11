import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

function Watched() {
    const dispatch = useDispatch();
  const shows = useSelector((store) => store.showsReducer);
  const { id } = useParams();

    useEffect(() => {
        dispatch({
          type: "FETCH_SHOWS",
          payload: id,
        });
        console.log("in the fetch current watch>>>>>>>");
      }, []);

    return (
        <>
        
         <div>
        {

          shows.map((shows) => {
            // let push = item.show.image && item.show.image.original
            console.log("The list item is:");
            return (
                <>
          <div>
          {shows.watched === true ?
                  <div>
                    <ul>
                      <li>
                        Title: {shows.name}
                        <img src={shows.image} />
                      </li>
                    </ul>

                  </div>
                  : <h1>Works</h1>  
                }
                </div>
              </>
            );
        })}
        </div>
      </>
    )
}
export default Watched;