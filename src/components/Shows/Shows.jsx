import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";

function Shows({ Shows }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = () => {
    dispatch({
      type: "DELETE_SHOW",
      payload: Shows.id,
    });
    console.log("in the fetch current watch>>>>>>>", Shows.id);
  };
  const Watched = (event) => {
    swal({
      title: "Added to watched 👍",
      text: "Nice",
      icon: "success",
    });
    const name = event.target.getAttribute("name");
    const image = event.target.getAttribute("image");
    dispatch({
      type: "CURRENT_WATCH",
      payload: {
        name,
        image,
      },
    });
    // history.push('/watchedlist')
    console.log("showsReducer------>", Shows);
  };

  return (
    <div>
      <ul>
        <li>
          Title: {Shows.name}
          <img src={Shows.image} alt={Shows.title} />
        </li>
      </ul>
      <button className="btn btn-block" onClick={handleDelete}>
        Delete
      </button>
      <button className="btn btn-block" onClick={Watched}>
        add to watched
      </button>
    </div>
  );
}
export default Shows;
