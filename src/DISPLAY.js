
import axios from "axios";
import React, { Component } from "react";


class DISPLAY extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        
      <table border={3}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Phone</th>
          <th>City</th>
          
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.patientid}>
            <td>{user.patientid}</td>
            <td>{user.patientname}</td>
            <td>{user.phno}</td>
            <td>{user.city}</td>
           
          </tr>
        ))}
      </tbody>
    </table>
    );
  }}
  
export default DISPLAY;