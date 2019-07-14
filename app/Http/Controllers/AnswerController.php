<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Validator;
use Request;
use App\Models\Perspective;

class AnswerController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    
    // Adds a Question Answer
    
    public function addAnswer()
    {
       
            
            $value = Request::all();
        
            $rules = [
            
                'Question_1' =>  'required|numeric|max:7|min:1',
                'Question_2' =>  'required|numeric|max:7|min:1',
                'Question_3' =>  'required|numeric|max:7|min:1',
                'Question_4' =>  'required|numeric|max:7|min:1',
                'Question_6' =>  'required|numeric|max:7|min:1',
                'Question_7' =>  'required|numeric|max:7|min:1',
                'Question_8' =>  'required|numeric|max:7|min:1',
                'Question_9' =>  'required|numeric|max:7|min:1',
                'Question_10' =>  'required|numeric|max:7|min:1',
                'email' => 'required|max:100|unique:perspective,email|email',
            
            ];
        
        
            $validator = Validator::make($value,$rules);
        
            if($validator->fails()){
            
                return response()->json(['error'=>$validator->errors(),'status'=>'failed'],400);   
            }
            else{
                
                foreach($value as $key=>$val)
                {
                    $data[$key] = $val;
                }
                $results = $this->correlateResults($data);
                $data['MBTI'] = $results;
                
                try{
                    
                    $obj = new Perspective();
                    $obj->addPerspective($data);
                }
                catch(\Exception $e)
                {
                    return $e->getMessage();
                }
                
                return response()->json(['results'=>$results]);
                
               
            }
       
    }
    
    // Get results for EI
    public function getEIResults($data)
    {
        $result = '';
        
        if($data['Question_1'] == 1 and $data['Question_4'] == 1 and $data['Question_9'] == 1  )
        {
           $result = 'I'; 
        }
        else if($data['Question_1'] >= ($data['Question_4'] + $data['Question_9']) )
        {
            $result = 'I'; 
        }
        else if($data['Question_1'] < ($data['Question_4'] + $data['Question_9']) ){
            $result = 'E'; 
        }
        
        return $result;
        
    }
    
    // Get results for SN
    public function getSNResults($data)
    {
        $result = '';
        
        if($data['Question_2'] == 1 and $data['Question_5'] == 1  )
        {
           $result = 'S'; 
        }
        else if($data['Question_2'] >= $data['Question_5']  )
        {
            $result = 'S'; 
        }
        else if($data['Question_2'] < $data['Question_5']  ){
            $result = 'N'; 
        }
        
        return $result;
        
    }
    
    // Get results for TF
    public function getTFResults($data)
    {
        $result = '';
        
        if($data['Question_7'] == 1 and $data['Question_3'] == 1  )
        {
           $result = 'T'; 
        }
        else if($data['Question_7'] >= $data['Question_3']  )
        {
            $result = 'T'; 
        }
        else if($data['Question_7'] < $data['Question_3']  ){
            $result = 'F'; 
        }
        
        return $result;
        
    }
    
     // Get results for JP
    public function getJPResults($data)
    {
        $result = '';
        
        if($data['Question_8'] == 1 and $data['Question_6'] == 1 and $data['Question_10'] == 1  )
        {
           $result = 'J'; 
        }
        else if(($data['Question_6'] == 4 and $data['Question_10'] == 4) or  ($data['Question_6'] +$data['Question_10'] == 4))
        {
           $result = 'J'; 
        }
        else if(($data['Question_6'] + $data['Question_10'])  >=  $data['Question_8'] )
        {
            $result = 'P'; 
        }
        else if(($data['Question_6'] + $data['Question_10'])  <  $data['Question_8'] ){
            $result = 'J'; 
        }
        
        return $result;
        
    }
    
    // Correlates Final Result
    
    public function correlateResults($data)
    {
        $final_result = '';
        
        $final_result.= $this->getEIResults($data);
        
        $final_result.= $this->getSNResults($data);
        
        $final_result.= $this->getTFResults($data);
        
        $final_result.= $this->getJPResults($data);
             
        return $final_result;
        
    }
}
