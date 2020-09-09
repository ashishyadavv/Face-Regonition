import React from 'react';
import Particles from 'react-particles-js';
// import logo from './logo.svg';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageForm from './Components/ImageForm/ImageForm'
import Rank from './Components/Rank/Rank';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({apiKey: 'b32b0e868cf54334b2113d826cab55df'}); 



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


class App extends React.Component {

  constructor(props){
    super();
    this.state ={
      input: ' ',
      imageurl:' '
    }
  }
 
  onInputChange =(event)=>{
    this.setState({input : event.target.value})
  }
  onSubmit =()=>{
    this.setState({imageurl:this.state.input})
    
    app.models.predict(Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
        .then(response => {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        })
        .catch(err => {
          console.log(err);
        });

   }


  render(){
    return (
      <div className="App">
        
        <Particles className='particles'
                params={particlesOptions}
        />
        
        <Navigation />
        <Logo/>
        <Rank/>
  
        <ImageForm change={this.onInputChange} buttonSubmit={this.onSubmit}/>
        
        <FaceRecognition imageurl={this.state.imageurl}/>
      </div>
    );

  }
  
}

export default App;
