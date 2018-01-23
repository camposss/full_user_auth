import React from 'react';
import {connect } from 'react-redux';
import {getQuote} from "../actions/";


const MovieQuotes = props => {

    props.getQuote();
    return (
        <div>
            <h1 className='center-align'>Check out these Movie Quotes</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem consequatur debitis, exercitationem magni nisi?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, necessitatibus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ut.</p>
        </div>
    )
}

export default connect(null, {getQuote} )(MovieQuotes);
