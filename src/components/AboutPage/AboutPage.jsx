import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <h3>Technologies Used</h3>
      <ul>
        <ol>React</ol>
        <ol>Redux</ol>
        <ol>Sagas</ol>
        <ol>Material UI</ol>
        <ol>Node</ol>
        <ol>Express</ol>
      </ul>
      <h3>Thank You</h3>
      <ul>
        <ol>Edan</ol>
        <ol> GaimanCohort</ol>
        <ol> Prime Academy</ol>
        <ol> Friends and Family</ol>
      </ul>

     

     
    </div>
  );
}

export default AboutPage;
