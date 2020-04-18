import React from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss';

import { signInWithGoogle} from '../../firebase/firebase.utils'

class Signin extends React.Component {
    constructor(){
        super();

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password: ''})
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value})
    }
    render() {
          const {email,password}=this.state;
        return(
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
              <FormInput
              type='email'
              name='email'
              value={email}
              onChange={this.handleChange}
              label='Email'
              required
              />
              <FormInput
              type='password'
              name='password'
              value={password}
              onChange={this.handleChange}
              label='Password'
              required
              />
                <div className='buttons'>
                <CustomButton type='submit'> Sign in</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn> SIGN IN WITH GOOGLE </CustomButton>
                </div>
            </form>

            </div>
        );
    }
}

export default Signin;