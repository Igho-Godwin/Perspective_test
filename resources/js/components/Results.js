import React, { Component } from 'react'

// This Class Shows The Result Of the test

class Results extends Component {
    
    constructor(props) {
        super(props);

        // reset login status

        this.state = {
            result: ''
           
        };

        
    }
    
       handleUrlQuery(){
        var query = new URLSearchParams(this.props.location.search);
        var result = query.get('result');
        this.setState({result:result});
        if(result.charAt(0) == 'I')
        {
            $('.introversion').addClass('status-bar-active');
        }
        else{
            $('.extraversion').addClass('status-bar-active');
        }
        
        if(result.charAt(1) == 'S')
        {
            $('.sensing').addClass('status-bar-active');
        }
        else{
            $('.intuition').addClass('status-bar-active');
        }
        
        if(result.charAt(2) == 'T')
        {
            $('.thinking').addClass('status-bar-active');
        }
        else{
            $('.feeling').addClass('status-bar-active');
        }
        
        if(result.charAt(3) == 'J')
        {
            $('.judging').addClass('status-bar-active');
        }
        else{
            $('.perceiving').addClass('status-bar-active');
        }
        
    }
    
    componentDidMount(){
        this.handleUrlQuery();
    }
    render () {
        return (
         
            <div className='row padding-top-30' >
               <div className='col-sm-12'>
                  <div className='display-inline-block grey-border-solid border-radius-4 result-box-padding  '>
                     <div className='row'>
                        <div className='col-sm-6 padding-top-30'>
                            <div className='font-20 bold-text color-purple'>
                                Your Perspective
                            </div>
                            <div  className=''>
                                Your Perspective Type is {this.state.result}
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            
                            <div>
                                <span className='padding-right-20'>
                                    Introversion (I)
                                </span>
                                
                                <div className='width-50 display-inline-block vertical-align-middle'>
                                    
                                    <div className='display-inline-block status-bar status-bar-inner border-radius-left introversion'>
                                    </div>
                                    <div className='display-inline-block status-bar status-bar-inner  border-radius-right extraversion'>
                                    </div>
                                    
                                </div>
                                &nbsp;&nbsp;
                                <span className='padding-left-10'>
                                    Extraversion (E)
                                </span>
                                 
                             </div>
                             <div className='padding-top-10'>
                                <span className='padding-right-45'>
                                    Sensing (S)
                                </span>
                          
                                <div className='width-50 display-inline-block vertical-align-middle'>
                                    
                                    <div className='display-inline-block status-bar status-bar-inner border-radius-left sensing'>
                                    </div>
                                    <div className='display-inline-block status-bar status-bar-inner  border-radius-right intuition'>
                                    </div>
                                    
                                </div>
                                
                                <span className='padding-left-20'>
                                    Intuition (N)
                                </span>
                                 
                             </div>
                            <div className='padding-top-10'>
                                <span className='padding-right-40'>
                                    Thinking (T)
                                </span>
                               
                                <div className='width-50 display-inline-block vertical-align-middle'>
                                    
                                    <div className='display-inline-block status-bar status-bar-inner border-radius-left thinking'>
                                    </div>
                                    <div className='display-inline-block status-bar status-bar-inner  border-radius-right feeling'>
                                    </div>
                                    
                                </div>
                                
                                <span className='padding-left-20'>
                                    Feeling (F)
                                </span>
                                 
                             </div>
        
                             <div className='padding-top-10'>
                                <span className='padding-right-46'>
                                    Judging (J)
                                </span>
                               
                                <div className='width-50 display-inline-block vertical-align-middle'>
                                    
                                    <div className='display-inline-block status-bar status-bar-inner border-radius-left judging'>
                                    </div>
                                    <div className='display-inline-block status-bar status-bar-inner  border-radius-right perceiving'>
                                    </div>
                                    
                                </div>
                                
                                <span className='padding-left-20'>
                                    Perceiving (P)
                                </span>
                                 
                             </div>
                       
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        
        )
    }
}

    


export default Results;

