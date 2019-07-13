import React, { Component } from 'react'

// This class Holds Email Form Inputs

class EmailForm extends Component {
    render () {
        return (
         
            <div className='display-inline-block grey-border-solid border-radius-4 box-padding '>
               <div>Your Email</div>
               <div >
                    <input type='text' className='width-50 display-inline-block ' name='email' id='email' placeholder='you@example.com' />
               </div>
            </div>
        
        )
    }
}

    


export default EmailForm;

