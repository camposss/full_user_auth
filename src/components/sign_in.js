import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import { renderInput } from "../helpers";
import {connect} from 'react-redux';
import {signIn} from "../actions/";

class SignIn extends Component {

    handleSignIn(values){
        console.log('values are: ', values);
        this.props.signIn(values);
    }
    render(){
        const {handleSubmit, authError}= this.props;
        return(
            <div>
                <h1 className="center-align">Sign In</h1>
                <div className='row'>
                    <div className="col s8 offset-s2">
                        <div className='card'>
                            <div className="card-content ">
                                <form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
                                    <Field name='email' type='text' placeholder='Enter email address' component={renderInput}/>
                                    <Field name='password' type='password' placeholder='Enter password' component={renderInput}/>
                                    <p className='center-align red-text'>{authError}</p>
                                    <div className='right-align'>
                                        <button className='btn green darken-1'>Sign In</button>
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
SignIn= reduxForm({
    form: 'sign-in',
    validate: validate
})(SignIn);

function mapStateToProps(state){
    return {
        authError: state.user.error
    }
}

export default connect(mapStateToProps, {signIn})(SignIn);