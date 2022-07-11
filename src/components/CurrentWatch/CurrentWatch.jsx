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

//   const handleDelete = ()=>{
//     dispatch({
//         type:'DELETE_SHOW',
//         payload: id,
//     })
//     console.log("in the fetch current watch>>>>>>>", );

// }


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
    console.log("showsReducer------>", shows);
  };

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
    </>
  );
}
export default CurrentWatch;
