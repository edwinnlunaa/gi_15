import React from 'react';

class BasicInfo extends React.Component {
  render() {
    const { Name, Phone, Email, DateOfBirth, Occupation } = this.props.person;

    return (
        <div>
          <h1>Name: {Name}</h1>
          <p>Phone: {Phone}</p>
          <p>Email: {Email}</p>
          <p>Date of Birth: {DateOfBirth}</p>
          <p>Occupation: {Occupation}</p>
        </div>
      );
    }
  }

  export default BasicInfo;