import React, { Component } from 'react';
import '../../styles/styles.scss';
import Buttons from '../forms/Button';
import { auth, signInWithGoogle } from './../../firebase/utils';

import FormInput from './../forms/FormInput'
import Button from './../forms/Button';

const initialState = {
  email: '',
  password: ''
}

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }

    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const {email, password} = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({
        ...initialState
      })

    } catch(err) {
      //console.log(err)
    }
  };
  

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
  render() {
    const {email, password} = this.state
    return (
      <div className="signin">
        <div className="wrap">
          <h2>Login</h2>
          <div className="formWrap">
            <form onSubmit={this.handleSubmit}>
              
              <FormInput 
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                handleChange={this.handleChange}
              
              />

              <FormInput 
                type="password"
                name="password"
                value={password}
                placeholder="password"
                handleChange={this.handleChange}
              
              />

              <Button type="submit">
                Sign in
            </Button>
              <div className="socialSignin">
                <div className="row">
                  <Buttons onClick={signInWithGoogle}>
                    Sign in with Google
                  </Buttons>
                </div>
              </div>

              
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
