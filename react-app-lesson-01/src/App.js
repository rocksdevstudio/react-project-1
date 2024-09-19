import React from 'react';
import Greeting from "./Greeting";
import Footer from './Footer';

function App () {
  return (
    <div>
      <Greeting name="Rock" />
      <p>I love FE dev</p>
      <Footer message="Peace and Love"/>
    </div>
  );
}


export default App;