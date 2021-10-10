import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      locations:[
        {name:"Bali",votes:0},
        {name:"london",votes:0},
        {name:"Berlin",votes:0},
        {name:"Belgium",votes:0},
      ],
    };
  }
vote(i){
     let newLocation=[...this.state.locations];
     newLocation[i].votes++;

     this.setState({locations:newLocation});
 
}


  render(){
    return(
      <div>
      <h1>vote for your Destination</h1>
      <div className="locations">
      
          {this.state.locations.map((loc,i) => (
            <div key={i} className="location">
            <div className="voteCount">{loc.votes}</div>
            <div className="locationName">{loc.name}</div>
            <button onClick={this.vote.bind(this,i)}>click</button>
           </div>
          ))}
      </div>
      </div>

    );
  }
}

export default App;
