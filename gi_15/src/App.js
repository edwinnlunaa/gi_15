import React, { Component } from 'react';
import BasicInfo from './BasicInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        Name: 'Edwin Luna',
        Phone : '704-999-2330',
        Email: 'edwinlunadlg@gmail.com',
        DateOfBirth: '09-30-1999',
        Occupation: 'Coding Apprentice'
      }
    };
  }

  render() {
    return (
      <div>
        <BasicInfo person={this.state.person} />
      </div>
    );
  }
}

export default App;
