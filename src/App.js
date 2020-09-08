import React from 'react';
import Particles from 'react-particles-js';
// import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageForm from './Components/ImageForm/ImageForm'
import Rank from './Components/Rank/Rank';

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }

}


function App() {
  return (
    <div className="App">
      
      <Particles className='particles'
              params={particlesOptions}
      />
      
      <Navigation />
      <Logo/>
      <Rank/>

      <ImageForm/>
      
      {/* <FaceRecognition/> */}
    </div>
  );
}

export default App;
