import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

function Completed({show}) {
    const dispatch = useDispatch();

    return (
        <div>
            Title: {show.name}
            <img className= "img" src={show.image} alt={show.title} />

        </div>
    )
}
export default Completed;