import React, {Component} from 'react';
import {connect } from 'react-redux';
import {getQuote} from "../actions/";


class MovieQuotes extends Component {
    componentDidMount(){
        if(this.props.auth){
            this.props.getQuote();
        }
    }
    render(){
        return (
            <div>
                <h1 className='center-align'>Check out these Movie Quotes</h1>
                <h3>{this.props.quote}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem consequatur debitis, exercitationem magni nisi?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, necessitatibus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, ut.</p>
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        auth: state.user.auth,
        quote: state.movie.quote
    }
}
export default connect(mapStateToProps, {getQuote} )(MovieQuotes);
