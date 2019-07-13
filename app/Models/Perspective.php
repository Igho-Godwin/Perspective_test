<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;



class Perspective extends Model
{  
   // use HasApiTokens, Notifiable;
    
    protected $table = 'perspective';
    protected $fillable = ['Question_1','Question_2','Question_3','Question_4','Question_5','Question_6','Question_7','Question_8','Question_9','Question_10','email','MBTI'];
    
    public function addPerspective($data)
    {
        
       Perspective::create($data);
        
      
        
    }
    
    
}
