import React, { Component } from 'react';
import PropTypes from 'prop-types';

// This class Holds Question Templates

class Questions extends Component {
    render () {
        return (
          
            <div className='display-inline-block grey-border-solid border-radius-4 box-padding '>
               <div>
                    {this.props.question}
               </div>
               <div  className='display-inline-block  padding-top-5 '>
                    <span className='vertical-align-top font-13 text-color-red'>Disagree</span>
                   &nbsp;&nbsp;
                    <label>
                         <input id={this.props.name} name={this.props.name} type="radio" value='1' />
                         <span></span>
                    </label>
                    <label>
                      <input id={this.props.name} name={this.props.name} type="radio" value='2'  />
                      <span></span>
                    </label>
                    <label>
                      <input id={this.props.name} name={this.props.name} type="radio" value='3'  />
                      <span></span>
                    </label>
                    <label>
                      <input id={this.props.name} name={this.props.name} type="radio" value='4'  />
                      <span></span>
                    </label>
                    <label>
                      <input id={this.props.name} name={this.props.name} type="radio" value='5'  />
                      <span></span>
                    </label>
                    <label>
                      <input id={this.props.name} name={this.props.name} type="radio" value='6'  />
                      <span></span>
                    </label>
                    <label>
                      <input id={this.props.name} name={this.props.name} type="radio" value='7'  />
                      <span></span>
                    </label>
                    <span className='vertical-align-top font-13 text-color-green'>Agree</span>
               </div>
            </div>
            
            
          
        )
    }
    
    
}

// Checks Prop Values
Questions.propTypes = {
  name: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired
};
    

export default Questions;

