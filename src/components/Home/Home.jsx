import './Home.css'
import React from 'react';
import soloprov from '../assets/soloprov.mp4'

function Home (){

    return(
        <div className='homepage'>
            <video src={soloprov} autoPlay loop muted />
        </div>
    )
}
export default Home;