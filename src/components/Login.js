// Login.jsx
import React, { Component } from 'react';
import Cookie from "js-cookie"


export default class Login extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password: ''
    };
  }  
  
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }
  
 onSubmit = (event) => {
  event.preventDefault();
  fetch('/api/authenticate', {
    method: 'POST',
    body: JSON.stringify(this.state),
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (res.status === 200) {
      const token =  Cookie.get("token") ? Cookie.get("token") : null;
      console.log("asad" + res.headers);
      //to set a cookie
      Cookie.set("token", token);
      this.props.history.push('/');
    } else {
      const error = new Error(res.error);
      throw error;
    }
  })
  .catch(err => {
    console.error(err);
    alert('Error logging in please try again');
  });
}

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login Below!</h1>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
       <input type="submit" value="Submit"/>
      </form>
    );
  }
}