import React from 'react';



class App extends React.Component{
  

  state = {
    head:'Hello world' ,
    red:"zila tex"
  }

  
  render(){
    
    let Asm = ()=>
    alert("tum ho")
    
    
    return(
      <div>
        <h1>Asif ne kaha hai {this.state.head}</h1>
        <h1 onClick={Asm}>
          {this.state.red}
        </h1>
        <p>hhhhhhhhhhhhhhhhh</p>
        
      </div>
    )
  }
}

export default App;

