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
      payload: id,
    });
    console.log("in the fetch current watch>>>>>>>");
  }, []);

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
      <div>
        {shows &&
          shows.map((shows) => {
            // let push = item.show.image && item.show.image.original
            console.log("The list item is:");

            return (
              <>
                <div>
                  <div>
                    <ul>
                      <li>
                        Title: {shows.name}
                        <img src={shows.image} />
                      </li>
                    </ul>
                    <button
                    name={shows.name}
                    image={shows.push}
                    onClick={Watched}
                    >Move to watched</button>
                    <button>Delete</button>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}
export default CurrentWatch;
