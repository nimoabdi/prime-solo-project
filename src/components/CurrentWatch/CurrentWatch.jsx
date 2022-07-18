import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Shows from "../Shows/Shows";
import { Grid, Box } from "@material-ui/core";
import { Container } from "@material-ui/core";


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
    <div>
        <button className="btn btn-block" key={shows.id} onClick={()=> history.push(`/search/`)} >
            Search Series
        </button>
      </div>
    {/* {JSON.stringify(shows)} */}

    <Box mt={5}>
     
         
          
      
      <Grid container spacing={3}
      rowSpacing={3}
      columnSpacing={3}
       >
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
          
      </Grid>
      </Box>
      
      
    </>
  );
}
export default CurrentWatch;
