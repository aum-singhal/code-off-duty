import React,{ Component } from 'react';
import './App.css';
import Form from './form';

const state = [{name: "Help For Cause", email: "", message: "We make your reach to the right person for the right work.", phone: ""}];

class App extends Component {

  card = (p) =>{
    
    return (
        <div>
            <h1>{p.name}</h1>
            <p>{p.message}</p>
            <h3>{p.email}</h3>
            <h3>{p.phone}</h3>
            <br /> <br />
        </div>
    );
    
  }

  onSubmit = fields => {
    state.push(fields);
    console.log(state);
  };

  render() {

    return (
      <div>
        <br/><br/>
        <h1>Create your help post now</h1><br/>
        <Form onSubmit={fields => {this.onSubmit(fields)}}/>
        <br /><br />
        
        {state.map(this.card)}
        
      </div>
    );
  }
};

export default App;