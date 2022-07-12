import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

function Watched({shows}) {
const dispatch = useDispatch();
//   const shows = useSelector((store) => store.showsReducer);
  const { id } = useParams();



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
                  : <h1>not working</h1>  
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