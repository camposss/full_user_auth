import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';


class SignUp extends Component {

    renderInput({input, type, placeholder, meta: {error, touched}}){
        return (
            <div className="input-field">
                <input {...input} type={type} placeholder={placeholder} />
                <p className='red-text'>{touched && error }</p>
            </div>
        )
    }
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
                        <div className='card deep-purple darken-1'>
                            <div className="card-content ">
                                <form onSubmit={handleSubmit(this.handleSignUp.bind(this))}>
                                    <Field name='email' type='text' placeholder='Enter email address' component={this.renderInput}/>
                                    <Field name='password' type='password' placeholder='Enter password' component={this.renderInput}/>
                                    <Field name='confirmPassword' type='password' placeholder='Confirm Password' component={this.renderInput}></Field>
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
SignUp= reduxForm({
  form: 'sign-up'
})(SignUp);

export default SignUp;