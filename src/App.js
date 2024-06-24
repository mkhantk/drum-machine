// import logo from './logo.svg';
import React from 'react';
import './App.css';
const keys = [
  {key: 'Q', name: 'Heater1'},
  {key: 'W', name: 'Heater2'}, 
  {key: 'E', name: 'Heater3'},
  {key: 'A', name: 'Heater4'},
  {key: 'S', name: 'Clap'},
  {key: 'D', name: 'Open-HH'},
  {key: 'Z', name: 'Kick-n-Hat'},
  {key: 'X', name: 'Kick'},
  {key: 'C', name: 'Closed-HH'},
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount(){
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown(e) {
    let keyPressed = (e.key).toUpperCase();
    let onlyKeys = keys.map((e) => e.key)
    // console.log(onlyKeys)
    if (onlyKeys.includes(keyPressed)) {
      document.getElementById(keyPressed).play();
      

      let keyname = keys.filter((e) => e.key === keyPressed)
      // console.log(keyname[0].name)
      this.setState({
        display: keyname[0].name
      })
      document.getElementById(keyname[0].name).classList.add('myActive');
      // document.getElementById(keyname[0].name).classList.remove('myActive')
      setTimeout(() => {
        document.getElementById(keyname[0].name).classList.remove('myActive');
      }, 200);
      
      
    }

    //now the last part is to make the name of the key press appear 

    
    
    // console.log(e/)
    //there seems to be some delay on keydown. gotta figure out0
  }
  handleClick(e) {
    document.getElementById(e.target.innerText).play();
    this.setState( {
      display : e.target.id
    })
    // console.log(this.state.display)
  }
  render (){
    return(
      <div className='flex justify-center items-center min-h-screen'>
        <div id='drum-machine' className='container flex flex-col justify-between items-center md:flex-row w-[350px] md:w-[550px] h-1/2 md:h-[350px] p-5 bg-slate-400 rounded-md'>
          <div id='drum-pads' className='flex flex-row flex-wrap w-[310px] h-[310px] gap-5 p-3.5 bg-slate-900 rounded-md ' >
            <button id='Heater1' className='custom-class drum-pad' onClick={this.handleClick} >
              Q
              <audio id='Q' className='clip' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3'></audio>
            </button>
            <button id='Heater2' className='custom-class drum-pad' onClick={this.handleClick}>
              W
              <audio id='W' className='clip' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3'></audio>
            </button>
            <button id='Heater3' className='custom-class drum-pad' onClick={this.handleClick}>
              E
              <audio id='E' className='clip' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3'></audio>
            </button>
            <button id='Heater4' className='custom-class drum-pad' onClick={this.handleClick}>
              A
              <audio id='A' className='clip' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3'></audio>
            </button>
            <button id='Clap' className='custom-class drum-pad' onClick={this.handleClick}>
              S
              <audio id='S' className='clip' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3'></audio>
            </button>
            <button id='Open-HH' className='custom-class drum-pad' onClick={this.handleClick}>
              D
              <audio id='D' className='clip' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3'></audio>
            </button>
            <button id='Kick-n-Hat' className='custom-class drum-pad' onClick={this.handleClick}>
              Z
              <audio id='Z' className='clip' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3'></audio>
            </button>
            <button id='Kick' className='custom-class drum-pad' onClick={this.handleClick}>
              X
              <audio id='X' className='clip' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3'></audio>
            </button>
            <button id='Closed-HH' className='custom-class drum-pad' onClick={this.handleClick}>
              C
              <audio id='C' className='clip' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3'></audio>
            </button>
          </div>
          <div id='display' className='flex flex-col justify-center items-start p-5 h-full gap-5 flex-wrap'>
            <h1 className='text-2xl font-bold'>Drum Machine</h1>
            <div>current key: {this.state.display}</div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
