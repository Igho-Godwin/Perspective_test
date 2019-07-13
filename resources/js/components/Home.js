import React, { Component } from 'react';
import Questions from './Questions';
import EmailForm from './EmailForm';

// This Class Loads The Questions

class Home extends Component {
    
    //Function Submits Answer
    
    handleClick(){
       
       var url = 'api/addAnswer';
       var data = new FormData(document.getElementById('qtn-form'));
        
       axios.post(url, data)
           .then(function (response) {
              console.log(response.data);
              $('.fa-spin').removeClass('hide');
              //console.log($('.fa-spin'));
              if(response.data.error)
              {
                    var obj = response.data.error;
                    var error_data='';
          
                    if(obj.Question_1){
                         error_data += obj.Question_1+'<br>';
                    }
                  
                    if(obj.Question_2){
                         error_data += obj.Question_2+'<br>';
                    }
                  
                    if(obj.Question_3){
                         error_data += obj.Question_3+'<br>';
                    }
                  
                    if(obj.Question_4){
                         error_data += obj.Question_4+'<br>';
                    }
                  
                    if(obj.Question_5){
                         error_data += obj.Question_5+'<br>';
                    }
                  
                    if(obj.Question_6){
                         error_data += obj.Question_6+'<br>';
                    }
                  
                    if(obj.Question_7){
                         error_data += obj.Question_7+'<br>';
                    }
                  
                    if(obj.Question_8){
                         error_data += obj.Question_8+'<br>';
                    }
                  
                    if(obj.Question_9){
                         error_data += obj.Question_9+'<br>';
                    }
                  
                    if(obj.Question_10){
                         error_data += obj.Question_10+'<br>';
                    }
                  
                    if(obj.email){
                         error_data += obj.email+'<br>';
                    }
                  
                    $('.fa-spin').addClass('hide');
          
                    
                    $('#error-display').html('<br>'+error_data);
              }
           else{
                window.open('/Results?result='+response.data.results,'_self');
           }
           
       })
       .catch(function (error) {
            console.log(error);
       });
    
    }
    
    render () {
        return (
          
            <div className='row padding-top-50'>
                <div className='col-sm-12'>
                   <div className='bold-text color-purple'>
                      Discover Your Perspective
                   </div>
                   <div className='padding-top-5'>
                      Complete the 7 min test and get a detailed report of your lenses on the world
                   </div>
                   <div id='error-display' className='text-center text-color-red'></div>
                   <div className='text-center padding-top-30'>
                       <form id='qtn-form' method='post' action='submitQuestion' >
                          <Questions name='Question_1' question='You find it takes effort to introduce yourself to other people.' />
            
                          <Questions name='Question_2' question='You consider yourself more practical than creative.' />
            
                          <Questions name='Question_3' question='Winning a debate matters less to you than making sure no one gets upset. ' />
            
                          <Questions name='Question_4' question='You get energized going to social events that involve many interactions.' />
            
                          <Questions name='Question_5' question='You often spend time exploring unrealistic and impractical yet intriguing ideas.' />
            
                          <Questions name='Question_6' question='Deadlines seem to you to be of relative rather than absolute importance.' />
            
                          <Questions name='Question_7' question='Logic is usually more important than heart when it comes to making important decisions.' />
            
                          <Questions name='Question_8' question='Your home and work environments are quite tidy.' />
            
                          <Questions name='Question_9' question='You do not mind being at the center of attention.' />
            
                          <Questions name='Question_10' question='Keeping your options open is more important than having a to-do list.' />
            
                          <EmailForm />
            
                          <input type='text' className='hide' name='_token' id='_token1' />
            
                          <div className='margin-top-50'>
                             <button type='button' onClick={this.handleClick}  className='btn background-color-blue color-white'>Save & Continue <i className="fa fa-spinner fa-spin fa-3x fa-fw hide"></i>
<span className="sr-only">Loading...</span></button>
                          </div>
                       </form>
            
                   </div>
                </div>
            </div>
            
          
        )
    }
}

    

export default Home;

