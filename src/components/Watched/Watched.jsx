import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

function Watched() {

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
    
}
export default Watched;