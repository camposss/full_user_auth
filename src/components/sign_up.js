import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import { renderInput} from "../helpers";

class SignUp extends Component {

    handleSignUp(values){
        console.log('values are: ', values);
    }
    render(){
        const {handleSubmit}= this.props;
        return(
            <div>
                <h1 className="center-align">Sign Up</h1>
                <div className='row'>
                    <div className="col s8 offset-s2">
                        <div className='card'>
                            <div className="card-content ">
                                <form onSubmit={handleSubmit(this.handleSignUp.bind(this))}>
                                    <Field name='email' type='text' placeholder='Enter email address' component={renderInput}/>
                                    <Field name='password' type='password' placeholder='Enter password' component={renderInput}/>
                                    <Field name='confirmPassword' type='password' placeholder='Confirm Password' component={renderInput}/>
                                    <div className='right-align'>
                                        <button className='btn green darken-1'>Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function validate(values){
    const error= {};

    if(!values.email){
        error.email= "Please enter an email"
    }
    if(!values.password){
        error.password= "Please enter a password"
    }
    if(values.password!==values.confirmPassword){
        error.confirmPassword = 'Passwords do not match!!!!'
    }
    return error;
}
SignUp= reduxForm({
  form: 'sign-up',
  validate: validate
})(SignUp);



export default SignUp;