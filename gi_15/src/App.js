import React, { Component } from 'react';
import BasicInfo from './BasicInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
        Name: 'Edwin Luna',
        Phone : '704-999-2330',
        Email: 'edwinlunadlg@gmail.com',
        DateOfBirth: '09-30-1999',
        Occupation: 'Coding Apprentice'
      },
      {
        Name: 'Bill Gates',
        Phone : '989-394-938',
        Email: 'gates@outlook.com',
        DateOfBirth: '02-18-1970',
        Occupation: 'Microsoft CEO'
      },
      {
        Name: 'Elon Musk',
        Phone : '000-000-000',
        Email: 'musk@gmail.com',
        DateOfBirth: '05-22-1980',
        Occupation: 'Twitter CEO'
      },
      {
        Name: 'Jeff Bezos',
        Phone : '123-456-789',
        Email: 'bezos@gmail.com',
        DateOfBirth: '01-05-1978',
        Occupation: 'Amazon CEO'
      }
    ]
  };
}

  render() {
    return (
      <div>
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

export default App;
