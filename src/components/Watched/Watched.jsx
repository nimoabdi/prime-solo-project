import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

function Watched({shows}) {
const dispatch = useDispatch();
//   const shows = useSelector((store) => store.showsReducer);
  const { id } = useParams();

//   useEffect(() => {
//     dispatch({
//       type: "UPDATE_SHOW",

//     });
//   }, []);

    return (
        <>

         <div>
        
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
        
        </div>
      </>
    )
}
export default Watched;